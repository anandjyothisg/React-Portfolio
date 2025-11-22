import React from 'react';
import { Code, Sparkles, Rocket, Brain, GraduationCap, Users, Award, Trophy, Zap, Binary } from 'lucide-react';

export default function About() {
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

        {/* Bio */}
        <div className="text-left md:text-center space-y-8 max-w-2xl mx-auto py-16">
          <p className="text-xs text-neutral-700 leading-relaxed">
            Hello! I'm a passionate Machine Learning Engineer with expertise in building intelligent systems that solve real-world problems. With a background in both ML/AI and full-stack development, I bring a unique perspective to every project.
          </p>
          <p className="text-xs text-neutral-600 leading-relaxed">
            My goal is to create products that leverage cutting-edge AI technology while maintaining exceptional user experiences. I enjoy tackling complex problems and finding elegant solutions through code and machine learning algorithms.
          </p>
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
    </section>
  );
}