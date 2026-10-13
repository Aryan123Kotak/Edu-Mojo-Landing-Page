import React, { useEffect, useRef, useState } from 'react';
import { PageRoute } from './Navbar';

interface HeroAnnouncementAreaProps {
  onNavigate: (page: PageRoute) => void;
  onRequestCallBack: () => void;
}

const HeroRotatingWord: React.FC = () => {
  const rotRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const rot = rotRef.current;
    const textSpan = textRef.current;
    if (!rot || !textSpan) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const words = ['attendance', 'homework', 'report cards', 'parent updates', 'timetables'];
    let wi = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const sizeRot = () => {
      if (rotRef.current && textRef.current) {
        // Add safety margin so font tracking (-0.05em), subpixel kerning and glyph overhangs are never clipped
        const rect = textRef.current.getBoundingClientRect();
        const baseWidth = Math.ceil(rect.width);
        rotRef.current.style.width = `${baseWidth + 14}px`;
      }
    };

    sizeRot();

    if (!reduce) {
      intervalId = setInterval(() => {
        if (!textRef.current || !rotRef.current) return;
        const span = textRef.current;
        span.classList.add('out');

        timeoutId = setTimeout(() => {
          if (!textRef.current || !rotRef.current) return;
          wi = (wi + 1) % words.length;
          const currentSpan = textRef.current;
          currentSpan.textContent = words[wi];
          currentSpan.className = 'pre whitespace-nowrap';
          sizeRot();
          void currentSpan.offsetWidth;
          currentSpan.className = 'whitespace-nowrap';
          requestAnimationFrame(sizeRot);
        }, 420);
      }, 2600);
    }

    window.addEventListener('resize', sizeRot);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(sizeRot);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('resize', sizeRot);
    };
  }, []);

  return (
    <span className="rot whitespace-nowrap" id="rot" ref={rotRef}>
      <span ref={textRef} className="whitespace-nowrap">
        attendance
      </span>
    </span>
  );
};

