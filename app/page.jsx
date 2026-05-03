import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Technical from "@/components/technical"
import FeaturedProjects from "@/components/FeaturedProjects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SectionCard from "@/components/SectionCard"

/**
 * Home page with card-based layout
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <Hero />
      
      {/* Card-based sections layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <SectionCard id="about">
          <About />
        </SectionCard>

        <SectionCard id="experience">
          <Experience />
        </SectionCard>

        <SectionCard id="technical">
          <Technical />
        </SectionCard>
      </div>

      {/* Featured Projects - full width */}
      <FeaturedProjects />

      {/* Contact and Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionCard id="contact">
          <Contact />
        </SectionCard>
      </div>

      <Footer />
    </main>
  )
}
