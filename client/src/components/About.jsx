// src/components/About.jsx
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Code, name: "Development", desc: "Full-stack development with modern frameworks" },
    { icon: Palette, name: "Design", desc: "UI/UX design with attention to detail" },
    { icon: Zap, name: "Performance", desc: "Optimized, lightning-fast applications" }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-extralight text-slate-900 tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="backdrop-blur-lg bg-white/40 rounded-3xl p-10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="backdrop-blur-md bg-white/60 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                <skill.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-3">{skill.name}</h3>
              <p className="text-slate-600 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="backdrop-blur-lg bg-white/40 rounded-3xl p-16 border border-white/30 shadow-xl mt-12">
          <p className="text-xl text-slate-700 leading-relaxed font-light text-center max-w-3xl mx-auto">
            I'm a passionate developer who loves building elegant solutions to complex problems. 
            With expertise in modern web technologies and a keen eye for design, I create 
            experiences that are both beautiful and functional.
          </p>
        </div>
      </div>
    </section>
  );
}