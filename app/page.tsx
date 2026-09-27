"use client";

import React, { useState } from "react";
import {
  Menu,
  ShieldCheck,
  Lock,
  FileCheck,
  MessageCircle,
  Mic,
  ArrowUp,
  Sparkles,
  Bot,
  User,
} from "lucide-react";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "سلام! میں آپ کا AI سیلز اسسٹنٹ ہوں۔ آپ مجھ سے اپنے پروڈکٹ، سیلز پچ یا مارکیٹنگ کے بارے میں کچھ بھی پوچھ سکتے ہیں۔",
      time: "9:41 AM",
    },
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // User Message Add
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: text,
      time: currentTime,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    // Simulated AI Reply
    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: `آپ کے سوال "${text}" کے لیے یہ بہترین سیلز پچ اور گائیڈ لائن تیار ہے! کیا آپ مزید تفصیلات چاہتے ہیں؟`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1200);
  };

  const handleVoiceToggle = () => {
    if (!isRecording) {
      setIsRecording(true);
      // Voice recording simulation (3 second recording)
      setTimeout(() => {
        setIsRecording(false);
        handleSend("آواز کا پیغام: مجھے اپنے بزنس کی سیلز بڑھانے کا طریقہ بتائیں۔");
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0f12] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] flex items-center justify-center p-2 sm:p-6 text-white font-sans selection:bg-amber-500/30">
      {/* Mobile Frame Container */}
      <div className="w-full max-w-[390px] h-[840px] bg-[#12151a]/90 rounded-[48px] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between p-5 relative overflow-hidden backdrop-blur-2xl">
        
        {/* Top Header Section */}
        <div className="w-full shrink-0">
          <div className="flex justify-between items-center text-xs text-zinc-400 font-medium px-2 pt-1 mb-4">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full border border-zinc-400"></div>
              <span className="text-[10px] bg-zinc-800/80 px-1.5 py-0.5 rounded-md text-zinc-300 font-semibold border border-white/10">86</span>
            </div>
          </div>

          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white mb-1">
                AI Sales Assistant
              </h1>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
                <span className="text-xs font-medium text-zinc-400 tracking-wide">
                  Online • Always Ready
                </span>
              </div>
            </div>
            <button className="p-2 text-zinc-300 hover:text-white transition">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Security Badges */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-2 flex items-center gap-2 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="leading-tight">
                <p className="text-[10px] font-bold text-zinc-200">24/7</p>
                <p className="text-[8px] text-zinc-400">AI Support</p>
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-2 flex items-center gap-2 backdrop-blur-md">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="leading-tight">
                <p className="text-[10px] font-bold text-zinc-200">SSL</p>
                <p className="text-[8px] text-zinc-400">Secure</p>
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-2 flex items-center gap-2 backdrop-blur-md">
              <FileCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <div className="leading-tight">
                <p className="text-[10px] font-bold text-zinc-200">SOC 2</p>
                <p className="text-[8px] text-zinc-400">Certified</p>
              </div>
            </div>
          </div>

          {/* Social Integration Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-900/80 hover:bg-zinc-800/80 border border-white/10 rounded-xl py-2 px-3 flex items-center justify-center gap-2 transition group shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400 text-transparent" />
              <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">
                WhatsApp
              </span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-900/80 hover:bg-zinc-800/80 border border-white/10 rounded-xl py-2 px-3 flex items-center justify-center gap-2 transition group shadow-md"
            >
              <svg className="w-4 h-4 fill-blue-400 text-transparent" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">
                Facebook
              </span>
            </a>
          </div>
        </div>

        {/* Dynamic Chat Display Area */}
        <div className="flex-1 overflow-y-auto my-3 p-2 space-y-3 scrollbar-thin scrollbar-thumb-zinc-700">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
              )}

              <div
                className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed shadow-md backdrop-blur-md ${
                  msg.sender === "user"
                    ? "bg-amber-500/20 border border-amber-500/30 text-amber-100 rounded-br-none"
                    : "bg-zinc-900/80 border border-white/10 text-zinc-200 rounded-bl-none"
                }`}
              >
                <p>{msg.text}</p>
                <span className="block text-[9px] text-right mt-1 opacity-50">
                  {msg.time}
                </span>
              </div>

              {msg.sender === "user" && (
                <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5 text-zinc-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Inputs Area */}
        <div className="w-full space-y-3 shrink-0">
          {/* Voice Input Card */}
          <div
            onClick={handleVoiceToggle}
            className={`cursor-pointer border rounded-2xl p-3 flex items-center justify-between transition duration-300 ${
              isRecording
                ? "bg-amber-500/20 border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.2)]"
                : "bg-gradient-to-r from-amber-950/20 via-zinc-900/90 to-zinc-900/90 border-amber-500/30 hover:border-amber-500/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-xl border ${
                  isRecording
                    ? "bg-amber-500 text-black border-amber-400 animate-pulse"
                    : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                }`}
              >
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-100">
                  آواز سے سوال کریں / Record Voice
                </p>
                <p className="text-[10px] text-zinc-400 mt-0.5">
                  {isRecording ? "Listening... (3 seconds)" : "Tap to start speaking"}
                </p>
              </div>
            </div>

            {/* Waveform Animation */}
            <div className="flex items-center gap-1 text-xs font-mono text-zinc-400 bg-black/40 px-2 py-1 rounded-full border border-white/5">
              <span
                className={`w-1 h-3 bg-amber-500 rounded-full ${
                  isRecording ? "animate-bounce" : ""
                }`}
              ></span>
              <span
                className={`w-1 h-2 bg-amber-500/60 rounded-full ${
                  isRecording ? "animate-pulse" : ""
                }`}
              ></span>
              <span
                className={`w-1 h-4 bg-amber-500 rounded-full ${
                  isRecording ? "animate-bounce" : ""
                }`}
              ></span>
            </div>
          </div>

          {/* Text Input Bar */}
          <div className="bg-zinc-900/90 border border-amber-500/30 rounded-full p-1.5 pl-4 flex items-center justify-between shadow-[0_0_20px_rgba(245,158,11,0.08)]">
            <input
              type="text"
              placeholder="Sawal poochein / Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="bg-transparent border-none outline-none text-xs text-zinc-200 placeholder-zinc-500 w-full pr-2"
            />
            <button
              onClick={() => handleSend()}
              className="bg-amber-200 hover:bg-amber-300 active:scale-95 text-black p-2.5 rounded-full transition shadow-md flex items-center justify-center shrink-0"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}