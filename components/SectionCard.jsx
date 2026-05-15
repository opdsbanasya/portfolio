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
      className={`${className} border border-slate-700/50 rounded-2xl overflow-hidden bg-slate-800/20`}
    >
      {children}
    </motion.section>
  )
}
