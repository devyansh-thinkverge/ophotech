"use client";

import type React from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Boxes, Users, Landmark, CalendarClock, Code2 } from "lucide-react";

const STATS = [
  {
    icon: Boxes,
    title: "20+",
    subtitle: "AI Products Developed",
    description: "Shipped into regulated production",
  },
  {
    icon: Users,
    title: "10+",
    subtitle: "Data Scientists & AI/ML Engineers",
    description: "Senior, governance-first specialists",
  },
  {
    icon: Landmark,
    title: "9+",
    subtitle: "Government Agencies Served",
    description: "Sovereign, audit-ready delivery",
  },
  {
    icon: CalendarClock,
    title: "20+",
    subtitle: "Years of Experience",
    description: "Across complex enterprise systems",
  },
  {
    icon: Code2,
    title: "10M+",
    subtitle: "Lines of Code Written",
    description: "Battle-tested, maintainable systems",
  },
];

function StatCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-pointer"
    >
      {/* Border glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(9,199,113,0.4), transparent, rgba(9,199,113,0.4))",
          filter: "blur(8px)",
        }}
      />

      <div className="relative bg-[#1a1a1a] rounded-2xl p-5 border border-white/10 overflow-hidden h-full">
        {/* Shine on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={
            isHovered
              ? {
                  background: [
                    "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.03) 25%, transparent 30%)",
                    "linear-gradient(105deg, transparent 70%, rgba(255,255,255,0.03) 75%, transparent 80%)",
                  ],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 flex flex-col h-full min-h-[140px]">
          {/* Icon */}
          <motion.div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 relative"
            style={{ backgroundColor: "rgba(9,199,113,0.2)" }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-[#09C771]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHovered ? { opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <stat.icon className="w-5 h-5 relative z-10 text-[#09C771]" />
          </motion.div>

          <div className="flex-1">
            <motion.div
              className="text-3xl font-black tracking-tight text-[#09C771]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 + index * 0.1 }}
            >
              {stat.title}
            </motion.div>
            <h3 className="text-sm font-semibold text-white mt-1">{stat.subtitle}</h3>
            <p className="text-xs text-white/50 mt-1 font-mono">{stat.description}</p>
          </div>

          <motion.div
            className="h-[2px] rounded-full mt-4 bg-[#09C771]"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-16 bg-[#0E1010] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1010] via-[#01404F]/30 to-[#0E1010]" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            className="inline-block font-mono text-[#09C771] text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            The Numbers
          </motion.span>

          <div className="overflow-hidden mt-2">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-white tracking-tight"
              initial={{ y: 60 }}
              animate={isInView ? { y: 0 } : { y: 60 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              Built for Scale & Scrutiny
            </motion.h2>
          </div>

          <motion.div
            className="h-[2px] w-12 bg-[#09C771] mx-auto mt-3 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {STATS.map((stat, index) => (
            <StatCard key={stat.subtitle} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
