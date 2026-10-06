import React, { useEffect, useRef, useState } from 'react';
import { PageRoute } from './Navbar';

interface HeroAnnouncementAreaProps {
  onNavigate: (page: PageRoute) => void;
  onRequestCallBack: () => void;
}

export const HeroAnnouncementArea: React.FC<HeroAnnouncementAreaProps> = ({
  onNavigate,
  onRequestCallBack,
}) => {
  const rotRef = useRef<HTMLSpanElement>(null);

  // Four static stats that count up once from 0 when the page loads (1.4s, ease-out)
  const [stats, setStats] = useState({
    teachersWork: 0,
    schools: 0,
    impacted: 0,
    modules: 0,
  });

  useEffect(() => {
    const rot = rotRef.current;
    if (!rot) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // The rotating word cycles: attendance → homework → report cards → parent updates → timetables. "attendance" is in the HTML at load.
    const words = ['attendance', 'homework', 'report cards', 'parent updates', 'timetables'];
    let wi = 0;

    function sizeRot() {
      if (rot && rot.firstElementChild) {
        // Add safety margin so font tracking (-0.05em), subpixel kerning and glyph overhangs are never clipped
        const rect = rot.firstElementChild.getBoundingClientRect();
        const baseWidth = Math.ceil(rect.width);
        rot.style.width = `${baseWidth + 14}px`;
      }
    }

    sizeRot();

    let intervalId: ReturnType<typeof setInterval> | null = null;

    if (!reduce) {
      intervalId = setInterval(() => {
        const cur = rot.firstElementChild;
        if (!cur) return;
        cur.classList.add('out');
        setTimeout(() => {
          wi = (wi + 1) % words.length;
          const n = document.createElement('span');
          n.className = 'pre whitespace-nowrap';
          n.textContent = words[wi];
          rot.replaceChild(n, cur);
          sizeRot();
          void n.offsetWidth;
          n.className = 'whitespace-nowrap';
          requestAnimationFrame(sizeRot);
        }, 420);
      }, 2600);
    }

    window.addEventListener('resize', sizeRot);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(sizeRot);
    }

    // 1.4s count up on load
    const duration = 1400;
    const startTime = performance.now();

    const animateStats = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setStats({
        teachersWork: Math.round(40 * ease),
        schools: Math.round(15 * ease),
        impacted: Math.round(20000 * ease),
        modules: Math.round(24 * ease),
      });

      if (progress < 1) {
        requestAnimationFrame(animateStats);
      }
    };

    const animFrame = requestAnimationFrame(animateStats);

    return () => {
      if (intervalId) clearInterval(intervalId);
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', sizeRot);
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
      {/* 1. Announcement Pill */}
      <div className="ann">
        <a 
          href="#teacher-time" 
          onClick={(e) => {
            e.preventDefault();
            handleScrollTeacherTime();
          }}
        >
          <b>WHY EDUMOJO</b>Simple. Affordable. Built around teachers <span className="arr">→</span>
        </a>
      </div>

      {/* Small label above the headline (<p>, uppercase, dark green, letter-spaced) */}
      <p 
        className="text-[11px] sm:text-xs font-black uppercase text-[#15803d] tracking-[0.16em] mb-3 select-none"
        style={{ letterSpacing: '0.16em' }}
      >
        Simple school ERP · India &amp; Dubai
      </p>

      {/* 2. Sliding Headline with Rotating Word */}
      <h1 id="heroTitle">
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
        </span>{' '}
        <span className="w">
          <span style={{ '--i': 7 } as React.CSSProperties}>on</span>
        </span>{' '}
        <span className="w !overflow-visible">
          <span style={{ '--i': 8 } as React.CSSProperties} className="!overflow-visible">
            <span className="rot whitespace-nowrap" id="rot" ref={rotRef}>
              <span className="whitespace-nowrap">attendance</span>
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
          className="w-full sm:w-auto bg-[#0b1f14] hover:bg-[#16a34a] text-white font-semibold text-[15px] px-[26px] py-[13px] rounded-[50px] transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5"
        >
          Book a demo →
        </button>

        <button
          type="button"
          onClick={handleScrollTeacherTime}
          className="w-full sm:w-auto bg-white/70 hover:bg-white text-[#0b1f14] font-semibold text-[15px] px-[26px] py-[13px] rounded-[50px] border border-[rgba(11,31,20,0.15)] backdrop-blur-md transition-all duration-200 cursor-pointer"
        >
          See how teachers save time
        </button>
      </div>

      {/* 5. Principal Photos + Trust Line */}
      <div className="trust">
        <div className="avs">
          <span className="av" tabIndex={0} style={{ background: '#15803d' }}>
            SR
            <span className="tip">
              Ms. Sangeeta Rautji<small>Dhruv Global School, Pune</small>
            </span>
          </span>
          <span className="av" tabIndex={0} style={{ background: '#0e7490' }}>
            VM
            <span className="tip">
              Ms. Vaidehi Moghe<small>Blue Ridge Public School</small>
            </span>
          </span>
          <span className="av" tabIndex={0} style={{ background: '#b45309' }}>
            MT
            <span className="tip">
              Mr. Mangesh Takpire<small>Arihant College, Pune</small>
            </span>
          </span>
          <span className="av" tabIndex={0} style={{ background: '#7c3aed' }}>
            PM
            <span className="tip">
              Ms. Pranati Mazumder<small>Dhruv Global School, Dubai</small>
            </span>
          </span>
          <span className="av" tabIndex={0} style={{ background: '#be185d' }}>
            AG
            <span className="tip">
              Dr. Arun Gaikwad<small>Sangamner College</small>
            </span>
          </span>
        </div>
        <div className="text-left text-xs sm:text-sm text-[#3f4b45] font-medium leading-tight">
          Trusted by principals at <strong>15+ schools, colleges and institutes in India &amp; Dubai</strong>
        </div>
      </div>

      {/* 6. Four Static Stats that count up once from 0 (1.4s, ease-out) */}
      <div className="w-full mx-auto mt-8 sm:mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          {/* Card 1: 40% */}
          <div className="bg-gradient-to-b from-white to-[#f0fdf4]/80 rounded-2xl p-5 sm:p-6 border border-[#2eca8b] shadow-xs hover:border-[#16a34a] hover:shadow-[0_8px_24px_rgba(46,202,139,0.16)] transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#15803d] tracking-tight">
              {stats.teachersWork}%
            </div>
            <p className="text-xs sm:text-[13px] text-[#0b1f14] font-bold mt-1.5 leading-snug">
              Up to 40% less daily work for teachers
            </p>
          </div>

          {/* Card 2: 15+ */}
          <div className="bg-gradient-to-b from-white to-[#f0fdf4]/80 rounded-2xl p-5 sm:p-6 border border-[#2eca8b] shadow-xs hover:border-[#16a34a] hover:shadow-[0_8px_24px_rgba(46,202,139,0.16)] transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#15803d] tracking-tight">
              {stats.schools}+
            </div>
            <p className="text-xs sm:text-[13px] text-[#0b1f14] font-bold mt-1.5 leading-snug">
              Schools, colleges &amp; institutes
            </p>
          </div>

          {/* Card 3: 20,000+ */}
          <div className="bg-gradient-to-b from-white to-[#f0fdf4]/80 rounded-2xl p-5 sm:p-6 border border-[#2eca8b] shadow-xs hover:border-[#16a34a] hover:shadow-[0_8px_24px_rgba(46,202,139,0.16)] transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#15803d] tracking-tight">
              {stats.impacted.toLocaleString('en-IN')}+
            </div>
            <p className="text-xs sm:text-[13px] text-[#0b1f14] font-bold mt-1.5 leading-snug">
              Students &amp; teachers impacted
            </p>
          </div>

          {/* Card 4: 24+ */}
          <div className="bg-gradient-to-b from-white to-[#f0fdf4]/80 rounded-2xl p-5 sm:p-6 border border-[#2eca8b] shadow-xs hover:border-[#16a34a] hover:shadow-[0_8px_24px_rgba(46,202,139,0.16)] transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#15803d] tracking-tight">
              {stats.modules}+
            </div>
            <p className="text-xs sm:text-[13px] text-[#0b1f14] font-bold mt-1.5 leading-snug">
              Modules, one simple app
            </p>
          </div>
        </div>

        {/* Footnote under stats row */}
        <p className="text-center text-xs text-[#6b7a72] mt-3.5">
          *[ADD: what the 40% is based on, e.g. &apos;Average reduction in time spent on routine tasks reported by teachers at EduMojo schools, 2025–26&apos;]
        </p>
      </div>
    </>
  );
};
