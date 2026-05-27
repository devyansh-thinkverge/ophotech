import Link from "next/link";

const PRODUCTS = [
  {
    name: "ROAAR",
    tagline: "Enterprise Decision Intelligence",
    description:
      "An enterprise decision intelligence system that governs the entire AI lifecycle — from initial research and readiness assessment through adoption, monitoring, and reporting.",
    highlights: [
      "End-to-end AI lifecycle governance",
      "Real-time adoption & ROI dashboards",
      "Audit-ready compliance reporting",
    ],
    badge: "Decision Intelligence",
    accentColor: "#22c55e",
    href: "/products/roaar",
  },
  {
    name: "Data Fabric AI",
    tagline: "Low-Code Data Unification Platform",
    description:
      "A low-code data platform that eliminates integration bottlenecks across enterprise systems. Unify ingestion, semantic modeling, and production deployment into a single governed pipeline.",
    highlights: [
      "One-click production deployment",
      "Unified semantic modeling layer",
      "Eliminates data silo bottlenecks",
    ],
    badge: "Data Platform",
    accentColor: "#2A73B5",
    href: "/products/data-fabric-ai",
  },
  {
    name: "Shoout AI",
    tagline: "Marketing Intelligence & Automation",
    description:
      "An enterprise-grade marketing intelligence platform. Acts as a strategic co-pilot for planning, executing, and optimizing marketing initiatives with predictive analytics.",
    highlights: [
      "Predictive campaign optimization",
      "Automated audience segmentation",
      "Real-time revenue impact analytics",
    ],
    badge: "Marketing Intelligence",
    accentColor: "#22c55e",
    href: "/products/shoout-ai",
  },
];

export function ProductsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: "#0f0f0f" }}>
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            Built for Enterprise
            <span className="w-6 h-px bg-[#22c55e]" />
          </span>
          <h2 className="text-4xl font-bold text-white mt-1">
            Our{" "}
            <span className="gradient-text">Products</span>
          </h2>
          <p className="mt-3 text-base text-white/50 max-w-xl mx-auto">
            Purpose-built enterprise platforms that embed governed AI directly into your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group flex flex-col gap-5 rounded-2xl border border-white/8 p-7 transition-all duration-300 hover:border-[#22c55e]/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#22c55e] transition-colors duration-300">{product.name}</h3>
                <span
                  className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-black"
                  style={{ backgroundColor: product.accentColor }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-sm font-semibold" style={{ color: product.accentColor }}>
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/50 flex-1">
                {product.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 border-t border-white/8 pt-4">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-white/60">
                    <span
                      className="size-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: product.accentColor }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Footer link */}
              <div className="flex items-center gap-1 text-xs font-semibold text-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore {product.name}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-bold text-black transition-all hover:bg-[#4ade80] glow-green"
          >
            Explore All Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M5 8H11M11 8L8 5M11 8L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
