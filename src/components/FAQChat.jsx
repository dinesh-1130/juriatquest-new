// import React, { useState, useRef, useEffect } from "react";
// import { MessageCircle, X, Send, Sparkles } from "lucide-react";

// const faqData = [
//   {
//     question: "Who can participate in JuristQuest 2025?",
//     answer:
//       "Law students enrolled in 3-year or 5-year law programs at recognized South Indian law colleges.",
//   },
//   {
//     question: "How do we register for the competition?",
//     answer: "Teams can register online through the official website.",
//   },
//   {
//     question: "How many members are allowed in each team?",
//     answer:
//       "Each team must consist of three members – two speakers and one researcher.",
//   },
//   {
//     question: "What is the format of the competition?",
//     answer: "Preliminary Rounds, Quarterfinals, Semifinals, Grand Finale.",
//   },
//   {
//     question: "Are there any travel or accommodation arrangements?",
//     answer:
//       "Yes, basic accommodation and travel reimbursements for finalists.",
//   },
//   {
//     question: "What is the Legal Immersion Program?",
//     answer:
//       "An international exposure opportunity including visits to SIAC and Malaysian courts.",
//   },
//   {
//     question: "Will participants receive certificates?",
//     answer: "Yes, e-certificates for all, printed certificates for winners.",
//   },
//   {
//     question: "Is there a registration fee?",
//     answer: "Yes, a nominal registration fee will be charged per team.",
//   },
// ];

// export default function PremiumFAQChatBot() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const bottomRef = useRef(null);

//   useEffect(() => {
//     if (open && messages.length === 0) {
//       setTimeout(() => {
//         setMessages([
//           {
//             type: "bot",
//             text: `Hi there! 👋 I'm here to help with JuristQuest 2025.\n\nHere are the most common questions:\n\n${faqData
//               .map((item, i) => `${i + 1}. ${item.question}`)
//               .join("\n")}\n\n💬 Simply reply with a number (1–8) to get your answer!`,
//           },
//         ]);
//       }, 300);
//     }
//   }, [open]);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = () => {
//     const trimmed = input.trim();
//     if (!trimmed) return;

//     const index = parseInt(trimmed);
//     setMessages((prev) => [...prev, { type: "user", text: trimmed }]);
//     setInput("");
//     setIsTyping(true);

//     setTimeout(() => {
//       setIsTyping(false);
//       if (index >= 1 && index <= faqData.length) {
//         const answer = faqData[index - 1].answer;
//         setMessages((prev) => [...prev, { type: "bot", text: answer }]);
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { type: "bot", text: "❌ Please enter a number between 1 and 8 to get the answer to your question." },
//         ]);
//       }
//     }, 800);
//   };

//   return (
//     <>
//       {/* Floating Action Button */}
//       {!open && (
//         <button
//           onClick={() => setOpen(true)}
//           className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 z-50 group"
//         >
//           <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
//           {/* <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
//             <Sparkles className="w-3 h-3 text-white" />
//           </div> */}
//         </button>
//       )}

//       {/* Chat Window */}
//       {open && (
//         <div className="fixed bottom-4 right-4 w-full max-w-sm sm:max-w-md md:max-w-lg max-h-[75vh] backdrop-blur-xl shadow-2xl rounded-xl flex flex-col overflow-hidden text-sm z-50 animate-in slide-in-from-bottom-5 duration-300">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white px-6 py-4 flex justify-between items-center relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-transparent to-pink-400/20"></div>
//             <div className="relative flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <MessageCircle className="w-5 h-5" />
//               </div>
//               <div>
//                 <span className="font-semibold text-lg">Steve</span>
//                 <div className="text-xs text-purple-100">JuristQuest Assistant</div>
//               </div>
//             </div>
//             <button 
//               onClick={() => setOpen(false)}
//               className="relative w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50 backdrop-blur-sm">
//             {messages.map((msg, i) => (
//               <div key={i} className={`flex ${msg.type === "bot" ? "justify-start" : "justify-end"} animate-in slide-in-from-bottom-2 duration-300`} style={{ animationDelay: `${i * 100}ms` }}>
//                 <div
//                   className={`px-4 py-3 max-w-[80%] rounded-2xl whitespace-pre-wrap leading-relaxed shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] ${
//                     msg.type === "bot"
//                       ? "bg-white/90 text-gray-800 border border-gray-200/50 rounded-tl-md"
//                       : "bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-tr-md shadow-purple-500/25"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
            
