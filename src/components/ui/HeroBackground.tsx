"use client"

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion"
import { useEffect } from "react"

const nodes = [
  { x: 12, y: 22 },
  { x: 28, y: 12 },
  { x: 42, y: 30 },
  { x: 20, y: 48 },
  { x: 38, y: 62 },
  { x: 58, y: 18 },
  { x: 70, y: 38 },
  { x: 84, y: 24 },
  { x: 88, y: 56 },
  { x: 64, y: 66 },
  { x: 50, y: 80 },
  { x: 78, y: 78 },
]

const links: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [2, 5],
  [5, 6], [6, 7], [7, 8], [6, 9], [9, 10],
  [9, 11], [4, 10], [8, 11], [5, 7],
]

const chips = [
  { label: "Risk Analysis", x: "10%", y: "10%", depth: 28, delay: 0 },
  { label: "Compliance Mapping", x: "48%", y: "20%", depth: 40, delay: 0.4 },
  { label: "Predictive Models", x: "54%", y: "70%", depth: 22, delay: 0.8 },
  { label: "Audit Trail", x: "8%", y: "80%", depth: 34, delay: 1.2 },
  { label: "Data Governance", x: "62%", y: "44%", depth: 18, delay: 0.6 },
]

function FloatingChip({
  chip,
  smoothX,
  smoothY,
}: {
  chip: (typeof chips)[number]
  smoothX: MotionValue<number>
  smoothY: MotionValue<number>
}) {
  const chipX = useTransform(smoothX, [-1, 1], [chip.depth, -chip.depth])
  const chipY = useTransform(smoothY, [-1, 1], [chip.depth, -chip.depth])

  return (
    <motion.div
      className="absolute hidden md:block"
      style={{ left: chip.x, top: chip.y, x: chipX, y: chipY }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + chip.delay, duration: 0.8 }}
    >
      <motion.div
        className="flex items-center gap-2 rounded-full border border-[#01404F]/15 bg-white/70 backdrop-blur-md px-3 py-1.5 shadow-sm"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5 + chip.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#09C771]" />
        <span className="text-[11px] font-mono tracking-tight text-[#0E1010]/70">{chip.label}</span>
      </motion.div>
    </motion.div>
  )
}

export function HeroBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [mouseX, mouseY])

  const meshX = useTransform(smoothX, [-1, 1], [-18, 18])
  const meshY = useTransform(smoothY, [-1, 1], [-18, 18])
  const gridX = useTransform(smoothX, [-1, 1], [10, -10])
  const gridY = useTransform(smoothY, [-1, 1], [10, -10])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F1F1F1] via-[#09C771]/5 to-[#F1F1F1]" />

      {/* Active visuals confined to right side — left text column stays clean */}
      <div className="absolute inset-y-0 right-0 left-0 md:left-[45%] overflow-hidden">
        {/* Moving dotted grid */}
        <motion.div
          className="absolute -inset-24"
          style={{
            x: gridX,
            y: gridY,
            backgroundImage: "radial-gradient(circle at center, rgba(1,64,79,0.18) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 40%, transparent 100%)",
          }}
        />

        {/* Animated data-network mesh */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ x: meshX, y: meshY }}
        >
          {links.map(([a, b], i) => (
            <motion.line
              key={`link-${i}`}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="#09C771"
              strokeWidth={0.12}
              strokeOpacity={0.35}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.15, 0.45, 0.15] }}
              transition={{
                pathLength: { duration: 1.4, delay: i * 0.08 },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
              }}
            />
          ))}
          {nodes.map((node, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={node.x}
              cy={node.y}
              r={0.55}
              fill="#09C771"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
            />
          ))}
        </motion.svg>

        {/* Traveling pulse along data path */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ x: meshX, y: meshY }}
        >
          <motion.circle
            r={0.7}
            fill="#01404F"
            initial={{ cx: nodes[0].x, cy: nodes[0].y }}
            animate={{
              cx: [nodes[0].x, nodes[2].x, nodes[5].x, nodes[6].x, nodes[9].x, nodes[10].x],
              cy: [nodes[0].y, nodes[2].y, nodes[5].y, nodes[6].y, nodes[9].y, nodes[10].y],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Soft floating glow orbs */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#09C771]/20 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-[#01404F]/10 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating keyword chips */}
        {chips.map((chip) => (
          <FloatingChip key={chip.label} chip={chip} smoothX={smoothX} smoothY={smoothY} />
        ))}
      </div>
    </div>
  )
}
