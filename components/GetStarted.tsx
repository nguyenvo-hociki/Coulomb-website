// components/GetStarted.tsx
import Link from "next/link";
import CTACard from "./CTACard";

interface GetStartedProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function GetStarted({
  eyebrow = 'GET STARTED',
  title = 'Ready to Get Started?',
  subtitle = 'Contact our engineering team to discuss your application, get a custom system design, or schedule a live demo.',
}: GetStartedProps) {
  return (
    <section className="bg-gray-100 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-3">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Schedule a Demo */}
          <CTACard
            title="Schedule a Demo or Get a Quote"
            description="See the system in action or get pricing for your specific application, facility size, and deployment timeline."
            buttonText="Contact Us"
            href="/contact"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
          />

          {/* Card 2: Become a Partner */}
          <CTACard
            title="Become a Partner"
            description="Integrators, OEMs, and channel partners — explore how Coulomb Technology's technology fits your product roadmap."
            buttonText="Partner With Us"
            href="/partners"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 5.472m0 0a9.09 9.09 0 0 0-3.32 1.692 3 3 0 0 1 4.685-2.72m0 0c.9-1.373 2.11-2.43 3.513-3.118m0-6.108a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