export const HeroAnnouncementArea: React.FC<HeroAnnouncementAreaProps> = ({
  onNavigate,
  onRequestCallBack,
}) => {
  // Four static stats that count up once from 0 when the page loads (1.4s, ease-out)
  const [stats, setStats] = useState({
    teachersWork: 0,
    schools: 0,
    impacted: 0,
    modules: 0,
  });

  useEffect(() => {
    // 1.4s count up on load
    const duration = 1400;
    const startTime = performance.now();
    let animFrame: number;

    const animateStats = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setStats({
        teachersWork: Math.round(40 * ease),
        schools: Math.round(20 * ease),
        impacted: Math.round(20000 * ease),
        modules: Math.round(24 * ease),
      });

      if (progress < 1) {
        animFrame = requestAnimationFrame(animateStats);
      }
    };

    animFrame = requestAnimationFrame(animateStats);

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const handleBookDemo = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onRequestCallBack();
    }
  };

  const handleScrollTeacherTime = () => {
    const el = document.getElementById('teacher-time');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 2. Sliding Headline with Rotating Word in 2 lines */}
      <h1 id="heroTitle">
        <span className="block">
          <span className="w pr-1">
            <span style={{ '--i': 0 } as React.CSSProperties}>Teachers</span>
          </span>{' '}
          <span className="w pr-1">
            <span style={{ '--i': 1 } as React.CSSProperties}>spend</span>
          </span>{' '}
          <span className="w">
            <span className="g" style={{ '--i': 2 } as React.CSSProperties}>up</span>
          </span>{' '}
          <span className="w">
            <span className="g" style={{ '--i': 3 } as React.CSSProperties}>to</span>
          </span>{' '}
          <span className="w">
            <span className="g" style={{ '--i': 4 } as React.CSSProperties}>40%</span>
          </span>{' '}
          <span className="w pr-1">
            <span className="g" style={{ '--i': 5 } as React.CSSProperties}>less</span>
          </span>{' '}
          <span className="w">
            <span className="g" style={{ '--i': 6 } as React.CSSProperties}>time</span>
          </span>
        </span>
        <span className="block mt-0.5 sm:mt-1">
          <span className="w">
            <span style={{ '--i': 7 } as React.CSSProperties}>on</span>
          </span>{' '}
          <span className="w !overflow-visible">
            <span style={{ '--i': 8 } as React.CSSProperties} className="!overflow-visible">
              <HeroRotatingWord />
            </span>
          </span>
        </span>
      </h1>

      {/* 3. Subtext Paragraph */}
      <p className="lead">
        EduMojo is a simple, affordable school ERP that takes routine work off teachers' plates, from attendance and homework to report cards and parent updates. Easy to learn, and priced for real school budgets.
      </p>

      {/* 4. Action Buttons */}
      <div className="hero-btns">
        <button
          type="button"
          onClick={handleBookDemo}
          className="w-auto bg-[#072614] hover:bg-[#0b3d1f] text-white border border-[#22c55e]/40 hover:border-[#4ade80] font-bold text-[15px] px-[36px] py-[15px] rounded-[50px] transition-all duration-200 cursor-pointer shadow-[0_14px_30px_rgba(7,38,20,0.3)] hover:shadow-[0_16px_36px_rgba(34,197,94,0.35)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5 group backdrop-blur-md"
        >
          <span className="tracking-wide">Book a demo</span>
          <span className="text-[#4ade80] group-hover:translate-x-1.5 transition-transform duration-200">→</span>
        </button>
      </div>

      {/* 6. Four Static Stats that count up once from 0 (1.4s, ease-out) */}
      <div className="w-full max-w-5xl mx-auto mt-12 sm:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {/* Stat 1: 40% */}
          <div className="p-2 sm:p-3 bg-transparent dark:bg-transparent border-0 dark:border-0 shadow-none dark:shadow-none transition-all duration-300">
            <div className="text-3xl sm:text-4xl lg:text-[46px] font-black font-sans text-[#15803d] dark:text-[#22c55e] tracking-tight">
              {stats.teachersWork}%
            </div>
            <p className="text-xs sm:text-[13.5px] text-[#0b1f14] dark:text-[#f0fdf4] font-bold mt-2 leading-snug max-w-[210px] mx-auto">
              Teachers spend up to 40% less time on routine work
            </p>
          </div>

          {/* Stat 2: 20+ Schools */}
          <div className="p-2 sm:p-3 bg-transparent dark:bg-transparent border-0 dark:border-0 shadow-none dark:shadow-none transition-all duration-300">
            <div className="text-3xl sm:text-4xl lg:text-[46px] font-black font-sans text-[#15803d] dark:text-[#22c55e] tracking-tight">
              {stats.schools}+
            </div>
            <p className="text-xs sm:text-[13.5px] text-[#0b1f14] dark:text-[#f0fdf4] font-bold mt-2 leading-snug max-w-[210px] mx-auto">
              Schools, Colleges &amp; Institutes Served Internationally
            </p>
          </div>

          {/* Stat 3: 20,000+ */}
          <div className="p-2 sm:p-3 bg-transparent dark:bg-transparent border-0 dark:border-0 shadow-none dark:shadow-none transition-all duration-300">
            <div className="text-3xl sm:text-4xl lg:text-[46px] font-black font-sans text-[#15803d] dark:text-[#22c55e] tracking-tight">
              {stats.impacted.toLocaleString('en-IN')}+
            </div>
            <p className="text-xs sm:text-[13.5px] text-[#0b1f14] dark:text-[#f0fdf4] font-bold mt-2 leading-snug max-w-[210px] mx-auto">
              Students &amp; teachers impacted
            </p>
          </div>

          {/* Stat 4: 24+ */}
          <div className="p-2 sm:p-3 bg-transparent dark:bg-transparent border-0 dark:border-0 shadow-none dark:shadow-none transition-all duration-300">
            <div className="text-3xl sm:text-4xl lg:text-[46px] font-black font-sans text-[#15803d] dark:text-[#22c55e] tracking-tight">
              {stats.modules}+
            </div>
            <p className="text-xs sm:text-[13.5px] text-[#0b1f14] dark:text-[#f0fdf4] font-bold mt-2 leading-snug max-w-[210px] mx-auto">
              Modules, one simple app
            </p>
          </div>
        </div>

        {/* Footnote under stats row */}
        <p className="text-center text-xs text-[#0b1f14]/75 dark:text-[#f0fdf4]/75 mt-5 font-semibold">
          *Based on routine task time reported across partner schools, 2025–26
        </p>
      </div>
    </>
  );
};
