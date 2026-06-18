import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Lenis from "lenis";
import { Background } from "@/components/shaurya/Background";
import { Loader } from "@/components/shaurya/Loader";
import { Nav } from "@/components/shaurya/Nav";
import { Hero } from "@/components/shaurya/Hero";
import { Work } from "@/components/shaurya/Work";
import { Categories } from "@/components/shaurya/Categories";
import { Compare } from "@/components/shaurya/Compare";
import { Reviews } from "@/components/shaurya/Reviews";
import { Process } from "@/components/shaurya/Process";
import { WhyMe } from "@/components/shaurya/WhyMe";
import { Stats } from "@/components/shaurya/Stats";
import { Contact } from "@/components/shaurya/Contact";
import { Footer } from "@/components/shaurya/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaurya — Premium Gaming Thumbnail Designer" },
      { name: "description", content: "Professional thumbnail designer for BGMI, GTA V, Valorant & Minecraft creators. Designs that earn clicks." },
      { property: "og:title", content: "Shaurya — Premium Gaming Thumbnail Designer" },
      { property: "og:description", content: "High-converting gaming thumbnails for elite creators." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const tick = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Loader />
      <Background />
      <Nav />
      <main className="relative">
        <Hero />
        <Work />
        <Categories />
        <Compare />
        <Reviews />
        <Process />
        <WhyMe />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
