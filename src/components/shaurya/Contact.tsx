import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { z } from "zod";
import { saveMessage, getMessages } from "../../lib/api/messages.functions";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  discord: z.string().trim().max(64).optional().or(z.literal("")),
  gameType: z.string().trim().min(1, "Select a game type").max(60),
  projectType: z.string().trim().min(1, "Select a project type").max(60),
  budget: z.string().trim().min(1, "Select a budget").max(40),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

const gameTypes = ["BGMI", "GTA V", "Valorant", "Minecraft", "Other"];
const projectTypes = ["Logo/Banner", "Thumbnail", "Other"];
const budgets = ["₹100-₹150", "₹150-₹250", "₹250-₹350", "₹350+"];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", discord: "", gameType: "", projectType: "", budget: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  // Admin state
  const [showLogin, setShowLogin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminCreds, setAdminCreds] = useState({ id: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const [savedMessages, setSavedMessages] = useState<any[]>([]);

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});

    // Save message via server function
    try {
      await saveMessage({ data: form });
    } catch (error) {
      console.error("Failed to save message:", error);
    }

    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", discord: "", gameType: "", projectType: "", budget: "", message: "" });
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminCreds.id === "admin" && adminCreds.password === "priyal143") {
      setLoginError(false);
      setShowLogin(false);
      setShowAdmin(true);
      loadMessages();
    } else {
      setLoginError(true);
    }
  };

  const loadMessages = async () => {
    try {
      const msgs = await getMessages();
      setSavedMessages(msgs || []);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      setSavedMessages([]);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Let's Work"
          title={<>Tell me about<br />your next video.</>}
          description="I respond within 12 hours. For quick chats, ping me on Discord or WhatsApp."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <form onSubmit={submit} className="glass-panel relative rounded-3xl p-7 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Name" error={errors.name}>
                <input value={form.name} onChange={(e) => update("name", e.target.value)} className={inputCls} placeholder="Your name" />
              </Field>
              <Field label="Email" error={errors.email}>
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} placeholder="you@channel.com" />
              </Field>
              <Field label="Discord (optional)" error={errors.discord}>
                <input value={form.discord} onChange={(e) => update("discord", e.target.value)} className={inputCls} placeholder="username" />
              </Field>
              <Field label="Game Type" error={errors.gameType}>
                <select value={form.gameType} onChange={(e) => update("gameType", e.target.value)} className={inputCls}>
                  <option value="" className="bg-neutral-900 text-white">Select…</option>
                  {gameTypes.map((p) => <option key={p} value={p} className="bg-neutral-900 text-white">{p}</option>)}
                </select>
              </Field>
              <Field label="Project Type" error={errors.projectType}>
                <select value={form.projectType} onChange={(e) => update("projectType", e.target.value)} className={inputCls}>
                  <option value="" className="bg-neutral-900 text-white">Select…</option>
                  {projectTypes.map((p) => <option key={p} value={p} className="bg-neutral-900 text-white">{p}</option>)}
                </select>
              </Field>
              <Field label="Budget" error={errors.budget}>
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inputCls}>
                  <option value="" className="bg-neutral-900 text-white">Select…</option>
                  {budgets.map((b) => <option key={b} value={b} className="bg-neutral-900 text-white">{b}</option>)}
                </select>
              </Field>
              <Field label="Message" error={errors.message} className="md:col-span-2">
                <textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className={inputCls} placeholder="Tell me about your channel, video idea, and timeline…" />
              </Field>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <button type="submit" className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
                Send Message
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <span className="text-xs text-white/40">Avg. response: 12 hrs</span>
            </div>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.06] p-4 text-sm text-emerald-200"
                >
                  ✓ Message received. I'll get back to you within 12 hours.
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <div className="space-y-3">
            <ContactBtn icon="◎" label="Discord" value="drizzaro" href="https://discord.com/users/762706489873399820" />
            <ContactBtn icon="✆" label="Instagram" value="shauryaa.4suree" href="https://www.instagram.com/shauryaa.4suree" />
            <ContactBtn icon="✉" label="Email" value="shauryaa.designss@gmail.com" href="mailto:shauryaa.designss@gmail.com" />
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/45">Currently</div>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-sm text-white/80">Accepting 3 more clients this month</span>
              </div>
              <button
                onClick={() => setShowLogin(true)}
                className="mt-6 w-full rounded-xl bg-white/5 py-2.5 text-xs font-medium tracking-wider text-white/50 hover:bg-white/10 hover:text-white transition uppercase"
              >
                See Messages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <div className="glass-panel w-full max-w-sm rounded-3xl p-8 border border-white/10 bg-black/80">
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Admin Access</h3>
                <button onClick={() => setShowLogin(false)} className="text-white/50 hover:text-white text-xl">&times;</button>
              </div>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-widest text-white/50">Admin ID</label>
                  <input type="text" value={adminCreds.id} onChange={e => setAdminCreds({ ...adminCreds, id: e.target.value })} className={inputCls} placeholder="Enter ID" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-widest text-white/50">Password</label>
                  <input type="password" value={adminCreds.password} onChange={e => setAdminCreds({ ...adminCreds, password: e.target.value })} className={inputCls} placeholder="••••••••" />
                </div>
                {loginError && <p className="text-xs text-red-400">Incorrect ID or Password.</p>}
                <button type="submit" className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-black hover:bg-white/90 transition">
                  Login
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Messages Interface */}
      <AnimatePresence>
        {showAdmin && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10"
          >
            <div className="glass-panel w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-white/10 bg-[#0a0a0a]">
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 rounded-t-3xl">
                <div>
                  <h2 className="text-xl font-medium text-white">Client Messages</h2>
                  <p className="text-sm text-white/50 mt-1">{savedMessages.length} total messages received</p>
                </div>
                <button onClick={() => setShowAdmin(false)} className="text-white/50 hover:text-white text-sm bg-white/5 px-4 py-2 rounded-lg transition hover:bg-white/10">
                  Close Dashboard
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                {savedMessages.length === 0 ? (
                  <div className="text-center text-white/40 py-20">No messages yet.</div>
                ) : (
                  savedMessages.map((msg, i) => (
                    <div key={i} className="glass-panel p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-medium text-white">{msg.name}</h4>
                          <a href={`mailto:${msg.email}`} className="text-sm text-emerald-400 hover:underline">{msg.email}</a>
                        </div>
                        <div className="text-xs text-white/40 text-right">
                          {new Date(msg.timestamp).toLocaleString()}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-[10px] uppercase text-white/40 mb-1">Discord</div>
                          <div className="text-sm text-white/90">{msg.discord || "N/A"}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-[10px] uppercase text-white/40 mb-1">Game</div>
                          <div className="text-sm text-white/90">{msg.gameType || "N/A"}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-[10px] uppercase text-white/40 mb-1">Project</div>
                          <div className="text-sm text-white/90">{msg.projectType}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-[10px] uppercase text-white/40 mb-1">Budget</div>
                          <div className="text-sm text-white/90">{msg.budget}</div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-[10px] uppercase text-white/40 mb-2">Message</div>
                        <p className="text-sm text-white/80 whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const inputCls = "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-black/60";

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/45">{label}</div>
      {children}
      {error && <div className="mt-1.5 text-xs text-red-300/80">{error}</div>}
    </label>
  );
}

function ContactBtn({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group glass-panel flex items-center gap-4 rounded-2xl p-5 transition hover:bg-white/[0.06]">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/45">{label}</div>
        <div className="text-sm text-white">{value}</div>
      </div>
      <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-white">→</span>
    </a>
  );
}