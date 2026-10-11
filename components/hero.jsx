"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import RajasthaniAvatar from "./RajasthaniAvatar";
import JaipurBackgroundPattern from "./JaipurBackgroundPattern";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-16 lg:pt-0 lg:pb-0"
    >
      {/* Jaipur Heritage + Cyber Background Effects */}
      <JaipurBackgroundPattern />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 max-w-7xl z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
      >
        {/* Left Side: Modern Bold Typography & Intro */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md shadow-[0_0_15px_rgba(212,160,23,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-mono text-amber-200/90 tracking-wide">
              Available for new opportunities
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-white/60 pb-2"
            >
              DHARM SINGH
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#D4A017] text-glow"
            >
              Software Developer.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 text-sm md:text-base font-mono text-[#D97A6D]"
          >
            <Sparkles size={16} className="text-[#D4A017]" />
            <span>Building AI-Powered Applications from Jaipur, Rajasthan</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base sm:text-lg text-slate-400 mb-8 font-light leading-relaxed max-w-xl"
          >
            Crafting high-performance web systems and intuitive AI interfaces. 
            Blending modern enterprise engineering with the precision and timeless craftsmanship of Rajasthan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
          >
            <MagneticButton
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-[#D4A017] hover:bg-[#e2ad23] text-black rounded-full font-semibold tracking-wide transition-all shadow-[0_0_25px_rgba(212,160,23,0.3)] hover:scale-105"
            >
              Explore Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-[#D4A017]/60 text-white rounded-full font-semibold tracking-wide hover:bg-white/5 transition-colors"
            >
              Let's Talk
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Side: 3D Rajasthani Animated Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end w-full"
        >
          <RajasthaniAvatar />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#D4A017]/70">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#D4A017]/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}

