"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

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

  const sectionRef = useRef(null);

  const inputBase =
    "w-full bg-white/5 border-2 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none transition-all duration-300 border-white/20 focus:border-[#09C771]";

  return (
    <section ref={sectionRef} id="contact" className="relative bg-[#0E1010] pt-16 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <span className="font-mono text-[#09C771] text-xs tracking-widest">LET&apos;S BUILD</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mt-3">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              START A
            </motion.span>
            <motion.span
              className="block text-[#09C771]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              CONVERSATION
            </motion.span>
          </h2>
          <p className="text-white/50 font-mono text-xs md:text-sm mt-4 max-w-lg mx-auto">
            Tell us where your data and AI stand today. We&apos;ll respond within one business day with a path forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center gap-4 rounded-2xl border-2 border-[#09C771]/40 bg-[#09C771]/5 p-10"
            >
              <div className="w-14 h-14 rounded-full bg-[#09C771] flex items-center justify-center">
                <Check className="w-7 h-7 text-[#0E1010]" />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">Message received</h3>
              <p className="text-white/60 font-mono text-sm max-w-md">
                Thanks, {formData.name.split(" ")[0] || "there"}. An Opho engineer will reach out to{" "}
                <span className="text-[#09C771]">{formData.email}</span> shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs font-semibold text-[#09C771] hover:opacity-70 transition-opacity"
              >
                Send another message →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-white/70 font-mono text-xs mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/70 font-mono text-xs mb-2">Work Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@enterprise.com"
                  className={inputBase}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="organization" className="block text-white/70 font-mono text-xs mb-2">Organization</label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Company / institution"
                  className={inputBase}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-white/70 font-mono text-xs mb-2">
                  What are you trying to solve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your data estate, goals, or compliance requirements..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 text-xs text-red-400 font-mono">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <div className="sm:col-span-2">
                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#09C771] text-[#0E1010] px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide relative overflow-hidden disabled:opacity-70"
                  whileHover={{ scale: status === "submitting" ? 1 : 1.01 }}
                  whileTap={{ scale: status === "submitting" ? 1 : 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </span>
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      {/* Watermark */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15rem] md:text-[28rem] font-black text-white/[0.015] pointer-events-none select-none leading-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        OPHO
      </motion.div>
    </section>
  );
}
