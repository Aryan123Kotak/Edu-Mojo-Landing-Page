import React, { useState, useEffect, useRef } from 'react';
import {
  HugeIcon,
  UserCheck01Icon,
  Wallet01Icon,
  Calendar01Icon,
  DiplomaIcon,
  Analytics01Icon,
  Megaphone01Icon,
  ArrowRight01Icon,
  SparkleIcon,
} from './HugeIcon';

interface FeatureModule {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  metrics: { label: string; value: string }[];
  highlightColor: string;
  icon: any;
}

const MODULES: FeatureModule[] = [
  {
    id: 'attendance',
    tabLabel: 'Attendance',
    title: 'Automated RFID & Biometric Attendance',
    description: 'Instant student gate check-in with synchronized WhatsApp parent alerts and truancy detection.',
    image: '/images/modules/attendance.png',
    badge: 'Hardware Agnostic',
    metrics: [
      { label: 'Check-in Sync', value: '< 1.2s' },
      { label: 'Parent Delivery', value: '100%' },
      { label: 'Daily Accuracy', value: '99.9%' },
    ],
    highlightColor: '#16a34a',
    icon: UserCheck01Icon,
  },
  {
    id: 'fees',
    tabLabel: 'Fees',
    title: 'Automated Invoicing & Bank Reconciliation',
    description: 'Direct WhatsApp fee links, instantaneous payment receipts, and seamless multi-bank ledger settlement.',
    image: '/images/modules/fees.png',
    badge: 'Zero Manual Audit',
    metrics: [
      { label: 'Fee Collection SLA', value: '24/7' },
      { label: 'Payment Gateway', value: 'UPI / Cards' },
      { label: 'Receipt Automation', value: 'Instant' },
    ],
    highlightColor: '#15803d',
    icon: Wallet01Icon,
  },
  {
    id: 'timetable',
    tabLabel: 'Timetable',
    title: 'AI Conflict-Free Timetable Generator',
    description: 'Satisfies 100% of subject sequences, faculty availability, and laboratory room allocations automatically.',
    image: '/images/modules/timetable.png',
    badge: 'Algorithmic Optimization',
    metrics: [
      { label: 'Clash Rate', value: '0.00%' },
      { label: 'Substitute Handling', value: 'Auto' },
      { label: 'Time Saved / Term', value: '40+ hrs' },
    ],
    highlightColor: '#2eca8b',
    icon: Calendar01Icon,
  },
  {
    id: 'exams',
    tabLabel: 'Exams',
    title: 'Standardized Exam & Gradebook Management',
    description: 'Complete CBSE, ICSE, and IB grading rubrics with one-click automated student report cards.',
    image: '/images/modules/exams.png',
    badge: 'Board Compliant',
    metrics: [
      { label: 'Grading Scales', value: 'CBSE / ICSE / IB' },
      { label: 'Report Generation', value: '1-Click PDF' },
      { label: 'Teacher Burden', value: '-80%' },
    ],
    highlightColor: '#16a34a',
    icon: DiplomaIcon,
  },
  {
    id: 'analytics',
    tabLabel: 'Analytics',
    title: 'Predictive Academic & Operational Analytics',
    description: 'Identifies at-risk academic trends and forecasts board exam readiness across class divisions.',
    image: '/images/modules/analytics.png',
    badge: 'Executive Visibility',
    metrics: [
      { label: 'Forecast Accuracy', value: '96.4%' },
      { label: 'Intervention Alerts', value: 'Real-Time' },
      { label: 'Data Points Analyzed', value: '10M+' },
    ],
    highlightColor: '#0284c7',
    icon: Analytics01Icon,
  },
  {
    id: 'communication',
    tabLabel: 'Communication',
    title: 'Multi-Channel WhatsApp & Mobile Announcements',
    description: 'Direct institutional messaging, emergency school circulars, and live bus GPS parent notifications.',
    image: '/images/modules/communication.png',
    badge: 'Parent Trust',
    metrics: [
      { label: 'Read Rate', value: '98.5%' },
      { label: 'Cost vs SMS', value: '-65%' },
      { label: 'Media Support', value: 'PDF & Images' },
    ],
    highlightColor: '#16a34a',
    icon: Megaphone01Icon,
  },
];

