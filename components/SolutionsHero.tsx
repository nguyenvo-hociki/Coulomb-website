// components/SolutionsHero.tsx
import Image from 'next/image';
import Link from 'next/link';

export interface SolutionsHeroProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function SolutionsHero({
  eyebrow = 'OUR SOLUTIONS',
  title = 'Not Just a Battery.|An Intelligent Energy Platform.',
  subtitle = "Coulomb Technology's fully integrated systems combine sodium-ion storage with AI-driven energy management — automatically maximizing savings, generating revenue, and keeping your operations running no matter what the grid does.",
  image = '/images/app_mockup-1.png',
  imageAlt = 'Coulomb platform visual',
  primaryCtaText = 'Explore All Products',
  primaryCtaHref = '/products',
  secondaryCtaText = 'Request a System Design',
  secondaryCtaHref = '/contact',
}: SolutionsHeroProps) {
  const titleParts = title.includes('|') ? title.split('|') : [title];

  return (
    <section className="w-full bg-gradient-to-r from-black via-gray-900 to-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <span className="block text-xs font-bold text-primary uppercase tracking-widest mb-3">{eyebrow}</span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
            {titleParts.length > 1 ? (
              <>
                {titleParts[0]} <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  {titleParts[1]}
                </span>
              </>
            ) : (
              titleParts[0]
            )}
          </h2>
          
          <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
            <Link 
              href={primaryCtaHref} 
              className="bg-primary text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-colors duration-300 shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              {primaryCtaText}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            
            <Link 
              href={secondaryCtaHref} 
              className="border border-gray-700 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm"
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>
        
        {/* Right Content (Image) */}
        <div className="flex-1 relative flex justify-center items-center">
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>
          
          <div className="relative w-[300px] md:w-[350px] transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900">
               {/* Using a generic aspect ratio container for the mockup if precise dimensions aren't known, 
                   but since we have the specific image file, we'll try to use intrinsic dimensions or fill */}
              <Image
                src={image}
                alt={imageAlt}
                width={350}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Optional: Screen gloss reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
