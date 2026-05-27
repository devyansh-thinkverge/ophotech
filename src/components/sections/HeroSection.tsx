"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/Button";
import { ParticleField } from "@/components/ui/ParticleField";
import { AnimatedWorkflow } from "@/components/ui/AnimatedWorkflow";

export function HeroSection() {
  const router = useRouter();

  const handleOpenContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <section className="relative -mt-20 overflow-hidden min-h-screen flex items-center bg-[#0a0a0a]">
      {/* Grid pattern — shared with stats & journey below */}
      <div className="absolute inset-0 grid-pattern opacity-70" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(34,197,94,0.10)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(34,197,94,0.06)", animationDelay: "1s" }}
      />

      {/* Particles */}
      <ParticleField />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl w-full px-4 xl:px-0 flex-col gap-12 pb-16 pt-40 lg:flex-row lg:items-center lg:justify-between">
        {/* Left — text */}
        <div className="max-w-xl space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-green px-4 py-2 text-sm text-[#4ade80]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Enterprise Governed AI
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-1"
          >
            <p className="text-5xl font-bold sm:text-6xl lg:text-7xl leading-[1.05] gradient-text text-glow">
              Governed AI
            </p>
            <p className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Digital
            </p>
            <p className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Transformation
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md text-base leading-relaxed sm:text-lg text-white/60"
          >
            The trusted partner for complex enterprises — turning fragmented data into secure, auditable AI execution that drives measurable ROI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <PrimaryButton onClick={handleOpenContact}>
              Request AI Audit
            </PrimaryButton>
            <button
              onClick={handleOpenContact}
              className="inline-flex items-center gap-2 rounded-xl border border-[#22c55e]/40 px-6 py-3 text-base font-medium text-[#4ade80] transition-all duration-200 hover:glass-green"
            >
              Schedule a Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Right — Animated Workflow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex-1 min-w-0"
        >
          <AnimatedWorkflow />
        </motion.div>
      </div>

      {/* Seamless bottom fade into stats — no hard edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="rgba(34,197,94,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}
