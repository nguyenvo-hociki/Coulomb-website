import Card from './Card';

const defaultImages = [
  "/images/ci_uc1_datacenter_opt-300x167.jpg",
  "/images/def_vert_embassy_opt-300x167.jpg",
  "/images/def_vert_military_opt-300x167.jpg",
];

export default function WhoWeServe() {
  const cards = [
    {
      image: defaultImages[0], // C&I
      category: "COMMERCIAL & INDUSTRIAL",
      title: "Grid-Tied BESS for Every C&I Vertical",
      description: "BESS ready to install with PCS, EMS, and AI software to maximize utility bill savings and provide resiliency — across critical infrastructure, grid-edge, large commercial, and remote power applications.",
      markets: "Critical Infrastructure, Grid Edge, Large C&I, Remote Power / Off-Grid",
      ctaText: "Explore C&I Solutions"
    },
    {
      image: defaultImages[2], // Defense
      category: "DEFENSE & GOVERNMENT",
      title: "Mission-Critical Power for Defense",
      description: "Sodium-ion batteries engineered for extreme environments, domestic supply chain compliance, and mission-critical reliability.",
      markets: "Military, Emergency Services, Critical Infrastructure, Border Security",
      ctaText: "Defense Solutions"
    },
    {
      image: defaultImages[1], // Motive (using embassy as placeholder for now, or use first again if preferred)
      category: "MOTIVE / TRACTION BATTERIES",
      title: "Sodium-Ion Traction Batteries for Industrial Fleets",
      description: "Drop-in sodium-ion replacements for lead-acid in forklifts, golf carts, material handling fleets, and airport ground support equipment. Safer, extreme-temperature tolerant, zero maintenance.",
      markets: "Forklifts, Golf Carts (Traction), Material Handling, Airport GSE",
      ctaText: "Fleet Solutions"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <h5 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
              WHO WE SERVE
            </h5>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Built for the World's Most Demanding Applications.
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg mt-4">
              From military forward operating bases to commercial rooftops and industrial facilities, our sodium-ion technology powers the operations that can't afford to stop.
            </p>
          </div>
          
          <button className="whitespace-nowrap px-5 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-black hover:text-white transition-colors duration-200">
            View All Industries
          </button>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              category={card.category}
              title={card.title}
              description={card.description}
              markets={card.markets}
              ctaText={card.ctaText}
            //   showIcon={false} // Explicitly disabling icon for this section
            />
          ))}
        </div>
      </div>
    </section>
  );
}