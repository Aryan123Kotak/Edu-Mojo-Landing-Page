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
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(11,31,20,0.08)] shadow-lg shadow-slate-200/50 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center border border-[#2eca8b]/30">
                  <Smartphone className="w-6 h-6 text-[#15803d]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                  Simple from day one
                </h3>
                <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed">
                  Clean screens, simple steps and a mobile app teachers already know how to use. If your staff can use WhatsApp, they can use EduMojo.
                </p>
                <ul className="space-y-2.5 pt-2 text-sm text-[#0b1f14] font-medium">
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Everything in one login</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Works on phone, tablet and computer</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
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
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(11,31,20,0.08)] shadow-lg shadow-slate-200/50 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center border border-[#2eca8b]/30">
                  <DollarSign className="w-6 h-6 text-[#15803d]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight">
                  Priced for real school budgets
                </h3>
                <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed">
                  EduMojo costs less than most school ERPs, and you don&apos;t pay for separate apps for admissions, fees, attendance and parent communication.
                </p>
                <ul className="space-y-2.5 pt-2 text-sm text-[#0b1f14] font-medium">
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>One app instead of many subscriptions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Implementation and support included [ADD: confirm this is included in the price]</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a34a]/15 text-[#15803d] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-[#15803d] font-semibold">[ADD: price indicator, e.g. &apos;Plans from ₹X per student per year&apos;]</span>
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
                  <p className="text-[11px] text-[#6b7a72] italic leading-tight">
                    [ADD: confirm the statement &quot;costs less than most school ERPs&quot; is accurate and you can back it up]
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
