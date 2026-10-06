import React from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import { EduMojoLogo } from './EduMojoLogo';
import { PageRoute } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onRequestCallBack: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestCallBack }) => {
  const handleNav = (page: PageRoute, hash?: string) => {
    onNavigate(page);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnchor = (hash: string) => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#f7faf8] border-t border-[rgba(11,31,20,0.06)] text-[#3f4b45] pt-14 pb-12 font-sans">
      <div className="page-container">
        {/* Main 4-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[rgba(11,31,20,0.06)]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <EduMojoLogo className="h-9" variant="color" showTagline={false} />
            <p className="text-sm text-[#3f4b45] max-w-sm leading-relaxed mt-2">
              <strong className="text-[#0b1f14] font-bold block mb-1">Up to 40% less work for teachers, every day.</strong>
              EduMojo is a simple, affordable school ERP by Webmagiks for schools, colleges and institutes in India and Dubai.
            </p>
          </div>

          {/* Col 2: Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1f14]">Platform</h4>
            <ul className="space-y-2 text-sm text-[#3f4b45]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="hover:text-[#16a34a] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-[#16a34a] transition-colors cursor-pointer text-left"
                >
                  About EduMojo
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('features')}
                  className="hover:text-[#16a34a] transition-colors cursor-pointer text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleAnchor('#faq')}
                  className="hover:text-[#16a34a] transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    handleAnchor('#contact');
                    onRequestCallBack();
                  }}
                  className="text-[#16a34a] font-bold hover:underline transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Book a demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1f14]">Compliance &amp; Trust</h4>
            <ul className="space-y-2 text-sm text-[#3f4b45]">
              <li>
                <span className="text-[#0b1f14] font-medium">Privacy Policy</span>
              </li>
              <li>
                <span className="text-[#0b1f14] font-medium">Terms of Service</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1f14]">Contact</h4>
            <ul className="space-y-2.5 text-xs text-[#3f4b45]">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:contact@edu-mojo.com" className="text-[#0b1f14] hover:text-[#16a34a] font-mono font-medium">
                    contact@edu-mojo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="tel:+919684033959" className="text-[#0b1f14] hover:text-[#16a34a] font-mono font-medium block">
                    +91 96840 33959
                  </a>
                  <a href="tel:+917798969669" className="text-[#0b1f14] hover:text-[#16a34a] font-mono font-medium block">
                    +91 77989 69669
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                <span className="text-[#3f4b45]">Pune, Maharashtra, India</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/edumojo_"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 flex items-center justify-center text-[#3f4b45] hover:text-[#16a34a] transition-colors border border-slate-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 flex items-center justify-center text-[#3f4b45] hover:text-[#16a34a] transition-colors border border-slate-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 flex items-center justify-center text-[#3f4b45] hover:text-[#16a34a] transition-colors border border-slate-200"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7a72]">
          <p>© 2026 EduMojo by Webmagiks. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[#3f4b45]">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#ef4444] fill-[#ef4444]" />
            <span>by <strong className="text-[#0b1f14] font-bold">Webmagiks</strong>.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
