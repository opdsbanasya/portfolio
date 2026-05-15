import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Pointer } from "@/components/ui/pointer"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Pointer />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
metadata