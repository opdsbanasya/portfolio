"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Send, Linkedin, Github, Mail, CheckCircle, Instagram, Facebook, Twitter } from "lucide-react"
import MagneticButton from "./MagneticButton"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        const errorData = await response.json()
        alert(`Failed to send message: ${errorData.message}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("An error occurred while submitting the form. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="pt-24 pb-12 relative z-10 bg-black overflow-hidden">
      
      {/* Massive Marquee */}
      <div className="w-full overflow-hidden flex whitespace-nowrap mb-20 opacity-20 select-none pointer-events-none">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="flex font-bold text-[15vw] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
        >
          <span className="mr-8">LET'S TALK</span>
          <span className="mr-8">LET'S TALK</span>
          <span className="mr-8">LET'S TALK</span>
          <span className="mr-8">LET'S TALK</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Got a project in mind?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md">
              Whether it's a freelance opportunity, a full-time role, or just a quick chat about web architecture—my inbox is always open.
            </p>

            <div className="space-y-6 mb-12">
              <MagneticButton
                href="mailto:opdsbanasya@gmail.com"
                className="flex items-center gap-4 text-xl text-white hover:text-yellow-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                  <Mail size={20} />
                </div>
                opdsbanasya@gmail.com
              </MagneticButton>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-semibold">Socials</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, link: "https://www.linkedin.com/in/dharm-singh-saini/" },
                  { icon: Github, link: "https://github.com/opdsbanasya" },
                  { icon: Twitter, link: "https://x.com/opdsbanasya" },
                  { icon: Instagram, link: "https://www.instagram.com/oyee_dharm/" },
                ].map((social, i) => (
                  <MagneticButton
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </MagneticButton>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Soft glow behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8">Send a message</h3>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center h-[300px]"
              >
                <CheckCircle size={48} className="text-green-500" />
                <span className="text-xl font-medium">Message sent successfully!</span>
                <span className="text-slate-400 text-sm">I'll get back to you within 24 hours.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-5 py-4 bg-black/40 border border-white/10 text-white rounded-2xl focus:outline-none focus:border-yellow-400/50 focus:bg-black/60 transition-all duration-300 placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-400 text-sm ml-2">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-5 py-4 bg-black/40 border border-white/10 text-white rounded-2xl focus:outline-none focus:border-yellow-400/50 focus:bg-black/60 transition-all duration-300 placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm ml-2">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-2">Message</label>
                  <textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="w-full px-5 py-4 bg-black/40 border border-white/10 text-white rounded-2xl focus:outline-none focus:border-yellow-400/50 focus:bg-black/60 transition-all duration-300 placeholder:text-slate-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-red-400 text-sm ml-2">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
