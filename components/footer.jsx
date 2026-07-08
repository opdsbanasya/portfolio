export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-black text-slate-300 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          Built with {`❤️`} and <span className="text-yellow-400 font-mono">JavaScript</span> by Dharm © {currentYear}
        </p>
        <p className="text-xs text-slate-500 mt-2">Crafted with code and creativity 🚀</p>
      </div>
    </footer>
  )
}
