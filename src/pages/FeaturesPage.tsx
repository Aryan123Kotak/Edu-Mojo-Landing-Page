import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Check,
  UserPlus,
  FileCheck2,
  Users,
  GraduationCap,
  BookOpenCheck,
  MessageSquareQuote,
  Smartphone,
  Receipt,
  CreditCard,
  Bus,
  BookMarked,
  Boxes,
  Stethoscope,
  CalendarClock,
  FileArchive,
  BarChart3,
  Trophy,
  Sliders,
  Sparkles,
  LayoutDashboard,
  Award,
  CalendarCheck,
  Network,
  Building2,
  Package,
  Bot,
  Globe2
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlowCard } from '../components/GlowCard';
import { SelfBuildingTimetable } from '../components/SelfBuildingTimetable';
import { UniversalFaqSection } from '../components/UniversalFaqSection';
import { PageRoute } from '../components/Navbar';

interface FeaturesPageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestCallBack?: () => void;
}

type ModuleTab = 'all' | 'student' | 'ops' | 'beyond' | 'extended';

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<ModuleTab>('all');

  // Dynamic Head SEO/AEO Tags & Canonical URL
  useEffect(() => {
    document.title = 'School ERP Features – 24+ Modules | EduMojo';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      "Explore EduMojo's 24+ school ERP modules: admissions CRM, fees and payment links, timetable, parent app, transport, library, hostel, certificates and AI."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.edu-mojo.com/features');

    const setMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('og:type', 'website');
    setMeta('og:site_name', 'EduMojo');
    setMeta('og:title', 'EduMojo Features – 24+ School ERP Modules');
    setMeta('og:description', "Explore EduMojo's 24+ school ERP modules: admissions CRM, fees and payment links, timetable, parent app, transport, library, hostel, certificates and AI.");
    setMeta('og:url', 'https://www.edu-mojo.com/features');
    setMeta('og:image', 'https://www.edu-mojo.com/og-image.png');

    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');
  }, []);

  const handleBookDemo = () => {
    onNavigate('contact');
    window.location.hash = 'form';
  };

  // Structured Data JSON-LD Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.edu-mojo.com/features#page",
        "url": "https://www.edu-mojo.com/features",
        "name": "EduMojo Features – 24+ School ERP Modules",
        "inLanguage": "en-IN",
        "about": {
          "@id": "https://www.edu-mojo.com/#software"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.edu-mojo.com/#software",
        "name": "EduMojo",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "School ERP / School Management Software",
        "operatingSystem": "Web, Android, iOS",
        "publisher": {
          "@id": "https://www.edu-mojo.com/#org"
        },
        "featureList": [
          "Pre-Admission & CRM",
          "Admissions Management",
          "Student Profiles",
          "Academics & Class Management",
          "Daily Academic Updates & E-Learning",
          "Communication System",
          "Parent / School App",
          "Fee Management & Accounting",
          "Custom Payment Links",
          "Transportation",
          "Library",
          "Inventory & Requisition",
          "Health Records / Infirmary",
          "Timetable",
          "Documents",
          "Academic Reports",
          "Sports & Performing Arts (SPA)",
          "Administration & Setup",
          "AI & Automation",
          "Analytics & Dashboards",
          "Certificates & Exit Process",
          "Appointment Scheduling",
          "Alumni Management",
          "Hostel Management"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.edu-mojo.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Features",
            "item": "https://www.edu-mojo.com/features"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What features does EduMojo have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EduMojo has 24+ modules in four groups: the student lifecycle (enquiries, admissions, student profiles, academics, e-learning), communication and finance (notices, parent app, fees, payment links, transport, library), operations (inventory, health records, timetable, documents, report cards, sports and arts, setup) and extended tools (AI, analytics, certificates, appointments, alumni, hostel)."
            }
          },
          {
            "@type": "Question",
            "name": "Does EduMojo include admission and enquiry management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The Pre-Admission & CRM module tracks every enquiry by source with follow-up reminders, and the Admissions module handles online applications, document collection and admission status tracking."
            }
          },
          {
            "@type": "Question",
            "name": "Can EduMojo collect school fees online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EduMojo manages fee plans and fee heads, generates receipts and invoices, and creates custom payment links that schools share with parents on WhatsApp, email or SMS."
            }
          },
          {
            "@type": "Question",
            "name": "Does EduMojo manage transport, library and hostel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EduMojo includes Transportation (route planning, live pickup and drop tracking, vehicle records), Library (cataloguing, issue and return, search) and Hostel Management (room allocation, resident records, occupancy)."
            }
          },
          {
            "@type": "Question",
            "name": "Can EduMojo generate transfer certificates and report cards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The Certificates & Exit Process module generates transfer certificates, bonafide certificates and other documents, and the Academic Reports module creates report cards and tracks performance."
            }
          },
          {
            "@type": "Question",
            "name": "What does the AI in EduMojo do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EduMojo's AI assistant creates summaries such as a class attendance report in one click, highlights at-risk students and engagement trends, and runs automated workflows for routine processes."
            }
          },
          {
            "@type": "Question",
            "name": "Does EduMojo have a mobile app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The EduMojo parent and school app gives parents and students mobile access to schedules, homework, attendance, notices and fees, with real-time alerts."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full bg-[#ffffff] text-[#0b1f14] font-sans overflow-x-hidden selection:bg-[#2eca8b]/30 selection:text-[#0b1f14]">

      {/* ==================================================
          1. HERO (short lava gradient, centred, headline words slide up on load)
          ================================================== */}
      <div className="lava text-center">
        <div className="lava-blobs" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
          <div className="blob b5" />
          <div className="blob b6" />
        </div>

        <section className="pt-28 pb-10 sm:pt-32 sm:pb-12">
          <div className="page-container space-y-4">
            
            {/* Kicker */}
            <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
              Features
            </p>

            {/* Exactly ONE <h1>: Headline with "One login." in dark green */}
            <h1 className="font-black text-[#0b1f14] tracking-[-0.035em] text-3xl sm:text-5xl lg:text-6xl leading-[1.12]">
              24+ school ERP modules. <span className="text-[#15803d]">One login.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#3f4b45] max-w-2xl mx-auto leading-relaxed">
              Everything your institution needs to run admissions, academics, communication, finance and operations, with AI built in. Switch on the modules you need today and add more as you grow.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex items-center justify-center">
              <button
                type="button"
                onClick={handleBookDemo}
                className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-md shadow-[#16a34a]/20 hover:shadow-lg hover:shadow-[#16a34a]/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>Book a demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>
      </div>

      {/* ==================================================
          2. MODULE EXPLORER (id="modules")
          ================================================== */}
      <section id="modules" className="py-12 sm:py-16 border-b border-[rgba(11,31,20,0.06)] bg-[#ffffff]">
        <div className="page-container">
          
          {/* Filter tabs pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
            {[
              { id: 'all', label: 'All' },
              { id: 'student', label: 'Student lifecycle' },
              { id: 'ops', label: 'Communication & finance' },
              { id: 'beyond', label: 'Operations' },
              { id: 'extended', label: 'AI & extended' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as ModuleTab)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#15803d] text-white shadow-md shadow-[#15803d]/25'
                      : 'bg-[#f7faf8] text-[#3f4b45] hover:bg-[#eaf4ee] hover:text-[#0b1f14] border border-[rgba(11,31,20,0.08)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-14 sm:space-y-16">
            
            {/* --------------------------------------------------
                GROUP 1: CORE MODULES I (Student lifecycle)
                -------------------------------------------------- */}
            <div 
              data-category="student" 
              className={activeTab !== 'all' && activeTab !== 'student' ? 'hidden' : 'space-y-6'}
            >
              <div className="border-b border-[rgba(11,31,20,0.06)] pb-4">
                <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                  Core modules I
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight mt-1">
                  Manage the entire student lifecycle
                </h2>
                <p className="text-sm sm:text-base text-[#6b7a72] mt-1">
                  Built to manage the entire student lifecycle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1. Pre-Admission & CRM */}
                <GlowCard id="pre-admission-crm" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <UserPlus className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Pre-Admission &amp; CRM
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Capture every enquiry from your website, social media, walk-ins, referrals and ads, and follow up until it becomes an admission.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Enquiry management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Lead tracking by source</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Follow-ups and reminders</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 2. Admissions Management */}
                <GlowCard id="admissions-management" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <FileCheck2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Admissions Management
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Run applications online, collect documents and see the status of every applicant at a glance.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Application workflow</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Document collection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Admission status tracking</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 3. Student Profiles */}
                <GlowCard id="student-profiles" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Student Profiles
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      One complete record for every student: personal details, family, academics, attendance and documents.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Student records</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Family details</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Document management</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 4. Academics & Class Management */}
                <GlowCard id="academics-class-management" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Academics &amp; Class Management
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Set up classes, sections, subjects and teachers once, and run the academic year from one place.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Classes and sections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Subjects and curriculum setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Timetable and faculty assignment</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 5. Daily Academic Updates & E-Learning */}
                <GlowCard id="daily-academic-updates-elearning" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <BookOpenCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Daily Academic Updates &amp; E-Learning
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Share assignments, homework and learning materials with students and parents every day.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Assignments and homework</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Learning materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Academic support and updates</span>
                    </li>
                  </ul>
                </GlowCard>
              </div>
            </div>

            {/* --------------------------------------------------
                GROUP 2: CORE MODULES II (Communication & finance)
                -------------------------------------------------- */}
            <div 
              data-category="ops" 
              className={activeTab !== 'all' && activeTab !== 'ops' ? 'hidden' : 'space-y-6'}
            >
              <div className="border-b border-[rgba(11,31,20,0.06)] pb-4">
                <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                  Core modules II
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight mt-1">
                  Communication, finance and daily operations
                </h2>
                <p className="text-sm sm:text-base text-[#6b7a72] mt-1">
                  Operations, communication and finance in one place.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 6. Communication System */}
                <GlowCard id="communication-system" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <MessageSquareQuote className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Communication System
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Send notices, circulars and announcements, and let teachers and parents message each other.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Notices and circulars</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Announcements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Teacher-parent communication</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 7. Parent / School App */}
                <GlowCard id="parent-school-app" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Parent / School App
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      A mobile app for parents and students with schedules, homework, notices, fees and real-time alerts.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Mobile access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Real-time alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Parent engagement</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 8. Fee Management & Accounting */}
                <GlowCard id="fee-management-accounting" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Receipt className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Fee Management &amp; Accounting
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Set up fee plans and heads, collect fees, and generate receipts and invoices automatically.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Fee plans and heads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Receipts and invoices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Accounting integration</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 9. Custom Payment Links */}
                <GlowCard id="custom-payment-links" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Custom Payment Links
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Create a payment link for any fee or activity and share it on WhatsApp, email or SMS in one click.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Easy collections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Shareable payment links</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Secure digital payments</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 10. Transportation */}
                <GlowCard id="transportation" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Bus className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Transportation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Plan bus routes, track pickups and drops live, and keep vehicle records up to date.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Route planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Pickup and drop tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Vehicle records</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 11. Library */}
                <GlowCard id="library" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <BookMarked className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Library
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Catalogue books, issue and return them, and find any title in seconds.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Cataloguing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Issue and return</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Search and tracking</span>
                    </li>
                  </ul>
                </GlowCard>
              </div>
            </div>

            {/* --------------------------------------------------
                GROUP 3: CORE MODULES III (Operations)
                -------------------------------------------------- */}
            <div 
              data-category="beyond" 
              className={activeTab !== 'all' && activeTab !== 'beyond' ? 'hidden' : 'space-y-6'}
            >
              <div className="border-b border-[rgba(11,31,20,0.06)] pb-4">
                <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                  Core modules III
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight mt-1">
                  Beyond academics: every operational need
                </h2>
                <p className="text-sm sm:text-base text-[#6b7a72] mt-1">
                  Beyond academics: supporting every operational need.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 12. Inventory & Requisition */}
                <GlowCard id="inventory-requisition" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Boxes className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Inventory &amp; Requisition
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Track stock across departments and manage requisitions with approvals.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Inventory tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Requisitions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Approvals</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 13. Health Records / Infirmary */}
                <GlowCard id="health-records-infirmary" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Health Records / Infirmary
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Record infirmary visits and keep student health data in one place.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Medical visits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Student health data</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 14. Timetable */}
                <GlowCard id="timetable" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <CalendarClock className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Timetable
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Build class timetables and allocate teachers for every class and period.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Class timetables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Teacher allocation</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 15. Documents */}
                <GlowCard id="documents" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <FileArchive className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Documents
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Upload and store student documents and certificates in one place.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>File uploads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Certificates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Transfer certificates</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 16. Academic Reports */}
                <GlowCard id="academic-reports" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Academic Reports
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Create report cards and track performance over time.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Report cards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Performance tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Insights</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 17. Sports & Performing Arts (SPA) */}
                <GlowCard id="sports-performing-arts" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Sports &amp; Performing Arts (SPA)
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Plan sports and performing arts activities and track every student's participation.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Sports and performing arts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Participation tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Activity records</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 18. Administration & Setup */}
                <GlowCard id="administration-setup" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Sliders className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Administration &amp; Setup
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Configure EduMojo to match your institution, with masters, permissions and workflows.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Masters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Permissions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Workflows</span>
                    </li>
                  </ul>
                </GlowCard>
              </div>
            </div>

            {/* --------------------------------------------------
                GROUP 4: EXTENDED CAPABILITIES (AI & extended)
                -------------------------------------------------- */}
            <div 
              data-category="extended" 
              className={activeTab !== 'all' && activeTab !== 'extended' ? 'hidden' : 'space-y-6'}
            >
              <div className="border-b border-[rgba(11,31,20,0.06)] pb-4">
                <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                  Extended capabilities
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight mt-1">
                  Extended capabilities to automate, engage and scale
                </h2>
                <p className="text-sm sm:text-base text-[#6b7a72] mt-1">
                  Everything your institution needs to automate, engage and scale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 19. AI & Automation */}
                <GlowCard id="ai-automation" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      AI &amp; Automation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      An AI assistant and smart workflows that automate routine processes and speed up decisions.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Smart workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Process automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Faster decisions</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 20. Analytics & Dashboards */}
                <GlowCard id="analytics-dashboards" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <LayoutDashboard className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Analytics &amp; Dashboards
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Live dashboards and reports across students, staff, attendance and fees.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Visibility</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Insights</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 21. Certificates & Exit Process */}
                <GlowCard id="certificates-exit-process" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Certificates &amp; Exit Process
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Generate transfer, bonafide and other certificates and manage student exits smoothly.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Certificates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>TC generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Document workflows</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 22. Appointment Scheduling */}
                <GlowCard id="appointment-scheduling" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <CalendarCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Appointment Scheduling
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Book and manage meetings between administrators, parents and staff.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Admin meetings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Management meetings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Facilitator meetings</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 23. Alumni Management */}
                <GlowCard id="alumni-management" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Network className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Alumni Management
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Stay connected with former students through an alumni directory and outreach.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Alumni records</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Community network</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Outreach</span>
                    </li>
                  </ul>
                </GlowCard>

                {/* 24. Hostel Management */}
                <GlowCard id="hostel-management" className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                      Hostel Management
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                      Allocate rooms, keep resident records and monitor occupancy.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0b1f14] font-medium pt-2 border-t border-[rgba(11,31,20,0.06)]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Resident records</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Allocation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span>Monitoring</span>
                    </li>
                  </ul>
                </GlowCard>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          3. DEEP DIVES (alternating rows: text + screenshot)
          ================================================== */}
      <section className="py-12 sm:py-16 border-b border-[rgba(11,31,20,0.06)] bg-[#f7faf8] space-y-16 sm:space-y-20">
        
        {/* Deep Dive 1: Admissions & CRM */}
        <div className="page-container grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <ScrollReveal>
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                Admissions &amp; CRM
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
                Turn more enquiries into admissions
              </h2>
              <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed pt-1">
                Every enquiry, from your website, Facebook, walk-ins, referrals or ads, lands in one list with its source, status and next follow-up. Counsellors see who to call today, applications move online with documents attached, so no applicant is forgotten.
              </p>
              <ul className="space-y-2 text-sm text-[#0b1f14] font-medium pt-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Enquiries tracked by source</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Automatic follow-up reminders</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Applications and documents in one place</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal delayMs={100}>
              <div 
                className="w-full max-w-lg rounded-[18px] bg-white border border-[rgba(11,31,20,0.09)] shadow-[0_12px_32px_rgba(11,31,20,0.07)] overflow-hidden"
              >
                {/* Mockup Top Window Bar */}
                <div className="bg-[#f7faf8] px-4 py-3 border-b border-[rgba(11,31,20,0.06)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/70" />
                  </div>
                  <span className="text-[11px] font-mono text-[#6b7a72] font-semibold">Admissions CRM Pipeline</span>
                </div>

                {/* Pipeline visual mockup */}
                <div className="p-5 space-y-3">
                  <div className="box-shot">
                    <img 
                      src="/admissions-crm.png" 
                      width="1568" 
                      height="816" 
                      loading="lazy" 
                      decoding="async"
                      alt="EduMojo enquiries screen listing today's follow-ups with each enquiry's grade, source, status and next follow-up time" 
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#6b7a72] pt-1">
                    <span>Enquiries from website, Facebook, walk-ins and referrals</span>
                    <span className="text-[#15803d] font-bold">Follow-ups in one list</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Deep Dive 2: Fees & payment links (Alternates image left) */}
        <div className="page-container grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <ScrollReveal delayMs={100}>
              <div 
                className="w-full max-w-lg rounded-[18px] bg-white border border-[rgba(11,31,20,0.09)] shadow-[0_12px_32px_rgba(11,31,20,0.07)] overflow-hidden"
              >
                {/* Mockup Top Window Bar */}
                <div className="bg-[#f7faf8] px-4 py-3 border-b border-[rgba(11,31,20,0.06)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/70" />
                  </div>
                  <span className="text-[11px] font-mono text-[#6b7a72] font-semibold">Fee Collection Ledger</span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="box-shot">
                    <img 
                      src="/fees-payment-links.png" 
                      width="1568" 
                      height="816" 
                      loading="lazy" 
                      decoding="async"
                      alt="EduMojo fees screen showing collected, pending and overdue totals and a list of pending fees with Send link buttons for WhatsApp, email and SMS" 
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#6b7a72] pt-1">
                    <span>Receipts and invoices generated automatically</span>
                    <span className="text-[#15803d] font-bold">Payment links on WhatsApp, email, SMS</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <ScrollReveal>
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                Fees &amp; payment links
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
                Collect fees without chasing parents
              </h2>
              <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed pt-1">
                Set up fee plans and heads once. EduMojo generates receipts and invoices automatically, shows what is collected, pending and overdue, and lets you send a payment link for any fee on WhatsApp, email or SMS.
              </p>
              <ul className="space-y-2 text-sm text-[#0b1f14] font-medium pt-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Fee plans and heads</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Automatic receipts and invoices</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Payment links in one click</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Deep Dive 3: AI & analytics */}
        <div className="page-container grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <ScrollReveal>
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                AI &amp; analytics
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
                AI that turns school data into decisions
              </h2>
              <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed pt-1">
                Ask the EduMojo AI assistant for an attendance summary for any class and get it in one click. Dashboards highlight at-risk students, engagement and fee collection trends, so you act early instead of finding out at the end of term.
              </p>
              <ul className="space-y-2 text-sm text-[#0b1f14] font-medium pt-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>AI assistant for summaries</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>At-risk student insights</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Live dashboards and reports</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal delayMs={100}>
              <div 
                className="w-full max-w-lg rounded-[18px] bg-white border border-[rgba(11,31,20,0.09)] shadow-[0_12px_32px_rgba(11,31,20,0.07)] overflow-hidden"
              >
                {/* Mockup Top Window Bar */}
                <div className="bg-[#f7faf8] px-4 py-3 border-b border-[rgba(11,31,20,0.06)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/70" />
                  </div>
                  <span className="text-[11px] font-mono text-[#6b7a72] font-semibold">AI Assistant Intelligence</span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="box-shot">
                    <img 
                      src="/ai-analytics.png" 
                      width="1568" 
                      height="816" 
                      loading="lazy" 
                      decoding="async"
                      alt="EduMojo AI assistant answering an attendance summary for Grade 10-A, with a table of students who need attention" 
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#6b7a72] pt-1">
                    <span>Ask in plain words, get a summary</span>
                    <span className="text-[#15803d] font-bold">At-risk students flagged early</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Deep Dive 4 (Optional Timetable from Home page) */}
        <div className="page-container grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <ScrollReveal delayMs={100}>
              <SelfBuildingTimetable />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <ScrollReveal>
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                Timetable
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
                Timetables that build themselves
              </h2>
              <p className="text-sm sm:text-base text-[#3f4b45] leading-relaxed pt-1">
                EduMojo's scheduling engine understands your school’s unique constraints — teacher availability, room capacity, subject sequences — and builds conflict-free timetables automatically. Changes propagate instantly across all connected calendars.
              </p>
              <ul className="space-y-2 text-sm text-[#0b1f14] font-medium pt-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Zero teacher double-booking guarantee</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Automatic substitute assignment during faculty leave</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>One-click timetable sync to parent &amp; student apps</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

      </section>

      {/* ==================================================
          4. MORE WAYS EDUMOJO HELPS (3 cards + placeholder notice)
          ================================================== */}
      <section className="py-12 sm:py-16 border-b border-[rgba(11,31,20,0.06)] bg-white">
        <div className="page-container space-y-8">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                Product prowess
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
                More than a school ERP
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: School supplies */}
            <ScrollReveal delayMs={0}>
              <GlowCard className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                    <Package className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                    School supplies, delivered home
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed mb-4">
                    EduMojo works with Stock Paper Scissors to deliver school supplies directly to parents' homes.
                  </p>
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Card 2: Audio bots & CRM */}
            <ScrollReveal delayMs={100}>
              <GlowCard className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                    Website audio bots &amp; CRM lead workflows
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                    Engage website visitors, capture leads automatically and send them straight into your admissions CRM with follow-ups assigned.
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs text-[#15803d] font-semibold">
                  <span>Automated 24/7 lead capture</span>
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Card 3: Built for scale */}
            <ScrollReveal delayMs={200}>
              <GlowCard className="group p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-emerald-50 to-[#dcfce7] text-[#15803d] border border-[#2eca8b]/35 shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                    Built for scale
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                    Used by 15+ schools, colleges and institutes across India and Dubai, with more than 20,000 students and teachers on the platform.
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs text-[#15803d] font-semibold">
                  <span>India &amp; UAE presence</span>
                </div>
              </GlowCard>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ==================================================
          5. FAQ (Universal accordion with green '+' toggle)
          ================================================== */}
      <UniversalFaqSection
        id="faq"
        kicker="FAQ"
        title="EduMojo features: common questions"
        items={[
          {
            question: 'What features does EduMojo have?',
            answer:
              'EduMojo has 24+ modules in four groups: the student lifecycle (enquiries, admissions, student profiles, academics, e-learning), communication and finance (notices, parent app, fees, payment links, transport, library), operations (inventory, health records, timetable, documents, report cards, sports and arts, setup) and extended tools (AI, analytics, certificates, appointments, alumni, hostel).',
          },
          {
            question: 'Does EduMojo include admission and enquiry management?',
            answer:
              'Yes. The Pre-Admission & CRM module tracks every enquiry by source with follow-up reminders, and the Admissions module handles online applications, document collection and admission status tracking.',
          },
          {
            question: 'Can EduMojo collect school fees online?',
            answer:
              'Yes. EduMojo manages fee plans and fee heads, generates receipts and invoices, and creates custom payment links that schools share with parents on WhatsApp, email or SMS.',
          },
          {
            question: 'Does EduMojo manage transport, library and hostel?',
            answer:
              'Yes. EduMojo includes Transportation (route planning, live pickup and drop tracking, vehicle records), Library (cataloguing, issue and return, search) and Hostel Management (room allocation, resident records, occupancy).',
          },
          {
            question: 'Can EduMojo generate transfer certificates and report cards?',
            answer:
              'Yes. The Certificates & Exit Process module generates transfer certificates, bonafide certificates and other documents, and the Academic Reports module creates report cards and tracks performance.',
          },
          {
            question: 'What does the AI in EduMojo do?',
            answer:
              "EduMojo's AI assistant creates summaries such as a class attendance report in one click, highlights at-risk students and engagement trends, and runs automated workflows for routine processes.",
          },
          {
            question: 'Does EduMojo have a mobile app?',
            answer:
              'Yes. The EduMojo parent and school app gives parents and students mobile access to schedules, homework, attendance, notices and fees, with real-time alerts.',
          },
        ]}
      />

      {/* ==================================================
          6. CTA BAND (lava gradient block)
          ================================================== */}
      <div className="lava text-center">
        <div className="lava-blobs" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
          <div className="blob b5" />
          <div className="blob b6" />
        </div>

        <section className="py-14 sm:py-16">
          <ScrollReveal>
            <div className="page-container space-y-5 text-center">
              <h2 
                className="font-black text-[#0b1f14] tracking-[-0.035em] text-3xl sm:text-5xl"
              >
                See the modules your school needs, live
              </h2>
              <p className="text-base sm:text-lg text-[#3f4b45] max-w-xl mx-auto">
                Book a demo and we will show you exactly how EduMojo would work at your institution.
              </p>
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={handleBookDemo}
                  className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-[#16a34a]/25 hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Book a demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>

      {/* ==================================================
          STRUCTURED DATA (JSON-LD before closing tag)
          ================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

    </div>
  );
};
