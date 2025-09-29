
import { useState, useCallback } from 'react';
import { Message } from '../types';
import { getInitialGeminiResponse, streamFinalGeminiResponse } from '../services/geminiService';
import { products, orders } from '../data/mockData';

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 'initial', text: "Hello! Welcome to ShopLane. I'm your personal stylist. How can I help you find the perfect look today?", sender: 'bot' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);

    const handleToolCall = (toolCall: any) => {
        const { tool, parameters } = toolCall;
        let toolResponse = '';

        switch (tool) {
            case 'findProducts':
                const query = parameters.query.toLowerCase();
                const queryWords = query.split(/\s+/).filter(w => w.length > 2);
                const matchingProducts = products.filter(p => {
                    const name = p.name.toLowerCase();
                    const category = p.category.toLowerCase();
                    const description = p.description.toLowerCase();
                    if (name.includes(query) || category.includes(query) || description.includes(query)) {
                        return true;
                    }
                    return queryWords.some(word => name.includes(word) || category.includes(word) || description.includes(word));
                });
                toolResponse = JSON.stringify(matchingProducts.map(p => p.name));
                break;
            
            case 'getProductInfo':
            case 'checkStock':
                const product = products.find(p => p.name.toLowerCase().includes(parameters.productName.toLowerCase()));
                if (product) {
                    if (tool === 'checkStock') {
                        toolResponse = JSON.stringify({ name: product.name, stock: product.stock });
                    } else {
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const { id, bestsellerRank, stock, ...productDetails } = product;
                        
                        const relatedProductNames = product.relatedProducts
                            ?.map(relatedId => products.find(p => p.id === relatedId)?.name)
                            .filter((name): name is string => !!name);

                        const responseData = { ...productDetails, relatedProducts: relatedProductNames };
                        toolResponse = JSON.stringify(responseData);
                    }
                } else {
                    toolResponse = `Product '${parameters.productName}' not found.`;
                }
                break;
            
            case 'findBestSellers':
                const category = parameters.category?.toLowerCase();
                let bestSellers = products
                    .filter(p => p.bestsellerRank !== undefined)
                    .sort((a, b) => (a.bestsellerRank ?? Infinity) - (b.bestsellerRank ?? Infinity));
                if (category) {
                    bestSellers = bestSellers.filter(p => p.category.toLowerCase() === category);
                }
                toolResponse = JSON.stringify(bestSellers.slice(0, parameters.count).map(p => p.name));
                break;

            case 'trackOrder':
                const order = orders.find(o => o.id.toLowerCase() === parameters.orderId.toLowerCase());
                if (order) {
                    toolResponse = JSON.stringify(order);
                } else {
                    toolResponse = `Order with ID '${parameters.orderId}' not found. Please double-check the ID.`;
                }
                break;
            
            default:
                toolResponse = `Unknown tool: ${tool}`;
        }
        return toolResponse;
    };

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = { id: Date.now().toString(), text, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        if (showSuggestions) {
            setShowSuggestions(false);
        }
        setIsLoading(true);

        try {
            const firstResponseText = await getInitialGeminiResponse(text);
            let finalResponseStream;

            try {
                const toolCall = JSON.parse(firstResponseText);
                if (toolCall.tool && toolCall.parameters) {
                    const toolResult = handleToolCall(toolCall);
                    const finalPrompt = `Here is the data you requested: ${toolResult}. Please formulate a friendly, natural language response for the user based on this data.`;
                    finalResponseStream = await streamFinalGeminiResponse(finalPrompt);
                } else {
                    // Not a valid tool call, treat as direct answer by creating a fake stream
                    async function* fakeStream() { yield { text: firstResponseText }; }
                    finalResponseStream = fakeStream();
                }
            } catch (e) {
                // Not a JSON object, so it's a direct answer. Create a fake stream.
                async function* fakeStream() { yield { text: firstResponseText }; }
                finalResponseStream = fakeStream();
            }

            setIsLoading(false);
            const botMessageId = (Date.now() + 1).toString();
            const placeholderMessage: Message = { id: botMessageId, text: '', sender: 'bot' };
            setMessages(prev => [...prev, placeholderMessage]);

            for await (const chunk of finalResponseStream) {
                const chunkText = chunk.text;
                if (chunkText) {
                    setMessages(prev =>
                        prev.map(msg =>
                            msg.id === botMessageId
                                ? { ...msg, text: msg.text + chunkText }
                                : msg
                        )
                    );
                }
            }

        } catch (error) {
            console.error("Failed to get response:", error);
            const errorMessage: Message = { id: (Date.now() + 1).toString(), text: "Sorry, something went wrong on my end.", sender: 'bot' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [showSuggestions]);

    return { messages, isLoading, sendMessage, showSuggestions };
};
