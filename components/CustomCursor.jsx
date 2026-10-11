"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "transparent",
      border: "1.5px solid rgba(212, 160, 23, 0.4)",
      boxShadow: "0 0 10px rgba(212, 160, 23, 0.15)",
    },
    hover: {
      x: mousePosition.x - 26,
      y: mousePosition.y - 26,
      height: 52,
      width: 52,
      backgroundColor: "rgba(212, 160, 23, 0.12)",
      border: "1.5px solid rgba(212, 160, 23, 0.85)",
      boxShadow: "0 0 20px rgba(212, 160, 23, 0.45)",
    },
  };

  // Only render on client to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none hidden md:flex items-center justify-center backdrop-blur-[1px]"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.18,
        }}
      >
        {/* Royal Sun / Pagdi motif displayed on hover */}
        {isHovering && (
          <motion.svg
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#D4A017] drop-shadow-[0_0_6px_rgba(212,160,23,0.8)]"
          >
            {/* Traditional Royal Sun (Surya) Motif */}
            <circle cx="12" cy="12" r="4.5" fill="#D4A017" />
            <circle cx="12" cy="12" r="2" fill="#FFF275" />
            {/* Sun Rays */}
            <path
              d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
              stroke="#D4A017"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </motion.svg>
        )}
      </motion.div>

      {/* Center cursor dot */}
      <div
        className="fixed top-0 left-0 z-[9999] w-2 h-2 bg-[#D4A017] rounded-full pointer-events-none hidden md:block transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(212,160,23,0.8)]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </>
  );
}
