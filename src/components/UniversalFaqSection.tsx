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
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  items: FaqItem[];
  schemaUrl?: string;
  className?: string;
}

export const UniversalFaqSection: React.FC<UniversalFaqSectionProps> = ({
  id = 'faq',
  kicker = 'FAQ',
  title = 'Frequently asked questions',
  subtitle = 'Everything you need to know about our school ERP software, teacher time-saving features, and nationwide support.',
  ctaText = 'Still have questions? →',
  ctaHref = '#contact',
  onCtaClick,
  items,
  schemaUrl,
  className = 'py-14 sm:py-20 bg-white border-b border-[rgba(11,31,20,0.06)]',
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default matching image

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleCta = (e: React.MouseEvent) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    } else if (ctaHref.startsWith('#')) {
      const target = document.querySelector(ctaHref);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Title, Subtitle, CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <ScrollReveal>
              <div className="space-y-2">
                {kicker && (
                  <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                    {kicker}
                  </p>
                )}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1f14] tracking-tight leading-[1.12]">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed pt-1 max-w-md">
                    {subtitle}
                  </p>
                )}
              </div>

              {ctaText && (
                <div className="pt-3">
                  <a
                    href={ctaHref}
                    onClick={handleCta}
                    className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5"
                  >
                    <span>{ctaText}</span>
                  </a>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Accordion List */}
          <div className="lg:col-span-7 space-y-2.5">
            {items.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx} 
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#f0fdf4]/80 border-[#16a34a]/30 shadow-xs' 
                      : 'bg-transparent border-transparent'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-3.5 sm:p-5 flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span 
                      className={`font-bold text-base sm:text-lg lg:text-[18px] leading-snug transition-colors duration-200 pr-1 ${
                        isOpen ? 'text-[#16a34a]' : 'text-[#0b1f14]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span 
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-normal text-xl transition-all duration-200 leading-none ${
                        isOpen 
                          ? 'bg-[#16a34a] text-white shadow-xs' 
                          : 'border border-slate-300 bg-white text-slate-500'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-3.5 pb-4 sm:px-5 sm:pb-5 text-sm sm:text-base text-[#4b5563] leading-relaxed pt-0 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
