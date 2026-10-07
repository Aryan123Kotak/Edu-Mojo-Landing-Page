import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

// Screen 1: Homework — Daily Academic Updates
// Aarav Sharma, Oct 6, 2026 · IX-B · 7 subjects
// Subject tags: Biology, German, Math, Marathi, Political Science (selected), History, English
// Political Science
// Card 1: CLASSWORK: Elections- Election systems, Role of the ECI.
// Card 2: HOMEWORK: Read from the textbook at home today.
const homeworkSvg = `<svg width="1170" height="2472" viewBox="0 0 1170 2472" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif">
  <defs>
    <linearGradient id="bgGrad1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="6%" stop-color="#f4f5f0"/>
      <stop offset="25%" stop-color="#e8ece5"/>
      <stop offset="100%" stop-color="#dae2dc"/>
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#0b1f14" flood-opacity="0.04"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1170" height="2472" fill="url(#bgGrad1)"/>

  <!-- Top App Header: Cream top bar -->
  <rect width="1170" height="130" fill="#fcfbf7"/>
  <line x1="0" y1="130" x2="1170" y2="130" stroke="#e6e4dc" stroke-width="2"/>

  <!-- Hamburger Icon -->
  <g transform="translate(60, 40)">
    <line x1="0" y1="10" x2="52" y2="10" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
    <line x1="0" y1="28" x2="52" y2="28" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
    <line x1="0" y1="46" x2="52" y2="46" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
  </g>

  <!-- App Header Title: EduMojo Parent -->
  <text x="585" y="80" text-anchor="middle" font-size="44" font-weight="800" fill="#0b1f14" letter-spacing="-0.02em">EduMojo Parent</text>

  <!-- Shopping bag / notification badge top right: 67 in red badge -->
  <g transform="translate(1048, 28)">
    <path d="M12 28 C12 18 18 12 36 12 C54 12 60 18 60 28 L66 68 C66 74 60 78 52 78 L20 78 C12 78 6 74 6 68 Z" fill="#b91c1c" rx="10"/>
    <!-- Handle -->
    <path d="M24 20 C24 8 48 8 48 20" fill="none" stroke="#b91c1c" stroke-width="5"/>
    <text x="36" y="58" text-anchor="middle" font-size="28" font-weight="900" fill="#ffffff">67</text>
  </g>

  <!-- Main Content Area -->
  <g transform="translate(64, 210)">
    <!-- Back Button -->
    <rect x="886" y="0" width="156" height="74" rx="37" fill="#ffffff" stroke="#e2dfd7" stroke-width="2"/>
    <text x="964" y="48" text-anchor="middle" font-size="34" font-weight="600" fill="#0b1f14">Back</text>

    <!-- Student Name & Meta -->
    <text x="0" y="60" font-size="70" font-weight="900" fill="#0b1f14" letter-spacing="-0.03em">Aarav Sharma</text>
    <text x="0" y="130" font-size="38" font-weight="500" fill="#6b7a72">Oct 6, 2026 • IX-B • 7 subjects</text>

    <!-- Subject Badges / Pills -->
    <!-- Row 1: Biology, German, Math, Marathi -->
    <g transform="translate(0, 180)">
      <!-- Biology -->
      <rect x="0" y="0" width="180" height="76" rx="38" fill="#ffffff" stroke="#e4e2db" stroke-width="2"/>
      <text x="90" y="50" text-anchor="middle" font-size="32" font-weight="600" fill="#4b5563">Biology</text>

      <!-- German -->
      <rect x="204" y="0" width="180" height="76" rx="38" fill="#ffffff" stroke="#e4e2db" stroke-width="2"/>
      <text x="294" y="50" text-anchor="middle" font-size="32" font-weight="600" fill="#4b5563">German</text>

      <!-- Math -->
      <rect x="408" y="0" width="146" height="76" rx="38" fill="#ffffff" stroke="#e4e2db" stroke-width="2"/>
      <text x="481" y="50" text-anchor="middle" font-size="32" font-weight="600" fill="#4b5563">Math</text>

      <!-- Marathi -->
      <rect x="578" y="0" width="186" height="76" rx="38" fill="#ffffff" stroke="#e4e2db" stroke-width="2"/>
      <text x="671" y="50" text-anchor="middle" font-size="32" font-weight="600" fill="#4b5563">Marathi</text>
    </g>

    <!-- Row 2: Political Science (Active dark green/grey-blue pill), History, English -->
    <g transform="translate(0, 280)">
      <!-- Political Science (Selected) -->
      <rect x="0" y="0" width="344" height="84" rx="42" fill="#cdd8d2" stroke="#9bb1a4" stroke-width="2"/>
      <text x="172" y="54" text-anchor="middle" font-size="33" font-weight="700" fill="#1e293b">Political Science</text>

      <!-- History -->
      <rect x="368" y="4" width="176" height="76" rx="38" fill="#ffffff" stroke="#e4e2db" stroke-width="2"/>
      <text x="456" y="54" text-anchor="middle" font-size="32" font-weight="600" fill="#4b5563">History</text>

      <!-- English -->
      <rect x="568" y="4" width="186" height="76" rx="38" fill="#ffffff" stroke="#e4e2db" stroke-width="2"/>
      <text x="661" y="54" text-anchor="middle" font-size="32" font-weight="600" fill="#4b5563">English</text>
    </g>

    <!-- Heading: Political Science -->
    <text x="0" y="475" font-size="56" font-weight="800" fill="#0b1f14" letter-spacing="-0.02em">Political Science</text>

    <!-- Card 1: CLASSWORK -->
    <g transform="translate(0, 530)" filter="url(#cardShadow)">
      <rect width="1042" height="310" rx="44" fill="#faf9f5"/>
      <text x="44" y="74" font-size="28" font-weight="800" fill="#2d4a43" letter-spacing="1.5">CLASSWORK</text>
      <text x="44" y="160" font-size="44" font-weight="600" fill="#1e293b" letter-spacing="-0.01em">Elections- Election systems, Role of</text>
      <text x="44" y="230" font-size="44" font-weight="600" fill="#1e293b" letter-spacing="-0.01em">the ECI.</text>
    </g>

    <!-- Card 2: HOMEWORK -->
    <g transform="translate(0, 890)" filter="url(#cardShadow)">
      <rect width="1042" height="310" rx="44" fill="#faf9f5"/>
      <text x="44" y="74" font-size="28" font-weight="800" fill="#2d4a43" letter-spacing="1.5">HOMEWORK</text>
      <text x="44" y="160" font-size="44" font-weight="600" fill="#1e293b" letter-spacing="-0.01em">Read from the textbook at home</text>
      <text x="44" y="230" font-size="44" font-weight="600" fill="#1e293b" letter-spacing="-0.01em">today.</text>
    </g>
  </g>
</svg>`;

