import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const roles = [
    'AI/ML Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'UI / UX Developer',
    'Software Engineer'
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .role-container {
          position: relative;
          overflow: visible;
          height: 2rem;
          min-height: 2rem;
        }
        
        .role-container-mobile {
          position: relative;
          overflow: visible;
          height: 1.5rem;
          min-height: 1.5rem;
        }
        
        .role-text {
          position: absolute;
          width: 100%;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .role-enter {
          transform: translateY(100%);
          opacity: 0;
        }
        
        .role-active {
          transform: translateY(0);
          opacity: 1;
        }
        
        .role-exit {
          transform: translateY(-100%);
          opacity: 0;
        }
      `}</style>

      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Desktop Split Background */}
        <div className="hidden lg:block absolute inset-0">
          <div className="absolute inset-0 bg-gray-200"></div>
          {/* Shadow Layer */}
          <div 
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 35% 100%)',
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, transparent 3%)',
              pointerEvents: 'none'
            }}
          ></div>
          <div 
            className="absolute inset-0 bg-black"
            style={{
              clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 35% 100%)'
            }}
          ></div>
        </div>

        {/* Mobile Background - Full Black */}
        <div className="lg:hidden absolute inset-0 bg-black"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex-1 flex flex-col">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-8 lg:px-16 flex-1">
            {/* Left Content - Moved more to the left */}
            <div className="space-y-6 pr-16">
              <div className="space-y-2">
                <p className="text-lg text-gray-700 font-medium">Hi, I am</p>
                <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight">
                  ANAND<br />JYOTHIS G
                </h1>
                <div className="role-container pt-2">
                  {roles.map((role, index) => (
                    <p
                      key={index}
                      className={`role-text text-xl text-gray-600 font-medium ${
                        index === currentRole ? 'role-active' : index === (currentRole - 1 + roles.length) % roles.length ? 'role-exit' : 'role-enter'
                      }`}
                    >
                      {role}
                    </p>
                  ))}
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="mailto:your.email@example.com"
                  className="w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-black" />
                </a>
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-black" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>

            {/* Right Content - Desktop Image */}
            <div className="relative flex justify-center lg:justify-end items-end h-full">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                <img 
                  src="/images/hero.png" 
                  alt="Anand Jyothis G" 
                  className="w-full h-auto object-cover object-bottom"
                  style={{
                    maxHeight: '90vh',
                    objectFit: 'cover',
                    objectPosition: 'center bottom'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden relative flex-1 flex flex-col">
            {/* Top Section - Image with diagonal overlay */}
            <div className="relative h-[60vh] overflow-hidden">
              {/* Background Image */}
              <img 
                src="/images/hero.png" 
                alt="Anand Jyothis G" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              
              {/* Diagonal Dark Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(170deg, transparent 0%, transparent 50%, rgba(45, 45, 45, 0.98) 50%, rgba(45, 45, 45, 0.98) 100%)'
                }}
              ></div>
            </div>

            {/* Bottom Section - Content */}
            <div className="relative flex-1 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] px-8 py-8 flex items-center">
              <div className="w-full">
                {/* Text Content */}
                <div className="space-y-2">
                  <p className="text-sm text-white/80 font-medium">Hi, I am</p>
                  <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                    ANAND<br />JYOTHIS G
                  </h1>
                  <div className="role-container-mobile pt-2">
                    {roles.map((role, index) => (
                      <p
                        key={index}
                        className={`role-text text-sm text-white/70 font-normal ${
                          index === currentRole ? 'role-active' : index === (currentRole - 1 + roles.length) % roles.length ? 'role-exit' : 'role-enter'
                        }`}
                      >
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Icons - Right Side Vertical */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <a 
                  href="mailto:your.email@example.com"
                  className="w-11 h-11 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-full flex items-center justify-center transition-all border border-white/10"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-full flex items-center justify-center transition-all border border-white/10"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-full flex items-center justify-center transition-all border border-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Description Box - Attached at Bottom */}
        <div className="relative z-20 w-full bg-black/85 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 py-10">
            <div className="max-w-5xl">
              <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">
                OBJECTIVE
              </h3>
              <p className="text-white/60 text-xs leading-loose mb-5">
                Enthusiastic Machine Learning undergraduate with hands-on experience in ML, deep learning, and AI-driven healthcare
                solutions. Proficient in C, Java, and Python, with expertise in UI/UX design, Figma, and AI model deployment. Skilled
                in computer vision and natural language processing.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}