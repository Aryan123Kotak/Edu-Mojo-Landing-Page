import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

// Screen 1: Daily Academic Updates
const homeworkSvg = `<svg width="1170" height="2472" viewBox="0 0 1170 2472" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1170" height="2472" fill="#f2efe9"/>

  <!-- Top Bar: Demo Institution -->
  <g transform="translate(64, 60)">
    <!-- Hamburger icon -->
    <g transform="translate(0, 16)">
      <line x1="0" y1="0" x2="60" y2="0" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="0" y1="20" x2="60" y2="20" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="0" y1="40" x2="60" y2="40" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
    </g>

    <!-- Center Title -->
    <text x="521" y="48" text-anchor="middle" font-size="46" font-weight="800" fill="#0b1f14">Demo Institution</text>

    <!-- Notification Bell with red badge 2 -->
    <g transform="translate(980, 4)">
      <path d="M26 4 C15 4 8 13 8 26 L8 44 L0 52 L0 58 L52 58 L52 52 L44 44 L44 26 C44 13 37 4 26 4 Z" fill="none" stroke="#0b1f14" stroke-width="5" stroke-linejoin="round"/>
      <path d="M20 58 C20 62 23 66 26 66 C29 66 32 62 32 58" fill="none" stroke="#0b1f14" stroke-width="5" stroke-linecap="round"/>
      <!-- Red badge 2 -->
      <circle cx="48" cy="10" r="16" fill="#dc2626"/>
      <text x="48" y="19" text-anchor="middle" font-size="24" font-weight="800" fill="#ffffff">2</text>
    </g>
  </g>

  <!-- Divider -->
  <line x1="0" y1="170" x2="1170" y2="170" stroke="#e5e2dc" stroke-width="2"/>

  <!-- Title Section -->
  <g transform="translate(64, 250)">
    <!-- Screen Icon -->
    <g transform="translate(0, 4)">
      <rect x="0" y="0" width="62" height="46" rx="8" fill="none" stroke="#0d7a55" stroke-width="5"/>
      <line x1="16" y1="24" x2="30" y2="24" stroke="#0d7a55" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="22" y1="46" x2="22" y2="58" stroke="#0d7a55" stroke-width="5"/>
      <line x1="10" y1="58" x2="34" y2="58" stroke="#0d7a55" stroke-width="5" stroke-linecap="round"/>
    </g>
    <!-- Heading -->
    <text x="92" y="48" font-size="64" font-weight="900" fill="#0b1f14" letter-spacing="-0.02em">Daily Academic Updates</text>
    <text x="0" y="125" font-size="36" font-weight="600" fill="#6b7a72">Class 8-A · Today</text>
  </g>

  <!-- 2x2 Metrics Cards Grid -->
  <g transform="translate(64, 430)">
    <!-- Card 1: Assignments -->
    <g transform="translate(0, 0)">
      <rect width="506" height="210" rx="32" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.03))"/>
      <text x="40" y="60" font-size="32" font-weight="700" fill="#6b7a72">Assignments</text>
      <text x="40" y="136" font-size="68" font-weight="900" fill="#0b1f14">12</text>
      <text x="40" y="180" font-size="32" font-weight="800" fill="#c2541c">Pending</text>
    </g>

    <!-- Card 2: Materials -->
    <g transform="translate(536, 0)">
      <rect width="506" height="210" rx="32" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.03))"/>
      <text x="40" y="60" font-size="32" font-weight="700" fill="#6b7a72">Materials</text>
      <text x="40" y="136" font-size="68" font-weight="900" fill="#0b1f14">18</text>
      <text x="40" y="180" font-size="32" font-weight="800" fill="#15803d">Shared</text>
    </g>

    <!-- Card 3: Homework -->
    <g transform="translate(0, 240)">
      <rect width="506" height="210" rx="32" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.03))"/>
      <text x="40" y="60" font-size="32" font-weight="700" fill="#6b7a72">Homework</text>
      <text x="40" y="136" font-size="68" font-weight="900" fill="#0b1f14">8</text>
      <text x="40" y="180" font-size="32" font-weight="800" fill="#c2541c">Due today</text>
    </g>

    <!-- Card 4: Announcements -->
    <g transform="translate(536, 240)">
      <rect width="506" height="210" rx="32" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.03))"/>
      <text x="40" y="60" font-size="32" font-weight="700" fill="#6b7a72">Announcements</text>
      <text x="40" y="136" font-size="68" font-weight="900" fill="#0b1f14">5</text>
      <text x="40" y="180" font-size="32" font-weight="800" fill="#1d4ed8">New</text>
    </g>
  </g>

  <!-- RECENT ACTIVITIES Header -->
  <text x="64" y="960" font-size="30" font-weight="800" fill="#6b7a72" letter-spacing="1.5">RECENT ACTIVITIES</text>

  <!-- Activities Container Card -->
  <g transform="translate(64, 1000)">
    <rect width="1042" height="630" rx="36" fill="#ffffff" filter="drop-shadow(0 2px 10px rgba(0,0,0,0.04))"/>

    <!-- Row 1: Maths Assignment -->
    <g transform="translate(40, 36)">
      <!-- Avatar A -->
      <rect width="84" height="84" rx="24" fill="#ede9fe"/>
      <text x="42" y="58" text-anchor="middle" font-size="44" font-weight="900" fill="#7c3aed">A</text>
      <!-- Texts -->
      <text x="116" y="44" font-size="37" font-weight="800" fill="#0b1f14">Maths Assignment – Algebra Basics</text>
      <text x="116" y="86" font-size="30" font-weight="500" fill="#6b7a72">Posted by Ritika Malhotra</text>
      <!-- Time -->
      <text x="960" y="44" text-anchor="end" font-size="28" font-weight="500" fill="#6b7a72">10:30 AM</text>
    </g>
    <line x1="40" y1="160" x2="1002" y2="160" stroke="#f1eee9" stroke-width="2"/>

    <!-- Row 2: Science Material -->
    <g transform="translate(40, 196)">
      <!-- Avatar M -->
      <rect width="84" height="84" rx="24" fill="#dcfce7"/>
      <text x="42" y="58" text-anchor="middle" font-size="44" font-weight="900" fill="#16a34a">M</text>
      <!-- Texts -->
      <text x="116" y="44" font-size="37" font-weight="800" fill="#0b1f14">Science Material – Force &amp; Motion</text>
      <text x="116" y="86" font-size="30" font-weight="500" fill="#6b7a72">Posted by Amit Verma</text>
      <!-- Time -->
      <text x="960" y="44" text-anchor="end" font-size="28" font-weight="500" fill="#6b7a72">Yesterday</text>
    </g>
    <line x1="40" y1="320" x2="1002" y2="320" stroke="#f1eee9" stroke-width="2"/>

    <!-- Row 3: English Homework -->
    <g transform="translate(40, 356)">
      <!-- Avatar H -->
      <rect width="84" height="84" rx="24" fill="#e0f2fe"/>
      <text x="42" y="58" text-anchor="middle" font-size="44" font-weight="900" fill="#0284c7">H</text>
      <!-- Texts -->
      <text x="116" y="44" font-size="37" font-weight="800" fill="#0b1f14">English Homework – Essay Writing</text>
      <text x="116" y="86" font-size="30" font-weight="500" fill="#6b7a72">Posted by Neha Iyer · Due Fri</text>
      <!-- Time -->
      <text x="960" y="44" text-anchor="end" font-size="28" font-weight="500" fill="#6b7a72">Yesterday</text>
    </g>
    <line x1="40" y1="480" x2="1002" y2="480" stroke="#f1eee9" stroke-width="2"/>

    <!-- Row 4: Hindi Homework -->
    <g transform="translate(40, 516)">
      <!-- Avatar H -->
      <rect width="84" height="84" rx="24" fill="#fef3c7"/>
      <text x="42" y="58" text-anchor="middle" font-size="44" font-weight="900" fill="#d97706">H</text>
      <!-- Texts -->
      <text x="116" y="44" font-size="37" font-weight="800" fill="#0b1f14">Hindi Homework – Poem Recitation</text>
      <text x="116" y="86" font-size="30" font-weight="500" fill="#6b7a72">Posted by Rajesh Kumar · Due today</text>
      <!-- Time -->
      <text x="960" y="44" text-anchor="end" font-size="28" font-weight="500" fill="#6b7a72">Mon</text>
    </g>
  </g>

  <!-- Bottom CTA Section -->
  <g transform="translate(64, 2240)">
    <rect width="1042" height="130" rx="36" fill="#16a34a"/>
    <text x="521" y="80" text-anchor="middle" font-size="42" font-weight="800" fill="#ffffff">+ Post homework or material</text>
  </g>
  <text x="585" y="2425" text-anchor="middle" font-size="30" font-weight="500" fill="#6b7a72">Students and parents of 8-A see it in the app</text>
</svg>`;

