// components/ResearchPartners.tsx
"use client";

import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Oak Ridge National Laboratory", logo: "/images/oak_ridge-1.png" },
  { name: "Argonne National Laboratory", logo: "/images/argonne-1.png" },
  { name: "Rutgers", logo: "/images/rutgers-1.png" },
  { name: "NEI Corporation", logo: "/images/nei_corp-1.png" },
  { name: "CleanTech Open", logo: "/images/cleantech_open-1.png" },
  { name: "Innovation Crossroads", logo: "/images/innovation_crossroads-1.png" },
  { name: "Spark Cleantech Accelerator", logo: "/images/spark_cleantech-1.png" },
  { name: "NYSERDA / NENY", logo: "/images/neny-1.png" },
];

const LogoItem = ({ partner }: { partner: Partner }) => {
  return (
    <div className="flex items-center justify-center p-4 w-full h-24 relative hover:scale-105 transition-all duration-300 ease-in-out group">
      <div className="relative w-full h-full">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.15)]"
        />
      </div>
    </div>
  );
};

export default function ResearchPartners() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-s text-gray-500 font-bold tracking-widest uppercase mb-10">
          Research Partners & Supporters
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <LogoItem key={index} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
