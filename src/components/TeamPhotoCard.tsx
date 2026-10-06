import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Check, AlertCircle, RefreshCw, Sparkles } from 'lucide-react';

export const TeamPhotoCard: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showSuccessBadge, setShowSuccessBadge] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved photo or detect existing image
  useEffect(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem('edumojo_team_photo');
    if (saved) {
      setPhotoSrc(saved);
      setIsCustom(true);
      return;
    }

    // 2. Check if /image.png or /images/team_photo.png is available
    const testImg = new Image();
    testImg.src = '/image.png';
    testImg.onload = () => {
      setPhotoSrc('/image.png');
      setIsCustom(true);
    };
    testImg.onerror = () => {
      const testImg2 = new Image();
      testImg2.src = '/images/team_photo.png';
      testImg2.onload = () => {
        setPhotoSrc('/images/team_photo.png');
        setIsCustom(true);
      };
      testImg2.onerror = () => {
        // Fallback to svg artwork
        setPhotoSrc('/images/team_photo.svg');
        setIsCustom(false);
      };
    };
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoSrc(result);
        setIsCustom(true);
        localStorage.setItem('edumojo_team_photo', result);
        setShowSuccessBadge(true);
        setTimeout(() => setShowSuccessBadge(false), 4000);

        // Also persist to server if dev server middleware is active
        try {
          fetch('/api/upload-team-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataUrl: result }),
          }).catch(() => {
            // Silently ignore if server endpoint not reachable
          });
        } catch {
          // ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('edumojo_team_photo');
    setPhotoSrc('/images/team_photo.svg');
    setIsCustom(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`relative w-full max-w-lg rounded-3xl overflow-hidden border transition-all duration-300 bg-white group shadow-[0_20px_50px_rgba(11,31,20,0.12)] ${
        isDragging
          ? 'border-[#16a34a] ring-4 ring-[#2eca8b]/30 scale-[1.01]'
          : 'border-[#2eca8b]/35 hover:border-[#16a34a]/60'
      }`}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        accept="image/png,image/jpeg,image/webp,image/jpg"
        className="hidden"
      />

      {/* Main Image Frame */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 flex items-center justify-center">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt="The EduMojo development team at Webmagiks Pune"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            loading="eager"
            referrerPolicy="no-referrer"
            onError={() => {
              if (photoSrc !== '/images/team_photo.svg') {
                setPhotoSrc('/images/team_photo.svg');
                setIsCustom(false);
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-emerald-50/50 text-[#15803d]">
            <RefreshCw className="w-6 h-6 animate-spin text-[#16a34a]" />
          </div>
        )}

        {/* Ambient dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f14]/85 via-transparent to-black/20 pointer-events-none" />

        {/* Floating pill badge top left */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/50 text-xs font-bold text-[#0b1f14] shadow-sm pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
          <span>Webmagiks Engineering HQ</span>
        </div>

        {/* Upload / Change Photo Action Button top right */}
        <div className="absolute top-4 right-4 z-20">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md transition-all duration-200 cursor-pointer ${
              isCustom
                ? 'bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20'
                : 'bg-[#15803d] hover:bg-[#166534] text-white ring-2 ring-white/50 animate-pulse'
            }`}
            title="Click to select or drop your exact team photo (image.png)"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{isCustom ? 'Change Photo' : 'Upload Exact Photo'}</span>
          </button>
        </div>

        {/* Success toast badge */}
        {showSuccessBadge && (
          <div className="absolute top-14 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <Check className="w-3.5 h-3.5" />
            <span>Original photo applied!</span>
          </div>
        )}

        {/* Drag-over overlay indicator */}
        {isDragging && (
          <div className="absolute inset-0 z-30 bg-[#0b1f14]/85 backdrop-blur-xs flex flex-col items-center justify-center text-white border-2 border-dashed border-[#2eca8b] m-2 rounded-2xl">
            <Upload className="w-10 h-10 text-[#2eca8b] animate-bounce mb-2" />
            <p className="font-bold text-base">Drop your photo here</p>
            <p className="text-xs text-white/80 mt-1">Supports PNG, JPG, WebP</p>
          </div>
        )}

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base sm:text-lg font-black tracking-tight text-white drop-shadow-sm flex items-center gap-1.5">
                The EduMojo Team in Pune
                {isCustom && (
                  <span className="inline-flex items-center text-[10px] font-semibold bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 px-2 py-0.5 rounded-full">
                    <Check className="w-2.5 h-2.5 mr-0.5" /> Original Photo
                  </span>
                )}
              </p>
              <p className="text-xs text-white/90 font-medium mt-0.5 line-clamp-1">
                Building deep school workflows by listening to educators every day
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Helper Banner & Drag Prompt (shown when user hasn't uploaded their original photo yet) */}
      {!isCustom && (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50/60 border-t border-[#2eca8b]/20 flex items-center justify-between text-xs text-[#14532d] cursor-pointer hover:bg-emerald-100/60 transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#16a34a] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Upload className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="font-bold text-[#0b1f14]">Want your exact photo shown here?</p>
              <p className="text-[11px] text-[#3f4b45]">Click or drag &apos;image.png&apos; directly onto this card</p>
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-[#15803d] bg-white border border-[#2eca8b]/40 px-2.5 py-1 rounded-full shadow-2xs">
            Select Photo
          </span>
        </div>
      )}

      {/* Footer bar with location and department */}
      <div className="p-4 bg-white border-t border-[rgba(11,31,20,0.06)] flex items-center justify-between text-xs text-[#3f4b45]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4 text-[#16a34a]" />
          </div>
          <span className="font-bold text-[#0b1f14]">Pune, Maharashtra</span>
        </div>

        <div className="flex items-center gap-2">
          {isCustom && (
            <button
              type="button"
              onClick={handleReset}
              className="text-[11px] text-[#6b7a72] hover:text-red-600 transition-colors cursor-pointer mr-1"
              title="Reset to default"
            >
              Reset
            </button>
          )}
          <span className="text-[11px] font-bold text-[#15803d] bg-[#f0fdf4] border border-[#2eca8b]/30 px-2.5 py-1 rounded-full">
            Product &amp; Dev Team
          </span>
        </div>
      </div>
    </div>
  );
};
