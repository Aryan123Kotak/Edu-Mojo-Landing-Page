import React from 'react';
import { UniversalFaqSection, FaqItem } from './UniversalFaqSection';

export const HOME_FAQS: FaqItem[] = [
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
      'EduMojo is priced for real school budgets and costs less than most traditional school ERPs. Pricing is transparent and depends on the number of students and modules your campus needs. Book a demo or ask for a price quote and we will share a plan tailored to your school.',
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
      'Most schools go live smoothly within one to two weeks. Our team sets up EduMojo directly with you and trains your teachers before launch.',
  },
];

export const HomeFaqSection: React.FC = () => {
  return (
    <UniversalFaqSection
      id="faq"
      kicker="FAQ"
      title="Frequently asked questions"
      subtitle="Everything you need to know about our school ERP software, teacher time-saving features, and nationwide support."
      items={HOME_FAQS}
      className="py-14 sm:py-20 bg-white border-b border-[rgba(11,31,20,0.06)]"
    />
  );
};
