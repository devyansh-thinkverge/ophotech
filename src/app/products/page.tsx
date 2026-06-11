"use client";

import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { ContactSection } from "@/components/sections/ContactSection";

const PRODUCTS = [
  {
    name: "ROAAR",
    tagline: "Enterprise Decision Intelligence System",
    description:
      "ROAAR governs the entire AI lifecycle from research and readiness assessment through adoption, execution, and reporting. It gives enterprise leadership a single, auditable view of every AI initiative — ensuring every deployment is traceable, compliant, and aligned with business objectives.",
    features: [
      {
        title: "AI Lifecycle Governance",
        description:
          "Manage every stage of AI deployment from initial readiness audit through production monitoring. ROAAR tracks model performance, data lineage, and decision outcomes in real time.",
      },
      {
        title: "Executive ROI Dashboards",
        description:
          "Purpose-built dashboards for C-Suite leaders showing adoption rates, cost savings, revenue impact, and compliance status — the data needed for confident multi-million dollar AI investment decisions.",
      },
      {
        title: "Audit-Ready Documentation",
        description:
          "Automatically generated compliance trails, security vulnerability disclosures, and data governance reports prepared for internal regulators, external auditors, and executive boards.",
      },
      {
        title: "Stakeholder-Specific Reporting",
        description:
          "Customized reporting packages for each stakeholder: ROI dashboards for executives, technical integration blueprints for IT architects, and strict governance documentation for legal teams.",
      },
    ],
    badge: "Decision Intelligence",
    color: "#22c55e",
    audience: "C-Suite, Chief Data Officers, Compliance Teams",
    href: "/products/roaar",
  },
  {
    name: "CENTOIRE",
    tagline: "AI-Powered Fashion Intelligence Platform",
    description:
      "CENTOIRE compresses the most time-intensive phases of fashion product development — from initial inspiration to production-ready specifications — into an intelligent, automated workflow powered by a multi-agent AI pipeline.",
    features: [
      {
        title: "AI TechPack Generator",
        description:
          "Generate factory-ready 15-section technical specification documents — including flat sketches, grading tables, material specs, and BOM — from a natural language brief in under 30 minutes.",
      },
      {
        title: "Trend Analysis Agent",
        description:
          "RAG-powered intelligence layer indexed from WGSN, Vogue Runway, and social signals. Query trend data in natural language, validate concepts, and surface micro-trends before they hit trade reports.",
      },
      {
        title: "Cost Calculator",
        description:
          "Full itemized cost modeling: BOM, CMT manufacturing estimates, packaging, freight, import duties, and landed cost per unit across multiple MOQ tiers and 5 manufacturing regions simultaneously.",
      },
      {
        title: "AI Product Imagery",
        description:
          "Generate professional ghost, flat-lay, on-figure, and lifestyle product images before a sample exists. Batch-render all colorways simultaneously for catalog, e-commerce, and marketing use.",
      },
    ],
    badge: "Fashion Intelligence",
    color: "#22c55e",
    audience: "Fashion Designers, D2C E-Commerce Brands, Design Agencies",
    href: "/products/centoire",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <HeroSection
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products" }]}
        title="Our Products"
        subtitle="Purpose-built enterprise platforms that embed governed AI directly into your operations."
      />

      <main className="bg-white">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-base text-[#6b7280] max-w-2xl mx-auto mb-16">
              Each Opho Technologies product is engineered from the ground up for enterprise-grade security, compliance, and measurable ROI — not consumer-grade tools adapted for business use.
            </p>

            <div className="flex flex-col gap-20">
              {PRODUCTS.map((product, index) => (
                <div key={product.name} className="flex flex-col gap-10">
                  {/* Product Header */}
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
                    <div className="flex flex-col gap-3 max-w-xl">
                      <div className="flex items-center gap-3">
                        <h2 className="text-4xl font-bold text-[#111827]">{product.name}</h2>
                        <span
                          className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                          style={{ backgroundColor: product.color }}
                        >
                          {product.badge}
                        </span>
                      </div>
                      <p className="text-lg font-medium" style={{ color: product.color }}>
                        {product.tagline}
                      </p>
                      <p className="text-sm text-[#6b7280]">
                        <span className="font-medium text-[#111827]">Built for: </span>
                        {product.audience}
                      </p>
                    </div>
                    <p className="text-base leading-relaxed text-[#6b7280] max-w-lg">
                      {product.description}
                    </p>
                  </div>

                  {/* Feature Cards */}
                  <BackgroundDots
                    className="rounded-2xl py-10 px-6 md:px-10"
                    spacing={36}
                    dotSize={2}
                    backgroundColor="white"
                    dotColor="#e5e7eb"
                    style={{ border: "1px solid #f3f4f6" }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {product.features.map((feature) => (
                        <div key={feature.title} className="flex flex-col gap-3">
                          <div
                            className="size-2 rounded-full"
                            style={{ backgroundColor: product.color }}
                          />
                          <h3 className="text-base font-semibold text-[#111827]">{feature.title}</h3>
                          <p className="text-sm leading-relaxed text-[#6b7280]">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </BackgroundDots>

                  <div className="flex justify-end">
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#22c55e] transition-colors hover:text-[#16a34a]"
                    >
                      View Full Details
                      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>

                  {index < PRODUCTS.length - 1 && (
                    <div className="h-px w-full bg-[#f3f4f6]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
