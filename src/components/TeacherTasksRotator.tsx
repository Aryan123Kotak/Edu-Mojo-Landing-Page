import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TeacherTasksRotatorProps {
  onScheduleDemo?: () => void;
}

export const TeacherTasksRotator: React.FC<TeacherTasksRotatorProps> = ({ onScheduleDemo }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const SLIDE_DURATION = 5000;

  // Jump to specific slide
  const goToSlide = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  // Keyboard navigation across tabs
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % 3;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + 3) % 3;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = 2;
    }

    if (nextIndex !== index) {
      goToSlide(nextIndex);
      const nextBtn = document.getElementById(`ts-tab-${nextIndex}`);
      if (nextBtn) {
        nextBtn.focus();
      }
    }
  };

  // IntersectionObserver to only rotate when visible
  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(sec);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-rotation timer (5 seconds), pauses if hovered, focused, not visible, or prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused || !isVisible) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTab, isPaused, isVisible]);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else if (onScheduleDemo) {
      onScheduleDemo();
    }
  };

  return (
    <section 
      className="ts" 
      id="teacherSlider" 
      aria-label="How EduMojo saves teachers time"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!sectionRef.current?.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="ts-grid">
        <div>
          {/* Tabs row */}
          <div className="ts-tabs" role="tablist" aria-label="Teacher tasks" ref={tabListRef}>
            <button 
              type="button"
              className={`ts-tab ${activeTab === 0 ? 'active' : ''}`}
              role="tab" 
              id="ts-tab-0" 
              aria-controls="ts-panel-0" 
              aria-selected={activeTab === 0}
              tabIndex={activeTab === 0 ? 0 : -1}
              onClick={() => goToSlide(0)}
              onKeyDown={(e) => handleKeyDown(e, 0)}
            >
              <b>1</b>
              <span className="ic sm"><i className="ph-bold ph-notebook" aria-hidden="true"></i></span>
              Homework
              <span className={`bar ${activeTab === 0 ? 'running' : ''}`} key={`bar-0-${activeTab}`} />
            </button>

            <button 
              type="button"
              className={`ts-tab ${activeTab === 1 ? 'active' : ''}`}
              role="tab" 
              id="ts-tab-1" 
              aria-controls="ts-panel-1" 
              aria-selected={activeTab === 1}
              tabIndex={activeTab === 1 ? 0 : -1}
              onClick={() => goToSlide(1)}
              onKeyDown={(e) => handleKeyDown(e, 1)}
            >
              <b>2</b>
              <span className="ic sm"><i className="ph-bold ph-megaphone" aria-hidden="true"></i></span>
              Parent updates
              <span className={`bar ${activeTab === 1 ? 'running' : ''}`} key={`bar-1-${activeTab}`} />
            </button>

            <button 
              type="button"
              className={`ts-tab ${activeTab === 2 ? 'active' : ''}`}
              role="tab" 
              id="ts-tab-2" 
              aria-controls="ts-panel-2" 
              aria-selected={activeTab === 2}
              tabIndex={activeTab === 2 ? 0 : -1}
              onClick={() => goToSlide(2)}
              onKeyDown={(e) => handleKeyDown(e, 2)}
            >
              <b>3</b>
              <span className="ic sm"><i className="ph-bold ph-exam" aria-hidden="true"></i></span>
              Report cards
              <span className={`bar ${activeTab === 2 ? 'running' : ''}`} key={`bar-2-${activeTab}`} />
            </button>
          </div>

          {/* Texts container */}
          <div className="ts-texts">
            {/* Slide 1: Homework */}
            <div 
              className={`ts-text ${activeTab === 0 ? 'in' : ''}`}
              role="tabpanel" 
              id="ts-panel-0" 
              aria-labelledby="ts-tab-0"
              hidden={activeTab !== 0}
            >
              <span className="ts-kicker ts-anim">Daily academic updates</span>
              <h2 className="ts-h ts-anim">
                Share homework and materials <span className="ts-hl">once for the whole class</span>
              </h2>
              <div className="ts-anim">
                <div className="ts-rule"></div>
                <p className="ts-p">
                  Post assignments, homework and learning materials in one place. Students and parents see the day's updates in the EduMojo app, so nothing has to be repeated on WhatsApp groups.
                </p>
              </div>
              <ul className="ts-list ts-anim">
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3>Assignments &amp; homework</h3>
                    <p>Set the task and the due date once for the whole class.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3>Learning materials</h3>
                    <p>Share notes, worksheets and PDFs with every student.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3>Daily updates for parents</h3>
                    <p>Parents see what is due today in the EduMojo app.</p>
                  </div>
                </li>
              </ul>
              <a href="#contact" onClick={handleCtaClick} className="ts-cta ts-anim">
                Book a demo <span>→</span>
              </a>
            </div>

            {/* Slide 2: Parent updates */}
            <div 
              className={`ts-text ${activeTab === 1 ? 'in' : ''}`}
              role="tabpanel" 
              id="ts-panel-1" 
              aria-labelledby="ts-tab-1" 
              hidden={activeTab !== 1}
            >
              <span className="ts-kicker ts-anim">Parent communication</span>
              <h2 className="ts-h ts-anim">
                One notice reaches <span className="ts-hl">every parent instantly</span>
              </h2>
              <div className="ts-anim">
                <div className="ts-rule"></div>
                <p className="ts-p">
                  Send notices, circulars and announcements to one class or the whole school in a single step. Parents get a real-time alert on their phone, with no calls one by one.
                </p>
              </div>
              <ul className="ts-list ts-anim">
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3>Notices &amp; circulars</h3>
                    <p>To one class or the whole school, in one step.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3>Real-time alerts</h3>
                    <p>Parents are notified in the EduMojo app the moment you post.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3>Teacher-parent messages</h3>
                    <p>Reply to parents inside the app instead of calling each one.</p>
                  </div>
                </li>
              </ul>
              <a href="#contact" onClick={handleCtaClick} className="ts-cta ts-anim">
                Book a demo <span>→</span>
              </a>
            </div>

            {/* Slide 3: Report cards */}
            <div 
              className={`ts-text ${activeTab === 2 ? 'in' : ''}`}
              role="tabpanel" 
              id="ts-panel-2" 
              aria-labelledby="ts-tab-2" 
              hidden={activeTab !== 2}
            >
              <span className="ts-kicker ts-anim">Academic reports</span>
              <h2 className="ts-h ts-anim">
                Report cards and progress, <span className="ts-hl">without the spreadsheet chaos</span>
              </h2>
              <div className="ts-anim">
                <div className="ts-rule"></div>
                <p className="ts-p">
                  Generate term report cards, track subject performance, and share progress with parents in clicks. No more late nights copying marks across multiple spreadsheets.
                </p>
              </div>
              <ul className="ts-list ts-anim">
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3>Report cards</h3>
                    <p>Generate beautiful, CBSE/ICSE-aligned report cards in one click.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3>Performance tracking</h3>
                    <p>Spot learning gaps early with class-wise and student-wise analytics.</p>
                  </div>
                </li>
                <li>
                  <span className="ts-ck">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3>Insights for parents</h3>
                    <p>Parents view marks, teacher remarks and attendance trends directly.</p>
                  </div>
                </li>
              </ul>
              <a href="#contact" onClick={handleCtaClick} className="ts-cta ts-anim">
                Book a demo <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Phone Screen Mockup */}
        <div className="ts-phone-wrap">
          <div className="ts-phone">
            {/* Dynamic island / speaker ear piece */}
            <div className="ts-phone-notch" />
            <div className="ts-screens">
              <img 
                className={`ts-screen ${activeTab === 0 ? 'in' : ''}`}
                id="ts-screen-0" 
                src="/images/app/teacher-homework.png" 
                alt="Daily Academic Updates app screen" 
                width="1170" 
                height="2472" 
              />
              <img 
                className={`ts-screen ${activeTab === 1 ? 'in' : ''}`}
                id="ts-screen-1" 
                src="/images/app/teacher-parent-updates.png" 
                alt="Notices and Messages app screen" 
                width="1170" 
                height="2472" 
              />
              <img 
                className={`ts-screen ${activeTab === 2 ? 'in' : ''}`}
                id="ts-screen-2" 
                src="/images/app/teacher-report-cards.png" 
                alt="Academic Reports app screen" 
                width="1170" 
                height="2472" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
