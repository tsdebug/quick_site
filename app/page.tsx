import Features from "@/components/features-3";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-3";
import StatsSection from "@/components/stats-3";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <StatsSection />
    </div>
  );
}
