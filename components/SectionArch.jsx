"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Rajputana / Jaipur Palace Arch Section Divider & Header Accent
 * Premium SVG ornamentation inspired by Amer Fort & City Palace arches
 */
export default function SectionArch({ title, subtitle, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center mb-12 select-none ${className}`}>
      {/* Decorative Cusped Palace Arch Silhouette */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-3"
      >
        <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4A017]/40 to-[#D4A017]" />
        
        {/* Arch Crest SVG */}
        <svg
          width="44"
          height="22"
          viewBox="0 0 44 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#D4A017] drop-shadow-[0_0_10px_rgba(212,160,23,0.4)]"
        >
          {/* Multifoil Cusped Arch */}
          <path
            d="M 2 21 C 2 12, 10 9, 14 9 C 18 9, 20 4, 22 1 C 24 4, 26 9, 30 9 C 34 9, 42 12, 42 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Inner mini arch */}
          <path
            d="M 8 21 C 8 16, 14 14, 17 14 C 20 14, 21 11, 22 7 C 23 11, 24 14, 27 14 C 30 14, 36 16, 36 21"
            stroke="#D97A6D"
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Finial Kalash */}
          <circle cx="22" cy="1.5" r="1.5" fill="#FFE066" />
        </svg>

        <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#D4A017]/40 to-[#D4A017]" />
      </motion.div>

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-white/50 text-center"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto text-center mt-3 font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
