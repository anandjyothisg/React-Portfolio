// src/components/Projects.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack application with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "Machine learning powered content creation tool",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative workspace with real-time updates",
      tech: ["React", "Firebase", "Tailwind", "TypeScript"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-extralight text-slate-900 tracking-tight">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="backdrop-blur-lg bg-white/40 rounded-3xl p-10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-light text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="backdrop-blur-md bg-white/60 px-4 py-2 rounded-full text-sm text-slate-700 border border-white/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project.link} className="backdrop-blur-md bg-white/60 hover:bg-white/80 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 group-hover:scale-110">
                  <ExternalLink className="w-6 h-6 text-slate-700" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}