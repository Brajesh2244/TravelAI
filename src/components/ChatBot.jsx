import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendMessage } from "../services/geminiService";

const ChatBot = ({ context = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI travel assistant. Ask me anything about travel destinations, tips, or planning your trip!",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Send Message
  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setInput("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setLoading(true);

    try {
      const response = await sendMessage(userMessage, context);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
        },
      ]);
    } catch (error) {
      console.error("ChatBot Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't process your request. Please check your internet connection and Gemini API configuration.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Enter key to send
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Clear chat
  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hello! I'm your AI travel assistant. Ask me anything about travel destinations, tips, or planning your trip!",
      },
    ]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center hover:-translate-y-1"
        style={{
          zIndex: 9999,
          backgroundColor: "var(--accent, #2563eb)",
          color: "#07120f",
        }}
        aria-label="Open Travel Assistant"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[540px] rounded-3xl shadow-2xl border flex flex-col overflow-hidden"
            style={{
              zIndex: 9998,
              backgroundColor: "var(--surface-2, #1f2937)",
              borderColor: "var(--surface-3, #374151)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{
                borderColor: "var(--surface-3, #374151)",
              }}
            >
              <div className="flex items-center gap-2">
                <MessageCircle
                  size={22}
                  style={{
                    color: "var(--accent, #2563eb)",
                  }}
                />

                <div>
                  <h3 className="font-semibold text-white">Travel Assistant</h3>

                  <p className="text-xs text-gray-400">
                    AI-powered travel help
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={clearChat}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-red-400 transition-colors"
              >
                <Trash2 size={15} />
                Clear
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className="max-w-[80%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap"
                    style={
                      message.role === "user"
                        ? {
                            backgroundColor: "var(--accent, #2563eb)",
                            color: "#ffffff",
                          }
                        : {
                            backgroundColor: "var(--surface-3, #374151)",
                            color: "#e5e7eb",
                          }
                    }
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {/* Loading */}
              {loading && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-2xl"
                    style={{
                      backgroundColor: "var(--surface-3, #374151)",
                    }}
                  >
                    <Loader2
                      size={20}
                      className="animate-spin"
                      style={{
                        color: "var(--accent, #2563eb)",
                      }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div
              className="p-4 border-t"
              style={{
                borderColor: "var(--surface-3, #374151)",
              }}
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me about travel..."
                  disabled={loading}
                  className="flex-1 px-4 py-3 rounded-full text-sm focus:outline-none border"
                  style={{
                    backgroundColor: "var(--surface-3, #374151)",
                    borderColor: "var(--surface-4, #4b5563)",
                    color: "#ffffff",
                  }}
                />

                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "var(--accent, #2563eb)",
                    color: "#ffffff",
                  }}
                  aria-label="Send message"
                >
                  {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
