const socials = [
  { label: "Discord", href: "https://discord.com/users/762706489873399820" },
  { label: "Instagram", href: "https://www.instagram.com/shauryaa.4suree" },
  { label: "Website", href: "#" },
  { label: "Email", href: "mailto:shauryaa.designss@gmail.com" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="font-display text-[18vw] md:text-[14vw] leading-[0.85] font-semibold tracking-tighter bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent select-none">
          SHAURYA
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <div className="text-sm text-white/55">Gaming Thumbnail Designer</div>
            <div className="font-display mt-2 text-2xl md:text-3xl text-white max-w-md">
              Built for creators. Designed for growth.
            </div>
          </div>
          <div className="md:text-right">
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/45">Connect</div>
            <div className="mt-3 flex flex-wrap md:justify-end gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                >              {s.label}
                  <span className="text-white/30 transition group-hover:translate-x-0.5">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-white/35">
          <div>© {new Date().getFullYear()} Shaurya. All rights reserved.</div>
          <div>Crafted with obsession.</div>
        </div>
      </div>
    </footer>
  );
}