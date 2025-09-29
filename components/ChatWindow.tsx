
import React from 'react';
import { useChat } from '../hooks/useChat';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import { BotIcon } from './icons/BotIcon';
import SuggestedPrompts from './SuggestedPrompts';

const ChatWindow: React.FC = () => {
  const { messages, isLoading, sendMessage, showSuggestions } = useChat();

  return (
    <div className="flex flex-col h-[90vh] w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <header className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="p-2 bg-pink-500 rounded-full">
            <BotIcon className="w-6 h-6 text-white" />
        </div>
        <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">ShopLane Assistant</h1>
            <p className="text-sm text-green-500 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Online
            </p>
        </div>
      </header>
      <MessageList messages={messages} />
      {isLoading && <TypingIndicator />}
      {showSuggestions && <SuggestedPrompts onSendMessage={sendMessage} />}
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatWindow;
