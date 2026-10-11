"use client";

import React from "react";

/**
 * Subtle Jaipur Architectural Background Pattern
 * Features traditional Jharokha cusped arches, geometric Jaali lattices,
 * and Hawa Mahal honeycomb motifs at 5%-8% opacity for an Apple-grade subtle cultural feel.
 */
export default function JaipurBackgroundPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Warm Jaipur Gold & Sandstone Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-[#D4A017]/15 rounded-full blur-[140px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-[#D97A6D]/12 rounded-full blur-[160px] mix-blend-screen" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#7A1E1E]/10 rounded-full blur-[150px] mix-blend-screen" />

      {/* Jaali Geometric Lattice Overlay (Ultra subtle 4-6%) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="jaali-lattice" width="48" height="48" patternUnits="userSpaceOnUse">
            {/* Traditional Rajasthani 8-point star jaali */}
            <path
              d="M24 0 L32 16 L48 24 L32 32 L24 48 L16 32 L0 24 L16 16 Z"
              fill="none"
              stroke="#D4A017"
              strokeWidth="0.8"
            />
            <circle cx="24" cy="24" r="3" fill="none" stroke="#D97A6D" strokeWidth="0.6" />
            <path
              d="M0 0 L10 10 M48 0 L38 10 M48 48 L38 38 M0 48 L10 38"
              stroke="#D4A017"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jaali-lattice)" />
      </svg>

      {/* Decorative Jharokha Cusped Palace Arches on Flanks */}
      <div className="absolute top-12 left-4 md:left-12 opacity-[0.07] pointer-events-none hidden sm:block">
        <svg width="220" height="340" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Jharokha Arch */}
          <path
            d="M20 280 V130 C20 70, 50 40, 100 20 C150 40, 180 70, 180 130 V280"
            stroke="#D4A017"
            strokeWidth="1.5"
          />
          {/* Multifoil cusps */}
          <path
            d="M35 280 V140 C35 110, 55 95, 70 95 C85 95, 95 85, 100 60 C105 85, 115 95, 130 95 C145 95, 165 110, 165 140 V280"
            stroke="#D97A6D"
            strokeWidth="1.2"
          />
          {/* Inner chhatri finial */}
          <path d="M100 8 V20 M92 20 H108" stroke="#D4A017" strokeWidth="1.5" />
          <circle cx="100" cy="8" r="3" fill="#D4A017" />
          {/* Jharokha sill bracket */}
          <path d="M10 280 H190 M25 288 H175 M40 296 H160" stroke="#D4A017" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute top-12 right-4 md:right-12 opacity-[0.07] pointer-events-none hidden sm:block">
        <svg width="220" height="340" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 280 V130 C20 70, 50 40, 100 20 C150 40, 180 70, 180 130 V280"
            stroke="#D4A017"
            strokeWidth="1.5"
          />
          <path
            d="M35 280 V140 C35 110, 55 95, 70 95 C85 95, 95 85, 100 60 C105 85, 115 95, 130 95 C145 95, 165 110, 165 140 V280"
            stroke="#D97A6D"
            strokeWidth="1.2"
          />
          <path d="M100 8 V20 M92 20 H108" stroke="#D4A017" strokeWidth="1.5" />
          <circle cx="100" cy="8" r="3" fill="#D4A017" />
          <path d="M10 280 H190 M25 288 H175 M40 296 H160" stroke="#D4A017" strokeWidth="1" />
        </svg>
      </div>

      {/* Cyber-modern Grid Overlay (combining 90% modern with the 10% heritage) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
