import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { CtaSection } from "@/components/sections/cta-section";
import { GrowingSection } from "@/components/sections/growing-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GrowingSection />
        <ServicesSection />
        <CtaSection />
      </main>
    </>
  );
}
