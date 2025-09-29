
import React from 'react';

interface SuggestedPromptsProps {
  onSendMessage: (message: string) => void;
}

const prompts = [
  "What are your bestsellers?",
  "Show me some summer dresses",
  "Do you have any jackets?",
  "Help me with a gift idea"
];

const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ onSendMessage }) => {
  return (
    <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 justify-center">
        {prompts.map(prompt => (
          <button
            key={prompt}
            onClick={() => onSendMessage(prompt)}
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors shadow-sm border border-gray-200 dark:border-gray-600"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPrompts;
