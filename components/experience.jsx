"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin, MonitorSmartphone, Briefcase } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Coreweb Software Solutions",
    location: "Jaipur",
    mode: "Work from Home",
    tech: ["Next.js", "React", "Node.js", "SQL", "Tailwind CSS", "API Integration"],
    period: "December 2025 - Present",
    bullets: [
      "Delivered 7+ high-performance portfolio websites by developing secure backend logic and dynamic content management systems.",
      "Built a scalable B2C business listing directory, managing third-party integrations and database connections (PostgreSQL & Prisma).",
      "Implemented server-side rendering (SSR) in Next.js to optimize load times and improve SEO performance.",
      "Developed reusable, accessible UI components and optimized overall web performance utilizing Next.js (SSR) and Tailwind CSS.",
    ],
    logo: "/companies/corewebLogo.png"
  },
  {
    title: "Full Stack Developer",
    company: "BM Infotrade PVT LDT",
    location: "Jaipur",
    mode: "On-site",
    tech: ["Node.js", "Express.js", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Socket.io"],
    period: "October 2025 – April 2026",
    bullets: [
      "Engineered scalable backend logic for \"Snoh Vision\", a live surveillance platform, ensuring high availability and fault tolerance.",
      "Designed robust REST APIs and optimized database schemas to handle high-concurrency training logs.",
      "Built Python microservices using FastAPI with async/await patterns, database connection pooling, and middleware.",
      "Contributed automation features to \"Snoh Fusion\", including Email Watchers and AI-based extraction.",
    ],
    logo: "/companies/bminfotrade.png"
  },
];

const ExperienceItem = ({ role }) => {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:hidden absolute left-0 top-2 w-4 h-4 rounded-full bg-yellow-400 border-4 border-black z-10"></div>
      
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-8 shadow-2xl relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 relative z-10">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 shrink-0 flex items-center justify-center">
              {role.logo ? (
                <Image src={role.logo} alt={role.company} width={32} height={32} className="object-contain" />
              ) : (
                <Briefcase className="text-yellow-400" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{role.title}</h3>
              <div className="text-yellow-400 font-medium text-lg mt-1">{role.company}</div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 text-sm text-slate-400 shrink-0 md:text-right">
            <span className="flex items-center md:justify-end gap-2">
              <Briefcase size={14} className="text-slate-500" /> {role.period}
            </span>
            <span className="flex items-center md:justify-end gap-2">
              <MapPin size={14} className="text-slate-500" /> {role.location}
            </span>
            <span className="flex items-center md:justify-end gap-2">
              <MonitorSmartphone size={14} className="text-slate-500" /> {role.mode}
            </span>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap gap-2 relative z-10">
          {role.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-4 relative z-10">
          {role.bullets.map((b, i) => (
            <li key={i} className="text-slate-400 leading-relaxed pl-6 relative">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-yellow-400/50"></span>
              {b}
            </li>
          ))}
        </ul>
      </motion.article>
    </div>
  );
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 relative z-10 bg-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            Journey
          </h2>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Scroll Progress Line (Desktop) */}
          <div className="hidden md:block absolute left-[30px] top-4 bottom-0 w-px bg-white/10 origin-top">
            <motion.div 
              className="absolute top-0 w-full bg-yellow-400 origin-top" 
              style={{ scaleY, bottom: 0 }}
            />
          </div>

          <div className="space-y-12 md:pl-20">
            {experiences.map((role, idx) => (
              <div key={idx} className="relative">
                {/* Node dot on the line */}
                <div className="hidden md:block absolute -left-[57px] top-6 w-4 h-4 rounded-full bg-black border-[3px] border-yellow-400 z-10"></div>
                <ExperienceItem role={role} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
