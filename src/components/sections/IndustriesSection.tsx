"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SECTORS = [
  {
    image: "/images/sectors/financial-services.png",
    name: "Financial Services",
    description:
      "Real-time fraud detection, predictive risk modeling, and automated regulatory compliance for banks, insurers, and capital markets firms.",
  },
  {
    image: "/images/sectors/government.png",
    name: "Public Sector",
    description:
      "Secure, restricted AI for sovereign intelligence — purpose-built for government agencies with strict data localization and audit requirements.",
  },
  {
    image: "/images/sectors/retail.png",
    name: "Supply Chain & Logistics",
    description:
      "Autonomous workflow orchestration, demand forecasting, and operational bottleneck prediction across global distribution networks.",
  },
  {
    image: "/images/sectors/it-operations.png",
    name: "Enterprise IT Operations",
    description:
      "Infrastructure auditing, system redundancy elimination, and intelligent automation to reduce operational overhead and accelerate delivery.",
  },
  {
    image: "/images/sectors/workforce.png",
    name: "Corporate Workforce",
    description:
      "Secure conversational AI agents that give employees instant access to institutional knowledge without exposing sensitive data.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="sectors" className="relative py-16 bg-[#01404F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#09C771] text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            SECTORS
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-2">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              INDUSTRIES WE
            </motion.span>
            {" "}
            <motion.span
              className="text-[#09C771] inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              SERVE
            </motion.span>
          </h2>
          <motion.p
            className="text-sm md:text-base text-white/60 font-mono mt-3 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Governed AI transformation for high-stakes enterprises where data security, compliance, and measurable ROI are non-negotiable.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SECTORS.map((sector, index) => (
            <motion.div
              key={sector.name}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group flex flex-col bg-[#0E1010] rounded-2xl overflow-hidden border border-white/10 hover:border-[#09C771]/50 transition-colors duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={sector.image}
                  alt={sector.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1010] via-transparent to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-black text-white tracking-tight">{sector.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed mt-3 flex-1 text-pretty">{sector.description}</p>

                <motion.button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-2 text-[#09C771] font-bold text-xs tracking-wide mt-5"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 bg-[#09C771] text-[#0E1010] px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Discuss your industry</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
