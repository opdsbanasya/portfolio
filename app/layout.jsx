import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import LenisProvider from "@/components/LenisProvider"
import CustomCursor from "@/components/CustomCursor"

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: "Dharm's Portfolio - Fullstack Developer",
  description: "Personal portfolio showcasing Node.js, Python, FastAPI development skills and enterprise projects",
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
      <body className={`${GeistSans.className} antialiased bg-black text-slate-100 cursor-none selection:bg-yellow-400/30 selection:text-yellow-200`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LenisProvider>
            <CustomCursor />
            <Navbar />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}