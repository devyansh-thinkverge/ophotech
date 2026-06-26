'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const features = [
  {
    id: 'connect',
    title: 'Connect',
    subtitle: 'Evaluate & Establish Foundation',
    description:
      'We evaluate your business objectives and technical environments before building anything. Our AI Readiness Audit maps infrastructure, identifies operational bottlenecks, and forecasts predictable ROI — establishing a secure, governed foundation before a single model is deployed.',
    icon: '/images/valuesection/connect.svg',
  },
  {
    id: 'create',
    title: 'Create',
    subtitle: 'Engineer Custom Intelligence',
    description:
      'We engineer custom ML models and autonomous agents using your localized data as a competitive advantage. Every algorithm is strictly aligned with business objectives — churn reduction, operational yield optimization, or revenue expansion — not generalized intelligence.',
    icon: '/images/valuesection/create.svg',
  },
  {
    id: 'evolve',
    title: 'Evolve',
    subtitle: 'Scale, Adapt & Govern',
    description:
      'Our architecture dynamically adapts, scales securely, and grows increasingly accurate through continuous MLOps. Automated retraining pipelines, real-time drift detection, and full auditability ensure your AI investment compounds over time rather than degrading.',
    icon: '/images/valuesection/evolve.svg',
  },
];

export function ValuePropositionSection() {
  const [activeStep, setActiveStep] = useState('connect');
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  const activeFeature = features.find((f) => f.id === activeStep) || features[0];

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-[#F1F1F1]">
      {/* Dot background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(14,16,16,0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="font-mono text-[#0E1010]/60 text-xs tracking-widest uppercase">Framework</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0E1010] tracking-tighter mt-2">
            THE GOVERNED{" "}
            <span className="text-[#09C771]">AI LIFECYCLE</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[720px] text-sm md:text-base font-mono text-[#0E1010]/60">
            A three-phase framework ensuring every AI initiative is built on a secure foundation, aligned with business objectives, and designed for continuous improvement.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-6">
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-10">

            {/* Stepper */}
            <div className="flex w-full flex-col gap-3 lg:w-[280px] lg:shrink-0">
              {features.map((feature) => (
                <div key={feature.id} className="relative">
                  <button
                    onClick={() => setActiveStep(feature.id)}
                    className={`relative flex w-full items-center justify-between gap-2 rounded-xl px-4 py-3.5 text-left transition-all duration-200 border overflow-hidden ${
                      activeStep === feature.id
                        ? 'border-[#09C771]/40 bg-[#f0fdf4]'
                        : 'border-[#0E1010]/10 bg-white hover:border-[#09C771]/30 hover:bg-white'
                    }`}
                  >
                    {/* Active left-border accent */}
                    {activeStep === feature.id && (
                      <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl bg-[#09C771]" />
                    )}
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1 pl-1">
                      <div className={`text-xs font-medium ${
                        activeStep === feature.id ? 'text-[#09C771]/80' : 'text-[#0E1010]/40'
                      }`}>
                        {feature.subtitle}
                      </div>
                      <div className={`text-xl font-bold ${
                        activeStep === feature.id ? 'text-[#0E1010]' : 'text-[#0E1010]/70'
                      }`}>
                        {feature.title}
                      </div>
                    </div>

                    <div className="flex size-9 items-center justify-center shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={36}
                        height={36}
                        className={`w-full h-full transition-all duration-200 ${
                          activeStep === feature.id ? 'opacity-70' : 'opacity-30'
                        }`}
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Content Card */}
            <div className="flex w-full max-w-[800px] items-stretch rounded-2xl bg-white border border-[#0E1010]/10 shadow-sm p-5 sm:p-6 overflow-hidden">
              <div className="flex w-full flex-col gap-6 min-[1152px]:flex-row min-[1152px]:items-start min-[1152px]:gap-10">

                {/* Text Side */}
                <div className="flex flex-col gap-4 w-full md:min-w-[300px] lg:min-w-[350px]">
                  <p className="text-base sm:text-lg leading-relaxed text-[#0E1010]/60">
                    {activeFeature.description}
                  </p>

                  <button
                    onClick={handleOpenContact}
                    className="group flex w-fit items-center gap-1.5 rounded-xl border border-[#09C771]/40 bg-[#f0fdf4] px-4 py-2.5 transition-all hover:bg-[#09C771] hover:border-[#09C771]"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#09C771] group-hover:text-black transition-colors">
                      Let&apos;s Connect
                    </span>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className="text-[#09C771] group-hover:text-black transition-colors group-hover:translate-x-1 transition-transform"
                      aria-hidden
                    >
                      <path d="M5 8H11M11 8L8 5M11 8L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Image Side */}
                <div className="flex items-center justify-center w-full sm:w-auto min-[1152px]:flex-1 min-[1152px]:justify-end">
                  {!imageLoaded && (
                    <div className="h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] animate-pulse rounded-lg bg-[#f3f4f6]" />
                  )}
                  <Image
                    src="/images/valuesection/world.svg"
                    alt="Global connectivity"
                    width={340}
                    height={340}
                    className={`h-auto w-full max-w-[200px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[340px] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2Y5ZmFmYiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
