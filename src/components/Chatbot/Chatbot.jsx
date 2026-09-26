import { useState } from 'react';

import './Chatbot.css';

const quickQuestions = [
  'What can I do here?',
  'How do I find nearby markets?',
  'How do I check if a market is open?',
  'How do I get directions?'
];

function getBotResponse(message) {
  const question = message.toLowerCase();

  if (
    question.includes('what can i do') ||
    question.includes('what can you do') ||
    question.includes('help')
  ) {
    return 'You can explore local markets, filter markets by area, day, and produce, check market opening status, find nearby markets, and open market locations in Google Maps.';
  }

  if (
    question.includes('nearby') ||
    question.includes('near me') ||
    question.includes('location')
  ) {
    return 'Go to the Market Directory and select "Use my location". If you allow location access, the markets will be sorted by their distance from you.';
  }

  if (
    question.includes('open') ||
    question.includes('closing') ||
    question.includes('status')
  ) {
    return 'Each market has an opening status based on its scheduled operating hours. Look for the Open or Closed indicator on the market card.';
  }

  if (
    question.includes('direction') ||
    question.includes('google maps') ||
    question.includes('map')
  ) {
    return 'Open a market in the Market Directory and select "View on Google Maps" to open its location in Google Maps.';
  }

  if (
    question.includes('produce') ||
    question.includes('fruit') ||
    question.includes('vegetable')
  ) {
    return 'You can filter the Market Directory by produce to find markets that offer specific fruits, vegetables, herbs, and other local produce.';
  }

  if (
    question.includes('contact') ||
    question.includes('message')
  ) {
    return 'You can reach us through the Contact Us page. Fill out the form with your name, email, subject, and message.';
  }

  if (
    question.includes('about') ||
    question.includes('local markets')
  ) {
    return 'Local Markets helps visitors discover fresh produce markets, explore market information, find nearby locations, check opening status, and get directions.';
  }

  return 'I can help you explore local markets. Try asking about nearby markets, opening hours, produce, directions, or how the Market Directory works.';
}

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi! How can I help you explore local markets?'
    }
  ]);

  const [input, setInput] = useState('');

  const sendMessage = (messageText) => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: trimmedMessage
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: 'bot',
      text: getBotResponse(trimmedMessage)
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      botMessage
    ]);

    setInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    sendMessage(input);
  };

  const handleQuickQuestion = (question) => {
    sendMessage(question);
  };

  return (
    <section
      className="chatbot"
      aria-label="Local Markets chatbot"
    >
      <header className="chatbot__header">
        <div className="chatbot__header-icon">
          <i
            className="bi bi-chat-dots"
            aria-hidden="true"
          ></i>
        </div>

        <div>
          <h1>Local Markets Assistant</h1>

          <span>
            Here to help you explore
          </span>
        </div>
      </header>

      <div
        className="chatbot__messages"
        aria-live="polite"
      >
        {messages.map((message) => (
          <div
            className={`chatbot__message chatbot__message--${message.sender}`}
            key={message.id}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <div className="chatbot__quick-questions">
        {quickQuestions.map((question) => (
          <button
            type="button"
            key={question}
            onClick={() => handleQuickQuestion(question)}
          >
            {question}
          </button>
        ))}
      </div>

      <form
        className="chatbot__form"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="chatbot-message"
          className="visually-hidden"
        >
          Ask the Local Markets Assistant
        </label>

        <input
          id="chatbot-message"
          type="text"
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          placeholder="Ask a question..."
          autoComplete="off"
        />

        <button
          type="submit"
          aria-label="Send message"
        >
          <i
            className="bi bi-send"
            aria-hidden="true"
          ></i>
        </button>
      </form>
    </section>
  );
}

export default Chatbot;