// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="max-w-5xl w-full">
        <div className="backdrop-blur-lg bg-white/40 rounded-3xl p-20 border border-white/30 shadow-2xl">
          <div className="space-y-6">
            <div className="inline-block backdrop-blur-md bg-white/50 rounded-full px-6 py-2 border border-white/30">
              <p className="text-sm tracking-widest text-indigo-600 font-medium">WELCOME</p>
            </div>
            <h1 className="text-7xl font-extralight tracking-tight text-slate-900 leading-tight">
              Creative<br />
              <span className="font-light text-indigo-600">Developer</span>
            </h1>
            <p className="text-xl text-slate-600 font-light max-w-2xl leading-relaxed">
              Crafting beautiful digital experiences with clean code and elegant design
            </p>
            <div className="flex gap-4 pt-8">
              <a href="#contact" className="backdrop-blur-md bg-indigo-600/90 hover:bg-indigo-700/90 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Get in Touch
              </a>
              <a href="#projects" className="backdrop-blur-md bg-white/60 hover:bg-white/80 text-slate-800 px-8 py-4 rounded-full transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl">
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}