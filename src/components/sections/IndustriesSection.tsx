const INDUSTRIES = [
  {
    title: "Financial Services",
    description:
      "Real-time fraud detection, predictive risk modeling, and automated regulatory compliance for banks, insurers, and capital markets firms.",
    icon: "💳",
  },
  {
    title: "Public Sector",
    description:
      "Secure, restricted AI for sovereign intelligence — purpose-built for government agencies with strict data localization and audit requirements.",
    icon: "🏛️",
  },
  {
    title: "Supply Chain & Logistics",
    description:
      "Autonomous workflow orchestration, demand forecasting, and operational bottleneck prediction across global distribution networks.",
    icon: "🚢",
  },
  {
    title: "Enterprise IT Operations",
    description:
      "Infrastructure auditing, system redundancy elimination, and intelligent automation to reduce operational overhead and accelerate delivery.",
    icon: "🖥️",
  },
  {
    title: "Corporate Workforce",
    description:
      "Secure conversational AI agents that give employees instant access to institutional knowledge without exposing sensitive data.",
    icon: "👥",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            Sectors
            <span className="w-6 h-px bg-[#22c55e]" />
          </span>
          <h2 className="text-4xl font-bold text-[#111827] mt-1">
            Industries We <span className="text-[#22c55e]">Serve</span>
          </h2>
          <p className="mt-3 text-base text-[#6b7280] max-w-2xl mx-auto">
            Governed AI transformation for high-stakes enterprises where data security, compliance, and measurable ROI are non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="group flex flex-col gap-4 rounded-2xl border border-[#f3f4f6] bg-white p-6 transition-all duration-300 hover:border-[#22c55e]/40 hover:shadow-xl hover:-translate-y-1 cursor-default"
              style={{ "--tw-shadow-color": "rgba(240,253,244,0.8)" } as React.CSSProperties}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.15)" }}
                aria-hidden
              >
                {industry.icon}
              </span>
              <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#22c55e] transition-colors duration-300">
                {industry.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6b7280]">{industry.description}</p>

              <div className="mt-auto pt-3 border-t border-[#f9fafb] flex items-center gap-1 text-xs font-semibold text-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
