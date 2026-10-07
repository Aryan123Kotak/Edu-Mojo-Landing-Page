import React from 'react';
import { CLIENT_LOGOS, SchoolLogoDisplay } from './ClientLogos';

interface LogoMarqueeProps {
  className?: string;
  title?: string;
  subtitle?: string;
  showText?: boolean;
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  className = '',
  title = 'TRUSTED BY SCHOOLS, COLLEGES & INSTITUTES IN INDIA & DUBAI',
  subtitle = '15+ institutions rely on EduMojo daily for academics, fees, admissions and operations',
  showText = true,
}) => {

  return (
    <div 
      className={`py-6 sm:py-8 border-y border-[rgba(11,31,20,0.06)] bg-[#fbfdfc] overflow-hidden relative ${className}`}
    >
      {/* Caption above: Header & subtext */}
      {showText && (
        <div className="page-container mb-3.5 sm:mb-4 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <p className="uppercase text-[#15803d] font-bold tracking-[0.16em] text-[11px] sm:text-xs">
              {title}
            </p>
          </div>
          {subtitle && (
            <p className="text-xs text-[#6b7a72] mt-0.5 max-w-xl mx-auto leading-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* COMPACT LOGO MARQUEE PANEL - TRANSPARENT LOGOS */}
      <div className="marquee w-full py-2.5 sm:py-3">
        <div className="marquee-track items-center gap-12 sm:gap-16">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
            <div
              key={`school-logo-${client.id}-${index}`}
              className="marquee-item shrink-0 px-4 sm:px-6 py-1 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center bg-transparent"
              title={`${client.name} · ${client.category} (${client.city})`}
            >
              <SchoolLogoDisplay client={client} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
