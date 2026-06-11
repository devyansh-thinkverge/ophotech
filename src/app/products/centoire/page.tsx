"use client";

import { Fragment } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const modules = [
  {
    code: "F1",
    title: "AI Inspiration Engine",
    description: "Natural language briefs, image-to-concept extraction, moodboard generation, and concept variants from a single prompt.",
  },
  {
    code: "F2",
    title: "TechPack Generator",
    description: "Factory-ready 15-section technical documents: flat sketches, grading tables, BOM, material specs, and QC checklists.",
  },
  {
    code: "F3",
    title: "AI Product Imagery",
    description: "Ghost, flat-lay, on-figure, and lifestyle images before samples exist. Batch-render all colorways simultaneously.",
  },
  {
    code: "F4",
    title: "Trend Analysis Agent",
    description: "RAG-powered intelligence indexed from WGSN, Vogue Runway, and social signals — queryable in natural language.",
  },
  {
    code: "F5",
    title: "Inventory Agent",
    description: "Real-time SKU monitoring, velocity analysis, low-stock alerts, and AI-generated reorder recommendations.",
  },
  {
    code: "F6",
    title: "Demand Forecasting",
    description: "SKU-level probabilistic demand forecasts with scenario modeling, markdown timing, and seasonal buy planning.",
  },
  {
    code: "F7",
    title: "Cost Calculator",
    description: "Full BOM, CMT, freight, duty, and landed cost modeling across multiple MOQs and 5 manufacturing regions.",
  },
  {
    code: "F8",
    title: "Collection Planner",
    description: "Visual season planning canvas with style cards, category balance, margin mix, and trend coverage scoring.",
  },
  {
    code: "F9",
    title: "Fabric Sourcing Agent",
    description: "AI supplier discovery with sustainability scoring, RFQ generation, and lead time estimation.",
  },
  {
    code: "F10",
    title: "Sustainability Engine",
    description: "Automated environmental impact scoring per product — material, production, and shipping — embedded in every techpack.",
  },
];

const whyCentoire = [
  {
    title: "End-to-End Agent Pipeline",
    body: "CENTOIRE orchestrates a multi-agent system — from trend validation through techpack generation, cost modeling, and imagery — in a single governed workflow. No stitching together tools. No version control failures. One platform from concept to factory-ready output.",
  },
  {
    title: "Designer-First, No-Code UX",
    body: "Where traditional PLM tools are rigid and engineer-dependent, CENTOIRE is conversational and self-service. Designers work in natural language. Every agent interaction is inline, visual, and immediate — accessible to a solo studio and a global enterprise team alike.",
  },
  {
    title: "Intelligence That Compounds",
    body: "As more collections are built on CENTOIRE, trend, cost, and demand models improve in a compounding flywheel. Proprietary fashion intelligence — indexed from your collections, your sales data, and real-time market signals — creates a moat that grows with every product developed.",
  },
];