//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
//                 <div className="px-4 py-3 bg-white/90 text-gray-600 border border-gray-200/50 rounded-2xl rounded-tl-md shadow-lg backdrop-blur-sm">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
//                     <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={bottomRef} />
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-gray-200/50 bg-white/80 backdrop-blur-sm">
//             <div className="flex space-x-3 items-end">
//               <div className="flex-1 relative">
//                 <input
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                   className="w-full border-2 border-gray-200/50 px-4 py-3 rounded-xl text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-200 bg-white/70 backdrop-blur-sm placeholder-gray-400"
//                   placeholder="Type a number (1–8)..."
//                   disabled={isTyping}
//                 />
//               </div>
//               <button
//                 onClick={sendMessage}
//                 disabled={isTyping || !input.trim()}
//                 className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-300 disabled:to-gray-400 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/25 flex items-center justify-center min-w-[48px]"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const faqData = [
  { question: "Who can participate in JuristQuest 2025?", answer: "Law students enrolled in 3-year or 5-year law programs at recognized South Indian law colleges." },
  { question: "How do we register for the competition?", answer: "Teams can register online through the official website." },
  { question: "How many members are allowed in each team?", answer: "Each team must consist of three members – two speakers and one researcher." },
  { question: "What is the format of the competition?", answer: "Preliminary Rounds, Quarterfinals, Semifinals, Grand Finale." },
  { question: "Are there any travel or accommodation arrangements?", answer: "Yes, basic accommodation and travel reimbursements for finalists." },
  { question: "What is the Legal Immersion Program?", answer: "An international exposure opportunity including visits to SIAC and Malaysian courts." },
  { question: "Will participants receive certificates?", answer: "Yes, e-certificates for all, printed certificates for winners." },
  { question: "Is there a registration fee?", answer: "Yes, a nominal registration fee will be charged per team." },
];

export default function PremiumFAQChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            type: "bot",
            text: `Hi there! 👋 I'm here to help with JuristQuest 2025.\n\nHere are the most common questions:\n\n${faqData
              .map((item, i) => `${i + 1}. ${item.question}`)
              .join("\n")}\n\n💬 Simply reply with a number (1–8) to get your answer!`,
          },
        ]);
      }, 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const index = parseInt(trimmed);
    setMessages((prev) => [...prev, { type: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (index >= 1 && index <= faqData.length) {
        const answer = faqData[index - 1].answer;
        setMessages((prev) => [...prev, { type: "bot", text: answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "❌ Please enter a number between 1 and 8 to get the answer to your question." },
        ]);
      }
    }, 800);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-4 right-4 w-full max-w-[95vw] sm:max-w-sm md:max-w-md lg:max-w-md max-h-[80vh] backdrop-blur-xl shadow-2xl rounded-xl flex flex-col overflow-hidden text-sm z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white px-4 py-3 flex justify-between items-center relative">
            <div className="relative flex items-center space-x-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-base">Steve</span>
                <div className="text-xs text-purple-100">JuristQuest Assistant</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === "bot" ? "justify-start" : "justify-end"} animate-in slide-in-from-bottom-2 duration-300`}>
                <div
                  className={`px-4 py-3 max-w-[85%] rounded-2xl whitespace-pre-wrap shadow-lg transition hover:scale-[1.02] ${
                    msg.type === "bot"
                      ? "bg-white text-gray-800 border rounded-tl-md"
                      : "bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-tr-md shadow-purple-500/25"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                <div className="px-4 py-3 bg-white text-gray-600 border rounded-2xl rounded-tl-md shadow-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t bg-white/80">
            <div className="flex space-x-2 items-end">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a number (1–8)..."
                disabled={isTyping}
                className="flex-1 px-4 py-2 rounded-xl border focus:ring-2 focus:ring-purple-300 outline-none bg-white text-sm"
              />
              <button
                onClick={sendMessage}
                disabled={isTyping || !input.trim()}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-300 disabled:to-gray-400 text-white px-4 py-2 rounded-xl text-sm font-medium transition hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
