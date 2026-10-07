import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

// Screen 1: admissions-crm.png (1568 x 816)
// Alt: "EduMojo enquiries screen listing today's follow-ups with each enquiry's grade, source, status and next follow-up time"
const admissionsSvg = `<svg width="1568" height="816" viewBox="0 0 1568 816" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0b1f14" flood-opacity="0.04"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1568" height="816" fill="#f8faf9"/>

  <!-- Top App Navigation Bar -->
  <rect width="1568" height="72" fill="#ffffff"/>
  <line x1="0" y1="72" x2="1568" y2="72" stroke="#e8ece9" stroke-width="1.5"/>

  <!-- Logo & Section Title -->
  <g transform="translate(36, 20)">
    <rect width="32" height="32" rx="8" fill="#16a34a"/>
    <text x="16" y="22" text-anchor="middle" font-size="18" font-weight="900" fill="#ffffff">E</text>
    <text x="44" y="23" font-size="18" font-weight="800" fill="#0b1f14">EduMojo</text>
    <text x="135" y="23" font-size="15" font-weight="500" fill="#6b7a72">/ Pre-Admission &amp; CRM</text>
  </g>

  <!-- Top Right Search & Action -->
  <g transform="translate(1180, 16)">
    <!-- Search Bar -->
    <rect width="210" height="40" rx="20" fill="#f1f5f2" stroke="#e2e8e3" stroke-width="1"/>
    <circle cx="24" cy="20" r="6" fill="none" stroke="#6b7a72" stroke-width="1.8"/>
    <line x1="28" y1="24" x2="35" y2="31" stroke="#6b7a72" stroke-width="1.8" stroke-linecap="round"/>
    <text x="42" y="25" font-size="13" font-weight="500" fill="#889890">Search enquiries...</text>

    <!-- New Enquiry Button -->
    <rect x="226" y="0" width="126" height="40" rx="20" fill="#16a34a"/>
    <text x="289" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">+ New Enquiry</text>
  </g>

  <!-- Metrics Ribbon (4 summary cards) -->
  <g transform="translate(36, 96)">
    <!-- Card 1: Today's Follow-ups -->
    <g transform="translate(0, 0)">
      <rect width="354" height="100" rx="16" fill="#ffffff" filter="url(#shadow1)"/>
      <text x="24" y="36" font-size="13" font-weight="700" fill="#6b7a72">TODAY'S FOLLOW-UPS</text>
      <text x="24" y="76" font-size="34" font-weight="900" fill="#0b1f14">18</text>
      <text x="76" y="74" font-size="13" font-weight="600" fill="#e11d48">6 pending morning slot</text>
    </g>

    <!-- Card 2: New Enquiries This Week -->
    <g transform="translate(380, 0)">
      <rect width="354" height="100" rx="16" fill="#ffffff" filter="url(#shadow1)"/>
      <text x="24" y="36" font-size="13" font-weight="700" fill="#6b7a72">NEW THIS WEEK</text>
      <text x="24" y="76" font-size="34" font-weight="900" fill="#0b1f14">42</text>
      <text x="76" y="74" font-size="13" font-weight="600" fill="#16a34a">+14% vs last week</text>
    </g>

    <!-- Card 3: Campus Visits Scheduled -->
    <g transform="translate(760, 0)">
      <rect width="354" height="100" rx="16" fill="#ffffff" filter="url(#shadow1)"/>
      <text x="24" y="36" font-size="13" font-weight="700" fill="#6b7a72">VISITS SCHEDULED</text>
      <text x="24" y="76" font-size="34" font-weight="900" fill="#0b1f14">9</text>
      <text x="56" y="74" font-size="13" font-weight="600" fill="#0284c7">3 for tomorrow</text>
    </g>

    <!-- Card 4: Confirmed Admissions -->
    <g transform="translate(1140, 0)">
      <rect width="356" height="100" rx="16" fill="#ffffff" filter="url(#shadow1)"/>
      <text x="24" y="36" font-size="13" font-weight="700" fill="#6b7a72">ENROLLED (TERM 1)</text>
      <text x="24" y="76" font-size="34" font-weight="900" fill="#15803d">38</text>
      <text x="82" y="74" font-size="13" font-weight="600" fill="#15803d">Target 50 (76%)</text>
    </g>
  </g>

  <!-- Table Container Card -->
  <g transform="translate(36, 218)" filter="url(#shadow1)">
    <rect width="1496" height="562" rx="18" fill="#ffffff"/>
    
    <!-- Table Header Bar -->
    <rect width="1496" height="50" rx="18" fill="#f5f8f6"/>
    <rect y="36" width="1496" height="14" fill="#f5f8f6"/>
    <line x1="0" y1="50" x2="1496" y2="50" stroke="#e8ece9" stroke-width="1.2"/>

    <!-- Column Headers -->
    <text x="28" y="32" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">STUDENT / PARENT</text>
    <text x="320" y="32" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">GRADE</text>
    <text x="440" y="32" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">SOURCE</text>
    <text x="640" y="32" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">STATUS</text>
    <text x="880" y="32" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">NEXT FOLLOW-UP</text>
    <text x="1140" y="32" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">COUNSELLOR</text>
    <text x="1360" y="32" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">ACTIONS</text>

    <!-- Row 1: Rohan Mehta -->
    <g transform="translate(0, 50)">
      <line x1="0" y1="80" x2="1496" y2="80" stroke="#f1f5f2" stroke-width="1"/>
      <circle cx="48" cy="40" r="18" fill="#dcfce7"/>
      <text x="48" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="#15803d">RM</text>
      <text x="80" y="36" font-size="15" font-weight="700" fill="#0b1f14">Rohan Mehta</text>
      <text x="80" y="55" font-size="12" font-weight="500" fill="#6b7a72">+91 98231 44102 · Father: Amit</text>
      <text x="320" y="45" font-size="14" font-weight="600" fill="#0b1f14">Grade 5-B</text>
      
      <!-- Source Badge: Website Form -->
      <rect x="440" y="27" width="128" height="26" rx="13" fill="#e0f2fe"/>
      <text x="504" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#0369a1">Website Form</text>

      <!-- Status: Demo Requested -->
      <rect x="640" y="27" width="154" height="26" rx="13" fill="#fef3c7"/>
      <text x="717" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">Visit Scheduled</text>

      <text x="880" y="36" font-size="14" font-weight="700" fill="#0b1f14">Today, 2:30 PM</text>
      <text x="880" y="55" font-size="12" font-weight="500" fill="#16a34a">Campus tour with Vice Principal</text>

      <text x="1140" y="45" font-size="14" font-weight="600" fill="#3f4b45">Ritika Malhotra</text>
      
      <!-- Call & Note Buttons -->
      <rect x="1360" y="26" width="52" height="28" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="1386" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#166534">Call</text>
      <rect x="1420" y="26" width="56" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <text x="1448" y="44" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">Note</text>
    </g>

    <!-- Row 2: Ananya Verma -->
    <g transform="translate(0, 130)">
      <line x1="0" y1="80" x2="1496" y2="80" stroke="#f1f5f2" stroke-width="1"/>
      <circle cx="48" cy="40" r="18" fill="#ede9fe"/>
      <text x="48" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="#6d28d9">AV</text>
      <text x="80" y="36" font-size="15" font-weight="700" fill="#0b1f14">Ananya Verma</text>
      <text x="80" y="55" font-size="12" font-weight="500" fill="#6b7a72">+91 97654 32189 · Mother: Sunita</text>
      <text x="320" y="45" font-size="14" font-weight="600" fill="#0b1f14">Grade 8-A</text>

      <!-- Source: Facebook Ad -->
      <rect x="440" y="27" width="128" height="26" rx="13" fill="#f1f5f9"/>
      <text x="504" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Facebook Ad</text>

      <!-- Status: Documents Pending -->
      <rect x="640" y="27" width="160" height="26" rx="13" fill="#dbeafe"/>
      <text x="720" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">Documents Uploaded</text>

      <text x="880" y="36" font-size="14" font-weight="700" fill="#0b1f14">Today, 4:15 PM</text>
      <text x="880" y="55" font-size="12" font-weight="500" fill="#6b7a72">Verify Transfer Certificate</text>

      <text x="1140" y="45" font-size="14" font-weight="600" fill="#3f4b45">Pooja Sharma</text>
      
      <rect x="1360" y="26" width="52" height="28" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="1386" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#166534">Call</text>
      <rect x="1420" y="26" width="56" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <text x="1448" y="44" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">Note</text>
    </g>

    <!-- Row 3: Kabir Joshi -->
    <g transform="translate(0, 210)">
      <line x1="0" y1="80" x2="1496" y2="80" stroke="#f1f5f2" stroke-width="1"/>
      <circle cx="48" cy="40" r="18" fill="#fef3c7"/>
      <text x="48" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="#b45309">KJ</text>
      <text x="80" y="36" font-size="15" font-weight="700" fill="#0b1f14">Kabir Joshi</text>
      <text x="80" y="55" font-size="12" font-weight="500" fill="#6b7a72">+91 99882 11029 · Father: Vivek</text>
      <text x="320" y="45" font-size="14" font-weight="600" fill="#0b1f14">Grade 1-C</text>

      <!-- Source: Walk-in Enquiry -->
      <rect x="440" y="27" width="128" height="26" rx="13" fill="#fef2f2"/>
      <text x="504" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">Walk-in</text>

      <!-- Status: Ready to Enrol -->
      <rect x="640" y="27" width="160" height="26" rx="13" fill="#dcfce7"/>
      <text x="720" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">Admission Confirmed</text>

      <text x="880" y="36" font-size="14" font-weight="700" fill="#0b1f14">Tomorrow, 10:00 AM</text>
      <text x="880" y="55" font-size="12" font-weight="500" fill="#6b7a72">Fee link sent via WhatsApp</text>

      <text x="1140" y="45" font-size="14" font-weight="600" fill="#3f4b45">Ritika Malhotra</text>

      <rect x="1360" y="26" width="52" height="28" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="1386" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#166534">Call</text>
      <rect x="1420" y="26" width="56" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <text x="1448" y="44" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">Note</text>
    </g>

    <!-- Row 4: Tanvi Patil -->
    <g transform="translate(0, 290)">
      <line x1="0" y1="80" x2="1496" y2="80" stroke="#f1f5f2" stroke-width="1"/>
      <circle cx="48" cy="40" r="18" fill="#e0e7ff"/>
      <text x="48" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="#4338ca">TP</text>
      <text x="80" y="36" font-size="15" font-weight="700" fill="#0b1f14">Tanvi Patil</text>
      <text x="80" y="55" font-size="12" font-weight="500" fill="#6b7a72">+91 98450 67123 · Mother: Radhika</text>
      <text x="320" y="45" font-size="14" font-weight="600" fill="#0b1f14">Grade 9-B</text>

      <!-- Source: Referral -->
      <rect x="440" y="27" width="128" height="26" rx="13" fill="#f0fdf4"/>
      <text x="504" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">Parent Referral</text>

      <!-- Status: New Enquiry -->
      <rect x="640" y="27" width="160" height="26" rx="13" fill="#f1f5f9"/>
      <text x="720" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Enquiry Received</text>

      <text x="880" y="36" font-size="14" font-weight="700" fill="#0b1f14">Tomorrow, 11:30 AM</text>
      <text x="880" y="55" font-size="12" font-weight="500" fill="#6b7a72">Initial counselling callback</text>

      <text x="1140" y="45" font-size="14" font-weight="600" fill="#3f4b45">Sneha Kulkarni</text>

      <rect x="1360" y="26" width="52" height="28" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="1386" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#166534">Call</text>
      <rect x="1420" y="26" width="56" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <text x="1448" y="44" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">Note</text>
    </g>

    <!-- Row 5: Aarav Deshmukh -->
    <g transform="translate(0, 370)">
      <circle cx="48" cy="40" r="18" fill="#fce7f3"/>
      <text x="48" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="#be185d">AD</text>
      <text x="80" y="36" font-size="15" font-weight="700" fill="#0b1f14">Aarav Deshmukh</text>
      <text x="80" y="55" font-size="12" font-weight="500" fill="#6b7a72">+91 97300 88219 · Father: Nilesh</text>
      <text x="320" y="45" font-size="14" font-weight="600" fill="#0b1f14">Grade 11-Sci</text>

      <!-- Source: Google Search -->
      <rect x="440" y="27" width="128" height="26" rx="13" fill="#e0f2fe"/>
      <text x="504" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#0284c7">Google Search</text>

      <!-- Status: Application In Review -->
      <rect x="640" y="27" width="160" height="26" rx="13" fill="#fef3c7"/>
      <text x="720" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">Under Review</text>

      <text x="880" y="36" font-size="14" font-weight="700" fill="#0b1f14">Oct 9, 3:00 PM</text>
      <text x="880" y="55" font-size="12" font-weight="500" fill="#6b7a72">Entrance evaluation results</text>

      <text x="1140" y="45" font-size="14" font-weight="600" fill="#3f4b45">Pooja Sharma</text>

      <rect x="1360" y="26" width="52" height="28" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="1386" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#166534">Call</text>
      <rect x="1420" y="26" width="56" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <text x="1448" y="44" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">Note</text>
    </g>
  </g>
</svg>`;

