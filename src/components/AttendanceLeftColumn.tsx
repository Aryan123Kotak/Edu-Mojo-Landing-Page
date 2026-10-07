import React, { useEffect, useRef } from 'react';

interface AttendanceLeftColumnProps {
  onScheduleDemo?: () => void;
}

export const AttendanceLeftColumn: React.FC<AttendanceLeftColumnProps> = ({ onScheduleDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const sec = containerRef.current;
    const title = titleRef.current;
    if (!sec || !title) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // wrap plain headline words so they slide up one by one (the highlighted phrase stays one piece)
    let i = 0;
    Array.prototype.slice.call(title.childNodes).forEach((n: Node) => {
      if (n.nodeType !== 3) {
        if (n instanceof HTMLElement) {
          n.style.setProperty('--i', String(i++));
        }
        return;
      }
      const frag = document.createDocumentFragment();
      (n.textContent || '').split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
          return;
        }
        const w = document.createElement('span');
        w.className = 'w';
        const s = document.createElement('span');
        s.style.setProperty('--i', String(i++));
        s.textContent = part;
        w.appendChild(s);
        frag.appendChild(w);
      });
      if (n.parentNode) {
        n.parentNode.replaceChild(frag, n);
      }
    });

    function play() {
      if (!sec) return;
      sec.classList.add('noanim');
      sec.classList.remove('play');
      void sec.offsetWidth;
      sec.classList.remove('noanim');
      void sec.offsetWidth;
      sec.classList.add('play');
    }

    if (reduce) {
      sec.classList.add('play');
      return;
    }

    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    io.observe(sec);

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div className="att" id="att" ref={containerRef}>
      <span className="att-kicker">Attendance in seconds</span>
      <h2 className="att-title" id="attTitle" ref={titleRef}>
        Teachers <span className="att-hl">mark attendance in seconds</span> and parents are told automatically
      </h2>
      <div className="att-rule" />
      <p className="att-copy">
        No more paper registers or end-of-day spreadsheets. Teachers tap once in the EduMojo app, parents get an alert, and the principal sees every class on one screen.
      </p>
      <ul className="att-list">
        <li style={{ '--i': 0 } as React.CSSProperties}>
          <span className="ck">
            <svg width="14" height="14" viewBox="0 0 16 16">
              <path d="M3 8.5l3.2 3L13 4.5" />
            </svg>
          </span>
          <div>
            <h3 className="text-[15px] font-bold text-[#0b1f14]">One tap per class</h3>
            <span className="d block text-xs sm:text-[13px] text-[#3f4b45] mt-0.5">
              Mark the whole class present and change only the absentees.
            </span>
          </div>
        </li>
        <li style={{ '--i': 1 } as React.CSSProperties}>
          <span className="ck">
            <svg width="14" height="14" viewBox="0 0 16 16">
              <path d="M3 8.5l3.2 3L13 4.5" />
            </svg>
          </span>
          <div>
            <h3 className="text-[15px] font-bold text-[#0b1f14]">Parents informed automatically</h3>
            <span className="d block text-xs sm:text-[13px] text-[#3f4b45] mt-0.5">
              Absence alerts, notices and reminders go out without a single phone call.
            </span>
          </div>
        </li>
        <li style={{ '--i': 2 } as React.CSSProperties}>
          <span className="ck">
            <svg width="14" height="14" viewBox="0 0 16 16">
              <path d="M3 8.5l3.2 3L13 4.5" />
            </svg>
          </span>
          <div>
            <h3 className="text-[15px] font-bold text-[#0b1f14]">Smart Assistant summaries</h3>
            <span className="d block text-xs sm:text-[13px] text-[#3f4b45] mt-0.5">
              Get an attendance summary for any class in one click, ready for the principal.
            </span>
          </div>
        </li>
      </ul>
      <div className="space-y-1 mt-6">
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            const contactEl = document.getElementById('contact');
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: 'smooth' });
            } else if (onScheduleDemo) {
              onScheduleDemo();
            }
          }}
          className="att-cta cursor-pointer"
        >
          See it in a 15-minute demo <span className="arr">→</span>
        </a>
      </div>
    </div>
  );
};
