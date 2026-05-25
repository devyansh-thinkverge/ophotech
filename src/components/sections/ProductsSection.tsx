import Link from "next/link";

const PRODUCTS = [
  {
    name: "ROAAR",
    tagline: "Enterprise Decision Intelligence",
    description:
      "An enterprise decision intelligence system that governs the entire AI lifecycle — from initial research and readiness assessment through adoption, monitoring, and reporting. ROAAR gives leadership a single, auditable view of every AI initiative in the organization.",
    highlights: [
      "End-to-end AI lifecycle governance",
      "Real-time adoption & ROI dashboards",
      "Audit-ready compliance reporting",
    ],
    badge: "Decision Intelligence",
    color: "#E45412",
  },
  {
    name: "Data Fabric AI",
    tagline: "Low-Code Data Unification Platform",
    description:
      "A low-code data platform that eliminates integration bottlenecks across enterprise systems. Data Fabric AI unifies ingestion, semantic modeling, and production deployment into a single governed pipeline — enabling teams to go from raw data to AI-ready assets in hours, not months.",
    highlights: [
      "One-click production deployment",
      "Unified semantic modeling layer",
      "Eliminates data silo bottlenecks",
    ],
    badge: "Data Platform",
    color: "#2A73B5",
  },
  {
    name: "Shoout AI",
    tagline: "Marketing Intelligence & Automation",
    description:
      "An enterprise-grade marketing intelligence and automation platform. Shoout AI acts as a strategic co-pilot for planning, executing, and optimizing marketing initiatives — combining predictive analytics with automated campaign execution to maximize customer lifetime value.",
    highlights: [
      "Predictive campaign optimization",
      "Automated audience segmentation",
      "Real-time revenue impact analytics",
    ],
    badge: "Marketing Intelligence",
    color: "#059669",
  },
];

export function ProductsSection() {
  return (
    <section className="py-16 px-4 bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-medium text-[#111111]">Our Products</h2>
          <p className="mt-4 text-base text-[#454545] max-w-2xl mx-auto">
            Purpose-built enterprise platforms that embed governed AI directly into your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="flex flex-col gap-5 rounded-2xl bg-white border border-[#E8E8E8] p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-[#0B1B2B]">{product.name}</h3>
                <span
                  className="shrink-0 rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: product.color }}
                >
                  {product.badge}
                </span>
              </div>
              <p className="text-sm font-medium text-[#E45412]">{product.tagline}</p>
              <p className="text-sm leading-relaxed text-[#454545] flex-1">
                {product.description}
              </p>
              <ul className="space-y-2 border-t border-[#F0F0F0] pt-4">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-[#454545]">
                    <span
                      className="size-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: product.color }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-[#E45412] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c73e0a]"
          >
            Explore All Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 8H11M11 8L8 5M11 8L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
