import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { reviews, specialReviews } from "./data";

function SpecialCard({ r }: { r: (typeof specialReviews)[number] }) {
  return (
    <div className="group glass-panel mx-4 w-[420px] shrink-0 rounded-3xl p-8 border border-white/10 bg-white/5 relative overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-1">
      {/* Subtle glow effect behind */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-white/30 group-hover:scale-150" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

      <div className="text-yellow-400 tracking-widest text-lg transition-transform duration-500 group-hover:scale-105 origin-left">★★★★★</div>
      <p className="mt-6 text-base md:text-lg text-white/95 leading-relaxed font-medium transition-colors duration-500 group-hover:text-white">&ldquo;{r.text}&rdquo;</p>
      
      <div className="mt-8 flex items-center gap-4 relative z-10">
        {r.logo && (
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 shrink-0 border border-white/20 transition-all duration-500 group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <img src={r.logo} alt={`${r.name} logo`} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-base font-bold text-white truncate">{r.name}</div>
          <div className="text-sm text-white/60 truncate">{r.niche}</div>
        </div>
      </div>
    </div>
  );
}

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="glass-panel mx-3 w-[340px] shrink-0 rounded-2xl p-6">
      <div className="text-yellow-200/90 tracking-widest text-sm">★★★★★</div>
      <p className="mt-4 text-sm text-white/75 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="text-sm font-medium text-white">{r.name}</div>
        <div className="text-xs text-white/45">{r.niche}</div>
      </div>
    </div>
  );
}

export function Reviews() {
  const row1 = reviews;
  const row2 = [...reviews].reverse();
  return (
    <section id="reviews" className="relative z-10 py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client Reviews"
          title={<>Trusted by creators<br />who care about growth.</>}
        />
      </div>

      <div className="mt-16 mb-12 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <Marquee duration={65}>
          {specialReviews.map((r, i) => <SpecialCard key={i} r={r} />)}
        </Marquee>
      </div>

      <div className="space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] opacity-80">
        <Marquee duration={50}>
          {row1.map((r, i) => <Card key={i} r={r} />)}
        </Marquee>
        <Marquee duration={60} reverse>
          {row2.map((r, i) => <Card key={i} r={r} />)}
        </Marquee>
      </div>
    </section>
  );
}

function Marquee({ children, duration, reverse }: { children: React.ReactNode; duration: number; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        <div className="flex">{children}</div>
        <div className="flex" aria-hidden>{children}</div>
      </motion.div>
    </div>
  );
}