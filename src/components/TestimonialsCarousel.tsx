import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star, 
  CheckCircle2, 
  Pause, 
  Play, 
  MapPin, 
  Building2, 
  Camera, 
  Upload, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { CLIENT_LOGOS, SchoolLogoDisplay } from './ClientLogos';

export interface Testimonial {
  id: string;
  clientId: string;
  name: string;
  role: string;
  school: string;
  location: string;
  impactHighlight: string;
  quote: string;
  avatarColor: string;
  initials: string;
  gender: 'female' | 'male';
  accentTheme: {
    bg: string;
    border: string;
    pill: string;
  };
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sangeeta-rautji',
    clientId: 'dhruv-global',
    name: 'Ms. Sangeeta Rautji',
    role: 'Principal & Academic Director',
    school: 'Dhruv Global School',
    location: 'Pune, Maharashtra',
    impactHighlight: '94% of fees collected within first 10 days via automated WhatsApp links',
    quote:
      'Before EduMojo, recovering our second-term fees took 3 staff members two full months of follow-up phone calls. With automated WhatsApp payment links and instant GST receipts, 94% of our fees were collected within the first 10 days. The level of operational efficiency across finance, academics, and transport has been transformative for Dhruv Global School.',
    avatarColor: 'from-[#0d9488] via-[#115e59] to-[#042f2e]',
    initials: 'SR',
    gender: 'female',
    accentTheme: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      pill: 'text-teal-800 bg-teal-100',
    },
  },
  {
    id: 'vaidehi-moghe',
    clientId: 'blue-ridge',
    name: 'Ms. Vaidehi Moghe',
    role: 'Principal & Head of Institution',
    school: 'Blue Ridge Public School',
    location: 'Pune, Maharashtra',
    impactHighlight: 'Saved teachers nearly 45 minutes every morning on physical attendance ledgers',
    quote:
      'EduMojo has been a game-changer for Blue Ridge Public School. Our teachers used to spend nearly 45 minutes every morning on physical attendance ledgers and circulars. EduMojo gave that time back to classroom preparation. From admissions to their intuitive parent app, every workflow is tailored to our exact campus needs.',
    avatarColor: 'from-[#0284c7] via-[#0369a1] to-[#0c4a6e]',
    initials: 'VM',
    gender: 'female',
    accentTheme: {
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      pill: 'text-sky-800 bg-sky-100',
    },
  },
  {
    id: 'mangesh-takpire',
    clientId: 'arihant-college',
    name: 'Mr. Mangesh Takpire',
    role: 'Principal & Senior Administrator',
    school: 'Arihant College of Arts & Commerce',
    location: 'Pune, Maharashtra',
    impactHighlight: 'Zero manual reconciliation errors across multi-stream collegiate accounts',
    quote:
      'EduMojo simplified our complex collegiate administrative processes, and the results have been outstanding. Our accounts office handles fee reconciliation automatically without manual data entry errors. The hands-on training and responsive technical support have empowered our faculty to focus entirely on students\' academic growth.',
    avatarColor: 'from-[#16a34a] via-[#15803d] to-[#14532d]',
    initials: 'MT',
    gender: 'male',
    accentTheme: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      pill: 'text-emerald-800 bg-emerald-100',
    },
  },
  {
    id: 'pranati-mazumder',
    clientId: 'dhruv-global',
    name: 'Ms. Pranati Mazumder',
    role: 'Campus Headmistress & Principal',
    school: 'Dhruv Global School',
    location: 'Dubai, UAE',
    impactHighlight: 'Automated timetable generator eliminated faculty schedule clashes on day one',
    quote:
      'Managing our campus operations across India and Dubai with EduMojo has been a seamless experience. The automated timetable generation eliminated faculty schedule clashes on day one. Parents love the real-time bus tracking and transparent academic updates on their mobile app.',
    avatarColor: 'from-[#d97706] via-[#b45309] to-[#78350f]',
    initials: 'PM',
    gender: 'female',
    accentTheme: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      pill: 'text-amber-800 bg-amber-100',
    },
  },
  {
    id: 'arun-gaikwad',
    clientId: 'sangamner',
    name: 'Dr. Arun Gaikwad',
    role: 'Principal & Academic Council Chair',
    school: 'Sangamner College',
    location: 'Sangamner, Maharashtra',
    impactHighlight: 'Flawless digital migration of 10,000+ collegiate student records with zero data loss',
    quote:
      'Transitioning 10,000+ collegiate student records to a digital ERP seemed daunting, but EduMojo guided a flawless legacy data migration. Everything from department attendance to examination grading now operates smoothly from one central dashboard with zero data loss.',
    avatarColor: 'from-[#7c3aed] via-[#6d28d9] to-[#4c1d95]',
    initials: 'AG',
    gender: 'male',
    accentTheme: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      pill: 'text-purple-800 bg-purple-100',
    },
  },
];

