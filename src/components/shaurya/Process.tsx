import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", t: "Requirements Discussion", d: "We jump on a quick call or chat to align on your channel's voice, video direction, and target audience." },
  { n: "02", t: "Research & Concept", d: "I study top-performing thumbnails in your niche and sketch 2–3 directions tailored to your brand." },
  { n: "03", t: "Thumbnail Creation", d: "Photo-grade composition, color grading, typography, and editing pushed to the highest standard." },
  { n: "04", t: "Revision Process", d: "Unlimited refinements until the design feels click-worthy. No compromise." },
  { n: "05", t: "Final Delivery", d: "High-resolution files delivered with platform-ready exports for YouTube, Shorts, and socials." },
];

export function Process() {
  return (
    <section id="process" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The Process"
          title={<>A simple, premium<br />workflow.</>}
        />

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          <div className="hidden md:block" />
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
            <div className="space-y-12">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-10"
                >
                  <div className="absolute left-[-7px] top-2 h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xs text-white/40">{s.n}</span>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold">{s.t}</h3>
                  </div>
                  <p className="mt-3 text-white/55 max-w-2xl leading-relaxed">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}