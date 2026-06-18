import { useEffect, useState } from "react";

export function Background() {
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPos({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Spotlight follow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-500"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.06), transparent 60%)`,
        }}
      />
      {/* Floating orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="orb" style={{ width: 500, height: 500, top: "-10%", left: "-10%" }} />
        <div className="orb" style={{ width: 600, height: 600, bottom: "-15%", right: "-10%", animationDelay: "-6s" }} />
        <div className="orb" style={{ width: 400, height: 400, top: "40%", left: "60%", animationDelay: "-12s", opacity: 0.6 }} />
      </div>
      {/* Grid */}
      <div aria-hidden className="grid-bg pointer-events-none fixed inset-0 z-0" />
      {/* Noise */}
      <div aria-hidden className="noise-overlay" />
    </>
  );
}