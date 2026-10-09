import React, { useState } from 'react';
import { X, Users, GraduationCap, KeyRound, ArrowRight, Smartphone } from 'lucide-react';

interface FamilyAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FamilyAppModal: React.FC<FamilyAppModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'parent' | 'staff' | 'admin'>('parent');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div 
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-black text-slate-900">Unified Institutional Login</h3>
          <p className="text-xs text-slate-500 mt-1">Access attendance, fees, report cards, and communication</p>
        </div>

        {/* Portal Type Switcher */}
        <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1.5 rounded-2xl mb-5 text-xs text-center font-bold">
          <button
            type="button"
            onClick={() => { setActiveTab('parent'); setOtpSent(false); }}
            className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'parent' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-[#16a34a]" />
            <span>Parent</span>
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('staff'); setOtpSent(false); }}
            className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'staff' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#16a34a]" />
            <span>Staff</span>
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('admin'); setOtpSent(false); }}
            className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'admin' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5 text-[#16a34a]" />
            <span>Admin</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendOtp} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block text-slate-700 font-semibold mb-1">
              {activeTab === 'admin' ? 'SuperAdmin Username or Email' : 'Registered WhatsApp Mobile Number'}
            </label>
            <input
              type={activeTab === 'admin' ? 'text' : 'tel'}
              required
              placeholder={activeTab === 'admin' ? 'admin@dhruvglobal.edu.in' : '+91 98765 43210'}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:bg-white font-mono"
            />
          </div>

          {otpSent ? (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#16a34a] mb-1">
                  Enter 6-Digit OTP sent to your WhatsApp
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="• • • • • •"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-[#16a34a] text-slate-900 text-center font-mono tracking-widest text-lg"
                />
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full font-bold text-sm transition-colors cursor-pointer shadow-md shadow-[#16a34a]/20"
              >
                Verify & Enter Portal
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-3 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-[#16a34a]/20"
            >
              <span>Get Login OTP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