export default function CentoirePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111827]">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "CENTOIRE" },
        ]}
        title="CENTOIRE"
        subtitle="AI-Powered Fashion Intelligence & Product Development Platform — from mood reference to factory-ready techpack in under 30 minutes."
      />

      <main className="flex-1">

        {/* ── Intro / Problem ─────────────────────────────────────────── */}
        <BackgroundDots
          className="py-20"
          spacing={36}
          dotSize={2}
          backgroundColor="white"
          dotColor="#e5e7eb"
        >
          <div className="mx-auto max-w-6xl px-4 xl:px-0">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* Left — metric cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { stat: "70%", label: "Faster product development cycles" },
                  { stat: "40%", label: "Fewer sampling rounds" },
                  { stat: "< 30 min", label: "Concept to factory-ready techpack" },
                ].map(({ stat, label }) => (
                  <div
                    key={stat}
                    className="flex flex-col gap-2 rounded-2xl border border-[#22c55e]/20 bg-[#f0fdf4] p-6"
                  >
                    <span className="text-4xl font-black text-[#22c55e]">{stat}</span>
                    <span className="text-sm font-medium text-[#4b5563]">{label}</span>
                  </div>
                ))}
              </div>

              {/* Right — copy */}
              <div className="flex flex-col gap-6 text-[15.5px] text-[#4b5563]">
                <h2 className="text-2xl font-semibold text-[#111827]">
                  Fashion Product Development Is Broken.
                </h2>
                <p>
                  A single garment requires up to 600 pages of documentation. Techpacks take 3–5 days
                  to produce by hand. Real-time trend intelligence costs $25,000+ per year. Product
                  photography runs $800–$2,000 per SKU — before a single sample exists. Inventory
                  decisions made on intuition cost brands 15–20% of annual revenue to dead stock.
                </p>
                <p>
                  CENTOIRE closes this gap entirely. A multi-agent AI pipeline handles every stage
                  of product development — from inspiration to production-ready specification —
                  with the intelligence of a full design house and the speed of software.
                </p>
                <p>
                  A designer can go from a mood reference to a fully generated techpack complete
                  with construction notes, material specs, cost estimates, and trend validation
                  in under 30 minutes.
                </p>
              </div>
            </div>
          </div>
        </BackgroundDots>

        {/* ── What You Get ────────────────────────────────────────────── */}
        <IconCardsSection
          title="What You Get"
          items={[
            {
              title: "TechPack Generator",
              description: "Factory-ready 15-section technical documents — flat sketches, grading tables, BOM, QC checklists — generated from a brief in under 30 minutes.",
              icon: "/images/icons/take-notes.svg",
            },
            {
              title: "Trend Intelligence",
              description: "Real-time fashion intelligence from WGSN, Vogue Runway, and social signals. Validate concepts, score trend alignment, and surface micro-trends in natural language.",
              icon: "/images/icons/research-analysis.svg",
            },
            {
              title: "Cost Calculator",
              description: "Full BOM, CMT, freight, duty, and landed cost modeling at multiple MOQs across 5 manufacturing regions — with full margin waterfall visibility.",
              icon: "/images/icons/settings-money.svg",
            },
            {
              title: "AI Product Imagery",
              description: "Professional ghost, flat-lay, on-figure, and lifestyle product photos before a sample exists. Eliminate pre-production photography costs entirely.",
              icon: "/images/icons/monitor-rocket.svg",
            },
          ]}
          withBackgroundDots
          backgroundDotsProps={{
            spacing: 36,
            dotSize: 2,
            backgroundColor: "white",
            dotColor: "#e5e7eb",
            style: { borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" },
          }}
        />

        {/* ── Ten Intelligence Modules ─────────────────────────────────── */}
        <BackgroundDots
          className="py-16"
          spacing={36}
          dotSize={2}
          backgroundColor="white"
          dotColor="#e5e7eb"
        >
          <div className="mx-auto max-w-6xl px-4 xl:px-0">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-medium text-[#111827]">
                Ten Intelligence Modules
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base text-[#6b7280]">
                CENTOIRE is organized into ten feature modules covering every phase of the product
                development lifecycle — from creative inspiration through sustainability scoring.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((mod) => (
                <div
                  key={mod.code}
                  className="flex flex-col gap-3 rounded-2xl border border-[#f3f4f6] bg-white p-6 shadow-sm hover:border-[#22c55e]/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center rounded-lg bg-[#f0fdf4] px-2.5 py-1 text-xs font-bold text-[#22c55e]">
                      {mod.code}
                    </span>
                    <h3 className="text-base font-semibold text-[#111827]">{mod.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#6b7280]">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </BackgroundDots>

        {/* ── Why CENTOIRE ────────────────────────────────────────────── */}
        <BackgroundDots
          className="py-16"
          spacing={36}
          dotSize={2}
          backgroundColor="white"
          dotColor="#e5e7eb"
        >
          <div className="mx-auto max-w-6xl px-4 xl:px-0">
            <div className="text-center">
              <h2 className="text-[26px] font-medium leading-[38px] text-[#111827] sm:text-[28px]">
                Why Build With CENTOIRE?
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-base text-[#6b7280]">
                The only platform that governs the entire fashion product development lifecycle
                in a single, agent-driven workflow.
              </p>

              <div className="mt-10 rounded-2xl border border-[#f3f4f6] bg-white p-6 shadow-sm sm:p-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                  {whyCentoire.map((pillar, index) => (
                    <Fragment key={pillar.title}>
                      <div className="flex-1 text-left">
                        <h4 className="text-xl font-medium text-[#22c55e]">{pillar.title}</h4>
                        <p className="mt-4 text-base text-[#6b7280]">{pillar.body}</p>
                      </div>
                      {index < whyCentoire.length - 1 && (
                        <div className="hidden lg:block lg:w-[1px] lg:self-stretch lg:bg-gradient-to-b lg:from-transparent lg:via-[#22c55e]/20 lg:to-transparent" />
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BackgroundDots>

        <ContactSection />

        <SolutionsNavigationSection
          title="Explore Our Products"
          description="See how ROAAR governs your entire AI lifecycle — from readiness assessment through adoption, monitoring, and reporting."
          cta={{ href: "/products/roaar", label: "ROAAR" }}
        />
      </main>

      <Footer />
    </div>
  );
}
