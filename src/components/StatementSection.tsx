import React, { useEffect, useRef } from 'react';

export const StatementSection: React.FC = () => {
  const secRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLParagraphElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = secRef.current;
    const line = lineRef.current;
    const box = boxRef.current;
    if (!sec || !line || !box) return;

    const tools = sec.querySelectorAll<HTMLElement>('.tool');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // wrap each plain word so it can darken one by one
    let i = 0;
    Array.prototype.slice.call(line.childNodes).forEach((n: Node) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        (n.textContent || '').split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const s = document.createElement('span');
          s.className = 'word';
          s.style.setProperty('--i', String(i++));
          s.textContent = part;
          frag.appendChild(s);
        });
        if (n.parentNode) {
          n.parentNode.replaceChild(frag, n);
        }
      } else if (n instanceof HTMLElement && n.classList.contains('strike')) {
        n.classList.add('word');
        n.style.setProperty('--i', String(i++));
      }
    });

    function aim() {
      if (!box) return;
      const b = box.getBoundingClientRect();
      const cx = b.left + b.width / 2;
      const cy = b.top + b.height / 2;
      tools.forEach((t) => {
        t.classList.remove('absorb');
        const r = t.getBoundingClientRect();
        t.style.setProperty('--tx', `${cx - (r.left + r.width / 2)}px`);
        t.style.setProperty('--ty', `${cy - (r.top + r.height / 2)}px`);
      });
    }

    function play() {
      if (!sec) return;
      sec.classList.add('noanim');
      sec.classList.remove('play');
      tools.forEach((t) => { t.classList.remove('absorb'); });
      void sec.offsetWidth;
      sec.classList.remove('noanim');
      void sec.offsetWidth;
      aim();
      sec.classList.add('play');
      tools.forEach((t) => { t.classList.add('absorb'); });
    }

    if (reduce) {
      sec.classList.add('play');
      return;
    }

    let playTimer: number | null = null;
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            playTimer = window.setTimeout(() => {
              play();
            }, 300);
            io.disconnect();
          }
        });
      },
      { threshold: 0.65 }
    );

    io.observe(sec);

    return () => {
      if (playTimer) clearTimeout(playTimer);
      io.disconnect();
    };
  }, []);

  return (
    <section className="statement" id="statement" ref={secRef}>
      <div className="tool t1">
        <span className="ic" style={{ background: '#dcfce7', color: '#15803d' }}>XLS</span>
        <span>Fee_Register_FINAL(3).xlsx<small>Last edited 3 weeks ago</small></span>
      </div>
      <div className="tool t2">
        <span className="ic" style={{ background: '#fef3c7', color: '#b45309' }}>✎</span>
        <span>Paper attendance ledger<small>Register 4 of 12</small></span>
      </div>
      <div className="tool t3">
        <span className="ic" style={{ background: '#fee2e2', color: '#b91c1c' }}>SMS</span>
        <span>Bulk SMS failed<small>14 parents not reached</small></span>
      </div>
      <div className="tool t4">
        <span className="ic" style={{ background: '#ede9fe', color: '#7c3aed' }}>CSV</span>
        <span>Marksheet_Term2_draft(2).csv<small>Broken formula in row 38</small></span>
      </div>
      <div className="tool t5">
        <span className="ic" style={{ background: '#e0f2fe', color: '#0284c7' }}>XLS</span>
        <span>Timetable_Matrix_2026_v4.xlsx<small>3 teacher room clashes</small></span>
      </div>
      <div className="tool t6">
        <span className="ic" style={{ background: '#ffedd5', color: '#c2410c' }}>PDF</span>
        <span>TC_Certificate_Queue.pdf<small>18 pending manual sign-offs</small></span>
      </div>

      <h2 className="st-line" id="stLine" ref={lineRef as any}>
        Your teachers became teachers to teach, not to do more <span className="strike">paperwork.<svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true"><path d="M4 12 C 60 4, 120 16, 180 8 S 270 6, 296 10" /></svg></span>
      </h2>
      <div className="st-box-wrap">
        <div className="st-box" id="stBox" ref={boxRef}>
          <span className="brand">EduMojo</span> handles it.
        </div>
      </div>
      <p className="st-sub">
        Registers, spreadsheets, report-card templates and endless parent calls. EduMojo does the routine work, so teachers get their time back for students.
      </p>
    </section>
  );
};
