"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

/**
 * 3D-styled Animated Rajasthani Royal Lion Mascot
 * Uses /royal_mascot.png with interactive speech bubble, floating animation,
 * and an authentically proportioned regal Jharokha arch frame.
 */
export default function RajasthaniAvatar() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = [
    { text: "राम राम सा 👋", sub: "Click to toggle greeting" },
    { text: "खम्मा घणी सा 🙏", sub: "Padharo Mhare Desh" },
    { text: "Namaste, I'm Dharm! ✨", sub: "Full Stack & AI Dev" },
  ];

  const handleBubbleClick = () => {
    setGreetingIndex((prev) => (prev + 1) % greetings.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-30 mb-4 cursor-pointer"
        onClick={handleBubbleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        <div className="relative px-5 py-2.5 rounded-2xl bg-black/85 backdrop-blur-xl border border-[#D4A017]/40 shadow-[0_0_25px_rgba(212,160,23,0.3)] flex items-center gap-2 text-white">
          <Sparkles size={14} className="text-[#D4A017] animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-bold text-base md:text-lg tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100 font-sans">
            {greetings[greetingIndex].text}
          </span>
          {/* Arrow pointing to character */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black/85"></div>
        </div>
        <div className="text-[10px] text-slate-400 text-center mt-1 tracking-wider uppercase font-mono">
          {greetings[greetingIndex].sub}
        </div>
      </motion.div>

      {/* 3D Character Canvas with Mascot Image */}
      <div
        className="relative w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] flex items-center justify-center"
      >
        {/* Ambient Halo behind character */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4A017]/25 via-[#3B82F6]/10 to-transparent rounded-full blur-2xl transform scale-95 pointer-events-none" />

        {/* Decorative Regal Jharokha Arch Frame Background */}
        <svg
          viewBox="0 0 380 540"
          className="absolute -inset-4 sm:-inset-8 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] h-[calc(100%+2rem)] sm:h-[calc(100%+4rem)] pointer-events-none overflow-visible"
        >
          <defs>
            <linearGradient id="archGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#D4A017" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#D4A017" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="innerArchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4A017" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#D4A017" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Royal Mehrab Arch (Wider than mascot, clears pagdi & elbows, opens gracefully to floor) */}
          <path
            d="M 24 530 V 200 C 24 110, 80 50, 190 18 C 300 50, 356 110, 356 200 V 530"
            fill="none"
            stroke="url(#archGoldGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />

          {/* Inner Decorative Arch for Traditional Depth */}
          <path
            d="M 44 530 V 210 C 44 130, 95 75, 190 42 C 285 75, 336 130, 336 210 V 530"
            fill="none"
            stroke="url(#innerArchGrad)"
            strokeWidth="1"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />

          {/* Chhatri Apex Finial */}
          <g transform="translate(190, 18)">
            <line x1="0" y1="-12" x2="0" y2="0" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="0" cy="-12" r="2.5" fill="#FFE066" />
          </g>
        </svg>

        {/* Ground Pedestal Shadow */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-5 bg-black/70 rounded-[100%] blur-md pointer-events-none z-0" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-3 bg-[#D4A017]/25 rounded-[100%] blur-sm pointer-events-none z-0" />

        {/* 3D Royal Lion Mascot Image */}
        <div className="relative w-full h-full flex items-center justify-center z-10">
          <Image
            src="/royal_mascot.png"
            alt="Royal Rajasthani Mascot"
            width={1024}
            height={1536}
            priority
            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Modern Badge Below Character */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs text-slate-300 font-mono"
      >
        <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-ping" />
        <span>Jaipur, Rajasthan 🇮🇳</span>
      </motion.div>
    </div>
  );
}
