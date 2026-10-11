"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { KineticText } from "@/components/ui/kinetic-text"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Technical", href: "#technical" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

/**
 * Navigation bar component with smooth scrolling and active section highlighting
 * @returns {JSX.Element}
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll("section[id], div[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (e, href) => {
    e.preventDefault()

    // If it's an external link like /projects, use default navigation
    if (href.startsWith('/')) {
      window.location.href = href
      return
    }

    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      setIsOpen(false)
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" })
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/90 backdrop-blur-sm shadow-sm border-b border-slate-800" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="group relative flex items-center px-3.5 py-1.5 rounded-xl border border-[#D4A017]/30 hover:border-[#D4A017]/70 bg-black/40 hover:bg-[#D4A017]/5 backdrop-blur-md transition-all duration-300 shadow-[0_0_15px_rgba(212,160,23,0.1)]"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          {/* Mini Jharokha Arch Crest atop Logo */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 px-1.5 bg-slate-900/90 text-[#D4A017] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
            <svg width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 6 C 3 2, 8 2, 11 0 C 14 2, 19 2, 22 6" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>

          <span className="sr-only">Home</span>
          <span className="text-[#D4A017] group-hover:text-amber-300 font-[monospace] font-bold flex items-center text-sm sm:text-base tracking-tight transition-colors">
            <span className="text-amber-500/80">{`<`}</span>
            <KineticText as="span" text="opdsbanasya" className="mx-1 text-white group-hover:text-amber-200" />
            <span className="text-amber-500/80">{`/>`}</span>
          </span>
        </Link>

        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#D4A017] ${activeSection === item.href.substring(1)
                  ? "text-[#D4A017] border-b-2 border-[#D4A017]"
                  : "text-slate-300"
                }`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <KineticText as="span" text={item.name} className="mx-1" />
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden text-slate-300 hover:text-yellow-400 transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${activeSection === item.href.substring(1) ? "text-yellow-400" : "text-slate-300"
                  }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
