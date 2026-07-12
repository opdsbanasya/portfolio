"use client"

import { motion } from "framer-motion"
import { Check, Rocket, Code2, Monitor, Sparkles } from "lucide-react"
import MagneticButton from "./MagneticButton"
import Blob from "./Blob"

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative z-10 overflow-hidden bg-black border-t border-white/5">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-30">
        <Blob color="bg-yellow-500/20" size="w-[600px] h-[600px]" className="-left-40 top-0" duration={22} />
        <Blob color="bg-blue-500/10" size="w-[500px] h-[500px]" className="-right-20 bottom-0" duration={28} delay={4} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6">
            Freelance Pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Transparent pricing for high-quality web solutions. Whether you need a standard portfolio or a complex web application, I've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          
          {/* Plan 1: Starter Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-6 lg:p-8 flex flex-col relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300">
              <Monitor size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Starter Website</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-white">₹7,999</span>
              <span className="text-slate-500 font-medium text-xs">/ starts from</span>
            </div>

            <p className="text-slate-400 mb-8 text-sm">Perfect for small businesses looking for a professional online presence.</p>

            <ul className="space-y-4 mb-10 flex-grow text-sm">
              {[
                "Premium Single-Page Website",
                "Fully Responsive Design",
                "Brand Showcase",
                "Product/Service Showcase",
                "WhatsApp Integration",
                "Contact Form",
                "Basic SEO Setup",
                "Fast Loading Website"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check size={18} className="text-green-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <MagneticButton
              href="#contact"
              className="w-full py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-colors mt-auto text-sm"
            >
              Get Started
            </MagneticButton>
          </motion.div>

          {/* Plan 2: Standard Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-3xl p-6 lg:p-8 flex flex-col relative group overflow-hidden border border-white/10 bg-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* "Popular" Badge */}
            <div className="absolute top-0 right-6 bg-yellow-400/90 text-black text-[10px] font-bold px-3 py-1 rounded-b-lg">
              POPULAR
            </div>

            <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6 text-yellow-400">
              <Rocket size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Standard Website</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">₹14,999</span>
              <span className="text-slate-500 font-medium text-xs">/ starts from</span>
            </div>

            <p className="text-slate-400 mb-8 text-sm">Perfect for growing businesses that need a complete business website.</p>

            <ul className="space-y-4 mb-10 flex-grow text-sm">
              {[
                "4–5 Custom Designed Pages",
                "Responsive on all devices",
                "Premium UI/UX",
                "Contact Form Integration",
                "Basic SEO Optimization",
                "Fast Load Times (Next.js/React)",
                "WhatsApp Integration",
                "Deployment Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <MagneticButton
              href="#contact"
              className="w-full py-3 bg-white text-black rounded-xl font-bold hover:bg-slate-200 transition-colors mt-auto text-sm"
            >
              Get Started
            </MagneticButton>
          </motion.div>

          {/* Plan 3: Custom Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-6 lg:p-8 flex flex-col relative group overflow-hidden border border-blue-400/30 bg-slate-900/60 backdrop-blur-2xl shadow-[0_0_50px_-20px_rgba(59,130,246,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center mb-6 text-blue-400 relative z-10">
              <Code2 size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Custom Solutions</h3>
            <div className="flex items-baseline gap-2 mb-6 relative z-10">
              <span className="text-3xl font-bold text-white">Let's Discuss</span>
            </div>

            <p className="text-slate-400 mb-8 text-sm relative z-10">Full-stack web applications, dashboards, e-commerce and AI-powered solutions.</p>

            <ul className="space-y-4 mb-10 flex-grow relative z-10 text-sm">
              {[
                "Custom Full-Stack Web Apps",
                "Complex Database Architecture",
                "Third-Party API Integrations",
                "E-Commerce & Payment Gateways",
                "Admin Dashboards & CMS",
                "AI & ML Integrations"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <MagneticButton
              href="#contact"
              className="w-full py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors relative z-10 mt-auto text-sm"
            >
              Book a Consultation
            </MagneticButton>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
