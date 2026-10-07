import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export interface FaqItem {
  question: string;
  answer: string;
}

interface UniversalFaqSectionProps {
  id?: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  schemaUrl?: string;
  className?: string;
}

export const UniversalFaqSection: React.FC<UniversalFaqSectionProps> = ({
  id = 'faq',
  kicker = 'Frequently Asked Questions',
  title = 'Frequently asked questions',
  subtitle,
  items,
  schemaUrl,
  className = 'py-12 sm:py-16 bg-[#f7faf8] border-b border-[rgba(11,31,20,0.06)]',
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(schemaUrl ? { '@id': schemaUrl } : {}),
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={className} id={id}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-container space-y-6">
        <ScrollReveal>
          <div className="text-center mb-6 sm:mb-8 space-y-2">
            {kicker && (
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                {kicker}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base text-[#3f4b45] max-w-xl mx-auto leading-relaxed pt-1">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3.5">
          {items.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={idx} delayMs={idx * 35}>
                <div 
                  className={`faq-card rounded-[18px] bg-white border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] overflow-hidden transition-all duration-200 ${
                    isOpen 
                      ? 'faq-open ring-1 ring-[#16a34a]/30 border-[#16a34a]/40 shadow-[0_8px_24px_rgba(22,163,74,0.08)]' 
                      : 'hover:border-[#16a34a]/30 hover:shadow-[0_8px_24px_rgba(11,31,20,0.06)] hover:-translate-y-0.5'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span 
                      className={`font-bold text-base sm:text-lg leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-[#16a34a]' : 'text-[#0b1f14] group-hover:text-[#16a34a]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span 
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 font-bold text-lg transition-all duration-200 ${
                        isOpen 
                          ? 'bg-[#16a34a] text-white rotate-45 shadow-sm shadow-[#16a34a]/30' 
                          : 'bg-[#e8f7ee] text-[#16a34a] group-hover:bg-[#16a34a] group-hover:text-white'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#3f4b45] leading-relaxed border-t border-[rgba(11,31,20,0.06)] pt-4 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
