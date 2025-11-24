import React, { useState, useEffect } from 'react';
import { Code, Sparkles, Rocket, Brain, GraduationCap, Users, Award, Trophy, Zap, Binary } from 'lucide-react';

export default function About() {
  // Gallery images
  const images = [
    '/images/8.jpg',
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg'
  ];

  // State to track which image is shown in each slot
  const [visibleImages, setVisibleImages] = useState([0, 1, 2, 3]);
  const [nextImages, setNextImages] = useState([4, 5, 6, 7]);
  const [transitioning, setTransitioning] = useState([false, false, false, false]);

  // Get next available image that's not currently visible
  const getNextImage = (currentImages, currentIndex) => {
    let nextIndex = (currentIndex + 4) % images.length;
    let attempts = 0;
    
    // Find an image that's not currently visible in any slot
    while (currentImages.includes(nextIndex) && attempts < images.length) {
      nextIndex = (nextIndex + 1) % images.length;
      attempts++;
    }
    
    return nextIndex;
  };

  useEffect(() => {
    // Stagger the transitions for each slot
    const intervals = [
      { slot: 0, delay: 0 },
      { slot: 1, delay: 3000 },
      { slot: 2, delay: 6000 },
      { slot: 3, delay: 9000 }
    ];

    const timers = intervals.map(({ slot, delay }) => {
      return setTimeout(() => {
        const interval = setInterval(() => {
          // Start transition
          setTransitioning(prev => {
            const newState = [...prev];
            newState[slot] = true;
            return newState;
          });

          // After fade out, update to next image
          setTimeout(() => {
            setVisibleImages(prev => {
              const newImages = [...prev];
              const currentImage = newImages[slot];
              const nextImage = getNextImage(newImages, currentImage);
              newImages[slot] = nextImage;
              return newImages;
            });

            // End transition
            setTimeout(() => {
              setTransitioning(prev => {
                const newState = [...prev];
                newState[slot] = false;
                return newState;
              });
            }, 100);
          }, 600);
        }, 12000);

        // Store interval ID for cleanup
        return interval;
      }, delay);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [images.length]);

  const skills = [
    { 
      icon: Brain, 
      name: "Machine Learning", 
      desc: "Deep learning models, neural networks, and AI solutions"
    },
    { 
      icon: Code, 
      name: "Development", 
      desc: "Full-stack development with modern frameworks"
    },
    { 
      icon: Rocket, 
      name: "Deployment", 
      desc: "MLOps, cloud infrastructure, and scalable systems"
    }
  ];

  const education = [
    {
      degree: "SSLC",
      field: "Secondary School",
      school: "Shri Vidhya Mandhir CBSE School, Pushpathur",
      year: "2019 - 2021",
      icon: GraduationCap
    },
    {
      degree: "HSC",
      field: "Higher Secondary",
      school: "Shri Vidhya Mandhir CBSE School, Pushpathur",
      year: "2021 - 2023",
      icon: Award
    },
    {
      degree: "BE. CSE (AI & ML)",
      field: "Artificial Intelligence and Machine Learning",
      school: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
      year: "2023 - 2027",
      icon: Brain
    }
  ];

  const leadership = [
    {
      title: "Tech Lead",
      org: "AI Innovation Lab",
      desc: "Leading a team of 12 engineers in developing next-gen ML solutions",
      icon: Users
    },
    {
      title: "Open Source Maintainer",
      org: "ML Framework Contributors",
      desc: "Managing community of 5K+ developers and 50+ contributors",
      icon: Code
    },
    {
      title: "Conference Speaker",
      org: "Global Tech Events",
      desc: "Keynote speaker at 15+ international AI/ML conferences",
      icon: Trophy
    }
  ];

  return (
    <section id="about" className="w-full px-6 py-32 bg-neutral-100">
      <div className="max-w-4xl mx-auto space-y-32">
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-black"></div>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="opacity-80">
            <path d="M0 6L5 0L10 6L15 0L20 6" stroke="black" strokeWidth="1"/>
            <path d="M0 6L5 12L10 6L15 12L20 6" stroke="black" strokeWidth="1"/>
          </svg>
          <div className="w-8 h-px bg-black"></div>
        </div>

        {/* Skills */}
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-6 text-left md:text-center">
                <div className="flex justify-start md:justify-center">
                  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center bg-white">
                    <skill.icon className="w-5 h-5 text-black" />
                  </div>
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-black">
                  {skill.name}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bio with Gallery - Desktop: Side by Side, Mobile: Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16">
          
          {/* Gallery - Left Side (Desktop) / Top (Mobile) */}
          <div className="w-full">
            {/* Mobile & Tablet Layout */}
            <div className="grid lg:hidden grid-cols-2 gap-3">
              {/* Slot 1 - Portrait */}
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md bg-neutral-100 relative">
                <img
                  key={`mobile-${visibleImages[0]}`}
                  src={images[visibleImages[0]]}
                  alt="Gallery 1"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ 
                    animation: transitioning[0] ? 'none' : 'slideFromLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: transitioning[0] ? 0 : 1,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
                  }}
                />
              </div>

              {/* Slot 2 - Portrait (offset vertically) */}
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md bg-neutral-100 mt-8 relative">
                <img
                  key={`mobile-${visibleImages[1]}`}
                  src={images[visibleImages[1]]}
                  alt="Gallery 2"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ 
                    animation: transitioning[1] ? 'none' : 'slideFromRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: transitioning[1] ? 0 : 1,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
                  }}
                />
              </div>

              {/* Slot 3 - Portrait (offset vertically opposite) */}
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md bg-neutral-100 -mt-4 relative">
                <img
                  key={`mobile-${visibleImages[2]}`}
                  src={images[visibleImages[2]]}
                  alt="Gallery 3"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ 
                    animation: transitioning[2] ? 'none' : 'slideFromTop 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: transitioning[2] ? 0 : 1,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
                  }}
                />
              </div>

              {/* Slot 4 - Portrait */}
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md bg-neutral-100 relative">
                <img
                  key={`mobile-${visibleImages[3]}`}
                  src={images[visibleImages[3]]}
                  alt="Gallery 4"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ 
                    animation: transitioning[3] ? 'none' : 'slideFromBottom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: transitioning[3] ? 0 : 1,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
                  }}
                />
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Slot 1 - Portrait */}
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-neutral-100 relative">
                <img
                  key={`desktop-${visibleImages[0]}`}
                  src={images[visibleImages[0]]}
                  alt="Gallery 1"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ 
                    animation: transitioning[0] ? 'none' : 'slideFromLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: transitioning[0] ? 0 : 1,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
                  }}
                />
              </div>

              {/* Slot 2 - Portrait (offset down) */}
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-neutral-100 mt-12 relative">
                <img
                  key={`desktop-${visibleImages[1]}`}
                  src={images[visibleImages[1]]}
                  alt="Gallery 2"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ 
                    animation: transitioning[1] ? 'none' : 'slideFromRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: transitioning[1] ? 0 : 1,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
                  }}
                />
              </div>

              {/* Slot 3 - Portrait (offset up) */}
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-neutral-100 -mt-8 relative">
                <img
                  key={`desktop-${visibleImages[2]}`}
                  src={images[visibleImages[2]]}
                  alt="Gallery 3"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ 
                    animation: transitioning[2] ? 'none' : 'slideFromTop 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: transitioning[2] ? 0 : 1,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
                  }}
                />
              </div>

              {/* Slot 4 - Portrait */}
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-neutral-100 mt-4 relative">
                <img
                  key={`desktop-${visibleImages[3]}`}
                  src={images[visibleImages[3]]}
                  alt="Gallery 4"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ 
                    animation: transitioning[3] ? 'none' : 'slideFromBottom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: transitioning[3] ? 0 : 1,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bio Text - Right Side (Desktop) / Bottom (Mobile) */}
          <div className="space-y-8">
            <p className="text-xs text-neutral-700 leading-relaxed">
              Hello! I'm a passionate Machine Learning Engineer with expertise in building intelligent systems that solve real-world problems. With a background in both ML/AI and full-stack development, I bring a unique perspective to every project.
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              My goal is to create products that leverage cutting-edge AI technology while maintaining exceptional user experiences. I enjoy tackling complex problems and finding elegant solutions through code and machine learning algorithms.
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-black"></div>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="opacity-80">
            <path d="M0 6L5 0L10 6L15 0L20 6" stroke="black" strokeWidth="1"/>
            <path d="M0 6L5 12L10 6L15 12L20 6" stroke="black" strokeWidth="1"/>
          </svg>
          <div className="w-8 h-px bg-black"></div>
        </div>

        {/* Education */}
        <div className="space-y-16">
          <h3 className="text-left md:text-center text-sm font-semibold uppercase tracking-wider text-black">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {education.map((edu, idx) => (
              <div key={idx} className="text-left md:text-center space-y-4">
                <div className="flex justify-start md:justify-center mb-6">
                  <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white">
                    <edu.icon className="w-4 h-4 text-black" />
                  </div>
                </div>
                <div className="text-xs font-semibold text-black">{edu.degree}</div>
                <p className="text-xs text-neutral-600">{edu.field}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{edu.school}</p>
                <div className="text-xs text-neutral-400">{edu.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="space-y-16">
          <h3 className="text-left md:text-center text-sm font-semibold uppercase tracking-wider text-black">
            Leadership & Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {leadership.map((role, idx) => (
              <div key={idx} className="text-left md:text-center space-y-4">
                <div className="flex justify-start md:justify-center mb-6">
                  <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white">
                    <role.icon className="w-4 h-4 text-black" />
                  </div>
                </div>
                <h4 className="text-xs font-semibold text-black">{role.title}</h4>
                <p className="text-xs text-neutral-600">{role.org}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-black"></div>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="opacity-80">
            <path d="M0 6L5 0L10 6L15 0L20 6" stroke="black" strokeWidth="1"/>
            <path d="M0 6L5 12L10 6L15 12L20 6" stroke="black" strokeWidth="1"/>
          </svg>
          <div className="w-8 h-px bg-black"></div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100%) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(100%) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideFromTop {
          0% {
            opacity: 0;
            transform: translateY(-100%) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideFromBottom {
          0% {
            opacity: 0;
            transform: translateY(100%) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}