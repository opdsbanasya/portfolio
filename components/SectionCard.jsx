"use client"

import { motion } from 'framer-motion'

/**
 * Reusable card wrapper for portfolio sections
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.id]
 * @param {string} [props.className]
 * @returns {JSX.Element}
 */
export default function SectionCard({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        py-12 px-4 sm:px-6 lg:px-8
        bg-slate-800/50 rounded-lg border border-slate-700/50
        shadow-lg hover:shadow-xl transition-shadow duration-300
        ${className}
      `}
    >
      {children}
    </motion.section>
  )
}
