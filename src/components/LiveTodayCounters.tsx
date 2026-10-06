import React, { useState, useEffect } from 'react';

// Configuration object: easily customize daily institutional starting averages
export const STARTING_DAILY_METRICS = {
  attendance: 18432,
  alerts: 3218,
  feesThousands: 642, // Displays as ₹642K
};

export const LiveTodayCounters: React.FC = () => {
  const [metrics, setMetrics] = useState(STARTING_DAILY_METRICS);

  useEffect(() => {
    // Respect reduced motion: skip intervals and preserve static values
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setMetrics((prev) => ({
        attendance: prev.attendance + Math.floor(Math.random() * 7) + 1, // +1..7
        alerts: prev.alerts + Math.floor(Math.random() * 3) + 1,        // +1..3
        feesThousands: prev.feesThousands + (Math.random() > 0.6 ? 1 : 0), // periodic +1K
      }));
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      {/* Label row: pulsing green dot + text */}
      <div className="flex items-center justify-center gap-2 mb-3.5">
        <span className="live-dot" aria-hidden="true" />
        <span 
          className="uppercase text-[#6b7a72] font-bold"
          style={{ fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700 }}
        >
          Across Edu-Mojo Schools Today
        </span>
      </div>

      {/* 3 cells row (stack on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
        {/* Cell 1: Attendance */}
        <div 
          className="p-[14px_18px] rounded-[12px] transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(11, 31, 20, 0.09)',
          }}
        >
          <div 
            className="text-[#0b1f14] font-extrabold leading-tight"
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {metrics.attendance.toLocaleString('en-IN')}
          </div>
          <div className="text-[12px] text-[#6b7a72] mt-1 font-medium">
            Attendance marks recorded
          </div>
        </div>

        {/* Cell 2: WhatsApp alerts */}
        <div 
          className="p-[14px_18px] rounded-[12px] transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(11, 31, 20, 0.09)',
          }}
        >
          <div 
            className="text-[#0b1f14] font-extrabold leading-tight"
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {metrics.alerts.toLocaleString('en-IN')}
          </div>
          <div className="text-[12px] text-[#6b7a72] mt-1 font-medium">
            WhatsApp alerts sent to parents
          </div>
        </div>

        {/* Cell 3: Fees collected */}
        <div 
          className="p-[14px_18px] rounded-[12px] transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(11, 31, 20, 0.09)',
          }}
        >
          <div 
            className="text-[#0b1f14] font-extrabold leading-tight"
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            ₹{metrics.feesThousands.toLocaleString('en-IN')}K
          </div>
          <div className="text-[12px] text-[#6b7a72] mt-1 font-medium">
            Fees collected online
          </div>
        </div>
      </div>
    </div>
  );
};
