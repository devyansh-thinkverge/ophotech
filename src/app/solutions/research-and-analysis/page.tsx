"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";
import { ContactSection } from "@/components/sections/ContactSection";


export default function RAARPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Research & Analysis" },
        ]}
        title="Research & Analysis"
        subtitle="The Enterprise AI Readiness Assessment"
        video="/vids/service-research-analysis.mp4"
      />

      <main className="bg-white">

        <SolutionsIntroSection
          imageSrc="/images/raar/research.png"
          imageAlt="RAAR illustration"
          copy={
            <>
              <p className="mb-6">
                We strictly refuse to deploy AI into disorganized, unmapped enterprise environments. Most large-scale AI initiatives fail rapidly — built on fragmented data silos and unsecured legacy systems. Our AI Readiness Assessment ensures you never make that mistake.
              </p>
              <p>
                A rigorous, proprietary intelligence framework driven by Senior Data Scientists, Cloud Architects, and AI/ML Engineers. We extract real-time operational insights, evaluate technical feasibility, and deliver fully auditable pathways that establish a strict, regulator-approved roadmap to custom AI adoption.
              </p>
            </>
          }
          techStack={[
            {
              src: "/images/tech-stack-logos/sas.svg",
              alt: "SAS logo",
              wrapperClassName: "w-10 h-6 md:w-14 md:h-6 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/spss.svg",
              alt: "SPSS logo",
              wrapperClassName: "w-10 h-6 md:w-14 md:h-6 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/python.svg",
              alt: "Python logo",
              wrapperClassName: "w-10 h-6 md:w-10 md:h-6 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/power-bi.svg",
              alt: "Power BI logo",
              wrapperClassName: "w-10 h-6 md:w-6 md:h-6 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/github.svg",
              alt: "GitHub logo",
              wrapperClassName: "w-10 h-6 md:w-16 md:h-6 flex items-center justify-center",
            },
          ]}
        />

        {/* How RAAR Works Section */}
        <BackgroundDots
          className="py-16"
          spacing={36}
          dotSize={2.5}
          backgroundColor="white"
          dotColor="#e5e7eb"
          style={{ borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" }}
        >
          <section className="mx-auto max-w-6xl px-3 xl:px-0">
            <div className="flex flex-col gap-10 items-center">
              <h2 className="text-center text-4xl font-medium text-[#111827]">
                How it Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full">
                {[
                  {
                    title: "Structural Data Profiling",
                    text: "Deep architectural extraction — pulling sample structures from legacy databases, modern cloud, and active security protocols. We validate the cleanliness, consistency, and accessibility of your core data assets before any AI model touches them.",
                  },
                  {
                    title: "Capability Benchmarking",
                    text: "Evaluate existing network topologies against industry-leading enterprise standards. Conduct stress tests on baseline data quality, test zero-trust security frameworks, assess IT cost efficiency, and identify deep structural gaps.",
                  },
                  {
                    title: "Operational Readiness Analysis",
                    text: "Measure hard infrastructural limits and assess human organizational readiness. Ensure existing systems and workforce can seamlessly handle autonomous AI agents without operational disruption.",
                  },
                  {
                    title: "Persona-Specific Reporting",
                    text: "Customized, highly targeted intelligence for specific decision-makers: ROI dashboards for executives, technical integration blueprints for IT architects, and strict governance documentation for legal and compliance teams.",
                  },
                ].map((item) => (
                  <div key={item.title} className="h-full">
                    <div className="h-full rounded-2xl border border-[#f3f4f6] bg-white p-5 flex flex-col gap-4 items-start shadow-sm hover:border-[#22c55e]/20 transition-colors">
                      <h3 className="text-2xl font-medium text-[#111827] capitalize">
                        {item.title}
                      </h3>
                      <p className="text-base leading-normal text-[#6b7280]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </BackgroundDots>

        <IconCardsSection
          title="What You Get"
          items={[
            {
              title: "Full Visibility",
              description:
                "Complete, 360-degree view of your enterprise data architecture with a definitive score on your true AI integration readiness.",
              icon: "/images/icons/tailored.svg",
            },
            {
              title: "Strategic Benchmarks",
              description:
                "Direct, uncompromising industry comparisons showing exactly where your organization stands in AI maturity, operational performance, and security compliance versus competitors.",
              icon: "/images/icons/settings-load.svg",
            },
            {
              title: "Smart Recommendations",
              description:
                "Hard, data-driven guidance on which specific AI models to deploy, which legacy systems to modernize immediately, and which internal workflows yield the highest ROI when automated.",
              icon: "/images/icons/search-notes.svg",
            },
            {
              title: "Stakeholder-Specific Insights",
              description:
                "Customized, risk-adjusted reporting packages designed for C-Suite leaders — empowering confident multi-million dollar AI infrastructure investment decisions.",
              icon: "/images/icons/people.svg",
            },
            {
              title: "Audit-Ready Documentation",
              description:
                "Airtight compliance trails, security vulnerability disclosures, and data governance reports prepared for internal regulators, external auditors, and executive boards.",
              icon: "/images/icons/take-notes.svg",
            },
          ]}
        />

        <div className="h-px w-full max-w-5xl mx-auto bg-[#f3f4f6]" aria-hidden />

        <ContactSection />

        <SolutionsNavigationSection
          sectionClassName="px-6"
          ctaWrapperClassName="mt-6"
          title="Discover Next Step of Your AI Journey"
          cta={{
            href: "/solutions/data-structuring-and-monetization",
            label: "Data Structuring & Monetization",
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
