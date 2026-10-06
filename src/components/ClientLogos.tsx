import React, { useState, useEffect } from 'react';

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  city: string;
  imageFileName: string;
  renderLogo: (mono?: boolean) => React.ReactNode;
}

// Map uploaded file names to client IDs (ONLY the 6 given logos)
export const matchSchoolLogoId = (fileName: string): string | null => {
  const lower = fileName.toLowerCase();
  if (lower.includes('blue ridge') || lower.includes('blueridge')) return 'blue-ridge';
  if (lower.includes('2 logo') || lower.includes('2logo') || (lower.includes('2') && lower.includes('logo'))) return 'two-sigma';
  if (lower.includes('arihant')) return 'arihant-college';
  if (lower.includes('dhruv pre') || lower.includes('preschool') || lower.includes('pre school')) return 'dhruv-preschool';
  if (lower.includes('sps') || lower.includes('stock') || lower.includes('scissors')) return 'sps';
  if (lower.includes('dhruv')) return 'dhruv-global';
  return null;
};

// ONLY the 6 given school logos provided by the user
export const CLIENT_LOGOS: ClientItem[] = [
  // 1. DHRUV GLOBAL SCHOOL
  {
    id: 'dhruv-global',
    name: 'Dhruv Global School',
    category: 'CBSE & International School',
    city: 'Pune & Dubai',
    imageFileName: 'Dhruv Logo.png',
    renderLogo: () => (
      <div className="flex items-center select-none py-1 bg-transparent">
        <img
          src="/Dhruv Logo.png"
          alt="Dhruv Global School"
          className="h-16 sm:h-20 max-w-[340px] w-auto object-contain mix-blend-multiply bg-transparent"
        />
      </div>
    ),
  },

  // 2. BLUE RIDGE PUBLIC SCHOOL
  {
    id: 'blue-ridge',
    name: 'Blue Ridge Public School',
    category: 'ICSE & High School',
    city: 'Hinjawadi, Pune',
    imageFileName: 'Blue Ridge Logo.png',
    renderLogo: () => (
      <div className="flex items-center select-none py-1 bg-transparent">
        <img
          src="/Blue Ridge Logo.png"
          alt="Blue Ridge Public School"
          className="h-16 sm:h-20 max-w-[140px] w-auto object-contain mix-blend-multiply bg-transparent"
        />
      </div>
    ),
  },

  // 3. ARIHANT COLLEGE
  {
    id: 'arihant-college',
    name: 'Arihant College',
    category: 'Arts & Commerce College',
    city: 'Pune',
    imageFileName: 'Arihant Logo.png',
    renderLogo: () => (
      <div className="flex items-center select-none py-1 bg-transparent">
        <img
          src="/Arihant Logo.png"
          alt="Arihant College"
          className="h-16 sm:h-20 max-w-[160px] w-auto object-contain mix-blend-multiply bg-transparent"
        />
      </div>
    ),
  },

  // 4. DHRUV PRE-SCHOOL
  {
    id: 'dhruv-preschool',
    name: 'Dhruv Pre-School',
    category: 'Early Childhood Education',
    city: 'Pune',
    imageFileName: 'Dhruv pre school Logo.png',
    renderLogo: () => (
      <div className="flex items-center select-none py-1 bg-transparent">
        <img
          src="/Dhruv pre school Logo.png"
          alt="Dhruv Pre-School"
          className="h-16 sm:h-20 max-w-[280px] w-auto object-contain mix-blend-multiply bg-transparent"
        />
      </div>
    ),
  },

  // 5. STOCK PAPER SCISSORS
  {
    id: 'sps',
    name: 'Stock Paper Scissors',
    category: 'Creative Academies',
    city: 'India',
    imageFileName: 'SPS Logo.png',
    renderLogo: () => (
      <div className="flex items-center select-none py-1 bg-transparent">
        <img
          src="/SPS Logo.png"
          alt="Stock Paper Scissors"
          className="h-16 sm:h-20 max-w-[240px] w-auto object-contain mix-blend-multiply bg-transparent"
        />
      </div>
    ),
  },

  // 6. 2SIGMA EDUCATION
  {
    id: 'two-sigma',
    name: '2Sigma Education',
    category: 'Learning Centers',
    city: 'Maharashtra',
    imageFileName: '2 Logo.png',
    renderLogo: () => (
      <div className="flex items-center select-none py-1 bg-transparent">
        <img
          src="/2 Logo.png"
          alt="2Sigma Education"
          className="h-16 sm:h-20 max-w-[140px] w-auto object-contain mix-blend-multiply bg-transparent"
        />
      </div>
    ),
  },
];

// Helper to provide proportional sizing per school logo
const getLogoSizeClasses = (id: string): string => {
  switch (id) {
    case 'dhruv-global':
      return 'h-16 sm:h-20 max-w-[340px]';
    case 'dhruv-preschool':
      return 'h-16 sm:h-20 max-w-[280px]';
    case 'sps':
      return 'h-16 sm:h-20 max-w-[240px]';
    case 'blue-ridge':
      return 'h-16 sm:h-20 max-w-[140px]';
    case 'two-sigma':
      return 'h-16 sm:h-20 max-w-[140px]';
    case 'arihant-college':
      return 'h-16 sm:h-20 max-w-[160px]';
    default:
      return 'h-16 sm:h-20 max-w-[260px]';
  }
};

// Unified Logo Display: renders the exact given logo image directly
export const SchoolLogoDisplay: React.FC<{
  client: ClientItem;
  className?: string;
}> = ({ client, className = '' }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(`/${client.imageFileName}`);

  useEffect(() => {
    // 1. Check localStorage if user uploaded an updated version
    const saved = localStorage.getItem(`edumojo_school_logo_${client.id}`);
    if (saved) {
      setPhotoSrc(saved);
      return;
    }

    // 2. Default to the exact given image file
    const candidatePaths = [
      `/${client.imageFileName}`,
      `/images/schools/${client.id}.png`,
      `/images/schools/${client.imageFileName}`,
    ];

    let resolved = false;
    candidatePaths.forEach((path) => {
      if (resolved) return;
      const img = new Image();
      img.src = path;
      img.onload = () => {
        if (!resolved) {
          resolved = true;
          setPhotoSrc(path);
        }
      };
    });
  }, [client.id, client.imageFileName]);

  const sizeClasses = getLogoSizeClasses(client.id);

  return (
    <div className={`flex items-center justify-center select-none py-1 bg-transparent ${className}`}>
      <img
        src={photoSrc}
        alt={client.name}
        className={`${sizeClasses} w-auto object-contain transition-transform duration-300 hover:scale-105 mix-blend-multiply bg-transparent`}
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback to /images/schools path if root path fails
          const target = e.currentTarget;
          if (!target.src.includes('/images/schools/')) {
            target.src = `/images/schools/${client.imageFileName}`;
          }
        }}
      />
    </div>
  );
};
