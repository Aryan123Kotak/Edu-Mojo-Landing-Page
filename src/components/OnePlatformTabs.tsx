import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export const OnePlatformTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    'Attendance',
    'Homework',
    'Marks & report cards',
    'Parent updates',
    'Timetable',
    'Admin & fees',
  ];

  // Auto-play animation (cycles through tabs every 5 seconds unless hovered/interacted)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tabs.length]);

  return (
    <div className="page-container">
      {/* Tab Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === idx
                ? 'bg-[#16a34a] text-white shadow-md shadow-[#16a34a]/25'
                : 'bg-white hover:bg-slate-100 text-[#3f4b45] border border-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Panels: ALL SIX panels are rendered directly in HTML in the initial DOM tree */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[rgba(11,31,20,0.08)] shadow-lg shadow-slate-200/50">
        
        {/* PANEL 1: Attendance */}
        <div hidden={activeTab !== 0} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">Module 01</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight">
              Attendance
            </h3>
            <p className="text-base text-[#3f4b45] leading-relaxed">
              Mark attendance in seconds and inform parents automatically.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-[#0b1f14] font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>One-tap class attendance</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Automatic parent alerts</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6b7a72] pb-2 border-b border-slate-200">
                <span>TODAY_ATTENDANCE</span>
                <span className="text-[#16a34a]">94.6%</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Present</span>
                <span className="font-bold font-mono text-[#15803d]">1,181 / 1,248</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Late arrivals</span>
                <span className="font-bold font-mono text-amber-600">9</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Parents notified</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px]">Auto</span>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 2: Homework */}
        <div hidden={activeTab !== 1} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">Module 02</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight">
              Homework
            </h3>
            <p className="text-base text-[#3f4b45] leading-relaxed">
              Share homework and learning materials once, for the whole class.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-[#0b1f14] font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Assignments with due dates</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Materials students can open on their phone</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6b7a72] pb-2 border-b border-slate-200">
                <span>HOMEWORK_HUB</span>
                <span className="text-[#16a34a]">ACTIVE TERM</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Assignments active</span>
                <span className="font-bold font-mono text-[#0b1f14]">12</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Materials shared</span>
                <span className="font-bold font-mono text-[#15803d]">18</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Parent view rate</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">98%</span>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 3: Marks & report cards */}
        <div hidden={activeTab !== 2} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">Module 03</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight">
              Marks &amp; report cards
            </h3>
            <p className="text-base text-[#3f4b45] leading-relaxed">
              Enter marks once and let EduMojo build the report cards.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-[#0b1f14] font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Marks entry by class and subject</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Report cards generated in a few clicks</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6b7a72] pb-2 border-b border-slate-200">
                <span>REPORT_CARD_BUILDER</span>
                <span className="text-[#16a34a]">READY</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Class 10-A Marks</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">Complete</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Grading scale</span>
                <span className="font-bold font-mono text-[#0b1f14]">CBSE / ICSE</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">PDFs generated</span>
                <span className="font-bold font-mono text-[#15803d]">48 / 48</span>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 4: Parent updates */}
        <div hidden={activeTab !== 3} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">Module 04</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight">
              Parent updates
            </h3>
            <p className="text-base text-[#3f4b45] leading-relaxed">
              Notices, circulars and messages that reach every parent.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-[#0b1f14] font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>One notice to the whole class or school</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Teacher-parent messages in the app</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6b7a72] pb-2 border-b border-slate-200">
                <span>COMMUNICATION_HUB</span>
                <span className="text-[#16a34a]">CONNECTED</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Annual Sports Day</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px]">Sent</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Exam schedule circular</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px]">Sent</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Parent read receipts</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 5: Timetable */}
        <div hidden={activeTab !== 4} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">Module 05</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight">
              Timetable
            </h3>
            <p className="text-base text-[#3f4b45] leading-relaxed">
              Class timetables and teacher allocation, always up to date.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-[#0b1f14] font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Timetables visible to teachers and parents</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Changes updated for everyone at once</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6b7a72] pb-2 border-b border-slate-200">
                <span>TIMETABLE_ALLOCATION</span>
                <span className="text-[#16a34a]">NO CLASHES</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Classes scheduled</span>
                <span className="font-bold font-mono text-[#15803d]">32 / 32</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Teacher allocations</span>
                <span className="font-bold font-mono text-[#0b1f14]">100% matched</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <span className="font-medium text-[#0b1f14]">Substitutions today</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">Assigned</span>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 6: Admin & fees */}
        <div hidden={activeTab !== 5} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase font-black tracking-widest text-[#16a34a]">Module 06</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight">
              Admin &amp; fees
            </h3>
            <p className="text-base text-[#3f4b45] leading-relaxed">
              The office runs admissions and fees in the same app, so teachers don&apos;t have to.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-[#0b1f14] font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Enquiries, admissions and documents</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Fee receipts, reminders and payment links</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[rgba(11,31,20,0.08)] space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6b7a72] pb-2 border-b border-slate-200">
                <span>OFFICE_ADMIN</span>
                <span className="text-[#16a34a]">SETTLED</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <div>
                  <div className="font-bold text-[#0b1f14]">Automated receipts</div>
                  <div className="text-[11px] text-[#6b7a72]">Sent via WhatsApp / SMS</div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">Instant</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <div>
                  <div className="font-bold text-[#0b1f14]">Teacher workload</div>
                  <div className="text-[11px] text-[#6b7a72]">Fee reminders handled by office</div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px]">Zero burden</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                <div>
                  <div className="font-bold text-[#0b1f14]">New admissions</div>
                  <div className="text-[11px] text-[#6b7a72]">Digital documents verified</div>
                </div>
                <span className="font-bold font-mono text-[#15803d]">38 enrolled</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
