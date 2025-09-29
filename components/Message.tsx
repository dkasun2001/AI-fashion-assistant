
import React from 'react';
import { Message as MessageType } from '../types';
import { BotIcon } from './icons/BotIcon';
import { UserIcon } from './icons/UserIcon';

interface MessageProps {
  message: MessageType;
}

const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

const FormattedMessage: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n');
    const content: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = (key: string | number) => {
        if (listItems.length > 0) {
            content.push(
                <ul key={`ul-${key}`} className="list-disc pl-5 my-2 space-y-1">
                    {listItems.map((item, idx) => <li key={idx}>{formatBold(item)}</li>)}
                </ul>
            );
            listItems = [];
        }
    };

    lines.forEach((line, i) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
            listItems.push(trimmedLine.substring(2));
        } else {
            flushList(i);
            if (trimmedLine) {
                content.push(<p key={i} className="my-1">{formatBold(trimmedLine)}</p>);
            }
        }
    });

    flushList('end');
    
    return <>{content.length > 0 ? content : <p>{formatBold(text)}</p>}</>;
};


const Message: React.FC<MessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  const messageContainerClasses = `flex items-start gap-3 ${isBot ? '' : 'flex-row-reverse'}`;
  const messageBubbleClasses = `max-w-md p-3 rounded-lg shadow-md prose prose-sm ${
    isBot
      ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
      : 'bg-pink-500 text-white rounded-tr-none'
  }`;

  const Icon = isBot ? BotIcon : UserIcon;
  const iconContainerClasses = `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
      isBot ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-300 dark:bg-gray-600'
  }`

  return (
    <div className={messageContainerClasses}>
       <div className={iconContainerClasses}>
            <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300"/>
       </div>
      <div className={messageBubbleClasses}>
        <FormattedMessage text={message.text} />
      </div>
    </div>
  );
};

export default Message;
