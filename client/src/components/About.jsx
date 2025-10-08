import React from 'react';
import { Code, Palette, Zap, Sparkles, Rocket, Brain, GraduationCap, Users, Award, Trophy } from 'lucide-react';

export default function About() {
  const skills = [
    { 
      icon: Brain, 
      name: "Machine Learning", 
      desc: "Deep learning models, neural networks, and AI solutions",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Code, 
      name: "Development", 
      desc: "Full-stack development with modern frameworks",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Rocket, 
      name: "Deployment", 
      desc: "MLOps, cloud infrastructure, and scalable systems",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  const education = [
    {
      degree: "SSLC",
      field: "Secondary School",
      school: "Shri Vidhya Mandhir CBSE School, Pushpathur",
      year: "2019 - 2021",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "HSC",
      field: "Higher Secondary",
      school: "Shri Vidhya Mandhir CBSE School, Pushpathur",
      year: "2021 - 2023",
      icon: Award,
      color: "from-emerald-500 to-teal-500"
    },
    {
      degree: "B.A. (Hindi)",
      field: "Bachelor of Arts",
      school: "Dakshina Bharat Hindi Prachar Sabha",
      year: "2014 - 2018",
      icon: GraduationCap,
      color: "from-rose-500 to-orange-500"
    },
    {
      degree: "BE. CSE (AI & ML)",
      field: "Artificial Intelligence and Machine Learning",
      school: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
      year: "2023 - 2027",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const leadership = [
    {
      title: "Tech Lead",
      org: "AI Innovation Lab",
      desc: "Leading a team of 12 engineers in developing next-gen ML solutions",
      icon: Users,
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500"
    },
    {
      title: "Open Source Maintainer",
      org: "ML Framework Contributors",
      desc: "Managing community of 5K+ developers and 50+ contributors",
      icon: Code,
      gradient: "from-cyan-500 via-blue-500 to-indigo-500"
    },
    {
      title: "Conference Speaker",
      org: "Global Tech Events",
      desc: "Keynote speaker at 15+ international AI/ML conferences",
      icon: Trophy,
      gradient: "from-amber-500 via-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/80 backdrop-blur-sm border border-indigo-200/50 mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="group backdrop-blur-lg bg-white/40 rounded-2xl md:rounded-3xl p-8 md:p-10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/60"
            >
              <div className={`backdrop-blur-md bg-gradient-to-br ${skill.color} w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-light text-slate-900 mb-3">
                {skill.name}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="backdrop-blur-lg bg-white/40 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 border border-white/30 shadow-xl relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative z-10 space-y-6">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light text-center max-w-4xl mx-auto">
              Hello! I'm a passionate <span className="font-semibold text-indigo-700">Machine Learning Engineer</span> with expertise in building intelligent systems that solve real-world problems. With a background in both ML/AI and full-stack development, I bring a unique perspective to every project.
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light text-center max-w-3xl mx-auto">
              My goal is to create products that leverage cutting-edge AI technology while maintaining exceptional user experiences. I enjoy tackling complex problems and finding elegant solutions through code and machine learning algorithms.
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-8">
              {['Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js', 'AWS', 'Docker'].map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-indigo-200/50 text-sm font-medium text-slate-700 hover:bg-indigo-100/60 hover:border-indigo-300/50 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-extralight text-slate-900 tracking-tight">
              Education
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-rose-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {education.map((edu, idx) => (
              <div 
                key={idx}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/60 to-white/40 rounded-2xl md:rounded-3xl p-8 md:p-10 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-500">{edu.year}</div>
                    <h4 className="text-xl md:text-2xl font-semibold text-slate-900">{edu.degree}</h4>
                    <p className="text-base md:text-lg text-indigo-600 font-medium">{edu.field}</p>
                    <p className="text-sm md:text-base text-slate-600 pt-2">{edu.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-extralight text-slate-900 tracking-tight">
              Leadership & Impact
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {leadership.map((role, idx) => (
              <div 
                key={idx}
                className="group relative backdrop-blur-xl bg-white/50 rounded-2xl md:rounded-3xl p-8 md:p-10 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Animated gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-4">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <role.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">{role.title}</h4>
                    <p className="text-sm md:text-base font-medium text-indigo-600 mb-3">{role.org}</p>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}