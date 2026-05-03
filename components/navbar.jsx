"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Technical", href: "#technical" },
  { name: "Projects", href: "/projects" },
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/90 backdrop-blur-sm shadow-sm border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span className="sr-only">Home</span>
          <span className="text-yellow-400 font-[monospace] font-bold">
            {`<`}<span className="hover:underline">DharmSingh</span>{`/>`}
          </span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                activeSection === item.href.substring(1)
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-slate-300"
              }`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-slate-300 hover:text-yellow-400 transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                  activeSection === item.href.substring(1) ? "text-yellow-400" : "text-slate-300"
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
