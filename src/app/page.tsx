import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { YourJourney } from "@/components/sections/Your-Journey";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LazyValuePropositionSection } from "@/components/sections/LazyValuePropositionSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HIDE_RESOURCES, HIDE_PRODUCTS } from "@/lib/featureFlags";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <StatsSection />
        <YourJourney />
        <ServicesSection />
        <LazyValuePropositionSection />
        <HowWeWorkSection />
        <IndustriesSection />
        {HIDE_PRODUCTS ? null : <ProductsSection />}
        {HIDE_RESOURCES ? null : (
          <>
            <NewsletterSection />
            <CaseStudiesSection />
          </>
        )}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
