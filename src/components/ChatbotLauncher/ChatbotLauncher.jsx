import { useState } from 'react';

import Chatbot from '../Chatbot/Chatbot';

import './ChatbotLauncher.css';

function ChatbotLauncher() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <>
      {isOpen && (
        <div className="chatbot-launcher__panel">
          <div className="chatbot-launcher__panel-header">
            <h2>Local Markets Assistant</h2>

            <button
              type="button"
              onClick={toggleChatbot}
              aria-label="Close chatbot"
            >
              <i
                className="bi bi-x-lg"
                aria-hidden="true"
              ></i>
            </button>
          </div>

          <Chatbot />
        </div>
      )}

      <button
        type="button"
        className="chatbot-launcher__button"
        onClick={toggleChatbot}
        aria-label={
          isOpen
            ? 'Close chatbot'
            : 'Open chatbot'
        }
        aria-expanded={isOpen}
      >
        <i
          className={
            isOpen
              ? 'bi bi-x-lg'
              : 'bi bi-chat-dots'
          }
          aria-hidden="true"
        ></i>
      </button>
    </>
  );
}

export default ChatbotLauncher;