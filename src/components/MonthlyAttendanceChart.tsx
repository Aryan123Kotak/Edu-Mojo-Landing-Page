import React, { useEffect, useRef, useState } from 'react';

const MONTH_DATA = [
  { month: 'Apr', pct: 72 },
  { month: 'May', pct: 84 },
  { month: 'Jun', pct: 78 },
  { month: 'Jul', pct: 90 },
  { month: 'Aug', pct: 93 },
  { month: 'Sep', pct: 88 },
  { month: 'Oct', pct: 97, isTallest: true },
  { month: 'Nov', pct: 91 },
];

export const MonthlyAttendanceChart: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white p-6 sm:p-8 rounded-[16px] transition-all duration-300 ${
        isInView ? 'in-view' : ''
      }`}
      style={{
        border: '1px solid rgba(11, 31, 20, 0.08)',
        boxShadow: '0 20px 40px rgba(11, 31, 20, 0.06)',
      }}
    >
      {/* Top Header: Title + 96.2% avg in #15803d */}
      <div className="flex items-center justify-between pb-4 border-b border-[rgba(11,31,20,0.06)] mb-6">
        <div>
          <h4 className="text-sm font-bold text-[#0b1f14]">Monthly attendance, 2026</h4>
          <p className="text-[11px] text-[#6b7a72] mt-0.5">Across all campus batches & divisions</p>
        </div>
        <div className="text-right">
          <div className="text-base sm:text-lg font-extrabold text-[#15803d] font-mono">
            96.2% avg
          </div>
          <div className="text-[10px] text-[#16a34a] font-bold uppercase tracking-wider">
            +3.8% vs 2025
          </div>
        </div>
      </div>

      {/* Chart Canvas: 8 bars */}
      <div className="h-44 sm:h-48 flex items-end justify-between gap-2.5 sm:gap-4 px-2 border-b border-[rgba(11,31,20,0.08)] pb-2">
        {MONTH_DATA.map((item, index) => (
          <div 
            key={item.month}
            className="flex-1 flex flex-col items-center h-full justify-end"
          >
            {/* Value tooltip label on top of tallest bar */}
            {item.isTallest && (
              <span className="text-[10px] font-mono font-bold text-[#15803d] mb-1">
                97%
              </span>
            )}
            {/* The Animated Bar */}
            <div
              className="bar w-full max-w-[36px] rounded-t-[6px]"
              style={{
                height: `${item.pct}%`,
                background: item.isTallest ? '#16a34a' : 'rgba(46, 202, 139, 0.45)',
                // @ts-expect-error CSS variable
                '--i': index,
              }}
            />
            {/* Month label */}
            <span className="text-[11px] font-semibold text-[#6b7a72] mt-2 font-mono">
              {item.month}
            </span>
          </div>
        ))}
      </div>

      {/* Footer scale line */}
      <div className="flex items-center justify-between text-[10px] text-[#6b7a72] mt-3">
        <span>Target SLA: 95.0%</span>
        <span className="font-mono text-[#15803d] font-bold">100% Biometric Verified</span>
      </div>
    </div>
  );
};
