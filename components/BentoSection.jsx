"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Target, MapPin, Zap } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress
} from "react-icons/si";
import Blob from "./Blob";

const MotionDiv = motion.div;

export default function BentoSection() {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40">
        <Blob color="bg-yellow-500/20" size="w-[500px] h-[500px]" className="-top-20 -left-20" duration={20} />
        <Blob color="bg-blue-500/20" size="w-[600px] h-[600px]" className="top-1/2 -right-40" duration={25} delay={2} />
        <Blob color="bg-purple-500/10" size="w-[400px] h-[400px]" className="-bottom-20 left-1/4" duration={18} delay={5} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* About Me Card (Large) */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">Who I am</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I am a results-driven Full Stack Developer based in Jaipur, specializing in building production-grade, scalable web architectures. With a core focus on the MERN Stack and Python (FastAPI), I bridge the gap between complex backend logic and seamless, high-performance user interfaces.
              </p>
              <div className="space-y-4 text-slate-400">
                <div className="flex items-start gap-3">
                  <Zap className="text-yellow-400 shrink-0 mt-1" size={20} />
                  <p><strong className="text-white">Backend Excellence:</strong> Engineered real-time platforms and RESTful APIs with high availability.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-yellow-400 shrink-0 mt-1" size={20} />
                  <p><strong className="text-white">Performance-First:</strong> Optimizing SEO and load times using Next.js (SSR).</p>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Tech Stack Card (Medium) */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[50px]"></div>
            <h3 className="text-2xl font-bold mb-6 text-white">Core Arsenal</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 flex-grow place-content-center">
              {[
                { icon: SiReact, color: "#61DAFB", name: "React" },
                { icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
                { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
                { icon: SiPython, color: "#3776AB", name: "Python" },
                { icon: SiFastapi, color: "#009688", name: "FastAPI" },
                { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
                { icon: SiExpress, color: "#f9fbff", name: "Express" },
                { icon: SiTypescript, color: "#007ACC", name: "TypeScript" },
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group/icon">
                  <tech.icon size={32} color={tech.color} className="grayscale group-hover/icon:grayscale-0 transition-all duration-300 transform group-hover/icon:scale-110" />
                  <span className="text-xs text-slate-500 group-hover/icon:text-slate-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Location Card (Small) */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599661559886-22a3089d81d4?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-luminosity"></div>
            <MapPin size={48} className="text-yellow-400 mb-4 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            <h4 className="text-xl font-bold text-white mb-2">Jaipur</h4>
            <p className="text-slate-400">Rajasthan, India</p>
          </MotionDiv>

          {/* Status Card (Small) */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center relative"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 relative">
              <div className="absolute inset-0 rounded-full border-2 border-green-500 border-dashed animate-spin-slow"></div>
              <div className="w-8 h-8 rounded-full bg-green-500 animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Available</h4>
            <p className="text-slate-400 text-sm">Open for freelance & full-time</p>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
}
