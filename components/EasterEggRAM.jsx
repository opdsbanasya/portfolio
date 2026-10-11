"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

/**
 * Easter Egg: Activated when user types 'R' - 'A' - 'M' anywhere on keyboard.
 * Displays a celebratory royal greeting modal with gold/pink confetti and a sweet synth chord.
 */
export default function EasterEggRAM() {
  const [isOpen, setIsOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const sequenceRef = useRef([]);
  const timerRef = useRef(null);

  // Play pleasant pentatonic chime via Web Audio API
  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Traditional celebratory notes: C5, E5, G5, A5, C6 (Mohanam/Bhoopali pentatonic scale)
      const notes = [523.25, 659.25, 783.99, 880.0, 1046.5];
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.1);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + index * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + index * 0.1 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + index * 0.1 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + index * 0.1);
        osc.stop(ctx.currentTime + index * 0.1 + 1.3);
      });
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const triggerCelebration = () => {
    // Generate celebratory confetti particles
    const newParticles = Array.from({ length: 36 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20,
      color: i % 3 === 0 ? "#D4A017" : i % 3 === 1 ? "#D97A6D" : "#FFE066",
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
      delay: Math.random() * 0.5,
    }));
    setParticles(newParticles);
    setIsOpen(true);
    playChime();

    // Auto close after 7 seconds
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 7000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore when typing inside input or textarea
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;

      const char = e.key.toUpperCase();
      sequenceRef.current.push(char);

      // Keep only last 3 characters
      if (sequenceRef.current.length > 3) {
        sequenceRef.current.shift();
      }

      const currentCombo = sequenceRef.current.join("");
      if (currentCombo === "RAM") {
        triggerCelebration();
        sequenceRef.current = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[99999] pointer-events-none flex items-start justify-center pt-20 px-4">
            {/* Confetti Rain */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ top: "-10%", left: `${p.x}%`, opacity: 1, rotate: 0 }}
                animate={{
                  top: "100%",
                  opacity: 0,
                  rotate: p.rotation + 360,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: p.delay,
                  ease: "easeOut",
                }}
                className="absolute rounded-sm pointer-events-none shadow-sm"
                style={{
                  width: p.size,
                  height: p.size * 1.5,
                  backgroundColor: p.color,
                }}
              />
            ))}

            {/* Royal Greeting Banner */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="pointer-events-auto relative max-w-lg w-full glass-card border border-[#D4A017]/60 rounded-3xl p-6 shadow-[0_0_50px_rgba(212,160,23,0.35)] overflow-hidden text-center"
            >
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4A017]/15 via-transparent to-[#D97A6D]/10 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close greeting"
              >
                <X size={18} />
              </button>

              {/* Jharokha Arch Crest */}
              <div className="flex justify-center mb-3 text-[#D4A017]">
                <svg width="36" height="18" viewBox="0 0 44 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 2 21 C 2 12, 10 9, 14 9 C 18 9, 20 4, 22 1 C 24 4, 26 9, 30 9 C 34 9, 42 12, 42 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="22" cy="2" r="2" fill="#FFE066" />
                </svg>
              </div>

              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/40 text-amber-200 text-xs font-mono mb-3">
                <Sparkles size={12} className="text-[#D4A017]" />
                <span>Rajasthan Heritage Easter Egg Unlocked</span>
              </div>

              {/* Main Hindi Greeting */}
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-100 mb-2 font-sans tracking-wide">
                "राम राम सा! Dharm Singh ki Portfolio me aapka swagat hai 🙏"
              </h3>

              <p className="text-sm text-slate-300 font-light mt-2 leading-relaxed">
                Thank you for exploring! You discovered the secret <span className="font-mono text-[#D4A017]">R-A-M</span> trigger. Craftsmanship from Jaipur to the global web.
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <span>Padharo Mhare Desh 🇮🇳</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
