"use client";

import { Fragment } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";
import { ContactSection } from "@/components/sections/ContactSection";

const engineeringMethodology = [
  {
    title: "Research Intelligence",
    description:
      "We build a systematic process to identify, compare, and shortlist tools, platforms, and technologies based on rigorous criteria — including business relevance, technical fit, security maturity, cost, and compliance readiness.",
  },
  {
    title: "Analytical Decision Support",
    description:
      "We convert technology options into structured decision intelligence using scoring models, comparative matrices, ROI analysis, risk assessment, and stakeholder-specific recommendations that drive confident, accountable decision-making.",
  },
  {
    title: "Adoption Excellence",
    description:
      "ROAAR ensures selected technologies are not just purchased or deployed, but effectively adopted. We provide implementation roadmaps, user readiness assessments, process alignment, and change management strategies to capture full investment value.",
  },
  {
    title: "Reporting & Governance",
    description:
      "We provide executive-ready reporting systems that track performance, adoption, cost efficiency, compliance, and business impact — allowing leadership to maintain continuous oversight and drive iterative improvement across the enterprise.",
  },
];

const whyROAAR = [
  {
    title: "Tailored Intelligence Architecture",
    body: "We don't provide off-the-shelf software. Our team integrates the ROAAR framework directly into your unique enterprise workflows, creating a custom decision engine that aligns with your specific operational bottlenecks and strategic goals.",
  },
  {
    title: "Vendor-Agnostic Decision Modeling",
    body: "We provide an objective, data-driven methodology that removes vendor bias from the selection process. Our framework ensures you choose technologies that deliver true business value, regardless of market hype.",
  },
  {
    title: "Scalable Decision Governance",
    body: "Whether you are evaluating a single AI agent or a complete digital transformation suite, ROAAR scales across departments. We embed standardized decision-making that persists long after the initial implementation is complete.",
  },
];

export default function ROAARPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111827]">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "ROAAR" },
        ]}
        title="ROAAR"
        subtitle="Research, Optimization, Analysis, Adoption, Reporting — Govern Your Entire AI Lifecycle"
      />

      <main className="flex-1">
        <SolutionsIntroSection
          imageSrc="/images/raar/raar-analysis.png"
          imageAlt="ROAAR decision intelligence illustration"
          copy={
            <>
              <h2 className="mb-4 text-2xl font-semibold text-[#111827]">
                Stop Experimenting. Start Scaling.
              </h2>
              <p className="mb-6">
                Most enterprises fail to extract real value from AI because they lack a
                standardized system for evaluation. This leads to rampant tool bloat, critical
                security vulnerabilities, and a graveyard of stalled pilot projects that drain
                capital without returning measurable business impact.
              </p>
              <p>
                ROAAR bridges the dangerous gap between technical potential and business
                performance. We provide a single source of truth for every tool, vendor, and
                investment — ensuring your organization moves from random experimentation to an
                evidence-based, governance-ready technology strategy.
              </p>
            </>
          }
        />

        <IconCardsSection
          title="What You Get"
          items={[
            {
              title: "Decision Accuracy",
              description: "Dramatically increase the percentage of technologies that are successfully adopted and provide long-term retention.",
              icon: "/images/icons/search-bulb.svg",
            },
            {
              title: "Evaluation Efficiency",
              description: "Reduce the time to move from initial vendor research to a high-confidence shortlist and procurement.",
              icon: "/images/icons/settings-code.svg",
            },
            {
              title: "Cost Optimization",
              description: "Identify and eliminate duplicate, unused, or low-value software investments — directly improving your bottom line.",
              icon: "/images/icons/settings-money.svg",
            },
            {
              title: "Compliance Readiness",
              description: "Every technology initiative is pre-assessed against global security, privacy, and regulatory criteria before deployment.",
              icon: "/images/icons/shield.svg",
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

        {/* Engineering Methodology */}
        <BackgroundDots
          className="py-16"
          spacing={36}
          dotSize={2}
          backgroundColor="white"
          dotColor="#e5e7eb"
        >
          <div className="mx-auto max-w-6xl px-3 xl:px-0">
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-3xl font-medium text-[#111827]">
                  The ROAAR Engineering Methodology
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base text-[#6b7280]">
                  A four-phase framework that transforms technology evaluation from guesswork into a
                  governed, repeatable process.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {engineeringMethodology.map((phase) => (
                    <div
                      key={phase.title}
                      className="flex flex-col gap-3 rounded-2xl border border-[#f3f4f6] bg-white p-6 text-left shadow-sm hover:border-[#22c55e]/20 transition-colors"
                    >
                      <div className="size-2 rounded-full bg-[#22c55e]" />
                      <h3 className="text-base font-semibold text-[#111827]">{phase.title}</h3>
                      <p className="text-sm leading-relaxed text-[#6b7280]">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Build With ROAAR */}
              <div className="text-center">
                <h3 className="text-[26px] font-medium leading-[38px] text-[#111827] sm:text-[28px]">
                  Why Build With ROAAR?
                </h3>
                <p className="mx-auto mt-4 max-w-4xl text-base text-[#6b7280]">
                  A custom decision intelligence system built for your unique enterprise challenges.
                </p>

                <div className="mt-10 rounded-2xl border border-[#f3f4f6] bg-white p-6 shadow-sm sm:p-10">
                  <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    {whyROAAR.map((pillar, index) => (
                      <Fragment key={pillar.title}>
                        <div className="flex-1 text-left">
                          <h4 className="text-xl font-medium text-[#22c55e]">
                            {pillar.title}
                          </h4>
                          <p className="mt-4 text-base text-[#6b7280]">{pillar.body}</p>
                        </div>
                        {index < whyROAAR.length - 1 && (
                          <div className="hidden lg:block lg:w-[1px] lg:self-stretch lg:bg-gradient-to-b lg:from-transparent lg:via-[#22c55e]/20 lg:to-transparent" />
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundDots>

        <ContactSection />

        <SolutionsNavigationSection
          title="Explore Our Products"
          description="See how our full product suite transforms your enterprise data and marketing operations."
          cta={{ href: "/products/centoire", label: "CENTOIRE" }}
        />
      </main>

      <Footer />
    </div>
  );
}
