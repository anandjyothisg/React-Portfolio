// App.jsx - Your updated App component
import { useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Small delay to ensure loader exits before content fades in
    setTimeout(() => {
      setShowContent(true);
    }, 500);
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
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}