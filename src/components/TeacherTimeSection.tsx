import React from 'react';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TeacherTimeSectionProps {
  onBookDemo: () => void;
}

const COMPARISON_ITEMS = [
  {
    task: 'Attendance',
    before: 'Paper register every period, then copied into a spreadsheet.',
    after: 'One tap in the app. Parents are informed automatically.',
  },
  {
    task: 'Homework & materials',
    before: 'Written on the board, then repeated to parents on WhatsApp.',
    after: 'Post it once. Every student and parent sees it in the app.',
  },
  {
    task: 'Report cards',
    before: 'Marks typed into a template for every single student.',
    after: 'Enter marks once. Report cards are generated for the whole class.',
  },
  {
    task: 'Parent updates',
    before: 'Individual calls and messages to dozens of parents.',
    after: 'One notice reaches every parent instantly.',
  },
  {
    task: 'Timetables & substitutions',
    before: 'Rebuilt by hand whenever something changes.',
    after: 'Built and updated in the system, visible to everyone.',
  },
  {
    task: 'Fee follow-ups',
    before: 'Teachers asked to remind parents for the office.',
    after: 'Automatic reminders and payment links. Teachers are out of it.',
  },
];

export const TeacherTimeSection: React.FC<TeacherTimeSectionProps> = ({ onBookDemo }) => {
  return (
    <section 
      id="teacher-time" 
      className="py-12 sm:py-16 bg-[#f7faf8] border-b border-[rgba(11,31,20,0.06)]"
    >
      <div className="page-container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10 space-y-2">
            <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
              Where the 40% comes from
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight">
              The daily tasks EduMojo takes off a teacher&apos;s plate
            </h2>
            <p className="text-sm sm:text-base text-[#3f4b45] max-w-2xl mx-auto leading-relaxed pt-1">
              Small jobs add up to hours every week. Here is what changes when a school moves to EduMojo.
            </p>
          </div>
        </ScrollReveal>

        {/* Column Headers (Desktop only) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-5 pb-2 text-xs font-bold uppercase tracking-wider text-[#6b7a72]">
          <div className="col-span-3">Task</div>
          <div className="col-span-4 flex items-center gap-2 text-slate-500">
            <span className="w-5 h-5 rounded-md bg-slate-200/80 text-slate-600 inline-flex items-center justify-center">
              <Clock className="w-3 h-3 stroke-[2.5]" />
            </span>
            <span>Before</span>
          </div>
          <div className="col-span-5 flex items-center gap-2 text-[#15803d]">
            <span className="w-5 h-5 rounded-md bg-emerald-500 text-white inline-flex items-center justify-center shadow-xs">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
            <span>With EduMojo</span>
          </div>
        </div>

        {/* Comparison Rows with 80ms Stagger */}
        <div className="space-y-3 sm:space-y-3.5">
          {COMPARISON_ITEMS.map((item, idx) => (
            <ScrollReveal key={item.task} delayMs={idx * 80}>
              <div className="bg-white rounded-[16px] border border-[rgba(11,31,20,0.08)] p-4 sm:p-5 shadow-xs transition-all duration-200 hover:border-[#2eca8b]/50 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
                {/* Task Name */}
                <div className="md:col-span-3">
                  <h3 className="font-black text-[#0b1f14] text-base sm:text-[17px] tracking-tight">
                    {item.task}
                  </h3>
                </div>

                {/* Before Column */}
                <div className="md:col-span-4 bg-[#f8fafc] rounded-xl p-3 sm:p-3.5 border border-slate-200/70">
                  <div className="md:hidden flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    <span className="w-4 h-4 rounded bg-slate-200 text-slate-600 inline-flex items-center justify-center">
                      <Clock className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>Before</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.before}
                  </p>
                </div>

                {/* With EduMojo Column */}
                <div className="md:col-span-5 bg-[#f0fdf4] rounded-xl p-3 sm:p-3.5 border border-[#2eca8b]/30">
                  <div className="md:hidden flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#15803d] mb-1">
                    <span className="w-4 h-4 rounded bg-emerald-500 text-white inline-flex items-center justify-center shadow-xs">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>With EduMojo</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#14532d] font-medium leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Dark-Green Rounded Banner */}
        <ScrollReveal delayMs={150}>
          <div className="mt-8 rounded-[20px] bg-gradient-to-br from-[#0b1f14] via-[#0f2d1e] to-[#15803d] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <div className="flex flex-wrap items-baseline gap-2.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-[#86efac] tracking-tight">
                  Up to 40%
                </span>
                <span className="text-lg sm:text-xl font-bold text-white">
                  less time on routine work, every day
                </span>
              </div>
              <p className="text-xs text-[#a7c4b5] leading-relaxed pt-1">
                *Based on routine task time reported across partner schools, 2025–26
              </p>
            </div>

            <button
              type="button"
              onClick={onBookDemo}
              className="shrink-0 bg-[#16a34a] hover:bg-[#2eca8b] text-white hover:text-[#0b1f14] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-[#16a34a]/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Book a demo →</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
