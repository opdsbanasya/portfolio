"use client"

import { motion } from "framer-motion"
import {
  SiReact, SiNextdotjs, SiRedux, SiJavascript, SiHtml5,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiMongodb, SiPostgresql, SiMysql,
  SiTailwindcss, SiFramer, SiGit, SiGithub, SiPostman,
  SiJsonwebtokens, SiSocketdotio, SiMongoose,
  SiGsap,
  SiShadcnui, SiVercel, SiNetlify, SiGithubpages,
  SiVite, SiEslint, SiPrettier, SiNotion
} from "react-icons/si"
import { VscVscode, VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { TbApi, TbServerCog, TbCloudDataConnection, TbBrandCss3 } from "react-icons/tb"
import { AntigravityIcon, GCPIcon } from "./Icons"
import { LucideBadgeIndianRupee, LucideMailOpen } from "lucide-react";
import { CiStreamOn } from "react-icons/ci";
import { RiGeminiFill } from "react-icons/ri";
import { KineticText } from "./ui/kinetic-text";

const skillCategories = [
  {
    title: "FRONTEND ARCHITECTURE",
    skills: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-slate-200" },
      { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    ]
  },
  {
    title: "BACKEND DEVELOPMENT",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express", icon: SiExpress, color: "text-slate-200" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
      { name: "REST APIs", icon: TbApi, color: "text-emerald-400" },
      { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-500" },
      { name: "Middleware", icon: TbCloudDataConnection, color: "text-purple-400" },
      { name: "Microservices", icon: TbServerCog, color: "text-blue-400" },
    ]
  },
  {
    title: "DATABASES",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Mongoose", icon: SiMongoose, color: "text-[#880000]" },
    ]
  },
  {
    title: "CSS & STYLING",
    skills: [
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "CSS3", icon: TbBrandCss3, color: "text-[#1572B6]" },
      { name: "Framer", icon: SiFramer, color: "text-slate-200" },
      { name: "GSAP", icon: SiGsap, color: "text-green-500" },
      { name: "Shadcn UI", icon: SiShadcnui, color: "text-slate-300" },
    ]
  },
  {
    title: "TOOLING & BUILD",
    skills: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "text-slate-200" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
      { name: "ESLint", icon: SiEslint, color: "text-[#4B32C3]" },
      { name: "Prettier", icon: SiPrettier, color: "text-[#F7B93E]" },
      { name: "Notion", icon: SiNotion, color: "text-slate-200" },
      { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
      { name: "Antigravity", icon: AntigravityIcon, color: "" },
    ]
  },
  {
    title: "INTEGRATIONS",
    skills: [
      { name: "Socket.io", icon: SiSocketdotio, color: "text-slate-200" },
      { name: "Server-Sent Events", icon: CiStreamOn, color: "text-slate-200" },
      { name: "AI & LLM Integrations", icon: RiGeminiFill, color: "text-blue-400" },
      { name: "Payment Gateways", icon: LucideBadgeIndianRupee, color: "text-orange-400" },
      { name: "Email Integration", icon: LucideMailOpen, color: "text-blue-400" }
    ]
  },
  {
    title: "CLOUD & DEPLOYMENT",
    skills: [
      { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
      { name: "Azure", icon: VscAzure, color: "text-[#0089D6]" },
      { name: "GCP", icon: GCPIcon, color: "" },
      { name: "Vercel", icon: SiVercel, color: "text-slate-200" },
      { name: "Netlify", icon: SiNetlify, color: "text-[#00C7B7]" },
      { name: "GitHub Pages", icon: SiGithubpages, color: "text-slate-200" },
    ]
  }
]

export default function Technical() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="technical" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold w-fit mx-auto">
            <KineticText as="span" text="Technical Expertise" className="mx-1" />
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 shadow-xl relative overflow-hidden"
            >
              {/* Subtle top gradient */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-slate-800/10 to-transparent pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xs font-semibold tracking-widest text-amber-500/90 whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="h-px bg-slate-800/80 flex-grow"></div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-slate-700/50 bg-slate-800/60 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group cursor-default"
                    >
                      <Icon className={`text-3xl ${skill.color} drop-shadow-sm group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-[10px] font-medium text-slate-400 group-hover:text-slate-200 transition-colors text-center wrap-balance">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
