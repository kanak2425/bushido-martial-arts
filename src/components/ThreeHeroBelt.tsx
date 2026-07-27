import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroBeltProps {
  className?: string;
}

export const ThreeHeroBelt: React.FC<ThreeHeroBeltProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Golden Spotlight
    const goldSpotLight = new THREE.SpotLight(0xd4af37, 8);
    goldSpotLight.position.set(5, 5, 5);
    goldSpotLight.angle = Math.PI / 4;
    goldSpotLight.penumbra = 0.8;
    scene.add(goldSpotLight);

    // Deep Crimson Backlight
    const crimsonLight = new THREE.PointLight(0x8b0000, 5, 20);
    crimsonLight.position.set(-4, -3, -2);
    scene.add(crimsonLight);

    // Create 3D Black Belt Group
    const beltGroup = new THREE.Group();

    // Belt Knot Core
    const knotGeo = new THREE.TorusGeometry(1.2, 0.22, 24, 100);
    const beltMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.45,
      metalness: 0.1,
    });
    const knotMesh = new THREE.Mesh(knotGeo, beltMat);
    knotMesh.rotation.x = Math.PI / 3;
    beltGroup.add(knotMesh);

    // Belt Hanging Tails
    const tailGeo = new THREE.CylinderGeometry(0.2, 0.22, 2.2, 16);
    const tailLeft = new THREE.Mesh(tailGeo, beltMat);
    tailLeft.position.set(-0.6, -1.2, 0.2);
    tailLeft.rotation.z = 0.25;
    tailLeft.rotation.x = -0.2;
    beltGroup.add(tailLeft);

    const tailRight = new THREE.Mesh(tailGeo, beltMat);
    tailRight.position.set(0.6, -1.2, -0.2);
    tailRight.rotation.z = -0.25;
    tailRight.rotation.x = 0.2;
    beltGroup.add(tailRight);

    // Gold Silk Rank Stripes
    const stripeGeo = new THREE.CylinderGeometry(0.205, 0.205, 0.08, 16);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.2,
    });

    for (let i = 0; i < 4; i++) {
      const stripe = new THREE.Mesh(stripeGeo, goldMat);
      stripe.position.set(0, -0.6 - i * 0.15, 0);
      tailRight.add(stripe);
    }

    // Japanese Kanji Patch (Red emblem)
    const patchGeo = new THREE.BoxGeometry(0.3, 0.5, 0.04);
    const patchMat = new THREE.MeshStandardMaterial({
      color: 0x8b0000,
      roughness: 0.3,
    });
    const patch = new THREE.Mesh(patchGeo, patchMat);
    patch.position.set(0, -0.1, 0.2);
    tailLeft.add(patch);

    scene.add(beltGroup);

    // Subtle Floating Particles
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse tilt tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = x * 0.001;
      mouseY = y * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth floating motion
      beltGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      // Gentle continuous rotation
      targetX = mouseX * 0.8;
      targetY = mouseY * 0.8;

      beltGroup.rotation.y = elapsedTime * 0.4 + targetX;
      beltGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.1 + targetY;

      // Slowly rotate particles
      particles.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
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
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[380px] flex items-center justify-center ${className}`}>
      <div ref={mountRef} className="w-full h-full min-h-[380px] cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1.5 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
        Interactive 3D Silk Black Belt (Move mouse to rotate)
      </div>
    </div>
  );
};
