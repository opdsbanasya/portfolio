"use client"

import { motion } from "framer-motion"
import {
  SiReact, SiNextdotjs, SiRedux, SiJavascript, SiHtml5,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiMongodb, SiPostgresql, SiMysql,
  SiTailwindcss, SiFramer, SiGit, SiGithub, SiPostman,
  SiJsonwebtokens, SiSocketdotio, SiMongoose,
  SiGsap,
  SiShadcnui, SiVercel, SiNetlify, SiGithubpages,
  SiVite, SiEslint, SiPrettier, SiNotion,
  SiTypescript,
  SiPrisma
} from "react-icons/si"
import { VscVscode, VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { TbApi, TbServerCog, TbCloudDataConnection, TbBrandCss3 } from "react-icons/tb"
import { AntigravityIcon, GCPIcon } from "./Icons"
import { LucideBadgeIndianRupee, LucideMailOpen } from "lucide-react";
import { CiStreamOn } from "react-icons/ci";
import { RiGeminiFill } from "react-icons/ri";

const skillsRow1 = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
]

const skillsRow2 = [
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "CSS3", icon: TbBrandCss3, color: "#1572B6" },
  { name: "Framer Motion", icon: SiFramer, color: "#ffffff" },
  { name: "GSAP", icon: SiGsap, color: "#4ade80" },
  { name: "REST APIs", icon: TbApi, color: "#34d399" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
  { name: "Prisma", icon: SiPrisma, color: "#E9322D" },
  { name: "Mongoose", icon: SiMongoose, color: "#880000" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
]

const skillsRow3 = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Azure", icon: VscAzure, color: "#0089D6" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#ec4899" },
  { name: "AI/LLMs", icon: RiGeminiFill, color: "#60a5fa" },
  { name: "Payments", icon: LucideBadgeIndianRupee, color: "#fb923c" },
]

const MarqueeRow = ({ items, reverse = false }) => {
  return (
    <div className="flex overflow-hidden group">
      <motion.div
        animate={{ x: reverse ? [0, -1000] : [-1000, 0] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex gap-6 shrink-0 pr-6 items-center"
      >
        {[...items, ...items, ...items].map((skill, index) => {
          const Icon = skill.icon
          return (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-3 px-6 py-4 glass-card rounded-2xl hover:bg-white/10 transition-colors"
            >
              <Icon size={24} color={skill.color || "#ffffff"} />
              <span className="text-white font-medium text-lg whitespace-nowrap">{skill.name}</span>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function TechnicalMarquee() {
  return (
    <section id="technical" className="py-24 relative z-10 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive list of the tools, frameworks, and languages I use to build scalable digital experiences.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 -mx-10 md:-mx-20 lg:-mx-32 mask-horizontal-fades">
        <MarqueeRow items={skillsRow1} />
        <MarqueeRow items={skillsRow2} reverse={true} />
        <MarqueeRow items={skillsRow3} />
      </div>

      <style jsx>{`
        .mask-horizontal-fades {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  )
}
