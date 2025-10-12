"use client";

import { useState, useEffect, useRef } from "react";

interface ChatWidgetConfig {
  chatUrl: string; // only ONE URL now
  style?: {
    primaryColor?: string;
    backgroundColor?: string;
    fontColor?: string;
  };
}

interface ChatWidgetProps {
  config: ChatWidgetConfig;
}

export default function ChatWidget({ config }: ChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([{ sender: "bot", text: "Hi 👋, how can we help?" }]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const primaryColor = config.style?.primaryColor || "#854fff";
  const backgroundColor = config.style?.backgroundColor || "#ffffff";
  const fontColor = config.style?.fontColor || "#333333";

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // Generate or reuse a unique chat session ID
  const getChatId = () => {
    if (typeof window === "undefined") return "";
    let chatId = sessionStorage.getItem("chatId");
    if (!chatId) {
      chatId = "chat_" + Math.random().toString(36).substring(2, 10);
      sessionStorage.setItem("chatId", chatId);
    }
    return chatId;
  };

  // Send message and handle AI response
  const handleSend = async () => {
    if (!input.trim()) return;

    const message = input.trim();
    const chatId = getChatId();

    // Show user message instantly
    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setInput("");

    try {
      // Send message to n8n (expects n8n Responds with AI reply)
      const res = await fetch(config.chatUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatId, message }),
      });

      if (!res.ok) throw new Error("Failed to get bot response");

      const data = await res.json();

      // Show bot reply from n8n
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.output || "Xin lỗi, mình không hiểu câu hỏi của bạn.",
        },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Network error. Please try again later." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{ backgroundColor: primaryColor }}
          className="fixed bottom-5 right-5 w-12 h-12 rounded-full text-white text-xl flex items-center justify-center shadow-lg hover:opacity-90 transition"
        >
          💬
        </button>
      )}

      {/* Chat Container */}
      {open && (
        <div
          className="fixed bottom-5 right-5 flex flex-col rounded-xl shadow-xl overflow-hidden"
          style={{
            width: "350px",
            height: "500px",
            background: backgroundColor,
            color: fontColor,
          }}
        >
          {/* Header */}
          <div
            className="flex justify-between items-center p-4 font-bold text-lg"
            style={{ backgroundColor: primaryColor, color: "#fff" }}
          >
            <span>FlexStyle Chatbot</span>
            <button onClick={() => setOpen(false)} className="text-white">
              X
            </button>
          </div>

          {/* Body */}
          <div
            ref={chatBodyRef}
            className="flex-1 overflow-y-auto p-4 space-y-3"
          >
            {messages.map((msg, i) => (
              <p
                key={i}
                className={`max-w-[80%] p-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "ml-auto bg-gray-100 text-gray-800"
                    : "bg-[#854fff] text-white"
                }`}
              >
                {msg.text}
              </p>
            ))}
          </div>

          {/* Footer */}
          <div className="flex gap-2 p-3 border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none text-sm"
            />
            <button
              onClick={handleSend}
              style={{ backgroundColor: primaryColor }}
              className="text-white px-4 py-2 rounded-lg text-sm"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
