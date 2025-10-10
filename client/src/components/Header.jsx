import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={`backdrop-blur-md bg-white/30 rounded-full border border-white/20 shadow-xl transition-all duration-300 ${
              scrolled ? 'shadow-2xl' : ''
            }`}
          >
            <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
              {/* Logo */}
              <a
                href="#home"
                className="text-xl sm:text-2xl font-light tracking-wider text-slate-800 hover:text-indigo-600 transition-colors"
              >
                Portfolio
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`capitalize text-sm tracking-wide transition-all duration-300 relative group ${
                      activeSection === item
                        ? 'text-indigo-600 font-medium'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                        activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700 hover:text-indigo-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleNavClick}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-lg shadow-2xl z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {['home', 'about', 'projects', 'contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleNavClick}
              className={`capitalize text-lg py-4 border-b border-slate-200 transition-all duration-300 transform ${
                activeSection === item
                  ? 'text-indigo-600 font-medium translate-x-2'
                  : 'text-slate-700 hover:text-indigo-600 hover:translate-x-2'
              }`}
              style={{
                animation: mobileMenuOpen
                  ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Slide-in Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
