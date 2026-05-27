"use client";

import { motion } from "framer-motion";
import { Brain, Database, Shield, BarChart3, Zap, Lock, Network, Activity } from "lucide-react";

const workflowSteps = [
  { icon: Database, label: "Data" },
  { icon: Brain, label: "Govern" },
  { icon: Shield, label: "Deploy" },
  { icon: BarChart3, label: "Insights" },
];

const floatingElements = [
  { icon: Zap, x: 8, y: 12, delay: 0 },
  { icon: Lock, x: 82, y: 18, delay: 0.5 },
  { icon: Network, x: 6, y: 72, delay: 1 },
  { icon: Activity, x: 84, y: 68, delay: 1.5 },
];

const GREEN = "#22c55e";
const GREEN_DIM = "rgba(34,197,94,0.6)";

export function AnimatedWorkflow() {
  return (
    <div className="relative w-full h-[480px]">
      {/* Central Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-72 h-72">
          {/* Outer rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              border: "2px dashed rgba(34,197,94,0.25)",
            }}
          />

          {/* Inner counter-rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full"
            style={{ border: "1px solid rgba(34,197,94,0.15)" }}
          />

          {/* Center Node */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 m-auto w-24 h-24 rounded-full flex items-center justify-center glow-green"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
            }}
          >
            <Brain className="w-10 h-10 text-black" />
          </motion.div>

          {/* Orbiting Nodes */}
          {workflowSteps.map((step, index) => {
            const angle = (index * 90 - 45) * (Math.PI / 180);
            const radius = 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                style={{
                  left: `calc(50% + ${x}px - 28px)`,
                  top: `calc(50% + ${y}px - 28px)`,
                  position: "absolute",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-14 h-14 rounded-xl glass-green flex items-center justify-center group cursor-pointer relative"
                >
                  <step.icon className="w-6 h-6" style={{ color: GREEN }} />
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {step.label}
                  </motion.span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Connecting Lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={GREEN} stopOpacity="0.7" />
                <stop offset="100%" stopColor={GREEN} stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {workflowSteps.map((_, index) => {
              const angle = (index * 90 - 45) * (Math.PI / 180);
              const radius = 120;
              const centerX = 144;
              const centerY = 144;
              const innerR = 48;

              const x1 = centerX + Math.cos(angle) * innerR;
              const y1 = centerY + Math.sin(angle) * innerR;
              const x2 = centerX + Math.cos(angle) * (radius - 28);
              const y2 = centerY + Math.sin(angle) * (radius - 28);

              return (
                <motion.line
                  key={index}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                />
              );
            })}
          </svg>
        </div>
      </motion.div>

      {/* Floating corner elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: el.delay + 1 }}
          style={{ left: `${el.x}%`, top: `${el.y}%`, position: "absolute" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: el.delay }}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center"
          >
            <el.icon className="w-5 h-5" style={{ color: GREEN_DIM }} />
          </motion.div>
        </motion.div>
      ))}

      {/* Radiating data-flow particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: GREEN_DIM,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            x: [0, Math.cos((i * 45 * Math.PI) / 180) * 150],
            y: [0, Math.sin((i * 45 * Math.PI) / 180) * 150],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