interface AutoFeatureTabsProps {
  onLearnMore?: () => void;
}

export const AutoFeatureTabs: React.FC<AutoFeatureTabsProps> = ({ onLearnMore }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [keyReset, setKeyReset] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || isHovered) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % MODULES.length);
      setKeyReset((k) => k + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex, isHovered]);

  const handleSelectTab = (index: number) => {
    setActiveIndex(index);
    setKeyReset((k) => k + 1);
  };

  const current = MODULES[activeIndex];

  return (
    <div className="page-container mt-16 font-sans">
      {/* Row of pill tabs */}
      <div 
        role="tablist"
        aria-label="Edu-Mojo Core Modules"
        className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8"
      >
        {MODULES.map((mod, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={mod.id}
              role="tab"
              id={`tab-${mod.id}`}
              aria-controls={`panel-${mod.id}`}
              aria-selected={isActive}
              type="button"
              onClick={() => handleSelectTab(idx)}
              className={`tab ${isActive ? 'on' : ''}`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {mod.tabLabel}
              </span>
              {isActive && (
                <span 
                  key={`prog-${idx}-${keyReset}`}
                  className="prog"
                  aria-hidden="true" 
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Large White Panel */}
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="panel swap bg-white rounded-[16px] overflow-hidden transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-10"
        style={{
          border: '1px solid rgba(11, 31, 20, 0.09)',
          boxShadow: '0 30px 60px -30px rgba(11, 31, 20, 0.3)',
        }}
      >
        {/* Left Column: Module Information */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#15803d] uppercase tracking-wider bg-[rgba(46,202,139,0.12)] px-3 py-1 rounded-full">
            <HugeIcon icon={current.icon} size={16} />
            <span>{current.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b1f14] tracking-tight leading-snug">
            {current.title}
          </h3>

          <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed">
            {current.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[rgba(11,31,20,0.06)]">
            {current.metrics.map((m, i) => (
              <div key={i} className="space-y-0.5">
                <div className="text-base sm:text-lg font-black font-mono text-[#0b1f14]">
                  {m.value}
                </div>
                <div className="text-[11px] text-[#6b7a72] font-medium leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#15803d] hover:text-[#0b1f14] group cursor-pointer"
            >
              <span>Explore all capabilities of this module</span>
              <HugeIcon icon={ArrowRight01Icon} size={16} className="text-[#16a34a] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Module Screenshot & UI Canvas */}
        <div className="lg:col-span-6 flex justify-center">
          <div 
            className="w-full bg-[#f7faf8] rounded-2xl border border-[rgba(11,31,20,0.08)] p-4 sm:p-6 shadow-xs relative overflow-hidden group"
          >
            {/* Window header */}
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(11,31,20,0.06)] mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[10px] font-mono text-[#6b7a72] font-semibold">
                app.edu-mojo.com/{current.id}
              </span>
            </div>

            {/* Visual Screen Canvas */}
            <div className="bg-white rounded-xl p-5 border border-[rgba(11,31,20,0.06)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(46,202,139,0.14)] text-[#15803d] flex items-center justify-center font-bold">
                    {current.tabLabel[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0b1f14]">{current.tabLabel} Controller</div>
                    <div className="text-[10px] text-[#6b7a72]">Automated Institutional Gateway</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-[#15803d]">
                  LIVE SYNC
                </span>
              </div>

              {/* Dynamic simulation rows */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#f7faf8] border border-slate-200/60 flex items-center justify-between">
                  <span className="text-[#3f4b45] font-medium">Batch Operations (Grade 1 - 12)</span>
                  <span className="text-[#16a34a] font-bold font-mono">100% OK</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#f7faf8] border border-slate-200/60 flex items-center justify-between">
                  <span className="text-[#3f4b45] font-medium">Cloud DB Sync & Encryption</span>
                  <span className="text-[#15803d] font-bold font-mono">AES-256</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#f7faf8] border border-slate-200/60 flex items-center justify-between">
                  <span className="text-[#3f4b45] font-medium">Parent & Staff App Push</span>
                  <span className="text-[#16a34a] font-bold font-mono">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Real Screenshot link fallback tag */}
            <div className="text-[9px] text-[#6b7a72] text-center mt-3 font-mono">
              Screenshot source: {current.image}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