// Screen 2: Notices & Messages
const parentUpdatesSvg = `<svg width="1170" height="2472" viewBox="0 0 1170 2472" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1170" height="2472" fill="#f2efe9"/>

  <!-- Top Bar: Demo Institution -->
  <g transform="translate(64, 60)">
    <!-- Hamburger icon -->
    <g transform="translate(0, 16)">
      <line x1="0" y1="0" x2="60" y2="0" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="0" y1="20" x2="60" y2="20" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="0" y1="40" x2="60" y2="40" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
    </g>

    <!-- Center Title -->
    <text x="521" y="48" text-anchor="middle" font-size="46" font-weight="800" fill="#0b1f14">Demo Institution</text>

    <!-- Notification Bell with red badge 2 -->
    <g transform="translate(980, 4)">
      <path d="M26 4 C15 4 8 13 8 26 L8 44 L0 52 L0 58 L52 58 L52 52 L44 44 L44 26 C44 13 37 4 26 4 Z" fill="none" stroke="#0b1f14" stroke-width="5" stroke-linejoin="round"/>
      <path d="M20 58 C20 62 23 66 26 66 C29 66 32 62 32 58" fill="none" stroke="#0b1f14" stroke-width="5" stroke-linecap="round"/>
      <circle cx="48" cy="10" r="16" fill="#dc2626"/>
      <text x="48" y="19" text-anchor="middle" font-size="24" font-weight="800" fill="#ffffff">2</text>
    </g>
  </g>

  <!-- Divider -->
  <line x1="0" y1="170" x2="1170" y2="170" stroke="#e5e2dc" stroke-width="2"/>

  <!-- Title Section -->
  <g transform="translate(64, 250)">
    <!-- Chat Icon -->
    <g transform="translate(0, 4)">
      <rect x="0" y="0" width="56" height="42" rx="8" fill="none" stroke="#0d7a55" stroke-width="5"/>
      <line x1="14" y1="16" x2="38" y2="16" stroke="#0d7a55" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="14" y1="28" x2="28" y2="28" stroke="#0d7a55" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M12 42 L8 54 L22 42" fill="none" stroke="#0d7a55" stroke-width="5" stroke-linejoin="round"/>
    </g>
    <!-- Heading -->
    <text x="92" y="48" font-size="64" font-weight="900" fill="#0b1f14" letter-spacing="-0.02em">Notices &amp; Messages</text>
    <text x="0" y="125" font-size="36" font-weight="600" fill="#6b7a72">Class 8-A · Parents</text>
  </g>

  <!-- Featured Circular Card -->
  <g transform="translate(64, 430)">
    <rect width="1042" height="280" rx="36" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="3"/>
    <!-- Green Megaphone badge -->
    <g transform="translate(46, 44)">
      <rect width="112" height="112" rx="28" fill="#16a34a"/>
      <!-- Megaphone icon in white -->
      <path d="M30 46 L50 36 L78 24 L78 88 L50 76 L30 66 Z" fill="#ffffff"/>
      <path d="M50 76 L44 94 L34 94 L38 76" fill="#ffffff"/>
      <path d="M84 44 C88 50 88 62 84 68" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    </g>
    <!-- Card Text -->
    <text x="194" y="96" font-size="44" font-weight="900" fill="#065f46">Annual Sports Day</text>
    <text x="194" y="160" font-size="33" font-weight="500" fill="#047857">Sports Day will be held on Saturday, 24</text>
    <text x="194" y="206" font-size="33" font-weight="500" fill="#047857">October. Students should come in house</text>
    <text x="194" y="252" font-size="33" font-weight="500" fill="#047857">colours by 8:00 AM.</text>
  </g>

  <!-- SEND TO Card -->
  <g transform="translate(64, 750)">
    <rect width="1042" height="220" rx="32" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.03))"/>
    <text x="44" y="60" font-size="28" font-weight="800" fill="#6b7a72" letter-spacing="1">SEND TO</text>
    <!-- Pills -->
    <g transform="translate(44, 94)">
      <!-- Pill 1: Active green -->
      <rect width="436" height="78" rx="39" fill="#16a34a"/>
      <text x="218" y="52" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">Class 8-A parents (40)</text>

      <!-- Pill 2: All parents -->
      <rect x="456" y="0" width="240" height="78" rx="39" fill="#ffffff" stroke="#d1d5db" stroke-width="2.5"/>
      <text x="576" y="52" text-anchor="middle" font-size="32" font-weight="700" fill="#374151">All parents</text>

      <!-- Pill 3: Teachers -->
      <rect x="716" y="0" width="210" height="78" rx="39" fill="#ffffff" stroke="#d1d5db" stroke-width="2.5"/>
      <text x="821" y="52" text-anchor="middle" font-size="32" font-weight="700" fill="#374151">Teachers</text>
    </g>
  </g>

  <!-- RECENT MESSAGES Header -->
  <text x="64" y="1036" font-size="30" font-weight="800" fill="#6b7a72" letter-spacing="1.5">RECENT MESSAGES</text>

  <!-- Messages Container Card -->
  <g transform="translate(64, 1076)">
    <rect width="1042" height="490" rx="36" fill="#ffffff" filter="drop-shadow(0 2px 10px rgba(0,0,0,0.04))"/>

    <!-- Row 1: Ms. Priya (Teacher) -->
    <g transform="translate(40, 36)">
      <!-- Avatar PR -->
      <circle cx="44" cy="44" r="44" fill="#0e7490"/>
      <text x="44" y="58" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">PR</text>
      <!-- Texts -->
      <text x="120" y="44" font-size="38" font-weight="800" fill="#0b1f14">Ms. Priya (Teacher)</text>
      <text x="120" y="86" font-size="31" font-weight="500" fill="#4b5563">Please submit the project by Friday.</text>
      <!-- Time -->
      <text x="960" y="44" text-anchor="end" font-size="28" font-weight="500" fill="#6b7a72">Yesterday</text>
    </g>
    <line x1="40" y1="162" x2="1002" y2="162" stroke="#f1eee9" stroke-width="2"/>

    <!-- Row 2: Parent Group · 8-A -->
    <g transform="translate(40, 198)">
      <!-- Avatar PG -->
      <circle cx="44" cy="44" r="44" fill="#ea580c"/>
      <text x="44" y="58" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">PG</text>
      <!-- Texts -->
      <text x="120" y="44" font-size="38" font-weight="800" fill="#0b1f14">Parent Group · 8-A</text>
      <text x="120" y="86" font-size="31" font-weight="500" fill="#4b5563">Thank you!</text>
      <!-- Time and Badge -->
      <text x="960" y="44" text-anchor="end" font-size="28" font-weight="500" fill="#6b7a72">10:30 AM</text>
      <circle cx="945" cy="84" r="22" fill="#dc2626"/>
      <text x="945" y="96" text-anchor="middle" font-size="26" font-weight="900" fill="#ffffff">2</text>
    </g>
    <line x1="40" y1="324" x2="1002" y2="324" stroke="#f1eee9" stroke-width="2"/>

    <!-- Row 3: Rahul Sharma (Parent) -->
    <g transform="translate(40, 360)">
      <!-- Avatar RS -->
      <circle cx="44" cy="44" r="44" fill="#7c3aed"/>
      <text x="44" y="58" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">RS</text>
      <!-- Texts -->
      <text x="120" y="44" font-size="38" font-weight="800" fill="#0b1f14">Rahul Sharma (Parent)</text>
      <text x="120" y="86" font-size="31" font-weight="500" fill="#4b5563">Noted, Aarav will bring the kit.</text>
      <!-- Time -->
      <text x="960" y="44" text-anchor="end" font-size="28" font-weight="500" fill="#6b7a72">9:12 AM</text>
    </g>
  </g>

  <!-- Bottom CTA Section -->
  <g transform="translate(64, 2240)">
    <rect width="1042" height="130" rx="36" fill="#16a34a"/>
    <text x="521" y="80" text-anchor="middle" font-size="42" font-weight="800" fill="#ffffff">Send notice to 40 parents</text>
  </g>
  <text x="585" y="2425" text-anchor="middle" font-size="30" font-weight="500" fill="#6b7a72">Parents get a real-time alert in the EduMojo app</text>
</svg>`;

