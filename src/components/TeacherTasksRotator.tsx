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
      'Attendance in the EduMojo app (teacher view)',
      'Management dashboard in the EduMojo app (admin view)',
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
    <section className="ts" id="teacherSlider" aria-label="How EduMojo saves time for teachers and management" ref={rootRef}>
      <div className="ts-grid">
        <div>
          <div className="ts-tabs" role="tablist" aria-label="Teacher tasks">
            <button className="ts-tab" role="tab" id="ts-tab-0" aria-controls="ts-panel-0" aria-selected="true">
              <b>1</b>
              <span className="ic sm mr-1.5">
                <i className="ph-bold ph-notebook" />
              </span>
              Homework
              <span className="bar"></span>
            </button>
            <button className="ts-tab" role="tab" id="ts-tab-1" aria-controls="ts-panel-1" aria-selected="false" tabIndex={-1}>
              <b>2</b>
              <span className="ic sm mr-1.5">
                <i className="ph-bold ph-megaphone" />
              </span>
              Parent updates
              <span className="bar"></span>
            </button>
            <button className="ts-tab" role="tab" id="ts-tab-2" aria-controls="ts-panel-2" aria-selected="false" tabIndex={-1}>
              <b>3</b>
              <span className="ic sm mr-1.5">
                <i className="ph-bold ph-user-check" />
              </span>
              Attendance
              <span className="bar"></span>
            </button>
            <button className="ts-tab" role="tab" id="ts-tab-3" aria-controls="ts-panel-3" aria-selected="false" tabIndex={-1}>
              <b>4</b>
              <span className="ic sm mr-1.5">
                <i className="ph-bold ph-squares-four" />
              </span>
              Dashboard
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
              <span className="ts-kicker ts-anim">Attendance</span>
              <h2 className="ts-h ts-anim">Attendance marked on the phone, <span className="ts-hl">parents see it the same day</span></h2>
              <div className="ts-anim">
                <div className="ts-rule"></div>
                <p className="ts-p">Teachers open their class on the phone, mark each student present or absent and save. Parents see it in the EduMojo app, and the office gets class-wise attendance without collecting paper registers.</p>
              </div>
              <ul className="ts-list ts-anim">
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Present or absent in a tap</h3>
                    <p>One list per class, with the day's totals on top.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Parents stay informed</h3>
                    <p>Attendance shows in the EduMojo app for every parent.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>No paper registers</h3>
                    <p>Class-wise attendance reaches the office as soon as it is saved.</p>
                  </div>
                </li>
              </ul>
              <a href="#contact" onClick={handleCtaClick} className="ts-cta ts-anim">Book a demo <span>→</span></a>
            </div>

            <div className="ts-text" role="tabpanel" id="ts-panel-3" aria-labelledby="ts-tab-3" hidden>
              <span className="ts-kicker ts-anim">Management dashboard</span>
              <h2 className="ts-h ts-anim">The whole school <span className="ts-hl">on one screen</span></h2>
              <div className="ts-anim">
                <div className="ts-rule"></div>
                <p className="ts-p">Principals and management see today's attendance, fee collection, new admission enquiries and announcements together, instead of asking each department for a report.</p>
              </div>
              <ul className="ts-list ts-anim">
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Today at a glance</h3>
                    <p>Attendance for the whole school and the classes that need a look.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Fees and admissions</h3>
                    <p>Collected, pending and new enquiries in one place.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>
                  </span>
                  <div>
                    <h3>Act early</h3>
                    <p>Spot a dip in attendance or fees before it becomes a problem.</p>
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
                    src="/images/app/teacher-attendance.png" 
                    alt="EduMojo teacher app: attendance for Class IX-B on Oct 9, 2026 with 38 present and 2 absent, a present/absent button for each student and a Save attendance button" 
                  />
                </div>
              </div>
            </figure>
            <figure className="ts-shot">
              <div className="ts-phone">
                <div className="ts-screen">
                  <img 
                    src="/images/app/teacher-dashboard.png" 
                    alt="EduMojo admin app: management dashboard for the whole school showing 94% student attendance today, Term 2 fees collected and pending, 24 new enquiries, 3 announcements and the classes with the lowest attendance" 
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
