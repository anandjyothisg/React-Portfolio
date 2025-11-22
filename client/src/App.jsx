// App.jsx - Your updated App component
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>      
      <div className="w-screen min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}