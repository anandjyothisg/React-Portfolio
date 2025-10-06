// src/components/Contact.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-extralight text-slate-900 tracking-tight">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="backdrop-blur-lg bg-white/40 rounded-3xl p-16 border border-white/30 shadow-xl">
          <div className="space-y-8">
            <p className="text-xl text-slate-700 text-center font-light leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            
            <div className="flex justify-center gap-6 pt-8">
              <a href="mailto:your@email.com" className="backdrop-blur-md bg-white/60 hover:bg-white/80 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:scale-110 shadow-lg">
                <Mail className="w-7 h-7 text-slate-700" />
              </a>
              <a href="https://github.com" className="backdrop-blur-md bg-white/60 hover:bg-white/80 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:scale-110 shadow-lg">
                <Github className="w-7 h-7 text-slate-700" />
              </a>
              <a href="https://linkedin.com" className="backdrop-blur-md bg-white/60 hover:bg-white/80 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:scale-110 shadow-lg">
                <Linkedin className="w-7 h-7 text-slate-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}