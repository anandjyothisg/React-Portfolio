import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Cpu, Rocket, Zap, Binary, GitBranch, Network, Terminal, Database, Lock } from 'lucide-react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Tech Innovator",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: "0s", duration: "20s", x: "10%", y: "20%" },
    { Icon: Cpu, delay: "2s", duration: "25s", x: "80%", y: "15%" },
    { Icon: Rocket, delay: "4s", duration: "22s", x: "15%", y: "75%" },
    { Icon: Sparkles, delay: "1s", duration: "18s", x: "85%", y: "70%" },
    { Icon: Binary, delay: "3s", duration: "23s", x: "25%", y: "40%" },
    { Icon: GitBranch, delay: "5s", duration: "21s", x: "75%", y: "45%" },
    { Icon: Network, delay: "1.5s", duration: "24s", x: "30%", y: "60%" },
    { Icon: Terminal, delay: "3.5s", duration: "19s", x: "70%", y: "80%" },
    { Icon: Database, delay: "2.5s", duration: "26s", x: "50%", y: "10%" },
    { Icon: Lock, delay: "4.5s", duration: "22s", x: "60%", y: "30%" },
    { Icon: Zap, delay: "0.5s", duration: "20s", x: "40%", y: "85%" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-slate-950">
      {/* Starfield Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      {/* Animated Electric Blue Nebula Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Neural Network Grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, duration, x, y }, idx) => (
        <div
          key={idx}
          className="absolute opacity-20"
          style={{
            left: x,
            top: y,
            animation: `float ${duration} ease-in-out infinite`,
            animationDelay: delay
          }}
        >
          <Icon className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
        </div>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes electric {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.7), 0 0 60px rgba(6, 182, 212, 0.5); }
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-electric {
          animation: electric 2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl w-full">
        <div className="backdrop-blur-xl bg-slate-900/40 rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-cyan-500/30 shadow-2xl animate-electric">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 backdrop-blur-md bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-5 py-2.5 border border-cyan-400/50 shadow-lg animate-fade-in">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <p className="text-sm tracking-wide text-cyan-300 font-semibold">WELCOME TO MY PORTFOLIO</p>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-tight">
                  Hi, I'm
                  <br />
                  <span className="font-light bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    ANAND JYOTHIS G
                  </span>
                </h1>
                
                {/* Animated Role */}
                <div className="h-16 flex items-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-cyan-200">
                    {roles.map((role, idx) => (
                      <span
                        key={idx}
                        className={`absolute transition-all duration-500 ${
                          currentRole === idx
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-4'
                        }`}
                      >
                        {role}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-slate-300 font-light max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Passionate about building intelligent systems and beautiful applications. 
                Transforming ideas into reality with code and creativity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <a 
                  href="#contact" 
                  className="group backdrop-blur-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 hover:scale-105 flex items-center justify-center gap-2 font-medium"
                >
                  <span className="text-white">Get in Touch</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#projects" 
                  className="backdrop-blur-md bg-slate-800/70 hover:bg-slate-700/90 text-cyan-300 px-8 py-4 rounded-full transition-all duration-300 border border-cyan-500/50 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 flex items-center justify-center gap-2 font-medium"
                >
                  View My Work
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">2+</p>
                  <p className="text-sm text-slate-400">Years Exp.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">15+</p>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">100%</p>
                  <p className="text-sm text-slate-400">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-full blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 rounded-3xl p-3 border border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-slate-800 to-slate-900">
                  {/* Your Image */}
                  <img 
                    src="/images/hero_image2.jpg" 
                    alt="Your Name" 
                    className="w-full h-full object-cover"
                  />
                  {/* Electric Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 mix-blend-overlay"></div>
                </div>
                
                {/* Floating Badge on Image */}
                <div className="absolute -bottom-4 -right-4 backdrop-blur-lg bg-slate-800/90 rounded-2xl px-6 py-3 border border-cyan-400/50 shadow-xl shadow-cyan-500/30">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                    <span className="text-sm font-semibold text-cyan-300">Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}