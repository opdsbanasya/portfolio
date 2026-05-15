"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Linkedin, Github, Mail, CheckCircle, Instagram, Facebook, Twitter } from "lucide-react"
import { KineticText } from "./ui/kinetic-text"

/**
 * Contact section with form and social media links
 * @returns {JSX.Element}
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold w-fit mx-auto">
            <KineticText as="span" text="Get In Touch" className="mx-1" />
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Send Me a Message</h3>

            {isSubmitted ? (
              <div className="bg-green-900 text-green-300 p-4 rounded-lg flex items-center gap-2 mb-6">
                <CheckCircle size={20} />
                <span>Thank you for your message! I&apos;ll get back to you soon.</span>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-700/50 bg-slate-800/40 text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-slate-800/60 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-700/50 bg-slate-800/40 text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-slate-800/60 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-700/50 bg-slate-800/40 text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-slate-800/60 transition-colors"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium py-2 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 disabled:opacity-70 transform hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Connect With Me</h3>

            <p className="text-slate-300 mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through the form or connect with me on social media.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:opdsbanasya@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
              >
                <Mail className="text-yellow-400" size={24} />
                <span>opdsbanasya@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dharm-singh-saini/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
              >
                <Linkedin className="text-yellow-400" size={24} />
                <span>linkedin.com/in/dharm-singh-saini/</span>
              </a>

              <a
                href="https://github.com/opdsbanasya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
              >
                <Github className="text-yellow-400" size={24} />
                <span>github.com/opdsbanasya</span>
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-slate-100 mb-4">Social Media</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/oyee_dharm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-yellow-400 text-slate-900 p-3 rounded-full hover:bg-yellow-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/opdsbanasya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-yellow-400 text-slate-900 p-3 rounded-full hover:bg-yellow-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="https://x.com/opdsbanasya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-yellow-400 text-slate-900 p-3 rounded-full hover:bg-yellow-500 transition-colors"
                  aria-label="X"
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
