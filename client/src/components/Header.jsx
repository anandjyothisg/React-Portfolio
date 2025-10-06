// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`backdrop-blur-md bg-white/30 rounded-full border border-white/20 shadow-xl transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}>
          <div className="flex items-center justify-between px-8 py-4">
            <a href="#home" className="text-2xl font-light tracking-wider text-slate-800">
              Portfolio
            </a>
            <div className="flex gap-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize text-sm tracking-wide transition-colors duration-300 ${
                    activeSection === item ? 'text-indigo-600 font-medium' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}