export const PRINCIPAL_IMAGE_MAP: Record<string, { paths: string[]; keywords: string[] }> = {
  'sangeeta-rautji': {
    paths: [
      '/images/principals/sangeeta-rautji.png',
      '/Ms.Sangeeta Rautji.png',
      '/Ms. Sangeeta Rautji.png',
      '/images/principals/Ms.Sangeeta Rautji.png',
      '/sangeeta-rautji.png',
    ],
    keywords: ['sangeeta', 'rautji'],
  },
  'vaidehi-moghe': {
    paths: [
      '/images/principals/vaidehi-moghe.png',
      '/Ms.Vaidehi Moghe.png',
      '/Ms. Vaidehi Moghe.png',
      '/images/principals/Ms.Vaidehi Moghe.png',
      '/vaidehi-moghe.png',
    ],
    keywords: ['vaidehi', 'moghe'],
  },
  'mangesh-takpire': {
    paths: [
      '/images/principals/mangesh-takpire.png',
      '/Mr.Mangesh Takpire.png',
      '/Mr. Mangesh Takpire.png',
      '/images/principals/Mr.Mangesh Takpire.png',
      '/mangesh-takpire.png',
    ],
    keywords: ['mangesh', 'takpire'],
  },
  'pranati-mazumder': {
    paths: [
      '/images/principals/pranati-mazumder.png',
      '/Ms.Pranati Mazumder.png',
      '/Ms. Pranati Mazumder.png',
      '/images/principals/Ms.Pranati Mazumder.png',
      '/pranati-mazumder.png',
    ],
    keywords: ['pranati', 'mazumder'],
  },
  'arun-gaikwad': {
    paths: [
      '/images/principals/arun-gaikwad.png',
      '/Dr. Arun Gaikwad.png',
      '/Dr.Arun Gaikwad.png',
      '/images/principals/Dr. Arun Gaikwad.png',
      '/arun-gaikwad.png',
    ],
    keywords: ['arun', 'gaikwad'],
  },
};

// Match uploaded file name to principal ID
export const matchPrincipalIdByFileName = (fileName: string): string | null => {
  const lower = fileName.toLowerCase();
  for (const [id, def] of Object.entries(PRINCIPAL_IMAGE_MAP)) {
    if (def.keywords.some((kw) => lower.includes(kw))) {
      return id;
    }
  }
  return null;
};

