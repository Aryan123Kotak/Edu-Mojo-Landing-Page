import React, { useState } from 'react';

interface EduMojoLogoProps {
  className?: string;
  variant?: 'color' | 'dark' | 'white';
  showTagline?: boolean;
}

export const EduMojoLogo: React.FC<EduMojoLogoProps> = ({
  className = 'h-10',
  variant = 'color',
  showTagline = false,
}) => {
  // Use the transparent Edu Mojo brand logo (no white background)
  const [currentSrc, setCurrentSrc] = useState<string>('/edumojo-transparent-logo.png');
  const [hasError, setHasError] = useState<boolean>(false);

  const isWhite = variant === 'white';

  const handleError = () => {
    if (currentSrc === '/edumojo-transparent-logo.png') {
      setCurrentSrc('/Edu Mojo.27.38 PM.png');
    } else if (currentSrc === '/Edu Mojo.27.38 PM.png') {
      setCurrentSrc('/edumojo-logo.png');
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {!hasError ? (
        <img
          src={currentSrc}
          alt="EduMojo"
          className={`h-full w-auto object-contain transition-transform duration-200 hover:scale-[1.02] ${
            isWhite ? 'brightness-0 invert' : 'mix-blend-multiply'
          }`}
          onError={handleError}
        />
      ) : (
        /* Geometric vector fallback if image is missing */
        <svg
          viewBox="0 0 740 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto aspect-[740/280] shrink-0"
          aria-label="EduMojo Logo"
        >
          <g
            stroke={variant === 'white' ? '#4ade80' : '#4db874'}
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <path d="M 24 238 L 24 40 C 24 26 34 18 48 18 L 96 18 C 108 18 118 25 124 35 L 146 76 C 152 86 145 98 132 98 L 24 98" />
            <path d="M 24 98 L 156 98 C 168 98 178 105 184 115 L 206 156 C 212 166 205 178 192 178 L 24 178" />
            <path d="M 24 178 L 216 178 C 228 178 238 185 244 195 L 260 226 C 267 240 258 258 242 262 L 222 262 L 48 262 C 34 262 24 252 24 238 Z" />
            <path d="M 124 35 L 176 178" />
            <path d="M 184 115 L 236 262" />
          </g>
          <text
            x="290"
            y="126"
            fill={variant === 'white' ? '#ffffff' : variant === 'dark' ? '#0b1f14' : '#362e5a'}
            fontSize="130"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-0.02em"
          >
            EDU
          </text>
          <text
            x="290"
            y="254"
            fill={variant === 'white' ? '#ffffff' : variant === 'dark' ? '#0b1f14' : '#362e5a'}
            fontSize="130"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-0.02em"
          >
            MOJO
          </text>
        </svg>
      )}

      {showTagline && (
        <span className="ml-2 text-[11px] font-bold tracking-widest text-[#64748b] uppercase">
          ERP
        </span>
      )}
    </div>
  );
};
