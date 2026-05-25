"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";

export default function CloudIntegrationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 ">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Cloud Integration & Architecture" },
        ]}
        title="Cloud Integration & Architecture"
        subtitle="Purpose-Built Infrastructure for Enterprise AI Workloads"
        video="/videos/Cloud-Integration.mp4"
      />

      <main className="bg-white text-[#0B1B2B]">

      {/* Overview Section */}
      <SolutionsIntroSection
        imageSrc="/images/cloud-integrations/orange-cloud.png"
        imageAlt="Cloud integration illustration"
        copy={
          <>
            <p className="mb-6">
              Moving to the cloud is not enough. Traditional lift-and-shift approaches leave enterprises overpaying for basic cloud storage, lacking the low-latency compute architecture required for advanced AI, and unable to process real-time data at scale.
            </p>
            <p>
              We architect secure, highly available, cost-optimized environments specifically designed for the massive compute and data demands of AI models and legacy system integrations — bridging on-premise legacy IT with cutting-edge cloud-native AI services without systemic disruption or costly data leaks.
            </p>
          </>
        }
        techStack={[
          {
            src: "/images/tech-stack-logos/azure.svg",
            alt: "azure logo",
            wrapperClassName: "w-10 h-6 md:w-8 md:h-8 flex items-center justify-center"
          },
          {
            src: "/images/tech-stack-logos/aws.svg",
            alt: "AWS logo",
            wrapperClassName: "w-10 h-6 md:w-10 md:h-8 flex items-center justify-center"
          },
          {
            src: "/images/tech-stack-logos/google-cloud.svg",
            alt: "Google Cloud logo",
            wrapperClassName: "w-10 h-6 md:w-14 md:h-8 flex items-center justify-center"
          },
          {
            src: "/images/tech-stack-logos/kubernetes.svg",
            alt: "Kubernetes logo",
            wrapperClassName: "w-20 h-6 md:w-22 md:h-8 flex items-center justify-center"
          },
          { 
            src: "/images/tech-stack-logos/docker.svg", 
            alt: "Docker logo", 
            wrapperClassName: "w-18 h-6 md:w-20 md:h-8 flex items-center justify-center" },
          { 
            src: "/images/tech-stack-logos/elastic.svg", 
            alt: "Elastic logo", 
            wrapperClassName: "w-15 h-6 md:w-18 md:h-8 flex items-center justify-center" },
        ]}
      />


        {/* How Cloud Integration & Architecture Works */}
        <BackgroundDots
          className="py-16 "
          spacing={36}
          dotSize={2.5}
          backgroundColor=""
          dotColor="#D9D9D9"
          style={{
            background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
          <section className="max-w-6xl mx-auto px-3 xl:px-0">
            {/* How It Works Section */}
            <div className="flex flex-col gap-10 items-center mb-16">
              <div className="flex flex-col gap-8 items-center">
                <h2 className="text-4xl font-medium text-center">
                  How Cloud Integration & Architecture Works
                </h2>
                <div className="flex justify-center w-full">
                  <Image
                    src="/images/horizontalline.svg"
                    alt=""
                    width={1200}
                    height={3}
                    className="w-full max-w-5xl"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-col gap-5 items-center text-center max-w-[924px] px-4">
                  <h3 className="text-3xl font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                    The Strategic Imperative: Agility and Resilience
                  </h3>
                  <p className="text-base font-normal leading-normal text-[#454545]">
                    In today&apos;s market, speed and flexibility are paramount. Our approach ensures your cloud environment is not only cost-effective but an active enabler of business transformation.
                  </p>
                </div>
              </div>

              {/* Three Challenge Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6  w-full">
                {[{
                  title: "Legacy Systems Cannot Support Modern AI Agents",
                  solution: 'Secure hybrid & multi-cloud bridging with advanced networking layers.',
                  outcome: 'Legacy on-premise databases communicate securely with cloud-hosted LLMs — without exposing proprietary corporate data to the public internet.'
                }, {
                  title: 'Unpredictable Cloud Bills Exceeding Budget',
                  solution: 'Dynamic auto-scaling protocols and predictive FinOps controls.',
                  outcome: 'Only pay for GPU/CPU when actively processing. Eliminate cloud bill shock while maintaining peak performance capacity.'
                }, {
                  title: 'Security And Compliance Gaps Blocking AI Deployment',
                  solution: 'Zero-trust security framework with strict end-to-end encryption and IAM.',
                  outcome: 'Protect sensitive training data, meet global compliance mandates, and enable continuous threat monitoring without operational disruption.'
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white/30 relative overflow-hidden card-text-smaller h-full flex flex-col"
                  >
                    <div className="relative z-10 flex flex-col gap-4 h-full">
                      <h4 className="text-2xl font-medium leading-[26px] text-[#111111] h-[80px] flex items-start">
                        {item.title}
                      </h4>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-sm font-medium text-[#111111]">
                            Strategic Cloud Solution
                          </span>
                        </div>
                        <p className="text-base font-normal leading-normal text-[#454545]">
                          {item.solution}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#f6f6f6] rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center w-fit">
                          <span className="text-sm font-medium text-[#111111]">
                            Business Outcome
                          </span>
                        </div>
                        <p className="text-base font-normal leading-normal text-[#454545]">
                          {item.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* From Complex Challenge to Clear Opportunity */}
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-3xl font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                  From Complex Challenge to Clear Opportunity
                </h3>
                <p className="text-base font-normal leading-normal text-[#454545] max-w-full">
                  Our core expertise is translating complex business challenges into clear technology opportunities. We don&apos;t implement technology for its own sake; we align it with your revenue targets and operational requirements.
                </p>
              </div>
  {/* Two-column challenge/services band */}
  <div className="rounded-2xl border border-[#FCD5AC] bg-white/30 px-6 py-5 md:px-10 w-full card-text-smaller">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch md:items-start min-h-[243px] relative">
                           {/* First Card */}
                           <div className="flex-1 flex flex-col gap-4 items-start justify-start">
                  <div className="flex flex-col gap-2 w-full mb-2 h-[110px]">
                    <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-3 w-fit">
                      <span className="capitalize text-sm font-medium text-[#111111]">
                        Business Challenge
                      </span>
                    </div>
                    <p className="capitalize text-2xl font-medium leading-[26px] text-[#E45412]">
                    Product Development Cycle Is Too Slow. 
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="bg-[#F6F6F6] rounded-lg px-2.5  w-fit">
                      <span className="capitalize text-sm font-medium text-[#111111]">
                        Solution
                      </span>
                    </div>
                    <p className="text-base font-normal leading-normal text-[#454545]">
                    Design a cloud-native DevOps pipeline and integrate development tools to significantly reduce time-to-market.
                    </p>
                  </div>
                </div>

                {/* Vertical Line - Centered */}
                <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 items-center justify-center">
                  <Image
                    src="/images/raar/lineraar.svg"
                    alt=""
                    width={2}
                    height={320}
                    className="w-auto h-auto"
                    aria-hidden
                  />
                </div>

                {/* Second Card */}
                <div className="flex-1 flex flex-col gap-4 items-start justify-start">
                  <div className="flex flex-col gap-2 w-full mb-2 h-[110px]">
                    <div className="bg-[#F6F6F6] rounded-lg px-2.5 py-3 w-fit">
                      <span className="capitalize text-sm font-medium text-[#111111]">
                        Business Challenge
                      </span>
                    </div>
                    <p className="capitalize text-2xl font-medium leading-[26px] text-[#E45412]">
                    Cannot Get A 360-Degree View of the Customer.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="bg-[#F6F6F6] rounded-lg px-2.5  w-fit">
                      <span className="capitalize text-sm font-medium text-[#111111]">
                        Solution
                      </span>
                    </div>
                    <p className="text-base font-normal leading-normal text-[#454545]">
                    Implement a secure, real-time API integration strategy to connect CRM, ERP, and other marketing platforms, enabling personalized customer experiences instantly.
                    </p>
                  </div>
                </div>
              </div>
              </div>
              </div>
          {/* Leadership Focus */}
          <div className="flex flex-col gap-10 mt-10">
              <div className="flex flex-col gap-5 items-center text-center px-4">
                <h3 className="text-3xl font-medium leading-[32px] md:leading-[38px] text-[#454545]">
                  Leadership Focus: Stability, Security, and Speed
                </h3>
                <p className="text-base font-normal leading-normal text-[#454545] max-w-[860px]">
                  As leaders in Cloud Architecture and Integration, we prioritize the three pillars necessary for long-term digital success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[{
                  title: 'Infrastructure Audit & Topology Mapping',
                  desc: 'Comprehensive evaluation of server loads, API limitations, and legacy technical debt. We design a migration roadmap that eliminates operational risk and prevents structural performance bottlenecks before they compound.'
                }, {
                  title: 'Containerization & Microservices',
                  desc: 'Kubernetes and Docker-based decomposition of monolithic legacy systems into agile, scalable microservices. Enables rapid AI updates and completely isolates potential system failures from the rest of your infrastructure.'
                }, {
                  title: 'Comprehensive CI/CD Pipelines',
                  desc: 'Highly automated testing, continuous integration, and continuous delivery pipelines that allow you to roll out new AI capabilities rapidly, safely, and predictably — with zero operational downtime.'
                }].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#fcd5ac] rounded-2xl p-5 bg-white/30 relative overflow-hidden card-text-smaller h-full flex flex-col"
                  >
                    <div className="relative z-10 flex flex-col gap-4">
                      <h4 className="text-2xl font-medium leading-[26px] text-[#111111] h-[60px] flex items-start">
                        {item.title}
                      </h4>
                      <p className="text-base font-normal leading-normal text-[#454545]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </BackgroundDots>

        <IconCardsSection
          title="Advantages"
          items={[
            {
              title: "Unified Data Environment For Reliable Analytics",
              icon: "/images/icons/shield.svg",
            },
            {
              title: "Scalable And Compliant Architecture",
              icon: "/images/icons/settings-phone.svg",
            },
            {
              title: "Reduced Operational Costs And Maintenance",
              icon: "/images/icons/settings-money.svg",
            },
            {
              title: "Governance And FinOps Efficiency",
              icon: "/images/icons/monitor.svg",
            },
            {
              title: "Faster Market Entry And Innovation Cycles",
              icon: "/images/icons/monitor-rocket.svg",
            },
          ]}
        />

        {/* Cloud Integration & Architecture */}
        <BackgroundDots
          className="py-16 "
          spacing={36}
          dotSize={2.5}
          backgroundColor=""
          dotColor="#D9D9D9"
          style={{
            background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
          }}
        >
          <section className="relative mx-auto max-w-6xl px-3 xl:px-0">
  {/* Divider line */}
  <Image
    src="/images/raar/lineraar.svg"
    alt=""
    width={2}
    height={320}
    className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    aria-hidden
  />

  <div className="grid md:grid-cols-2 items-center gap-10">
    {/* Left: Text */}
    <div>
      <h2 className=" text-3xl md:text-4xl font-medium text-[#0B1B2B] ">
        99.99% Uptime. Zero Trust. Full AI Readiness.
      </h2>
      <p className="mt-5 text-lg text-[#3A4A5F]">
        High-availability environments with fully automated disaster recovery. Advanced identity and access management. Seamless API gateways that let internal teams plug in new AI models and integrate external SaaS tools without disrupting existing operations.
      </p>
    </div>

    {/* Right: Image */}
    <div className="justify-self-center ml-0 lg:ml-[15%]">
      <Image
        src="/images/cloud-integrations/analyzing.png"
        alt="Cloud architecture illustration"
        width={520}
        height={360}
        className="h-auto w-[320px] sm:w-[380px] md:w-[460px] rounded-xl shadow-[0_12px_32px_-10px_rgba(15,44,88,0.3)]"
      />
    </div>
  </div>
</section>

        </BackgroundDots>
        <div className=" flex justify-center">
          <Image
            src="/images/horizontalline.svg"
            alt=""
            width={1200}
            height={3}
            className="w-full max-w-5xl"
            aria-hidden
          />
        </div>

        {/* Navigation */}
        <SolutionsNavigationSection
          previousHref="/solutions/data-structuring-and-monetization"
          title="Discover Next Step of Your AI Journey"
          cta={{ href: "/solutions/ai-solutions-and-services", label: "AI Solutions & Services" }}
        />
      </main>

      <Footer />
    </div>
  );
}
