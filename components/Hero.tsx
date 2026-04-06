"use client";

import Link from "next/link";

export interface HeroProps {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const defaultVideo = "/videos/hero-video.mp4";

export default function Hero({
  videoSrc = defaultVideo,
  title = "Clean Energy for a|Sustainable Future",
  subtitle = "Sodium-ion batteries engineered for mission-critical infrastructure, industrial fleets, and reliable power across every application.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  primaryButtonHref,
  secondaryButtonHref,
}: HeroProps) {
  // Split title into two lines based on delimiter
  const titleParts = title.includes('|') ? title.split('|') : [title, ""];

  return (
    <div className="w-full flex flex-col">
      {/* Top Section: Background Video & Main Content */}
      <div className="relative w-full h-[calc(100vh-6rem)] overflow-hidden flex items-center text-white">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-left px-[5%] md:px-[10%] xl:px-[15%] max-w-7xl w-full flex flex-col justify-center h-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg leading-tight">
            <span className="block text-white">{titleParts[0]}</span>
            {titleParts[1] && <span className="block text-primary">{titleParts[1]}</span>}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center sm:items-start">
            {/* Primary Button */}
            {primaryButtonHref ? (
              <Link
                href={primaryButtonHref}
                className="px-8 py-3 text-lg font-semibold rounded-2xl bg-primary text-black hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {primaryButtonText}
              </Link>
            ) : (
              <button 
                className="px-8 py-3 text-lg font-semibold rounded-2xl bg-primary text-black hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {primaryButtonText}
              </button>
            )}

            {/* Transparent Button */}
            {secondaryButtonHref ? (
              <Link
                href={secondaryButtonHref}
                className="px-8 py-3 text-lg font-semibold rounded-2xl bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {secondaryButtonText}
              </Link>
            ) : (
              <button 
                className="px-8 py-3 text-lg font-semibold rounded-2xl bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section: Grid Stats */}
      <div className="w-full bg-black text-white px-[5%] md:px-[10%] xl:px-[15%] py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {/* Row 1 */}
        <div className="flex flex-col justify-center border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 cursor-default group">
          <span className="text-primary font-bold text-xl mb-1 group-hover:text-white transition-colors">Efficiency</span>
          <span className="text-white text-2xl font-semibold mb-1">98% Rating</span>
          <span className="text-gray-400 text-xs group-hover:text-gray-300">Certified by industry std</span>
        </div>
        <div className="flex flex-col justify-center border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 cursor-default group">
          <span className="text-primary font-bold text-xl mb-1 group-hover:text-white transition-colors">Durability</span>
          <span className="text-white text-2xl font-semibold mb-1">20+ Years</span>
          <span className="text-gray-400 text-xs group-hover:text-gray-300">Lifetime warranty included</span>
        </div>
        <div className="flex flex-col justify-center border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 cursor-default group">
          <span className="text-primary font-bold text-xl mb-1 group-hover:text-white transition-colors">Savings</span>
          <span className="text-white text-2xl font-semibold mb-1">$2k / Year</span>
          <span className="text-gray-400 text-xs group-hover:text-gray-300">Estimated avg savings</span>
        </div>
        <div className="flex flex-col justify-center border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 cursor-default group">
          <span className="text-primary font-bold text-xl mb-1 group-hover:text-white transition-colors">Eco-Friendly</span>
          <span className="text-white text-2xl font-semibold mb-1">100% Green</span>
          <span className="text-gray-400 text-xs group-hover:text-gray-300">Zero carbon footprint</span>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col justify-center items-start border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 cursor-default group">
          <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 mb-2 uppercase tracking-wider group-hover:bg-primary transition-colors">New</span>
          <span className="text-white text-lg font-medium mb-1 group-hover:text-primary transition-colors">Smart Home Ready</span>
          <span className="text-gray-400 text-xs group-hover:text-gray-300">Connects to app</span>
        </div>
        <div className="flex flex-col justify-center items-start border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 cursor-default group">
          <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 mb-2 uppercase tracking-wider group-hover:bg-primary transition-colors">Top</span>
          <span className="text-white text-lg font-medium mb-1 group-hover:text-primary transition-colors">Award Winning</span>
          <span className="text-gray-400 text-xs group-hover:text-gray-300">Best in class 2024</span>
        </div>
        <div className="flex flex-col justify-center items-start border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 cursor-default group">
          <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 mb-2 uppercase tracking-wider group-hover:bg-primary transition-colors">Fast</span>
          <span className="text-white text-lg font-medium mb-1 group-hover:text-primary transition-colors">Quick Install</span>
          <span className="text-gray-400 text-xs group-hover:text-gray-300">Setup in 24 hours</span>
        </div>
        <div className="flex flex-col justify-center items-start border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 cursor-default group">
          <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 mb-2 uppercase tracking-wider group-hover:bg-primary transition-colors">Safe</span>
          <span className="text-white text-lg font-medium mb-1 group-hover:text-primary transition-colors">Fire Proof</span>
          <span className="text-gray-400 text-xs group-hover:text-gray-300">Advanced safety system</span>
        </div>
      </div>
    </div>
  );
}
