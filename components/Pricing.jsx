"use client"

import { motion } from "framer-motion"
import { Check, Rocket, Code2 } from "lucide-react"
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

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Plan 1: Standard Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-10 flex flex-col relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-yellow-400">
              <Rocket size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Standard Website</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">₹12,999</span>
              <span className="text-slate-500 font-medium">/ starts from</span>
            </div>

            <p className="text-slate-400 mb-8">Perfect for small businesses, portfolios, and landing pages looking to establish a premium online presence.</p>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "4-5 Custom Designed Pages",
                "Responsive on all devices",
                "Basic SEO Optimization",
                "Contact Form Integration",
                "Fast Load Times (Next.js/React)"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check size={20} className="text-green-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <MagneticButton
              href="#contact"
              className="w-full py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-colors"
            >
              Get Started
            </MagneticButton>
          </motion.div>

          {/* Plan 2: Custom Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-8 md:p-10 flex flex-col relative group overflow-hidden border border-yellow-400/30 bg-slate-900/60 backdrop-blur-2xl shadow-[0_0_50px_-20px_rgba(251,191,36,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* "Most Popular" Badge */}
            <div className="absolute top-0 right-8 bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-b-lg">
              CUSTOM
            </div>

            <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6 text-yellow-400 relative z-10">
              <Code2 size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Complex Solutions</h3>
            <div className="flex items-baseline gap-2 mb-6 relative z-10">
              <span className="text-4xl font-bold text-white">Let's Discuss</span>
            </div>

            <p className="text-slate-400 mb-8 relative z-10">Full-stack web applications, scalable backends, e-commerce, and specialized AI integrations.</p>

            <ul className="space-y-4 mb-10 flex-grow relative z-10">
              {[
                "Custom Full-Stack Web Apps",
                "Complex Database Architecture",
                "Third-Party API Integrations",
                "E-Commerce & Payment Gateways",
                "Admin Dashboards & CMS",
                "AI & ML Integrations"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check size={20} className="text-yellow-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <MagneticButton
              href="#contact"
              className="w-full py-4 bg-yellow-400 text-black rounded-2xl font-bold hover:bg-yellow-500 transition-colors relative z-10"
            >
              Book a Consultation
            </MagneticButton>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
