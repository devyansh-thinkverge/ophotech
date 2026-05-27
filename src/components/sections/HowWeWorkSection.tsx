const STEPS = [
  {
    number: "01",
    title: "AI Readiness Audit",
    items: [
      "Comprehensive Infrastructure Mapping",
      "Operational Bottleneck Identification",
      "Predictable ROI Forecasting",
    ],
  },
  {
    number: "02",
    title: "Architecture Blueprint",
    items: [
      "Zero-Trust Security Framework",
      "Seamless ERP Integration",
      "Strict Compliance Mapping",
    ],
  },
  {
    number: "03",
    title: "Governed Deployment",
    items: [
      "Zero Operational Downtime",
      "Full Data Traceability",
      "Immediate Velocity Scaling",
    ],
  },
  {
    number: "04",
    title: "Continuous MLOps",
    items: [
      "Automated Model Retraining",
      "Real-Time Performance Monitoring",
      "Algorithmic Drift Detection",
    ],
  },
];

export function HowWeWorkSection() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            How We Work
            <span className="w-6 h-px bg-[#22c55e]" />
          </span>
          <h2 className="text-4xl font-bold text-white mt-1">
            Our Engagement{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="mt-3 text-base text-white/50 max-w-xl mx-auto">
            A structured, risk-controlled pathway from AI readiness to governed production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="group relative flex flex-col gap-4 rounded-2xl border border-white/8 p-6 transition-all duration-300 hover:border-[#22c55e]/40 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {index < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M6 12l4-4-4-4" stroke="rgba(34,197,94,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}

              {/* Step number */}
              <span
                className="text-5xl font-black leading-none select-none transition-colors duration-300 group-hover:text-[#22c55e]/40"
                style={{ color: "rgba(34,197,94,0.15)" }}
              >
                {step.number}
              </span>

              <h3 className="text-lg font-bold text-white group-hover:text-[#22c55e] transition-colors duration-300">{step.title}</h3>

              <ul className="space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#22c55e]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
