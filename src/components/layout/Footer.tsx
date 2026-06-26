"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/utils";
import { HIDE_RESOURCES, HIDE_PRODUCTS } from "@/lib/featureFlags";

const COMPANY_LINKS = [
  "About Us",
  "Careers",
  "Contact",
  "Privacy Policy",
  "Terms of Service",
  "Cookie settings",
];

const PRODUCT_LINKS = ["All Products", "ROAAR", "CENTOIRE"];

const RESOURCE_LINKS = HIDE_RESOURCES ? [] : ["Blogs", "Newsletters", "Case Studies"];

const SOLUTION_LINKS = [
  "Research & Analysis",
  "Data Structuring & Monetization",
  "Cloud Integration",
  "AI Solutions & Services",
  "AI Agent Development",
  "Predictive Analysis",
];

const LinkedInIcon = () => (
  <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
    <rect width="20" height="20" rx="5" fill="rgba(9,199,113,0.15)" />
    <path
      d="M13.89 13.89h-1.39V11.25c0-.68-.29-1.11-.97-1.11-.58 0-.99.39-1.11.76-.06.11-.07.26-.07.42v2.57H9.06c.03-4.17.01-4.58 0-4.93h1.39v.78c.18-.29.64-.71 1.49-.71 1.09 0 2.05.73 2.05 2.32v2.54ZM6.74 8.13a.81.81 0 0 1-.82-.82c0-.45.37-.82.82-.82.44 0 .79.35.79.82 0 .47-.35.82-.79.82Zm.69 5.76H6.04V8.96h1.39v4.93Z"
      fill="#09C771"
    />
  </svg>
);

const XIcon = () => (
  <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
    <rect width="20" height="20" rx="5" fill="rgba(9,199,113,0.15)" />
    <path
      d="M13.13 6.88h-1.38l-1.69 2.21-1.28-1.71H7.29l2.58 3.47-2.58 3.4h1.38l1.87-2.45 1.28 1.71.83 1.1h1.84l-2.62-3.46 2.54-3.78Z"
      fill="#09C771"
    />
  </svg>
);

export function Footer() {
  const router = useRouter();

  const handleOpenContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new Event("cookie_open_settings"));
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#050505] border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[120px]"
          style={{ background: "rgba(9,199,113,0.04)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl pb-8 pt-16 px-4 xl:px-0">
        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] md:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/Opho logo for dark mode.png"
                  alt="Opho Technologies"
                  width={190}
                  height={64}
                  priority
                  className="h-auto w-[150px]"
                />
              </Link>
              <p className="max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Opho Technologies is the trusted partner for complex enterprises,
                delivering governed AI transformation — turning fragmented data
                into secure, auditable AI execution that drives measurable ROI.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link
                aria-label="Visit Opho Technologies on LinkedIn"
                className="inline-flex items-center justify-center rounded-lg p-2 transition-all hover:glow-green-sm"
                style={{ background: "rgba(255,255,255,0.05)" }}
                href="https://www.linkedin.com/company/ophotech/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </Link>
              <Link
                aria-label="Visit Opho Technologies on X"
                className="inline-flex items-center justify-center rounded-lg p-2 transition-all hover:glow-green-sm"
                style={{ background: "rgba(255,255,255,0.05)" }}
                href="https://x.com/opho_tech"
                target="_blank"
                rel="noreferrer"
              >
                <XIcon />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <FooterColumn
            title="Company"
            links={COMPANY_LINKS}
            onContactClick={handleOpenContact}
            onCookieSettingsClick={handleOpenCookieSettings}
            hrefMapper={(link) => {
              if (link === "About Us") return "/company/about-us";
              if (link === "Careers") return "/company/careers";
              return slugify(link);
            }}
          />

          {/* Products Links */}
          {!HIDE_PRODUCTS && (
            <FooterColumn
              title="Products"
              links={PRODUCT_LINKS}
              hrefMapper={(link) => {
                if (link === "All Products") return "/products";
                if (link === "ROAAR") return "/products/roaar";
                if (link === "CENTOIRE") return "/products/centoire";
                if (link === "Data Fabric AI") return "/products/data-fabric-ai";
                if (link === "Shoout AI") return "/products/shoout-ai";
                return "/products";
              }}
            />
          )}

          {/* Resources Links */}
          {RESOURCE_LINKS.length ? (
            <FooterColumn
              title="Resources"
              links={RESOURCE_LINKS}
              hrefMapper={(link) => {
                if (link === "Newsletters") return "/newsletters";
                if (link === "Case Studies") return "/case-studies";
                if (link === "Blogs") return "/blogs";
                return slugify(link);
              }}
            />
          ) : null}

          {/* Solutions Links */}
          <FooterColumn
            title="Solutions"
            links={SOLUTION_LINKS}
            hrefMapper={(link) => `/solutions${slugify(link)}`}
          />
        </div>

        {/* Copyright */}
        <div className="mt-12 space-y-6 lg:mt-16">
          <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />
          <p className="text-center text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            Copyright © {new Date().getFullYear()} Opho Technologies | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: string[];
  hrefPrefix?: string;
  onContactClick?: () => void;
  onCookieSettingsClick?: () => void;
  hrefMapper?: (link: string) => string;
};

function FooterColumn({
  title,
  links,
  hrefPrefix,
  onContactClick,
  onCookieSettingsClick,
  hrefMapper,
}: FooterColumnProps) {
  return (
    <nav className="space-y-5">
      <h3
        className="relative pb-2 text-base font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:content-['']"
        style={{ ["--tw-after-bg" as string]: "#09C771" }}
      >
        <span className="relative">
          {title}
          <span className="absolute -bottom-2 left-0 h-[2px] w-12 bg-[#09C771]" />
        </span>
      </h3>
      <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
        {links.map((link) => (
          <li key={link}>
            {link === "Contact" ? (
              <button
                onClick={onContactClick}
                className="inline-block transition-colors hover:text-[#09C771]"
              >
                {link}
              </button>
            ) : link === "Cookie settings" ? (
              <button
                onClick={onCookieSettingsClick}
                className="inline-block transition-colors hover:text-[#09C771]"
              >
                {link}
              </button>
            ) : (
              <Link
                className="inline-block transition-colors hover:text-[#09C771]"
                href={hrefMapper ? hrefMapper(link) : hrefPrefix ? `${hrefPrefix}${slugify(link)}` : slugify(link)}
              >
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
