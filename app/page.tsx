import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="bg-gray-100 overflow-hidden">
      <Navbar />

      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />

      <Footer />
    </main>
  );
}
