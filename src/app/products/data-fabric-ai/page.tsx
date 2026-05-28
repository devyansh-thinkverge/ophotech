"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { SolutionsNavigationSection } from "@/components/ui/SolutionsNavigationSection";
import { SolutionsIntroSection } from "@/components/ui/SolutionsIntroSection";
import { ContactSection } from "@/components/sections/ContactSection";

const platformFeatures = [
  {
    title: "Unified Data Sandbox",
    description:
      "Provision cloud workspaces instantly where you can ingest data from any source and run SQL queries immediately — enabling rapid validation and non-engineer ETL execution.",
  },
  {
    title: "Visual Pipeline Builder",
    description:
      "Transform your data using an intuitive node-based interface. Filter, join, aggregate, and enrich workflows visually, abstracting away the underlying complexity of your data pipelines.",
  },
  {
    title: "One-Click API Generation",
    description:
      "Turn any transformed dataset into a secure, production-ready REST endpoint. Each deployment provides a unique API key, creating immediate integration value for your teams.",
  },
  {
    title: "Active Metadata Intelligence",
    description:
      "Leverage our AI-powered engine to automate schema mapping and detect relationships across disparate datasets — reducing manual mapping efforts by up to 70%.",
  },
];

const enterprisePerformance = [
  {
    title: "Federated Query Engine",
    body: "Execute complex queries across Snowflake, PostgreSQL, S3, and other environments simultaneously without requiring any physical data movement — eliminating redundant storage costs.",
  },
  {
    title: "MLOps & Feature Store Integration",
    body: "Bridge the gap between data engineering and machine learning by exporting your pipelines directly into Vertex AI or SageMaker — enabling model reuse and streamlined deployment.",
  },
  {
    title: "Collaboration & Version Control",
    body: "Manage your entire data ecosystem with team workspaces, RBAC-controlled projects, shared repositories, and full Git-based version control for your data pipelines.",
  },
];

export default function DataFabricAIPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111827]">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Data Fabric AI" },
        ]}
        title="Data Fabric AI"
        subtitle="Democratize the Transition From Raw Data to Deployed AI"
      />

      <main className="flex-1">
        <SolutionsIntroSection
          imageSrc="/images/data-monetize/data.png"
          imageAlt="Data Fabric AI platform illustration"
          copy={
            <>
              <h2 className="mb-4 text-2xl font-semibold text-[#111827]">
                Ending Integration Complexity
              </h2>
              <p className="mb-6">
                Traditional data platforms rely on heavy configuration and long onboarding cycles.
                Data Fabric AI abstracts this complexity, allowing developers, analysts, and data
                scientists to treat data as a governed utility: instantly accessible,
                interoperable, and production-ready.
              </p>
              <p>
                We believe data preparation must lead directly to operationalization. By providing
                native support for modern containerization and serverless targets, we enable your
                teams to move from prototype to production-grade intelligence in hours rather
                than months.
              </p>
            </>
          }
          techStack={[
            {
              src: "/images/tech-stack-logos/aws.svg",
              alt: "AWS logo",
              wrapperClassName: "w-14 h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/azure.svg",
              alt: "Azure logo",
              wrapperClassName: "w-16 h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/kubernetes.svg",
              alt: "Kubernetes logo",
              wrapperClassName: "w-14 h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/kafka.svg",
              alt: "Apache Kafka logo",
              wrapperClassName: "w-14 h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/postgresql.svg",
              alt: "PostgreSQL logo",
              wrapperClassName: "w-14 h-8 flex items-center justify-center",
            },
            {
              src: "/images/tech-stack-logos/mongodb.svg",
              alt: "MongoDB logo",
              wrapperClassName: "w-16 h-8 flex items-center justify-center",
            },
          ]}
        />

        <IconCardsSection
          title="Core Strategic Pillars"
          items={[
            {
              title: "Frictionless Hands-On Usability",
              description: "Zero-configuration onboarding, visual drag-and-drop pipeline authoring, and pre-built sandbox environments that deliver immediate utility.",
              icon: "/images/icons/settings-load.svg",
            },
            {
              title: "Universal Interoperability",
              description: "True fabric layer unifying access across legacy databases, cloud storage, and SaaS APIs — no physical migration required.",
              icon: "/images/icons/connection.svg",
            },
            {
              title: "Deployment-First Architecture",
              description: "Native container support for Kubernetes and Docker, alongside serverless deployment targets for instant publishing as REST APIs or feature stores.",
              icon: "/images/icons/cloud-db.svg",
            },
            {
              title: "Invisible Governance",
              description: "Automated PII detection, role-based access controls, and immutable audit trails ensure high-speed delivery never comes at the cost of compliance.",
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

        {/* Platform Features */}
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
                <h2 className="text-3xl font-medium text-[#111827]">Platform Features</h2>
                <p className="mx-auto mt-4 max-w-3xl text-base text-[#6b7280]">
                  Everything your team needs to go from raw, siloed data to production-ready AI
                  assets — without heavy engineering overhead.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {platformFeatures.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex flex-col gap-3 rounded-2xl border border-[#f3f4f6] bg-white p-6 text-left shadow-sm hover:border-[#22c55e]/20 transition-colors"
                    >
                      <div className="size-2 rounded-full bg-[#22c55e]" />
                      <h3 className="text-base font-semibold text-[#111827]">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-[#6b7280]">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Performance */}
              <div className="text-center">
                <h3 className="text-[26px] font-medium leading-[38px] text-[#111827] sm:text-[28px]">
                  Enterprise Performance & Scalability
                </h3>
                <p className="mx-auto mt-4 max-w-4xl text-base text-[#6b7280]">
                  Built for the scale and governance demands of modern enterprise AI operations.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  {enterprisePerformance.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#f3f4f6] bg-white p-6 text-left shadow-sm flex flex-col hover:border-[#22c55e]/20 transition-colors"
                    >
                      <h4 className="text-xl font-medium text-[#22c55e]">{item.title}</h4>
                      <p className="mt-3 text-base text-[#6b7280]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BackgroundDots>

        <ContactSection />

        <SolutionsNavigationSection
          previousHref="/products/roaar"
          previousLabel="ROAAR"
          title="Explore Our Products"
          description="See how Shoout AI brings governed intelligence to your marketing operations."
          cta={{ href: "/products/shoout-ai", label: "Shoout AI" }}
        />
      </main>

      <Footer />
    </div>
  );
}
