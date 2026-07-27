import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Gear3DItem } from '../types';
import { GEAR_3D_ITEMS } from '../data/mockData';
import { RotateCcw, Sparkles, Shield, Award, CheckCircle2 } from 'lucide-react';

export const ThreeGearViewer: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Gear3DItem>(GEAR_3D_ITEMS[0]);
  const mountRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const objectGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const goldSpotLight = new THREE.SpotLight(0xd4af37, 7);
    goldSpotLight.position.set(6, 6, 6);
    scene.add(goldSpotLight);

    const rimLight = new THREE.DirectionalLight(0x8b0000, 3);
    rimLight.position.set(-5, -3, -5);
    scene.add(rimLight);

    const objectGroup = new THREE.Group();
    scene.add(objectGroup);
    objectGroupRef.current = objectGroup;

    // Build model based on selected item type
    build3DModel(selectedItem.type, objectGroup);

    // Mouse drag rotation controls
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !objectGroupRef.current) return;

      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      objectGroupRef.current.rotation.y += deltaX * 0.01;
      objectGroupRef.current.rotation.x += deltaY * 0.01;

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !objectGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      objectGroupRef.current.rotation.y += deltaX * 0.01;
      objectGroupRef.current.rotation.x += deltaY * 0.01;

      previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    domElem.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (objectGroupRef.current && !isDraggingRef.current) {
        objectGroupRef.current.rotation.y += 0.005;
        objectGroupRef.current.position.y = Math.sin(elapsedTime * 1.5) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      domElem.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [selectedItem]);

  const resetRotation = () => {
    if (objectGroupRef.current) {
      objectGroupRef.current.rotation.set(0, 0, 0);
      objectGroupRef.current.position.set(0, 0, 0);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive 3D Artifacts
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-cinzel text-white">
          The Sacred Gear of <span className="gold-gradient-text">The Warrior</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#F5F5F5]/70">
          Rotate and inspect authentic 3D models of traditional martial arts equipment, weapons, and honor symbols.
        </p>
      </div>

      {/* Item Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {GEAR_3D_ITEMS.map((item) => {
          const isActive = selectedItem.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                isActive
                  ? 'bg-gradient-to-r from-[#8B0000] to-[#5E0000] text-white border-[#D4AF37] shadow-lg shadow-[#8B0000]/30'
                  : 'bg-[#1C1C1C]/80 text-[#F5F5F5]/70 border-white/10 hover:border-[#D4AF37]/50 hover:text-white'
              }`}
            >
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* 3D Canvas + Info Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/20 shadow-2xl">
        {/* Left: 3D Canvas */}
        <div className="lg:col-span-7 relative min-h-[400px] sm:min-h-[480px] bg-gradient-to-b from-[#111111] to-[#0B0B0B] rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
          <div ref={mountRef} className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing" />

          {/* Controls overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs text-[#D4AF37] border border-[#D4AF37]/30 font-cinzel">
              {selectedItem.japaneseName}
            </span>
            <button
              onClick={resetRotation}
              className="pointer-events-auto px-3 py-1.5 bg-black/70 hover:bg-[#8B0000] text-white rounded-lg text-xs flex items-center gap-1.5 border border-white/10 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset View
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/70 backdrop-blur-md rounded-full text-xs text-white/80 border border-white/10 flex items-center gap-2 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            Click & Drag to Orbit 3D Model
          </div>
        </div>

        {/* Right: Item Details */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              {selectedItem.japaneseName}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-white mt-1">
              {selectedItem.name}
            </h3>
            <p className="text-sm italic text-[#FF6B6B] mt-1 font-medium">
              "{selectedItem.tagline}"
            </p>
          </div>

          <p className="text-sm text-[#F5F5F5]/80 leading-relaxed">
            {selectedItem.description}
          </p>

          <div className="p-4 bg-black/40 rounded-xl border border-[#D4AF37]/20">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              <Shield className="w-4 h-4 text-[#8B0000]" />
              Martial Arts Significance
            </div>
            <p className="text-xs text-[#F5F5F5]/90 italic leading-relaxed">
              "{selectedItem.significance}"
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]/60 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              Material Specifications
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {selectedItem.materialSpecs.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-[#F5F5F5]/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Procedural 3D Builder Helper
function build3DModel(type: Gear3DItem['type'], group: THREE.Group) {
  // Clear existing children
  while (group.children.length > 0) {
    group.remove(group.children[0]);
  }

  const blackMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4, metalness: 0.1 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0x8b0000, roughness: 0.3 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xe0e0e0, metalness: 0.95, roughness: 0.1 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c3a21, roughness: 0.7 });

  if (type === 'belt') {
    const knot = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.22, 24, 100), blackMat);
    knot.rotation.x = Math.PI / 3;
    group.add(knot);

    const tail1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 2.2, 16), blackMat);
    tail1.position.set(-0.6, -1.2, 0.2);
    tail1.rotation.z = 0.25;
    group.add(tail1);

    const tail2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 2.2, 16), blackMat);
    tail2.position.set(0.6, -1.2, -0.2);
    tail2.rotation.z = -0.25;
    group.add(tail2);

    for (let i = 0; i < 4; i++) {
      const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.205, 0.205, 0.08, 16), goldMat);
      stripe.position.set(0, -0.6 - i * 0.15, 0);
      tail2.add(stripe);
    }
  } else if (type === 'gloves') {
    const gloveLeft = new THREE.Mesh(new THREE.SphereGeometry(1.0, 32, 32), redMat);
    gloveLeft.scale.set(1, 1.2, 0.8);
    gloveLeft.position.set(-0.8, 0, 0);
    group.add(gloveLeft);

    const cuffLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.8, 24), blackMat);
    cuffLeft.position.set(-0.8, -1.1, 0);
    group.add(cuffLeft);

    const gloveRight = gloveLeft.clone();
    gloveRight.position.set(0.8, 0, 0);
    group.add(gloveRight);

    const cuffRight = cuffLeft.clone();
    cuffRight.position.set(0.8, -1.1, 0);
    group.add(cuffRight);
  } else if (type === 'katana') {
    // Blade
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.2, 0.2), steelMat);
    blade.position.set(0, 0.8, 0);
    group.add(blade);

    // Tsuba (Guard)
    const tsuba = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.08, 32), goldMat);
    tsuba.position.set(0, -0.8, 0);
    group.add(tsuba);

    // Handle (Tsuka)
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.2, 16), blackMat);
    handle.position.set(0, -1.4, 0);
    group.add(handle);

    // Pommel
    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), goldMat);
    pommel.position.set(0, -2.0, 0);
    group.add(pommel);

    group.rotation.z = -Math.PI / 4;
  } else if (type === 'pads') {
    const pad = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 0.35), redMat);
    group.add(pad);

    const targetRing = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.45, 32), goldMat);
    targetRing.position.set(0, 0, 0.18);
    group.add(targetRing);

    const strap = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 0.4), blackMat);
    strap.position.set(0, -0.3, -0.2);
    group.add(strap);
  } else if (type === 'trophy') {
    // Base
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.6, 1.4), woodMat);
    base.position.set(0, -1.5, 0);
    group.add(base);

    // Plaque
    const plaque = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.3, 0.05), goldMat);
    plaque.position.set(0, -1.5, 0.71);
    group.add(plaque);

    // Cup Stem
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 1.0, 16), goldMat);
    stem.position.set(0, -0.7, 0);
    group.add(stem);

    // Cup Body
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 0.2, 1.4, 24), goldMat);
    cup.position.set(0, 0.5, 0);
    group.add(cup);
  } else if (type === 'dummy') {
    // Main Trunk
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 3.2, 24), woodMat);
    group.add(trunk);

    // Arms
    const arm1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2, 12), woodMat);
    arm1.rotation.z = Math.PI / 3;
    arm1.position.set(-0.4, 0.6, 0.2);
    group.add(arm1);

    const arm2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2, 12), woodMat);
    arm2.rotation.z = -Math.PI / 3;
    arm2.position.set(0.4, 0.6, 0.2);
    group.add(arm2);

    const arm3 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.0, 12), woodMat);
    arm3.position.set(0, 0.1, 0.4);
    group.add(arm3);

    // Bent Leg
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.4, 12), woodMat);
    leg.position.set(0, -0.8, 0.5);
    leg.rotation.x = -Math.PI / 4;
    group.add(leg);
  }
}
