"use client";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ServiceDetailsModal } from "@/components/modals/service-details-modal";
import { AboutSection } from "@/components/sections/about-section";
import { CtaSection } from "@/components/sections/cta-section";
import { GrowingSection } from "@/components/sections/growing-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Header />
      <ServiceDetailsModal />
      <main>
        <section id="home" className="scroll-mt-28">
          <HeroSection />
        </section>
        <section id="about" className="scroll-mt-28">
          <AboutSection />
          <GrowingSection />
        </section>
        <section id="services" className="scroll-mt-28">
          <ServicesSection />
        </section>
        <section id="contact" className="scroll-mt-28">
          <CtaSection />
        </section>
      </main>
      <Footer />
    </Suspense>
  );
}
