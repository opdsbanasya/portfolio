"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, MonitorSmartphone, Briefcase } from "lucide-react"
import Image from "next/image"

const experiences = [

  {
    title: "Frontend Developer Intern",
    company: "Coreweb Software Solutions",
    location: "Remote",
    mode: "Work from Home",
    tech: ["Next.js", "React", "Tailwind CSS", "Zoho CRM", "SEO"],
    period: "Recent",
    bullets: [
      "Developed production-ready websites using Next.js with SSR/SSG for optimal SEO and performance; integrated Zoho CRM for lead management and client tracking.",
      "Implemented responsive Tailwind CSS designs with smooth animations and accessibility features (ARIA labels, semantic HTML) across multiple client projects.",
      "Collaborated with backend teams on API integration, authentication flows, and state management using Redux for complex data flows.",
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
      "Architected and deployed Snoh Vision, a high-availability surveillance backend handling real-time video streams using FastAPI, async processing, and socket.io for live feed delivery to 1000+ concurrent users.",
      "Designed scalable REST APIs for surveillance systems with robust error handling, JWT authentication, pagination, and database optimization for high-throughput data ingestion.",
      "Built Python microservices using FastAPI with async/await patterns, database connection pooling, and middleware for CORS, rate limiting, and request validation.",
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
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">Experience</h2>
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
              className="rounded-xl border border-slate-800 bg-slate-800/60 p-6 shadow-lg"
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
