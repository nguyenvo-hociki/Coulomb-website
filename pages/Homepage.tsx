// pages/Homepage.tsx
"use client";

import { motion } from "framer-motion";
import CIVerticals from "@/components/CIVerticals";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RevenueSection from "@/components/RevenueSection";
import SolutionsHero from "@/components/SolutionsHero";
import WhoWeServe from "@/components/WhoWeServe";
import ResearchPartners from "@/components/ResearchPartners";
import GetStarted from "@/components/GetStarted";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

export default function Homepage() {
  return (
    <div className="flex flex-col w-full overflow-hidden"> 
      <motion.div {...fadeInUp} className="w-full">
        <Hero 
          title="Clean Energy for a|Sustainable Future"
          subtitle="Reduce your carbon footprint and energy bills with our cutting-edge solar and battery storage systems designed for modern living."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          />
      </motion.div>
      
      <motion.div {...fadeInUp} className="w-full">
        <WhoWeServe />
      </motion.div>

      <motion.div {...fadeInUp} className="w-full">
        <SolutionsHero />
      </motion.div>

      {/* <motion.div {...fadeInUp} className="w-full">
        <CIVerticals />
      </motion.div> */}

      <motion.div {...fadeInUp} className="w-full">
        <HowItWorks />
      </motion.div>

      <motion.div {...fadeInUp} className="w-full">
        <RevenueSection />
      </motion.div>

      <motion.div {...fadeInUp} className="w-full">
        <ResearchPartners />
      </motion.div>

      <motion.div {...fadeInUp} className="w-full">
        <GetStarted />
      </motion.div>
    </div>
  );
}