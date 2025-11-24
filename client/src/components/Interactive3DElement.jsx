import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Interactive3DComponent() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const cubeRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create 3D object (rounded cube with gradient material)
    const geometry = new THREE.BoxGeometry(2, 2, 2, 10, 10, 10);
    
    // Create gradient material
    const material = new THREE.MeshPhongMaterial({
      color: 0x4f46e5,
      shininess: 100,
      specular: 0x444444
    });
    
    const cube = new THREE.Mesh(geometry, material);
    cubeRef.current = cube;
    scene.add(cube);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x6366f1, 0.4);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Gentle auto-rotation when not dragging
      if (!isDraggingRef.current) {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Mouse events for desktop
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;

      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      cube.rotation.y += deltaX * 0.01;
      cube.rotation.x += deltaY * 0.01;

      previousMousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
      isDraggingRef.current = true;
      const touch = e.touches[0];
      previousMousePositionRef.current = {
        x: touch.clientX,
        y: touch.clientY
      };
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();

      const touch = e.touches[0];
      const deltaX = touch.clientX - previousMousePositionRef.current.x;
      const deltaY = touch.clientY - previousMousePositionRef.current.y;

      cube.rotation.y += deltaX * 0.01;
      cube.rotation.x += deltaY * 0.01;

      previousMousePositionRef.current = {
        x: touch.clientX,
        y: touch.clientY
      };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    // Add event listeners
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseleave', handleMouseUp);
    
    renderer.domElement.addEventListener('touchstart', handleTouchStart, { passive: false });
    renderer.domElement.addEventListener('touchmove', handleTouchMove, { passive: false });
    renderer.domElement.addEventListener('touchend', handleTouchEnd);

    // Handle window resize
    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('mouseleave', handleMouseUp);
      renderer.domElement.removeEventListener('touchstart', handleTouchStart);
      renderer.domElement.removeEventListener('touchmove', handleTouchMove);
      renderer.domElement.removeEventListener('touchend', handleTouchEnd);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
            Interactive 3D Element
          </h1>
          <p className="text-sm md:text-lg text-gray-600">
            {isMobile ? 'Touch and drag to rotate' : 'Click and drag to rotate'}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div 
            ref={containerRef} 
            className="w-full h-[400px] md:h-[600px] cursor-move touch-none"
            style={{ touchAction: 'none' }}
          />
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="text-indigo-600 text-2xl md:text-3xl mb-2">🖱️</div>
            <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Desktop Control</h3>
            <p className="text-xs md:text-sm text-gray-600">Click and drag to rotate the 3D object</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="text-indigo-600 text-2xl md:text-3xl mb-2">📱</div>
            <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Mobile Control</h3>
            <p className="text-xs md:text-sm text-gray-600">Touch and swipe to rotate the 3D object</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="text-indigo-600 text-2xl md:text-3xl mb-2">✨</div>
            <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Auto Rotate</h3>
            <p className="text-xs md:text-sm text-gray-600">Releases automatically rotate when idle</p>
          </div>
        </div>
      </div>
    </div>
  );
}