// Screen 2: Announcements (Teacher view)
// EduMojo Teacher, Bell icon 67
// Announcements, Communication · New announcement, Back button
// Fields:
// Title: Founder's Day Celebration!
// Message: Rich text toolbar (B, I, U, UL, OL, Quote, Link, Clear)
// "Dear Parent,\nGet ready to enjoy a day of fun and activities!"
// Groups: Start typing to add a group
// Students: Start typing to add a student
// Checkbox: [x] Entire institution
// Checkbox: [x] Send email
// Attachments: Choose Files [ EduMojo.png ]
// Buttons: [ Save ] (dark teal/green) [ Clear ] (white border)
const announcementSvg = `<svg width="1170" height="2472" viewBox="0 0 1170 2472" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif">
  <defs>
    <filter id="annShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="10" stdDeviation="20" flood-color="#0b1f14" flood-opacity="0.05"/>
    </filter>
  </defs>

  <!-- Background light soft cream -->
  <rect width="1170" height="2472" fill="#e7ebe5"/>

  <!-- Top App Header: Cream top bar -->
  <rect width="1170" height="130" fill="#f6f5ee"/>
  <line x1="0" y1="130" x2="1170" y2="130" stroke="#dfded7" stroke-width="2"/>

  <!-- Hamburger Icon -->
  <g transform="translate(52, 44)">
    <line x1="0" y1="8" x2="62" y2="8" stroke="#0b1f14" stroke-width="6" stroke-linecap="round"/>
    <line x1="0" y1="26" x2="62" y2="26" stroke="#0b1f14" stroke-width="6" stroke-linecap="round"/>
    <line x1="0" y1="44" x2="62" y2="44" stroke="#0b1f14" stroke-width="6" stroke-linecap="round"/>
  </g>

  <!-- App Header Title: EduMojo Teacher -->
  <text x="585" y="82" text-anchor="middle" font-size="44" font-weight="800" fill="#0b1f14" letter-spacing="-0.02em">EduMojo Teacher</text>

  <!-- Notification Bell with red badge 67 -->
  <g transform="translate(1045, 30)">
    <!-- Bell outline -->
    <path d="M28 8 C16 8 8 18 8 32 L8 50 L0 58 L0 64 L56 64 L56 58 L48 50 L48 32 C48 18 40 8 28 8 Z" fill="none" stroke="#0b1f14" stroke-width="5.5" stroke-linejoin="round"/>
    <path d="M22 64 C22 68 25 72 28 72 C31 72 34 68 34 64" fill="none" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
    <!-- Red badge 67 -->
    <circle cx="50" cy="14" r="18" fill="#dc2626"/>
    <text x="50" y="24" text-anchor="middle" font-size="24" font-weight="900" fill="#ffffff">67</text>
  </g>

  <!-- Header Title row: Megaphone icon + Announcements + Back button -->
  <g transform="translate(56, 195)">
    <!-- Megaphone icon -->
    <g transform="translate(0, 10)">
      <path d="M6 18 L26 18 L46 6 L46 42 L26 30 L6 30 Z" fill="none" stroke="#0b1f14" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M12 30 L16 46 L26 46 L22 30" fill="none" stroke="#0b1f14" stroke-width="5" stroke-linejoin="round"/>
      <line x1="52" y1="14" x2="56" y2="12" stroke="#0b1f14" stroke-width="5" stroke-linecap="round"/>
      <line x1="54" y1="24" x2="60" y2="24" stroke="#0b1f14" stroke-width="5" stroke-linecap="round"/>
      <line x1="52" y1="34" x2="56" y2="36" stroke="#0b1f14" stroke-width="5" stroke-linecap="round"/>
    </g>

    <!-- Announcements -->
    <text x="82" y="46" font-size="64" font-weight="900" fill="#0b1f14" letter-spacing="-0.03em">Announcements</text>

    <!-- Back Button -->
    <rect x="866" y="-8" width="186" height="78" rx="39" fill="#ffffff" stroke="#e0ded6" stroke-width="2"/>
    <text x="959" y="43" text-anchor="middle" font-size="34" font-weight="600" fill="#0b1f14">Back</text>

    <!-- Subtitle -->
    <text x="0" y="125" font-size="36" font-weight="500" fill="#6b7a72">Communication · New announcement</text>
  </g>

  <!-- White Card Form Container -->
  <g transform="translate(44, 380)" filter="url(#annShadow)">
    <rect width="1082" height="1750" rx="48" fill="#fdfcf7"/>

    <!-- Field 1: Title -->
    <g transform="translate(42, 50)">
      <text x="0" y="32" font-size="34" font-weight="700" fill="#0b1f14">Title</text>
      <!-- Input box -->
      <rect x="0" y="58" width="998" height="106" rx="24" fill="#ffffff" stroke="#dcd9ce" stroke-width="2"/>
      <text x="38" y="126" font-size="38" font-weight="500" fill="#0b1f14">Founder’s Day Celebration!</text>
    </g>

    <!-- Field 2: Message -->
    <g transform="translate(42, 270)">
      <text x="0" y="32" font-size="34" font-weight="700" fill="#0b1f14">Message</text>
      <!-- Message Box outer -->
      <g transform="translate(0, 58)">
        <rect width="998" height="360" rx="24" fill="#ffffff" stroke="#dcd9ce" stroke-width="2"/>
        
        <!-- Toolbar Strip -->
        <rect width="998" height="104" rx="24" fill="#f7f6f0" stroke="#dcd9ce" stroke-width="2"/>
        <rect y="84" width="998" height="20" fill="#f7f6f0"/>
        
        <!-- Toolbar buttons: B, I, U, UL, OL, Quote, Link, Clear -->
        <g transform="translate(24, 20)">
          <!-- B -->
          <rect x="0" y="0" width="76" height="64" rx="14" fill="#ffffff" stroke="#d4d1c6" stroke-width="2"/>
          <text x="38" y="43" text-anchor="middle" font-size="28" font-weight="800" fill="#0b1f14">B</text>

          <!-- I -->
          <rect x="94" y="0" width="76" height="64" rx="14" fill="#ffffff" stroke="#d4d1c6" stroke-width="2"/>
          <text x="132" y="43" text-anchor="middle" font-size="28" font-weight="800" font-style="italic" fill="#0b1f14">I</text>

          <!-- U -->
          <rect x="188" y="0" width="76" height="64" rx="14" fill="#ffffff" stroke="#d4d1c6" stroke-width="2"/>
          <text x="226" y="43" text-anchor="middle" font-size="28" font-weight="800" text-decoration="underline" fill="#0b1f14">U</text>

          <!-- UL -->
          <rect x="282" y="0" width="88" height="64" rx="14" fill="#ffffff" stroke="#d4d1c6" stroke-width="2"/>
          <text x="326" y="43" text-anchor="middle" font-size="24" font-weight="800" fill="#0b1f14">UL</text>

          <!-- OL -->
          <rect x="388" y="0" width="88" height="64" rx="14" fill="#ffffff" stroke="#d4d1c6" stroke-width="2"/>
          <text x="432" y="43" text-anchor="middle" font-size="24" font-weight="800" fill="#0b1f14">OL</text>

          <!-- Quote -->
          <rect x="494" y="0" width="134" height="64" rx="14" fill="#ffffff" stroke="#d4d1c6" stroke-width="2"/>
          <text x="561" y="43" text-anchor="middle" font-size="24" font-weight="700" fill="#0b1f14">Quote</text>

          <!-- Link -->
          <rect x="646" y="0" width="112" height="64" rx="14" fill="#ffffff" stroke="#d4d1c6" stroke-width="2"/>
          <text x="702" y="43" text-anchor="middle" font-size="24" font-weight="700" fill="#0b1f14">Link</text>

          <!-- Clear -->
          <rect x="776" y="0" width="124" height="64" rx="14" fill="#ffffff" stroke="#d4d1c6" stroke-width="2"/>
          <text x="838" y="43" text-anchor="middle" font-size="24" font-weight="700" fill="#0b1f14">Clear</text>
        </g>

        <!-- Message Body text -->
        <text x="38" y="160" font-size="36" font-weight="500" fill="#0b1f14">Dear Parent,</text>
        <text x="38" y="224" font-size="36" font-weight="500" fill="#0b1f14">Get ready to enjoy a day of fun and</text>
        <text x="38" y="288" font-size="36" font-weight="500" fill="#0b1f14">activities!</text>
      </g>
    </g>

    <!-- Field 3: Groups -->
    <g transform="translate(42, 730)">
      <text x="0" y="32" font-size="34" font-weight="700" fill="#0b1f14">Groups</text>
      <rect x="0" y="58" width="998" height="106" rx="24" fill="#ffffff" stroke="#dcd9ce" stroke-width="2"/>
      <text x="38" y="126" font-size="36" font-weight="400" fill="#8d9992">Start typing to add a group</text>
    </g>

    <!-- Field 4: Students -->
    <g transform="translate(42, 940)">
      <text x="0" y="32" font-size="34" font-weight="700" fill="#0b1f14">Students</text>
      <rect x="0" y="58" width="998" height="106" rx="24" fill="#ffffff" stroke="#dcd9ce" stroke-width="2"/>
      <text x="38" y="126" font-size="36" font-weight="400" fill="#8d9992">Start typing to add a student</text>
    </g>

    <!-- Checkboxes -->
    <g transform="translate(42, 1140)">
      <!-- Checkbox 1: Entire institution -->
      <g transform="translate(0, 0)">
        <rect width="48" height="48" rx="10" fill="#1d6fee"/>
        <path d="M12 24 L20 32 L36 14" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="74" y="36" font-size="36" font-weight="600" fill="#0b1f14">Entire institution</text>
      </g>

      <!-- Checkbox 2: Send email -->
      <g transform="translate(0, 80)">
        <rect width="48" height="48" rx="10" fill="#1d6fee"/>
        <path d="M12 24 L20 32 L36 14" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="74" y="36" font-size="36" font-weight="600" fill="#0b1f14">Send email</text>
      </g>
    </g>

    <!-- Field 5: Attachments -->
    <g transform="translate(42, 1340)">
      <text x="0" y="32" font-size="34" font-weight="700" fill="#0b1f14">Attachments</text>
      <!-- Dashed upload box -->
      <rect x="0" y="58" width="998" height="114" rx="24" fill="none" stroke="#bcbaae" stroke-width="2.5" stroke-dasharray="8 6"/>
      <!-- Choose Files button inside -->
      <rect x="32" y="84" width="246" height="64" rx="14" fill="#ffffff" stroke="#0b1f14" stroke-width="2"/>
      <text x="155" y="126" text-anchor="middle" font-size="28" font-weight="600" fill="#0b1f14">Choose Files</text>
      <!-- File name -->
      <text x="312" y="128" font-size="34" font-weight="500" fill="#0b1f14">EduMojo.png</text>
    </g>

    <!-- Action Buttons: Save & Clear -->
    <g transform="translate(42, 1580)">
      <!-- Save button (dark pine/teal) -->
      <rect x="0" y="0" width="206" height="118" rx="30" fill="#194840"/>
      <text x="103" y="72" text-anchor="middle" font-size="38" font-weight="800" fill="#ffffff">Save</text>

      <!-- Clear button (white) -->
      <rect x="236" y="0" width="206" height="118" rx="30" fill="#ffffff" stroke="#dcd9ce" stroke-width="2.5"/>
      <text x="339" y="72" text-anchor="middle" font-size="38" font-weight="600" fill="#0b1f14">Clear</text>
    </g>
  </g>
</svg>`;

