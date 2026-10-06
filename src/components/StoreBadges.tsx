import React from 'react';

interface StoreBadgeProps {
  variant?: 'google' | 'apple';
  className?: string;
  onClick?: () => void;
}

export const GooglePlayBadge: React.FC<StoreBadgeProps> = ({ className = '', onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-3 px-4 py-2 bg-black border border-white/15 rounded-lg hover:border-white/40 transition-all duration-200 cursor-pointer text-left text-white shadow-md hover:shadow-[#16a34a]/10 ${className}`}
      aria-label="Get it on Google Play"
    >
      {/* Google Play Triangle SVG */}
      <svg viewBox="0 0 512 512" className="w-6 h-6 shrink-0" fill="none">
        <path
          d="M48 40C45 43 43 48 43 55V457C43 464 45 469 48 472L262 258L48 40Z"
          fill="#00D2FF"
        />
        <path
          d="M333 187L262 258L333 329L419 280C443 266 443 249 419 236L333 187Z"
          fill="#FFCE00"
        />
        <path
          d="M48 472C56 480 69 482 82 474L333 329L262 258L48 472Z"
          fill="#00F076"
        />
        <path
          d="M48 40L262 258L333 187L82 43C69 35 56 37 48 40Z"
          fill="#FF3A44"
        />
      </svg>
      <div className="leading-tight">
        <div className="text-[9px] uppercase tracking-wider text-white/70 font-medium">GET IT ON</div>
        <div className="text-sm font-semibold tracking-tight text-white font-sans">Google Play</div>
      </div>
    </button>
  );
};

export const AppStoreBadge: React.FC<StoreBadgeProps> = ({ className = '', onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-3 px-4 py-2 bg-black border border-white/15 rounded-lg hover:border-white/40 transition-all duration-200 cursor-pointer text-left text-white shadow-md hover:shadow-[#16a34a]/10 ${className}`}
      aria-label="Download on the Apple App Store"
    >
      {/* Apple Logo SVG */}
      <svg viewBox="0 0 170 170" className="w-6 h-6 shrink-0 fill-current text-white">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.85-11.96-14.42-6.19-9.5-11.16-20.87-14.88-34.12-3.73-13.25-5.59-25.59-5.59-37.04 0-14.42 3.58-26.68 10.74-36.78 7.15-10.1 16.32-15.34 27.5-15.72 5.09 0 10.66 1.34 16.71 4.02 6.05 2.68 10.02 4.06 11.91 4.14 1.48 0 5.65-1.42 12.51-4.27 6.87-2.85 12.63-4.14 17.29-3.87 13.06.74 23.36 5.66 30.91 14.77-11.75 7.12-17.51 16.89-17.28 29.31.22 9.87 4.11 18.23 11.66 25.07 7.55 6.84 16.48 10.74 26.79 11.7-2.23 6.74-4.89 13.31-7.98 19.7zm-27.42-108.9c0 7.37-2.73 14.37-8.18 21-5.46 6.63-12.27 10.66-20.44 12.09-.34-1.48-.52-2.97-.52-4.47 0-7.37 2.91-14.42 8.74-21.15 5.83-6.73 12.63-10.61 20.4-11.63z" />
      </svg>
      <div className="leading-tight">
        <div className="text-[9px] text-white/70 font-medium">Download on the</div>
        <div className="text-sm font-semibold tracking-tight text-white font-sans">App Store</div>
      </div>
    </button>
  );
};
