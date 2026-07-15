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

export default function AIAgentDevelopment() {
  const strategicValueCards = [
    {
      title: "Simple Task:",
      subtitle: "Automating a single data entry point.",
      details: [
        { type: "badge", text: "AI Agent Development" },
        {
          type: "text",
          label: "Complex Workflow:",
          copy: "An agent handles customer service from intake to resolution (triage, pulling data, issuing refunds, updating CRM).",
        },
        {
          type: "badgeWithCopy",
          text: "Business Impact (ROI)",
          bold: "Massive operational cost reduction",
          rest: " and guaranteed 24/7 service availability.",
        },
      ],
    },
    {
      title: "Reactive:",
      subtitle: "Analyzing past data for insights.",
      details: [
        { type: "badge", text: "AI Agent Development" },
        {
          type: "text",
          label: "Proactive:",
          copy: "An agent monitors market feeds, identifies a pricing opportunity, models the financial impact, and executes the trade.",
        },
        {
          type: "badgeWithCopy",
          text: "Business Impact (ROI)",
          bold: "New revenue generation",
          rest: " and a significant competitive advantage through speed.",
        },
      ],
    },
  ];

  const agenticUseCases = [
    {
      title: "Planning & Execution",
      body:
        'We build agents that can break down a high-level goal (e.g., "Onboard a new vendor") into sequential steps, executing each step and course-correcting based on real-time feedback.',
    },
    {
      title: "Tool Integration",
      body:
        "Agents are designed to leverage your existing tools (APIs, databases, enterprise software such as ERP/CRM) effectively, ensuring they integrate seamlessly with your technology stack.",
    },
    {
      title: "Structural Change Enablement",
      body:
        "For the team leading structural change, agents directly enable organizational redesign by automating entire departments or functions, allowing highly skilled employees to focus solely on high-value strategy and creativity.",
    },
  ];

  const governancePillars = [
    {
      title: ["Strict Safety &", "Alignment Protocols"],
      body:
        "Rigorous operational boundaries ensure agents act strictly within corporate constraints, financial limits, and ethical guidelines. Every boundary is enforced at the system level — preventing unintended errors that could cause compliance violations or financial exposure.",
    },
    {
      title: ["Full Transparency &", "Auditability"],
      body:
        "Every computational decision is logged in real time. Absolute clarity for internal stakeholders. Simplified external compliance for regulators and auditors. Your agents operate as fully transparent systems, not black boxes.",
    },
    {
      title: ["Scalable Cloud-Native", "Architecture"],
      body:
        "Agents are engineered to handle massive peak loads, cleanly integrate with your existing MLOps pipelines, and continuously improve over time — ensuring your AI workforce scales with your business without architectural rework.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "AI Agent Development" },
        ]}
        title="AI Agent Development"
        subtitle="Shift From Static Software to a Dynamic AI Digital Workforce"
        video="/vids/service-ai-agent.mp4"
      />

      <main className="flex-1">

        <SolutionsIntroSection
          imageSrc="/images/ai_agents/ai-agent.png"
          imageAlt="AI agents illustration"
          copy={
            <>
              <p className="mb-6">
                We engineer intelligent systems that execute multi-step reasoning, manage complex tools, and seamlessly drive autonomous business processes. Unlike traditional automation that handles single, rigid actions, our agents understand high-level operational goals and execute complete workflow automation with real-time planning, execution, and course-correction.
              </p>
              <p>
                Beyond basic task automation, our agents continuously monitor real-time data, identify market opportunities, model financial impact, and execute strategic decisions autonomously — generating net-new revenue while securely connecting to your ERP systems, CRMs, and proprietary databases.
              </p>
            </>
          }
          techStack={[
            {
              src: "/images/tech-stack-logos/langchain.svg",
              alt: "langchain logo",
              wrapperClassName: "w-15 h-6 md:w-20 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/haystack.svg",
              alt: "haystack logo",
              wrapperClassName: "w-20 h-6 md:w-22 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/pinecone.svg",
              alt: "Pinecone logo",
              wrapperClassName: "w-20 h-6 md:w-22 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/llamaindex.svg",
              alt: "llamaindex logo",
              wrapperClassName: "w-20 h-6 md:w-22 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/gemini.svg",
              alt: "gemini logo",
              wrapperClassName: "w-15 h-6 md:w-18 md:h-8 flex items-center justify-center",
            },
          ]}
        />

        <IconCardsSection
          title="What You Get"
          items={[
            {
              title: "Autonomous, Intelligent Digital Workforce",
              icon: "/images/icons/settings-code.svg",
            },
            {
              title: "End‑To‑End Workflow Automation",
              icon: "/images/icons/loader-cube.svg",
            },
            {
              title: "Transparent And Governed AI Operations",
              icon: "/images/icons/cloud-phone.svg",
            },
            {
              title: "Scalable Cloud‑Native Agent Architecture",
              icon: "/images/icons/cloud-db.svg",
            },
            {
              title: "Enhanced Organizational Efficiency",
              icon: "/images/icons/coding-phone.svg",
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

        {/* AI Agent Development Framework */}
        <BackgroundDots
          className="py-16"
          spacing={36}
          dotSize={2.5}
          backgroundColor="white"
          dotColor="#e5e7eb"
          style={{ borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" }}
        >
          <div className="mx-auto max-w-6xl px-3 xl:px-0">
            <div className="space-y-16">
              {/* Strategic Value */}
              <div className="text-center">
                <h2 className="text-3xl font-medium text-[#111827]">
                  The Strategic Value of Autonomous Agents
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base text-[#6b7280]">
                  AI Agents enhance core business functions by completing end-to-end workflows, making decisions, and adapting to dynamic conditions beyond basic automation.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {strategicValueCards.map((card) => (
                    <div
                      key={card.title}
                      className="relative rounded-2xl border border-[#f3f4f6] bg-white p-6 text-left shadow-sm hover:border-[#22c55e]/20 transition-colors"
                    >
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-2xl font-medium text-[#111827]">{card.title}</h3>
                          <p className="text-base text-[#6b7280]">{card.subtitle}</p>
                        </div>

                        {card.details.map((detail, detailIndex) => {
                          if (detail.type === "badge") {
                            return (
                              <div
                                key={`${card.title}-badge-${detailIndex}`}
                                className="inline-flex rounded-lg bg-[#f9fafb] px-3 py-1 text-sm font-medium text-[#111827]"
                              >
                                {detail.text}
                              </div>
                            );
                          }

                          if (detail.type === "badgeWithCopy") {
                            return (
                              <div key={`${card.title}-badgecopy-${detailIndex}`} className="space-y-2">
                                <div className="inline-flex rounded-lg bg-[#f9fafb] px-3 py-1 text-sm font-medium text-[#111827]">
                                  {detail.text}
                                </div>
                                <p className="text-base text-[#6b7280]">
                                  <span className="font-medium text-[#111827]">{detail.bold}</span>
                                  {detail.rest}
                                </p>
                              </div>
                            );
                          }

                          return (
                            <p key={`${card.title}-text-${detailIndex}`} className="text-base text-[#6b7280]">
                              <span className="font-medium text-[#111827]">{detail.label} </span>
                              {detail.copy}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agentic AI – Uses */}
              <div className="text-center">
                <h3 className="text-2xl font-medium leading-[38px] text-[#111827]">Agentic AI - Uses</h3>
                <p className="mx-auto mt-4 max-w-4xl text-base text-[#6b7280]">
                  Our focus is on bridging the gap between complex business requirements and technical innovation by building agents that are reliable, governed, and integrated into your current systems.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  {agenticUseCases.map((useCase) => (
                    <div
                      key={useCase.title}
                      className="rounded-2xl border border-[#f3f4f6] bg-white p-6 text-left shadow-sm hover:border-[#22c55e]/20 transition-colors h-full flex flex-col"
                    >
                      <h4 className="text-2xl font-medium text-[#111827] h-[60px] flex items-start">
                        {useCase.title}
                      </h4>
                      <p className="mt-3 text-base text-[#6b7280]">
                        {useCase.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Building Trustworthy and Governed Agents */}
              <div className="text-center">
                <h3 className="text-[26px] font-medium leading-[38px] text-[#111827] sm:text-[28px]">
                  Building Trustworthy and Governed Agents
                </h3>
                <p className="mx-auto mt-4 max-w-4xl text-[16px] text-[#6b7280] sm:text-[18px]">
                  As leaders in AI, we prioritize a governance framework essential for scaling autonomous systems
                </p>

                <div className="mt-10 rounded-2xl border border-[#f3f4f6] bg-white p-6 shadow-sm sm:p-10">
                  <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    {governancePillars.map((pillar, index) => (
                      <Fragment key={pillar.title.join(" ")}>
                        <div className="flex-1 text-left">
                          <h4 className="text-2xl font-medium leading-[26px] text-[#22c55e]">
                            {pillar.title.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                          </h4>
                          <p className="mt-4 text-base text-[#6b7280]">{pillar.body}</p>
                        </div>
                        {index < governancePillars.length - 1 && (
                          <div className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-[#22c55e]/20 to-transparent" aria-hidden />
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundDots>

        <div className="h-px w-full max-w-5xl mx-auto bg-[#f3f4f6]" aria-hidden />

        <ContactSection />

        <SolutionsNavigationSection
          previousHref="/solutions/ai-solutions-and-services"
          title="Discover Next Step of Your AI Journey"
          cta={{
            href: "/solutions/predictive-analysis",
            label: "Predictive Analysis",
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
