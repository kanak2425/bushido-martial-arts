import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { playCinematicDoorSound, isAudioMuted, toggleAudioMute } from '../utils/audio';
import { Volume2, VolumeX, Shield, Sparkles } from 'lucide-react';
import heroDojoBg from '../assets/images/dojo_hero_banner_1784882705863.jpg';

interface OpeningCinematicProps {
  onComplete: () => void;
  autoStart?: boolean;
}

export const OpeningCinematic: React.FC<OpeningCinematicProps> = ({ onComplete, autoStart = true }) => {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'opened' | 'finished'>('closed');
  const [muted, setMuted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMuted(isAudioMuted());
  }, []);

  // Handle Dust Particles inside sunlight beam
  useEffect(() => {
    if (phase === 'closed' || phase === 'finished') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: { x: number; y: number; size: number; speedY: number; opacity: number }[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedY: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.7 + 0.2,
      });
    }

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        if (p.y < 0) p.y = height;

        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [phase]);

  // Cinematic Sequence Timings
  useEffect(() => {
    if (!autoStart) return;

    // Phase 1: Hold dark doors for 0.6s then start opening
    const timer1 = setTimeout(() => {
      setPhase('opening');
      playCinematicDoorSound();
    }, 600);

    // Phase 2: Fully open doors at 2.6s
    const timer2 = setTimeout(() => {
      setPhase('opened');
    }, 2600);

    // Phase 3: Complete intro and hand control to main app at 4.2s
    const timer3 = setTimeout(() => {
      setPhase('finished');
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [autoStart, onComplete]);

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isMutedNow = toggleAudioMute();
    setMuted(isMutedNow);
  };

  const handleSkip = () => {
    setPhase('finished');
    onComplete();
  };

  if (phase === 'finished') return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#080808] overflow-hidden flex items-center justify-center select-none">
      {/* Background Dojo Interior (Stable, revealed as doors slide open) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={heroDojoBg}
          alt="Dojo interior"
          className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1]"
        />
        {/* Soft dark vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#080808]/50 to-[#080808]" />
      </div>

      {/* Floating Dust Particles in Sunlight */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
        <div className="w-[80vw] max-w-4xl h-full bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent blur-xl opacity-80" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      </div>

      {/* Left Wooden Shoji Door */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: phase === 'opening' || phase === 'opened' ? '-100%' : '0%' }}
        transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full z-20 bg-[#140D07] border-r-4 border-[#D4AF37]/40 shadow-2xl flex flex-col justify-between p-8"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(20,13,7,0.98) 0%, rgba(38,24,14,0.95) 100%), repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,175,55,0.08) 40px, rgba(212,175,55,0.08) 42px)',
        }}
      >
        <div className="text-right">
          <span className="text-4xl text-[#D4AF37]/20 font-cinzel tracking-widest">武士</span>
        </div>
        <div className="flex justify-end items-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/60 flex items-center justify-center bg-[#0B0B0B] shadow-inner">
            <Shield className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </div>
        <div>
          <span className="text-xs text-[#D4AF37]/40 uppercase tracking-widest font-mono">Dojo Gate L</span>
        </div>
      </motion.div>

      {/* Right Wooden Shoji Door */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: phase === 'opening' || phase === 'opened' ? '100%' : '0%' }}
        transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full z-20 bg-[#140D07] border-l-4 border-[#D4AF37]/40 shadow-2xl flex flex-col justify-between p-8"
        style={{
          backgroundImage: 'linear-gradient(-90deg, rgba(20,13,7,0.98) 0%, rgba(38,24,14,0.95) 100%), repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,175,55,0.08) 40px, rgba(212,175,55,0.08) 42px)',
        }}
      >
        <div>
          <span className="text-4xl text-[#D4AF37]/20 font-cinzel tracking-widest">道場</span>
        </div>
        <div className="flex justify-start items-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/60 flex items-center justify-center bg-[#0B0B0B] shadow-inner">
            <Shield className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-[#D4AF37]/40 uppercase tracking-widest font-mono">Dojo Gate R</span>
        </div>
      </motion.div>

      {/* Center Fade-in Logo & Headline */}
      <div className="relative z-30 text-center px-4 max-w-2xl mx-auto pointer-events-none">
        <AnimatePresence>
          {(phase === 'opening' || phase === 'opened') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B0000]/40 backdrop-blur-md rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-xs uppercase font-bold tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                World-Class Martial Arts
              </div>

              <h1 className="text-5xl sm:text-7xl font-black font-cinzel tracking-wider text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                武士道 <span className="gold-gradient-text">BUSHIDO</span>
              </h1>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-3" />

              <p className="text-2xl sm:text-3xl font-cinzel font-light text-[#F5F5F5] tracking-widest drop-shadow-md">
                Discipline Begins Here.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Control overlay buttons: Skip & Audio */}
      <div className="absolute top-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={handleMuteToggle}
          className="px-3.5 py-2 bg-black/60 hover:bg-[#8B0000] text-white/90 hover:text-white rounded-full backdrop-blur-md border border-white/10 text-xs flex items-center gap-2 transition-colors"
          title="Toggle Dojo Audio SFX"
        >
          {muted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
          <span>{muted ? 'Muted' : 'SFX On'}</span>
        </button>

        <button
          onClick={handleSkip}
          className="px-4 py-2 bg-[#D4AF37] hover:bg-[#b5932a] text-black font-bold rounded-full text-xs uppercase tracking-wider transition-transform active:scale-95 shadow-lg"
        >
          Enter Dojo →
        </button>
      </div>
    </div>
  );
};
