import React from 'react';
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
          {/* Card 1: Simple from day one (.ic.lg centered above title) */}
          <ScrollReveal delayMs={0}>
            <div className="card group bg-white rounded-3xl p-7 sm:p-9 border border-[rgba(11,31,20,0.08)] shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-[#2eca8b]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between h-full">
              <div className="space-y-4 flex flex-col items-center w-full">
                <div className="mb-2">
                  <span className="ic lg">
                    <i className="ph-bold ph-device-mobile" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight group-hover:text-[#15803d] transition-colors">
                  Simple from day one
                </h3>
                <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed max-w-md">
                  Clean screens, simple steps and a mobile app teachers already know how to use. If your staff can use WhatsApp, they can use EduMojo.
                </p>
                <ul className="space-y-3 pt-3 text-sm text-[#0b1f14] font-medium text-left w-full">
                  <li className="flex items-center gap-3">
                    <span className="ic sm" style={{ '--s': '26px', fontSize: '13px' } as React.CSSProperties}>
                      <i className="ph-bold ph-check-circle" aria-hidden="true" />
                    </span>
                    <span>Everything in one login</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="ic sm" style={{ '--s': '26px', fontSize: '13px' } as React.CSSProperties}>
                      <i className="ph-bold ph-check-circle" aria-hidden="true" />
                    </span>
                    <span>Works on phone, tablet and computer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="ic sm" style={{ '--s': '26px', fontSize: '13px' } as React.CSSProperties}>
                      <i className="ph-bold ph-check-circle" aria-hidden="true" />
                    </span>
                    <span>Training and onboarding for every teacher</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Priced for real school budgets (.ic.lg centered with ph-currency-inr) */}
          <ScrollReveal delayMs={100}>
            <div className="card group bg-white rounded-3xl p-7 sm:p-9 border border-[rgba(11,31,20,0.08)] shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-[#2eca8b]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between h-full">
              <div className="space-y-4 flex flex-col items-center w-full">
                <div className="mb-2">
                  <span className="ic lg">
                    <i className="ph-bold ph-currency-inr" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight group-hover:text-[#15803d] transition-colors">
                  Priced for real school budgets
                </h3>
                <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed max-w-md">
                  EduMojo costs less than most school ERPs, and you don&apos;t pay for separate apps for admissions, fees, attendance and parent communication.
                </p>
                <ul className="space-y-3 pt-3 text-sm text-[#0b1f14] font-medium text-left w-full">
                  <li className="flex items-center gap-3">
                    <span className="ic sm" style={{ '--s': '26px', fontSize: '13px' } as React.CSSProperties}>
                      <i className="ph-bold ph-check-circle" aria-hidden="true" />
                    </span>
                    <span>One app instead of many subscriptions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="ic sm" style={{ '--s': '26px', fontSize: '13px' } as React.CSSProperties}>
                      <i className="ph-bold ph-check-circle" aria-hidden="true" />
                    </span>
                    <span>Implementation and personalized training included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="ic sm" style={{ '--s': '26px', fontSize: '13px' } as React.CSSProperties}>
                      <i className="ph-bold ph-check-circle" aria-hidden="true" />
                    </span>
                    <span>Tailored pricing plans for your school's exact student count</span>
                  </li>
                </ul>

                <div className="pt-5 border-t border-[rgba(11,31,20,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
                  <button
                    type="button"
                    onClick={onGetQuote}
                    className="inline-flex items-center gap-2 text-sm font-black text-[#15803d] hover:text-[#166534] transition-colors cursor-pointer group"
                  >
                    <span>Get a price quote</span>
                    <i className="ph-bold ph-arrow-right text-xs" aria-hidden="true" />
                  </button>
                  <span className="text-xs text-[#6b7a72]">
                    No hidden setup costs
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
