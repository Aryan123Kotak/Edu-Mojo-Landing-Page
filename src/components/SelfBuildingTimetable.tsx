import React, { useState, useEffect, useRef } from 'react';

interface SubjectInfo {
  code: string;
  name: string;
  bg: string;
  text: string;
}

const SUBJECT_MAP: Record<string, SubjectInfo> = {
  M: { code: 'M', name: 'Maths', bg: '#dcfce7', text: '#15803d' },
  E: { code: 'E', name: 'English', bg: '#e0f2fe', text: '#0369a1' },
  S: { code: 'S', name: 'Science', bg: '#fef3c7', text: '#b45309' },
  H: { code: 'H', name: 'Hindi', bg: '#fce7f3', text: '#be185d' },
  G: { code: 'G', name: 'Geography', bg: '#ede9fe', text: '#6d28d9' },
  P: { code: 'P', name: 'PE', bg: '#f1f5f9', text: '#475569' },
};

// 4 periods x 5 days = 20 slots
// P1: M E S H G
// P2: E M S P H
// P3: S G M E M
// P4: H S E M P
const TIMETABLE_SLOTS = [
  'M', 'E', 'S', 'H', 'G', // P1: 0..4
  'E', 'M', 'S', 'P', 'H', // P2: 5..9
  'S', 'G', 'M', 'E', 'M', // P3: 10..14 (Index 12 is 13th slot, Wed P3)
  'H', 'S', 'E', 'M', 'P', // P4: 15..19
];

export const SelfBuildingTimetable: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [filledCount, setFilledCount] = useState(0);
  const [isClashResolved, setIsClashResolved] = useState(false);
  const [pillStatus, setPillStatus] = useState<{
    text: string;
    bg: string;
    color: string;
  }>({
    text: 'Auto-scheduling…',
    bg: 'rgba(46, 202, 139, 0.14)',
    color: '#15803d',
  });

  // Observe scroll entry
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animation cycle
  useEffect(() => {
    if (!isInView) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setFilledCount(20);
      setIsClashResolved(true);
      setPillStatus({
        text: 'Conflict resolved · 0 clashes',
        bg: 'rgba(46, 202, 139, 0.16)',
        color: '#15803d',
      });
      return;
    }

    let isMounted = true;
    let timer: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      if (!isMounted) return;

      // 1. Reset
      setFilledCount(0);
      setIsClashResolved(false);
      setPillStatus({
        text: 'Auto-scheduling…',
        bg: 'rgba(46, 202, 139, 0.14)',
        color: '#15803d',
      });

      // 2. Fill slots every 110ms
      let current = 0;
      const fillInterval = setInterval(() => {
        if (!isMounted) {
          clearInterval(fillInterval);
          return;
        }

        current++;
        setFilledCount(current);

        // 3. At 13th slot (index 12), show Clash
        if (current === 13) {
          setPillStatus({
            text: 'Clash: Mr. Rao, P3',
            bg: 'rgba(241, 116, 37, 0.16)',
            color: '#c2410c',
          });
        }

        // When all 20 filled
        if (current >= 20) {
          clearInterval(fillInterval);

          // 4. 0.7s after last slot fills, clash resolved to Maths
          timer = setTimeout(() => {
            if (!isMounted) return;
            setIsClashResolved(true);
            setPillStatus({
              text: 'Conflict resolved · 0 clashes',
              bg: 'rgba(46, 202, 139, 0.16)',
              color: '#15803d',
            });

            // 5. Wait 3.5s, then restart loop
            timer = setTimeout(() => {
              if (isMounted) runCycle();
            }, 3500);
          }, 700);
        }
      }, 110);
    };

    runCycle();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="bg-white p-5 sm:p-7 rounded-[16px] transition-all duration-300 font-sans"
      style={{
        border: '1px solid rgba(11, 31, 20, 0.08)',
        boxShadow: '0 20px 40px rgba(11, 31, 20, 0.06)',
      }}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(11,31,20,0.06)] mb-4">
        <div>
          <h4 className="text-sm font-bold text-[#0b1f14]">Class 7B · Week timetable</h4>
          <span className="text-[11px] text-[#6b7a72]">AI Rule-Engine Optimization</span>
        </div>

        {/* Dynamic Status Pill */}
        <div
          className="text-[11px] font-bold px-3 py-1 rounded-full transition-all duration-300 font-mono"
          style={{
            background: pillStatus.bg,
            color: pillStatus.color,
          }}
        >
          {pillStatus.text}
        </div>
      </div>

      {/* Weekday Columns Header */}
      <div className="grid grid-cols-6 gap-2 mb-2 text-center text-[11px] font-bold text-[#6b7a72] uppercase tracking-wider">
        <div className="text-left pl-1">Period</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
      </div>

      {/* 4 Rows (P1–P4) with Mon–Fri (5 columns) */}
      <div className="space-y-2">
        {['P1', 'P2', 'P3', 'P4'].map((period, rIdx) => (
          <div key={period} className="grid grid-cols-6 gap-2 items-center">
            {/* Period Label */}
            <div className="text-xs font-mono font-bold text-[#6b7a72] pl-1">
              {period}
            </div>

            {/* 5 Days */}
            {[0, 1, 2, 3, 4].map((cIdx) => {
              const slotIndex = rIdx * 5 + cIdx;
              const isFilled = slotIndex < filledCount;
              const subjectKey = TIMETABLE_SLOTS[slotIndex];
              const subject = SUBJECT_MAP[subjectKey];

              // Slot 12 is the 13th slot: Clash until resolved
              const isClashSlot = slotIndex === 12;
              const showClash = isClashSlot && !isClashResolved;

              return (
                <div
                  key={cIdx}
                  className="h-10 rounded-[8px] flex items-center justify-center text-xs font-bold transition-all select-none"
                  style={{
                    border: isFilled
                      ? showClash
                        ? '1px solid rgba(241, 116, 37, 0.6)'
                        : 'none'
                      : '1px dashed rgba(11, 31, 20, 0.09)',
                    background: isFilled
                      ? showClash
                        ? 'rgba(241, 116, 37, 0.16)'
                        : subject.bg
                      : 'transparent',
                    color: isFilled
                      ? showClash
                        ? '#c2410c'
                        : subject.text
                      : 'transparent',
                  }}
                >
                  {isFilled && (
                    <span className="slot-snap">
                      {showClash ? 'Clash' : subject.name}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Caption footer */}
      <div className="pt-4 mt-4 border-t border-[rgba(11,31,20,0.06)] flex items-center justify-between text-[11px] text-[#6b7a72]">
        <span>Teacher Availability: 100% Match</span>
        <span className="font-mono text-[#15803d] font-bold">Physics & Chemistry Labs Assigned</span>
      </div>
    </div>
  );
};
