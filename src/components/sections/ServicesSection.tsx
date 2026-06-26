"use client";

import type React from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, Coins, Cloud, Cpu, Bot, ShieldCheck } from "lucide-react";
import Link from "next/link";

const SOLUTIONS = [
  {
    id: 1,
    number: "01",
    name: "Research & Analysis",
    tagline: "YOUR AI JOURNEY BEGINS WITH DILIGENT RESEARCH",
    description:
      "An intelligence framework driven by Senior Data Scientists and AI/ML Engineers to get real-time operational insights. Our precise reports address critical gaps and enable enterprises to structure their path to AI enablement.",
    icon: Search,
    href: "/solutions/research-and-analysis",
    tags: ["Operational Insights", "Gap Analysis", "Readiness Reports"],
  },
  {
    id: 2,
    number: "02",
    name: "Data Structuring & Monetization",
    tagline: "TURNING YOUR INFORMATION INTO REVENUE",
    description:
      "Transform data from a cost center into a profit generator. We unlock financial potential with revenue-ready data strategies and compliant governance frameworks.",
    icon: Coins,
    href: "/solutions/data-structuring-and-monetization",
    tags: ["Data Strategy", "Monetization", "Governance"],
  },
  {
    id: 3,
    number: "03",
    name: "Cloud Integration & Architecture",
    tagline: "BUILDING THE DIGITAL BACKBONE",
    description:
      "The cloud is your platform for innovation, agility, and scale. Our Cloud Integration services ensure your technology strategy directly supports business goals with minimal risk.",
    icon: Cloud,
    href: "/solutions/cloud-integration",
    tags: ["Cloud Migration", "Scalability", "Low Risk"],
  },
  {
    id: 4,
    number: "04",
    name: "AI Solutions & Services",
    tagline: "INTELLIGENT AUTOMATION & PREDICTIVE ADVANTAGE",
    description:
      "Move beyond pilots to operational AI. We deploy automation and machine learning that deliver measurable ROI across your data and cloud investments at enterprise scale.",
    icon: Cpu,
    href: "/solutions/ai-solutions-and-services",
    tags: ["Automation", "Machine Learning", "Measurable ROI"],
  },
  {
    id: 5,
    number: "05",
    name: "AI Agent Development",
    tagline: "THE FUTURE OF AUTONOMOUS OPERATIONS",
    description:
      "AI Agents are digital workers that perform complex, multi-step tasks autonomously. Build a scalable workforce that executes strategic objectives with minimal human oversight.",
    icon: Bot,
    href: "/solutions/ai-agent-development",
    tags: ["Digital Workers", "Autonomy", "Scalable Workforce"],
  },
  {
    id: 6,
    number: "06",
    name: "Cyber Security Solutions",
    tagline: "AUTONOMOUS DEFENSE FOR THE AI AGE",
    description:
      "Defend against AI-driven adversaries operating at machine speed. We combine automated detection with resilient architecture to protect your enterprise infrastructure.",
    icon: ShieldCheck,
    href: "/solutions/cyber-security-solutions",
    tags: ["Threat Detection", "Resilient Architecture", "Machine Speed"],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? -15 : 15,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  }),
};

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[, direction], setPage] = useState([0, 0]);
  const current = SOLUTIONS[currentIndex];
  const Icon = current.icon;

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * 5);
    rotateX.set((-(e.clientY - cy) / (rect.height / 2)) * 5);
  };

  const paginate = (newDirection: number) => {
    const newIndex = (currentIndex + newDirection + SOLUTIONS.length) % SOLUTIONS.length;
    setCurrentIndex(newIndex);
    setPage((prev) => [prev[0] + newDirection, newDirection]);
  };

  return (
    <section id="solutions" className="relative py-16 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#09C771]/10 via-[#09C771]/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        key={current.id}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <span className="font-mono text-[#0E1010]/60 text-xs tracking-widest">SOLUTIONS</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0E1010] tracking-tighter mt-2">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              WHAT WE BUILD{" "}
            </motion.span>
            <motion.span
              className="inline-block text-[#09C771]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              FOR YOU
            </motion.span>
          </h2>
          <motion.p
            className="text-sm md:text-base text-[#0E1010]/60 font-mono mt-3 max-w-xl mx-auto text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Research, roadmaps, and support designed to deliver results across every phase of AI adoption.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center gap-6">
            <motion.button
              onClick={() => paginate(-1)}
              aria-label="Previous"
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-[#0E1010] items-center justify-center hover:bg-[#0E1010] hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full max-w-3xl"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="bg-white rounded-3xl p-6 md:p-8 border-2 border-[#0E1010]/10 shadow-xl"
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <motion.div
                      className="relative aspect-[4/3] flex items-center justify-center rounded-2xl bg-[#01404F] overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,#09C771_0%,transparent_50%)]" />
                      <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                          backgroundImage: "linear-gradient(#09C771 1px,transparent 1px),linear-gradient(90deg,#09C771 1px,transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />
                      <span className="absolute top-4 left-4 z-10 font-black text-5xl text-white/15 tracking-tighter">
                        {current.number}
                      </span>
                      <motion.div
                        className="relative z-10 w-20 h-20 rounded-2xl bg-[#09C771] flex items-center justify-center"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Icon className="w-10 h-10 text-[#0E1010]" />
                      </motion.div>
                    </motion.div>

                    <div className="space-y-4">
                      <div>
                        <motion.span
                          className="font-mono text-xs tracking-widest text-[#09C771]"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {current.tagline}
                        </motion.span>
                        <motion.h3
                          className="text-2xl md:text-3xl font-black text-[#0E1010] tracking-tighter mt-1 text-balance"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                        >
                          {current.name}
                        </motion.h3>
                      </div>

                      <motion.p
                        className="text-sm text-[#0E1010]/60 font-mono leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {current.description}
                      </motion.p>

                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {current.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-[#0E1010]/5 rounded-full text-xs font-mono text-[#0E1010]/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Link
                          href={current.href}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide bg-[#09C771] text-[#0E1010] relative overflow-hidden"
                        >
                          <motion.span
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                          <span className="relative z-10">Learn more</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={() => paginate(1)}
              aria-label="Next"
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-[#0E1010] items-center justify-center hover:bg-[#0E1010] hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="flex md:hidden justify-center gap-4 mt-6">
            <motion.button onClick={() => paginate(-1)} className="w-10 h-10 rounded-full border-2 border-[#0E1010] flex items-center justify-center" whileTap={{ scale: 0.9 }}>
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button onClick={() => paginate(1)} className="w-10 h-10 rounded-full border-2 border-[#0E1010] flex items-center justify-center" whileTap={{ scale: 0.9 }}>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {SOLUTIONS.map((s, index) => (
              <motion.button
                key={s.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setPage([index, index > currentIndex ? 1 : -1]);
                }}
                aria-label={`Go to ${s.name}`}
                className="h-2 rounded-full"
                style={{ backgroundColor: index === currentIndex ? "#09C771" : "rgba(14,16,16,0.2)" }}
                animate={{ width: index === currentIndex ? 28 : 10 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
