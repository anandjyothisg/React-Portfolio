import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);
  const observersRef = useRef([]);

  const projects = [
    {
      title: "NurtureMe",
      description: "A skin type classification model deployed using Django for Backend and HTML, CSS and JS for Frontend and integrated with Google Firebase for authentication.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "https://github.com/anandjyothisg/skin-type-recognition",
      image: "/images/Nurtureme.png"
    },
    {
      title: "Telemed",
      description: "A Telemedicine integration platform based idea for remote villages to get access with doctor's appointment and other medical supplies.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      link: "#",
      github: "https://github.com/anandjyothisg/Telemedicine",
      image: "/images/Telemed.png"
    },
    {
      title: "E-Commerce static webpage - Kumarran Vilas",
      description: "An E-commerce webpage designed and developed from the scratch with my own design and flow.",
      tech: ["Full-Stack", "React", "TailwindCSS","Node JS"],
      link: "#",
      github: "https://github.com/anandjyothisg/kumarran-vilas",
      image: "/images/Kumaranvilas.png"
    },
    {
      title: "Deeptron",
      description: "A deepfake classification model that classifies real and deepfake videos through the links or through direct media upload.",
      tech: ["React", "Firebase", "Tailwind", "TypeScript"],
      link: "#",
      github: "https://github.com/anandjyothisg/Deeptron---Deepfake-Analysis",
      image: "/images/Deeptron.png"
    },
    {
      title: "Aluminium Surface classification",
      description: "Trained a CNN Deep learning model to classify the aluminium surfaces based on their surface texture and smoothness",
      tech: ["Python", "Deep Learning", "CNN Model"],
      link: "#",
      github: "https://github.com/anandjyothisg/kumarran-vilas",
      image: "/images/Aluminium.jpeg"
    },
    {
      title: "Oxidative Stress Prediction",
      description: "Currently undergoing a research for predicting the oxidative stress using Machine Learning algorithms with the guidance of doctor's advice in Mirakle cancer treatment centre.",
      tech: ["Machine Learning", "Python", "Research"],
      link: "#",
      github: "https://github.com/anandjyothisg/Oxiscan",
      image: "/images/Oxiscan.png"
    }
  ];

  useEffect(() => {
    // Clear existing observers
    observersRef.current.forEach(observer => observer?.disconnect());
    observersRef.current = [];

    // Create new observers with optimized settings
    projectRefs.current.forEach((ref, idx) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleProjects((prev) => {
                const newSet = new Set(prev);
                newSet.add(idx);
                return newSet;
              });
              // Unobserve after visible to improve performance
              observer.unobserve(entry.target);
            }
          });
        },
        { 
          threshold: 0.15,
          rootMargin: '50px' // Load slightly before entering viewport
        }
      );

      observer.observe(ref);
      observersRef.current.push(observer);
    });

    return () => {
      observersRef.current.forEach(observer => observer?.disconnect());
      observersRef.current = [];
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-8 py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl w-full space-y-20 md:space-y-32">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 opacity-0 animate-fadeIn">
          <div className="w-12 h-px bg-black"></div>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-black">
            <path d="M2 6L6 2M6 2L10 6M6 2V10M14 6L18 10M18 10L22 6M18 10V2" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <div className="w-12 h-px bg-black"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-40">
          {projects.map((project, idx) => {
            const isVisible = visibleProjects.has(idx);
            const isEven = idx % 2 === 0;
            
            return (
              <div 
                key={idx}
                ref={(el) => (projectRefs.current[idx] = el)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }`}
              >
                {/* Image */}
                <div 
                  className={`${isEven ? 'lg:order-2' : 'lg:order-1'} transition-all duration-1000 delay-200 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : isEven
                      ? 'opacity-0 translate-x-20'
                      : 'opacity-0 -translate-x-20'
                  }`}
                >
                  <div className="relative overflow-hidden bg-neutral-200 aspect-[4/3] group">
                    {isVisible && (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-all duration-700"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-neutral-400 text-sm">Image unavailable</div>';
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div 
                  className={`space-y-6 md:space-y-8 ${isEven ? 'lg:order-1 lg:pr-8 xl:pr-12' : 'lg:order-2 lg:pl-8 xl:pl-12'} transition-all duration-1000 delay-300 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : isEven
                      ? 'opacity-0 -translate-x-20'
                      : 'opacity-0 translate-x-20'
                  }`}
                >
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl font-light tracking-wide text-black uppercase">
                      {project.title}
                    </h3>
                    
                    <div className={`h-px bg-black transition-all duration-1000 delay-500 ${
                      isVisible ? 'w-16' : 'w-0'
                    }`}></div>
                    
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`text-xs text-neutral-500 px-3 py-1.5 border border-neutral-300 transition-all duration-500 ${
                          isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${600 + i * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6 pt-2 md:pt-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-xs uppercase tracking-widest text-black hover:text-neutral-500 transition-all duration-500 ${
                        isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: '900ms' }}
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href={project.link}
                      className={`flex items-center gap-2 text-xs uppercase tracking-widest text-black hover:text-neutral-500 transition-all duration-500 ${
                        isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: '1000ms' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-black"></div>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-black">
            <path d="M2 6L6 2M6 2L10 6M6 2V10M14 6L18 10M18 10L22 6M18 10V2" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <div className="w-12 h-px bg-black"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}