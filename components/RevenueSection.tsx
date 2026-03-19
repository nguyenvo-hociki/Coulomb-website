// components/RevenueSection.tsx
import React from 'react';
import Link from 'next/link';

const RevenueCard = ({ icon, value, title, description }: { icon: React.ReactNode, value: string, title: string, description: string }) => {
  return (
    <div className="bg-gray-900/60 rounded-2xl p-6 border border-gray-800 text-center hover:shadow-[0_0_20px_rgba(107,191,0,0.3)] transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center h-full">
      <div className="w-12 h-12 rounded-lg border border-gray-700 flex items-center justify-center text-primary mb-4 bg-gray-800/50 group-hover:border-primary/50 transition-colors">
        {icon}
      </div>
      <div className="text-2xl font-bold text-primary mt-4 mb-2">{value}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default function RevenueSection() {
  const cards = [
    {
      value: "↑ 14%",
      title: "Energy Arbitrage",
      description: "Charge when grid prices are low. Power your facility when prices peak. Coulomb AI automates every cycle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    },
    {
      value: "$0",
      title: "Demand Charge Reduction",
      description: "Flatten your demand curve during peak windows. Eliminate the largest line item on your commercial utility bill.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: "+$",
      title: "Grid Services Revenue",
      description: "Earn payments for demand response, frequency regulation, and capacity market participation through GridIQ™.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      value: "VPP",
      title: "Virtual Power Plant",
      description: "Join a VPP to earn additional revenue during grid stress events — your battery works for you around the clock.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-15.686 0A11.953 11.953 0 0112 10.5c2.998 0 5.74-1.1 7.843-2.918m-15.686 0A8.959 8.959 0 013 12c0 .778.099 1.533.284 2.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Area */}
        <div className="mb-16">
          <span className="block text-xs font-bold text-primary uppercase tracking-widest mb-3">
            REVENUE & SAVINGS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Four Ways Your System Pays You Back
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Coulomb AI™ evaluates every opportunity and automatically executes the optimal strategy — no manual intervention required.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <RevenueCard
              key={index}
              icon={card.icon}
              value={card.value}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/roi" 
            className="bg-primary text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Calculate Your ROI
          </Link>
          
          <Link 
            href="/contact" 
            className="bg-gray-800 text-white font-medium px-8 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Request a System Design
          </Link>
        </div>
      </div>
    </section>
  );
}
