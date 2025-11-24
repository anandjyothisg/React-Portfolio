import React, { useState, useEffect } from 'react';

const Gallery = () => {
  // Your local images
  const images = [
    '/images/8.jpg',
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg'
  ];

  // State to track which image is shown in each slot
  const [visibleImages, setVisibleImages] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages(prev => {
        return prev.map(imageIndex => (imageIndex + 1) % images.length);
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 mb-8 sm:mb-12 lg:mb-16 text-center tracking-wide">
          Gallery
        </h1>
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-6 auto-rows-[120px]">
          {/* Slot 1 - Large rectangle top-left */}
          <div className="col-span-5 row-span-4 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              key={`desktop-${visibleImages[0]}`}
              src={images[visibleImages[0]]}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 2 - Tall rectangle center */}
          <div className="col-span-4 row-span-5 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              key={`desktop-${visibleImages[1]}`}
              src={images[visibleImages[1]]}
              alt="Gallery 2"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 3 - Small square top-right */}
          <div className="col-span-3 row-span-3 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              key={`desktop-${visibleImages[2]}`}
              src={images[visibleImages[2]]}
              alt="Gallery 3"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 4 - Wide rectangle bottom-left */}
          <div className="col-span-6 row-span-3 row-start-5 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              key={`desktop-${visibleImages[3]}`}
              src={images[visibleImages[3]]}
              alt="Gallery 4"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 5 - Medium rectangle middle-right */}
          <div className="col-span-3 row-span-4 row-start-4 col-start-10 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              key={`desktop-${visibleImages[4]}`}
              src={images[visibleImages[4]]}
              alt="Gallery 5"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 6 - Rectangle bottom-center */}
          <div className="col-span-6 row-span-3 row-start-6 col-start-4 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              key={`desktop-${visibleImages[5]}`}
              src={images[visibleImages[5]]}
              alt="Gallery 6"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-6 gap-5 auto-rows-[140px]">
          {/* Slot 1 */}
          <div className="col-span-3 row-span-3 overflow-hidden rounded-3xl shadow-xl bg-white">
            <img
              key={`tablet-${visibleImages[0]}`}
              src={images[visibleImages[0]]}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 2 */}
          <div className="col-span-3 row-span-2 overflow-hidden rounded-3xl shadow-xl bg-white">
            <img
              key={`tablet-${visibleImages[1]}`}
              src={images[visibleImages[1]]}
              alt="Gallery 2"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 3 */}
          <div className="col-span-2 row-span-2 row-start-3 overflow-hidden rounded-3xl shadow-xl bg-white">
            <img
              key={`tablet-${visibleImages[2]}`}
              src={images[visibleImages[2]]}
              alt="Gallery 3"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 4 */}
          <div className="col-span-4 row-span-3 row-start-3 col-start-3 overflow-hidden rounded-3xl shadow-xl bg-white">
            <img
              key={`tablet-${visibleImages[3]}`}
              src={images[visibleImages[3]]}
              alt="Gallery 4"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 5 */}
          <div className="col-span-3 row-span-2 row-start-5 overflow-hidden rounded-3xl shadow-xl bg-white">
            <img
              key={`tablet-${visibleImages[4]}`}
              src={images[visibleImages[4]]}
              alt="Gallery 5"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 6 */}
          <div className="col-span-3 row-span-2 row-start-6 col-start-4 overflow-hidden rounded-3xl shadow-xl bg-white">
            <img
              key={`tablet-${visibleImages[5]}`}
              src={images[visibleImages[5]]}
              alt="Gallery 6"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="grid md:hidden grid-cols-2 gap-4 auto-rows-[160px]">
          {/* Slot 1 */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              key={`mobile-${visibleImages[0]}`}
              src={images[visibleImages[0]]}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 2 */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              key={`mobile-${visibleImages[1]}`}
              src={images[visibleImages[1]]}
              alt="Gallery 2"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 3 */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              key={`mobile-${visibleImages[2]}`}
              src={images[visibleImages[2]]}
              alt="Gallery 3"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 4 */}
          <div className="col-span-1 row-span-1 row-start-5 overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              key={`mobile-${visibleImages[3]}`}
              src={images[visibleImages[3]]}
              alt="Gallery 4"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 5 */}
          <div className="col-span-2 row-span-1 row-start-6 overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              key={`mobile-${visibleImages[4]}`}
              src={images[visibleImages[4]]}
              alt="Gallery 5"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>

          {/* Slot 6 */}
          <div className="col-span-2 row-span-2 row-start-7 overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              key={`mobile-${visibleImages[5]}`}
              src={images[visibleImages[5]]}
              alt="Gallery 6"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{ animation: 'fadeScale 0.7s ease-out' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeScale {
          0% {
            opacity: 0;
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;