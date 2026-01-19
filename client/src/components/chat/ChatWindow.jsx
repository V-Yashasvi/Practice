import React, { useState } from "react";

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([
    { text: "Hey!", sender: "other" },
    { text: "How are you doing?", sender: "other" },
    { text: "I'm good!", sender: "me" },
    { text: "How’s buddy?", sender: "me" },
    { text: "Buddy's great!!", sender: "other" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div className="w-2/3 bg-[#e7ebee] flex flex-col justify-between rounded-r-2xl">
      <div className="border-b border-gray-300 px-6 py-4 flex justify-between items-center bg-[#c5d6e4] rounded-tr-2xl">
        <div>
          <div className="font-bold text-lg">{user}</div>
          <div className="text-xs text-gray-500">last seen 14:02</div>
        </div>
        <div className="space-x-4 text-gray-600">
          <button>📞</button>
          <button>📷</button>
          <button>⋮</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
              msg.sender === "me"
                ? "bg-white border self-end"
                : "bg-white border self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 px-4 py-3 flex items-center gap-2 bg-white rounded-b-2xl">
        <button>😊</button>
        <button>📎</button>
        <input
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button>🎤</button>
        <button onClick={sendMessage}>📨</button>
      </div>
    </div>
  );
};

export default ChatWindow;
