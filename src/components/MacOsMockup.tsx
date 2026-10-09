import React, { useState } from 'react';

interface MacOsMockupProps {
  className?: string;
  onOpenLiveDemo?: () => void;
}

export const MacOsMockup: React.FC<MacOsMockupProps> = ({ className = '', onOpenLiveDemo }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <div className={`relative w-full mx-auto ${className}`}>
      {/* Floating Event Card 1: Left edge (~15% from top) */}
      <div 
        className="float-card top-[8%] sm:top-[15%] left-2 sm:-left-[40px] text-xs sm:text-sm py-1.5 sm:py-2.5 px-2.5 sm:px-3.5"
      >
        <div 
          className="ic text-[#15803d]"
          style={{ background: 'rgba(46, 202, 139, 0.16)' }}
        >
          <i className="ph-bold ph-check text-sm" />
        </div>
        <div>
          <span>Aarav marked present</span>
          <small>Class 7B · 8:02 AM</small>
        </div>
      </div>

      {/* Floating Event Card 2: Right edge (~40% from top) */}
      <div 
        className="float-card c2 top-[35%] sm:top-[40%] right-2 sm:-right-[40px] text-xs sm:text-sm py-1.5 sm:py-2.5 px-2.5 sm:px-3.5"
      >
        <div 
          className="ic text-[#c2410c]"
          style={{ background: 'rgba(241, 116, 37, 0.14)' }}
        >
          <i className="ph-bold ph-currency-inr text-sm" />
        </div>
        <div>
          <span>Fee received ₹12,500</span>
          <small>Receipt sent on WhatsApp</small>
        </div>
      </div>

      {/* Floating Event Card 3: Bottom-left, overlapping bottom edge */}
      <div 
        className="float-card c3 -bottom-[16px] sm:-bottom-[20px] left-4 sm:left-[36px] text-xs sm:text-sm py-1.5 sm:py-2.5 px-2.5 sm:px-3.5"
      >
        <div 
          className="ic text-[#15803d]"
          style={{ background: 'rgba(46, 202, 139, 0.16)' }}
        >
          <i className="ph-bold ph-arrows-clockwise text-sm" />
        </div>
        <div>
          <span>Timetable clash fixed</span>
          <small>Mr. Rao · Period 3</small>
        </div>
      </div>

      {/* macOS Window Frame */}
      <div 
        className="w-full rounded-[14px] bg-[#ffffff] overflow-hidden select-none transition-all duration-300 relative z-10"
        style={{
          border: '1px solid rgba(11, 31, 20, 0.08)',
          boxShadow: '0 40px 100px -20px rgba(11, 31, 20, 0.25), 0 0 0 1px rgba(11, 31, 20, 0.04)',
        }}
      >
      {/* Title bar: padding 14px 18px, background #f4f6f5, border-bottom 1px solid rgba(11,31,20,.06) */}
      <div 
        className="px-[18px] py-[14px] flex items-center justify-between"
        style={{
          background: '#f4f6f5',
          borderBottom: '1px solid rgba(11, 31, 20, 0.06)',
        }}
      >
        {/* Three 12px dots: #ff5f57 #ffbd2e #28c840 */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Centred title "EduMojo · Management Dashboard" in #6b7a72, 13px */}
        <div className="text-[13px] font-semibold text-[#6b7a72] flex items-center gap-2 font-mono">
          <img src="/edumojo-transparent-logo.png" alt="EduMojo" className="h-4.5 w-auto object-contain" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
          <span>Management Dashboard</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={triggerRefresh}
            className="p-1 rounded text-[#6b7a72] hover:text-[#0b1f14] transition-colors cursor-pointer"
            title="Refresh ERP metrics"
            aria-label="Refresh metrics"
          >
            <i className={`ph-bold ph-arrows-clockwise text-sm ${isRefreshing ? 'animate-spin text-[#16a34a]' : ''}`} />
          </button>
          
          <button
            type="button"
            onClick={onOpenLiveDemo}
            className="text-[11px] font-semibold text-[#15803d] hover:text-[#0b1f14] bg-[#2eca8b]/15 hover:bg-[#2eca8b]/25 px-2.5 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Live Interactive Demo</span>
            <i className="ph-bold ph-arrow-square-out text-xs" />
          </button>
        </div>
      </div>

      {/* Real Dashboard Body Canvas */}
      <div className="p-3 sm:p-5 bg-[#edf1f5] text-slate-800 space-y-4 font-sans select-none">
        
        {/* Top Dark Teal Banner matching exact screenshot */}
        <div className="rounded-lg bg-[#00485c] px-5 py-4 text-white flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-md">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#7dd3fc]">
              DASHBOARD
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
              Operations Overview
            </h3>
            <p className="text-xs text-[#d1ecf1] mt-0.5 max-w-xl">
              Monitor setup completeness, people coverage, usage recency, transport load, and fee health from one place.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <div className="text-[9px] uppercase tracking-wider text-white/60 font-semibold">
              LAST REFRESHED
            </div>
            <div className="text-xs font-bold font-mono text-white mt-0.5">
              30 Sep 2026, 12:04 PM
            </div>
          </div>
        </div>

        {/* Stat Cards Row matching exact screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {/* Card 1: ACTIVE STUDENTS */}
          <div className="bg-white rounded-lg p-2.5 sm:p-3 border-t-[3.5px] border-t-[#008080] shadow-xs border border-slate-200 flex flex-col justify-between min-w-0 overflow-hidden">
            <div className="min-w-0">
              <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 truncate">
                ACTIVE STUDENTS
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight mt-1 truncate">
                2,169
              </div>
            </div>
            <div className="text-[8px] text-slate-400 truncate mt-2">
              Student Dashboard cache updated 30 Sep 2026, 12:04 PM
            </div>
          </div>

          {/* Card 2: TEACHERS */}
          <div className="bg-white rounded-lg p-2.5 sm:p-3 border-t-[3.5px] border-t-[#1e3a8a] shadow-xs border border-slate-200 flex flex-col justify-between min-w-0 overflow-hidden">
            <div className="min-w-0">
              <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 truncate">
                TEACHERS
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight mt-1 truncate">
                158
              </div>
            </div>
            <div className="text-[8px] text-slate-400 truncate mt-2">
              Current active teacher count
            </div>
          </div>

          {/* Card 3: PARENTS */}
          <div className="bg-white rounded-lg p-2.5 sm:p-3 border-t-[3.5px] border-t-[#ea580c] shadow-xs border border-slate-200 flex flex-col justify-between min-w-0 overflow-hidden">
            <div className="min-w-0">
              <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 truncate">
                PARENTS
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight mt-1 truncate">
                5,199
              </div>
            </div>
            <div className="text-[8px] text-slate-400 truncate mt-2">
              Active parent accounts in the institution
            </div>
          </div>

          {/* Card 4: 2026-27 ASSIGNED */}
          <div className="bg-white rounded-lg p-2.5 sm:p-3 border-t-[3.5px] border-t-[#2563eb] shadow-xs border border-slate-200 flex flex-col justify-between min-w-0 overflow-hidden">
            <div className="min-w-0">
              <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 truncate">
                2026-27 ASSIGNED
              </div>
              <div 
                className="text-[11.5px] sm:text-[11px] md:text-[12px] lg:text-[10.5px] xl:text-[12.5px] 2xl:text-[13.5px] font-black text-slate-900 font-sans tracking-tighter mt-1 whitespace-nowrap overflow-hidden text-ellipsis leading-tight"
                title="49,07,87,016.92"
              >
                49,07,87,016.92
              </div>
            </div>
            <div className="text-[8px] text-slate-400 truncate mt-2">
              Total fee assigned in the current fee year
            </div>
          </div>

          {/* Card 5: 2026-27 PAID */}
          <div className="bg-white rounded-lg p-2.5 sm:p-3 border-t-[3.5px] border-t-[#16a34a] shadow-xs border border-slate-200 flex flex-col justify-between min-w-0 overflow-hidden">
            <div className="min-w-0">
              <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 truncate">
                2026-27 PAID
              </div>
              <div 
                className="text-[11.5px] sm:text-[11px] md:text-[12px] lg:text-[10.5px] xl:text-[12.5px] 2xl:text-[13.5px] font-black text-slate-900 font-sans tracking-tighter mt-1 whitespace-nowrap overflow-hidden text-ellipsis leading-tight"
                title="38,60,96,224.56"
              >
                38,60,96,224.56
              </div>
            </div>
            <div className="text-[8px] text-slate-400 truncate mt-2">
              Fees collected in the current fee year
            </div>
          </div>

          {/* Card 6: 2026-27 OVERDUE */}
          <div className="bg-white rounded-lg p-2.5 sm:p-3 border-t-[3.5px] border-t-[#dc2626] shadow-xs border border-slate-200 flex flex-col justify-between min-w-0 overflow-hidden">
            <div className="min-w-0">
              <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 truncate">
                2026-27 OVERDUE
              </div>
              <div 
                className="text-[11.5px] sm:text-[11px] md:text-[12px] lg:text-[10.5px] xl:text-[12.5px] 2xl:text-[13.5px] font-black text-slate-900 font-sans tracking-tighter mt-1 whitespace-nowrap overflow-hidden text-ellipsis leading-tight"
                title="1,01,11,242.42"
              >
                1,01,11,242.42
              </div>
            </div>
            <div className="text-[8px] text-slate-400 truncate mt-2">
              Outstanding demanded amount in the current fee year
            </div>
          </div>
        </div>

        {/* Card 7: FLAGGED PARENTS */}
        <div className="w-full sm:w-60 bg-white rounded-lg p-3.5 border-t-[3.5px] border-t-[#f97316] shadow-xs border border-slate-200">
          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            FLAGGED PARENTS
          </div>
          <div className="text-2xl font-black text-slate-900 font-sans tracking-tight mt-0.5">
            4
          </div>
          <div className="text-[8px] text-slate-400 mt-1">
            Parents with more than 3 children
          </div>
        </div>

        {/* Section: Visual Snapshot */}
        <div className="pt-2">
          <div className="text-xs font-bold text-slate-900 mb-0.5">
            Visual Snapshot
          </div>
          <p className="text-[10px] text-slate-500 mb-3">
            Charts surface the shape of the data while the raw metrics remain available below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Student Dashboard Counts Donut Chart */}
            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Student Dashboard Counts</div>
                <div className="text-[9px] text-slate-400 mt-0.5">
                  Current-year student figures from the same cache as Student Dashboard.
                </div>
              </div>

              {/* Legend & Donut Chart */}
              <div className="py-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90">
                    <circle
                      cx="21"
                      cy="21"
                      r="15.9155"
                      fill="transparent"
                      stroke="#0d4a5c"
                      strokeWidth="6"
                      strokeDasharray="85 15"
                      strokeDashoffset="25"
                    />
                    <circle
                      cx="21"
                      cy="21"
                      r="15.9155"
                      fill="transparent"
                      stroke="#227085"
                      strokeWidth="6"
                      strokeDasharray="15 85"
                      strokeDashoffset="-60"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-black text-slate-800">2,169</span>
                    <span className="text-[8px] text-slate-400 uppercase font-bold">Students</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-[10px] text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-2 bg-[#0d4a5c] rounded-2xs inline-block" />
                    <span>Current students (1,844)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-2 bg-[#227085] rounded-2xs inline-block" />
                    <span>New admissions (325)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* People Footprint Bar Chart */}
            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">People Footprint</div>
                <div className="text-[9px] text-slate-400 mt-0.5">
                  The scale of active students, teachers, and parents.
                </div>
              </div>

              <div className="pt-2">
                <div className="flex text-[8px] text-slate-400 justify-end mb-1">
                  <span>Max Scale: 6,000</span>
                </div>
                
                <div className="h-32 flex items-end justify-around gap-4 px-6 border-b border-l border-slate-200 pb-1">
                  <div className="flex flex-col items-center gap-1 h-full justify-end flex-1 max-w-[80px]">
                    <span className="text-[8px] font-mono text-slate-500 font-bold">2,169</span>
                    <div className="w-full bg-[#7ca6b2] hover:bg-[#6b98a5] transition-colors rounded-t-xs" style={{ height: '36%' }} />
                    <span className="text-[9px] text-slate-500 mt-1">Students</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 h-full justify-end flex-1 max-w-[80px]">
                    <span className="text-[8px] font-mono text-slate-500 font-bold">158</span>
                    <div className="w-full bg-[#7ca6b2] hover:bg-[#6b98a5] transition-colors rounded-t-xs" style={{ height: '6%' }} />
                    <span className="text-[9px] text-slate-500 mt-1">Teachers</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 h-full justify-end flex-1 max-w-[80px]">
                    <span className="text-[8px] font-mono text-slate-500 font-bold">5,199</span>
                    <div className="w-full bg-[#7ca6b2] hover:bg-[#6b98a5] transition-colors rounded-t-xs" style={{ height: '86%' }} />
                    <span className="text-[9px] text-slate-500 mt-1">Parents</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Setup Coverage Horizontal Bar Chart */}
          <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-xs mt-4">
            <div className="text-xs font-bold text-slate-900">Setup Coverage</div>
            <div className="text-[9px] text-slate-400 mt-0.5 mb-3">
              Counts for the key setup entities already configured.
            </div>

            <div className="space-y-3 text-[10px]">
              <div>
                <div className="flex justify-between text-slate-600 mb-1">
                  <span>Subjects Count</span>
                  <span className="font-mono font-bold text-slate-900">88</span>
                </div>
                <div className="w-full bg-slate-100 h-4 rounded-xs overflow-hidden border border-slate-200/60">
                  <div className="bg-[#94a8b3] h-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-600 mb-1">
                  <span>Divisions Count</span>
                  <span className="font-mono font-bold text-slate-900">68</span>
                </div>
                <div className="w-full bg-slate-100 h-4 rounded-xs overflow-hidden border border-slate-200/60">
                  <div className="bg-[#94a8b3] h-full" style={{ width: '68%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-600 mb-1">
                  <span>Grades Count</span>
                  <span className="font-mono font-bold text-slate-900">15</span>
                </div>
                <div className="w-full bg-slate-100 h-4 rounded-xs overflow-hidden border border-slate-200/60">
                  <div className="bg-[#94a8b3] h-full" style={{ width: '15%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-600 mb-1">
                  <span>Transaction Types Count</span>
                  <span className="font-mono font-bold text-slate-900">9</span>
                </div>
                <div className="w-full bg-slate-100 h-4 rounded-xs overflow-hidden border border-slate-200/60">
                  <div className="bg-[#94a8b3] h-full" style={{ width: '9%' }} />
                </div>
              </div>

              <div className="flex justify-between text-[8px] text-slate-400 font-mono pt-1">
                <span>0</span>
                <span>10</span>
                <span>20</span>
                <span>30</span>
                <span>40</span>
                <span>50</span>
                <span>60</span>
                <span>70</span>
                <span>80</span>
                <span>90</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};
