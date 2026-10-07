import React, { useEffect, useRef } from 'react';

interface TeacherTasksRotatorProps {
  onScheduleDemo?: () => void;
}

export const TeacherTasksRotator: React.FC<TeacherTasksRotatorProps> = ({ onScheduleDemo }) => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tabs = root.querySelectorAll<HTMLButtonElement>('.ts-tab');
    const panels = root.querySelectorAll<HTMLElement>('.ts-text');
    const imgs = root.querySelectorAll<HTMLElement>('.ts-shot');
    const cap = root.querySelector<HTMLElement>('#tsCap');

    const caps = [
      'Daily update in the EduMojo app (parent view)',
      'Announcements in the EduMojo app (teacher view)',
      'Report cards in the student profile (parent view)'
    ];

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cur = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let visible = false;
    let hovered = false;

    function restartBar() {
      if (!tabs[cur]) return;
      const bar = tabs[cur].querySelector<HTMLElement>('.bar');
      if (bar) {
        bar.style.animation = 'none';
        void bar.offsetWidth;
        bar.style.animation = '';
      }
    }

    function schedule() {
      if (timer) clearTimeout(timer);
      if (reduce || !visible || hovered) return;
      timer = setTimeout(() => {
        show((cur + 1) % tabs.length);
      }, 5000);
    }

    function show(i: number, focusTab = false) {
      cur = i;
      tabs.forEach((t, j) => {
        const on = j === i;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });

      panels.forEach((p, j) => {
        p.classList.remove('in');
        p.hidden = j !== i;
      });

      // trigger reflow
      if (root) void root.offsetWidth;

      if (panels[i]) {
        panels[i].classList.add('in');
      }

      imgs.forEach((im, j) => {
        im.classList.toggle('on', j === i);
      });

      if (cap && caps[i]) {
        cap.textContent = caps[i];
      }

      restartBar();

      if (focusTab && tabs[i]) {
        tabs[i].focus();
      }

      schedule();
    }

    const tabListeners: Array<() => void> = [];

    tabs.forEach((t, i) => {
      const clickHandler = () => {
        show(i);
      };

      const keyHandler = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          show((cur + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length, true);
        }
      };

      t.addEventListener('click', clickHandler);
      t.addEventListener('keydown', keyHandler);

      tabListeners.push(() => {
        t.removeEventListener('click', clickHandler);
        t.removeEventListener('keydown', keyHandler);
      });
    });

    const onMouseEnter = () => {
      hovered = true;
      root.classList.add('paused');
      if (timer) clearTimeout(timer);
    };

    const onMouseLeave = () => {
      hovered = false;
      root.classList.remove('paused');
      restartBar();
      schedule();
    };

    const onFocusIn = () => {
      hovered = true;
      root.classList.add('paused');
      if (timer) clearTimeout(timer);
    };

    const onFocusOut = () => {
      hovered = false;
      root.classList.remove('paused');
      restartBar();
      schedule();
    };

    root.addEventListener('mouseenter', onMouseEnter);
    root.addEventListener('mouseleave', onMouseLeave);
    root.addEventListener('focusin', onFocusIn);
    root.addEventListener('focusout', onFocusOut);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        visible = e.isIntersecting;
        if (visible) {
          show(cur);
        } else {
          if (timer) clearTimeout(timer);
        }
      });
    }, { threshold: 0.35 });

    observer.observe(root);

    // Initial display
    show(0);

    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
      tabListeners.forEach((cleanup) => cleanup());
      root.removeEventListener('mouseenter', onMouseEnter);
      root.removeEventListener('mouseleave', onMouseLeave);
      root.removeEventListener('focusin', onFocusIn);
      root.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    } else if (onScheduleDemo) {
      onScheduleDemo();
    }
  };

  return (
    <section className="ts" id="teacherSlider" aria-label="How EduMojo saves teachers time" ref={rootRef}>
      <div className="ts-grid">
        <div>
          <div className="ts-tabs" role="tablist" aria-label="Teacher tasks">
            <button className="ts-tab" role="tab" id="ts-tab-0" aria-controls="ts-panel-0" aria-selected="true">
              <b>1</b>
              <span className="ic sm"><i className="ph-bold ph-notebook" aria-hidden="true"></i></span>
              Homework
              <span className="bar"></span>
            </button>
            <button className="ts-tab" role="tab" id="ts-tab-1" aria-controls="ts-panel-1" aria-selected="false" tabIndex={-1}>
              <b>2</b>
              <span className="ic sm"><i className="ph-bold ph-megaphone" aria-hidden="true"></i></span>
              Parent updates
              <span className="bar"></span>
            </button>
            <button className="ts-tab" role="tab" id="ts-tab-2" aria-controls="ts-panel-2" aria-selected="false" tabIndex={-1}>
              <b>3</b>
              <span className="ic sm"><i className="ph-bold ph-exam" aria-hidden="true"></i></span>
              Report cards
              <span className="bar"></span>
            </button>
          </div>

          <div className="ts-texts">
            <div className="ts-text in" role="tabpanel" id="ts-panel-0" aria-labelledby="ts-tab-0">
              <span className="ts-kicker ts-anim">Daily academic updates</span>
              <h2 className="ts-h ts-anim">Classwork and homework for every subject, <span className="ts-hl">in one daily update</span></h2>
              <div className="ts-anim">
                <div className="ts-rule"></div>
                <p className="ts-p">Teachers post what was covered in class and what to do at home. Students and parents see it subject by subject in the EduMojo app, so nothing gets lost in WhatsApp groups.</p>
              </div>
              <ul className="ts-list ts-anim">
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Classwork and homework together</h3>
                    <p>What was taught today and what is due, side by side.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Subject by subject</h3>
                    <p>Every subject of the day is one tap away.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Same update for everyone</h3>
                    <p>Students and parents see exactly what the teacher posted.</p>
                  </div>
                </li>
              </ul>
              <a href="#contact" onClick={handleCtaClick} className="ts-cta ts-anim">Book a demo <span>→</span></a>
            </div>

            <div className="ts-text" role="tabpanel" id="ts-panel-1" aria-labelledby="ts-tab-1" hidden>
              <span className="ts-kicker ts-anim">Parent communication</span>
              <h2 className="ts-h ts-anim">One announcement reaches <span className="ts-hl">every parent at once</span></h2>
              <div className="ts-anim">
                <div className="ts-rule"></div>
                <p className="ts-p">Write it once on your phone, choose a group, students or the entire institution, attach files and send. Parents get it in the EduMojo app, and by email too.</p>
              </div>
              <ul className="ts-list ts-anim">
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Class, group or whole school</h3>
                    <p>Pick groups or students, or tick Entire institution.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Email in one tick</h3>
                    <p>Tick Send email to reach parents' inboxes as well.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Files attached</h3>
                    <p>Add circulars, PDFs or images to any announcement.</p>
                  </div>
                </li>
              </ul>
              <a href="#contact" onClick={handleCtaClick} className="ts-cta ts-anim">Book a demo <span>→</span></a>
            </div>

            <div className="ts-text" role="tabpanel" id="ts-panel-2" aria-labelledby="ts-tab-2" hidden>
              <span className="ts-kicker ts-anim">Report cards</span>
              <h2 className="ts-h ts-anim">Every report card, <span className="ts-hl">one tap away for parents</span></h2>
              <div className="ts-anim">
                <div className="ts-rule"></div>
                <p className="ts-p">Report cards are published to each student's profile in the EduMojo app. Parents open the PDF any time, for this year and past years, without asking the office for a copy.</p>
              </div>
              <ul className="ts-list ts-anim">
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Report cards in the app</h3>
                    <p>Published to each student's profile, term by term.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Past years kept safe</h3>
                    <p>Earlier report cards stay available as PDFs.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>The whole student profile</h3>
                    <p>Achievements and health check-ups live in the same place.</p>
                  </div>
                </li>
              </ul>
              <a href="#contact" onClick={handleCtaClick} className="ts-cta ts-anim">Book a demo <span>→</span></a>
            </div>
          </div>
        </div>

        <div>
          <div className="ts-visual">
            <figure className="ts-shot on">
              <div className="ts-phone">
                <div className="ts-screen">
                  <img 
                    src="/images/app/teacher-homework.png" 
                    alt="EduMojo app: daily update for Class IX-B showing Political Science classwork on election systems and homework to read the textbook" 
                  />
                </div>
              </div>
            </figure>
            <figure className="ts-shot">
              <div className="ts-phone">
                <div className="ts-screen">
                  <img 
                    src="/images/app/teacher-announcement.png" 
                    alt="EduMojo teacher app: new announcement for Founder's Day with message, groups, students, Entire institution and Send email ticked, and an attachment" 
                  />
                </div>
              </div>
            </figure>
            <figure className="ts-shot">
              <div className="ts-phone">
                <div className="ts-screen">
                  <img 
                    src="/images/app/teacher-report-cards.png" 
                    alt="EduMojo app: student profile with Term 1 report cards for 2026-27 and 2025-26, each with an Open PDF button" 
                  />
                </div>
              </div>
            </figure>
          </div>
          <p className="ts-cap" id="tsCap" aria-live="polite">Daily update in the EduMojo app (parent view)</p>
        </div>
      </div>
    </section>
  );
};
