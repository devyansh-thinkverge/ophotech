import { JourneyAnimation } from "./journey/JourneySection";

export function YourJourney() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16">
      {/* Same grid pattern as hero + stats */}
      <div className="absolute inset-0 grid-pattern opacity-70 pointer-events-none" />

      {/* Subtle glow at top to blend from stats */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(34,197,94,0.05)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 xl:px-0">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            Roadmap
            <span className="w-6 h-px bg-[#22c55e]" />
          </span>
          <h2 className="text-4xl font-bold text-white mt-1">
            Your Journey to{" "}
            <span className="gradient-text">AI Enablement</span>
          </h2>
          <p className="mt-3 text-base text-white/45">
            A Framework for Enterprise Readiness
          </p>
        </div>

        <JourneyAnimation />
      </div>

      {/* Bottom fade — transition into next light section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />
    </section>
  );
}
