import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Calendar, 
  Sparkles,
  Lock
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlowCard } from '../components/GlowCard';
import { PageRoute } from '../components/Navbar';

interface ContactUsPageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestCallBack?: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate }) => {
  // Form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [institutionType, setInstitutionType] = useState('School');
  const [city, setCity] = useState('');
  const [studentCount, setStudentCount] = useState('300–1,000');
  const [modulesInterested, setModulesInterested] = useState<string[]>([
    'Admissions & CRM',
    'Fees & payments',
  ]);
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Head SEO/AEO Tags & Canonical URL
  useEffect(() => {
    document.title = 'Contact EduMojo – Book a School ERP Demo';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Book a demo of EduMojo, the AI-powered school ERP. Call +91 96840 33959 or +91 77989 69669, or send us your details and we will call you back.'
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('link', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.edu-mojo.com/contact-us');

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
    setMeta('og:title', 'Contact EduMojo – Book a Demo');
    setMeta('og:description', 'Book a demo of EduMojo, the AI-powered school ERP. Call +91 96840 33959 or +91 77989 69669, or send us your details and we will call you back.');
    setMeta('og:url', 'https://www.edu-mojo.com/contact-us');
    setMeta('og:image', 'https://www.edu-mojo.com/og-image.png');

    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');
  }, []);

  const handleCheckboxChange = (val: string) => {
    if (modulesInterested.includes(val)) {
      setModulesInterested(modulesInterested.filter((m) => m !== val));
    } else {
      setModulesInterested([...modulesInterested, val]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  // Structured Data JSON-LD Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.edu-mojo.com/contact-us#page",
        "url": "https://www.edu-mojo.com/contact-us",
        "name": "Contact EduMojo – Book a Demo",
        "inLanguage": "en-IN",
        "about": {
          "@id": "https://www.edu-mojo.com/#org"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.edu-mojo.com/#org",
        "name": "EduMojo",
        "url": "https://www.edu-mojo.com/",
        "email": "contact@edu-mojo.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9684033959",
            "contactType": "sales",
            "areaServed": [
              "IN",
              "AE"
            ],
            "availableLanguage": [
              "en"
            ]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-7798969669",
            "contactType": "customer support",
            "areaServed": [
              "IN",
              "AE"
            ],
            "availableLanguage": [
              "en"
            ]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
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
            "name": "Contact Us",
            "item": "https://www.edu-mojo.com/contact-us"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I book an EduMojo demo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fill in the form on this page or call +91 96840 33959 or +91 77989 69669. Our team will call you back to understand your institution and schedule a demo of the modules you need."
            }
          },
          {
            "@type": "Question",
            "name": "Who should join the demo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend the principal or director, an administrator, and someone from accounts or the fee office, so every team sees the modules that matter to them."
            }
          },
          {
            "@type": "Question",
            "name": "Does EduMojo work with schools in Dubai and the UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EduMojo is used by schools, colleges and institutes in India and in Dubai, UAE, and our team supports institutions in both countries."
            }
          },
          {
            "@type": "Question",
            "name": "Do you help us set up EduMojo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Implementation guidance is part of every rollout. Our team helps you set up your institution in EduMojo and trains your staff before you go live."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full bg-[#ffffff] text-[#0b1f14] font-sans overflow-x-hidden selection:bg-[#2eca8b]/30 selection:text-[#0b1f14]">
      
      {/* ==================================================
          1. HERO (short lava gradient, centred)
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
              Contact us
            </p>

            {/* Breadcrumb: Home › Contact Us */}
            <nav aria-label="Breadcrumb" className="inline-flex items-center text-xs text-[#6b7a72] font-medium">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="hover:text-[#16a34a] transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="mx-2 text-[#6b7a72]/60">›</span>
              <span className="text-[#16a34a] font-semibold">Contact Us</span>
            </nav>

            {/* Exactly ONE <h1>: "talk to the EduMojo team" in dark green */}
            <h1 className="font-black text-[#0b1f14] tracking-[-0.035em] text-3xl sm:text-5xl lg:text-6xl leading-[1.12]">
              Book a demo or <span className="text-[#15803d]">talk to the EduMojo team</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#3f4b45] max-w-2xl mx-auto leading-relaxed">
              Tell us about your institution and we will call you back to show you how EduMojo can simplify admissions, academics, fees and communication at your school.
            </p>

          </div>
        </section>
      </div>

      {/* ==================================================
          2. FORM + CONTACT DETAILS (Form left 60%, cards right 40%)
          ================================================== */}
      <section 
        className="py-12 sm:py-16 border-b border-[rgba(11,31,20,0.06)] bg-white"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* --------------------------------------------------
                LEFT COLUMN (60%): Form (id="form")
                -------------------------------------------------- */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div 
                  id="form" 
                  className="bg-[#f7faf8] p-6 sm:p-8 rounded-[18px] border border-[rgba(11,31,20,0.09)] shadow-[0_10px_30px_rgba(11,31,20,0.04)]"
                >
                  {!isSubmitted ? (
                    <>
                      <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight">
                          Book a demo
                        </h2>
                        <p className="text-sm text-[#6b7a72] mt-1">
                          Fill in a few details. It takes less than a minute.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        
                        {/* Full Name * */}
                        <div>
                          <label className="block text-xs sm:text-sm font-bold text-[#0b1f14] mb-1.5">
                            Full name <span className="text-[#15803d]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Dr. Ramesh Kulkarni"
                            className="w-full px-4 py-3 rounded-[12px] bg-white border border-[rgba(11,31,20,0.12)] text-[#0b1f14] text-sm placeholder-[#6b7a72]/60 focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all"
                          />
                        </div>

                        {/* Phone / WhatsApp * & Official Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-[#0b1f14] mb-1.5">
                              Phone / WhatsApp <span className="text-[#15803d]">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+91 98xxx xxxxx"
                              className="w-full px-4 py-3 rounded-[12px] bg-white border border-[rgba(11,31,20,0.12)] text-[#0b1f14] text-sm placeholder-[#6b7a72]/60 focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-[#0b1f14] mb-1.5">
                              Official email
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="principal@yourschool.edu"
                              className="w-full px-4 py-3 rounded-[12px] bg-white border border-[rgba(11,31,20,0.12)] text-[#0b1f14] text-sm placeholder-[#6b7a72]/60 focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all"
                            />
                          </div>
                        </div>

                        {/* Institution Name * & Institution Type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-[#0b1f14] mb-1.5">
                              Institution name <span className="text-[#15803d]">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={institutionName}
                              onChange={(e) => setInstitutionName(e.target.value)}
                              placeholder="Your school, college or institute"
                              className="w-full px-4 py-3 rounded-[12px] bg-white border border-[rgba(11,31,20,0.12)] text-[#0b1f14] text-sm placeholder-[#6b7a72]/60 focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-[#0b1f14] mb-1.5">
                              Institution type
                            </label>
                            <select
                              value={institutionType}
                              onChange={(e) => setInstitutionType(e.target.value)}
                              className="w-full px-4 py-3 rounded-[12px] bg-white border border-[rgba(11,31,20,0.12)] text-[#0b1f14] text-sm focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all"
                            >
                              <option value="School">School</option>
                              <option value="Preschool">Preschool</option>
                              <option value="College">College</option>
                              <option value="Coaching / institute">Coaching / institute</option>
                              <option value="Group of institutions">Group of institutions</option>
                            </select>
                          </div>
                        </div>

                        {/* City & Number of Students */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-[#0b1f14] mb-1.5">
                              City
                            </label>
                            <input
                              type="text"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="e.g. Pune, Dubai"
                              className="w-full px-4 py-3 rounded-[12px] bg-white border border-[rgba(11,31,20,0.12)] text-[#0b1f14] text-sm placeholder-[#6b7a72]/60 focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-[#0b1f14] mb-1.5">
                              Number of students
                            </label>
                            <select
                              value={studentCount}
                              onChange={(e) => setStudentCount(e.target.value)}
                              className="w-full px-4 py-3 rounded-[12px] bg-white border border-[rgba(11,31,20,0.12)] text-[#0b1f14] text-sm focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all"
                            >
                              <option value="Under 300">Under 300</option>
                              <option value="300–1,000">300–1,000</option>
                              <option value="1,000–3,000">1,000–3,000</option>
                              <option value="3,000+">3,000+</option>
                            </select>
                          </div>
                        </div>

                        {/* What would you like to see? (Checkboxes) */}
                        <div>
                          <label className="block text-xs sm:text-sm font-bold text-[#0b1f14] mb-2">
                            What would you like to see?
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                            {[
                              'Admissions & CRM',
                              'Fees & payments',
                              'Academics & timetable',
                              'Parent app',
                              'Transport',
                              'AI & analytics',
                            ].map((mod) => (
                              <label 
                                key={mod}
                                className="flex items-center gap-2.5 p-2.5 rounded-[10px] bg-white border border-[rgba(11,31,20,0.08)] cursor-pointer hover:border-[#16a34a]/40 transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={modulesInterested.includes(mod)}
                                  onChange={() => handleCheckboxChange(mod)}
                                  className="w-4 h-4 rounded text-[#16a34a] focus:ring-[#16a34a] accent-[#16a34a]"
                                />
                                <span className="font-medium text-[#0b1f14]">{mod}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-xs sm:text-sm font-bold text-[#0b1f14] mb-1.5">
                            Message
                          </label>
                          <textarea
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Anything else we should know?"
                            className="w-full px-4 py-3 rounded-[12px] bg-white border border-[rgba(11,31,20,0.12)] text-[#0b1f14] text-sm placeholder-[#6b7a72]/60 focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-base py-3.5 px-6 rounded-full transition-all duration-200 cursor-pointer shadow-md shadow-[#16a34a]/20 hover:shadow-lg hover:shadow-[#16a34a]/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                          >
                            <span>{isSubmitting ? 'Sending Request...' : 'Book my demo →'}</span>
                          </button>
                        </div>

                        {/* Small notice under button */}
                        <div className="pt-2 text-center text-xs text-[#6b7a72]">
                          <span>We use your details strictly to schedule your demo. Your privacy is protected.</span>
                        </div>

                      </form>
                    </>
                  ) : (
                    /* Success Message */
                    <div className="py-12 px-4 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mx-auto shadow-md shadow-[#16a34a]/10">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight">
                        Thank you! We have received your request.
                      </h3>
                      <p className="text-sm sm:text-base text-[#3f4b45] max-w-md mx-auto leading-relaxed">
                        Our team will call you back soon to schedule your personalized demo.
                      </p>
                      <div className="p-3 bg-white rounded-xl border border-[#16a34a]/30 max-w-md mx-auto">
                        <p className="text-xs text-[#15803d] font-semibold">
                          We typically reach out within one business day.
                        </p>
                      </div>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() => setIsSubmitted(false)}
                          className="text-xs font-bold text-[#16a34a] hover:underline cursor-pointer"
                        >
                          ← Submit another enquiry
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* --------------------------------------------------
                RIGHT COLUMN (40%): Contact Cards
                -------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              
              {/* Card 1: Call Us */}
              <ScrollReveal delayMs={0}>
                <GlowCard className="p-6">
                  <div className="w-12 h-12 rounded-[14px] bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-4 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                    Call us
                  </h3>
                  <div className="space-y-1.5 text-sm sm:text-base font-bold text-[#0b1f14]">
                    <div>
                      <a href="tel:+919684033959" className="hover:text-[#16a34a] transition-colors">
                        +91 96840 33959
                      </a>
                    </div>
                    <div>
                      <a href="tel:+917798969669" className="hover:text-[#16a34a] transition-colors">
                        +91 77989 69669
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[rgba(11,31,20,0.06)]">
                    <p className="text-xs text-[#6b7a72] font-medium">
                      Monday to Saturday, 9:30 AM – 6:30 PM IST
                    </p>
                  </div>
                </GlowCard>
              </ScrollReveal>

              {/* Card 2: Email Us */}
              <ScrollReveal delayMs={80}>
                <GlowCard className="p-6">
                  <div className="w-12 h-12 rounded-[14px] bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-4 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                    Email us
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-[#0b1f14]">
                    <a href="mailto:contact@edu-mojo.com" className="hover:text-[#16a34a] transition-colors">
                      contact@edu-mojo.com
                    </a>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[rgba(11,31,20,0.06)]">
                    <p className="text-xs text-[#6b7a72] font-medium">
                      We respond within 4 business hours
                    </p>
                  </div>
                </GlowCard>
              </ScrollReveal>

              {/* Card 3: Visit Us */}
              <ScrollReveal delayMs={160}>
                <GlowCard className="p-6">
                  <div className="w-12 h-12 rounded-[14px] bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-4 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                    Visit us
                  </h3>
                  <p className="text-sm sm:text-base text-[#3f4b45] font-semibold">
                    Webmagiks, Pune, Maharashtra, India
                  </p>
                  <div className="mt-3 pt-3 border-t border-[rgba(11,31,20,0.06)]">
                    <p className="text-xs text-[#6b7a72] font-medium">
                      Serving schools across Maharashtra &amp; the UAE
                    </p>
                  </div>
                </GlowCard>
              </ScrollReveal>

              {/* Card 4: Follow EduMojo */}
              <ScrollReveal delayMs={240}>
                <GlowCard className="p-6">
                  <div className="w-12 h-12 rounded-[14px] bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-4 shrink-0">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#0b1f14] mb-2 tracking-tight">
                    Follow EduMojo
                  </h3>
                  <div className="flex items-center gap-3 pt-1">
                    {/* Facebook */}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-10 h-10 rounded-full bg-[#f7faf8] hover:bg-[#16a34a] text-[#0b1f14] hover:text-white flex items-center justify-center transition-all duration-200 border border-[rgba(11,31,20,0.08)] cursor-pointer"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-10 h-10 rounded-full bg-[#f7faf8] hover:bg-[#16a34a] text-[#0b1f14] hover:text-white flex items-center justify-center transition-all duration-200 border border-[rgba(11,31,20,0.08)] cursor-pointer"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-10 h-10 rounded-full bg-[#f7faf8] hover:bg-[#16a34a] text-[#0b1f14] hover:text-white flex items-center justify-center transition-all duration-200 border border-[rgba(11,31,20,0.08)] cursor-pointer"
                      aria-label="YouTube"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com/edumojo_"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-[#f7faf8] hover:bg-[#16a34a] text-[#0b1f14] hover:text-white flex items-center justify-center transition-all duration-200 border border-[rgba(11,31,20,0.08)] cursor-pointer"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </GlowCard>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. WHAT HAPPENS NEXT (3 steps numbered 1–3)
          ================================================== */}
      <section className="py-12 sm:py-16 border-b border-[rgba(11,31,20,0.06)] bg-[#f7faf8]">
        <div className="page-container space-y-8">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                What happens next
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
                From your first call to go-live
              </h2>
            </div>
          </ScrollReveal>

          {/* 3 Steps in sequence with connecting line */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div 
              className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[1.5px] bg-[#16a34a]/25 z-0" 
              aria-hidden="true"
            />

            {/* Step 1 */}
            <ScrollReveal delayMs={0}>
              <div className="relative z-10 bg-white rounded-[18px] p-6 border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white font-mono font-black text-lg flex items-center justify-center mb-4 shadow-md shadow-[#16a34a]/20">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0b1f14] mb-2 tracking-tight">
                  We call you back
                </h3>
                <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                  We learn about your institution, your current systems and what you want to improve.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delayMs={100}>
              <div className="relative z-10 bg-white rounded-[18px] p-6 border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white font-mono font-black text-lg flex items-center justify-center mb-4 shadow-md shadow-[#16a34a]/20">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0b1f14] mb-2 tracking-tight">
                  Your personalised demo
                </h3>
                <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                  We show you the EduMojo modules that matter to you, using examples from your day-to-day work.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delayMs={200}>
              <div className="relative z-10 bg-white rounded-[18px] p-6 border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white font-mono font-black text-lg flex items-center justify-center mb-4 shadow-md shadow-[#16a34a]/20">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0b1f14] mb-2 tracking-tight">
                  Setup, training and support
                </h3>
                <p className="text-xs sm:text-sm text-[#3f4b45] leading-relaxed">
                  If you go ahead, we guide implementation, train your team and stay with you after launch.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ==================================================
          4. FAQ (<details><summary> with round light-green "+" rotating to "×")
          ================================================== */}
      <section className="py-12 sm:py-16 bg-white border-b border-[rgba(11,31,20,0.06)]">
        <div className="page-container space-y-6">
          
          <ScrollReveal>
            <div className="text-center mb-6 sm:mb-8">
              <p className="uppercase text-[#15803d] font-bold tracking-[0.18em] text-xs sm:text-sm">
                FAQ
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1f14] tracking-tight mt-1">
                Before you book a demo
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3.5">
            
            {/* Q1 */}
            <ScrollReveal delayMs={0}>
              <details className="group rounded-[18px] bg-white border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] overflow-hidden transition-all duration-200">
                <summary className="list-none flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none font-bold text-base sm:text-lg text-[#0b1f14] hover:text-[#16a34a] transition-colors [&::-webkit-details-marker]:hidden">
                  <span>How do I book an EduMojo demo?</span>
                  <span className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center shrink-0 ml-4 font-bold text-lg transition-transform duration-200 group-open:rotate-45 group-open:bg-[#16a34a] group-open:text-white">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#3f4b45] leading-relaxed border-t border-[rgba(11,31,20,0.06)] pt-4">
                  Fill in the form on this page or call +91 96840 33959 or +91 77989 69669. Our team will call you back to understand your institution and schedule a demo of the modules you need.
                </div>
              </details>
            </ScrollReveal>

            {/* Q2 */}
            <ScrollReveal delayMs={50}>
              <details className="group rounded-[18px] bg-white border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] overflow-hidden transition-all duration-200">
                <summary className="list-none flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none font-bold text-base sm:text-lg text-[#0b1f14] hover:text-[#16a34a] transition-colors [&::-webkit-details-marker]:hidden">
                  <span>Who should join the demo?</span>
                  <span className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center shrink-0 ml-4 font-bold text-lg transition-transform duration-200 group-open:rotate-45 group-open:bg-[#16a34a] group-open:text-white">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#3f4b45] leading-relaxed border-t border-[rgba(11,31,20,0.06)] pt-4">
                  We recommend the principal or director, an administrator, and someone from accounts or the fee office, so every team sees the modules that matter to them.
                </div>
              </details>
            </ScrollReveal>

            {/* Q3 */}
            <ScrollReveal delayMs={100}>
              <details className="group rounded-[18px] bg-white border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] overflow-hidden transition-all duration-200">
                <summary className="list-none flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none font-bold text-base sm:text-lg text-[#0b1f14] hover:text-[#16a34a] transition-colors [&::-webkit-details-marker]:hidden">
                  <span>Does EduMojo work with schools in Dubai and the UAE?</span>
                  <span className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center shrink-0 ml-4 font-bold text-lg transition-transform duration-200 group-open:rotate-45 group-open:bg-[#16a34a] group-open:text-white">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#3f4b45] leading-relaxed border-t border-[rgba(11,31,20,0.06)] pt-4">
                  Yes. EduMojo is used by schools, colleges and institutes in India and in Dubai, UAE, and our team supports institutions in both countries.
                </div>
              </details>
            </ScrollReveal>

            {/* Q4 */}
            <ScrollReveal delayMs={150}>
              <details className="group rounded-[18px] bg-white border border-[rgba(11,31,20,0.09)] shadow-[0_4px_16px_rgba(11,31,20,0.03)] overflow-hidden transition-all duration-200">
                <summary className="list-none flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none font-bold text-base sm:text-lg text-[#0b1f14] hover:text-[#16a34a] transition-colors [&::-webkit-details-marker]:hidden">
                  <span>Do you help us set up EduMojo?</span>
                  <span className="w-8 h-8 rounded-full bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center shrink-0 ml-4 font-bold text-lg transition-transform duration-200 group-open:rotate-45 group-open:bg-[#16a34a] group-open:text-white">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#3f4b45] leading-relaxed border-t border-[rgba(11,31,20,0.06)] pt-4">
                  Yes. Implementation guidance is part of every rollout. Our team helps you set up your institution in EduMojo and trains your staff before you go live.
                </div>
              </details>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ==================================================
          STRUCTURED DATA (JSON-LD before closing root)
          ================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

    </div>
  );
};
