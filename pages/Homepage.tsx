// pages/Homepage.tsx
import CIVerticals from "@/components/CIVerticals";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RevenueSection from "@/components/RevenueSection";
import SolutionsHero from "@/components/SolutionsHero";
import WhoWeServe from "@/components/WhoWeServe";
import ResearchPartners from "@/components/ResearchPartners";
import GetStarted from "@/components/GetStarted";

export default function Homepage() {
  return (
    <div className="flex flex-col w-full"> 
    <Hero 
      title="Clean Energy for a|Sustainable Future"
      subtitle="Reduce your carbon footprint and energy bills with our cutting-edge solar and battery storage systems designed for modern living."
      primaryButtonText="Get Started"
      secondaryButtonText="Learn More"
      />
    <WhoWeServe />
    <SolutionsHero />
    <CIVerticals />
    <HowItWorks />
    <RevenueSection />
    <ResearchPartners />
    <GetStarted />
    </div>
  );
}