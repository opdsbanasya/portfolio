"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * 3D-styled Animated Rajasthani Character (3/4 Turned View ~15°)
 * Specifications:
 * - 25-30% reduced realistic head size (rx=24, ry=28)
 * - Realistic curved smiling eyes (no cartoon circles)
 * - Elegant Rajputana twirled moustache
 * - Increased body height (Kurta to 285, Dhoti to 375)
 * - Simplified 3-fold premium Pagdi silhouette with Kalgi
 * - Clean look without earrings
 * - 15° three-quarter angled perspective
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

      {/* 3D Character Canvas / SVG */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[280px] h-[390px] sm:w-[320px] sm:h-[430px] flex items-center justify-center"
      >
        {/* Ambient Halo behind character */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4A017]/20 via-[#D97A6D]/15 to-transparent rounded-full blur-2xl transform scale-90 pointer-events-none" />

        {/* Decorative Jharokha Arch Frame Background */}
        <svg
          viewBox="0 0 320 420"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        >
          <path
            d="M 40 400 V 160 C 40 80, 80 50, 160 30 C 240 50, 280 80, 280 160 V 400 Z"
            fill="none"
            stroke="#D4A017"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Character Illustration in 3/4 Perspective */}
        <svg
          viewBox="0 0 300 410"
          className="w-full h-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
        >
          <defs>
            {/* Pagdi Gradients */}
            <linearGradient id="pagdiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="60%" stopColor="#E63946" />
              <stop offset="100%" stopColor="#D4A017" />
            </linearGradient>
            <linearGradient id="pagdiFold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#B32010" />
            </linearGradient>
            <linearGradient id="goldKalgi" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="50%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#997000" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7D3B6" />
              <stop offset="100%" stopColor="#DD976D" />
            </linearGradient>
            <linearGradient id="kurtaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F8F9FA" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="dhotiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#DDE1E5" />
            </linearGradient>
            <linearGradient id="mojariGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7A1E1E" />
              <stop offset="70%" stopColor="#A82828" />
              <stop offset="100%" stopColor="#D4A017" />
            </linearGradient>
            <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Platform Glow / Pedestal Shadow */}
          <ellipse cx="150" cy="396" rx="90" ry="10" fill="#000000" opacity="0.6" filter="blur(4px)" />
          <ellipse cx="150" cy="394" rx="80" ry="6" fill="#D4A017" opacity="0.15" />

          {/* --- 3/4 TURN GROUP (Turned ~15°) --- */}
          <g transform="translate(4, 0)">
            
            {/* --- LOWER BODY: Taller Dhoti & Mojari Shoes --- */}
            {/* Mojari Shoes (Curled pointed traditional mojari) */}
            <g filter="url(#subtleShadow)">
              {/* Left Mojari (3/4 angle slightly forward) */}
              <path
                d="M 120 372 C 114 374, 102 380, 96 386 C 90 392, 94 394, 104 394 C 119 394, 131 388, 133 380 Z"
                fill="url(#mojariGrad)"
              />
              <path d="M 96 386 Q 90 384, 92 380" stroke="#D4A017" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="106" cy="387" r="2" fill="#FFE066" />

              {/* Right Mojari (3/4 angle slightly recessed) */}
              <path
                d="M 174 372 C 179 374, 189 380, 195 386 C 201 392, 198 394, 188 394 C 175 394, 164 388, 162 380 Z"
                fill="url(#mojariGrad)"
              />
              <path d="M 195 386 Q 201 384, 199 380" stroke="#D4A017" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="186" cy="387" r="2" fill="#FFE066" />
            </g>

            {/* Dhoti / Pants (Increased height to 375 for tall stately stature) */}
            <g filter="url(#subtleShadow)">
              <path
                d="M 103 275 C 100 285, 94 330, 114 375 L 138 375 C 144 340, 147 310, 149 285 C 151 310, 154 340, 161 375 L 183 375 C 198 330, 195 285, 195 275 Z"
                fill="url(#dhotiGrad)"
              />
              {/* Traditional Dhoti Pleat Lines */}
              <path d="M 134 280 Q 128 330, 125 370" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
              <path d="M 163 280 Q 167 330, 171 370" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
              <path d="M 149 280 L 149 350" stroke="#CBD5E1" strokeWidth="1.2" fill="none" />
              {/* Gold border on dhoti pleat */}
              <path d="M 145 290 L 145 365 M 153 290 L 153 365" stroke="#D4A017" strokeWidth="1" strokeDasharray="3 3" />
            </g>

            {/* --- UPPER BODY: White Bandhgala Kurta (Extended to 285) --- */}
            <g filter="url(#subtleShadow)">
              {/* Kurta Body - extended to 285 for taller appearance */}
              <path
                d="M 100 172 C 93 195, 90 245, 95 285 C 108 290, 190 290, 203 285 C 208 245, 205 195, 198 172 C 187 166, 168 162, 148 162 C 128 162, 111 166, 100 172 Z"
                fill="url(#kurtaGrad)"
              />
              {/* Kurta Nehru / Mandarin Collar */}
              <path
                d="M 130 160 C 130 154, 139 152, 148 152 C 158 152, 167 154, 167 160 C 163 166, 134 166, 130 160 Z"
                fill="#FFFFFF"
                stroke="#E2E8F0"
                strokeWidth="1"
              />
              {/* Center Placket slightly offset for 3/4 turn */}
              <line x1="147" y1="162" x2="147" y2="285" stroke="#E2E8F0" strokeWidth="1.5" />
              <circle cx="147" cy="176" r="2.2" fill="#D4A017" />
              <circle cx="147" cy="192" r="2.2" fill="#D4A017" />
              <circle cx="147" cy="208" r="2.2" fill="#D4A017" />
              <circle cx="147" cy="224" r="2.2" fill="#D4A017" />
              <circle cx="147" cy="242" r="2.2" fill="#D4A017" />
              <circle cx="147" cy="260" r="2.2" fill="#D4A017" />

              {/* Folded Sleeves & Arms in 3/4 Namaste */}
              {/* Left Arm (Foreground) */}
              <path
                d="M 102 176 C 88 195, 92 225, 122 230 L 133 218 C 116 212, 112 195, 118 180 Z"
                fill="url(#kurtaGrad)"
                stroke="#E2E8F0"
                strokeWidth="1"
              />
              {/* Right Arm (Slightly behind in 3/4 perspective) */}
              <path
                d="M 194 176 C 206 195, 203 225, 175 230 L 165 218 C 180 212, 184 195, 180 180 Z"
                fill="url(#kurtaGrad)"
                stroke="#E2E8F0"
                strokeWidth="1"
              />
            </g>

            {/* --- NAMASTE HANDS (Folded in Reverence 🙏 at 3/4 angle) --- */}
            <g filter="url(#subtleShadow)">
              <path
                d="M 140 216 C 140 207, 144 196, 148 192 C 152 196, 155 207, 155 216 C 155 224, 152 228, 148 228 C 144 228, 140 224, 140 216 Z"
                fill="url(#skinGrad)"
              />
              <line x1="148" y1="193" x2="148" y2="226" stroke="#C4784C" strokeWidth="1" />
              {/* Gold Kada Bracelet */}
              <rect x="132" y="218" width="9" height="4" rx="2" fill="url(#goldKalgi)" />
              <rect x="154" y="218" width="8" height="4" rx="2" fill="url(#goldKalgi)" />
            </g>

            {/* --- HEAD & FACE (Head size reduced 25-30% to rx=24, ry=28) --- */}
            {/* Neck */}
            <path d="M 140 148 L 140 162 L 156 162 L 156 148 Z" fill="#D98A5B" />

            {/* Head Base: Reduced 25-30% */}
            <ellipse
              cx="148"
              cy="128"
              rx="24"
              ry="28"
              fill="url(#skinGrad)"
              filter="url(#subtleShadow)"
            />

            {/* Ear: Left ear visible in 3/4 turn (No earrings as requested for clean look) */}
            <ellipse cx="124" cy="129" rx="4" ry="7" fill="url(#skinGrad)" />

            {/* REALISTIC EYES (Curved smiling eyes replacing cartoon eyes) */}
            <g>
              {/* Left Eye */}
              <path
                d="M132 124 Q138 121 144 124"
                stroke="#2C1810"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              {/* Right Eye */}
              <path
                d="M152 124 Q158 121 164 124"
                stroke="#2C1810"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />

              {/* Eyebrows */}
              <path
                d="M131 119 Q137 117 144 119"
                stroke="#2C1810"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M152 119 Q158 117 165 119"
                stroke="#2C1810"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* Nose (Subtle 3/4 angle curve) */}
            <path
              d="M 148 122 L 146 132 L 150 133"
              stroke="#C4784C"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />

            {/* Rajasthani Tilak on Forehead */}
            <line x1="148" y1="108" x2="148" y2="115" stroke="#D97A6D" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="148" cy="116" r="1.3" fill="#D4A017" />

            {/* ELEGANT RAJASTHANA MOUSTACHE (Redesigned & Twirled) */}
            <path
              d="M148 139 C143 138 136 138 130 141 C124 143 120 141 118 136 M148 139 C153 138 160 138 166 141 C172 143 176 141 178 136"
              stroke="#1F130E"
              strokeWidth="3.8"
              fill="none"
              strokeLinecap="round"
              filter="url(#subtleShadow)"
            />

            {/* Subtle smile line under moustache */}
            <path d="M 143 145 Q 148 147, 153 145" stroke="#A75A38" strokeWidth="1.2" strokeLinecap="round" fill="none" />

            {/* --- SIMPLIFIED 3-FOLD PREMIUM JAIPUR PAGDI --- */}
            {/* Swaying Tail (Pichhadi) */}
            <motion.g
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "175px 85px" }}
            >
              <path
                d="M 172 85 C 185 95, 194 125, 189 155 C 185 175, 182 185, 185 195 L 179 196 C 175 175, 178 150, 176 125 C 174 105, 170 92, 168 88 Z"
                fill="url(#pagdiFold)"
                filter="url(#subtleShadow)"
              />
              <line x1="179" y1="196" x2="185" y2="195" stroke="#D4A017" strokeWidth="2" />
            </motion.g>

            {/* 3 Clean Premium Folds */}
            <g filter="url(#subtleShadow)">
              {/* Fold 1: Base Dome Shape */}
              <path
                d="M 120 112 C 112 88, 122 55, 150 52 C 178 55, 188 88, 180 112 C 172 104, 128 104, 120 112 Z"
                fill="url(#pagdiGrad)"
              />

              {/* Fold 2: Bold Red Bandhej Wrap with Gold Trim */}
              <path
                d="M 118 92 C 128 72, 172 70, 182 90 C 168 98, 130 98, 118 92 Z"
                fill="url(#pagdiFold)"
              />
              <path d="M 120 94 Q 150 102, 180 92" stroke="#FFD700" strokeWidth="2" fill="none" strokeDasharray="3 3" />

              {/* Fold 3: Top Crown Wrap */}
              <path
                d="M 132 54 C 144 46, 156 46, 168 56 C 158 60, 142 60, 132 54 Z"
                fill="#D4A017"
              />

              {/* Royal Kalgi / Sarpech on Front Fold */}
              <g transform="translate(148, 74)">
                {/* White Plume */}
                <path d="M 0 0 C -3 -15, -1 -22, 0 -28 C 1 -22, 3 -15, 0 0 Z" fill="#FFFFFF" />
                <circle cx="0" cy="0" r="5" fill="url(#goldKalgi)" stroke="#997000" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="2.5" fill="#D97A6D" />
                <circle cx="0" cy="0" r="1" fill="#FFE066" />
                <circle cx="0" cy="6" r="2" fill="#FFE066" />
              </g>
            </g>

          </g>
        </svg>
      </motion.div>

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
