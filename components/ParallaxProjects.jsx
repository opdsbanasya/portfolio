"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { previousProjects } from "@/data/previous-projects";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import MagneticButton from "./MagneticButton";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 md:mb-48 ${isEven ? "" : "lg:flex-row-reverse"
        }`}
    >
      <div className="w-full lg:w-3/5 overflow-hidden rounded-3xl relative aspect-[4/3] sm:aspect-video group">
        <div className="absolute inset-0 bg-yellow-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
          <Image
            src={project.image || "/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 60vw"
          />
        </motion.div>
      </div>

      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase border border-yellow-400/30 px-3 py-1 rounded-full">
            {project.category}
          </span>
          {project.company && (
            <span className="text-slate-400 text-sm">{project.company.name}</span>
          )}
        </div>

        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight group-hover:text-yellow-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-slate-400 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {project.demo && (
            <MagneticButton href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium">
              <ExternalLink size={20} />
              <span>Live Site</span>
            </MagneticButton>
          )}
          {project.github && (
            <MagneticButton href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-slate-300 font-medium">
              <Github size={20} />
              <span>Repository</span>
            </MagneticButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ParallaxProjects() {
  const featuredProjects = previousProjects.filter(p => p.featured);
  const otherProjects = previousProjects.filter(p => !p.featured).slice(0, 4); // show a few top ones

  return (
    <section id="projects" className="py-24 relative z-10 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24 md:mb-32 flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-10"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              Selected Work
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-right hidden md:block">
            A showcase of enterprise applications, scalable backends, and beautiful digital experiences.
          </p>
        </motion.div>

        <div className="mt-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 border-b border-white/10 pb-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold">Other Explorations</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <motion.a
                key={project.title}
                href={project.demo || project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group block p-8 rounded-3xl glass-card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-colors duration-500"></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    <Github size={24} className="text-slate-300" />
                  </div>
                  <ExternalLink size={24} className="text-slate-500 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-slate-500">{tag}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
