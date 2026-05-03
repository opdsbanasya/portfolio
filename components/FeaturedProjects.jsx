'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Briefcase, Code } from 'lucide-react'
import { previousProjects } from '@/data/previous-projects'
import ProjectDrawer from './ProjectDrawer'
import Image from 'next/image'

/**
 * Featured projects section for home page
 * @returns {JSX.Element}
 */
export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Get featured projects
  const featured = previousProjects.filter(p => p.featured).slice(0, 3)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setDrawerOpen(true)
  }

  return (
    <section id="featured-projects" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Featured Projects</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A selection of my professional work and standout personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', damping: 20 }}
                className="h-full rounded-lg overflow-hidden bg-slate-800 border border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Type Badge */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.category === 'Professional' ? (
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-medium backdrop-blur-md">
                        {/* <Briefcase size={14} /> */}
                        <Image
                          src={project.company.logo}
                          alt={project.company.name}
                          width={20} height={20}
                          className="rounded-full" />
                        <p className='text-blue-500'> {project.company.name}</p>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/90 text-white text-xs font-medium backdrop-blur-sm">
                        <Code size={14} />
                        Personal
                      </div>
                    )}

                    {(project.isdemo || project.company.link) && (
                      <div className="px-3 py-1 rounded-full bg-green-500/90 text-white text-xs font-medium backdrop-blur-sm">
                        Live
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 text-xs rounded bg-slate-700 text-slate-300 border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="inline-block px-2 py-1 text-xs rounded bg-slate-700 text-slate-300 border border-slate-600">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-3 border-t border-slate-700">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="p-2 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-yellow-400 transition-colors"
                        title="View code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {(project.demo || project.company.link) && (
                      <a
                        href={project.demo || project.company.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="p-2 rounded-lg hover:bg-yellow-500 text-slate-400 hover:text-slate-900 transition-colors"
                        title="View live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>

      {/* Project Drawer */}
      <ProjectDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        project={selectedProject}
      />
    </section>
  )
}
