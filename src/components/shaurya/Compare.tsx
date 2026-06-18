import { useRef, useState, useCallback } from "react";
import { SectionHeading } from "./SectionHeading";
import before from "@/assets/before-1.png";
import after from "@/assets/after-1.png";

export function Compare() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Before / After"
          title={<>The redesign difference.<br />Drag to compare.</>}
          description="Real channels. Real glow-ups. Click-worthy redesigns engineered to multiply CTR."
        />

        <div
          ref={ref}
          onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
          onMouseMove={(e) => dragging.current && move(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => move(e.touches[0].clientX)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
          className="mt-16 relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 select-none cursor-ew-resize"
        >
          <img src={after} alt="After" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src={before} alt="Before" className="h-full w-full object-cover" />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">Before</div>
          <div className="absolute top-4 right-4 rounded-full bg-white text-black px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-medium">After</div>

          {/* Handle */}
          <div className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none" style={{ left: `${pos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              ⇄
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}