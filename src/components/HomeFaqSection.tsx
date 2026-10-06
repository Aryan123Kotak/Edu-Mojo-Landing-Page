import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HOME_FAQS = [
  {
    question: 'What is EduMojo?',
    answer:
      'EduMojo is a simple, affordable school ERP built by Webmagiks. It takes routine work off teachers, from attendance and homework to report cards and parent updates, and cuts their day-to-day work by up to 40%. It is used by 15+ schools, colleges and institutes in India and Dubai.',
  },
  {
    question: "How does EduMojo reduce teachers' work by up to 40%?",
    answer:
      "EduMojo replaces the small jobs that fill a teacher's day. Attendance takes one tap, homework is posted once for the whole class, report cards are generated from marks entered once, and one notice reaches every parent. Fee reminders and admin are handled by the office in the same app, so they never land on teachers.",
  },
  {
    question: 'Is EduMojo easy for teachers to use?',
    answer:
      'Yes. EduMojo has clean screens, simple steps and a mobile app that works like the apps teachers already use. Every school also gets training and onboarding, so teachers are comfortable from day one.',
  },
  {
    question: 'How much does EduMojo cost?',
    answer:
      'EduMojo is priced for real school budgets and costs less than most school ERPs. [ADD: price indicator or "Pricing depends on the number of students and modules"]. Book a demo or ask for a price quote and we will share a plan for your school.',
  },
  {
    question: 'Do we need to buy separate apps for fees, admissions or parent communication?',
    answer:
      'No. EduMojo includes 24+ modules in one app, including admissions, fees and payment links, attendance, homework, report cards, timetables, transport, library and the parent app.',
  },
  {
    question: 'Does EduMojo have a mobile app?',
    answer:
      'Yes. Teachers, parents and students use the EduMojo app on their phones for attendance, homework, notices, fees and real-time alerts.',
  },
  {
    question: 'Is EduMojo available outside India?',
    answer:
      'Yes. EduMojo is used by schools, colleges and institutes in India and in Dubai, UAE.',
  },
  {
    question: 'How long does it take to get started?',
    answer:
      '[ADD: typical setup time, e.g. "Most schools go live within X weeks"]. Our team sets up EduMojo with you and trains your teachers before launch.',
  },
];

export const HomeFaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[rgba(11,31,20,0.06)]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-container">
        <ScrollReveal>
          <div className="text-center mb-10 space-y-2">
            <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
              Got questions?
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight">
              Frequently asked questions about EduMojo
            </h2>
            <p className="text-sm sm:text-base text-[#3f4b45] max-w-xl mx-auto leading-relaxed">
              Everything you need to know about how EduMojo saves teachers&apos; time, how setup works, and pricing.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={idx} delayMs={idx * 40}>
                <div className="bg-[#f7faf8] rounded-[16px] border border-[rgba(11,31,20,0.08)] overflow-hidden transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[#0b1f14] text-base sm:text-[17px] leading-snug">
                      {faq.question}
                    </span>
                    <span 
                      className={`w-7 h-7 rounded-full bg-white border border-[rgba(11,31,20,0.1)] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#16a34a] text-white border-transparent' : 'text-[#3f4b45]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-sm text-[#3f4b45] leading-relaxed border-t border-[rgba(11,31,20,0.06)] bg-white/70">
                      <p className="pt-3">{faq.answer}</p>
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
