import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { uploadImage } from "../../lib/api/upload.functions";
import { SectionHeading } from "./SectionHeading";
import { categories, projects } from "./data";

export function Categories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Admin Upload State
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredProjects = projects.filter((p) => p.category === activeCategory);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get("id");
    const password = formData.get("password");
    if (id === "admin" && password === "priyal143") {
      setIsAdmin(true);
      setShowLogin(false);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeCategory) return;
    
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64 = reader.result as string;
        const res = await uploadImage({
          data: {
            fileName: file.name,
            base64,
            category: activeCategory as any,
          }
        });
        if (res.success) {
          alert("Image uploaded successfully! It may take a second to appear.");
        } else {
          alert("Server returned error: " + res.message);
        }
      } catch (err: any) {
        alert("Network/Upload Error: " + err.message);
      } finally {
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (activeCategory || activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCategory, activeIndex]);

  return (
    <section id="categories" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Categories"
          title={<>Specialized in the games<br />creators are winning with.</>}
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              onClick={() => setActiveCategory(c.name)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-72 md:h-96 overflow-hidden rounded-3xl border border-white/10 bg-surface cursor-pointer"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                width={1280}
                height={736}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
              <div className="absolute inset-0 rounded-3xl ring-0 ring-white/0 transition-all group-hover:ring-1 group-hover:ring-white/30 group-hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.3)]" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <div>
                  <div className="font-display text-3xl md:text-5xl font-semibold">{c.name}</div>
                  <div className="mt-2 text-sm text-white/55">{c.subtitle}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl md:text-3xl">{c.count}+</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Projects</div>
                </div>
              </div>
              <div className="absolute top-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur transition-transform group-hover:rotate-45 text-white">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Gallery Modal */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 md:p-10 backdrop-blur-md"
            onClick={() => setActiveCategory(null)}
            data-lenis-prevent="true"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[90vh] w-full flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                <div>
                  <h2 className="text-2xl font-display font-semibold text-white">{activeCategory} Gallery</h2>
                  <p className="text-sm text-white/50 mt-1">{filteredProjects.length} selected thumbnails</p>
                </div>
                <div className="flex gap-4 items-center">
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                  />
                  <button
                    onClick={() => isAdmin ? fileInputRef.current?.click() : setShowLogin(true)}
                    disabled={uploading}
                    className="inline-flex h-10 px-4 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition text-sm font-medium"
                  >
                    {uploading ? "Uploading..." : "Upload Image"}
                  </button>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70 transition"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="p-6 overflow-y-auto overscroll-contain flex-1">
                {filteredProjects.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredProjects.map((p, idx) => (
                      <div 
                        key={p.id || idx} 
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface text-left cursor-pointer"
                        onClick={() => setActiveIndex(idx)}
                      >
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={p.img}
                            alt={p.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md">
                            ↗
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-white/40 py-20">
                    No thumbnails available for {activeCategory} yet.
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enlarged Thumbnail Modal */}
      <AnimatePresence>
        {activeIndex !== null && filteredProjects[activeIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-lg"
            onClick={() => setActiveIndex(null)}
            data-lenis-prevent="true"
          >
            <motion.div
              key={activeIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition"
                aria-label="Close"
              >
                ✕
              </button>

              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex((prev) => (prev! > 0 ? prev! - 1 : filteredProjects.length - 1));
                    }}
                    className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 border border-white/10 text-white backdrop-blur hover:bg-white/20 transition z-10"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex((prev) => (prev! < filteredProjects.length - 1 ? prev! + 1 : 0));
                    }}
                    className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 border border-white/10 text-white backdrop-blur hover:bg-white/20 transition z-10"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </>
              )}

              <img 
                src={filteredProjects[activeIndex].img} 
                alt="Enlarged thumbnail" 
                className="w-full h-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-[0_0_100px_-20px_rgba(255,255,255,0.15)]" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setShowLogin(false)}
            data-lenis-prevent="true"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-[#0a0a0a] p-6"
            >
              <h3 className="text-xl font-display font-semibold text-white mb-4">Admin Login</h3>
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    name="id"
                    placeholder="Admin ID"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setShowLogin(false)}
                    className="flex-1 rounded-xl bg-white/10 py-3 font-semibold text-white transition hover:bg-white/20"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-white/90"
                  >
                    Login
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}