// Screen 2: fees-payment-links.png (1568 x 816)
// Alt: "EduMojo fees screen showing collected, pending and overdue totals and a list of pending fees with Send link buttons for WhatsApp, email and SMS"
const feesSvg = `<svg width="1568" height="816" viewBox="0 0 1568 816" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0b1f14" flood-opacity="0.04"/>
    </filter>
  </defs>

  <rect width="1568" height="816" fill="#f8faf9"/>

  <!-- Top App Navigation Bar -->
  <rect width="1568" height="72" fill="#ffffff"/>
  <line x1="0" y1="72" x2="1568" y2="72" stroke="#e8ece9" stroke-width="1.5"/>

  <g transform="translate(36, 20)">
    <rect width="32" height="32" rx="8" fill="#16a34a"/>
    <text x="16" y="22" text-anchor="middle" font-size="18" font-weight="900" fill="#ffffff">E</text>
    <text x="44" y="23" font-size="18" font-weight="800" fill="#0b1f14">EduMojo</text>
    <text x="135" y="23" font-size="15" font-weight="500" fill="#6b7a72">/ Fees &amp; Collection Ledger</text>
  </g>

  <!-- Export & Batch Link Actions -->
  <g transform="translate(1180, 16)">
    <rect width="140" height="40" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="70" y="25" text-anchor="middle" font-size="13" font-weight="600" fill="#334155">Download Tally</text>

    <rect x="150" y="0" width="202" height="40" rx="20" fill="#16a34a"/>
    <text x="251" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">Dispatch Payment Links</text>
  </g>

  <!-- 3 Big Metric Tiles: Collected, Pending, Overdue -->
  <g transform="translate(36, 96)">
    <!-- Tile 1: Collected -->
    <g transform="translate(0, 0)">
      <rect width="478" height="114" rx="18" fill="#ffffff" filter="url(#shadow2)"/>
      <rect x="24" y="20" width="110" height="26" rx="13" fill="#dcfce7"/>
      <text x="79" y="37" text-anchor="middle" font-size="12" font-weight="800" fill="#15803d">COLLECTED</text>
      <text x="24" y="86" font-size="36" font-weight="900" fill="#0b1f14">₹3,86,40,000</text>
      <text x="320" y="84" font-size="14" font-weight="700" fill="#15803d">92.4% on time</text>
    </g>

    <!-- Tile 2: Pending -->
    <g transform="translate(508, 0)">
      <rect width="478" height="114" rx="18" fill="#ffffff" filter="url(#shadow2)"/>
      <rect x="24" y="20" width="100" height="26" rx="13" fill="#fef3c7"/>
      <text x="74" y="37" text-anchor="middle" font-size="12" font-weight="800" fill="#b45309">PENDING</text>
      <text x="24" y="86" font-size="36" font-weight="900" fill="#0b1f14">₹24,18,000</text>
      <text x="310" y="84" font-size="14" font-weight="700" fill="#b45309">Due in 7 days</text>
    </g>

    <!-- Tile 3: Overdue -->
    <g transform="translate(1016, 0)">
      <rect width="480" height="114" rx="18" fill="#ffffff" filter="url(#shadow2)"/>
      <rect x="24" y="20" width="100" height="26" rx="13" fill="#fee2e2"/>
      <text x="74" y="37" text-anchor="middle" font-size="12" font-weight="800" fill="#b91c1c">OVERDUE</text>
      <text x="24" y="86" font-size="36" font-weight="900" fill="#b91c1c">₹7,20,000</text>
      <text x="320" y="84" font-size="14" font-weight="700" fill="#e11d48">14 accounts</text>
    </g>
  </g>

  <!-- Table Card: Pending Fees & Direct Links -->
  <g transform="translate(36, 234)" filter="url(#shadow2)">
    <rect width="1496" height="546" rx="18" fill="#ffffff"/>
    
    <rect width="1496" height="48" rx="18" fill="#f5f8f6"/>
    <rect y="34" width="1496" height="14" fill="#f5f8f6"/>
    <line x1="0" y1="48" x2="1496" y2="48" stroke="#e8ece9" stroke-width="1.2"/>

    <text x="28" y="30" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">STUDENT &amp; GRN</text>
    <text x="320" y="30" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">CLASS</text>
    <text x="440" y="30" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">FEE HEAD</text>
    <text x="660" y="30" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">AMOUNT DUE</text>
    <text x="860" y="30" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">DUE DATE</text>
    <text x="1080" y="30" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">STATUS</text>
    <text x="1270" y="30" font-size="12" font-weight="800" fill="#52645a" letter-spacing="0.5">SEND PAYMENT LINK</text>

    <!-- Row 1: Aryan Shah -->
    <g transform="translate(0, 48)">
      <line x1="0" y1="78" x2="1496" y2="78" stroke="#f1f5f2" stroke-width="1"/>
      <text x="28" y="34" font-size="15" font-weight="700" fill="#0b1f14">Aryan Shah</text>
      <text x="28" y="53" font-size="12" font-weight="500" fill="#6b7a72">GRN: EM-2024-0812 · Mob: +91 98221 00921</text>
      
      <text x="320" y="44" font-size="14" font-weight="600" fill="#0b1f14">Grade 8-A</text>
      <text x="440" y="44" font-size="14" font-weight="600" fill="#3f4b45">Term 2 Tuition &amp; Lab</text>
      <text x="660" y="44" font-size="16" font-weight="800" fill="#0b1f14">₹48,000</text>
      <text x="860" y="44" font-size="14" font-weight="600" fill="#e11d48">Overdue (5 days)</text>

      <rect x="1080" y="27" width="100" height="26" rx="13" fill="#fee2e2"/>
      <text x="1130" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">Unpaid</text>

      <!-- Channels: WhatsApp / SMS / Email -->
      <g transform="translate(1270, 24)">
        <rect width="66" height="30" rx="15" fill="#25d366" opacity="0.15"/>
        <text x="33" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="#15803d">WhatsApp</text>

        <rect x="74" y="0" width="56" height="30" rx="15" fill="#f1f5f9"/>
        <text x="102" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">SMS</text>

        <rect x="138" y="0" width="56" height="30" rx="15" fill="#f1f5f9"/>
        <text x="166" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Email</text>
      </g>
    </g>

    <!-- Row 2: Meera Nair -->
    <g transform="translate(0, 126)">
      <line x1="0" y1="78" x2="1496" y2="78" stroke="#f1f5f2" stroke-width="1"/>
      <text x="28" y="34" font-size="15" font-weight="700" fill="#0b1f14">Meera Nair</text>
      <text x="28" y="53" font-size="12" font-weight="500" fill="#6b7a72">GRN: EM-2023-0491 · Mob: +91 97630 11928</text>

      <text x="320" y="44" font-size="14" font-weight="600" fill="#0b1f14">Grade 10-B</text>
      <text x="440" y="44" font-size="14" font-weight="600" fill="#3f4b45">Term 2 Board Exam &amp; Tuition</text>
      <text x="660" y="44" font-size="16" font-weight="800" fill="#0b1f14">₹54,500</text>
      <text x="860" y="44" font-size="14" font-weight="600" fill="#b45309">Due in 2 days</text>

      <rect x="1080" y="27" width="100" height="26" rx="13" fill="#fef3c7"/>
      <text x="1130" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">Pending</text>

      <g transform="translate(1270, 24)">
        <rect width="66" height="30" rx="15" fill="#25d366" opacity="0.15"/>
        <text x="33" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="#15803d">WhatsApp</text>

        <rect x="74" y="0" width="56" height="30" rx="15" fill="#f1f5f9"/>
        <text x="102" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">SMS</text>

        <rect x="138" y="0" width="56" height="30" rx="15" fill="#f1f5f9"/>
        <text x="166" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Email</text>
      </g>
    </g>

    <!-- Row 3: Dev Kulkarni -->
    <g transform="translate(0, 204)">
      <line x1="0" y1="78" x2="1496" y2="78" stroke="#f1f5f2" stroke-width="1"/>
      <text x="28" y="34" font-size="15" font-weight="700" fill="#0b1f14">Dev Kulkarni</text>
      <text x="28" y="53" font-size="12" font-weight="500" fill="#6b7a72">GRN: EM-2022-1082 · Mob: +91 94220 33811</text>

      <text x="320" y="44" font-size="14" font-weight="600" fill="#0b1f14">Grade 6-C</text>
      <text x="440" y="44" font-size="14" font-weight="600" fill="#3f4b45">Annual Transport Fee</text>
      <text x="660" y="44" font-size="16" font-weight="800" fill="#0b1f14">₹32,000</text>
      <text x="860" y="44" font-size="14" font-weight="600" fill="#15803d">Paid via UPI</text>

      <rect x="1080" y="27" width="100" height="26" rx="13" fill="#dcfce7"/>
      <text x="1130" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">Settled ✓</text>

      <g transform="translate(1270, 24)">
        <rect width="120" height="30" rx="15" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
        <text x="60" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#166534">View Receipt #891</text>
      </g>
    </g>

    <!-- Row 4: Aisha Khan -->
    <g transform="translate(0, 282)">
      <line x1="0" y1="78" x2="1496" y2="78" stroke="#f1f5f2" stroke-width="1"/>
      <text x="28" y="34" font-size="15" font-weight="700" fill="#0b1f14">Aisha Khan</text>
      <text x="28" y="53" font-size="12" font-weight="500" fill="#6b7a72">GRN: EM-2024-0043 · Mob: +91 99214 77621</text>

      <text x="320" y="44" font-size="14" font-weight="600" fill="#0b1f14">Grade 3-A</text>
      <text x="440" y="44" font-size="14" font-weight="600" fill="#3f4b45">Term 2 Tuition Fee</text>
      <text x="660" y="44" font-size="16" font-weight="800" fill="#0b1f14">₹42,000</text>
      <text x="860" y="44" font-size="14" font-weight="600" fill="#e11d48">Overdue (12 days)</text>

      <rect x="1080" y="27" width="100" height="26" rx="13" fill="#fee2e2"/>
      <text x="1130" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">Unpaid</text>

      <g transform="translate(1270, 24)">
        <rect width="66" height="30" rx="15" fill="#25d366" opacity="0.15"/>
        <text x="33" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="#15803d">WhatsApp</text>

        <rect x="74" y="0" width="56" height="30" rx="15" fill="#f1f5f9"/>
        <text x="102" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">SMS</text>

        <rect x="138" y="0" width="56" height="30" rx="15" fill="#f1f5f9"/>
        <text x="166" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Email</text>
      </g>
    </g>

    <!-- Row 5: Riya Sharma -->
    <g transform="translate(0, 360)">
      <text x="28" y="34" font-size="15" font-weight="700" fill="#0b1f14">Riya Sharma</text>
      <text x="28" y="53" font-size="12" font-weight="500" fill="#6b7a72">GRN: EM-2021-0211 · Mob: +91 98901 22890</text>

      <text x="320" y="44" font-size="14" font-weight="600" fill="#0b1f14">Grade 9-B</text>
      <text x="440" y="44" font-size="14" font-weight="600" fill="#3f4b45">Term 2 Tuition Fee</text>
      <text x="660" y="44" font-size="16" font-weight="800" fill="#0b1f14">₹48,000</text>
      <text x="860" y="44" font-size="14" font-weight="600" fill="#b45309">Due in 5 days</text>

      <rect x="1080" y="27" width="100" height="26" rx="13" fill="#fef3c7"/>
      <text x="1130" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">Pending</text>

      <g transform="translate(1270, 24)">
        <rect width="66" height="30" rx="15" fill="#25d366" opacity="0.15"/>
        <text x="33" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="#15803d">WhatsApp</text>

        <rect x="74" y="0" width="56" height="30" rx="15" fill="#f1f5f9"/>
        <text x="102" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">SMS</text>

        <rect x="138" y="0" width="56" height="30" rx="15" fill="#f1f5f9"/>
        <text x="166" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Email</text>
      </g>
    </g>
  </g>
</svg>`;

