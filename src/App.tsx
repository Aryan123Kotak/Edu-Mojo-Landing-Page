import React, { useState, useEffect } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { Footer } from './components/Footer';
import { CallBackModal } from './components/CallBackModal';
import { FamilyAppModal } from './components/FamilyAppModal';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { ContactUsPage } from './pages/ContactUsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [callBackModalOpen, setCallBackModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Sync with browser URL pathname on load and popstate
  useEffect(() => {
    const syncRouteFromPath = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/about-us' || path === '/about') {
        setCurrentPage('about');
      } else if (path === '/features') {
        setCurrentPage('features');
      } else if (path === '/contact-us' || path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/familyapp' || path === '/familyapp/') {
        setLoginModalOpen(true);
      } else {
        setCurrentPage('home');
      }
    };

    syncRouteFromPath();
    window.addEventListener('popstate', syncRouteFromPath);
    return () => window.removeEventListener('popstate', syncRouteFromPath);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    let targetPath = '/';
    if (page === 'about') targetPath = '/about-us';
    if (page === 'features') targetPath = '/features';
    if (page === 'contact') targetPath = '/contact-us';

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#16a34a]/20 selection:text-[#16a34a]">
      {/* Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestCallBack={() => setCallBackModalOpen(true)}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full bg-white">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onRequestCallBack={() => setCallBackModalOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutUsPage
            onNavigate={handleNavigate}
            onRequestCallBack={() => setCallBackModalOpen(true)}
          />
        )}
        {currentPage === 'features' && (
          <FeaturesPage
            onNavigate={handleNavigate}
            onRequestCallBack={() => setCallBackModalOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <ContactUsPage
            onNavigate={handleNavigate}
            onRequestCallBack={() => setCallBackModalOpen(true)}
          />
        )}
      </main>

      {/* Shared Footer across all 4 pages */}
      <Footer
        onNavigate={handleNavigate}
        onRequestCallBack={() => setCallBackModalOpen(true)}
      />

      {/* "Request a Call Back" Modal */}
      <CallBackModal
        isOpen={callBackModalOpen}
        onClose={() => setCallBackModalOpen(false)}
      />

      {/* Family & Staff App Login Modal */}
      <FamilyAppModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
}
