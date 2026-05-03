'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Briefcase, Code, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { previousProjects } from '@/data/previous-projects'
import ProjectDrawer from '@/components/ProjectDrawer'

/**
 * All projects page
 */
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setDrawerOpen(true)
  }

  // Filter projects
  const filtered = filter === 'all' 
    ? previousProjects 
    : previousProjects.filter(p => p.category === filter)

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#featured-projects"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 group"
          >
            <ArrowLeft size={18} className="group-hover:translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Explore all of my professional work and personal learning projects spanning full-stack development, system design, and creative coding.
          </p>

          {/* Filter Buttons */}
          <div className="flex gap-3 mt-8 flex-wrap">
            {['all', 'Professional', 'Personal'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-yellow-400 text-slate-900'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
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
                  <div className="relative h-56 overflow-hidden bg-slate-900">
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
                      
                      {(project.isdemo || project.company?.link) && (
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
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 4).map(tag => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-1 text-xs rounded bg-slate-700 text-slate-300 border border-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="inline-block px-2 py-1 text-xs rounded bg-slate-700 text-slate-300 border border-slate-600">
                            +{project.tags.length - 4}
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
                      {(project.demo || project.company?.link) && (
                        <a
                          href={project.demo || project.company?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="p-2 rounded-lg hover:bg-yellow-500 text-slate-400 hover:text-slate-900 transition-colors"
                          title="View live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <button
                        onClick={e => {
                          e.stopPropagation()
                          handleProjectClick(project)
                        }}
                        className="ml-auto px-3 py-2 text-xs rounded-lg hover:bg-slate-700 text-slate-400 hover:text-yellow-400 transition-colors font-medium"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No projects found</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Drawer */}
      <ProjectDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        project={selectedProject}
      />
    </main>
  )
}