// Screen 3: ai-analytics.png (1568 x 816)
// Alt: "EduMojo AI assistant answering an attendance summary for Grade 10-A, with a table of students who need attention"
const aiSvg = `<svg width="1568" height="816" viewBox="0 0 1568 816" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0b1f14" flood-opacity="0.04"/>
    </filter>
  </defs>

  <rect width="1568" height="816" fill="#f8faf9"/>

  <!-- Top App Navigation Bar -->
  <rect width="1568" height="72" fill="#ffffff"/>
  <line x1="0" y1="72" x2="1568" y2="72" stroke="#e8ece9" stroke-width="1.5"/>

  <g transform="translate(36, 20)">
    <rect width="32" height="32" rx="8" fill="#16a34a"/>
    <text x="16" y="22" text-anchor="middle" font-size="18" font-weight="900" fill="#ffffff">E</text>
    <text x="44" y="23" font-size="18" font-weight="800" fill="#0b1f14">EduMojo</text>
    <text x="135" y="23" font-size="15" font-weight="500" fill="#6b7a72">/ AI Assistant &amp; Student Insights</text>
  </g>

  <g transform="translate(1260, 16)">
    <rect width="150" height="40" rx="20" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
    <text x="75" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="#15803d">AI Copilot: Online</text>
  </g>

  <!-- Left Column: AI Natural Language Chat Window -->
  <g transform="translate(36, 96)" filter="url(#shadow3)">
    <rect width="660" height="684" rx="20" fill="#ffffff"/>

    <!-- Chat Header -->
    <rect width="660" height="60" rx="20" fill="#f5f8f6"/>
    <rect y="46" width="660" height="14" fill="#f5f8f6"/>
    <line x1="0" y1="60" x2="660" y2="60" stroke="#e8ece9" stroke-width="1.2"/>
    <circle cx="36" cy="30" r="12" fill="#16a34a"/>
    <text x="36" y="35" text-anchor="middle" font-size="12" font-weight="900" fill="#ffffff">✦</text>
    <text x="60" y="35" font-size="15" font-weight="800" fill="#0b1f14">Ask EduMojo AI</text>
    <text x="560" y="35" font-size="12" font-weight="600" fill="#6b7a72">Model 2.5 Edu</text>

    <!-- User Question Bubble (right aligned) -->
    <g transform="translate(180, 84)">
      <rect width="450" height="64" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1"/>
      <text x="24" y="28" font-size="14" font-weight="700" fill="#14532d">"Give me an attendance summary for Grade 10-A</text>
      <text x="24" y="48" font-size="14" font-weight="700" fill="#14532d">and flag anyone who needs attention."</text>
    </g>

    <!-- AI Answer Bubble (left aligned) -->
    <g transform="translate(30, 168)">
      <rect width="600" height="400" rx="18" fill="#f8faf9" stroke="#e2e8e3" stroke-width="1"/>
      
      <!-- AI Answer Intro -->
      <text x="24" y="34" font-size="15" font-weight="800" fill="#0b1f14">Grade 10-A Attendance Summary (Oct 2026)</text>
      <text x="24" y="60" font-size="13.5" font-weight="500" fill="#3f4b45">Overall class attendance this month is <tspan font-weight="800" fill="#16a34a">95.4%</tspan> across 38 students.</text>
      <text x="24" y="82" font-size="13.5" font-weight="500" fill="#3f4b45">3 students dropped below the 85% requirement:</text>

      <!-- Mini Table of flagged students inside chat -->
      <g transform="translate(20, 102)">
        <rect width="560" height="190" rx="12" fill="#ffffff" stroke="#e2e8e3" stroke-width="1"/>
        
        <rect width="560" height="32" rx="12" fill="#f1f5f2"/>
        <rect y="20" width="560" height="12" fill="#f1f5f2"/>
        <text x="16" y="21" font-size="11" font-weight="800" fill="#52645a">STUDENT</text>
        <text x="180" y="21" font-size="11" font-weight="800" fill="#52645a">ATTENDANCE</text>
        <text x="320" y="21" font-size="11" font-weight="800" fill="#52645a">TRIGGER REASON</text>
        <text x="470" y="21" font-size="11" font-weight="800" fill="#52645a">ACTION</text>

        <!-- S1: Tanvi Patil -->
        <text x="16" y="56" font-size="13" font-weight="700" fill="#0b1f14">Tanvi Patil</text>
        <text x="180" y="56" font-size="13" font-weight="800" fill="#e11d48">78.2% (12 abs)</text>
        <text x="320" y="56" font-size="12" font-weight="500" fill="#6b7a72">3 consecutive Mon/Fri</text>
        <text x="470" y="56" font-size="12" font-weight="700" fill="#16a34a">Alert Parent</text>

        <!-- S2: Dev Kulkarni -->
        <text x="16" y="98" font-size="13" font-weight="700" fill="#0b1f14">Dev Kulkarni</text>
        <text x="180" y="98" font-size="13" font-weight="800" fill="#d97706">82.5% (9 abs)</text>
        <text x="320" y="98" font-size="12" font-weight="500" fill="#6b7a72">Medical leave pending</text>
        <text x="470" y="98" font-size="12" font-weight="700" fill="#16a34a">Verify Note</text>

        <!-- S3: Aarav Sharma -->
        <text x="16" y="140" font-size="13" font-weight="700" fill="#0b1f14">Aarav Sharma</text>
        <text x="180" y="140" font-size="13" font-weight="800" fill="#d97706">84.0% (8 abs)</text>
        <text x="320" y="140" font-size="12" font-weight="500" fill="#6b7a72">Sports tournament absent</text>
        <text x="470" y="140" font-size="12" font-weight="700" fill="#0284c7">OD Applied</text>
      </g>

      <text x="24" y="324" font-size="13" font-weight="600" fill="#15803d">Suggested action: Dispatched 1-click notice to parents of Tanvi and Dev.</text>
      <text x="24" y="348" font-size="12" font-weight="500" fill="#6b7a72">Would you like me to schedule a meeting with Class Teacher Mrs. Deshmukh?</text>

      <!-- Action Chips -->
      <rect x="24" y="362" width="130" height="26" rx="13" fill="#e0f2fe"/>
      <text x="89" y="379" text-anchor="middle" font-size="12" font-weight="700" fill="#0369a1">Schedule Meeting</text>

      <rect x="164" y="362" width="120" height="26" rx="13" fill="#f0fdf4"/>
      <text x="224" y="379" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">Export PDF</text>
    </g>

    <!-- Bottom Input Area -->
    <g transform="translate(30, 604)">
      <rect width="600" height="52" rx="26" fill="#f1f5f2" stroke="#dcdfdc" stroke-width="1"/>
      <text x="24" y="32" font-size="14" font-weight="500" fill="#889890">Ask anything about fees, grades or attendance...</text>
      <circle cx="568" cy="26" r="18" fill="#16a34a"/>
      <path d="M562 26 L574 26 M568 20 L574 26 L568 32" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
  </g>

  <!-- Right Column: Visual Dashboard Charts & Predictive Insights -->
  <g transform="translate(724, 96)">
    <!-- Top Chart Card: Grade 10-A Attendance Trend -->
    <g filter="url(#shadow3)">
      <rect width="808" height="326" rx="20" fill="#ffffff"/>
      <text x="28" y="38" font-size="16" font-weight="800" fill="#0b1f14">Class Attendance Trend (Last 8 Weeks)</text>
      <text x="28" y="60" font-size="13" font-weight="500" fill="#6b7a72">Class Average: 95.4% · Target: 90%</text>

      <!-- Bar Chart -->
      <g transform="translate(40, 100)">
        <!-- Gridlines -->
        <line x1="0" y1="0" x2="720" y2="0" stroke="#f1f5f2" stroke-width="1"/>
        <line x1="0" y1="50" x2="720" y2="50" stroke="#f1f5f2" stroke-width="1"/>
        <line x1="0" y1="100" x2="720" y2="100" stroke="#f1f5f2" stroke-width="1"/>
        <line x1="0" y1="150" x2="720" y2="150" stroke="#f1f5f2" stroke-width="1"/>

        <!-- 8 Bars -->
        <!-- W1 -->
        <rect x="20" y="18" width="54" height="132" rx="8" fill="#dcfce7"/>
        <text x="47" y="174" text-anchor="middle" font-size="12" font-weight="600" fill="#6b7a72">W1</text>
        <text x="47" y="12" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">96%</text>

        <!-- W2 -->
        <rect x="110" y="12" width="54" height="138" rx="8" fill="#dcfce7"/>
        <text x="137" y="174" text-anchor="middle" font-size="12" font-weight="600" fill="#6b7a72">W2</text>
        <text x="137" y="6" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">97%</text>

        <!-- W3 -->
        <rect x="200" y="24" width="54" height="126" rx="8" fill="#dcfce7"/>
        <text x="227" y="174" text-anchor="middle" font-size="12" font-weight="600" fill="#6b7a72">W3</text>
        <text x="227" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">94%</text>

        <!-- W4 -->
        <rect x="290" y="8" width="54" height="142" rx="8" fill="#16a34a"/>
        <text x="317" y="174" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">W4</text>
        <text x="317" y="2" text-anchor="middle" font-size="12" font-weight="800" fill="#15803d">98%</text>

        <!-- W5 -->
        <rect x="380" y="22" width="54" height="128" rx="8" fill="#dcfce7"/>
        <text x="407" y="174" text-anchor="middle" font-size="12" font-weight="600" fill="#6b7a72">W5</text>
        <text x="407" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">95%</text>

        <!-- W6 -->
        <rect x="470" y="20" width="54" height="130" rx="8" fill="#dcfce7"/>
        <text x="497" y="174" text-anchor="middle" font-size="12" font-weight="600" fill="#6b7a72">W6</text>
        <text x="497" y="14" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">95%</text>

        <!-- W7 -->
        <rect x="560" y="32" width="54" height="118" rx="8" fill="#fef3c7"/>
        <text x="587" y="174" text-anchor="middle" font-size="12" font-weight="600" fill="#6b7a72">W7</text>
        <text x="587" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">92%</text>

        <!-- W8 (Current) -->
        <rect x="650" y="18" width="54" height="132" rx="8" fill="#16a34a"/>
        <text x="677" y="174" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">W8</text>
        <text x="677" y="12" text-anchor="middle" font-size="12" font-weight="800" fill="#15803d">96%</text>
      </g>
    </g>

    <!-- Bottom Split Cards: At-Risk Intervention & Engagement Index -->
    <g transform="translate(0, 350)" filter="url(#shadow3)">
      <!-- Card 1: At-Risk Alerts -->
      <g>
        <rect width="392" height="334" rx="20" fill="#ffffff"/>
        <text x="24" y="38" font-size="16" font-weight="800" fill="#0b1f14">Early Intervention Triggers</text>
        <text x="24" y="58" font-size="12.5" font-weight="500" fill="#6b7a72">Identified before end-of-term</text>

        <g transform="translate(20, 80)">
          <!-- Item 1 -->
          <rect width="352" height="66" rx="12" fill="#fff1f2"/>
          <text x="18" y="28" font-size="13.5" font-weight="700" fill="#9f1239">Attendance Dip Warning</text>
          <text x="18" y="48" font-size="12" font-weight="500" fill="#e11d48">Tanvi Patil (Class 10-A) · 3 alerts</text>
          <rect x="254" y="18" width="82" height="28" rx="14" fill="#be123c"/>
          <text x="295" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">Act Now</text>

          <!-- Item 2 -->
          <g transform="translate(0, 78)">
            <rect width="352" height="66" rx="12" fill="#fffbeb"/>
            <text x="18" y="28" font-size="13.5" font-weight="700" fill="#92400e">Term 2 Fee Unpaid</text>
            <text x="18" y="48" font-size="12" font-weight="500" fill="#b45309">Aisha Khan · ₹42,000</text>
            <rect x="254" y="18" width="82" height="28" rx="14" fill="#d97706"/>
            <text x="295" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">Send Link</text>
          </g>

          <!-- Item 3 -->
          <g transform="translate(0, 156)">
            <rect width="352" height="66" rx="12" fill="#f0fdf4"/>
            <text x="18" y="28" font-size="13.5" font-weight="700" fill="#14532d">Grade Jump Recorded</text>
            <text x="18" y="48" font-size="12" font-weight="500" fill="#15803d">Kabir Joshi · Math +18%</text>
            <rect x="254" y="18" width="82" height="28" rx="14" fill="#15803d"/>
            <text x="295" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">Praise</text>
          </g>
        </g>
      </g>

      <!-- Card 2: Parent App Engagement -->
      <g transform="translate(416, 0)">
        <rect width="392" height="334" rx="20" fill="#ffffff"/>
        <text x="24" y="38" font-size="16" font-weight="800" fill="#0b1f14">Parent App Engagement</text>
        <text x="24" y="58" font-size="12.5" font-weight="500" fill="#6b7a72">Daily Active Reach</text>

        <g transform="translate(24, 88)">
          <text x="0" y="48" font-size="52" font-weight="900" fill="#16a34a">96.8%</text>
          <text x="0" y="80" font-size="14" font-weight="600" fill="#0b1f14">Daily notices delivered instantly</text>
          <text x="0" y="104" font-size="12.5" font-weight="500" fill="#6b7a72">Average read-time: 4 minutes</text>

          <g transform="translate(0, 134)">
            <rect width="344" height="12" rx="6" fill="#e2e8f0"/>
            <rect width="332" height="12" rx="6" fill="#16a34a"/>
          </g>

          <text x="0" y="174" font-size="12.5" font-weight="600" fill="#15803d">Zero dependency on WhatsApp groups</text>
        </g>
      </g>
    </g>
  </g>
</svg>`;

async function run() {
  const dir = path.join(process.cwd(), 'public/images/app');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  console.log('Rendering admissions-crm.png...');
  const resvg1 = new Resvg(admissionsSvg, { fitTo: { mode: 'width', value: 1568 } });
  fs.writeFileSync(path.join(dir, 'admissions-crm.png'), resvg1.render().asPng());

  console.log('Rendering fees-payment-links.png...');
  const resvg2 = new Resvg(feesSvg, { fitTo: { mode: 'width', value: 1568 } });
  fs.writeFileSync(path.join(dir, 'fees-payment-links.png'), resvg2.render().asPng());

  console.log('Rendering ai-analytics.png...');
  const resvg3 = new Resvg(aiSvg, { fitTo: { mode: 'width', value: 1568 } });
  fs.writeFileSync(path.join(dir, 'ai-analytics.png'), resvg3.render().asPng());

  console.log('Done rendering feature box images!');
}

run().catch(console.error);