// Screen 3: Report Cards — Student Profile
// EduMojo Parent, Bell 67
// Profile (User icon)
// [What's New] button
// Navigation tabs: Overview, Achievements, Health Checkups, Report Cards (active dark pill)
// Heading: Report Cards · 2 report cards
// Card 1:
// Term 1 Report Card
// Aarav Sharma   IX-B   2026-27   Sep 19, 2026
// [ Open PDF ]
// Card 2:
// Term 1 Report Card
// Riya Sharma   IX-B   2025-26   Nov 11, 2025
// [ Open PDF ]
const reportCardsSvg = `<svg width="1170" height="2472" viewBox="0 0 1170 2472" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif">
  <defs>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="6%" stop-color="#f5f6f2"/>
      <stop offset="28%" stop-color="#e8ede6"/>
      <stop offset="100%" stop-color="#dce4de"/>
    </linearGradient>
    <filter id="repCardShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#0b1f14" flood-opacity="0.04"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1170" height="2472" fill="url(#bgGrad3)"/>

  <!-- Top App Header: Cream top bar -->
  <rect width="1170" height="130" fill="#fcfbf7"/>
  <line x1="0" y1="130" x2="1170" y2="130" stroke="#e6e4dc" stroke-width="2"/>

  <!-- Hamburger Icon -->
  <g transform="translate(60, 40)">
    <line x1="0" y1="10" x2="52" y2="10" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
    <line x1="0" y1="28" x2="52" y2="28" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
    <line x1="0" y1="46" x2="52" y2="46" stroke="#0b1f14" stroke-width="5.5" stroke-linecap="round"/>
  </g>

  <!-- App Header Title: EduMojo Parent -->
  <text x="585" y="80" text-anchor="middle" font-size="44" font-weight="800" fill="#0b1f14" letter-spacing="-0.02em">EduMojo Parent</text>

  <!-- Notification badge top right: 67 in red badge -->
  <g transform="translate(1048, 28)">
    <path d="M12 28 C12 18 18 12 36 12 C54 12 60 18 60 28 L66 68 C66 74 60 78 52 78 L20 78 C12 78 6 74 6 68 Z" fill="#b91c1c" rx="10"/>
    <path d="M24 20 C24 8 48 8 48 20" fill="none" stroke="#b91c1c" stroke-width="5"/>
    <text x="36" y="58" text-anchor="middle" font-size="28" font-weight="900" fill="#ffffff">67</text>
  </g>

  <!-- Profile Title row -->
  <g transform="translate(64, 210)">
    <!-- User Icon -->
    <g transform="translate(0, 10)">
      <circle cx="22" cy="16" r="14" fill="none" stroke="#0b1f14" stroke-width="5"/>
      <path d="M2 48 C2 36 12 30 22 30 C32 30 42 36 42 48" fill="none" stroke="#0b1f14" stroke-width="5"/>
    </g>

    <!-- Profile -->
    <text x="66" y="50" font-size="68" font-weight="900" fill="#0b1f14" letter-spacing="-0.03em">Profile</text>

    <!-- What's New Button -->
    <rect x="746" y="-4" width="310" height="84" rx="36" fill="#ffffff" stroke="#e0ded6" stroke-width="2"/>
    <g transform="translate(784, 18)">
      <path d="M6 4 L22 4 L28 10 L28 32 L6 32 Z" fill="none" stroke="#0b1f14" stroke-width="3.5" stroke-linejoin="round"/>
      <line x1="12" y1="16" x2="22" y2="16" stroke="#0b1f14" stroke-width="3" stroke-linecap="round"/>
      <line x1="12" y1="22" x2="22" y2="22" stroke="#0b1f14" stroke-width="3" stroke-linecap="round"/>
      <text x="44" y="24" font-size="30" font-weight="600" fill="#0b1f14">What's New</text>
    </g>
  </g>

  <!-- Navigation Tabs / Pills -->
  <g transform="translate(56, 330)">
    <!-- Overview (slightly cut off on left edge in mobile scroll style) -->
    <rect x="-8" y="0" width="206" height="76" rx="38" fill="#ffffff" stroke="#e4e2db" stroke-width="2"/>
    <text x="95" y="50" text-anchor="middle" font-size="32" font-weight="600" fill="#0b1f14">Overview</text>

    <!-- Achievements -->
    <rect x="222" y="0" width="276" height="76" rx="38" fill="#ffffff" stroke="#e4e2db" stroke-width="2"/>
    <text x="360" y="50" text-anchor="middle" font-size="32" font-weight="600" fill="#0b1f14">Achievements</text>

    <!-- Health Checkups -->
    <rect x="522" y="0" width="316" height="76" rx="38" fill="#ffffff" stroke="#e4e2db" stroke-width="2"/>
    <text x="680" y="50" text-anchor="middle" font-size="32" font-weight="600" fill="#0b1f14">Health Checkups</text>

    <!-- Report Cards (Active dark pine/teal pill) -->
    <rect x="862" y="0" width="262" height="76" rx="38" fill="#133e38"/>
    <text x="993" y="50" text-anchor="middle" font-size="32" font-weight="700" fill="#ffffff">Report Cards</text>
  </g>

  <!-- Section Header: Report Cards + 2 report cards -->
  <g transform="translate(64, 480)">
    <text x="0" y="0" font-size="46" font-weight="800" fill="#0b1f14" letter-spacing="-0.02em">Report Cards</text>
    <text x="1056" y="0" text-anchor="end" font-size="36" font-weight="500" fill="#6b7a72">2 report cards</text>
  </g>

  <!-- Card 1: Aarav Sharma Term 1 Report Card -->
  <g transform="translate(64, 530)" filter="url(#repCardShadow)">
    <rect width="1042" height="340" rx="44" fill="#ffffff"/>
    
    <!-- Title -->
    <text x="44" y="74" font-size="44" font-weight="800" fill="#0b1f14" letter-spacing="-0.01em">Term 1 Report Card</text>
    
    <!-- Student details row -->
    <text x="44" y="146" font-size="36" font-weight="500" fill="#6b7a72">Aarav Sharma    IX-B    2026-27    Sep 19, 2026</text>
    
    <!-- Open PDF button -->
    <rect x="44" y="196" width="276" height="96" rx="32" fill="#ffffff" stroke="#dedcd4" stroke-width="2.5"/>
    <text x="182" y="258" text-anchor="middle" font-size="36" font-weight="600" fill="#0b1f14">Open PDF</text>
  </g>

  <!-- Card 2: Riya Sharma Term 1 Report Card -->
  <g transform="translate(64, 915)" filter="url(#repCardShadow)">
    <rect width="1042" height="340" rx="44" fill="#ffffff"/>
    
    <!-- Title -->
    <text x="44" y="74" font-size="44" font-weight="800" fill="#0b1f14" letter-spacing="-0.01em">Term 1 Report Card</text>
    
    <!-- Student details row -->
    <text x="44" y="146" font-size="36" font-weight="500" fill="#6b7a72">Riya Sharma    IX-B    2025-26    Nov 11, 2025</text>
    
    <!-- Open PDF button -->
    <rect x="44" y="196" width="276" height="96" rx="32" fill="#ffffff" stroke="#dedcd4" stroke-width="2.5"/>
    <text x="182" y="258" text-anchor="middle" font-size="36" font-weight="600" fill="#0b1f14">Open PDF</text>
  </g>
</svg>`;

async function run() {
  const dir = path.join(process.cwd(), 'public/images/app');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log('Rendering teacher-homework.png...');
  const resvg1 = new Resvg(homeworkSvg, { fitTo: { mode: 'width', value: 1170 } });
  const png1 = resvg1.render().asPng();
  fs.writeFileSync(path.join(dir, 'teacher-homework.png'), png1);

  console.log('Rendering teacher-announcement.png...');
  const resvg2 = new Resvg(announcementSvg, { fitTo: { mode: 'width', value: 1170 } });
  const png2 = resvg2.render().asPng();
  fs.writeFileSync(path.join(dir, 'teacher-announcement.png'), png2);

  console.log('Rendering teacher-report-cards.png...');
  const resvg3 = new Resvg(reportCardsSvg, { fitTo: { mode: 'width', value: 1170 } });
  const png3 = resvg3.render().asPng();
  fs.writeFileSync(path.join(dir, 'teacher-report-cards.png'), png3);

  console.log('Done rendering all 3 teacher screens!');
}

run().catch(console.error);
