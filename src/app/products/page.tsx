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
    name: "Data Fabric AI",
    tagline: "Low-Code Data Unification Platform",
    description:
      "Data Fabric AI eliminates the integration bottlenecks that prevent enterprises from building production-ready AI. It unifies data ingestion, semantic modeling, and one-click production deployment into a single governed pipeline — enabling teams to go from raw, siloed data to AI-ready assets without heavy engineering overhead.",
    features: [
      {
        title: "Unified Data Ingestion",
        description:
          "Connect and ingest data from legacy databases, modern cloud environments, and third-party applications into a single, standardized data environment — eliminating siloed, fragmented data streams.",
      },
      {
        title: "Semantic Modeling Layer",
        description:
          "Build a shared semantic model across your enterprise data, standardizing internal taxonomies and ensuring every AI model trained on this foundation operates with consistent, contextually accurate information.",
      },
      {
        title: "One-Click Production Deployment",
        description:
          "Move from validated data pipelines to production deployment in a single action. Automated quality checks and compliance validation are built into every deployment workflow.",
      },
      {
        title: "Self-Healing Data Flows",
        description:
          "Automated quality pipelines continuously monitor data health, flag anomalies, and remediate inconsistencies — ensuring AI models are always trained on pristine, investment-grade data.",
      },
    ],
    badge: "Data Platform",
    color: "#22c55e",
    audience: "Data Engineering Teams, IT Architects, Data Scientists",
    href: "/products/data-fabric-ai",
  },
  {
    name: "Shoout AI",
    tagline: "Enterprise Marketing Intelligence & Automation Platform",
    description:
      "Shoout AI is the strategic co-pilot for enterprise marketing teams — combining predictive analytics, audience intelligence, and automated campaign execution into a single platform. It replaces fragmented marketing tools and intuition-based planning with data-driven precision that maximizes customer lifetime value and marketing ROI.",
    features: [
      {
        title: "Predictive Campaign Optimization",
        description:
          "ML models continuously analyze campaign performance data, competitor positioning, and market signals to optimize targeting, messaging, and timing — maximizing return on every marketing dollar spent.",
      },
      {
        title: "Intelligent Audience Segmentation",
        description:
          "Automatically segment audiences based on behavioral patterns, engagement history, and predicted lifetime value — enabling hyper-personalized campaigns that drive loyalty and reduce churn.",
      },
      {
        title: "Automated Execution Workflows",
        description:
          "End-to-end campaign automation from audience selection through creative versioning, channel distribution, and performance reporting — freeing marketing teams for high-value strategic work.",
      },
      {
        title: "Real-Time Revenue Impact Analytics",
        description:
          "Direct-line attribution dashboards connecting marketing activities to revenue outcomes, customer acquisition costs, and lifetime value — giving CMOs the data needed to confidently scale spend.",
      },
    ],
    badge: "Marketing Intelligence",
    color: "#22c55e",
    audience: "CMOs, Marketing Operations, Revenue Teams",
    href: "/products/shoout-ai",
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
