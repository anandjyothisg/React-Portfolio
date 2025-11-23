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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .role-container {
          position: relative;
          overflow: visible;
          height: 1.75rem;
          min-height: 1.75rem;
        }
        
        .role-container-mobile {
          position: relative;
          overflow: visible;
          height: 1rem;
          min-height: 1rem;
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

      <div className="min-h-screen flex flex-col bg-black">
        {/* Desktop Version */}
        <section id="home" className="hidden lg:block relative min-h-screen overflow-hidden">
          {/* Desktop Split Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-white"></div>
            <div 
              className="absolute inset-0 bg-black"
              style={{
                clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 40% 100%)'
              }}
            ></div>
          </div>

          {/* Desktop Content */}
          <div className="relative z-10 grid grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-8 lg:px-16 h-screen">
            {/* Left Content */}
            <div className="space-y-6 pr-16">
              <div className="space-y-3">
                <p className="text-sm text-gray-500 font-light tracking-wide">Hi, I am</p>
                <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
                  Anand<br />Jyothis G
                </h1>
                <div className="role-container pt-1">
                  {roles.map((role, index) => (
                    <p
                      key={index}
                      className={`role-text text-base text-gray-500 font-light ${
                        index === currentRole ? 'role-active' : index === (currentRole - 1 + roles.length) % roles.length ? 'role-exit' : 'role-enter'
                      }`}
                    >
                      {role}
                    </p>
                  ))}
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-4">
                <a 
                  href="mailto:your.email@example.com"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-gray-700" />
                </a>
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-gray-700" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-700" />
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative flex justify-end items-end h-full">
              <div className="relative w-full max-w-xl">
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
        </section>

        {/* Mobile Version - Perfect Blend Like Reference */}
        <section id="home-mobile" className="lg:hidden relative w-full" style={{ height: 'calc(100vh - 64px)' }}>
          {/* Full Screen Image */}
          <img 
            src="/images/hero.png" 
            alt="Anand Jyothis G" 
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ 
              objectPosition: '50% 10%'
            }}
          />
          
          {/* Seamless Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 80%, #000000 100%)'
            }}
          />
          
          {/* Content at Bottom - NO BOX */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-12">
            <div className="flex items-end justify-between gap-6">
              {/* Left - Text */}
              <div className="flex-1">
                <p className="text-[10px] text-white/50 font-light mb-0.5 tracking-wide">Hi, I am</p>
                <h1 className="text-xs font-small text-white leading-snug mb-0.5 whitespace-nowrap">
                  ANAND <br/> JYOTHIS G
                </h1>
                <div className="role-container-mobile" style={{ height: '0.75rem', minHeight: '0.75rem' }}>
                  {roles.map((role, index) => (
                    <p
                      key={index}
                      className={`role-text text-[15px] text-white/60 font-light ${
                        index === currentRole ? 'role-active' : index === (currentRole - 1 + roles.length) % roles.length ? 'role-exit' : 'role-enter'
                      }`}
                    >
                      {role}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right - Social Icons Vertical */}
              <div className="flex flex-col gap-2">
                <a 
                  href="mailto:your.email@example.com"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5 text-white/80" />
                </a>
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5 text-white/80" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-white/80" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Objective Box - Below Hero on Mobile */}
        <div className="w-full bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 lg:px-16 py-4 lg:py-10">
            <div className="max-w-5xl">
              <h3 className="text-white text-[9px] lg:text-xs font-semibold tracking-[0.2em] uppercase mb-2 lg:mb-3">
                OBJECTIVE
              </h3>
              <p className="text-white/50 text-[11px] lg:text-sm leading-relaxed font-light">
                Enthusiastic Machine Learning undergraduate with hands-on experience in ML, deep learning, and AI-driven healthcare
                solutions. Proficient in C, Java, and Python, with expertise in UI/UX design, Figma, and AI model deployment. Skilled
                in computer vision and natural language processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}