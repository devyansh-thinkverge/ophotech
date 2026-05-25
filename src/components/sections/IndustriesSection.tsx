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
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-medium text-[#111111]">
            Industries We Serve
          </h2>
          <p className="mt-4 text-base text-[#454545] max-w-2xl mx-auto">
            Governed AI transformation for high-stakes enterprises where data security, compliance, and measurable ROI are non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="flex flex-col gap-4 rounded-2xl border border-[#FCD5AC] bg-white p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl" aria-hidden>{industry.icon}</span>
              <h3 className="text-xl font-semibold text-[#0B1B2B]">{industry.title}</h3>
              <p className="text-sm leading-relaxed text-[#454545]">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
