"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function AISolutionsAndServices() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "AI Solutions & Services" },
        ]}
        title="AI Solutions & Services"
        subtitle="Driving ROI Through Applied Artificial Intelligence"
        video="/vids/service-ai-solutions.mp4"
      />

      <main className="bg-white">

        <SolutionsIntroSection
          imageSrc="/images/ai_solutions/ai-image.png"
          imageAlt="AI and Machine Learning illustration"
          copy={
            <>
              <p className="mb-6">
                Stop experimenting with fragmented tools and stalled pilot programs. We transition enterprises from isolated AI experiments to production-ready solutions that deliver immediate, measurable financial returns — designed, trained, and deployed with custom AI models seamlessly embedded in your operational workflows.
              </p>
              <p>
                Every solution prioritizes fairness, transparency, and uncompromising data privacy — meeting stringent global regulatory standards, building institutional trust, and eliminating corporate risk. Elite machine learning that enables complex reasoning, real-time decision-making, and strategic forecasting.
              </p>
            </>
          }
          techStack={[
            {
              src: "/images/tech-stack-logos/octoml.svg",
              alt: "OctoML logo",
              wrapperClassName: "w-15 h-6 md:w-14 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/hugging-face.svg",
              alt: "Hugging Face logo",
              wrapperClassName: "w-7 h-6 md:w-8 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/openai.svg",
              alt: "OpenAI logo",
              wrapperClassName: "w-7 h-6 md:w-7 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/mistral-ai.svg",
              alt: "Mistral AI logo",
              wrapperClassName: "w-15 h-6 md:w-18 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/amazon-bedrock.svg",
              alt: "amazon bedrock logo",
              wrapperClassName: "w-15 h-6 md:w-14 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/azure-ai-studio.svg",
              alt: "Azure AI Studio logo",
              wrapperClassName: "w-15 h-6 md:w-17 md:h-8 flex items-center justify-center",
            },
          ]}
        />

        <IconCardsSection
          title="AI Enablement - Advantages"
          items={[
            {
              title: "Enterprise-Ready AI With Measurable ROI",
              icon: "/images/icons/monitor-rocket.svg",
            },
            {
              title: "Predictive Analytics And Process Automation",
              icon: "/images/icons/search-bulb.svg",
            },
            {
              title: "Personalized Customer Engagement",
              icon: "/images/icons/shield.svg",
            },
            {
              title: "Ethical And Compliant AI Governance",
              icon: "/images/icons/settings-load.svg",
            },
            {
              title: "Continuous Monitoring And Model Optimization",
              icon: "/images/icons/settings-phone.svg",
            },
          ]}
          withBackgroundDots
          backgroundDotsProps={{
            spacing: 36,
            dotSize: 2.5,
            backgroundColor: "white",
            dotColor: "#e5e7eb",
            style: { borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" },
          }}
        />

        {/* AI Deployment */}
        <section className="max-w-6xl mx-auto py-16 px-3 xl:px-0">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 items-center text-center px-4">
              <h3 className="text-4xl font-medium leading-[32px] md:leading-[38px] text-[#111827]">
                AI Deployment
              </h3>
              <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#6b7280] max-w-[860px]">
                Two critical factors for enterprise AI success.
              </p>
            </div>

            <div className="border border-[#f3f4f6] rounded-2xl px-6 md:px-10 py-7 bg-white shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex-1 flex flex-col gap-6">
                  <h4 className="text-2xl font-medium leading-[33px] text-[#22c55e] capitalize">
                    Scalability & MLOps:
                  </h4>
                  <p className="text-base font-normal leading-normal text-[#6b7280]">
                    We implement MLOps frameworks to manage the lifecycle of AI models, much like enterprise software, enabling rapid, reliable deployment at scale.
                  </p>
                </div>

                <div className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-[#22c55e]/20 to-transparent flex-shrink-0" aria-hidden />

                <div className="flex-1 flex flex-col gap-6">
                  <h4 className="text-2xl font-medium leading-[33px] text-[#22c55e] capitalize">
                    Ethical AI & Trust:
                  </h4>
                  <p className="text-base font-normal leading-normal text-[#6b7280]">
                    Every solution prioritizes fairness, transparency, and data privacy to reduce risk, ensure compliance, and build trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Chain of AI Implementation */}
        <BackgroundDots
          className="py-16"
          spacing={36}
          dotSize={2.5}
          backgroundColor="white"
          dotColor="#e5e7eb"
          style={{ borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" }}
        >
          <section className="max-w-6xl mx-auto px-3 xl:px-0">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-4xl font-medium leading-[32px] md:leading-[38px] text-[#111827]">
                  The Value Chain of AI Implementation
                </h3>
                <p className="text-[16px] md:text-[18px] font-normal leading-normal text-[#6b7280] max-w-[860px]">
                  We connect data science theory with secure, practical AI deployment for project success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {[{
                  title: "Strategic Problem Translation",
                  desc: "We align engineering strictly with business objectives. Every algorithm is designed to target churn reduction, operational yield optimization, or revenue expansion — not generalized intelligence that generates no measurable return.",
                }, {
                  title: "Custom Model Development & Training",
                  desc: "Senior data scientists engineer and rigorously train custom models utilizing your validated, proprietary data structures — highly contextualized to your industry nuances, not off-the-shelf tools applied generically.",
                }, {
                  title: "Seamless Business AI Integration",
                  desc: "Highly secure APIs and robust MLOps pipelines deploy advanced models directly into your existing cloud environments — bridging the gap between theoretical data science and live production deployment.",
                }, {
                  title: "Continuous MLOps Monitoring",
                  desc: "We monitor deployment health, detect data drift, ensure algorithmic accuracy, and rapidly retrain models as markets evolve — guaranteeing continuous reliability and permanent enterprise performance.",
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#f3f4f6] rounded-2xl p-3 bg-white shadow-sm hover:border-[#22c55e]/20 transition-colors"
                  >
                    <div className="flex flex-col gap-4">
                      <h4 className="text-2xl font-medium leading-[26px] text-[#111827] capitalize">
                        {item.title}
                      </h4>
                      <p className="text-base font-normal leading-normal text-[#6b7280]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </BackgroundDots>

        {/* Strategic AI Section */}
        <section className="max-w-6xl mx-auto py-16 px-3 xl:px-0">
          <div className="flex flex-col gap-10 items-center mb-10">
            <div className="flex flex-col gap-8 items-center">
              <div className="flex flex-col gap-5 items-center text-center max-w-[924px] px-4">
                <h3 className="text-3xl font-medium leading-[32px] md:leading-[38px] text-[#111827]">
                  Strategic AI: Adding Value to Data Beyond Simple Automation
                </h3>
                <p className="text-base font-normal leading-normal text-[#6b7280]">
                  Our AI solutions transform decision-making by embedding into core workflows, moving beyond basic automation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[{
                title: "Intelligent Process Automation",
                impact: "Structurally fuse deep ML with robotic process automation to autonomously manage high-volume, complex workflows including invoice processing, compliance checks, and document analysis.",
                outcome: "Drastically cut operational overhead, accelerate processing cycles, and free human capital for high-value strategic growth.",
              }, {
                title: "Predictive Analytics Services",
                impact: "Forecast market shifts, customer behavior, and equipment failures — enabling executive teams to optimize dynamic pricing and proactively minimize global inventory risks.",
                outcome: "Replace reactive decision-making with proactive, data-driven foresight that compounds competitive advantage over time.",
              }, {
                title: "NLP for Enterprise",
                impact: "Sophisticated Natural Language Processing architectures that comprehend, analyze, and generate human language at industrial scale for intelligent document processing, contract analysis, and personalized customer engagement.",
                outcome: "Increased Customer Lifetime Value (CLV), lower churn, and measurable revenue expansion from personalization at scale.",
              }].map((item, i) => (
                <div
                  key={i}
                  className="border border-[#f3f4f6] rounded-2xl p-5 bg-white shadow-sm hover:border-[#22c55e]/20 transition-colors h-full flex flex-col"
                >
                  <div className="flex flex-col gap-4 h-full">
                    <h4 className="text-2xl font-medium leading-[26px] text-[#111827] capitalize h-[40px] flex items-start">
                      {item.title}
                    </h4>
                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f9fafb] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                        <span className="text-sm font-medium text-[#111827]">
                          Strategic Business Impact
                        </span>
                      </div>
                      <p className="text-base font-normal leading-normal text-[#6b7280]">
                        {item.impact}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f9fafb] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                        <span className="text-sm font-medium text-[#111827]">
                          Tangible Outcome
                        </span>
                      </div>
                      <p className="text-base font-normal leading-normal text-[#6b7280]">
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full max-w-5xl mx-auto bg-[#f3f4f6]" aria-hidden />
        </section>

        <ContactSection />

        <SolutionsNavigationSection
          previousHref="/solutions/cloud-integration"
          title="Discover Next Step of Your AI Journey"
          cta={{ href: "/solutions/ai-agent-development", label: "AI Agent Development" }}
        />
      </main>

      <Footer />
    </div>
  );
}