// Principal Portrait: Renders authentic photo if available, or stylized artwork with photo upload trigger
const PrincipalPortrait: React.FC<{ 
  item: Testimonial; 
  photoUrl?: string; 
  onPhotoUploaded: (id: string, dataUrl: string, fileName?: string) => void;
  sizeClassName?: string;
}> = ({ item, photoUrl, onPhotoUploaded, sizeClassName = 'w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48' }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [photoUrl, item.id]);

  const handleSingleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        onPhotoUploaded(item.id, dataUrl, file.name);
      }
    };
    reader.readAsDataURL(file);
  };

  const hasPhoto = Boolean(photoUrl && !imgError);

  return (
    <div className={`relative ${sizeClassName} rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(11,31,20,0.14)] ring-4 ring-[#2eca8b]/30 ring-offset-4 ring-offset-white shrink-0 group`}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleSingleFile(e.target.files[0]);
          }
        }}
        accept="image/*"
        className="hidden"
      />

      {hasPhoto ? (
        /* Real Authentic Principal Photograph */
        <div className="w-full h-full relative">
          <img
            src={photoUrl}
            alt={item.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

          {/* Verified Leader Check Badge Overlay */}
          <div className="absolute bottom-2.5 right-2.5 flex items-center justify-center w-7 h-7 rounded-full bg-[#15803d] text-white shadow-md ring-2 ring-white z-10 pointer-events-none">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>

          {/* Change Photo Overlay Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 bg-black/50 backdrop-blur-2xs opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-200 cursor-pointer text-xs font-bold gap-1.5 z-20"
            title={`Replace photograph for ${item.name}`}
          >
            <Camera className="w-5 h-5" />
            <span>Change Photo</span>
          </button>
        </div>
      ) : (
        /* Stylized Distinguished Portrait Artwork Fallback */
        <div className="w-full h-full relative">
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.avatarColor}`} />

          <svg viewBox="0 0 200 200" className="w-full h-full relative z-10" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id={`grad-${item.id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.4" />
              </linearGradient>
              <filter id={`glow-${item.id}`} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.3" />
              </filter>
            </defs>

            <circle cx="100" cy="80" r="70" fill={`url(#grad-${item.id})`} opacity="0.15" />

            {item.gender === 'female' ? (
              <g filter={`url(#glow-${item.id})`}>
                <path d="M 20 200 C 35 150 70 140 100 145 C 130 140 165 150 180 200 Z" fill="#ffffff" opacity="0.95" />
                <path d="M 40 200 L 90 145 L 115 145 L 65 200 Z" fill="#2eca8b" opacity="0.8" />
                <path d="M 48 200 L 94 148 L 102 148 L 56 200 Z" fill="#facc15" />
                <path d="M 85 145 L 85 125 C 85 110 115 110 115 125 L 115 145 Z" fill="#d49b6a" />
                <ellipse cx="100" cy="95" rx="36" ry="42" fill="#d49b6a" />
                <circle cx="100" cy="82" r="3" fill="#b91c1c" />
                <path d="M 82 135 Q 100 148 118 135" fill="none" stroke="#f8fafc" strokeWidth="4" strokeLinecap="round" strokeDasharray="1,6" />
                <path d="M 64 95 C 62 50 138 50 136 95 C 130 65 70 65 64 95 Z" fill="#0f172a" />
                <circle cx="100" cy="48" r="16" fill="#0f172a" />
                {item.id === 'sangeeta-rautji' && (
                  <g stroke="#1e293b" strokeWidth="2.5" fill="none">
                    <rect x="74" y="86" width="22" height="15" rx="4" />
                    <rect x="104" y="86" width="22" height="15" rx="4" />
                    <line x1="96" y1="93" x2="104" y2="93" />
                    <line x1="68" y1="91" x2="74" y2="93" />
                    <line x1="126" y1="93" x2="132" y2="91" />
                  </g>
                )}
              </g>
            ) : (
              <g filter={`url(#glow-${item.id})`}>
                <path d="M 15 200 C 30 145 65 135 100 140 C 135 135 170 145 185 200 Z" fill="#ffffff" opacity="0.95" />
                <polygon points="100,140 85,170 100,200 115,170" fill="#2eca8b" opacity="0.9" />
                <polygon points="96,155 100,200 104,155" fill="#facc15" />
                <path d="M 85 140 L 85 120 C 85 105 115 105 115 120 L 115 140 Z" fill="#c68652" />
                <ellipse cx="100" cy="90" rx="36" ry="42" fill="#c68652" />
                <path d="M 64 85 C 64 45 136 45 136 85 C 130 55 70 55 64 85 Z" fill={item.id === 'arun-gaikwad' ? '#94a3b8' : '#0f172a'} />
                <g stroke="#1e293b" strokeWidth="2.5" fill="none">
                  <rect x="73" y="82" width="23" height="16" rx="4" />
                  <rect x="104" y="82" width="23" height="16" rx="4" />
                  <line x1="96" y1="90" x2="104" y2="90" />
                  <line x1="67" y1="88" x2="73" y2="90" />
                  <line x1="127" y1="90" x2="133" y2="88" />
                </g>
              </g>
            )}

            <g transform="translate(142, 142)">
              <circle cx="20" cy="20" r="18" fill="#15803d" stroke="#ffffff" strokeWidth="2.5" />
              <text x="20" y="25" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="'Inter', sans-serif">
                {item.initials}
              </text>
            </g>
          </svg>

          {/* Quick upload button trigger */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 bg-black/40 backdrop-blur-2xs opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-200 cursor-pointer text-xs font-bold gap-1.5 z-20"
            title={`Upload photograph for ${item.name}`}
          >
            <Camera className="w-5 h-5" />
            <span>Upload Photo</span>
          </button>
        </div>
      )}
    </div>
  );
};

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [photos, setPhotos] = useState<Record<string, string>>({});
  const [isDragging, setIsDragging] = useState(false);
  const [uploadToast, setUploadToast] = useState<string | null>(null);
  
  const timerRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const bulkInputRef = useRef<HTMLInputElement>(null);

  const SLIDE_DURATION = 6500; // 6.5s per slide

  // Load photos from localStorage and check default locations
  useEffect(() => {
    const loadedPhotos: Record<string, string> = {};

    TESTIMONIALS.forEach((t) => {
      // 1. Check localStorage
      const saved = localStorage.getItem(`edumojo_principal_${t.id}`);
      if (saved) {
        loadedPhotos[t.id] = saved;
        return;
      }

      // 2. Check public files
      const mapping = PRINCIPAL_IMAGE_MAP[t.id];
      if (mapping) {
        const tryPaths = mapping.paths;
        let found = false;
        tryPaths.forEach((path) => {
          if (found) return;
          const img = new Image();
          img.src = path;
          img.onload = () => {
            if (!found) {
              found = true;
              setPhotos((prev) => ({ ...prev, [t.id]: path }));
            }
          };
        });
      }
    });

    setPhotos((prev) => ({ ...prev, ...loadedPhotos }));
  }, []);

  const savePhoto = (id: string, dataUrl: string, fileName?: string) => {
    localStorage.setItem(`edumojo_principal_${id}`, dataUrl);
    setPhotos((prev) => ({ ...prev, [id]: dataUrl }));

    // Send to dev server endpoint to save to disk if available
    try {
      fetch('/api/upload-principal-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, filename: fileName, dataUrl }),
      }).catch(() => {
        // ignore if server endpoint unavailable
      });
    } catch {
      // ignore
    }
  };

  const handleBulkFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    let matchedCount = 0;
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      const matchedId = matchPrincipalIdByFileName(file.name);
      if (matchedId) {
        matchedCount++;
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target?.result as string;
          if (dataUrl) {
            savePhoto(matchedId, dataUrl, file.name);
          }
        };
        reader.readAsDataURL(file);
      }
    });

    if (matchedCount > 0) {
      setUploadToast(`Applied ${matchedCount} principal photograph${matchedCount > 1 ? 's' : ''}!`);
      setTimeout(() => setUploadToast(null), 4000);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;

    let matchedCount = 0;
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      const matchedId = matchPrincipalIdByFileName(file.name) || TESTIMONIALS[currentIndex].id;
      if (matchedId) {
        matchedCount++;
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target?.result as string;
          if (dataUrl) {
            savePhoto(matchedId, dataUrl, file.name);
          }
        };
        reader.readAsDataURL(file);
      }
    });

    if (matchedCount > 0) {
      setUploadToast(`Applied ${matchedCount} principal photograph${matchedCount > 1 ? 's' : ''}!`);
      setTimeout(() => setUploadToast(null), 4000);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setProgress(0);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setProgress(0);
  };

  const selectTestimonial = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Smooth progress bar update & slide advance
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const intervalStep = 50; // update every 50ms
    const totalSteps = SLIDE_DURATION / intervalStep;
    let currentStep = Math.round((progress / 100) * totalSteps);

    progressIntervalRef.current = window.setInterval(() => {
      currentStep++;
      const currentPct = (currentStep / totalSteps) * 100;
      if (currentPct >= 100) {
        setProgress(100);
        clearInterval(progressIntervalRef.current!);
        nextTestimonial();
      } else {
        setProgress(currentPct);
      }
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPaused, currentIndex]);

  const current = TESTIMONIALS[currentIndex];
  const matchedClient = CLIENT_LOGOS.find((c) => c.id === current.clientId);
  const currentPhoto = photos[current.id];

  const totalPhotosLoaded = Object.keys(photos).length;

  return (
    <div
      className="w-full mx-auto font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={bulkInputRef}
        onChange={handleBulkFiles}
        multiple
        accept="image/*"
        className="hidden"
      />

      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0fdf4] border border-[#2eca8b]/40 text-xs sm:text-sm font-black text-[#15803d] uppercase tracking-[0.16em] mb-3 shadow-xs">
          <Star className="w-3.5 h-3.5 fill-[#16a34a] text-[#16a34a]" />
          <span>Voices of Educational Leadership</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-[#0b1f14]">
          What Our Principals Are Saying
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-[#6b7a72] max-w-2xl mx-auto">
          Trusted by visionary school heads, trustees and collegiate leaders across India and UAE.
        </p>
      </div>

      {/* Main Sleek & Modern Testimonial Card */}
      <div
        className={`relative bg-gradient-to-br from-white via-[#fafdfb] to-[#f0fdf4]/50 rounded-[28px] sm:rounded-[32px] border transition-all duration-300 overflow-hidden shadow-[0_20px_60px_-15px_rgba(11,31,20,0.08)] ${
          isDragging
            ? 'border-[#16a34a] ring-4 ring-[#2eca8b]/30'
            : 'border-[#2eca8b]/30 hover:shadow-[0_25px_70px_-12px_rgba(46,202,139,0.16)]'
        }`}
      >
        {/* Timed Slider Progress Bar (Pauses on Hover) */}
        <div className="w-full h-1.5 bg-[#e2e8f0]/80 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#16a34a] via-[#2eca8b] to-[#15803d] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Floating Ambient Glow in Top Right Corner */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-[#2eca8b]/15 to-[#16a34a]/5 rounded-full blur-3xl" />

        {/* Drag-and-drop indicator overlay */}
        {isDragging && (
          <div className="absolute inset-0 z-40 bg-[#0b1f14]/85 backdrop-blur-xs flex flex-col items-center justify-center text-white border-4 border-dashed border-[#2eca8b] m-3 rounded-2xl">
            <Upload className="w-12 h-12 text-[#2eca8b] animate-bounce mb-3" />
            <p className="font-extrabold text-lg">Drop Principal Photographs Here</p>
            <p className="text-xs text-white/80 mt-1">
              Supports Dr. Arun Gaikwad, Ms. Pranati Mazumder, Mr. Mangesh Takpire, Ms. Vaidehi Moghe, Ms. Sangeeta Rautji
            </p>
          </div>
        )}

        <div className="p-6 sm:p-10 lg:p-12 relative z-10 space-y-8">
          
          {/* Card Top Utility Bar: Rating Stars + Institutional Verification + Upload Action */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[rgba(11,31,20,0.06)]">
            <div className="flex items-center gap-3">
              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0b1f14]">
                5.0 · Verified Institutional Partner
              </span>
            </div>

            {/* Quick Action & Status Controls */}
            <div className="flex items-center gap-2.5">
              {/* Photo Upload Trigger Button */}
              <button
                type="button"
                onClick={() => bulkInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#15803d] bg-[#f0fdf4] hover:bg-[#dcfce7] border border-[#2eca8b]/40 shadow-2xs transition-all cursor-pointer"
                title="Select all 5 downloaded principal photos (Dr. Arun Gaikwad, Ms. Pranati Mazumder, etc.)"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>
                  {totalPhotosLoaded >= 5 ? 'Update Photos' : 'Upload Principal Photos'}
                </span>
                {totalPhotosLoaded > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#16a34a] text-white text-[10px] font-black flex items-center justify-center ml-0.5">
                    {totalPhotosLoaded}
                  </span>
                )}
              </button>

              {/* Slider Pause Status Pill Indicator */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200">
                {isPaused ? (
                  <span className="inline-flex items-center gap-1.5 text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full shadow-2xs">
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Paused on hover</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[#15803d] bg-[#f0fdf4] border border-[#2eca8b]/30 px-3 py-1 rounded-full">
                    <Play className="w-3 h-3 fill-current" />
                    <span>Auto-slider</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Toast Alert */}
          {uploadToast && (
            <div className="p-3 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md animate-in fade-in slide-in-from-top-2 duration-300">
              <Check className="w-4 h-4 shrink-0" />
              <span>{uploadToast}</span>
            </div>
          )}

          {/* Main Content Layout: Photo + Prominent Details + Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Big Principal Photo + Prominent Name & School Name */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
              {/* BIG Principal Photo with Instant Photo Loader */}
              <PrincipalPortrait 
                item={current} 
                photoUrl={currentPhoto}
                onPhotoUploaded={savePhoto}
              />

              {/* Prominent Name & Credentials */}
              <div className="space-y-1.5 w-full">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f14] tracking-tight">
                    {current.name}
                  </h3>
                  <span title="Verified Institutional Leader">
                    <CheckCircle2 className="w-5 h-5 text-[#16a34a] shrink-0" />
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15803d]">
                  {current.role}
                </p>

                {/* PROMINENT School Name */}
                <div className="pt-2 border-t border-[rgba(11,31,20,0.06)]">
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 text-base sm:text-lg font-black text-[#0b1f14] hover:text-[#16a34a] transition-colors">
                    <Building2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                    <span>{current.school}</span>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-1 text-xs text-[#6b7a72] font-semibold mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                    <span>{current.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quote + Impact Metric Highlight + School Logo */}
            <div className="lg:col-span-8 space-y-6">
              {/* Quote Mark & Impact Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] border border-[#2eca8b]/30 flex items-center justify-center text-[#16a34a] shadow-xs">
                  <Quote className="w-6 h-6 fill-current text-[#16a34a]" />
                </div>

                {/* Key Result Impact Pill */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f0fdf4] border border-[#2eca8b]/40 text-xs sm:text-sm font-bold text-[#15803d] shadow-xs">
                  <span className="font-extrabold">Impact:</span>
                  <span className="font-medium text-[#0b1f14]">{current.impactHighlight}</span>
                </div>
              </div>

              {/* Editorial Quote Body */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#1e2922] font-serif leading-relaxed italic select-text">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* School Logo & Institutional Accreditation */}
              <div className="pt-6 border-t border-[rgba(11,31,20,0.06)] flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b7a72]">
                    Official Campus Partner
                  </span>
                  <p className="text-xs font-bold text-[#0b1f14]">
                    Powered by EduMojo ERP since 2024
                  </p>
                </div>

                {/* Institutional School Logo - Completely Transparent Without Background Card */}
                {matchedClient && (
                  <div className="bg-transparent border-0 shadow-none flex items-center justify-center p-0">
                    <SchoolLogoDisplay client={matchedClient} />
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Bottom Interactive Navigation & Principal Thumbnails Bar */}
          <div className="pt-6 border-t border-[rgba(11,31,20,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Quick-Select Principal Thumbnails with Photo Preview */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-1 max-w-full">
              <span className="text-xs font-bold text-[#6b7a72] mr-1 hidden md:inline">
                Principals:
              </span>
              {TESTIMONIALS.map((t, idx) => {
                const thumbPhoto = photos[t.id];
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => selectTestimonial(idx)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer ${
                      idx === currentIndex
                        ? 'bg-[#15803d] text-white border-[#15803d] shadow-sm scale-105'
                        : 'bg-white hover:bg-slate-50 text-[#3f4b45] border-[rgba(11,31,20,0.09)]'
                    }`}
                    aria-label={`Select testimonial from ${t.name}`}
                  >
                    {thumbPhoto ? (
                      <span className="w-5 h-5 rounded-full overflow-hidden shrink-0 ring-1 ring-white/70">
                        <img src={thumbPhoto} alt="" className="w-full h-full object-cover object-top" />
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black">
                        {t.initials}
                      </span>
                    )}
                    <span className="whitespace-nowrap">{t.name.split(' ')[1] || t.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Buttons & Slide Indicators */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Slide Counter */}
              <span className="text-xs font-mono font-bold text-[#6b7a72]">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>

              {/* Prev Button */}
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#f0fdf4] text-[#0b1f14] hover:text-[#16a34a] border border-[rgba(11,31,20,0.09)] shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
                aria-label="Previous principal testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#f0fdf4] text-[#0b1f14] hover:text-[#16a34a] border border-[rgba(11,31,20,0.09)] shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
                aria-label="Next principal testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
