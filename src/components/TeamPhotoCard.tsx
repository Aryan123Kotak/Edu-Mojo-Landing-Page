import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';

export const TeamPhotoCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg rounded-3xl overflow-hidden border border-[#2eca8b]/35 bg-white shadow-[0_20px_50px_rgba(11,31,20,0.12)] transition-all duration-300">
      {/* Main Image Frame */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 flex items-center justify-center">
        <img
          src="/WhatsApp Image 2026-10-05 at 11.05.43 AM.jpeg"
          alt="The EduMojo development team at Webmagiks Pune"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          loading="eager"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('team_photo.png')) {
              target.src = '/images/team_photo.png';
            }
          }}
        />

        {/* Ambient dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f14]/85 via-transparent to-black/20 pointer-events-none" />

        {/* Floating pill badge top left */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/50 text-xs font-bold text-[#0b1f14] shadow-sm pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
          <span>Webmagiks Engineering HQ</span>
        </div>

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base sm:text-lg font-black tracking-tight text-white drop-shadow-sm flex items-center gap-1.5">
                The EduMojo Team in Pune
              </p>
              <p className="text-xs text-white/90 font-medium mt-0.5 line-clamp-1">
                Building deep school workflows by listening to educators every day
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar with location and department */}
      <div className="p-4 bg-white border-t border-[rgba(11,31,20,0.06)] flex items-center justify-between text-xs text-[#3f4b45]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center font-bold">
            <MapPin className="w-4 h-4 text-[#16a34a]" />
          </div>
          <span className="font-bold text-[#0b1f14]">Pune, Maharashtra</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-[#15803d] bg-[#f0fdf4] border border-[#2eca8b]/30 px-2.5 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#16a34a]" />
            <span>Product &amp; Dev Team</span>
          </span>
        </div>
      </div>
    </div>
  );
};
