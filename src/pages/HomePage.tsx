import React, { useState } from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  Check, 
  Sparkles, 
  Clock
} from 'lucide-react';
import { MacOsMockup } from '../components/MacOsMockup';
import { TeacherTasksRotator } from '../components/TeacherTasksRotator';
import { TeacherTimeSection } from '../components/TeacherTimeSection';
import { UnifiedPlatformSection } from '../components/UnifiedPlatformSection';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { HomeFaqSection } from '../components/HomeFaqSection';
import { LogoMarquee } from '../components/LogoMarquee';
import { ScrollReveal } from '../components/ScrollReveal';
import { StatementSection } from '../components/StatementSection';
import { HeroAnnouncementArea } from '../components/HeroAnnouncementArea';
import { PageRoute } from '../components/Navbar';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestCallBack: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onRequestCallBack }) => {
  // Final CTA Form state
  const [interest, setInterest] = useState<'demo' | 'quote' | 'both'>('both');
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    phone: '',
    email: '',
    students: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBookDemo = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onRequestCallBack();
    }
  };

  const handleGetQuote = () => {
    onNavigate('contact');
    setTimeout(() => {
      const formEl = document.getElementById('form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#ffffff] text-[#0b1f14] font-sans overflow-x-hidden selection:bg-[#2eca8b]/30 selection:text-[#0b1f14]">
      
      {/* ==================================================
          1. THE LAVA WRAPPER: HERO + PILL STATEMENT TOGETHER
          ================================================== */}
      <div className="lava">
        <div className="lava-blobs" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
          <div className="blob b5" />
          <div className="blob b6" />
        </div>

        {/* SECTION 1: HOME HERO */}
        <section className="hero min-h-[76vh] flex items-center justify-center pt-24 pb-8 sm:pt-28 sm:pb-10 text-center">
          <div className="page-container flex flex-col items-center">
            <HeroAnnouncementArea 
              onNavigate={onNavigate} 
              onRequestCallBack={onRequestCallBack} 
            />
          </div>
        </section>

        {/* SECTION 2: ANIMATED STATEMENT SECTION */}
        <StatementSection />
      </div>

      {/* ==================================================
          3. NEW SECTION: WHERE THE 40% COMES FROM (id="teacher-time")
          ================================================== */}
      <TeacherTimeSection onBookDemo={handleBookDemo} />

      {/* ==================================================
          4. DASHBOARD SECTION (macOS ERP Window)
          ================================================== */}
      <section 
        className="py-12 sm:py-16 relative border-b border-[rgba(11,31,20,0.06)]"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(46, 202, 139, 0.18), transparent 70%), #ffffff',
        }}
      >
        <div className="page-container">
          <ScrollReveal>
            <div className="text-center mb-8 space-y-1.5">
              <h2 
                className="font-extrabold text-[#0b1f14] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Not just attendance software. Not just a grade book.
              </h2>
              <p 
                className="font-extrabold text-[#15803d] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                One simple app to run your entire school.
              </p>
              <p className="text-base text-[#3f4b45] max-w-2xl mx-auto pt-1.5">
                Real-time visibility across attendance, homework, timetables, and fees in a single screen.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive macOS ERP Window with Floating Event Cards */}
          <ScrollReveal delayMs={100}>
            <MacOsMockup onOpenLiveDemo={onRequestCallBack} />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================================================
          5. TEACHER TASKS ROTATOR (Brochure Features 3-Slide Rotator)
          ================================================== */}
      <TeacherTasksRotator onScheduleDemo={handleBookDemo} />

      {/* ==================================================
          6. UNIFIED ALL-IN-ONE PLATFORM SECTION (Compacted Sections)
          ================================================== */}
      <UnifiedPlatformSection 
        onBookDemo={handleBookDemo}
        onGetQuote={handleGetQuote}
      />

      {/* ==================================================
          13. TESTIMONIALS SECTION
          ================================================== */}
      <section className="py-12 sm:py-16 bg-[#ffffff] border-b border-[rgba(11,31,20,0.06)]">
        <div className="page-container">
          <ScrollReveal>
            <TestimonialsCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================================================
          14. GOING PANEL OF GIVEN SCHOOL LOGOS
          ================================================== */}
      <LogoMarquee />

      {/* ==================================================
          15. FAQ SECTION
          ================================================== */}
      <HomeFaqSection />

      {/* ==================================================
          16. FINAL CTA BAND (Book a demo or get a quote)
          ================================================== */}
      <div className="lava" id="contact">
        <div className="lava-blobs" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
          <div className="blob b5" />
          <div className="blob b6" />
        </div>

        <section className="py-14 sm:py-16">
          <div className="page-container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto space-y-4 text-center mb-8">
                <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                  Book a demo
                </p>
                <h2 
                  className="font-black text-[#0b1f14] tracking-[-0.04em]"
                  style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                    lineHeight: 1.08,
                  }}
                >
                  Give your teachers <span className="text-[#15803d]">their time back.</span>
                </h2>
                <p className="text-[#3f4b45] text-base sm:text-lg max-w-xl mx-auto">
                  See how EduMojo cuts routine work for your teachers, and get a price that fits your school. It takes a short call to get started.
                </p>
              </div>

              {/* Form box */}
              <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(11,31,20,0.09)] shadow-xl text-left">
                <h3 className="text-xl font-black text-[#0b1f14] tracking-tight mb-4 text-center">
                  Book a demo or get a quote
                </h3>

                {submitted ? (
                  <div className="p-6 bg-[#f0fdf4] border border-[#2eca8b]/40 rounded-2xl text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white flex items-center justify-center mx-auto mb-2">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="text-lg font-black text-[#0b1f14]">Thank you!</h4>
                    <p className="text-sm text-[#3f4b45]">
                      Our team will reach out within 24 hours to schedule your demo and prepare your quote.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Top Field: I'm interested in */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0b1f14] mb-2">
                        I&apos;m interested in
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['demo', 'quote', 'both'] as const).map((opt) => (
                          <label
                            key={opt}
                            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                              interest === opt
                                ? 'bg-[#f0fdf4] border-[#16a34a] text-[#15803d] shadow-xs'
                                : 'bg-[#f8fafc] border-slate-200 text-[#3f4b45] hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="interest"
                              value={opt}
                              checked={interest === opt}
                              onChange={() => setInterest(opt)}
                              className="accent-[#16a34a]"
                            />
                            <span className="capitalize">
                              {opt === 'demo' ? 'Demo' : opt === 'quote' ? 'Price quote' : 'Both'}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Name & School */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#0b1f14] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-sm text-[#0b1f14] focus:outline-none focus:border-[#16a34a]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0b1f14] mb-1">
                          School / Institute Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.school}
                          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                          placeholder="e.g. Modern Public School"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-sm text-[#0b1f14] focus:outline-none focus:border-[#16a34a]"
                        />
                      </div>
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#0b1f14] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-sm text-[#0b1f14] focus:outline-none focus:border-[#16a34a]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0b1f14] mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="principal@school.edu"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-sm text-[#0b1f14] focus:outline-none focus:border-[#16a34a]"
                        />
                      </div>
                    </div>

                    {/* Students count */}
                    <div>
                      <label className="block text-xs font-bold text-[#0b1f14] mb-1">
                        Approximate Student Count
                      </label>
                      <input
                        type="text"
                        value={formData.students}
                        onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                        placeholder="e.g. 850 students"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-sm text-[#0b1f14] focus:outline-none focus:border-[#16a34a]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-base py-3 rounded-full transition-all duration-200 cursor-pointer shadow-md shadow-[#16a34a]/20 hover:shadow-lg hover:-translate-y-0.5 mt-2"
                    >
                      Send →
                    </button>
                  </form>
                )}

                <div className="pt-4 border-t border-slate-100 mt-4 text-center">
                  <p className="text-xs text-[#6b7a72]">
                    Prefer to speak right now? Call{' '}
                    <a href="tel:+919684033959" className="text-[#15803d] font-bold hover:underline">
                      +91 96840 33959
                    </a>{' '}
                    or{' '}
                    <a href="tel:+917798969669" className="text-[#15803d] font-bold hover:underline">
                      +91 77989 69669
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

    </div>
  );
};
