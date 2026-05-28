"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import BackgroundDots from "@/components/ui/background";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";
import { Fragment } from "react";

const bhavneetImage = "/images/aboutus/walia-image.png";
const shivenderImage = "/images/aboutus/sofat-image.png";
const rajveerImage = "/images/aboutus/singh-image.png";

const teamMembers = [
  { name: "Mr. Bhavneet Walia", title: "Founder", image: bhavneetImage },
  { name: "Mr. Shivender Sofat", title: "Advisory Board Member", image: shivenderImage },
  { name: "Mr. Rajveer Singh", title: "Advisory Board Member", image: rajveerImage },
];

const leaderProfiles = [
  {
    name: "Mr. Bhavneet Walia",
    title: "Founder",
    description: [
      "Mr. Bhavneet Walia is the Founder & Chief Executive Officer of OphoTech with a distinguished track record in enterprise AI leadership and strategic innovation management. Based in Toronto, with global partnerships across North America, Europe, and the APAC region, he is exceptionally skilled at aligning research initiatives with commercial productization while maintaining rigorous compliance and governance standards. His leadership extends beyond corporate boundaries through his role as Chair of the World Association of Supercomputing, where he drives global high-performance computing collaboration, and as a Trustee with Little Big Things, focusing on social impact and community development programs.",
    ],
    image: bhavneetImage,
    reverse: false,
  },
  {
    name: "Mr. Shivender Sofat",
    title: "Advisory Board Member",
    description: [
      "Mr. Shivender Sofat is a highly sought-after cross-border finance and assurance leader who enables organizational growth through strong controls, transparency, and regulatory compliance. He holds the prestigious triple certification of Chartered Accountant (India), Certified Public Accountant (USA), and Certified Fraud Examiner, positioning him as a globally recognized expert in international finance and risk management. His professional affiliations include active membership in the AICPA, NYSSCPA, ACFE, and ICAI, where he contributes to anti-money laundering and combating the Financing of Terrorism initiatives, as well as IRS-related committees.",
    ],
    image: shivenderImage,
    reverse: true,
  },
  {
    name: "Mr. Rajveer Singh",
    title: "Advisory Board Member",
    description: [
      "Mr. Rajveer Singh brings exceptional public-sector leadership with extensive expertise in audit, policy design, infrastructure finance, and multilateral standards. As a member of the Indian Civil Service (1991 batch), he has served as Special Secretary to the Government of India. He has also held senior leadership positions with the Comptroller and Auditor General of India, the Accountant General (Audit), Delhi, Northern Railway, and the New Delhi Municipal Council. His academic foundation includes degrees in Agriculture, Agricultural Economics, and Law, providing him with a comprehensive understanding of policy frameworks across multiple sectors.",
      "At OphoTech, Mr. Rajveer anchors governance and public-sector assurance across technology-policy engagements. His role focuses on ensuring compliance with regulatory frameworks while maximizing impact through strategic policy alignment and multilateral engagement standards.",
    ],
    image: rajveerImage,
    reverse: false,
  },
];

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Company" },
          { label: "Team" },
        ]}
        title="Leadership Team"
        subtitle="Leading with empathy, transparency, and a relentless focus on outcomes that drive real growth."
        contentAlignment="center"
      />

      <main className="bg-white">
        {/* Team photo row */}
        <BackgroundDots
          className="py-16"
          spacing={36}
          dotSize={2.5}
          backgroundColor="white"
          dotColor="#e5e7eb"
          style={{ borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" }}
        >
          <section className="mx-auto flex max-w-6xl flex-col gap-10 px-3 xl:px-0">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
              {teamMembers.map((member, index) => (
                <Fragment key={member.name}>
                  <div className="flex w-full flex-1 flex-col items-center">
                    <div className="w-full max-w-[180px] rounded-2xl border border-[#f3f4f6] bg-white shadow-sm">
                      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
                        <Image
                          src={member.image}
                          alt={`${member.name} portrait`}
                          fill
                          sizes="220px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-[#111827] text-center">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#22c55e] text-center">
                      {member.title}
                    </p>
                  </div>

                  {index < teamMembers.length - 1 && (
                    <div className="hidden items-center justify-center lg:flex">
                      <div className="w-px h-[250px] bg-gradient-to-b from-transparent via-[#22c55e]/20 to-transparent" aria-hidden />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </section>
        </BackgroundDots>

        {/* Leader profiles */}
        {leaderProfiles.map((profile, profileIndex) => (
          <BackgroundDots
            key={profile.name}
            className="py-16"
            spacing={36}
            dotSize={2.5}
            backgroundColor="white"
            dotColor="#e5e7eb"
            style={{ borderBottom: "1px solid #f3f4f6" }}
          >
            <section
              className={`mx-auto flex w-full max-w-6xl flex-col px-3 xl:px-0 ${
                profile.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Text area */}
              <div
                className={`lg:flex-[0.65] flex-1 space-y-3 ${
                  profile.reverse ? "lg:pr-4" : "lg:pl-2"
                }`}
              >
                <h3 className="text-xl md:text-3xl font-medium text-[#111827]">
                  {profile.name}
                </h3>
                <p className="text-xl font-medium text-[#22c55e]">
                  {profile.title}
                </p>
                <div className="space-y-4 text-base leading-relaxed text-[#6b7280] mb-5 lg:mb-0">
                  {profile.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Image + divider */}
              <div
                className={`lg:flex-[0.35] flex flex-1 flex-col items-center gap-10 lg:flex-row ${
                  profile.reverse ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                <div
                  className={`hidden lg:block ${
                    profile.reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="w-px h-[400px] bg-gradient-to-b from-transparent via-[#22c55e]/20 to-transparent" aria-hidden />
                </div>

                <div
                  className={`rounded-2xl border border-[#f3f4f6] bg-white shadow-sm ${
                    profile.reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-[250px] w-[220px]">
                    <Image
                      src={profile.image}
                      alt={`${profile.name} portrait`}
                      fill
                      sizes="260px"
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </BackgroundDots>
        ))}

        <div className="h-px w-full max-w-5xl mx-auto bg-[#f3f4f6]" aria-hidden />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
