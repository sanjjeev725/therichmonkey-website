import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TrustIndicators from "@/components/trust-indicators";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import InvestmentProcess from "@/components/investment-process";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <TrustIndicators />
      <ServicesSection />
      <AboutSection />
      <InvestmentProcess />
      <ContactSection />
      <Footer />
    </div>
  );
}
