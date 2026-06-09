"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const fd = new FormData();
      fd.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
      fd.append("from_name", "OPHO Technologies Contact Form");
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("organization", formData.organization);
      fd.append("message", formData.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      setStatus("success");
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-[#22c55e]/50 focus:bg-white/8 focus:ring-1 focus:ring-[#22c55e]/30";

  return (
    <section className="relative overflow-hidden py-24 bg-[#0a0a0a]" id="contact">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(34,197,94,0.06)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + contact details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-4">
                <span className="w-6 h-px bg-[#22c55e]" />
                Contact Us
                <span className="w-6 h-px bg-[#22c55e]" />
              </span>
              <h2 className="text-4xl font-bold text-white mt-1 leading-tight">
                Start a{" "}
                <span className="gradient-text">Conversation</span>
              </h2>
              <p className="mt-4 text-base text-white/50 leading-relaxed max-w-md">
                Explore how data-driven strategy and responsible AI can advance your business goals. Our team responds within one business day.
              </p>
            </div>

          </motion.div>

          {/* Right — inline form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#22c55e]/20 bg-[#22c55e]/5 p-12 text-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "rgba(34,197,94,0.15)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent</h3>
                <p className="text-sm text-white/50">
                  We&apos;ll be in touch within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs font-semibold text-[#22c55e] hover:opacity-70 transition-opacity"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-2xl border border-white/8 p-8"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-white/40">
                      Full Name <span className="text-[#22c55e]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-white/40">
                      Work Email <span className="text-[#22c55e]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-wide text-white/40">
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Acme Corporation"
                    value={formData.organization}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-white/40">
                    How Can We Help? <span className="text-[#22c55e]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your AI goals or challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#22c55e] py-3.5 text-sm font-bold text-black transition-all hover:bg-[#4ade80] disabled:opacity-60 disabled:cursor-not-allowed glow-green"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
