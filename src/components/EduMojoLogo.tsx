import React from 'react';

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
  // Brand colors extracted from uploaded "Edu mojo logo.png"
  const greenStroke = variant === 'white' ? '#4ade80' : '#4db874';
  const textColor = variant === 'white' ? '#ffffff' : variant === 'dark' ? '#0b1f14' : '#362e5a';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 740 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-[740/280] shrink-0"
        aria-label="EduMojo Logo"
      >
        {/* 
          ==================================================
          ICON MARK (Exact geometric replica from Edu mojo logo.png)
          Stepped axonometric shelves with isometric slants
          ==================================================
        */}
        <g
          stroke={greenStroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* Outer spine: Left vertical line + top & bottom rounded corners */}
          <path d="M 24 238 L 24 40 C 24 26 34 18 48 18 L 96 18 C 108 18 118 25 124 35 L 146 76 C 152 86 145 98 132 98 L 24 98" />

          {/* Tier 2 Shelf (Middle horizontal + outer slant) */}
          <path d="M 24 98 L 156 98 C 168 98 178 105 184 115 L 206 156 C 212 166 205 178 192 178 L 24 178" />

          {/* Tier 3 Shelf (Bottom horizontal + outer slant & base return) */}
          <path d="M 24 178 L 216 178 C 228 178 238 185 244 195 L 260 226 C 267 240 258 258 242 262 L 222 262 L 48 262 C 34 262 24 252 24 238 Z" />

          {/* Isometric internal struts creating transparent depth */}
          <path d="M 124 35 L 176 178" />
          <path d="M 184 115 L 236 262" />
        </g>

        {/* 
          ==================================================
          TYPOGRAPHY: "EDU" & "MOJO"
          Exact geometric sans font weight & alignment matching 
          the uploaded official Edu mojo logo.png
          ==================================================
        */}
        <text
          x="290"
          y="126"
          fill={textColor}
          fontSize="130"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, 'Inter', 'Montserrat', 'Segoe UI', sans-serif"
          letterSpacing="-0.02em"
          style={{ fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' }}
        >
          EDU
        </text>

        <text
          x="290"
          y="254"
          fill={textColor}
          fontSize="130"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, 'Inter', 'Montserrat', 'Segoe UI', sans-serif"
          letterSpacing="-0.02em"
          style={{ fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' }}
        >
          MOJO
        </text>

        {/* Optional Tagline if explicitly requested */}
        {showTagline && (
          <text
            x="294"
            y="278"
            fill={variant === 'white' ? '#cbd5e1' : '#64748b'}
            fontSize="20"
            fontWeight="700"
            letterSpacing="0.28em"
            fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
          >
            SCHOOL ERP PLATFORM
          </text>
        )}
      </svg>
    </div>
  );
};
