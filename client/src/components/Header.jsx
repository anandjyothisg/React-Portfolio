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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        a {
          text-decoration: none !important;
        }
      `}</style>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className={`flex items-center py-6 transition-all duration-300 ${
            scrolled ? 'justify-between' : 'justify-end'
          }`}>
            {/* Logo - Only visible when scrolled */}
            <a
              href="#home"
              className={`text-2xl font-bold transition-all duration-300 ${
                scrolled ? 'opacity-100 text-black' : 'opacity-0 pointer-events-none text-white'
              }`}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <text x="5" y="30" fontSize="32" fontWeight="bold" fill={scrolled ? "black" : "white"} fontFamily="Arial, sans-serif"></text>
              </svg>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'skills', 'portfolio'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize text-sm font-medium transition-all duration-300 relative ${
                    scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'
                  } ${activeSection === item ? 'font-semibold' : ''}`}
                  style={{ color: scrolled ? 'black' : 'white' }}
                >
                  {item === 'home' ? 'About me' : item}
                  {activeSection === item && (
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${scrolled ? 'bg-black' : 'bg-white'}`}></span>
                  )}
                </a>
              ))}
              <a 
                href="#contact" 
                className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-semibold uppercase tracking-wide ${
                  scrolled 
                    ? 'bg-black hover:bg-gray-800' 
                    : 'bg-white hover:bg-gray-100'
                }`}
                style={{ color: scrolled ? 'white' : 'black' }}
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 md:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          {['home', 'about', 'skills', 'portfolio'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleNavClick}
              className={`capitalize text-base py-4 border-b border-gray-200 transition-all duration-300 ${
                activeSection === item
                  ? 'text-black font-semibold'
                  : 'text-black hover:text-gray-600'
              }`}
              style={{ color: 'black' }}
            >
              {item === 'home' ? 'About me' : item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-6 bg-black px-6 py-3 rounded-full text-center text-sm font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
            style={{ color: 'white' }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
}