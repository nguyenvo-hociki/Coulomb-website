import Image from 'next/image';
import { ReactNode } from 'react';

interface CardProps {
  image?: string;
  category: string;
  title: string;
  description: string;
  markets?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  icon?: ReactNode;
  variant?: 'default' | 'compact';
}

export default function Card({
  image = "/images/def_vert_embassy_opt-300x167.jpg",
  category = "CRITICAL INFRASTRUCTURE",
  title = "Grid-Tied BTM — Critical Infrastructure",
  description,
  markets,
  ctaText,
  onCtaClick,
  icon,
  variant = 'default',
}: CardProps) {
  const isCompact = variant === 'compact';

  return (
    <div className={`group w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full`}>
      {/* Image section */}
      <div className={`relative w-full bg-gray-100 ${isCompact ? 'h-40' : 'h-48'}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content section */}
      <div className={`${isCompact ? 'p-5' : 'p-6'} flex flex-col space-y-3 flex-grow`}>
        {/* Category Row */}
        <div className="flex items-center gap-2">
          {icon && (
            <div className={isCompact ? "bg-gray-100 p-2 rounded-md shrink-0" : "shrink-0"}>
              {icon}
            </div>
          )}
          <span className={`text-xs font-bold text-blue-600 tracking-wide uppercase ${!isCompact && !icon ? '' : ''}`}>
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className={`${isCompact ? 'text-lg' : 'text-xl'} font-semibold text-gray-900 leading-tight`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-2">
          {description}
        </p>

        {/* Markets */}
        {markets && (
          <div className={`mt-auto text-sm text-gray-600 leading-relaxed ${isCompact ? 'pt-2 border-t border-gray-50' : 'pb-4'}`}>
            <span className="font-bold text-gray-900 mr-1">Markets:</span>
            {markets}
          </div>
        )}

        {/* CTA Button (Default variant only) */}
        {!isCompact && ctaText && (
          <div className="pt-2 mt-auto">
            <button 
              onClick={onCtaClick}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 group"
            >
              {ctaText}
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}