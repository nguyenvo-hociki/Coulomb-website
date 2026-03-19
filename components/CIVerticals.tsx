import Card from './Card';

// Using consistent image data across the application
const defaultImages = [
  "/images/ci_uc1_datacenter_opt-300x167.jpg",
  "/images/def_vert_embassy_opt-300x167.jpg",
  "/images/def_vert_military_opt-300x167.jpg",
];

export default function CIVerticals() {
  const cards = [
    {
      image: defaultImages[0], // Critical Infrastructure
      category: "CRITICAL INFRASTRUCTURE",
      title: "Grid-Tied BTM — Critical Infrastructure",
      description: "Backup power and demand management for facilities where outages are unacceptable. Sodium-ion's zero-fire-risk chemistry meets the safety requirements of life-critical environments.",
      markets: "Municipal utilities, hospitals, military installations, communications infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      image: defaultImages[1], // Grid Edge
      category: "GRID EDGE / NEAR PUBLIC",
      title: "Grid-Tied BTM — Grid Edge & Near Public",
      description: "Demand charge reduction, solar self-consumption, and EV charging optimization for facilities near the public grid edge. Scalable from single-site to portfolio deployments.",
      markets: "EV charging depots, universities & schools, hotels, community solar, residential",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      image: defaultImages[2], // Large C&I
      category: "LARGE C&I",
      title: "Grid-Tied BTM — Large Commercial & Industrial",
      description: "Peak shaving, backup power, and demand response for high-load commercial facilities. Purpose-built for environments with extreme demand charges and 24/7 operations.",
      markets: "Manufacturing shops, warehouses, big-box retailers, multifamily housing complexes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      )
    },
    {
      image: defaultImages[0], // Remote Power
      category: "REMOTE POWER / OFF-GRID",
      title: "Remote Power & Off-Grid Systems",
      description: "Standalone and hybrid power for remote sites where grid connection is impractical or unavailable. Extreme-temperature tolerance from -40°F to 140°F without active thermal management.",
      markets: "Cell towers, defense, oil & gas, community power, remote APU, backup power",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header - Centered */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <span className="block text-xs font-bold text-primary uppercase tracking-widest mb-3">
            C&I VERTICALS WE SERVE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Four Strategic Verticals. One Integrated Platform.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-4">
            Coulomb Technology's sodium-ion BESS is purpose-built for the four C&I verticals where battery economics, safety, and reliability matter most — from life-critical facilities to remote off-grid deployments.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              category={card.category}
              title={card.title}
              description={card.description}
              markets={card.markets}
              icon={card.icon}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}