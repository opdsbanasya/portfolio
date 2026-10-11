export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black text-slate-300 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Subtle mini arch divider */}
        <div className="flex items-center justify-center gap-3 mb-4 opacity-50">
          <div className="h-px w-8 bg-[#D4A017]" />
          <span className="text-[#D4A017] text-xs">◆</span>
          <div className="h-px w-8 bg-[#D4A017]" />
        </div>

        <p className="text-base font-medium text-slate-200">
          Built in <span className="text-[#D4A017] font-semibold">Jaipur, Rajasthan 🇮🇳</span> &nbsp;•&nbsp; <span className="text-amber-200 font-hindi">राम राम सा 🙏</span>
        </p>
        <p className="text-xs text-slate-500 mt-2 font-mono">
          Crafted with code and royal craftsmanship by Dharm © {currentYear}
        </p>
      </div>
    </footer>
  );
}
