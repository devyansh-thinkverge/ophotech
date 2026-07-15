"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawTextX1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textX1 = useSpring(rawTextX1, springConfig);

  const rawTextX2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textX2 = useSpring(rawTextX2, springConfig);

  const rawScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const scale = useSpring(rawScale, springConfig);

  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacity = useSpring(rawOpacity, springConfig);

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y = useSpring(rawY, springConfig);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSolutions = () => {
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F1F1F1]"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left — text */}
          <motion.div style={{ opacity }} className="space-y-5">
            {/* Badge */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-[#0E1010] text-white px-3 py-1.5 rounded-full text-xs font-mono tracking-wider"
            >
              <motion.span
                className="w-2 h-2 bg-[#09C771] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              ENTERPRISE GOVERNED AI
            </motion.div>

            {/* Headline */}
            <div className="space-y-1 overflow-hidden">
              <motion.h1
                style={{ x: textX1 }}
                className="text-5xl md:text-7xl font-black tracking-tighter text-[#0E1010] leading-[0.9]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="inline-block"
                >
                  GOVERNED AI
                </motion.span>
              </motion.h1>
              <motion.h1
                style={{ x: textX2 }}
                className="text-[2.6rem] md:text-6xl font-black tracking-tighter leading-[0.9]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="inline-block text-[#09C771]"
                >
                  TRANSFORMATION
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-lg md:text-xl font-mono text-[#0E1010]/60 tracking-tight pt-2 max-w-md text-pretty"
            >
              The trusted partner for complex enterprises — turning fragmented data into secure, auditable AI
              execution that drives measurable ROI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-[#09C771] text-[#0E1010] px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Book a Discovery Call</span>
                <motion.svg
                  className="w-4 h-4 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>

              <motion.button
                onClick={scrollToSolutions}
                className="border-2 border-[#0E1010] text-[#0E1010] px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden"
                whileHover={{ scale: 1.02, backgroundColor: "#0E1010", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Explore Solutions
              </motion.button>
            </motion.div>

            {/* Benefit pills */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-4 pt-2"
            >
              {["SOC 2 Type II", "Full Audit Trails", "Data Sovereignty", "Human-in-the-Loop"].map((benefit, i) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2 text-xs font-mono text-[#0E1010]/60"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-[#09C771] rounded-full" />
                  {benefit}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Video */}
          <motion.div style={{ y, scale }} className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <VideoPlayer
                src="/vids/ophotech-home.mp4"
                autoplay={true}
                muted={true}
                showControls={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 border-2 border-[#0E1010]/30 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-[#0E1010]/30 rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0E1010)" }}
      />
    </section>
  );
}
