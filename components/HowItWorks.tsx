// components/HowItWorks.tsx
import Image from 'next/image';

export default function HowItWorks() {
  const features = [
    "Charges when grid prices are at their lowest",
    "Discharges to avoid peak demand charges",
    "Responds to grid events to earn demand response payments",
    "Maintains full backup reserve for critical operations",
    "Integrates solar generation for maximum self-consumption"
  ];

  return (
    <section className="bg-gray-100 py-15 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <span className="block text-xs font-bold text-primary uppercase tracking-widest mb-3">
            HOW IT WORKS
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-3">
            Your Battery Works While You Sleep.
          </h2>
          
          <p className="text-gray-600 text-lg mt-4 max-w-xl leading-relaxed">
            Coulomb AI™ continuously monitors solar generation, grid pricing, weather forecasts, and your facility's load profile — then automatically executes the best energy strategy every 15 minutes, 24/7.
          </p>
          
          <ul className="space-y-1 mt-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-800 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Content (Diagram Card) */}
        <div className="flex-2 w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/images/ems_diagram.png"
              alt="Coulomb AI Energy Management System Diagram"
              fill
              className="object-contain drop-shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
