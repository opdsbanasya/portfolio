import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import LenisProvider from "@/components/LenisProvider"
import CustomCursor from "@/components/CustomCursor"
import EasterEggRAM from "@/components/EasterEggRAM"

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: "Dharm Singh - Fullstack & AI Developer | Jaipur, Rajasthan",
  description: "Personal portfolio of Dharm Singh showcasing modern web architectures, Python, FastAPI, and Next.js craftsmanship from Jaipur to the global web.",
  icons: {
    icon: "/favicon.png",
  },
}

/**
 * Root layout component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.className} antialiased bg-black text-slate-100 cursor-none selection:bg-[#D4A017]/30 selection:text-amber-200`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LenisProvider>
            <CustomCursor />
            <EasterEggRAM />
            <Navbar />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}