import React from 'react';

export const IndiaUaeDottedMap: React.FC = () => {
  return (
    <div 
      className="bg-white rounded-[16px] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between font-sans"
      style={{
        border: '1px solid rgba(11, 31, 20, 0.08)',
        boxShadow: '0 10px 30px rgba(11, 31, 20, 0.04)',
      }}
    >
      {/* Title */}
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(11,31,20,0.06)] mb-4">
        <div>
          <h4 className="text-sm font-bold text-[#0b1f14]">Regional Footprint</h4>
          <p className="text-[11px] text-[#6b7a72]">Active institutional hubs across Western India & UAE</p>
        </div>
        <span className="text-[10px] uppercase font-bold text-[#15803d] bg-[rgba(46,202,139,0.14)] px-2.5 py-0.5 rounded-full font-mono">
          4 Regional Clusters
        </span>
      </div>

      {/* Dotted Map Canvas */}
      <div className="relative w-full aspect-[16/9] min-h-[220px] flex items-center justify-center">
        <svg 
          viewBox="0 0 460 220" 
          className="w-full h-full text-slate-300"
          aria-label="Map of India and UAE deployment hubs"
        >
          {/* Subtle Dot Grid */}
          <pattern id="dot-grid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#cbd5e1" opacity="0.6" />
          </pattern>
          <rect width="460" height="220" fill="url(#dot-grid)" opacity="0.4" />

          {/* Stylized UAE Region Dots Group (Left) */}
          <g transform="translate(45, 75)">
            <ellipse cx="40" cy="30" rx="36" ry="24" fill="#2eca8b" opacity="0.08" />
            <path
              d="M15,25 Q35,10 65,20 Q60,45 35,45 Z"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="2 3"
            />
          </g>

          {/* Stylized India Region Dots Group (Right) */}
          <g transform="translate(190, 25)">
            <path
              d="M80,10 Q120,5 150,40 Q170,90 140,150 Q110,185 85,145 Q50,110 55,60 Z"
              fill="#2eca8b"
              opacity="0.06"
            />
            <path
              d="M80,10 Q120,5 150,40 Q170,90 140,150 Q110,185 85,145 Q50,110 55,60 Z"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />
          </g>

          {/* Pin 1: Dubai, UAE */}
          <g transform="translate(85, 95)" className="cursor-pointer group">
            <circle cx="0" cy="0" r="12" fill="rgba(22,163,74,0.2)" className="animate-ping" />
            <circle cx="0" cy="0" r="5" fill="#16a34a" />
            <text x="10" y="4" fontSize="10" fontWeight="bold" fill="#0b1f14" fontFamily="Inter, sans-serif">
              Dubai, UAE
            </text>
            <text x="10" y="15" fontSize="8" fill="#6b7a72" fontFamily="Inter, sans-serif">
              Dhruv Global School
            </text>
          </g>

          {/* Pin 2: Mumbai, India */}
          <g transform="translate(245, 110)" className="cursor-pointer group">
            <circle cx="0" cy="0" r="12" fill="rgba(22,163,74,0.2)" className="animate-ping" />
            <circle cx="0" cy="0" r="5" fill="#16a34a" />
            <text x="9" y="-2" fontSize="10" fontWeight="bold" fill="#0b1f14" fontFamily="Inter, sans-serif">
              Mumbai
            </text>
          </g>

          {/* Pin 3: Pune, India */}
          <g transform="translate(268, 128)" className="cursor-pointer group">
            <circle cx="0" cy="0" r="14" fill="rgba(22,163,74,0.25)" className="animate-ping" />
            <circle cx="0" cy="0" r="6" fill="#15803d" />
            <text x="10" y="4" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Inter, sans-serif">
              Pune (HQ)
            </text>
            <text x="10" y="16" fontSize="8" fill="#6b7a72" fontFamily="Inter, sans-serif">
              Blue Ridge · Arihant · Dhruv
            </text>
          </g>

          {/* Pin 4: Nashik / Sangamner */}
          <g transform="translate(270, 92)" className="cursor-pointer group">
            <circle cx="0" cy="0" r="10" fill="rgba(22,163,74,0.2)" className="animate-ping" />
            <circle cx="0" cy="0" r="4.5" fill="#16a34a" />
            <text x="10" y="4" fontSize="10" fontWeight="bold" fill="#0b1f14" fontFamily="Inter, sans-serif">
              Nashik / Sangamner
            </text>
            <text x="10" y="15" fontSize="8" fill="#6b7a72" fontFamily="Inter, sans-serif">
              Sangamner College Network
            </text>
          </g>
        </svg>
      </div>

      <div className="pt-3 border-t border-[rgba(11,31,20,0.06)] flex items-center justify-between text-[11px] text-[#6b7a72]">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
          <span>Active Datacenter Nodes</span>
        </span>
        <span className="font-mono text-[#0b1f14] font-semibold">AWS ap-south-1 & me-central-1</span>
      </div>
    </div>
  );
};
