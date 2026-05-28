"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { JOURNEY_STOPS } from "./JourneyStops";

const CURVE_PATH_DATA =
  "M5.00098 69.4014C5.00098 69.4014 285.83 -75.7236 608.001 69.4014C930.172 214.526 1211 69.4014 1211 69.4014";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<'md' | 'lg' | 'xl' | '2xl'>('2xl');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBreakpoint('2xl');
      else if (width >= 1280) setBreakpoint('xl');
      else if (width >= 1024) setBreakpoint('lg');
      else if (width >= 768) setBreakpoint('md');
      else setBreakpoint('2xl');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};

export function JourneyAnimationDesktop() {
  const [scope, animate] = useAnimate();
  const breakpoint = useBreakpoint();

  const waitForElement = (selector: string, maxAttempts = 10, delay = 50): Promise<Element | null> => {
    return new Promise((resolve) => {
      let attempts = 0;
      const check = () => {
        if (!scope.current) { resolve(null); return; }
        const element = scope.current.querySelector(selector);
        if (element) {
          resolve(element);
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(check, delay);
        } else {
          resolve(null);
        }
      };
      check();
    });
  };

  useEffect(() => {
    const sequence = async () => {
      if (!scope.current) return;

      for (const stop of JOURNEY_STOPS) {
        const [contentEl, connectorEl] = await Promise.all([
          waitForElement(`#${stop.id}`),
          waitForElement(`#${stop.id}-connector`),
        ]);

        if (contentEl && connectorEl) {
          await Promise.all([
            animate(`#${stop.id}`, { opacity: 1, y: 0 }, { duration: 0.35 }),
            animate(`#${stop.id}-connector`, { opacity: 1, y: 0 }, { duration: 0.35 }),
          ]);
        }

        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    };

    sequence();
  }, [animate, breakpoint]);

  return (
    <div ref={scope} className="relative w-full aspect-[1216/600] hidden lg:block mb-15">
      {/* SVG Path */}
      <div className="absolute inset-0 top-20 flex justify-center pointer-events-none">
        <svg
          viewBox="0 0 1216 139"
          className="w-full max-w-[1216px] overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="20%" stopColor="#4ade80" />
              <stop offset="40%" stopColor="#86efac" />
              <stop offset="60%" stopColor="#bbf7d0" />
              <stop offset="80%" stopColor="#d1fae5" />
              <stop offset="100%" stopColor="#f0fdf4" />
            </linearGradient>
          </defs>

          <path
            id="journey-path"
            d={CURVE_PATH_DATA}
            stroke="url(#pathGradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray="20 20"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Connectors & Content */}
      <div className="absolute inset-0 w-full h-full max-w-[1216px] mx-auto">
        {JOURNEY_STOPS.map((stop) => (
          <div
            key={stop.id}
            className="absolute flex flex-row items-start w-[260px]"
            style={{ left: stop.left, top: stop.top[breakpoint] }}
          >
            <motion.div
              id={`${stop.id}-connector`}
              initial={{ opacity: 0, y: stop.position === 'top' ? 20 : -20 }}
              className="relative flex-shrink-0"
            >
              <Image
                src={stop.icon}
                alt=""
                width={96}
                height={stop.position === 'bottom' ? 340 : 325}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              id={stop.id}
              initial={{ opacity: 0, y: 10 }}
              className={`text-left flex-1 ${stop.position === 'bottom' ? 'mt-20' : 'mt-16'}`}
            >
              <h3 className="text-lg font-bold text-white leading-tight mb-2">
                {stop.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {stop.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
