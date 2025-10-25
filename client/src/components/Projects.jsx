import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "NurtureMe",
      description: "A skin type classification model deployed using Django for Backend and HTML, CSS and JS for Frontend and integrated with Google Firebase for authentication.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "https://github.com/anandjyothisg/skin-type-recognition",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
      title: "Telemed",
      description: "A Telemedicine integartion platform based idea for remote villages to get acces with doctor's appointment and other medical supplies.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      link: "#",
      github: "https://github.com/anandjyothisg/Telemedicine",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      title: "Deeptron",
      description: "A deepfake classifiaction model that classifies real and deepfake videos through the links or through direct media upload.",
      tech: ["React", "Firebase", "Tailwind", "TypeScript"],
      link: "#",
      github: "https://github.com/anandjyothisg/Deeptron---Deepfake-Analysis",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
     {
      title: "Oxidative Stress Prediction",
      description: "Currently undergoing a research for predicting the oxidative stress using Machine Learning algorithms with the guidance of doctor's advice in Mirakle cancer treatment centre.",
      tech: ["React", "Firebase", "Tailwind", "TypeScript"],
      link: "#",
      github: "https://github.com/anandjyothisg/Oxiscan",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      title: "Oxidative Stress Prediction",
      description: "Currently undergoing a research for predicting the oxidative stress using Machine Learning algorithms with the guidance of doctor's advice in Mirakle cancer treatment centre.",
      tech: ["React", "Firebase", "Tailwind", "TypeScript"],
      link: "#",
      github: "https://github.com/anandjyothisg/Oxiscan",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    }   
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-7xl w-full space-y-12">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-extralight text-slate-900 tracking-tight">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="backdrop-blur-lg bg-white/40 rounded-3xl overflow-hidden border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              {/* Project Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Live Preview Button */}
                <a 
                  href={project.link}
                  className="absolute top-4 right-4 backdrop-blur-md bg-white/90 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 hover:scale-110 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 text-slate-700" />
                </a>
              </div>

              {/* Project Details */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-light text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="backdrop-blur-md bg-white/60 px-3 py-1.5 rounded-full text-sm text-slate-700 border border-white/30">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Animated GitHub Button */}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  <Github className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:rotate-12" />
                  <span className="relative z-10">View on GitHub</span>
                  <svg 
                    className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  
                  {/* Animated particles */}
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute w-2 h-2 bg-white/30 rounded-full top-1/2 left-1/4 animate-ping"></span>
                    <span className="absolute w-1.5 h-1.5 bg-white/40 rounded-full top-1/3 right-1/3 animate-ping animation-delay-150"></span>
                    <span className="absolute w-1 h-1 bg-white/30 rounded-full bottom-1/3 left-1/2 animate-ping animation-delay-300"></span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}