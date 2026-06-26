"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";

const PRODUCTS = [
  {
    name: "ROAAR",
    tagline: "Enterprise Decision Intelligence",
    description:
      "An enterprise decision intelligence system that governs the entire AI lifecycle — from initial research and readiness assessment through adoption, monitoring, and reporting.",
    highlights: [
      "End-to-end AI lifecycle governance",
      "Real-time adoption & ROI dashboards",
      "Audit-ready compliance reporting",
    ],
    badge: "Decision Intelligence",
    icon: Layers,
    href: "/products/roaar",
  },
  {
    name: "CENTOIRE",
    tagline: "AI-Powered Fashion Intelligence Platform",
    description:
      "Compress fashion product development from weeks to hours. Generate factory-ready techpacks, AI product imagery, and real-time trend intelligence — all in one multi-agent platform.",
    highlights: [
      "TechPack generation in under 30 minutes",
      "40% fewer sampling rounds",
      "Real-time trend intelligence & cost modeling",
    ],
    badge: "Fashion Intelligence",
    icon: Sparkles,
    href: "/products/centoire",
  },
];

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-16 bg-[#0E1010] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#01404F]/20 via-[#0E1010] to-[#0E1010]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            BUILT FOR ENTERPRISE
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-2">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              OUR
            </motion.span>
            {" "}
            <motion.span
              className="text-[#09C771] inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              PRODUCTS
            </motion.span>
          </h2>
          <motion.p
            className="text-sm md:text-base text-white/60 font-mono mt-3 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Purpose-built enterprise platforms that embed governed AI directly into your operations.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <Link
                href={product.href}
                className="group flex flex-col gap-5 h-full rounded-2xl border border-white/10 hover:border-[#09C771]/50 p-7 transition-colors duration-300 relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(9,199,113,0.08) 0%, transparent 60%)" }}
                />

                <div className="relative z-10 flex flex-col gap-5 h-full">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#09C771]/10 border border-[#09C771]/20 flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-[#09C771]" />
                    </div>
                    <span className="shrink-0 rounded-full px-3 py-1 text-xs font-bold text-[#0E1010] bg-[#09C771]">
                      {product.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#09C771] tracking-tight transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm font-mono text-[#09C771]/80 mt-1">{product.tagline}</p>
                  </div>

                  <p className="text-sm leading-relaxed text-white/50 flex-1 font-mono">
                    {product.description}
                  </p>

                  <ul className="space-y-2 border-t border-white/8 pt-4">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="size-1.5 shrink-0 rounded-full bg-[#09C771]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#09C771] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore {product.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
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
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#09C771] text-[#0E1010] px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Explore All Products</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
