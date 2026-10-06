import React, { useState, useEffect, useRef } from 'react';
import { 
  Wifi, 
  ArrowLeft, 
  Phone, 
  Video, 
  MoreVertical, 
  Smile, 
  Paperclip, 
  Mic,
  Camera
} from 'lucide-react';

interface PhoneMockupProps {
  className?: string;
}

interface MessageItem {
  id: number;
  html: string;
  time: string;
}

const ALL_MESSAGES: { html: string; time: string }[] = [
  { html: 'Aarav reached school at <b>8:02 AM</b>. Attendance marked.', time: '08:02 AM' },
  { html: 'Reminder: Term 2 fee of <b>₹12,500</b> is due on 10 Oct.', time: '10:15 AM' },
  { html: 'Payment received. Receipt <b>#EM-4821</b> attached.', time: '11:40 AM' },
  { html: 'Unit Test 1 results are out. Aarav scored <b>92%</b> in Maths.', time: '01:25 PM' },
  { html: 'School closed tomorrow for Dussehra. Classes resume Monday.', time: '03:10 PM' },
];

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageItem[]>([
    { id: 1, html: ALL_MESSAGES[0].html, time: ALL_MESSAGES[0].time },
    { id: 2, html: ALL_MESSAGES[1].html, time: ALL_MESSAGES[1].time },
  ]);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver: start cycle only when phone scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Cycle messages every 2.2s
  useEffect(() => {
    if (!isInView) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      // Show latest 3 messages statically
      setMessages([
        { id: 1, html: ALL_MESSAGES[0].html, time: ALL_MESSAGES[0].time },
        { id: 2, html: ALL_MESSAGES[1].html, time: ALL_MESSAGES[1].time },
        { id: 3, html: ALL_MESSAGES[2].html, time: ALL_MESSAGES[2].time },
      ]);
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIdx) => {
        const nextIdx = (prevIdx + 1) % ALL_MESSAGES.length;
        const newMsgItem: MessageItem = {
          id: Date.now(),
          html: ALL_MESSAGES[prevIdx].html,
          time: ALL_MESSAGES[prevIdx].time,
        };

        setMessages((prevMsgs) => {
          // Keep only the latest 3 visible so nothing overflows
          const updated = [...prevMsgs, newMsgItem];
          return updated.slice(-3);
        });

        return nextIdx;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div 
      ref={containerRef}
      className={`relative mx-auto w-[310px] sm:w-[335px] aspect-[9/19] bg-[#1a1a1a] rounded-[52px] p-3 border-[6px] border-[#333333] flex flex-col justify-between overflow-hidden ${className}`}
      style={{
        boxShadow: '0 30px 60px -15px rgba(11, 31, 20, 0.3)',
      }}
    >
      {/* Outer Side Hardware Buttons */}
      <div className="absolute -left-[9px] top-24 w-[3px] h-10 bg-[#444] rounded-l-sm" />
      <div className="absolute -left-[9px] top-38 w-[3px] h-12 bg-[#444] rounded-l-sm" />
      <div className="absolute -right-[9px] top-28 w-[3px] h-14 bg-[#444] rounded-r-sm" />

      {/* Screen Frame */}
      <div className="w-full h-full bg-[#efeae2] rounded-[42px] overflow-hidden flex flex-col justify-between select-none relative font-sans text-slate-900">
        
        {/* iOS Top Status Bar */}
        <div className="pt-3 px-6 pb-1 bg-[#054c44] text-white flex items-center justify-between text-xs font-semibold z-20">
          <span>09:41</span>
          
          {/* Dynamic Island Pill */}
          <div className="w-24 h-4 bg-black rounded-full mx-auto -mt-1 flex items-center justify-end px-2">
            <div className="w-2 h-2 rounded-full bg-[#2eca8b]/80" />
          </div>

          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="font-mono text-[10px]">5G</span>
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center gap-0.5">
              <span className="text-[10px] font-mono">100</span>
              <div className="w-4 h-2 border border-white/80 rounded-xs p-0.5 flex items-center">
                <div className="w-full h-full bg-white rounded-2xs" />
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Header: background #075e54, white text, mint circle avatar with "E" */}
        <div 
          className="px-3 py-2.5 flex items-center justify-between text-white z-10 shadow-sm"
          style={{ background: '#075e54' }}
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-white/80" />
            <div className="w-8 h-8 rounded-full bg-[#2eca8b] text-[#075e54] flex items-center justify-center font-black text-sm shadow-xs">
              E
            </div>
            <div>
              <div className="font-bold text-[13px] leading-tight text-white flex items-center gap-1">
                <span>EduMojo Alerts</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2eca8b]" />
              </div>
              <div className="text-[10px] text-white/80 font-normal leading-none">
                Official Institutional Channel
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <Video className="w-4 h-4" />
            <Phone className="w-3.5 h-3.5" />
            <MoreVertical className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* WhatsApp Chat Area: background #efeae2, messages stack from bottom */}
        <div 
          className="flex-1 p-3.5 flex flex-col justify-end gap-3 overflow-hidden relative"
          style={{ background: '#efeae2' }}
        >
          {/* Subtle date badge */}
          <div className="self-center bg-[#ffffff]/80 backdrop-blur-xs text-[#6b7a72] px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-2 shadow-2xs">
            Today
          </div>

          {/* Active Messages (Max 3 visible) */}
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className="msg self-start"
            >
              <div 
                dangerouslySetInnerHTML={{ __html: msg.html }} 
              />
              <time>{msg.time} ✓✓</time>
            </div>
          ))}
        </div>

        {/* WhatsApp Bottom Input Bar */}
        <div className="p-2 bg-[#f0f2f5] border-t border-slate-200/60 flex items-center gap-2 text-slate-500 z-10 pb-4">
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 text-xs text-slate-400 border border-slate-200">
            <Smile className="w-4 h-4 text-slate-400" />
            <span className="flex-1">Message EduMojo...</span>
            <Paperclip className="w-4 h-4 text-slate-400 rotate-45" />
            <Camera className="w-4 h-4 text-slate-400" />
          </div>
          <div className="w-8 h-8 rounded-full bg-[#075e54] text-white flex items-center justify-center shadow-xs">
            <Mic className="w-4 h-4" />
          </div>
        </div>

      </div>
    </div>
  );
};
