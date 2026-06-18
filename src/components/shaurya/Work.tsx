import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "./data";

export function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="work" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title={<>Selected thumbnails<br />from elite creators.</>}
          description="A curated look at recent projects that hit trending, broke CTR records, and helped channels grow."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-5">
          {projects.filter(p => !p.galleryOnly).map((p, i) => {
            const span =
              p.span === "wide"
                ? "sm:col-span-2 row-span-1"
                : p.span === "tall"
                ? "row-span-2"
                : "";
            const isDim = hover !== null && hover !== p.id;
            return (
              <motion.button
                key={p.id}
                onClick={() => setActive(p)}
                onMouseEnter={() => setHover(p.id)}
                onMouseLeave={() => setHover(null)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 6) * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface text-left transition-all duration-500 ${span} ${isDim ? "opacity-50 blur-[1px]" : "opacity-100"}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={736}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 ring-0 ring-white/0 group-hover:ring-1 group-hover:ring-white/30 group-hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.25)] transition-all rounded-2xl" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">{p.category}</div>
                  <div className="font-display mt-1 text-lg md:text-xl font-semibold text-white">{p.title}</div>
                  <div className="mt-3 max-h-0 overflow-hidden text-xs text-white/60 transition-[max-height] duration-500 group-hover:max-h-20">
                    {p.description}
                  </div>
                </div>
                <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  ↗
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full overflow-hidden rounded-3xl border border-white/10 bg-surface"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="aspect-video w-full overflow-hidden">
                <img src={active.img} alt={active.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/50">
                  <span>{active.category}</span>
                  <span className="h-px w-8 bg-white/20" />
                  <span>{active.client}</span>
                </div>
                <h3 className="font-display mt-3 text-3xl md:text-4xl font-semibold">{active.title}</h3>
                <p className="mt-4 text-white/65 max-w-2xl leading-relaxed">{active.description}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/75 italic">
                  &ldquo;{active.feedback}&rdquo;
                  <div className="mt-2 not-italic text-xs text-white/45">— {active.client}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}