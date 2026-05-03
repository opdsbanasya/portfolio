import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

/**
 * Drawer overlay for expanded project details
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {Object} props.project
 * @returns {JSX.Element}
 */
export default function ProjectDrawer({ isOpen, onClose, project }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-slate-800 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-100">{project.title}</h2>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.category && (
                    <span className="px-2 py-1 rounded text-xs bg-yellow-500/20 text-yellow-300 font-medium">
                      {project.category}
                    </span>
                  )}
                  {project.isdemo && (
                    <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-300 font-medium">
                      Live Demo
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Image */}
              {project.image && (
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">About</h3>
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Bullets/Details */}
              {project.bullets && project.bullets.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2 text-slate-300">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {project.tags && project.tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-700 text-slate-200 text-sm border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-3 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-100 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
