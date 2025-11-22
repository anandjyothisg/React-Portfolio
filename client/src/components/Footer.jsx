import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields');
      setTimeout(() => setStatus(''), 2000);
      return;
    }
    
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:anandjyothis57@gmail.com?subject=${subject}&body=${body}`;
    
    setStatus('Opening your email client...');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/forest.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/1 to-black/1"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-6xl md:text-7xl font-extralight text-white tracking-tight">
            Let's Connect
          </h2>
          <div className="w-24 h-0.5 bg-white/40 mx-auto"></div>
          <p className="text-lg text-white/80 font-light max-w-md mx-auto">
            Have a project in mind? Drop me a message.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            className="group w-full px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 rounded-xl text-white font-light tracking-wide transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {status && (
            <p className="text-center text-white/80 text-sm font-light">
              {status}
            </p>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm font-light">
            anandjyothis57@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}