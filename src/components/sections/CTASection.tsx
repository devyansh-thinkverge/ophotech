"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export type CTASectionVariant = "gradient" | "ready";

export type CTASectionProps = {
  variant?: CTASectionVariant;

  readyTitle?: string;
  readySubtitle?: string;
  readyButtonLabel?: string;
  readyClassName?: string;

  gradientTitle?: string;
  gradientDescription?: string;
  gradientButtonLabel?: string;
  gradientClassName?: string;
};

export function CTASection({
  variant = "gradient",

  readyTitle = "Ready to Solve",
  readySubtitle = "What's Next With Opho Technologies?",
  readyButtonLabel = "Let's Start",
  readyClassName = "py-20 px-6",

  gradientTitle = "Start a Conversation with Opho Technologies",
  gradientDescription = "Explore how data-driven strategy and responsible technology can advance your business goals.",
  gradientButtonLabel = "Connect with an Expert",
  gradientClassName,
}: CTASectionProps) {
  const router = useRouter();

  const handleOpenContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  if (variant === "ready") {
    return (
      <section className={cn("text-center bg-[#0a0a0a]", readyClassName)}>
        <h2 className="mb-3 text-4xl font-medium text-white">{readyTitle}</h2>
        <p className="mb-6 text-2xl md:text-4xl font-medium gradient-text">{readySubtitle}</p>
        <PrimaryButton onClick={handleOpenContact}>{readyButtonLabel}</PrimaryButton>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 text-white bg-[#0a0a0a]",
        gradientClassName,
      )}
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(34,197,94,0.12)" }} />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "rgba(34,197,94,0.07)" }} />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center px-4">
        <span className="inline-block mb-4 px-4 py-2 rounded-full glass-green text-[#4ade80] text-sm">
          Get Started
        </span>
        <h2 className="text-3xl font-semibold md:text-[38px] text-white">
          {gradientTitle}
        </h2>
        <p className="mt-4 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
          {gradientDescription}
        </p>
        <div className="mt-10 flex justify-center">
          <SecondaryButton onClick={handleOpenContact}>
            {gradientButtonLabel}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
