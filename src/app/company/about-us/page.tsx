 "use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import Image from "next/image";
import { IconCardsSection } from "@/components/ui/IconCardsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const communicationsImage = "/images/aboutus/evolve.png";

const papersearchicon = "/images/icons/paper-analysis.svg";
const aiAgentIcon = "/images/icons/ai-agent.svg";
const resilienticon = "/images/icons/cloud-integration.svg";
const cloudDbIcon = "/images/icons/cloud-db.svg";
const governedicon = "/images/aboutus/governed.svg";
const analysisIcon = "/images/icons/analysis.svg";
const peopleSearchIcon = "/images/icons/people-search.svg";
const securityIcon = "/images/icons/security.svg";
const rocketIcon = "/images/icons/rocket.svg";
const layeredSettingsIcon = "/images/icons/layered-settings.svg";
const monitorIcon = "/images/icons/monitor.svg";
const searchBulbIcon = "/images/icons/search-bulb.svg";

const iconFilter = "brightness(0) sepia(1) saturate(3) hue-rotate(95deg)";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Company" },
          { label: "About Us" },
        ]}
        title="Who We Are"
        subtitle="Founded in 2019, OphoTech is a global R&D-led SaaS and PaaS solutions company. We partner with enterprises, governments, and institutions to provide early and reliable visibility across the technology lifecycle.
By accelerating the path to AI enablement, we empower organizations to make faster decisions, minimize risk,
and drive profitable growth."
        contentAlignment="center"
      />

      <main className="relative z-10 flex flex-col">

        {/* Our Story Section */}
        <BackgroundDots
          className="py-20"
          spacing={36}
          dotSize={2.5}
          backgroundColor="white"
          dotColor="#e5e7eb"
          style={{ borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-3 xl:px-0">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-medium mb-6 text-[#111827]">Our Story</h2>
              <p className="text-base text-[#6b7280]">
                As a purpose-driven, research-led organization, we bring deep expertise in Data Science, Research, and AI. We enable organizations to make confident, responsible decisions, uncover and address critical gaps, and accelerate business outcomes using proven, scalable methodologies. We work closely with your teams to guide your journey of technology enablement in this new era of AI.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={communicationsImage}
                alt="Our Story Visual"
                width={600}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </BackgroundDots>

        <IconCardsSection
          title="Our Philosophy"
          subtitle="See earlier. Decide smarter. Deliver results."
          items={[
            {
              title: "Evidence Clarity",
              description: "Decisions grounded in validated data, not assumptions or intuition.",
              icon: papersearchicon,
            },
            {
              title: "Proven Intelligence",
              description: "AI is applied only where measurable value and outcomes are demonstrated.",
              icon: aiAgentIcon,
            },
            {
              title: "Resilient Architecture",
              description: "Systems engineered for real-world performance, scale, and long-term stability.",
              icon: resilienticon,
            },
            {
              title: "Governed Impact",
              description: "Privacy, compliance, and quantifiable ROI are embedded into every solution.",
              icon: governedicon,
            },
          ]}
        />

        {/* Our Mission & Vision */}
        <BackgroundDots
          className="py-20"
          spacing={36}
          dotSize={2.5}
          backgroundColor="white"
          dotColor="#e5e7eb"
          style={{ borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" }}
        >
          <section className="mx-auto max-w-6xl px-3 xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-medium text-[#111827]">Our Mission &amp; Vision</h2>
              <p className="mt-4 text-base text-[#6b7280] max-w-2xl mx-auto">
                The purpose that drives our work and the future we are building toward.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Mission */}
              <div className="relative rounded-2xl border border-[#f3f4f6] bg-white p-8 shadow-sm hover:border-[#22c55e]/20 transition-colors overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-[#22c55e]" />
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f0fdf4] border border-[#22c55e]/20 px-3 py-1">
                  <div className="size-2 rounded-full bg-[#22c55e]" />
                  <span className="text-sm font-medium text-[#22c55e]">Our Mission</span>
                </div>
                <p className="text-base leading-relaxed text-[#6b7280]">
                  To equip leaders with platforms and practices that surface the right signals early, automate the routine, and scale securely from first hypothesis to production impact.
                </p>
              </div>

              {/* Vision */}
              <div className="relative rounded-2xl border border-[#f3f4f6] bg-white p-8 shadow-sm hover:border-[#22c55e]/20 transition-colors overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-[#22c55e]" />
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f0fdf4] border border-[#22c55e]/20 px-3 py-1">
                  <div className="size-2 rounded-full bg-[#22c55e]" />
                  <span className="text-sm font-medium text-[#22c55e]">Our Vision</span>
                </div>
                <p className="text-base leading-relaxed text-[#6b7280]">
                  A world where every organization operates on decision-grade intelligence—timely, trusted, and actionable.
                </p>
              </div>
            </div>
          </section>
        </BackgroundDots>

        {/* Our Values Section */}
        <BackgroundDots
          className="py-4"
          spacing={25}
          dotSize={3}
          backgroundColor="white"
          dotColor="#e5e7eb"
          style={{ borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" }}
        >
          <section className="mx-auto max-w-6xl py-20">
            <h2 className="text-4xl font-medium mb-12 text-center text-[#111827]">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center">
              {[
                { icon: analysisIcon, title: "Impact Over Output", text: "We measure outcomes, not effort.", alt: "Impact Over Activity Icon" },
                { icon: peopleSearchIcon, title: "Signal Before Build", text: "Align on the few metrics that change decisions.", alt: "Signal Before Build Icon" },
                { icon: securityIcon, title: "Responsible by Default", text: "Privacy, security, and governance are non-negotiable.", alt: "Responsible by Default Icon" },
                { icon: cloudDbIcon, title: "Build to Adapt", text: "Open, interoperable, and cloud-native, so value compounds.", alt: "Build to Adapt Icon" },
                { icon: rocketIcon, title: "Partnership Mindset", text: "Co-create, transfer capability, and make progress stick.", alt: "Partnership Mindset Icon" },
                { icon: layeredSettingsIcon, title: "Evidence Wins", text: "Hypothesize, test, learn, and industrialize.", alt: "Evidence Wins Icon" },
                { icon: monitorIcon, title: "Craft And Reliability", text: "Quality in design, resilience in production.", alt: "Craft And Reliability Icon" },
                { icon: searchBulbIcon, title: "Progress with Pace", text: "Ship small, improve continuously.", alt: "Progress with Pace Icon" },
              ].map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col items-start text-left w-full max-w-[270px] mb-5 p-4 bg-white rounded-lg border border-[#f3f4f6] shadow-sm hover:border-[#22c55e]/20 transition-colors h-full"
                >
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={64}
                    height={64}
                    className="mb-3 h-12 w-16 flex-shrink-0"
                    style={{ filter: iconFilter }}
                  />
                  <h3 className="text-xl font-medium text-[#111827] h-[40px] flex items-start">
                    {card.title}
                  </h3>
                  <p className="text-[#6b7280] mt-2 text-base">{card.text}</p>
                </article>
              ))}
            </div>
          </section>
        </BackgroundDots>

        <div className="h-px w-full max-w-5xl mx-auto bg-[#f3f4f6]" aria-hidden />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
