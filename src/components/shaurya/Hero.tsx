import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bgmi1 from "@/assets/akxita.png";
import gta1 from "@/assets/sapnyafff.png";
import valo1 from "@/assets/cyraxrrr.png";

const stats = [
  { v: "200+", l: "Projects Completed" },
  { v: "25+", l: "Happy Clients" },
  { v: "300K+", l: "Thumbnail Views" },
];

export function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            Available for new creators
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.95] tracking-tight text-balance"
          >
            Designs that
            <br />
            <span className="relative inline-block">
              earn clicks
              <span className="absolute -inset-x-4 -bottom-2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </span>
            <span className="text-white/30">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-7 max-w-xl text-base md:text-lg text-white/60 leading-relaxed"
          >
            Professional thumbnail designer for BGMI, GTA V, Valorant & Minecraft creators. High-CTR artwork engineered to grow your channel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
              View Portfolio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-medium text-white backdrop-blur transition hover:bg-white/[0.08]">
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-4xl font-semibold">{s.v}</div>
                <div className="mt-1 text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/45">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating thumbnail stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[520px] hidden lg:block"
          style={{ perspective: 1200 }}
        >
          <FloatingThumb img={bgmi1} delay={0} className="top-0 left-4 w-[78%] z-30" tilt={tilt} amt={1} />
          <FloatingThumb img={gta1} delay={0.15} className="top-[34%] right-0 w-[70%] z-20" tilt={tilt} amt={-0.6} />
          <FloatingThumb img={valo1} delay={0.3} className="bottom-0 left-0 w-[64%] z-10" tilt={tilt} amt={0.8} />
          {/* halo */}
          <div className="absolute inset-10 -z-10 rounded-full bg-white/5 blur-3xl" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-[0.35em] text-white/40">
          SCROLL
          <span className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function FloatingThumb({
  img,
  className,
  tilt,
  amt,
  delay,
}: {
  img: string;
  className: string;
  tilt: { x: number; y: number };
  amt: number;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ${className}`}
      style={{
        transform: `rotateY(${tilt.x * amt}deg) rotateX(${-tilt.y * amt}deg)`,
        transition: "transform 250ms ease-out",
      }}
    >
      <img src={img} alt="" className="h-full w-full object-cover" width={1280} height={736} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </motion.div>
  );
}