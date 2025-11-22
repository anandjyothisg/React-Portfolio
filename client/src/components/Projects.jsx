import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

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
      title: "Deeptron",
      description: "A deepfake classification model that classifies real and deepfake videos through the links or through direct media upload.",
      tech: ["React", "Firebase", "Tailwind", "TypeScript"],
      link: "#",
      github: "https://github.com/anandjyothisg/Deeptron---Deepfake-Analysis",
      image: "/images/Deeptron.png"
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
    const observers = projectRefs.current.map((ref, idx) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleProjects((prev) => [...new Set([...prev, idx])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-32 bg-neutral-50">
      <div className="max-w-7xl w-full space-y-32">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 opacity-0 animate-fadeIn">
          <div className="w-12 h-px bg-black"></div>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-black">
            <path d="M2 6L6 2M6 2L10 6M6 2V10M14 6L18 10M18 10L22 6M18 10V2" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <div className="w-12 h-px bg-black"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-40">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              ref={(el) => (projectRefs.current[idx] = el)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                idx % 2 === 0 ? '' : 'lg:grid-flow-dense'
              } ${
                visibleProjects.includes(idx)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Image */}
              <div 
                className={`${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} transition-all duration-1000 delay-200 ${
                  visibleProjects.includes(idx)
                    ? 'opacity-100 translate-x-0'
                    : idx % 2 === 0
                    ? 'opacity-0 translate-x-20'
                    : 'opacity-0 -translate-x-20'
                }`}
              >
                <div className="relative overflow-hidden bg-neutral-200 aspect-[4/3] group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div 
                className={`space-y-8 ${idx % 2 === 0 ? 'lg:order-1 lg:pr-12' : 'lg:order-2 lg:pl-12'} transition-all duration-1000 delay-300 ${
                  visibleProjects.includes(idx)
                    ? 'opacity-100 translate-x-0'
                    : idx % 2 === 0
                    ? 'opacity-0 -translate-x-20'
                    : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-light tracking-wide text-black uppercase">
                    {project.title}
                  </h3>
                  
                  <div className={`h-px bg-black transition-all duration-1000 delay-500 ${
                    visibleProjects.includes(idx) ? 'w-16' : 'w-0'
                  }`}></div>
                  
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`text-xs text-neutral-500 px-3 py-1.5 border border-neutral-300 transition-all duration-500 ${
                        visibleProjects.includes(idx)
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
                <div className="flex gap-6 pt-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-xs uppercase tracking-widest text-black hover:text-neutral-500 transition-all duration-500 ${
                      visibleProjects.includes(idx)
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
                      visibleProjects.includes(idx)
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
          ))}
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