"use client"

import React, { forwardRef, useRef } from "react"
import { motion } from "framer-motion"
import { BadgeCheck, Target, Code, Globe } from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { Highlighter } from "@/components/ui/highlighter"
import { cn } from "@/lib/utils"

import {
  SiReact, SiJavascript,
  SiNodedotjs, SiExpress, SiPython,
  SiMongodb
} from "react-icons/si"
import { KineticText } from "./ui/kinetic-text"

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-700/50 bg-slate-900 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

/**
 * About section with introduction, quick facts, and animated beam layout
 * @returns {JSX.Element}
 */
export default function About() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const top1Ref = useRef(null);
  const top2Ref = useRef(null);
  const top3Ref = useRef(null);
  const bot1Ref = useRef(null);
  const bot2Ref = useRef(null);
  const bot3Ref = useRef(null);

  return (
    <section id="about" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold w-fit mx-auto">
            <KineticText as="span" text="About" className="mx-1" />
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Side: Animated Beam Layout */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-slate-700/50 bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-300 p-6 flex items-center justify-center min-h-[450px]"
          >
            <div
              className="relative flex w-full max-w-[400px] h-[400px] flex-col items-center justify-between py-4"
              ref={containerRef}
            >
              <div className="flex w-full flex-row items-center justify-between z-10">
                <Circle ref={top1Ref}><SiNodedotjs size={24} color="#339933" /></Circle>
                <Circle ref={top2Ref}><SiExpress size={24} color="#fff" /></Circle>
                <Circle ref={top3Ref}><SiReact size={24} color="#61DAFB" /></Circle>
              </div>

              <div className="flex w-full flex-row items-center justify-center z-10">
                <Circle ref={centerRef} className="h-20 w-20 bg-slate-800/80 backdrop-blur-md border-slate-600 shadow-xl">
                  <Globe className="text-yellow-400" size={36} />
                </Circle>
              </div>

              <div className="flex w-full flex-row items-center justify-between z-10">
                <Circle ref={bot1Ref}><SiJavascript size={24} color="#F7DF1E" /></Circle>
                <Circle ref={bot2Ref}><SiMongodb size={24} color="#47A248" /></Circle>
                <Circle ref={bot3Ref}><SiPython size={24} color="#3776AB" /></Circle>
              </div>

              {/* Animated Beams */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={top1Ref}
                toRef={centerRef}
                curvature={-30}
                pathColor="rgba(148, 163, 184, 0.2)"
                gradientStartColor="#339933"
                gradientStopColor="#EAB308"
                duration={3}
                delay={0}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={top2Ref}
                toRef={centerRef}
                curvature={0}
                pathColor="rgba(148, 163, 184, 0.2)"
                gradientStartColor="#fff"
                gradientStopColor="#EAB308"
                duration={3}
                delay={0}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={top3Ref}
                toRef={centerRef}
                curvature={30}
                pathColor="rgba(148, 163, 184, 0.2)"
                gradientStartColor="#61DAFB"
                gradientStopColor="#EAB308"
                duration={3}
                delay={0}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={bot1Ref}
                toRef={centerRef}
                curvature={-30}
                pathColor="rgba(148, 163, 184, 0.2)"
                gradientStartColor="#F7DF1E"
                gradientStopColor="#EAB308"
                duration={3}
                delay={0}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={bot2Ref}
                toRef={centerRef}
                curvature={0}
                pathColor="rgba(148, 163, 184, 0.2)"
                gradientStartColor="#47A248"
                gradientStopColor="#EAB308"
                duration={3}
                delay={0}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={bot3Ref}
                toRef={centerRef}
                curvature={30}
                pathColor="rgba(148, 163, 184, 0.2)"
                gradientStartColor="#3776AB"
                gradientStopColor="#EAB308"
                duration={3}
                delay={0}
              />
            </div>
          </motion.div>

          {/* Right Side: Quick Facts + Who I am */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-xl border border-slate-700/50 bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-300 p-6 sm:p-8 flex flex-col gap-8"
          >
            {/* Quick Facts at the top */}
            <div>
              <h4 className="text-sm uppercase tracking-wide text-slate-400 mb-4 font-semibold">Quick Facts</h4>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
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
            </div>

            <div className="h-px bg-slate-700/50 w-full"></div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Who I am</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I am a results-driven <Highlighter action="underline" color="rgba(250, 204, 21, 0.3)">Full Stack Developer</Highlighter> and <Highlighter color="rgba(250, 204, 21, 0.3)">Freelance Software Engineer</Highlighter> based in Jaipur, specializing in building production-grade, <Highlighter action="underline" color="#fbbf24">scalable web architectures</Highlighter>. With a core focus on the <Highlighter color="rgba(250, 204, 21, 0.3)">MERN Stack</Highlighter> and <Highlighter color="rgba(250, 204, 21, 0.3)">Python (FastAPI)</Highlighter>, I bridge the gap between complex backend logic and seamless, high-performance user interfaces.
              </p>

              <h4 className="text-lg font-semibold text-slate-200 mb-3">What I Bring to the Table:</h4>
              <ul className="text-slate-300 leading-relaxed space-y-4 mb-6">
                <li>
                  <strong className="text-yellow-400">Backend Excellence:</strong> Engineered real-time surveillance platforms like Snoh Vision and AI-integrated pipelines for automated data extraction. I specialize in designing robust RESTful APIs and <Highlighter action="underline" color="#fbbf24">microservices with high availability</Highlighter>.
                </li>
                <li>
                  <strong className="text-yellow-400">Performance-First Frontend:</strong> Currently optimizing SEO and load times at Coreweb Software Solutions using <Highlighter color="rgba(250, 204, 21, 0.3)">Next.js (SSR)</Highlighter> and Tailwind CSS to deliver lightning-fast web applications.
                </li>
                <li>
                  <strong className="text-yellow-400">Scalability & Security:</strong> Experienced in handling real-time data streams via <Highlighter action="circle" color="#fbbf24">Socket.io</Highlighter>, integrating secure payment gateways like Razorpay, and enforcing strict security standards using JWT authentication.
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-slate-200 mb-3">Technical DNA:</h4>
              <ul className="text-slate-300 leading-relaxed space-y-2">
                <li>
                  <strong className="text-slate-400">Stack:</strong> Next.js, React, Node.js, Python (FastAPI), MongoDB, SQL.
                </li>
                <li>
                  <strong className="text-slate-400">Cloud & Tools:</strong> AWS, Azure, Postman (API Fundamentals Student Expert), and Socket.io.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {["MERN", "React.js", "Redux", "Python (FastAPI)", "RESTful APIs", "Backend Development", "Frontend Architecture", "Clean Code"].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-200 text-xs"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
