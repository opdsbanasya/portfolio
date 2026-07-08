import Hero from "@/components/hero"
import BentoSection from "@/components/BentoSection"
import TechnicalMarquee from "@/components/TechnicalMarquee"
import Experience from "@/components/experience"
import ParallaxProjects from "@/components/ParallaxProjects"
import Pricing from "@/components/Pricing"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

/**
 * Home page with premium award-winning layout
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-100 selection:bg-yellow-400/30 selection:text-yellow-200">
      <Hero />
      
      {/* Bento Grid replaces About & Technical summary */}
      <BentoSection />

      {/* Detailed Infinite Marquee Technical Section */}
      <TechnicalMarquee />

      {/* Experience Section */}
      <Experience />

      {/* Parallax Projects Showcase */}
      <ParallaxProjects />

      {/* Freelance Pricing Section */}
      <Pricing />

      {/* Contact and Footer */}
      <Contact />
      <Footer />
    </main>
  )
}
