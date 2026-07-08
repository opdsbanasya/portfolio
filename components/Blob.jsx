"use client"

import { motion } from "framer-motion"

export default function Blob({ 
  color = "bg-yellow-500/20", 
  size = "w-[300px] h-[300px]", 
  className = "",
  duration = 15,
  delay = 0
}) {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "50% 50% 20% 80% / 25% 80% 20% 75%",
          "60% 40% 30% 70% / 60% 30% 70% 40%"
        ],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 0.9, 1]
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut",
        repeat: Infinity
      }}
      className={`absolute blur-[80px] pointer-events-none mix-blend-screen ${color} ${size} ${className}`}
    />
  )
}
