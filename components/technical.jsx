"use client"

import { motion } from "framer-motion"

const sections = [
  {
    title: "Backend & Databases",
    items: ["Node.js", "Express.js", "Python", "FastAPI", "MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Async/Await", "Microservices"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "React Router", "Framer Motion", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Systems & Tools",
    items: ["Git", "GitHub", "REST APIs", "JWT Authentication", "Socket.io", "Postman", "VS Code", "Middleware", "CORS", "Rate Limiting", "Pagination", "Payment Gateways"],
  },
]

/**
 * Technical skills section with backend, frontend, and tools categories
 * @returns {JSX.Element}
 */
export default function Technical() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }
  const item = {
    hidden: { y: 12, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.35 } },
  }

  return (
    <section id="technical" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">Technical Expertise</h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-slate-800 bg-slate-800/60 p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">{section.title}</h3>
              <motion.ul className="flex flex-wrap gap-2">
                {section.items.map((itemText) => (
                  <motion.li
                    key={itemText}
                    variants={item}
                    className="px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700 text-slate-200 text-sm"
                  >
                    {itemText}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
