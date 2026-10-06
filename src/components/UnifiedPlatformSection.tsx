import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutGrid, 
  Calendar, 
  Users, 
  DollarSign, 
  BarChart3, 
  GraduationCap, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Smartphone, 
  BookOpen, 
  Award, 
  CalendarClock, 
  Wallet, 
  Sparkles, 
  Building, 
  ShieldCheck, 
  HeartHandshake, 
  Check, 
  UserCheck 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { OnePlatformTabs } from './OnePlatformTabs';
import { SelfBuildingTimetable } from './SelfBuildingTimetable';
import { ComparisonTable } from './ComparisonTable';

interface UnifiedPlatformSectionProps {
  onBookDemo: () => void;
  onGetQuote: () => void;
}

export const UnifiedPlatformSection: React.FC<UnifiedPlatformSectionProps> = ({ 
  onBookDemo, 
  onGetQuote 
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [modulesSlide, setModulesSlide] = useState<number>(0);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const TABS = [
    {
      id: 'teacher-apps',
      label: 'Daily Teacher Apps',
      shortLabel: 'Teacher Apps',
      icon: Smartphone,
      eyebrow: 'Everything a teacher needs, without switching between apps',
    },
    {
      id: 'modules-suite',
      label: '24+ Modules Suite',
      shortLabel: '24+ Modules',
      icon: LayoutGrid,
      eyebrow: 'Everything your school needs, without the complexity',
    },
    {
      id: 'timetables',
      label: 'Timetable Engine',
      shortLabel: 'Timetables',
      icon: Calendar,
      eyebrow: 'Timetables without the weekend spent rebuilding them',
    },
    {
      id: 'who-it-helps',
      label: 'Role Impact',
      shortLabel: 'Who It Helps',
      icon: Users,
      eyebrow: 'Less work for teachers. Better visibility for everyone else.',
    },
    {
      id: 'pricing-value',
      label: 'Affordable Pricing',
      shortLabel: 'Pricing',
      icon: DollarSign,
      eyebrow: 'Easy for every teacher. Affordable for every school.',
    },
    {
      id: 'comparison',
      label: 'Platform Comparison',
      shortLabel: 'Comparison',
      icon: BarChart3,
      eyebrow: "Built to save teachers' time, not to add more screens",
    },
    {
      id: 'training',
      label: 'Training & Onboarding',
      shortLabel: 'Training',
      icon: GraduationCap,
      eyebrow: 'We train every teacher, so nobody is left behind',
    },
  ];

  const handleNextTab = () => {
    setActiveTab((prev) => (prev + 1) % TABS.length);
  };

  const handlePrevTab = () => {
    setActiveTab((prev) => (prev - 1 + TABS.length) % TABS.length);
  };

  // Scroll active tab button into view on mobile
  useEffect(() => {
    if (tabContainerRef.current) {
      const activeBtn = tabContainerRef.current.children[activeTab] as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#2eca8b]/30 text-xs font-black text-[#15803d] uppercase tracking-[0.16em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>All-In-One School Operating System</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight">
                Complete Platform Console
              </h2>
              <p className="text-xs sm:text-sm text-[#4b5563]">
                {TABS[activeTab].eyebrow}
              </p>
            </div>

            {/* Horizontal Slider Controls */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
              <span className="text-xs font-mono font-bold text-[#6b7a72] bg-white px-3 py-1.5 rounded-full border border-[rgba(11,31,20,0.08)] shadow-2xs">
                {activeTab + 1} / {TABS.length} · {TABS[activeTab].shortLabel}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevTab}
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#f0fdf4] text-[#0b1f14] hover:text-[#16a34a] border border-[rgba(11,31,20,0.09)] shadow-xs flex items-center justify-center transition-all duration-200 cursor-pointer"
                  aria-label="Previous tab"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextTab}
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#f0fdf4] text-[#0b1f14] hover:text-[#16a34a] border border-[rgba(11,31,20,0.09)] shadow-xs flex items-center justify-center transition-all duration-200 cursor-pointer"
                  aria-label="Next tab"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Sleek Horizontal Tab Navigation Strip */}
        <div className="relative">
          <div 
            ref={tabContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth"
          >
            {TABS.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 border ${
                    isActive
                      ? 'bg-[#15803d] text-white border-[#15803d] shadow-sm shadow-[#15803d]/20 scale-[1.02]'
                      : 'bg-white text-[#3f4b45] hover:text-[#0b1f14] hover:bg-slate-50 border-[rgba(11,31,20,0.08)]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#16a34a]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Sleek Workspace Card (Single Height-Controlled Window) */}
        <div className="bg-white rounded-3xl sm:rounded-[32px] border border-[rgba(11,31,20,0.08)] shadow-[0_20px_50px_-15px_rgba(11,31,20,0.07)] p-4 sm:p-7 lg:p-8 transition-all duration-300">
          
          {/* ==================================================
              TAB 0: DAILY TEACHER APPS (OnePlatformTabs)
              ================================================== */}
          {activeTab === 0 && (
            <div className="animate-in fade-in duration-300 space-y-4">
              <div className="text-center sm:text-left mb-2">
                <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">
                  Interactive Daily Workflows
                </span>
                <p className="text-xs sm:text-sm text-[#4b5563] mt-0.5">
                  Attendance, homework, marks, timetables and parent messages live in one place, with one login.
                </p>
              </div>
              <OnePlatformTabs />
            </div>
          )}

          {/* ==================================================
              TAB 1: 24+ MODULES SUITE (Horizontal Slider Deck)
              ================================================== */}
          {activeTab === 1 && (
            <div className="animate-in fade-in duration-300 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(11,31,20,0.06)] pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#0b1f14]">
                    24+ Modules, One Simple App
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4b5563] mt-0.5">
                    Start with what your teachers need most. Admissions, fees, transport, library and hostel are there when you are ready.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setModulesSlide((prev) => Math.max(0, prev - 1))}
                    disabled={modulesSlide === 0}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setModulesSlide((prev) => Math.min(1, prev + 1))}
                    disabled={modulesSlide === 1}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Horizontal sliding cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    icon: UserCheck,
                    title: 'Attendance & Parent Alerts',
                    desc: 'One-tap attendance with automatic alerts to parents.',
                  },
                  {
                    icon: BookOpen,
                    title: 'Homework & E-Learning',
                    desc: 'Assignments, homework and learning materials, shared once for the whole class.',
                  },
                  {
                    icon: Award,
                    title: 'Marks & Report Cards',
                    desc: 'Enter marks once and generate report cards for every student.',
                  },
                  {
                    icon: CalendarClock,
                    title: 'Timetable & Substitutions',
                    desc: 'Class timetables and teacher allocation, updated for everyone at once.',
                  },
                  {
                    icon: Wallet,
                    title: 'Fees & Payment Links',
                    desc: 'Receipts, reminders and payment links, so fee follow-ups never land on teachers.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Smart Assistant',
                    desc: 'Ask for an attendance summary or report and get it in one click.',
                  },
                ].map((mod, idx) => {
                  const ModIcon = mod.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.06)] hover:border-[#2eca8b]/50 hover:bg-white transition-all duration-200 shadow-2xs group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-[#15803d] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-2xs">
                        <ModIcon className="w-5 h-5 text-[#15803d]" />
                      </div>
                      <h4 className="text-base font-black text-[#0b1f14] mb-1 tracking-tight">
                        {mod.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Included Tag Pill Cloud */}
              <div className="p-4 rounded-2xl bg-[#f0fdf4]/70 border border-[#2eca8b]/20 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <span className="font-extrabold text-[#15803d] uppercase tracking-wider shrink-0">
                  Also Included:
                </span>
                <p className="text-[#3f4b45] leading-relaxed">
                  Admissions &amp; CRM, Transport &amp; GPS Tracking, Library Management, Examination Management, Certificates &amp; Documents, Staff &amp; Payroll, Inventory &amp; Assets, Hostel, Visitor Pass, and Alumni Network.
                </p>
              </div>
            </div>
          )}

          {/* ==================================================
              TAB 2: TIMETABLES (SelfBuildingTimetable)
              ================================================== */}
          {activeTab === 2 && (
            <div className="animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Column: Copy */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">
                      AI Conflict Resolution
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                      Timetables without the weekend spent rebuilding them
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                    Set up classes, subjects and teachers once. EduMojo builds class timetables, allocates teachers and shows clashes before the week begins.
                  </p>
                  <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#0b1f14] font-semibold">
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>Class and section timetables</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>Teacher allocation with clash checks</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
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
              TAB 3: ROLE IMPACT (Who It Helps)
              ================================================== */}
          {activeTab === 3 && (
            <div className="animate-in fade-in duration-300 space-y-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">
                  Stakeholder Value
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                  Less work for teachers. Better visibility for everyone else.
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Teachers */}
                <div className="bg-[#f0fdf4] rounded-2xl p-5 border border-[#2eca8b]/50 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#15803d] flex items-center justify-center mb-3 shadow-xs">
                      <GraduationCap className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1 tracking-tight">
                      Teachers
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                      Up to 40% less routine work, so more time goes into teaching.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#2eca8b]/20 text-[11px] font-bold text-[#15803d]">
                    Primary benefactors
                  </div>
                </div>

                {/* 2. Administrators */}
                <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#15803d] flex items-center justify-center mb-3 shadow-xs">
                      <Building className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1 tracking-tight">
                      Administrators
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Admissions, fees and records handled in the same simple app.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[rgba(11,31,20,0.06)] text-[11px] font-bold text-[#6b7a72]">
                    Operations unified
                  </div>
                </div>

                {/* 3. Parents */}
                <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#15803d] flex items-center justify-center mb-3 shadow-xs">
                      <Users className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1 tracking-tight">
                      Parents
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Attendance, homework, fees and notices on their phone, without calling the school.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[rgba(11,31,20,0.06)] text-[11px] font-bold text-[#6b7a72]">
                    Real-time transparency
                  </div>
                </div>

                {/* 4. Management */}
                <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#15803d] flex items-center justify-center mb-3 shadow-xs">
                      <ShieldCheck className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1 tracking-tight">
                      Management
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Clear reports on attendance, results and fees, without asking anyone to compile them.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[rgba(11,31,20,0.06)] text-[11px] font-bold text-[#6b7a72]">
                    Instant oversight
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              TAB 4: PRICING & VALUE (Simple & Affordable)
              ================================================== */}
          {activeTab === 4 && (
            <div className="animate-in fade-in duration-300 space-y-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">
                  Honest Value
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                  Easy for every teacher. Affordable for every school.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Card 1 */}
                <div className="bg-[#f7faf8] rounded-2xl p-6 border border-[rgba(11,31,20,0.08)] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center border border-[#2eca8b]/30">
                      <Smartphone className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <h4 className="text-lg font-black text-[#0b1f14] tracking-tight">
                      Simple from day one
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Clean screens, simple steps and a mobile app teachers already know how to use. If your staff can use WhatsApp, they can use EduMojo.
                    </p>
                    <ul className="space-y-2 pt-1 text-xs sm:text-sm text-[#0b1f14] font-semibold">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>Everything in one login</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>Works on phone, tablet and computer</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>Training and onboarding for every teacher</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#f7faf8] rounded-2xl p-6 border border-[rgba(11,31,20,0.08)] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center border border-[#2eca8b]/30">
                      <DollarSign className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <h4 className="text-lg font-black text-[#0b1f14] tracking-tight">
                      Priced for real school budgets
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      EduMojo costs less than most school ERPs, and you don&apos;t pay for separate apps for admissions, fees, attendance and parent communication.
                    </p>
                    <ul className="space-y-2 pt-1 text-xs sm:text-sm text-[#0b1f14] font-semibold">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>One app instead of many subscriptions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>Implementation and support included <span className="text-[#15803d] font-normal">[ADD: confirm this is included in the price]</span></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span className="text-[#15803d] font-semibold">[ADD: price indicator, e.g. &apos;Plans from ₹X per student per year&apos;]</span>
                      </li>
                    </ul>

                    <div className="pt-3 border-t border-[rgba(11,31,20,0.06)] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={onGetQuote}
                        className="inline-flex items-center gap-2 text-sm font-black text-[#15803d] hover:text-[#166534] transition-colors cursor-pointer group"
                      >
                        <span>Get a price quote</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <span className="text-[10px] text-[#6b7a72] italic">
                        *[ADD: confirm statement]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              TAB 5: PLATFORM COMPARISON (ComparisonTable)
              ================================================== */}
          {activeTab === 5 && (
            <div className="animate-in fade-in duration-300 space-y-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">
                  Side-By-Side Evaluation
                </span>
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
              TAB 6: TRAINING & ONBOARDING (Support Cards)
              ================================================== */}
          {activeTab === 6 && (
            <div className="animate-in fade-in duration-300 space-y-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">
                  Zero Abandonment Guarantee
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                  We train every teacher, so nobody is left behind
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {/* Pillar 1 */}
                <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-3">
                      <Check className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1.5 tracking-tight">
                      Setup done with you
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      We set up your classes, students and teachers with your team before go-live. <span className="text-[#15803d] font-semibold text-xs block mt-1">[ADD: confirm]</span>
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-3">
                      <BookOpen className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1.5 tracking-tight">
                      Training for every teacher
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      Short, practical sessions so teachers are comfortable from the first day.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-3">
                      <HeartHandshake className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <h4 className="text-base font-black text-[#0b1f14] mb-1.5 tracking-tight">
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
