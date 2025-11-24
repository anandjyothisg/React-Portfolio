import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Interactive3DComponent() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfafafa);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create model group
    const modelGroup = new THREE.Group();
    modelRef.current = modelGroup;

    // Create sophisticated donut/torus shape
    const torusGeometry = new THREE.TorusGeometry(1.8, 0.6, 32, 100);
    
    // Luxury black material with subtle metallic sheen
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.7,
      roughness: 0.25,
      envMapIntensity: 1.5
    });
    
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.castShadow = true;
    torus.receiveShadow = true;
    modelGroup.add(torus);

    // Add gold accent ring inside
    const accentGeometry = new THREE.TorusGeometry(1.8, 0.15, 16, 100);
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 1,
      roughness: 0.1,
      emissive: 0xd4af37,
      emissiveIntensity: 0.2
    });
    const accent = new THREE.Mesh(accentGeometry, accentMaterial);
    accent.castShadow = true;
    modelGroup.add(accent);

    // Center sphere with premium finish
    const sphereGeometry = new THREE.SphereGeometry(0.8, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x2c2c2c,
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 2
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    modelGroup.add(sphere);

    // Subtle detail spheres
    const detailGeometry = new THREE.SphereGeometry(0.12, 32, 32);
    const detailMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 1,
      roughness: 0.15,
      emissive: 0xd4af37,
      emissiveIntensity: 0.3
    });

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const detail = new THREE.Mesh(detailGeometry, detailMaterial);
      detail.position.set(
        Math.cos(angle) * 1.8,
        0,
        Math.sin(angle) * 1.8
      );
      detail.castShadow = true;
      modelGroup.add(detail);
    }

    scene.add(modelGroup);

    // Minimal shadow plane
    const shadowGeometry = new THREE.PlaneGeometry(8, 8);
    const shadowMaterial = new THREE.ShadowMaterial({
      opacity: 0.15
    });
    const shadowPlane = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -2;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Professional lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 50;
    keyLight.shadow.camera.left = -10;
    keyLight.shadow.camera.right = 10;
    keyLight.shadow.camera.top = 10;
    keyLight.shadow.camera.bottom = -10;
    scene.add(keyLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // Rim light
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 2, -8);
    scene.add(rimLight);

    // Accent lights for gold
    const accentLight1 = new THREE.PointLight(0xd4af37, 0.5, 10);
    accentLight1.position.set(3, 1, 3);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0xd4af37, 0.5, 10);
    accentLight2.position.set(-3, 1, -3);
    scene.add(accentLight2);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Subtle float
      modelGroup.position.y = Math.sin(time * 0.6) * 0.15;
      
      // Elegant rotation when not dragging
      if (!isDraggingRef.current) {
        modelGroup.rotation.y += 0.004;
        modelGroup.rotation.x = Math.sin(time * 0.4) * 0.05;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Mouse interaction
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

      modelGroup.rotation.y += deltaX * 0.008;
      modelGroup.rotation.x += deltaY * 0.008;

      previousMousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch interaction
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

      modelGroup.rotation.y += deltaX * 0.008;
      modelGroup.rotation.x += deltaY * 0.008;

      previousMousePositionRef.current = {
        x: touch.clientX,
        y: touch.clientY
      };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    // Event listeners
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseleave', handleMouseUp);
    
    renderer.domElement.addEventListener('touchstart', handleTouchStart, { passive: false });
    renderer.domElement.addEventListener('touchmove', handleTouchMove, { passive: false });
    renderer.domElement.addEventListener('touchend', handleTouchEnd);

    // Resize handler
    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('mouseleave', handleMouseUp);
      renderer.domElement.removeEventListener('touchstart', handleTouchStart);
      renderer.domElement.removeEventListener('touchmove', handleTouchMove);
      renderer.domElement.removeEventListener('touchend', handleTouchEnd);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center">
      <div className="w-full py-32 md:py-40 lg:py-48">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div 
            ref={containerRef} 
            className="w-full h-[450px] md:h-[650px] lg:h-[750px] cursor-move touch-none"
            style={{ touchAction: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}