// Screen 3: Academic Reports
const reportCardsSvg = `<svg width="1170" height="2472" viewBox="0 0 1170 2472" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1170" height="2472" fill="#f2efe9"/>

  <!-- Top Bar: Demo Institution -->
  <g transform="translate(64, 60)">
    <!-- Hamburger icon -->
    <g transform="translate(0, 16)">
      <line x1="0" y1="0" x2="60" y2="0" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="0" y1="20" x2="60" y2="20" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="0" y1="40" x2="60" y2="40" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
    </g>

    <!-- Center Title -->
    <text x="521" y="48" text-anchor="middle" font-size="46" font-weight="800" fill="#0b1f14">Demo Institution</text>

    <!-- Notification Bell with red badge 2 -->
    <g transform="translate(980, 4)">
      <path d="M26 4 C15 4 8 13 8 26 L8 44 L0 52 L0 58 L52 58 L52 52 L44 44 L44 26 C44 13 37 4 26 4 Z" fill="none" stroke="#0b1f14" stroke-width="5" stroke-linejoin="round"/>
      <path d="M20 58 C20 62 23 66 26 66 C29 66 32 62 32 58" fill="none" stroke="#0b1f14" stroke-width="5" stroke-linecap="round"/>
      <circle cx="48" cy="10" r="16" fill="#dc2626"/>
      <text x="48" y="19" text-anchor="middle" font-size="24" font-weight="800" fill="#ffffff">2</text>
    </g>
  </g>

  <!-- Divider -->
  <line x1="0" y1="170" x2="1170" y2="170" stroke="#e5e2dc" stroke-width="2"/>

  <!-- Title Section -->
  <g transform="translate(64, 250)">
    <!-- Bar chart Icon -->
    <g transform="translate(0, 8)">
      <rect x="0" y="24" width="8" height="28" rx="2" fill="#0d7a55"/>
      <rect x="16" y="12" width="8" height="40" rx="2" fill="#0d7a55"/>
      <rect x="32" y="0" width="8" height="52" rx="2" fill="#0d7a55"/>
      <rect x="48" y="18" width="8" height="34" rx="2" fill="#0d7a55"/>
    </g>
    <!-- Heading -->
    <text x="92" y="48" font-size="64" font-weight="900" fill="#0b1f14" letter-spacing="-0.02em">Academic Reports</text>
    <text x="0" y="125" font-size="36" font-weight="600" fill="#6b7a72">Term 1 · Class 8-A</text>
  </g>

  <!-- Student Report Card -->
  <g transform="translate(64, 430)">
    <rect width="1042" height="660" rx="36" fill="#ffffff" filter="drop-shadow(0 2px 10px rgba(0,0,0,0.04))"/>

    <!-- Student Header -->
    <g transform="translate(40, 40)">
      <!-- Avatar AS -->
      <circle cx="58" cy="58" r="58" fill="#15803d"/>
      <text x="58" y="76" text-anchor="middle" font-size="46" font-weight="900" fill="#ffffff">AS</text>

      <text x="146" y="52" font-size="44" font-weight="900" fill="#0b1f14">Aarav Sharma</text>
      <text x="146" y="100" font-size="32" font-weight="600" fill="#6b7a72">Grade 8-A · Roll 23</text>

      <!-- Badge "Report card ready" -->
      <rect x="620" y="24" width="330" height="64" rx="32" fill="#ecfdf5"/>
      <text x="785" y="67" text-anchor="middle" font-size="28" font-weight="800" fill="#15803d">Report card ready</text>
    </g>

    <!-- Table Header -->
    <g transform="translate(40, 190)">
      <line x1="0" y1="0" x2="962" y2="0" stroke="#f1eee9" stroke-width="2"/>
      <text x="0" y="40" font-size="28" font-weight="800" fill="#6b7a72" letter-spacing="1">SUBJECT</text>
      <text x="962" y="40" text-anchor="end" font-size="28" font-weight="800" fill="#6b7a72" letter-spacing="1">GRADE</text>
      <line x1="0" y1="64" x2="962" y2="64" stroke="#f1eee9" stroke-width="2"/>
    </g>

    <!-- Row 1: Mathematics -->
    <g transform="translate(40, 310)">
      <text x="0" y="0" font-size="38" font-weight="700" fill="#0b1f14">Mathematics</text>
      <text x="962" y="0" text-anchor="end" font-size="40" font-weight="900" fill="#15803d">A</text>
      <line x1="0" y1="36" x2="962" y2="36" stroke="#f8f6f2" stroke-width="2"/>
    </g>

    <!-- Row 2: Science -->
    <g transform="translate(40, 400)">
      <text x="0" y="0" font-size="38" font-weight="700" fill="#0b1f14">Science</text>
      <text x="962" y="0" text-anchor="end" font-size="40" font-weight="900" fill="#15803d">A-</text>
      <line x1="0" y1="36" x2="962" y2="36" stroke="#f8f6f2" stroke-width="2"/>
    </g>

    <!-- Row 3: English -->
    <g transform="translate(40, 490)">
      <text x="0" y="0" font-size="38" font-weight="700" fill="#0b1f14">English</text>
      <text x="962" y="0" text-anchor="end" font-size="40" font-weight="900" fill="#2563eb">B+</text>
      <line x1="0" y1="36" x2="962" y2="36" stroke="#f8f6f2" stroke-width="2"/>
    </g>

    <!-- Row 4: Social Studies -->
    <g transform="translate(40, 580)">
      <text x="0" y="0" font-size="38" font-weight="700" fill="#0b1f14">Social Studies</text>
      <text x="962" y="0" text-anchor="end" font-size="40" font-weight="900" fill="#15803d">A</text>
    </g>
  </g>

  <!-- Performance Trend Card -->
  <g transform="translate(64, 1140)">
    <rect width="1042" height="340" rx="36" fill="#ffffff" filter="drop-shadow(0 2px 10px rgba(0,0,0,0.04))"/>
    <text x="44" y="66" font-size="36" font-weight="800" fill="#374151">Performance across tests</text>
    <text x="998" y="66" text-anchor="end" font-size="36" font-weight="900" fill="#15803d">+6% this term</text>

    <!-- Trend Graph -->
    <defs>
      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#16a34a" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#16a34a" stop-opacity="0.0"/>
      </linearGradient>
    </defs>
    <!-- Area path -->
    <path d="M 44 230 Q 200 220 380 224 T 680 180 T 980 140 L 980 280 L 44 280 Z" fill="url(#chartGrad)"/>
    <!-- Line path -->
    <path d="M 44 230 Q 200 220 380 224 T 680 180 T 980 140" fill="none" stroke="#16a34a" stroke-width="7" stroke-linecap="round"/>
    <!-- End dot -->
    <circle cx="980" cy="140" r="10" fill="#15803d"/>
  </g>

  <!-- Alert Card: 3 students need extra support -->
  <g transform="translate(64, 1530)">
    <rect width="1042" height="170" rx="32" fill="#fff7ed" stroke="#fed7aa" stroke-width="2.5"/>
    <!-- Orange warning icon -->
    <g transform="translate(44, 38)">
      <rect width="94" height="94" rx="26" fill="#ea580c"/>
      <text x="47" y="68" text-anchor="middle" font-size="60" font-weight="900" fill="#ffffff">!</text>
    </g>
    <text x="170" y="82" font-size="37" font-weight="800" fill="#9a3412">3 students need extra support</text>
    <text x="170" y="130" font-size="31" font-weight="500" fill="#c2410c">Based on falling scores in Maths</text>
  </g>

  <!-- Bottom CTA Section -->
  <g transform="translate(64, 2240)">
    <rect width="1042" height="130" rx="36" fill="#16a34a"/>
    <text x="521" y="80" text-anchor="middle" font-size="42" font-weight="800" fill="#ffffff">Generate report cards for 8-A</text>
  </g>
  <text x="585" y="2425" text-anchor="middle" font-size="30" font-weight="500" fill="#6b7a72">Report cards for all 40 students in one step</text>
</svg>`;

function renderPng(svg, outPath) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1170 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outPath, pngBuffer);
  console.log(`Rendered ${path.basename(outPath)} (${pngBuffer.length} bytes)`);
}

const outDir = path.resolve('public/images/app');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

renderPng(homeworkSvg, path.join(outDir, 'teacher-homework.png'));
renderPng(parentUpdatesSvg, path.join(outDir, 'teacher-parent-updates.png'));
renderPng(reportCardsSvg, path.join(outDir, 'teacher-report-cards.png'));
console.log('All 3 exact uploaded teacher screens rendered to PNG successfully!');
