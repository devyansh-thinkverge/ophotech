"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 20, suffix: "+", label: "AI Products Developed" },
  { value: 10, suffix: "+", label: "Data Scientists & AI/ML Engineers" },
  { value: 9, suffix: "+", label: "Government Agencies Served" },
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "M+", label: "Lines of Code Written" },
];

function CountUp({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-16 px-4"
    >
      {/* Continuous grid pattern (same as hero) */}
      <div className="absolute inset-0 grid-pattern opacity-70 pointer-events-none" />

      {/* Top divider line — subtle separator from hero */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col items-center text-center gap-2 group relative"
            >
              {/* Vertical divider between items (desktop) */}
              {i < STATS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10"
                  style={{ background: "rgba(34,197,94,0.15)" }}
                />
              )}

              <dt className="text-4xl font-black text-[#22c55e] leading-none">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </dt>
              <dd className="text-sm leading-snug text-white/45 max-w-[130px] font-medium">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* Bottom divider into journey */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(34,197,94,0.2), transparent)" }}
      />
    </section>
  );
}
