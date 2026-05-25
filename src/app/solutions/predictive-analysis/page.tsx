"use client";

import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";

export default function PredictiveAnalysisPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Predictive Analysis" },
        ]}
        title="Predictive Analysis as a Service"
        subtitle="Anticipate the Market. Optimize the Enterprise."
        video="/videos/Research-and-Analysis.mp4"
      />

      <main className="bg-white text-[#0B1B2B]">

        <SolutionsIntroSection
          imageSrc="/images/raar/research.png"
          imageAlt="Predictive analysis illustration"
          copy={
            <>
              <p className="mb-6">
                Most enterprises rely on backward-looking analytics — dashboards that confirm what already happened. We build sophisticated ML architectures that project into the future, identifying complex behavioral patterns and systemic trends invisible to traditional BI tools.
              </p>
              <p>
                Our predictive models act as an enterprise early-warning system, continuously analyzing real-time data against historical precedents so leadership can proactively neutralize supply chain disruptions, financial anomalies, and customer attrition before they impact the bottom line.
              </p>
            </>
          }
          techStack={[
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
            {
              src: "/images/tech-stack-logos/azure.svg",
              alt: "Azure logo",
              wrapperClassName: "w-10 h-6 md:w-8 md:h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/aws.svg",
              alt: "AWS logo",
              wrapperClassName: "w-10 h-6 md:w-10 md:h-8 flex items-center justify-center",
            },
          ]}
        />

        {/* Methodology Section */}
        <BackgroundDots
          className="py-16"
          spacing={36}
          dotSize={2.5}
          backgroundColor=""
          dotColor="#D9D9D9"
          style={{
            background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
          <section className="mx-auto max-w-6xl px-3 xl:px-0">
            <div className="flex flex-col gap-10 items-center">
              <h2 className="text-center text-4xl font-medium text-[#111111]">
                Predictive Engineering Methodology
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
                {[
                  {
                    title: "Data Structuring & Feature Engineering",
                    text: "Predictive accuracy relies entirely on data quality. We rigorously extract, clean, and structure time-series data, engineering specific mathematical features that highlight hidden correlations invisible to standard analytics.",
                  },
                  {
                    title: "Custom Algorithmic Modeling",
                    text: "We do not use generic off-the-shelf tools. Senior data scientists develop custom statistical and deep learning models uniquely tailored to your industry dynamics — highly sensitive to the specific market variables that drive your business.",
                  },
                  {
                    title: "API-Driven Operational Integration",
                    text: "A predictive model is useless if siloed. We engineer robust API gateways feeding insights directly into your ERP, CRM, and operational software — empowering teams to act on forecasts seamlessly within existing workflows.",
                  },
                  {
                    title: "Continuous Model Retraining (MLOps)",
                    text: "Markets shift and static algorithms degrade. We deploy automated MLOps pipelines that continuously monitor algorithmic accuracy against real-world outcomes and automatically retrain models to guarantee permanent enterprise reliability.",
                  },
                ].map((item) => (
                  <div key={item.title} className="h-full">
                    <div className="h-full rounded-2xl border border-[#fcd5ac] bg-white/30 p-5 flex flex-col gap-4 items-start card-text-smaller">
                      <h3 className="text-xl font-medium text-[#111111]">{item.title}</h3>
                      <p className="text-base leading-normal text-[#454545]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="flex flex-col gap-10 mt-16">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-3xl font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                  From Reactive Reporting to Proactive Foresight
                </h3>
                <p className="text-base font-normal leading-normal text-[#454545] max-w-[860px]">
                  We replace static, intuition-based planning with data-driven precision — accurately forecasting demand spikes, operational bottlenecks, and customer behavior so you can deploy capital exactly where it is needed.
                </p>
              </div>

              <div className="rounded-2xl border border-[#FCD5AC] bg-white/30 px-6 py-5 md:px-10 w-full card-text-smaller">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch md:items-start min-h-[243px] relative">
                  <div className="flex-1 flex flex-col gap-4 items-start justify-start">
                    <div className="flex flex-col gap-2 w-full mb-2 h-[110px]">
                      <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-3 w-fit">
                        <span className="capitalize text-sm font-medium text-[#111111]">Business Challenge</span>
                      </div>
                      <p className="capitalize text-2xl font-medium leading-[26px] text-[#E45412]">
                        Supply chain disruptions eroding margins.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="bg-[#F6F6F6] rounded-lg px-2.5 w-fit">
                        <span className="capitalize text-sm font-medium text-[#111111]">Predictive Solution</span>
                      </div>
                      <p className="text-base font-normal leading-normal text-[#454545]">
                        ML models forecasting localized demand fluctuations — factoring seasonality, economic indicators, and global logistics constraints — to optimize inventory flow and eliminate costly stockouts.
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 items-center justify-center">
                    <Image src="/images/raar/lineraar.svg" alt="" width={2} height={320} className="w-auto h-auto" aria-hidden />
                  </div>

                  <div className="flex-1 flex flex-col gap-4 items-start justify-start">
                    <div className="flex flex-col gap-2 w-full mb-2 h-[110px]">
                      <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-3 w-fit">
                        <span className="capitalize text-sm font-medium text-[#111111]">Business Challenge</span>
                      </div>
                      <p className="capitalize text-2xl font-medium leading-[26px] text-[#E45412]">
                        High-value customers churning without warning.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="bg-[#F6F6F6] rounded-lg px-2.5 w-fit">
                        <span className="capitalize text-sm font-medium text-[#111111]">Predictive Solution</span>
                      </div>
                      <p className="text-base font-normal leading-normal text-[#454545]">
                        Churn prediction models that analyze engagement metrics and transaction histories to identify at-risk accounts before cancellation — triggering proactive retention workflows and maximizing long-term revenue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </BackgroundDots>

        <IconCardsSection
          title="High-Impact Enterprise Use Cases"
          items={[
            {
              title: "Supply Chain & Inventory Optimization",
              description:
                "Predict localized demand fluctuations, factor seasonality and economic indicators, and optimize inventory flow globally to eliminate stockouts and reduce carrying costs.",
              icon: "/images/icons/settings-load.svg",
            },
            {
              title: "Churn Prediction & Customer Lifetime Value",
              description:
                "Identify high-value clients at risk of leaving before they cancel. Trigger proactive retention workflows to maximize long-term customer revenue.",
              icon: "/images/icons/people.svg",
            },
            {
              title: "Dynamic Pricing & Revenue Maximization",
              description:
                "Intelligent pricing engines that autonomously adjust to real-time market demand, competitor pricing changes, and inventory levels to capture maximum margin.",
              icon: "/images/icons/settings-money.svg",
            },
            {
              title: "Equipment Failure Forecasting",
              description:
                "Process IoT sensor data to predict mechanical failures before they occur — eliminating catastrophic operational downtime and extending asset lifespans.",
              icon: "/images/icons/shield.svg",
            },
            {
              title: "Continuous MLOps Reliability",
              description:
                "Automated retraining pipelines ensure your predictive models remain accurate as market conditions evolve — permanent enterprise reliability, not one-time deployment.",
              icon: "/images/icons/monitor-rocket.svg",
            },
          ]}
        />

        <div className="flex justify-center">
          <Image
            src="/images/horizontalline.svg"
            alt=""
            width={1200}
            height={3}
            className="w-full max-w-5xl"
            aria-hidden
          />
        </div>

        <SolutionsNavigationSection
          previousHref="/solutions/ai-agent-development"
          title="Discover Next Step of Your AI Journey"
          cta={{
            href: "/solutions/research-and-analysis",
            label: "Research & Analysis",
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
