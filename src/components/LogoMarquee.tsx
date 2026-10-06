import React, { useRef, useState } from 'react';
import { CLIENT_LOGOS, SchoolLogoDisplay, matchSchoolLogoId } from './ClientLogos';
import { Camera, Check } from 'lucide-react';

interface LogoMarqueeProps {
  className?: string;
  title?: string;
  subtitle?: string;
  showText?: boolean;
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  className = '',
  title = 'TRUSTED BY SCHOOLS, COLLEGES & INSTITUTES IN INDIA & DUBAI',
  subtitle = '15+ institutions rely on EduMojo daily for academics, fees, admissions and operations',
  showText = true,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleBulkUpload = (files: FileList | File[]) => {
    let count = 0;
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      const matchedId = matchSchoolLogoId(file.name);
      if (matchedId) {
        count++;
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target?.result as string;
          if (dataUrl) {
            localStorage.setItem(`edumojo_school_logo_${matchedId}`, dataUrl);
            setRefreshKey((prev) => prev + 1);

            // POST to dev server
            try {
              fetch('/api/upload-school-logo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: matchedId, filename: file.name, dataUrl }),
              }).catch(() => {});
            } catch {}
          }
        };
        reader.readAsDataURL(file);
      }
    });

    if (count > 0) {
      setToastMessage(`Updated ${count} school logo${count > 1 ? 's' : ''}!`);
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  return (
    <div 
      className={`py-6 sm:py-8 border-y border-[rgba(11,31,20,0.06)] bg-[#fbfdfc] overflow-hidden relative ${className}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        if (e.dataTransfer.files) {
          handleBulkUpload(e.dataTransfer.files);
        }
      }}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => {
          if (e.target.files) handleBulkUpload(e.target.files);
        }}
        multiple
        accept="image/*"
        className="hidden"
      />

      {/* Caption above: Header & subtext */}
      {showText && (
        <div className="page-container mb-3.5 sm:mb-4 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <p className="uppercase text-[#15803d] font-bold tracking-[0.16em] text-[11px] sm:text-xs">
              {title}
            </p>
          </div>
          {subtitle && (
            <p className="text-xs text-[#6b7a72] mt-0.5 max-w-xl mx-auto leading-normal">
              {subtitle}
            </p>
          )}

          {/* Quick upload trigger button */}
          <div className="mt-2 flex items-center justify-center">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold text-[#15803d] bg-[#f0fdf4] hover:bg-[#dcfce7] border border-[#2eca8b]/30 shadow-2xs transition-all cursor-pointer"
              title="Upload official school logo image files"
            >
              <Camera className="w-2.5 h-2.5" />
              <span>Update School Logos</span>
            </button>
          </div>
        </div>
      )}

      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xl animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-3.5 h-3.5 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* COMPACT LOGO MARQUEE PANEL - TRANSPARENT LOGOS */}
      <div className="marquee w-full py-2.5 sm:py-3" key={refreshKey}>
        <div className="marquee-track items-center gap-12 sm:gap-16">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
            <div
              key={`school-logo-${client.id}-${index}`}
              className="marquee-item shrink-0 px-4 sm:px-6 py-1 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center bg-transparent"
              title={`${client.name} · ${client.category} (${client.city})`}
            >
              <SchoolLogoDisplay client={client} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
