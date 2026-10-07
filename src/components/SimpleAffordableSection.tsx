import React from 'react';
import { Smartphone, Check, ArrowRight, DollarSign, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface SimpleAffordableSectionProps {
  onGetQuote: () => void;
}

export const SimpleAffordableSection: React.FC<SimpleAffordableSectionProps> = ({ onGetQuote }) => {
  return (
    <section 
      id="simple-affordable" 
      className="py-12 sm:py-16 bg-[#f7faf8] border-b border-[rgba(11,31,20,0.06)]"
    >
      <div className="page-container">
        <ScrollReveal>
          <div className="text-center mb-10 space-y-2">
            <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
              Simple and affordable
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight">
              Easy for every teacher. Affordable for every school.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Simple from day one */}
          <ScrollReveal delayMs={0}>
            <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(11,31,20,0.08)] shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-[#2eca8b]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/40 shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                  <Smartphone className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight group-hover:text-[#15803d] transition-colors">
                  Simple from day one
                </h3>
                <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed">
                  Clean screens, simple steps and a mobile app teachers already know how to use. If your staff can use WhatsApp, they can use EduMojo.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-[#0b1f14] font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Everything in one login</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Works on phone, tablet and computer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Training and onboarding for every teacher</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Priced for real school budgets */}
          <ScrollReveal delayMs={100}>
            <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(11,31,20,0.08)] shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-[#2eca8b]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/40 shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                  <DollarSign className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight group-hover:text-[#15803d] transition-colors">
                  Priced for real school budgets
                </h3>
                <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed">
                  EduMojo costs less than most school ERPs, and you don&apos;t pay for separate apps for admissions, fees, attendance and parent communication.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-[#0b1f14] font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>One app instead of many subscriptions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Implementation and personalized training included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Tailored pricing plans for your school's exact student count</span>
                  </li>
                </ul>

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={onGetQuote}
                    className="inline-flex items-center gap-2 bg-[#0b1f14] hover:bg-[#16a34a] text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5"
                  >
                    <span>Get a price quote →</span>
                  </button>
                  <p className="text-[11px] text-[#6b7a72] leading-tight">
                    No lock-ins, transparent pricing &amp; full onboarding
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
