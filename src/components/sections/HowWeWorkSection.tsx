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
    <section className="py-16 px-4 bg-[#071B2B]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-medium text-white">
            Our Engagement Process
          </h2>
          <p className="mt-4 text-base text-blue-100 max-w-2xl mx-auto">
            A structured, risk-controlled pathway from AI readiness to governed production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#E45412" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <span className="text-5xl font-semibold text-[#E45412]/20 leading-none select-none">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <ul className="space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#E45412]" />
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
