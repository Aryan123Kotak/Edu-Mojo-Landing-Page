import React, { useState, useEffect } from 'react';
import { LogIn } from 'lucide-react';
import { EduMojoLogo } from './EduMojoLogo';

export type PageRoute = 'home' | 'about' | 'features' | 'contact';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onRequestCallBack: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRequestCallBack,
  onOpenLogin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { route: PageRoute; label: string }[] = [
    { route: 'home', label: 'Home' },
    { route: 'about', label: 'About Us' },
    { route: 'features', label: 'Features' },
    { route: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[1000] h-[72px] transition-all duration-300 flex items-center"
        style={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(24px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
          borderBottom: '1px solid rgba(11, 31, 20, 0.06)',
          boxShadow: isScrolled ? '0 4px 20px rgba(11, 31, 20, 0.05)' : 'none',
        }}
      >
        <div className="page-container flex items-center justify-between">
          {/* Left: EduMojo Real Logo */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] rounded-lg transition-transform hover:scale-[1.02] cursor-pointer"
            aria-label="EduMojo Home"
          >
            <EduMojoLogo className="h-9 sm:h-10" variant="color" showTagline={false} />
          </button>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-tight">
            {navLinks.map((link) => {
              const isActive = currentPage === link.route;
              return (
                <button
                  key={link.route}
                  type="button"
                  onClick={() => handleLinkClick(link.route)}
                  className="relative py-2 transition-colors duration-200 cursor-pointer font-medium hover:text-[#16a34a]"
                  style={{
                    color: isActive ? '#16a34a' : '#3f4b45',
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#16a34a] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenLogin}
              className="text-sm font-semibold text-[#3f4b45] hover:text-[#0b1f14] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>Login</span>
            </button>

            <button
              type="button"
              onClick={onRequestCallBack}
              className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#16a34a]/20 hover:shadow-lg hover:shadow-[#16a34a]/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <i className="ph-bold ph-phone text-sm" />
              <span>Book a demo</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onRequestCallBack}
              className="bg-[#16a34a] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full cursor-pointer"
            >
              Book a demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0b1f14] hover:text-black bg-white/80 border border-slate-200 cursor-pointer flex items-center justify-center w-9 h-9"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <i className="ph-bold ph-x text-lg" /> : <i className="ph-bold ph-list text-lg" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-[999] bg-white/98 backdrop-blur-2xl md:hidden border-b border-slate-200 px-6 py-8 flex flex-col justify-between animate-in fade-in duration-200 text-slate-900">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#6b7a72] font-semibold mb-2">Navigation</div>
            {navLinks.map((link) => {
              const isActive = currentPage === link.route;
              return (
                <button
                  key={link.route}
                  type="button"
                  onClick={() => handleLinkClick(link.route)}
                  className="w-full text-left text-lg py-2.5 font-bold flex items-center justify-between border-b border-slate-100"
                  style={{ color: isActive ? '#16a34a' : '#0b1f14' }}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#16a34a]" />}
                </button>
              );
            })}

            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-3 rounded-xl bg-[#f7faf8] border border-slate-200 text-[#0b1f14] font-semibold text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-4 h-4 text-[#16a34a]" />
                <span>Family & Staff Login (/familyapp/)</span>
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestCallBack();
              }}
              className="w-full py-3.5 bg-[#16a34a] text-white rounded-full font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#16a34a]/25 cursor-pointer"
            >
              <i className="ph-bold ph-phone text-base" />
              <span>Book a demo</span>
            </button>
            <p className="text-xs text-center text-[#6b7a72]">
              Transforming schools with automated excellence
            </p>
          </div>
        </div>
      )}
    </>
  );
};
