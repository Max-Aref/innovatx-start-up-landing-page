import React, { useState } from "react";
import { RiRobot2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const FloatingAiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [inputText, setInputText] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: "user", text: inputText }];
    setMessages(newMessages);
    setInputText("");

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
    }, 1000);
  };

  const getBotResponse = (userMessage) => {
    const responses = [
      "Thanks for your message! Our team will get back to you soon.",
      "I'm here to help! What specific service are you interested in?",
      "Great question! Let me connect you with the right information.",
      "I'd be happy to assist you with that. Can you tell me more?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <>
      {/* Chat Dialog Box */}
      {isOpen && (
        <div className='fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col'>
          {/* Header */}
          <div className='bg-[#79f0da] text-black p-4 rounded-t-lg flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center'>
                <span className='text-[#79f0da] text-sm font-bold'>AI</span>
              </div>
              <span className='font-medium'>InnovatX Assistant</span>
            </div>
            <button
              onClick={toggleChat}
              className='text-black hover:text-gray-700 text-xl font-bold'
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div className='flex-1 p-4 overflow-y-auto space-y-3'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.type === "user"
                      ? "bg-[#79f0da] text-black"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSendMessage}
            className='p-4 border-t border-gray-200'
          >
            <div className='flex gap-2'>
              <input
                type='text'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder='Type your message...'
                className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#79f0da] text-sm'
              />
              <button
                type='submit'
                className='bg-[#79f0da] text-black px-4 py-2 rounded-lg hover:bg-[#6de0ca] transition-colors text-sm font-medium'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Icon */}
      <button
        onClick={toggleChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='fixed bottom-6 right-6 w-14 h-14 bg-[#79f0da] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50 flex items-center justify-center'
      >
        {isOpen ? (
          // Close icon from react-icons
          <MdClose className='w-6 h-6 text-black' />
        ) : (
          // Robot icon from react-icons
          <RiRobot2Fill className='w-8 h-8 text-black' />
        )}
      </button>

      {/* Tooltip - Shows on hover */}
      {!isOpen && isHovered && (
        <div className='fixed bottom-6 right-20 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-50 animate-fade-in'>
          AI Assistant
          <div className='absolute top-1/2 -right-1 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black border-t-2 border-b-2 border-t-transparent border-b-transparent'></div>
        </div>
      )}
    </>
  );
};

export default FloatingAiAssistant;
