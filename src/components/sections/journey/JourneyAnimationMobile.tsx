
"use client";

import { JOURNEY_STOPS } from "./JourneyStops";
import Image from "next/image";

export function JourneyAnimationMobile() {
  return (
    <div className="w-full px-4 py-8 lg:hidden">
      {/* Vertical Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div
          className="absolute left-[23px] top-0 bottom-0 w-[2px] -translate-x-1/2"
          style={{ background: "linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))" }}
        />

        {/* Timeline Items */}
        <div className="space-y-0 relative">
          {JOURNEY_STOPS.map((stop) => (
            <div key={stop.id} className="relative">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="relative flex-shrink-0 rounded-full p-2" style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}>
                  <Image
                    src={stop.iconMobile}
                    alt=""
                    width={30}
                    height={30}
                    className="brightness-0 invert"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 mb-10">
                  <h3 className="text-base font-bold text-white leading-tight mb-2">
                    {stop.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {stop.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
