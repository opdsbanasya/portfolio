"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Terminal, Zap } from "lucide-react"

/**
 * @typedef {Object} Token
 * @property {string} text
 * @property {string} type
 */

const structuredCodeLines = [
  [
    { text: "const", type: "keyword" },
    { text: " ", type: "plain" },
    { text: "developer", type: "variable" },
    { text: " ", type: "plain" },
    { text: "=", type: "operator" },
    { text: " ", type: "plain" },
    { text: "{", type: "bracket" },
  ],
  [
    { text: "  ", type: "indent" },
    { text: "name", type: "property" },
    { text: ":", type: "punctuation" },
    { text: " ", type: "plain" },
    { text: '"Dharm Singh Saini"', type: "string" },
    { text: ",", type: "punctuation" },
  ],
  [
    { text: "  ", type: "indent" },
    { text: "contact", type: "property" },
    { text: ":", type: "punctuation" },
    { text: " ", type: "plain" },
    { text: '"opdsbanasya@gmail.com"', type: "string" },
    { text: ",", type: "punctuation" },
  ],
  [
    { text: "  ", type: "indent" },
    { text: "skills", type: "property" },
    { text: ":", type: "punctuation" },
    { text: " ", type: "plain" },
    { text: "[", type: "bracket" },
  ],
  [
    { text: "    ", type: "indent" },
    { text: '"Node.js"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: " ", type: "indent" },
    { text: '"React.js"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: " ", type: "indent" },
    { text: '"Express"', type: "string" },
    { text: ",", type: "punctuation" },
  ],
  [
    { text: "    ", type: "indent" },
    { text: '"FastAPI"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: " ", type: "indent" },
    { text: '"MongoDB"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: " ", type: "indent" },
    { text: '"MySql"', type: "string" },
  ],
  [
    { text: "  ", type: "indent" },
    { text: "]", type: "bracket" },
  ],
  [
    { text: "  ", type: "indent" },
    { text: "message", type: "property" },
    { text: ":", type: "punctuation" },
    { text: " ", type: "plain" },
    { text: "I build scalable and efficient web applications", type: "string" },
    { text: ",", type: "punctuation" },
  ],
  [
    { text: "}", type: "bracket" },
    { text: ";", type: "punctuation" },
  ],
]

/**
 * Hero section with animated background, typed code editor, and call-to-action buttons
 * @returns {JSX.Element}
 */
export default function Hero() {
  const canvasRef = useRef(null)

  const [displayLines, setDisplayLines] = useState(Array(structuredCodeLines.length).fill([]))
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex < structuredCodeLines.length) {
      const currentLine = structuredCodeLines[currentLineIndex]

      if (currentLine.length === 0) {
        setTimeout(() => {
          setDisplayLines((prev) => {
            const n = [...prev]
            n[currentLineIndex] = []
            return n
          })
          setCurrentLineIndex((p) => p + 1)
          setCurrentTokenIndex(0)
          setCurrentCharIndex(0)
        }, 120)
        return
      }

      if (currentTokenIndex < currentLine.length) {
        const currentToken = currentLine[currentTokenIndex]
        if (currentCharIndex < currentToken.text.length) {
          const t = setTimeout(
            () => {
              setDisplayLines((prev) => {
                const lines = [...prev]
                const line = [...(lines[currentLineIndex] || [])]
                const partial = {
                  text: currentToken.text.slice(0, currentCharIndex + 1),
                  type: currentToken.type,
                }
                line[currentTokenIndex] = partial
                lines[currentLineIndex] = line
                return lines
              })
              setCurrentCharIndex((p) => p + 1)
            },
            currentToken.type === "indent" ? 8 : 28,
          )
          return () => clearTimeout(t)
        } else {
          setCurrentTokenIndex((p) => p + 1)
          setCurrentCharIndex(0)
        }
      } else {
        const t = setTimeout(() => {
          setCurrentLineIndex((p) => p + 1)
          setCurrentTokenIndex(0)
          setCurrentCharIndex(0)
        }, 160)
        return () => clearTimeout(t)
      }
    }
  }, [currentLineIndex, currentTokenIndex, currentCharIndex])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    const particles = []

    const jsSymbols = [
      { text: "const", color: "#fbbf24" },
      { text: "React", color: "#61dafb" },
      { text: "Node.js", color: "#22c55e" },
      { text: "MongoDB", color: "#10b981" },
      { text: "Express", color: "#a78bfa" },
      { text: "JWT", color: "#f59e0b" },
      { text: "REST", color: "#38bdf8" },
      { text: "Socket.io", color: "#f472b6" },
      { text: "npm", color: "#cb3837" },
      { text: "AWS", color: "#ff9900" },
      { text: "JSON", color: "#fef3c7" },
      { text: "Payments", color: "#4ade80" },
      { text: "var", color: "#f87171" },
      { text: "let", color: "#fbbf24" },
      { text: "async", color: "#60a5fa" },
      { text: "await", color: "#60a5fa" },
      { text: "fs", color: "#9ca3af" },
      { text: "http", color: "#3b82f6" },
      { text: "https", color: "#2563eb" },
      { text: "bcrypt", color: "#6b7280" },
      { text: "cookie", color: "#fcd34d" },
      { text: "crypto", color: "#8b5cf6" },
    ]

    const count = Math.min(Math.floor(window.innerWidth / 25), 50)
    for (let i = 0; i < count; i++) {
      const s = jsSymbols[Math.floor(Math.random() * jsSymbols.length)]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: s.text,
        color: s.color,
        size: Math.random() * 14 + 8,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.02 - 0.01,
        opacity: Math.random() * 0.5 + 0.3,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.speedX
        p.y += p.speedY
        p.rotation += p.rotationSpeed
        p.pulse += 0.02
        if (p.x < -50 || p.x > canvas.width + 50) p.speedX *= -1
        if (p.y < -50 || p.y > canvas.height + 50) p.speedY *= -1
        const pulseOpacity = p.opacity + Math.sin(p.pulse) * 0.2

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.font = `${p.size}px 'Fira Code', monospace`
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0.1, pulseOpacity)
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.shadowColor = p.color
        ctx.shadowBlur = 10
        ctx.fillText(p.text, 0, 0)
        ctx.restore()

        particles.forEach((q, j) => {
          if (i !== j) {
            const dx = p.x - q.x
            const dy = p.y - q.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 100) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(q.x, q.y)
              ctx.strokeStyle = `rgba(251,191,36,${0.1 * (1 - dist / 100)})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        })
      })
    }
    animate()
    return () => window.removeEventListener("resize", setCanvasDimensions)
  }, [])

  /**
   * Get Tailwind color class for token type
   * @param {string} type
   * @returns {string}
   */
  const getTokenColor = (type) => {
    switch (type) {
      case "keyword":
        return "text-purple-400 font-semibold"
      case "string":
        return "text-green-400"
      case "property":
        return "text-blue-300"
      case "variable":
        return "text-cyan-300"
      case "object":
        return "text-yellow-300"
      case "method":
        return "text-pink-400"
      case "comment":
        return "text-gray-500 italic"
      case "number":
        return "text-orange-400"
      case "operator":
        return "text-red-400"
      case "bracket":
        return "text-yellow-300"
      case "punctuation":
        return "text-slate-300"
      case "indent":
        return "text-transparent"
      default:
        return "text-slate-300"
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <Terminal className="text-yellow-400 animate-pulse" size={24} />
              <span className="text-yellow-400 font-mono text-sm">~/resume</span>
            </div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              Dharm Singh Saini
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-slate-300 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <p>Fullstack Developer | Jaipur, Rajasthan</p>
              <p className="text-yellow-400 font-mono text-base mt-2">Node.js, Python (FastAPI), System Design</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap size={18} />
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-medium py-3 px-6 rounded-full transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 font-medium py-3 px-6 rounded-full transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Editor mockup with typed resume code */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-slate-900/95 rounded-lg border border-slate-700 shadow-2xl overflow-hidden">
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-300 text-sm ml-4">resume.js</span>
              </div>

              <div className="flex">
                <div className="bg-slate-800/60 px-3 py-4 border-r border-slate-700 select-none">
                  {structuredCodeLines.map((_, lineIndex) => {
                    const displayLine = displayLines[lineIndex] || []
                    const hasContent = displayLine.some((t) => (t?.text || "").trim())
                    return (
                      <div
                        key={lineIndex}
                        className="text-slate-500 text-xs font-mono leading-relaxed h-6 flex items-center justify-end"
                      >
                        {hasContent || lineIndex === currentLineIndex ? (
                          <span className={lineIndex === currentLineIndex ? "text-yellow-400" : ""}>
                            {(lineIndex + 1).toString().padStart(2, " ")}
                          </span>
                        ) : (
                          <span>&nbsp;</span>
                        )}
                      </div>
                    )
                  })}
                </div>

                <div className="flex-1 p-4 font-mono text-sm min-h-[300px]">
                  <div className="leading-relaxed">
                    {structuredCodeLines.map((_, lineIndex) => {
                      const displayLine = displayLines[lineIndex] || []
                      return (
                        <div key={lineIndex} className="min-h-[1.5rem] flex items-center h-6">
                          <span className="flex items-center whitespace-pre">
                            {displayLine.map((token, tokenIndex) => (
                              <span
                                key={tokenIndex}
                                className={`${getTokenColor(token.type)} ${token.type === "string" ? "font-normal" : ""
                                  }`}
                              >
                                {token.text}
                              </span>
                            ))}
                            {lineIndex === currentLineIndex && currentLineIndex < structuredCodeLines.length && (
                              <motion.span
                                className="inline-block w-0.5 h-5 bg-yellow-400 ml-0.5"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 px-4 py-2 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                <span>JavaScript • UTF-8 • LF</span>
                <span>
                  Ln {currentLineIndex + 1}, Col {currentCharIndex + 1}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.a
          href="#summary"
          aria-label="Scroll down"
          className="flex flex-col items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-mono">scroll down</span>
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  )
}
