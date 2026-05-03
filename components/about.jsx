"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Target, Code } from "lucide-react"

/**
 * About section with introduction and quick facts
 * @returns {JSX.Element}
 */
export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">About</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-xl border border-slate-700 bg-slate-900/60 p-6"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Who I am</h3>
            <p className="text-slate-300 leading-relaxed">
              Results-driven Full Stack Developer with strong expertise in the MERN and Python stack. Currently contributing to
              live surveillance products using React.js and expanding backend capabilities in Python (FastAPI). Skilled in designing
              RESTful APIs, optimizing frontend architecture with React and Redux, and collaboratively developing backend logic.
              Passionate about clean code, rapid technology adaptation, and delivering high-quality web solutions.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["MERN", "React.js", "Redux", "Python (FastAPI)", "RESTful APIs", "Backend Development", "Frontend Architecture", "React and Redux", "Clean Code", "Technology Adaptation", "Web Solutions"].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-slate-700 bg-slate-900/60 p-6"
          >
            <h4 className="text-sm uppercase tracking-wide text-slate-400 mb-2">Quick Facts</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <BadgeCheck className="text-yellow-400" size={16} /> Role: Fullstack Developer
              </li>
              <li className="flex items-center gap-2">
                <Target className="text-yellow-400" size={16} /> Location: Jaipur, Rajasthan, India
              </li>
              <li className="flex items-center gap-2">
                <Code className="text-yellow-400" size={16} /> Focus: Production Systems, Scalability
              </li>
              <li className="flex items-center gap-2">
                <Code className="text-yellow-400" size={16} /> Stack: MERN & Python (FastAPI)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
