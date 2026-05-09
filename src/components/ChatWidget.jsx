import { useState } from "react";

// Import your chatAPI service
import { sendMessage } from "../services/chatAPI";

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your Madhesh travel assistant. Ask me about hotels, temples, best time to visit, or local food!",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle send button click
  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userQuestion = inputText;

    // Add user message to list
    setMessages((prev) => [...prev, { text: userQuestion, sender: "user" }]);
    setInputText("");
    setIsLoading(true);

    try {
      // Call your Python backend via chatAPI.js
      const response = await sendMessage(userQuestion);

      // Add bot response to list
      setMessages((prev) => [
        ...prev,
        { text: response.answer, sender: "bot" },
      ]);
    } catch (error) {
      // Show error message if API fails
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting. Please try again.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-4xl p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-125 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-bold">Travel Assistant</h3>
                <p className="text-xs opacity-80">
                  Ask me anything about Madhesh!
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[100%] p-3 rounded-2xl ${msg.sender === "user" ? "bg-emerald-500 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mx-0.5 animate-bounce"></span>
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mx-0.5 animate-bounce delay-100"></span>
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mx-0.5 animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me something..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
