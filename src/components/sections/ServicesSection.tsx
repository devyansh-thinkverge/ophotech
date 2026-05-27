"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceIcon } from "@/components/icons/ServiceIcon";

const SERVICES = [
  {
    number: "01",
    title: "Research & Analysis",
    tagline: "Your AI Journey Begins with Diligent Research.",
    description:
      "An intelligence framework driven by Senior Data Scientists and AI/ML Engineers to get real-time operational insights. Our precise reports address critical gaps and enable enterprises to structure their path to AI enablement.",
    icon: "research-analysis" as const,
    href: "/solutions/research-and-analysis",
  },
  {
    number: "02",
    title: "Data Structuring & Monetization",
    tagline: "Turning Your Information into Revenue",
    description:
      "Transform data from a cost center into a profit generator. We unlock financial potential with revenue-ready data strategies and compliant governance frameworks.",
    icon: "data-monetization" as const,
    href: "/solutions/data-structuring-and-monetization",
  },
  {
    number: "03",
    title: "Cloud Integration & Architecture",
    tagline: "Building the Digital Backbone",
    description:
      "The cloud is your platform for innovation, agility, and scale. Our Cloud Integration services ensure your technology strategy directly supports business goals with minimal risk.",
    icon: "cloud-integration" as const,
    href: "/solutions/cloud-integration",
  },
  {
    number: "04",
    title: "AI Solutions & Services",
    tagline: "Intelligent Automation & Predictive Advantage",
    description:
      "Move beyond pilots to operational AI. We deploy automation and machine learning that deliver measurable ROI across your data and cloud investments at enterprise scale.",
    icon: "ai-solutions" as const,
    href: "/solutions/ai-solutions-and-services",
  },
  {
    number: "05",
    title: "AI Agent Development",
    tagline: "The Future of Autonomous Operations",
    description:
      "AI Agents are digital workers that perform complex, multi-step tasks autonomously. Build a scalable workforce that executes strategic objectives with minimal human oversight.",
    icon: "ai-agent" as const,
    href: "/solutions/ai-agent-development",
  },
  {
    number: "06",
    title: "Cyber Security Solutions",
    tagline: "Autonomous Defense for the AI Age",
    description:
      "Defend against AI-driven adversaries operating at machine speed. We combine automated detection with resilient architecture to protect your enterprise infrastructure.",
    icon: "cyber-security" as const,
    href: "/solutions/cyber-security-solutions",
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="relative mx-auto max-w-6xl px-4 xl:px-0">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            Solutions
            <span className="w-6 h-px bg-[#22c55e]" />
          </span>
          <h2 className="text-4xl font-bold text-[#111827] mt-1">
            What We{" "}
            <span className="text-[#22c55e]">Build</span>{" "}
            for You
          </h2>
          <p className="mt-3 text-base text-[#6b7280] max-w-lg mx-auto">
            Research, roadmaps, and support designed to deliver results across every phase of AI adoption.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full min-h-[200px] overflow-hidden rounded-2xl border border-[#f3f4f6] bg-white p-6 transition-all duration-300 hover:border-transparent hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-0.5">

                  {/* Sliding green top border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-[#22c55e] transition-transform duration-300 group-hover:scale-x-100 rounded-t-2xl" />

                  {/* Ghost number — decorative only */}
                  <span className="absolute top-3 right-4 text-7xl font-black leading-none select-none text-[#f3f4f6] group-hover:text-[#e5e7eb] transition-colors duration-300 pointer-events-none">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="mb-4 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.18)",
                    }}
                  >
                    <ServiceIcon
                      name={service.icon}
                      className="w-5 h-5 text-[#22c55e]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#111827] leading-tight mb-1.5 pr-10 group-hover:text-[#22c55e] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9ca3af]">
                    {service.tagline}
                  </p>

                  {/* Description — reveals on hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-[max-height] duration-500 ease-in-out">
                    <p className="mt-3 text-sm leading-relaxed text-[#6b7280] border-t border-[#f9fafb] pt-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow — appears on hover */}
                  <div className="absolute bottom-5 right-5 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-[#22c55e]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
