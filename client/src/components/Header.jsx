import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        a {
          text-decoration: none !important;
          color: #000 !important;
        }
        
        a:hover {
          color: rgba(0, 0, 0, 0.6) !important;
        }

        .hamburger-line {
          display: block;
          width: 20px;
          height: 1px;
          background-color: #000;
          transition: all 0.3s ease;
        }

        .hamburger-open .line1 {
          transform: rotate(45deg) translate(4px, 4px);
        }

        .hamburger-open .line2 {
          opacity: 0;
        }

        .hamburger-open .line3 {
          transform: rotate(-45deg) translate(4px, -4px);
        }
      `}</style>

      {/* Main Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`flex items-center py-3 transition-all duration-300 ${
            scrolled ? 'justify-between' : 'justify-end'
          }`}>
            {/* Logo */}
            <a
              href="#home"
              className={`text-sm font-light tracking-wider transition-all duration-300 text-black ${
                scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              Portfolio
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              {['home', 'about', 'skills', 'portfolio'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize text-xs font-light tracking-wider transition-all duration-300 relative text-black hover:text-black/60 ${
                    activeSection === item ? 'font-normal' : ''
                  }`}
                >
                  {item === 'home' ? 'About me' : item}
                  {activeSection === item && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-black"></span>
                  )}
                </a>
              ))}
              <a 
                href="#contact" 
                className="px-5 py-1.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs font-light tracking-wider"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden transition-all duration-300 p-2 bg-transparent !bg-transparent shadow-none"
              aria-label="Toggle menu"
            >
              <div className={`flex flex-col gap-1.5 ${mobileMenuOpen ? 'hamburger-open' : ''}`}>
                <span className="hamburger-line line1"></span>
                <span className="hamburger-line line2"></span>
                <span className="hamburger-line line3"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleNavClick}
      />

      {/* Mobile Menu - Right Half Vertical */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-white shadow-2xl z-50 md:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={handleNavClick}
            className="p-1.5 text-black transition-all bg-transparent !bg-transparent shadow-none duration-300 hover:rotate-90"
            aria-label="Close menu"
          >
            <div className="flex flex-col gap-1.5 hamburger-open">
              <span className="hamburger-line line1"></span>
              <span className="hamburger-line line2"></span>
              <span className="hamburger-line line3"></span>
            </div>
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start px-8 pt-8 gap-6">
          {['home', 'about', 'skills', 'portfolio'].map((item, index) => (
            <React.Fragment key={item}>
              <a
                href={`#${item}`}
                onClick={handleNavClick}
                className={`capitalize text-sm font-light tracking-wider transition-all duration-200 ${
                  activeSection === item
                    ? 'text-black font-normal'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {item === 'home' ? 'About me' : item}
              </a>
              {index < 3 && (
                <div className="w-12 h-px bg-black/20"></div>
              )}
            </React.Fragment>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-2 border border-black text-black px-6 py-2 text-sm font-light tracking-wider hover:bg-black hover:text-white transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}