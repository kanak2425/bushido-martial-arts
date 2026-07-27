import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Calendar, Play, Volume2, VolumeX } from 'lucide-react';
import { isAudioMuted, toggleAudioMute } from '../utils/audio';

interface NavbarProps {
  onBookTrialClick: () => void;
  onReplayIntroClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookTrialClick, onReplayIntroClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(isAudioMuted());
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: '3D Gear', href: '#gear3d' },
    { name: 'Belts', href: '#belts' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Membership', href: '#membership' },
    { name: 'Success', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#location' },
  ];

  const handleAudioToggle = () => {
    const isMutedNow = toggleAudioMute();
    setMuted(isMutedNow);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B0000] to-[#5E0000] border border-[#D4AF37] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-black tracking-wider text-white group-hover:text-[#D4AF37] transition-colors leading-none">
              BUSHIDO
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold mt-0.5">
              Martial Arts Academy
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#F5F5F5]/80 hover:text-[#D4AF37] uppercase tracking-wider transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onReplayIntroClick}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-[#D4AF37] border border-white/10 text-xs flex items-center gap-1.5 transition-colors"
            title="Replay Opening Cinematic Dojo Doors"
          >
            <Play className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden lg:inline text-[11px] uppercase tracking-wider font-semibold">Intro</span>
          </button>

          <button
            onClick={handleAudioToggle}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-[#D4AF37] border border-white/10 text-xs flex items-center gap-1.5 transition-colors"
            title="Toggle Dojo SFX"
          >
            {muted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
          </button>

          <button
            onClick={onBookTrialClick}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#8B0000] to-[#A31818] hover:from-[#A31818] hover:to-[#8B0000] text-white font-bold text-xs uppercase tracking-wider border border-[#D4AF37]/50 shadow-lg shadow-[#8B0000]/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            Book Free Trial
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onBookTrialClick}
            className="px-3 py-1.5 rounded-md bg-[#8B0000] text-white text-xs font-bold border border-[#D4AF37]/40"
          >
            Trial
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-white border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0B0B]/98 border-b border-[#D4AF37]/20 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-white/5 text-xs font-semibold uppercase text-white/90 hover:text-[#D4AF37] hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntroClick();
              }}
              className="flex-1 py-2.5 bg-white/5 text-xs uppercase font-semibold text-white/80 rounded-lg border border-white/10 flex items-center justify-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 text-[#D4AF37]" />
              Replay Intro
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookTrialClick();
              }}
              className="flex-1 py-2.5 bg-[#8B0000] text-xs uppercase font-bold text-white rounded-lg border border-[#D4AF37]/50 shadow-md flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              Book Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
