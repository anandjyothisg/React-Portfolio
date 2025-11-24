// App.jsx - With Interactive 3D Element
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Interactive3DElement from './components/Interactive3DElement';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Preload all images while loader is showing
  useEffect(() => {
    const preloadImages = () => {
      // Add all your image paths here
      const imagePaths = [
        // Gallery images (now in About section)
        '/images/8.jpg',
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
        '/images/6.jpg',
        '/images/7.jpg',
        // Add other images from Hero, Projects sections here
      ];

      // Create image elements to trigger browser preloading
      imagePaths.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    // Start preloading immediately
    preloadImages();
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Small delay to ensure loader exits before content fades in
    setTimeout(() => {
      setShowContent(true);
    }, 1000); // Match the loader's fade-out duration
  };

  return (
    <>
      {/* Loader */}
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      
      {/* Main Content with fade-in animation */}
      <div 
        className={`w-screen min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Header />
        <Hero />
        <Interactive3DElement />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}