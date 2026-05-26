"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, MonitorSmartphone, Briefcase } from "lucide-react"
import Image from "next/image"
import { KineticText } from "./ui/kinetic-text"

const experiences = [

  {
    title: "Full Stack Developer",
    company: "Coreweb Software Solutions",
    location: "Remote",
    mode: "Work from Home",
    tech: ["Next.js", "React", "Tailwind CSS", "Zoho CRM", "SEO"],
    period: "December 2025 - Present",
    bullets: [
      "Delivered 7+ high-performance portfolio websites by developing secure backend logic and dynamic content management systems.",
      "Built a scalable B2C business listing directory, managing third-party integrations and database connections (PostgreSQL & Prisma) to ensure reliable content delivery and system stability.",
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
      "Engineered scalable backend logic for \"Snoh Vision\", a live surveillance platform, ensuring high availability and fault tolerance for real-time data streams.",
      "Designed robust REST APIs and optimized database schemas to handle high-concurrency training logs, model metrics, and automated alert systems.",
      "Built Python microservices using FastAPI with async/await patterns, database connection pooling, and middleware for CORS, rate limiting, and request validation.",
      "Contributed automation features to \"Snoh Fusion\", including Email Watchers for mailbox monitoring and multi-document invoice processing pipelines with AI-based extraction.",
      "Integrated frontend components with backend services to ensure seamless user experience while maintaining strict API security standards.",
    ],
    logo: "/companies/bminfotrade.png"
  },

]

/**
 * Experience section with work history and roles
 * @returns {JSX.Element}
 */
export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold w-fit mx-auto">
            <KineticText as="span" text="Experience" className="mx-1" />
          </h2>
          <div className="w-28 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((role, idx) => (
            <motion.article
              key={role.company}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl border border-slate-700/50 bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-300 p-6 shadow-lg"
            >
              <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">{role.title}</h3>
                  <div className="text-slate-300 flex items-center gap-2">
                    <Image
                      src={role.logo}
                      alt={role.company}
                      width={24}
                      height={24}
                      className="rounded-full"
                    /> {role.company}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-yellow-400" /> {role.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <MonitorSmartphone size={14} className="text-yellow-400" /> {role.mode}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} className="text-yellow-400" /> {role.period}
                  </span>
                </div>
              </header>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-200 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2">
                {role.bullets.map((b, i) => (
                  <li key={i} className="text-slate-300 leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-2 inline-block w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
