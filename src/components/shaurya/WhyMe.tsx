import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: "⚡", t: "Fast Delivery", d: "24–48 hr turnaround on most projects without sacrificing the polish." },
  { icon: "↗", t: "High CTR Designs", d: "Compositions tuned by analyzing the top 1% of gaming thumbnails." },
  { icon: "∞", t: "Unlimited Revisions", d: "Refined until it's exactly the click-worthy thumbnail you imagined." },
  { icon: "◎", t: "Creator-Focused", d: "Built around your brand voice, audience, and channel growth — not generic templates." },
];

export function WhyMe() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Creators Choose Me"
          title={<>An unfair advantage<br />for your channel.</>}
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-7 transition-all hover:border-white/25 hover:bg-surface-2"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display text-3xl text-white/80">{it.icon}</div>
              <h3 className="font-display mt-6 text-xl font-semibold">{it.t}</h3>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}