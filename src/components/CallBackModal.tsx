import React, { useState } from 'react';
import { X, CheckCircle, Phone, Sparkles } from 'lucide-react';

interface CallBackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallBackModal: React.FC<CallBackModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    schoolName: '',
    institutionType: 'K-12 CBSE / ICSE School',
    studentStrength: '1,000 - 3,000 Students',
    preferredTime: 'Morning (10:00 AM - 1:00 PM IST)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-900 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-[#16a34a] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Call Back Requested!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-[#16a34a] font-bold">{formData.name || 'Principal'}</span>. Our senior educational consultant will call you at{' '}
              <span className="font-mono text-slate-900 font-semibold">{formData.phone}</span> during{' '}
              <span className="text-[#16a34a] font-medium">{formData.preferredTime}</span>.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 text-left">
              <div className="font-bold text-slate-900 mb-1.5">What to expect on the call:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>30-minute tailored ERP demo for {formData.schoolName || 'your institution'}</li>
                <li>Data migration roadmap from your current system</li>
                <li>WhatsApp automation & custom timetable preview</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full font-bold text-sm tracking-wide transition-colors mt-4 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#16a34a] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Priority Institutional Access</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 mt-1">
                Request a Call Back
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Speak directly with an EduMojo specialist. We will analyze your school workflows and prepare a custom demo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:bg-white transition-colors font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Official Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="principal@school.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">School / College Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cambridge Academy"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Student Strength</label>
                  <select
                    value={formData.studentStrength}
                    onChange={(e) => setFormData({ ...formData, studentStrength: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#16a34a]"
                  >
                    <option>Under 500 Students</option>
                    <option>500 - 1,500 Students</option>
                    <option>1,500 - 3,500 Students</option>
                    <option>3,500+ Multi-Campus</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Preferred Time Window</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#16a34a]"
                  >
                    <option>Morning (10:00 AM - 1:00 PM IST)</option>
                    <option>Afternoon (1:00 PM - 4:00 PM IST)</option>
                    <option>Evening (4:00 PM - 7:00 PM IST)</option>
                    <option>Urgent (Within 2 Hours)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Key Challenges (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Timetable clashes, pending fee collections, manual attendance..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#16a34a] hover:bg-[#15803d] disabled:opacity-50 text-white rounded-full font-bold text-sm tracking-wide shadow-md shadow-[#16a34a]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Phone className="w-4 h-4" />
                      <span>Confirm Call Back Request</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  No obligation · Enterprise privacy guaranteed · Zero spam policy
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
