import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { OnePlatformTabs } from './OnePlatformTabs';
import { SelfBuildingTimetable } from './SelfBuildingTimetable';
import { ComparisonTable } from './ComparisonTable';
interface UnifiedPlatformSectionProps {
  onBookDemo: () => void;
  onGetQuote: () => void;
}

const TABS = [
  {
    id: 'teacher-apps',
    href: '#teacher-apps',
    label: 'Teacher apps',
    phIcon: 'ph-chalkboard-teacher',
    eyebrow: 'Everything a teacher needs, without switching between apps',
  },
  {
    id: 'modules',
    href: '#modules',
    label: '24 modules',
    phIcon: 'ph-buildings',
    eyebrow: 'Everything your school needs, without the complexity',
  },
  {
    id: 'timetable',
    href: '#timetable',
    label: 'Timetable',
    phIcon: 'ph-calendar',
    eyebrow: 'Timetables without the weekend spent rebuilding them',
  },
  {
    id: 'who',
    href: '#who',
    label: 'Who it helps',
    phIcon: 'ph-users',
    eyebrow: 'Less work for teachers. Better visibility for everyone else.',
  },
  {
    id: 'simple-affordable',
    href: '#simple-affordable',
    label: 'Pricing',
    phIcon: 'ph-currency-inr',
    eyebrow: 'Easy for every teacher. Affordable for every school.',
  },
  {
    id: 'compare',
    href: '#compare',
    label: 'Compare',
    phIcon: 'ph-scales',
    eyebrow: "Built to save teachers' time, not to add more screens",
  },
  {
    id: 'support',
    href: '#support',
    label: 'Training & support',
    phIcon: 'ph-headset',
    eyebrow: 'We train every teacher, so nobody is left behind',
  },
];

