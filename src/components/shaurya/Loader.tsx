import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white"
          >
            SHAURYA
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-xs md:text-sm uppercase tracking-[0.4em] text-white/50"
          >
            Gaming Thumbnail Designer
          </motion.div>
          <div className="mt-10 h-px w-64 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="mt-3 text-[10px] tracking-[0.3em] text-white/40">
            {String(Math.floor(progress * 100)).padStart(3, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}