import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Cpu, Rocket } from 'lucide-react';

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
    { Icon: Sparkles, delay: "1s", duration: "18s", x: "85%", y: "70%" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, duration, x, y }, idx) => (
        <div
          key={idx}
          className="absolute opacity-10"
          style={{
            left: x,
            top: y,
            animation: `float ${duration} ease-in-out infinite`,
            animationDelay: delay
          }}
        >
          <Icon className="w-12 h-12 text-indigo-600" />
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
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl w-full">
        <div className="backdrop-blur-xl bg-white/40 rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white/30 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 backdrop-blur-md bg-gradient-to-r from-indigo-100/80 to-purple-100/80 rounded-full px-5 py-2.5 border border-indigo-200/50 shadow-lg animate-fade-in">
                <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
                <p className="text-sm tracking-wide text-indigo-700 font-semibold">WELCOME TO MY PORTFOLIO</p>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-slate-900 leading-tight">
                  Hi, I'm
                  <br />
                  <span className="font-light bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ANAND JYOTHIS G
                  </span>
                </h1>
                
                {/* Animated Role */}
                <div className="h-16 flex items-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-700">
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
              <p className="text-lg sm:text-xl text-slate-600 font-light max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Passionate about building intelligent systems and beautiful applications. 
                Transforming ideas into reality with code and creativity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <a 
                  href="#contact" 
                  className="group backdrop-blur-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 font-medium"
                >
                  <span className="text-white">Get in Touch</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#projects" 
                  className="backdrop-blur-md bg-white/70 hover:bg-white/90 text-slate-800 px-8 py-4 rounded-full transition-all duration-300 border border-white/50 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 font-medium"
                >
                  View My Work
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">2+</p>
                  <p className="text-sm text-slate-600">Years Exp.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">15+</p>
                  <p className="text-sm text-slate-600">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">100%</p>
                  <p className="text-sm text-slate-600">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/60 to-white/40 rounded-3xl p-3 border border-white/50 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-indigo-100 to-purple-100">
                  {/* Your Image */}
                  <img 
                    src="/images/myimage.png" 
                    alt="Your Name" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badge on Image */}
                <div className="absolute -bottom-4 -right-4 backdrop-blur-lg bg-white/80 rounded-2xl px-6 py-3 border border-white/50 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-slate-800">Available for Work</span>
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