export const UnifiedPlatformSection: React.FC<UnifiedPlatformSectionProps> = ({ 
  onGetQuote 
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (e: React.MouseEvent, idx: number, targetId: string) => {
    e.preventDefault();
    setActiveTab(idx);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleNextTab = () => {
    setActiveTab((prev) => (prev + 1) % TABS.length);
  };

  const handlePrevTab = () => {
    setActiveTab((prev) => (prev - 1 + TABS.length) % TABS.length);
  };

  // Sync hash changes if user navigated by hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const foundIdx = TABS.findIndex((t) => t.id === hash);
      if (foundIdx !== -1) {
        setActiveTab(foundIdx);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section 
      id="one-simple-app" 
      className="py-12 sm:py-16 bg-[#f7faf8] border-b border-[rgba(11,31,20,0.06)] relative overflow-hidden"
    >
      <div className="page-container space-y-6 sm:space-y-8">

        {/* Compact Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[rgba(11,31,20,0.06)] pb-5">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight">
                Complete Platform Console
              </h2>
              <p className="text-xs sm:text-sm text-[#4b5563]">
                {TABS[activeTab].eyebrow}
              </p>
            </div>

            {/* Step Controls */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
              <span className="text-xs font-mono font-bold text-[#6b7a72] bg-white px-3 py-1.5 rounded-full border border-[rgba(11,31,20,0.08)] shadow-2xs">
                {activeTab + 1} / {TABS.length} · {TABS[activeTab].label}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevTab}
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#f0fdf4] text-[#0b1f14] hover:text-[#16a34a] border border-[rgba(11,31,20,0.09)] shadow-xs flex items-center justify-center transition-all duration-200 cursor-pointer"
                  aria-label="Previous tab"
                >
                  <i className="ph-bold ph-arrow-left text-sm" />
                </button>
                <button
                  type="button"
                  onClick={handleNextTab}
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#f0fdf4] text-[#0b1f14] hover:text-[#16a34a] border border-[rgba(11,31,20,0.09)] shadow-xs flex items-center justify-center transition-all duration-200 cursor-pointer"
                  aria-label="Next tab"
                >
                  <i className="ph-bold ph-arrow-right text-sm" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ==================================================
            3. THE SECTION TAB BAR (.sec-tabs)
            ================================================== */}
        <nav className="sec-tabs" aria-label="On this page">
          {TABS.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => handleTabClick(e, idx, tab.id)}
                className={`sec-tab ${isActive ? 'is-active' : ''}`}
              >
                <span className="w-5 h-5 flex items-center justify-center shrink-0">
                  <i className={`ph-bold ${tab.phIcon} text-base ${isActive ? 'text-[#16a34a]' : 'text-slate-500'}`} />
                </span>
                <span>{tab.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Main Sleek Workspace Card */}
        <div className="bg-white rounded-3xl sm:rounded-[32px] border border-[rgba(11,31,20,0.08)] shadow-[0_20px_50px_-15px_rgba(11,31,20,0.07)] p-4 sm:p-7 lg:p-8 transition-all duration-300">
          
          {/* ==================================================
              TAB 0: TEACHER APPS
              ================================================== */}
          {activeTab === 0 && (
            <div id="teacher-apps" className="animate-in fade-in duration-300 space-y-4">
              <div className="text-center sm:text-left mb-2">
                <p className="text-xs sm:text-sm text-[#4b5563] mt-0.5">
                  Attendance, homework, marks, timetables and parent messages live in one place, with one login.
                </p>
              </div>
              <OnePlatformTabs />
            </div>
          )}

          {/* ==================================================
              TAB 1: 24+ MODULES SUITE
              ================================================== */}
          {activeTab === 1 && (
            <div id="modules" className="animate-in fade-in duration-300 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(11,31,20,0.06)] pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#0b1f14]">
                    24+ Modules, One Simple App
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4b5563] mt-0.5">
                    Start with what your teachers need most. Admissions, fees, transport, library and hostel are there when you are ready.
                  </p>
                </div>
              </div>

              {/* Module cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    phIcon: 'ph-user-check',
                    title: 'Attendance & Parent Alerts',
                    desc: 'One-tap attendance with automatic alerts to parents.',
                  },
                  {
                    phIcon: 'ph-notebook',
                    title: 'Homework & E-Learning',
                    desc: 'Assignments, homework and learning materials, shared once for the whole class.',
                  },
                  {
                    phIcon: 'ph-certificate',
                    title: 'Marks & Report Cards',
                    desc: 'Enter marks once and generate report cards for every student.',
                  },
                  {
                    phIcon: 'ph-calendar',
                    title: 'Timetable & Substitutions',
                    desc: 'Class timetables and teacher allocation, updated for everyone at once.',
                  },
                  {
                    phIcon: 'ph-wallet',
                    title: 'Fees & Payment Links',
                    desc: 'Receipts, reminders and payment links, so fee follow-ups never land on teachers.',
                  },
                  {
                    phIcon: 'ph-sparkle',
                    title: 'Smart Assistant',
                    desc: 'Ask for an attendance summary or report and get it in one click.',
                  },
                ].map((mod, idx) => (
                  <div 
                    key={idx}
                    className="card bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.06)] hover:border-[#2eca8b]/50 hover:bg-white transition-all duration-200 shadow-2xs group hover:-translate-y-0.5"
                  >
                    <div className="mb-3.5">
                      <span className="ic">
                        <i className={`ph-bold ${mod.phIcon}`} />
                      </span>
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1 tracking-tight">
                      {mod.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Included Tag Pill Cloud */}
              <div className="p-4 rounded-2xl bg-[#f0fdf4]/70 border border-[#2eca8b]/20 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <span className="font-extrabold text-[#15803d] uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                    <i className="ph-bold ph-check text-xs" />
                  </span>
                  Also Included:
                </span>
                <p className="text-[#3f4b45] leading-relaxed">
                  Admissions &amp; CRM, Transport &amp; GPS Tracking, Library Management, Examination Management, Certificates &amp; Documents, Staff &amp; Payroll, Inventory &amp; Assets, Hostel, Visitor Pass, and Alumni Network.
                </p>
              </div>
            </div>
          )}

          {/* ==================================================
              TAB 2: TIMETABLE
              ================================================== */}
          {activeTab === 2 && (
            <div id="timetable" className="animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Column: Copy */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                      Timetables without the weekend spent rebuilding them
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                    Set up classes, subjects and teachers once. EduMojo builds class timetables, allocates teachers and shows clashes before the week begins.
                  </p>
                  <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#0b1f14] font-semibold">
                    <li className="flex items-center gap-2.5">
                      <span className="ic sm">
                        <i className="ph-bold ph-calendar" />
                      </span>
                      <span>Class and section timetables</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="ic sm">
                        <i className="ph-bold ph-chalkboard-teacher" />
                      </span>
                      <span>Teacher allocation with clash checks</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="ic sm">
                        <i className="ph-bold ph-device-mobile" />
                      </span>
                      <span>Updates visible on the teacher and parent app</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column: Embedded Timetable Mockup */}
                <div className="lg:col-span-7 flex justify-center">
                  <SelfBuildingTimetable />
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              TAB 3: WHO IT HELPS
              ================================================== */}
          {activeTab === 3 && (
            <div id="who" className="animate-in fade-in duration-300 space-y-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                  Less work for teachers. Better visibility for everyone else.
                </h3>
              </div>

              {/* 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* 1. Teachers */}
                <div className="card group bg-[#f7faf8] rounded-2xl p-6 border border-[rgba(11,31,20,0.08)] shadow-2xs hover:shadow-md hover:border-[#2eca8b]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="ic lg">
                        <i className="ph-bold ph-chalkboard-teacher" />
                      </span>
                    </div>
                    <h4 className="text-lg font-black text-[#0b1f14] mb-1.5 tracking-tight group-hover:text-[#15803d] transition-colors">
                      Teachers
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                      Up to 40% less routine work, so more time goes into teaching.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#2eca8b]/20 text-[11px] font-bold text-[#15803d] w-full">
                    Primary benefactors
                  </div>
                </div>

                {/* 2. Administrators */}
                <div className="card group bg-[#f7faf8] rounded-2xl p-6 border border-[rgba(11,31,20,0.08)] shadow-2xs hover:shadow-md hover:border-[#2eca8b]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="ic lg">
                        <i className="ph-bold ph-buildings" />
                      </span>
                    </div>
                    <h4 className="text-lg font-black text-[#0b1f14] mb-1.5 tracking-tight group-hover:text-[#15803d] transition-colors">
                      Administrators
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Admissions, fees and records handled in the same simple app.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[rgba(11,31,20,0.06)] text-[11px] font-bold text-[#6b7a72] w-full">
                    Operations unified
                  </div>
                </div>

                {/* 3. Parents */}
                <div className="card group bg-[#f7faf8] rounded-2xl p-6 border border-[rgba(11,31,20,0.08)] shadow-2xs hover:shadow-md hover:border-[#2eca8b]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="ic lg">
                        <i className="ph-bold ph-users" />
                      </span>
                    </div>
                    <h4 className="text-lg font-black text-[#0b1f14] mb-1.5 tracking-tight group-hover:text-[#15803d] transition-colors">
                      Parents
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Attendance, homework, fees and notices on their phone, without calling the school.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[rgba(11,31,20,0.06)] text-[11px] font-bold text-[#6b7a72] w-full">
                    Real-time transparency
                  </div>
                </div>

                {/* 4. Management */}
                <div className="card group bg-[#f7faf8] rounded-2xl p-6 border border-[rgba(11,31,20,0.08)] shadow-2xs hover:shadow-md hover:border-[#2eca8b]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="ic lg">
                        <i className="ph-bold ph-chart-line-up" />
                      </span>
                    </div>
                    <h4 className="text-lg font-black text-[#0b1f14] mb-1.5 tracking-tight group-hover:text-[#15803d] transition-colors">
                      Management
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Clear reports on attendance, results and fees, without asking anyone to compile them.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[rgba(11,31,20,0.06)] text-[11px] font-bold text-[#6b7a72] w-full">
                    Instant oversight
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              TAB 4: PRICING
              ================================================== */}
          {activeTab === 4 && (
            <div id="simple-affordable" className="animate-in fade-in duration-300 space-y-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                  Easy for every teacher. Affordable for every school.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Card 1 */}
                <div className="card group bg-[#f7faf8] rounded-2xl p-7 border border-[rgba(11,31,20,0.08)] flex flex-col items-center text-center justify-between hover:bg-white hover:border-[#2eca8b]/60 hover:shadow-md transition-all duration-300">
                  <div className="space-y-3 flex flex-col items-center">
                    <div className="mb-2">
                      <span className="ic lg">
                        <i className="ph-bold ph-device-mobile" />
                      </span>
                    </div>
                    <h4 className="text-xl font-black text-[#0b1f14] tracking-tight group-hover:text-[#15803d] transition-colors">
                      Simple from day one
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-sm">
                      Clean screens, simple steps and a mobile app teachers already know how to use. If your staff can use WhatsApp, they can use EduMojo.
                    </p>
                    <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#0b1f14] font-semibold text-left w-full">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                          <i className="ph-bold ph-check text-xs" />
                        </span>
                        <span>Everything in one login</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                          <i className="ph-bold ph-check text-xs" />
                        </span>
                        <span>Works on phone, tablet and computer</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                          <i className="ph-bold ph-check text-xs" />
                        </span>
                        <span>Training and onboarding for every teacher</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="card group bg-[#f7faf8] rounded-2xl p-7 border border-[rgba(11,31,20,0.08)] flex flex-col items-center text-center justify-between hover:bg-white hover:border-[#2eca8b]/60 hover:shadow-md transition-all duration-300">
                  <div className="space-y-3 flex flex-col items-center w-full">
                    <div className="mb-2">
                      <span className="ic lg">
                        <i className="ph-bold ph-wallet" />
                      </span>
                    </div>
                    <h4 className="text-xl font-black text-[#0b1f14] tracking-tight group-hover:text-[#15803d] transition-colors">
                      Priced for real school budgets
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-sm">
                      EduMojo costs less than most school ERPs, and you don&apos;t pay for separate apps for admissions, fees, attendance and parent communication.
                    </p>
                    <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#0b1f14] font-semibold text-left w-full">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                          <i className="ph-bold ph-check text-xs" />
                        </span>
                        <span>One app instead of many subscriptions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                          <i className="ph-bold ph-check text-xs" />
                        </span>
                        <span>Implementation and personalized support included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                          <i className="ph-bold ph-check text-xs" />
                        </span>
                        <span>Transparent pricing tailored to your school size</span>
                      </li>
                    </ul>

                    <div className="pt-4 border-t border-[rgba(11,31,20,0.06)] flex items-center justify-between w-full">
                      <button
                        type="button"
                        onClick={onGetQuote}
                        className="inline-flex items-center gap-2 text-sm font-black text-[#15803d] hover:text-[#166534] transition-colors cursor-pointer group"
                      >
                        <span>Get a price quote</span>
                        <i className="ph-bold ph-arrow-right group-hover:translate-x-0.5 transition-transform" />
                      </button>
                      <span className="text-[11px] text-[#6b7a72]">
                        No hidden setup fees
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              TAB 5: COMPARE
              ================================================== */}
          {activeTab === 5 && (
            <div id="compare" className="animate-in fade-in duration-300 space-y-4">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                  Built to save teachers&apos; time, not to add more screens
                </h3>
              </div>
              <div className="overflow-x-auto">
                <ComparisonTable />
              </div>
            </div>
          )}

          {/* ==================================================
              TAB 6: TRAINING & SUPPORT
              ================================================== */}
          {activeTab === 6 && (
            <div id="support" className="animate-in fade-in duration-300 space-y-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                  We train every teacher, so nobody is left behind
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {/* Pillar 1 */}
                <div className="card group bg-[#f7faf8] rounded-2xl p-6 border border-[rgba(11,31,20,0.08)] shadow-2xs hover:bg-white transition-all flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="ic">
                        <i className="ph-bold ph-flag" />
                      </span>
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1.5 tracking-tight group-hover:text-[#15803d] transition-colors">
                      Setup done with you
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      We set up your classes, students and teachers with your team before go-live.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="card group bg-[#f7faf8] rounded-2xl p-6 border border-[rgba(11,31,20,0.08)] shadow-2xs hover:bg-white transition-all flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="ic">
                        <i className="ph-bold ph-chalkboard-teacher" />
                      </span>
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1.5 tracking-tight group-hover:text-[#15803d] transition-colors">
                      Training for every teacher
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Short, practical sessions so teachers are comfortable from the first day.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="card group bg-[#f7faf8] rounded-2xl p-6 border border-[rgba(11,31,20,0.08)] shadow-2xs hover:bg-white transition-all flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="ic">
                        <i className="ph-bold ph-headset" />
                      </span>
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1.5 tracking-tight group-hover:text-[#15803d] transition-colors">
                      Help when you need it
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Our support team is a call away, long after launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Navigation & Indicator Dock */}
          <div className="mt-8 pt-5 border-t border-[rgba(11,31,20,0.06)] flex flex-wrap items-center justify-between gap-3">
            {/* Progress Dots */}
            <div className="flex items-center gap-1.5">
              {TABS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTab === i 
                      ? 'w-7 bg-[#15803d]' 
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevTab}
                className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-[#3f4b45] transition-colors cursor-pointer"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNextTab}
                className="px-3.5 py-1.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-xs font-bold text-white transition-colors cursor-pointer shadow-2xs"
              >
                Next Area →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
