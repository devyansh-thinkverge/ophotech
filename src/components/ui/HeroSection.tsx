"use client";

import { Breadcrumb } from "./Breadcrumb";
import { ReactNode } from "react";
import { VideoPlayer } from "./VideoPlayer";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroSectionProps {
  breadcrumb?: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  backgroundImage?: string; // kept for API compat, unused
  video?: string;
  videoPoster?: string;
  contentAlignment?: "center" | "left";
  fullViewport?: boolean;
  children?: ReactNode;
}

export function HeroSection({
  breadcrumb,
  title,
  subtitle,
  video,
  videoPoster = "/videos/thumbnail.webp",
  contentAlignment = "center",
  fullViewport = false,
  children,
}: HeroSectionProps) {
  const hasVideo = !!video;

  const minHeightClass = fullViewport
    ? "min-h-screen"
    : hasVideo
      ? "min-h-[620px] lg:min-h-[600px]"
      : "min-h-[500px] sm:min-h-[380px] lg:min-h-[400px]";

  const sectionClasses = `relative -mt-2 sm:-mt-10 mb-5 overflow-hidden text-white bg-[#0a0a0a] ${minHeightClass} flex flex-col ${
    contentAlignment === "center" && !hasVideo ? "justify-center" : ""
  }`;

  return (
    <section className={sectionClasses}>
      {/* Dark background layers */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(34,197,94,0.08)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(34,197,94,0.04)" }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-3 xl:px-0">
        {hasVideo ? (
          <div className="flex flex-col pt-20 pb-2">
            {breadcrumb && <Breadcrumb items={breadcrumb} />}
            <div className="flex flex-1 flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="min-w-[280px] max-w-md space-y-8 sm:min-w-[350px] lg:min-w-[380px]">
                <h1 className="text-3xl gradient-text sm:text-5xl leading-[1.1] lg:text-5xl">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-base leading-relaxed text-white/60 sm:text-lg lg:text-xl">
                    {subtitle}
                  </p>
                )}
                {children}
              </div>
              <div className="w-full flex-1">
                <div className="w-full lg:w-auto lg:ml-0">
                  <VideoPlayer
                    src={video}
                    poster={videoPoster}
                    autoplay={true}
                    muted={true}
                    showControls={true}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col pt-5 ${
              contentAlignment === "center" ? "items-center text-center" : ""
            }`}
          >
            {breadcrumb && (
              <div className={contentAlignment === "center" ? "w-full" : ""}>
                <Breadcrumb items={breadcrumb} />
              </div>
            )}
            <div
              className={`flex flex-col space-y-6 mb-10 ${
                contentAlignment === "center"
                  ? "items-center text-center max-w-6xl"
                  : "max-w-6xl"
              }`}
            >
              <h1 className="text-4xl gradient-text sm:text-5xl leading-[1.1] lg:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="text-base leading-relaxed text-white/60 sm:text-lg">
                  {subtitle}
                </p>
              )}
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
