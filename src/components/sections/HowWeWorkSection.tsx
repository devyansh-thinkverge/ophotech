"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PencilRuler, Boxes, LineChart } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "AI Readiness Audit",
    points: [
      "Comprehensive Infrastructure Mapping",
      "Operational Bottleneck Identification",
      "Predictable ROI Forecasting",
    ],
  },
  {
    icon: PencilRuler,
    number: "02",
    title: "Architecture Blueprint",
    points: [
      "Zero-Trust Security Framework",
      "Seamless ERP Integration",
      "Strict Compliance Mapping",
    ],
  },
  {
    icon: Boxes,
    number: "03",
    title: "Governed Deployment",
    points: [
      "Zero Operational Downtime",
      "Full Data Traceability",
      "Immediate Velocity Scaling",
    ],
  },
  {
    icon: LineChart,
    number: "04",
    title: "Continuous MLOps",
    points: [
      "Automated Model Retraining",
      "Real-Time Performance Monitoring",
      "Algorithmic Drift Detection",
    ],
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export function HowWeWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-16 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#0E1010]/60 text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            HOW WE WORK
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0E1010] tracking-tighter mt-2">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              OUR ENGAGEMENT{" "}
            </motion.span>
            <motion.span
              className="text-[#09C771] inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              PROCESS
            </motion.span>
          </h2>
          <motion.p
            className="text-sm text-[#0E1010]/60 font-mono mt-2 max-w-xl mx-auto text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A structured, risk-controlled pathway from AI readiness to governed production deployment.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="group bg-[#0E1010] rounded-2xl p-6 cursor-pointer relative overflow-hidden"
            >
              {/* Hover fill */}
              <motion.div
                className="absolute inset-0 bg-[#09C771]/0 group-hover:bg-[#09C771]"
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-[#09C771] flex items-center justify-center group-hover:bg-[#0E1010] transition-colors duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <step.icon className="w-5 h-5 text-[#0E1010] group-hover:text-[#09C771] transition-colors duration-300" />
                  </motion.div>
                  <span className="font-black text-3xl text-white/15 group-hover:text-[#0E1010]/20 tracking-tighter transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-[#0E1010] tracking-tight mb-4 transition-colors duration-300">
                  {step.title}
                </h3>

                <ul className="space-y-2.5">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-white/60 group-hover:text-[#0E1010]/70 font-mono text-xs leading-relaxed transition-colors duration-300"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#09C771] group-hover:bg-[#0E1010] shrink-0 transition-colors duration-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
