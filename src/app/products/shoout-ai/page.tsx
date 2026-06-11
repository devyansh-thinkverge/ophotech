"use client";

import { notFound } from "next/navigation";
import { Fragment } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";
import { ContactSection } from "@/components/sections/ContactSection";

const enterprisePerformance = [
  {
    title: "Availability & Reliability",
    body: "Our API-first microservices architecture guarantees 99.9% uptime with sub-two-second response times, ensuring your marketing team is never slowed down by performance bottlenecks.",
  },
  {
    title: "Uncompromising Security",
    body: "Built with OAuth2, robust Role-Based Access Control (RBAC), and end-to-end encryption, Shoout AI is SOC2-ready and built to meet the most stringent GDPR and enterprise data privacy requirements.",
  },
  {
    title: "Scalable Infrastructure",
    body: "Whether you are an SMB, a high-growth marketing agency, or a global enterprise, our multi-tenant SaaS architecture auto-scales to meet your campaign demands without manual intervention.",
  },
];

export default function ShooutAIPage() {
  notFound();
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111827]">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Shoout AI" },
        ]}
        title="Shoout AI"
        subtitle="The AI-Powered Co-Pilot for Enterprise Marketing Teams"
      />

      <main className="flex-1">
        <SolutionsIntroSection
          imageSrc="/images/ai_solutions/AI.png"
          imageAlt="Shoout AI marketing intelligence illustration"
          copy={
            <>
              <h2 className="mb-4 text-2xl font-semibold text-[#111827]">
                Your Strategic Marketing Co-Pilot
              </h2>
              <p className="mb-6">
                Shoout AI integrates Generative AI, predictive analytics, and automated workflows
                into a single, auditable system. We address the core challenges of modern
                marketing — including fragmented tooling, inconsistent brand execution, and
                opaque ROI metrics.
              </p>
              <p>
                Our vision is to provide the most trusted marketing co-pilot in the industry. By
                enabling organizations to market faster and smarter through governed AI, we help
                you reduce execution cycles by 40–60% while establishing full accountability for
                every decision.
              </p>
            </>
          }
        />

        <IconCardsSection
          title="Core Functional Architecture"
          items={[
            {
              title: "AI Content & Creative Engine",
              description: "Generate blogs, ads, emails, and landing pages with strict brand voice controls and human-in-the-loop approval workflows.",
              icon: "/images/icons/monitor-rocket.svg",
            },
            {
              title: "Campaign Strategy & Planning",
              description: "Accelerate go-to-market efforts with intelligent campaign ideation, optimized budget recommendations, and automated project timeline tracking.",
              icon: "/images/icons/calendar.svg",
            },
            {
              title: "SEO & Growth Intelligence",
              description: "Drive organic traffic with advanced keyword clustering, competitor benchmarking, and content gap analysis that keeps your strategy ahead of market shifts.",
              icon: "/images/icons/growth.svg",
            },
            {
              title: "Marketing Automation",
              description: "Seamlessly connect your CRM, CMS, and social platforms to execute trigger-based drip campaigns and automated workflows that nurture leads through the entire funnel.",
              icon: "/images/icons/settings-phone.svg",
            },
            {
              title: "Analytics & Decision Intelligence",
              description: "Access unified, executive-ready dashboards with clear attribution analytics and predictive recommendations to justify spend and optimize future performance.",
              icon: "/images/icons/paper-analysis.svg",
            },
            {
              title: "Governance & Compliance",
              description: "Protect your brand with mandatory AI audit trails, predefined content guardrails, and secure data privacy controls designed for global enterprise compliance.",
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

        {/* Enterprise Performance */}
        <BackgroundDots
          className="py-16"
          spacing={36}
          dotSize={2}
          backgroundColor="white"
          dotColor="#e5e7eb"
        >
          <div className="mx-auto max-w-6xl px-3 xl:px-0">
            <div className="text-center">
              <h2 className="text-3xl font-medium text-[#111827]">
                Engineered for Enterprise Performance
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base text-[#6b7280]">
                Built to meet the reliability, security, and scalability demands of global
                marketing organizations.
              </p>

              <div className="mt-10 rounded-2xl border border-[#f3f4f6] bg-white p-6 shadow-sm sm:p-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                  {enterprisePerformance.map((pillar, index) => (
                    <Fragment key={pillar.title}>
                      <div className="flex-1 text-left">
                        <h4 className="text-xl font-medium text-[#22c55e]">
                          {pillar.title}
                        </h4>
                        <p className="mt-4 text-base text-[#6b7280]">{pillar.body}</p>
                      </div>
                      {index < enterprisePerformance.length - 1 && (
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
          previousHref="/products/data-fabric-ai"
          previousLabel="Data Fabric AI"
          title="Explore Our Products"
          description="See how ROAAR governs your entire AI and digital transformation lifecycle."
          cta={{ href: "/products/roaar", label: "ROAAR" }}
        />
      </main>

      <Footer />
    </div>
  );
}
