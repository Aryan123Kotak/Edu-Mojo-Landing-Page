import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { LogoMarquee } from '../components/LogoMarquee';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlowCard } from '../components/GlowCard';
import { TeamPhotoCard } from '../components/TeamPhotoCard';
import { UniversalFaqSection, FaqItem } from '../components/UniversalFaqSection';
import { PageRoute } from '../components/Navbar';

interface AboutUsPageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestCallBack?: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasCounted, setHasCounted] = useState(false);

  // Numbers Strip Count-Up State
  const [stats, setStats] = useState({
    teachersWork: 0,
    schools: 0,
    students: 0,
    modules: 0,
  });

  // Dynamic Head SEO/AEO Tags & Canonical URL
  useEffect(() => {
    document.title = 'About EduMojo – School ERP by Webmagiks, Pune';

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Learn about EduMojo, the AI-powered school ERP built by Webmagiks in Pune and used by 15+ schools, colleges and institutes in India and Dubai.'
    );

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.edu-mojo.com/about-us');

    // OpenGraph
    const setMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('og:type', 'website');
    setMeta('og:site_name', 'EduMojo');
    setMeta('og:title', 'About EduMojo – School ERP by Webmagiks');
    setMeta('og:description', 'Learn about EduMojo, the AI-powered school ERP built by Webmagiks in Pune and used by 15+ schools, colleges and institutes in India and Dubai.');
    setMeta('og:url', 'https://www.edu-mojo.com/about-us');
    setMeta('og:image', 'https://www.edu-mojo.com/og-image.png');

    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');
  }, []);

  // Numbers Strip Count-Up Animation (triggers once when scrolled into view)
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          observer.unobserve(el);

          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (reduceMotion) {
            setStats({ teachersWork: 40, schools: 20, students: 20000, modules: 24 });
            return;
          }

          const duration = 1500;
          const steps = 30;
          const intervalTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setStats({
              teachersWork: Math.round(40 * progress),
              schools: Math.round(20 * progress),
              students: Math.round(20000 * progress),
              modules: Math.round(24 * progress),
            });

            if (step >= steps) {
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasCounted]);

  const handleBookDemo = () => {
    onNavigate('contact');
    window.location.hash = 'form';
  };

  // Structured Data Schema matching visible text word-for-word
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.edu-mojo.com/about-us#page",
        "url": "https://www.edu-mojo.com/about-us",
        "name": "About EduMojo",
        "headline": "Helping schools focus on what truly matters: education",
        "description": "Learn about EduMojo, the AI-powered school ERP built by Webmagiks in Pune and used by 15+ schools, colleges and institutes in India and Dubai.",
        "about": {
          "@type": "SoftwareApplication",
          "name": "EduMojo",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Web, Android, iOS",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
          },
          "creator": {
            "@type": "Organization",
            "name": "Webmagiks",
            "url": "https://www.webmagiks.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.edu-mojo.com/about-us#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who makes EduMojo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EduMojo is built by Webmagiks, a technology company based in Pune, Maharashtra, India. Webmagiks designs, implements and supports EduMojo for schools, colleges and institutes in India and Dubai."
            }
          },
          {
            "@type": "Question",
            "name": "How many institutions use EduMojo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EduMojo is used by 15+ schools, colleges and institutes across India and Dubai, and has impacted more than 20,000 students and teachers."
            }
          },
          {
            "@type": "Question",
            "name": "What makes EduMojo different from other school ERPs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EduMojo combines four things in one product: a single unified platform for every department, deep school workflows from admission to alumni, AI built into daily work, and hands-on implementation, training and support."
            }
          },
          {
            "@type": "Question",
            "name": "Does EduMojo work for colleges and institutes, not just schools?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EduMojo is built for schools, colleges and institutes. Its clients include K-12 schools, a preschool and colleges such as Arihant College in Pune and Sangamner College."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.edu-mojo.com/about-us#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.edu-mojo.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://www.edu-mojo.com/about-us"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full bg-[#ffffff] text-[#0b1f14] font-sans overflow-x-hidden selection:bg-[#2eca8b]/30 selection:text-[#0b1f14]">
      
      {/* ==================================================
          1. HERO (short lava gradient, centred, headline words slide up on load)
          ================================================== */}
      <div className="lava text-center">
        <div className="lava-blobs" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
          <div className="blob b5" />
          <div className="blob b6" />
        </div>

        <section className="pt-28 pb-10 sm:pt-32 sm:pb-12">
          <div className="page-container space-y-4">
            
            {/* Kicker */}
            <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
              About EduMojo
            </p>

            {/* Exactly ONE <h1>: Headline with words slide up on load */}
            <h1 className="font-black text-[#0b1f14] tracking-[-0.035em] text-3xl sm:text-5xl lg:text-6xl leading-[1.12]">
              Helping schools focus on what truly matters: <span className="text-[#15803d]">education</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#3f4b45] max-w-2xl mx-auto leading-relaxed">
              EduMojo is an AI-powered school ERP built by Webmagiks. We bring admissions, academics, communication, finance and operations into one platform, so the people who run schools spend less time on paperwork and more time on students.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex items-center justify-center">
              <button
                type="button"
                onClick={handleBookDemo}
                className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-md shadow-[#16a34a]/20 hover:shadow-lg hover:shadow-[#16a34a]/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>Book a demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>
      </div>

      {/* ==================================================
          2. NUMBERS STRIP (same 4 stat cards, count up once when scrolled into view)
          ================================================== */}
      <section 
        ref={statsRef}
        className="py-8 sm:py-10 bg-[#f7faf8] border-b border-[rgba(11,31,20,0.06)]"
      >
        <div className="page-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto text-center">
            
            {/* Stat 1: 40% */}
            <ScrollReveal delayMs={0}>
              <div className="rounded-2xl p-4 sm:p-5 bg-transparent border border-transparent text-center h-full flex flex-col justify-center">
                <div 
                  className="text-3xl sm:text-4xl lg:text-[40px] font-black font-sans text-[#15803d] tracking-tight"
                >
                  {stats.teachersWork}%
                </div>
                <div className="text-xs sm:text-[13px] text-[#0b1f14] font-bold mt-2 leading-snug">
                  Teachers spend up to 40% less time on routine work
                </div>
              </div>
            </ScrollReveal>

            {/* Stat 2: 20+ Schools */}
            <ScrollReveal delayMs={60}>
              <div className="rounded-2xl p-4 sm:p-5 bg-transparent border border-transparent text-center h-full flex flex-col justify-center">
                <div 
                  className="text-3xl sm:text-4xl lg:text-[40px] font-black font-sans text-[#15803d] tracking-tight"
                >
                  {stats.schools}+
                </div>
                <div className="text-xs sm:text-[13px] text-[#0b1f14] font-bold mt-2 leading-snug">
                  Schools, Colleges &amp; Institutes Served Internationally
                </div>
              </div>
            </ScrollReveal>

            {/* Stat 3: 20,000+ */}
            <ScrollReveal delayMs={120}>
              <div className="rounded-2xl p-4 sm:p-5 bg-transparent border border-transparent text-center h-full flex flex-col justify-center">
                <div 
                  className="text-3xl sm:text-4xl lg:text-[40px] font-black font-sans text-[#15803d] tracking-tight"
                >
                  {stats.students.toLocaleString('en-IN')}+
                </div>
                <div className="text-xs sm:text-[13px] text-[#0b1f14] font-bold mt-2 leading-snug">
                  Students &amp; teachers impacted
                </div>
              </div>
            </ScrollReveal>

            {/* Stat 4: 24+ */}
            <ScrollReveal delayMs={180}>
              <div className="rounded-2xl p-4 sm:p-5 bg-transparent border border-transparent text-center h-full flex flex-col justify-center">
                <div 
                  className="text-3xl sm:text-4xl lg:text-[40px] font-black font-sans text-[#15803d] tracking-tight"
                >
                  {stats.modules}+
                </div>
                <div className="text-xs sm:text-[13px] text-[#0b1f14] font-bold mt-2 leading-snug">
                  Modules, one simple app
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Footnote under stats row */}
          <p className="text-center text-xs text-[#6b7a72] mt-4">
            *Based on routine task time reported across partner schools, 2025–26
          </p>
        </div>
      </section>

      {/* ==================================================
          3. OUR STORY (two columns: text left, image right; stack on mobile)
          ================================================== */}
      <section className="py-12 sm:py-16 border-b border-[rgba(11,31,20,0.06)] bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-4">
              <ScrollReveal>
                <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                  Our story
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1 mb-4">
                  Built by people who understand how schools really run
                </h2>
                
                <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed">
                  Most schools run on a patchwork of spreadsheets, paper registers, WhatsApp groups and separate apps for fees, attendance and admissions. Data sits in different places, staff repeat the same work, and principals wait days for answers.
                </p>

                <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed">
                  EduMojo was created by Webmagiks in Pune to fix that. We started with one goal: give every institution a single, intelligent platform that handles the whole journey, from the first admission enquiry to the alumni network.
                </p>

                <p className="text-sm sm:text-base text-[#0b1f14] font-medium leading-relaxed bg-[#f0fdf4]/70 p-4 sm:p-5 rounded-2xl border border-[#2eca8b]/30 shadow-xs">
                  EduMojo grew out of the work we were already doing with schools and the problems we kept seeing every day. We built it by listening to the people running schools, understanding where things got difficult, and turning those lessons into a product we’d actually want to use ourselves.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Column: Real Team Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal delayMs={100}>
                <TeamPhotoCard />
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          4. MISSION & VISION (Modern Elevated Cards with Interactive Hover Features)
          ================================================== */}
      <section className="py-12 sm:py-16 border-b border-[rgba(11,31,20,0.06)] bg-[#f7faf8]">
        <div className="page-container space-y-8">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                Purpose &amp; Direction
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight">
                Our mission and vision
              </h2>
              <p className="text-xs sm:text-sm text-[#4b5563] pt-1">
                Built in Pune for schools, colleges and institutes in India and Dubai that value speed, simplicity and trust.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Mission */}
            <ScrollReveal delayMs={0}>
              <div 
                className="group relative bg-white rounded-3xl p-7 sm:p-9 border border-[rgba(11,31,20,0.08)] shadow-[0_4px_24px_rgba(11,31,20,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(21,128,61,0.18)] hover:border-[#2eca8b]/70 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-default h-full"
              >
                {/* Background ambient mesh bloom */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br from-[#2eca8b]/15 via-[#16a34a]/10 to-transparent blur-2xl group-hover:scale-150 group-hover:opacity-100 opacity-40 transition-all duration-500" />
                
                <div>
                  {/* Top row with modern icon badge */}
                  <div className="flex items-center justify-end mb-5">
                    <span className="ic lg">
                      <i className="ph-bold ph-target" />
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight group-hover:text-[#15803d] transition-colors duration-200 mb-3">
                    Empowering schools to focus on teaching
                  </h3>
                  
                  <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed">
                    To empower schools to focus on what truly matters, education, by bringing admissions, academics, finance, communication, operations and AI together in one future-ready platform.
                  </p>
                </div>

                {/* Subtle animated interactive accent bar */}
                <div className="pt-6">
                  <div className="w-12 group-hover:w-full h-1 bg-gradient-to-r from-[#15803d] via-[#16a34a] to-[#2eca8b] rounded-full transition-all duration-500" />
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Vision */}
            <ScrollReveal delayMs={100}>
              <div 
                className="group relative bg-white rounded-3xl p-7 sm:p-9 border border-[rgba(11,31,20,0.08)] shadow-[0_4px_24px_rgba(11,31,20,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(15,118,110,0.18)] hover:border-[#14b8a6]/70 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-default h-full"
              >
                {/* Background ambient mesh bloom */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br from-[#14b8a6]/15 via-[#0f766e]/10 to-transparent blur-2xl group-hover:scale-150 group-hover:opacity-100 opacity-40 transition-all duration-500" />

                <div>
                  {/* Top row with modern icon badge */}
                  <div className="flex items-center justify-end mb-5">
                    <span className="ic lg">
                      <i className="ph-bold ph-eye" />
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0b1f14] tracking-tight group-hover:text-[#0f766e] transition-colors duration-200 mb-3">
                    Connected data across every campus
                  </h3>

                  <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed">
                    A future where every school, college and institute, whatever its size, runs on connected data: less manual work, better visibility, faster communication and smarter decisions.
                  </p>
                </div>

                {/* Subtle animated interactive accent bar */}
                <div className="pt-6">
                  <div className="w-12 group-hover:w-full h-1 bg-gradient-to-r from-[#0f766e] via-[#14b8a6] to-[#2eca8b] rounded-full transition-all duration-500" />
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ==================================================
          5. WHAT WE STAND FOR (4 cards in a row, 2x2 on tablet, 1 col mobile)
          ================================================== */}
      <section className="py-12 sm:py-16 border-b border-[rgba(11,31,20,0.06)] bg-white">
        <div className="page-container space-y-8">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                What makes EduMojo different
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
                Four things we never compromise on
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1: One unified platform */}
            <ScrollReveal delayMs={0}>
              <GlowCard className="group p-6 sm:p-7 h-full flex flex-col justify-between rounded-3xl border border-[rgba(11,31,20,0.08)] hover:border-[#2eca8b]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(21,128,61,0.12)]">
                <div>
                  <div className="mb-5">
                    <span className="ic lg">
                      <i className="ph-bold ph-squares-four" />
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight group-hover:text-[#15803d] transition-colors duration-200">
                    One unified platform
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                    Every department works from the same system and the same data, so nothing falls through the gaps.
                  </p>
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Card 2: Deep school workflows */}
            <ScrollReveal delayMs={70}>
              <GlowCard className="group p-6 sm:p-7 h-full flex flex-col justify-between rounded-3xl border border-[rgba(11,31,20,0.08)] hover:border-[#14b8a6]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(15,118,110,0.12)]">
                <div>
                  <div className="mb-5">
                    <span className="ic lg">
                      <i className="ph-bold ph-sliders" />
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight group-hover:text-[#0f766e] transition-colors duration-200">
                    Deep school workflows
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                    24+ modules shaped around real school processes, from admissions and timetables to certificates and alumni.
                  </p>
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Card 3: AI that does real work */}
            <ScrollReveal delayMs={140}>
              <GlowCard className="group p-6 sm:p-7 h-full flex flex-col justify-between rounded-3xl border border-[rgba(11,31,20,0.08)] hover:border-[#2eca8b]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(21,128,61,0.12)]">
                <div>
                  <div className="mb-5">
                    <span className="ic lg">
                      <i className="ph-bold ph-sparkle" />
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight group-hover:text-[#15803d] transition-colors duration-200">
                    AI that does real work
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                    An AI assistant, at-risk student insights and automated workflows that save staff hours every week.
                  </p>
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Card 4: Operational excellence */}
            <ScrollReveal delayMs={210}>
              <GlowCard className="group p-6 sm:p-7 h-full flex flex-col justify-between rounded-3xl border border-[rgba(11,31,20,0.08)] hover:border-[#2eca8b]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(21,128,61,0.12)]">
                <div>
                  <div className="mb-5">
                    <span className="ic lg">
                      <i className="ph-bold ph-headset" />
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight group-hover:text-[#15803d] transition-colors duration-200">
                    Operational excellence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                    Reliable daily operations backed by implementation guidance, training and ongoing support.
                  </p>
                </div>
              </GlowCard>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ==================================================
          6. WHO WE SERVE (Logo Marquee Panel)
          ================================================== */}
      <LogoMarquee />

      {/* ==================================================
          7. HOW WE WORK WITH YOU (3 steps in a row with a thin connecting line; numbered 1-3)
          ================================================== */}
      <section className="py-12 sm:py-16 border-b border-[rgba(11,31,20,0.06)] bg-white">
        <div className="page-container space-y-8">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                Support &amp; success
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
                We set you up, train your team and stay with you
              </h2>
            </div>
          </ScrollReveal>

          {/* 3 Steps in a row connected with thin line */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Connecting horizontal line on desktop */}
            <div 
              className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[1.5px] bg-[#16a34a]/25 z-0" 
              aria-hidden="true"
            />

            {/* Step 1 */}
            <ScrollReveal delayMs={0}>
              <div className="relative z-10 bg-white rounded-[18px] p-6 border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white font-mono font-black text-lg flex items-center justify-center mb-4 shadow-md shadow-[#16a34a]/20">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0b1f14] mb-2 tracking-tight">
                  Implementation guidance
                </h3>
                <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                  Expert support at every step, from setting up your data to going live.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delayMs={100}>
              <div className="relative z-10 bg-white rounded-[18px] p-6 border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white font-mono font-black text-lg flex items-center justify-center mb-4 shadow-md shadow-[#16a34a]/20">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0b1f14] mb-2 tracking-tight">
                  Training &amp; onboarding
                </h3>
                <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                  Hands-on training that gets administrators, teachers and staff up to speed quickly.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delayMs={200}>
              <div className="relative z-10 bg-white rounded-[18px] p-6 border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white font-mono font-black text-lg flex items-center justify-center mb-4 shadow-md shadow-[#16a34a]/20">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0b1f14] mb-2 tracking-tight">
                  Ongoing support
                </h3>
                <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                  We are here whenever you need us, long after launch.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ==================================================
          8. TESTIMONIALS (reuse the Home testimonial carousel, same quotes)
          ================================================== */}
      <section className="py-12 sm:py-16 bg-[#ffffff] border-b border-[rgba(11,31,20,0.06)]">
        <div className="page-container">
          <ScrollReveal>
            <TestimonialsCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================================================
          9. FAQ (Universal accordion with green '+' toggle)
          ================================================== */}
      <UniversalFaqSection
        id="faq"
        kicker="FAQ"
        title="About EduMojo: common questions"
        items={[
          {
            question: 'Who makes EduMojo?',
            answer:
              'EduMojo is built by Webmagiks, a technology company based in Pune, Maharashtra, India. Webmagiks designs, implements and supports EduMojo for schools, colleges and institutes in India and Dubai.',
          },
          {
            question: 'How many institutions use EduMojo?',
            answer:
              'EduMojo is used by 15+ schools, colleges and institutes across India and Dubai, and has impacted more than 20,000 students and teachers.',
          },
          {
            question: 'What makes EduMojo different from other school ERPs?',
            answer:
              'EduMojo combines four things in one product: a single unified platform for every department, deep school workflows from admission to alumni, AI built into daily work, and hands-on implementation, training and support.',
          },
          {
            question: 'Does EduMojo work for colleges and institutes, not just schools?',
            answer:
              'Yes. EduMojo is built for schools, colleges and institutes. Its clients include K-12 schools, a preschool and colleges such as Arihant College in Pune and Sangamner College.',
          },
        ]}
      />

      {/* ==================================================
          10. CTA BAND (lava gradient block, like Home CTA but without form)
          ================================================== */}
      <div className="lava text-center">
        <div className="lava-blobs" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
          <div className="blob b5" />
          <div className="blob b6" />
        </div>

        <section className="py-14 sm:py-16">
          <ScrollReveal>
            <div className="page-container space-y-5 text-center">
              <h2 
                className="font-black text-[#0b1f14] tracking-[-0.035em] text-3xl sm:text-5xl"
              >
                See EduMojo at your school
              </h2>
              <p className="text-base sm:text-lg text-[#3f4b45] max-w-xl mx-auto">
                Book a demo and our team will walk you through the modules that matter most to your institution.
              </p>
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={handleBookDemo}
                  className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-[#16a34a]/25 hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Book a demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>

      {/* ==================================================
          STRUCTURED DATA (JSON-LD before closing root)
          ================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

    </div>
  );
};
