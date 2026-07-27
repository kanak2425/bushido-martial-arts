import React from 'react';
import { Calendar, ChevronRight, Award, Shield, Users, Star } from 'lucide-react';
import { ThreeHeroBelt } from './ThreeHeroBelt';
import heroBgImg from '../assets/images/dojo_hero_banner_1784882705863.jpg';

interface HeroSectionProps {
  onBookTrialClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookTrialClick }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Photograph (Completely stable, no movement) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Martial artists training in dojo"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.15]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#8B0000]/30 border border-[#D4AF37]/40 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Bushido Academy • Est. 2008
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-cinzel tracking-tight text-white leading-none">
                Master Discipline.
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-cinzel tracking-tight gold-gradient-text leading-none">
                Build Confidence.
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-cinzel tracking-tight text-white leading-none">
                Train Like a Champion.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-[#F5F5F5]/85 max-w-2xl font-normal leading-relaxed">
              Professional martial arts training for children, teens, and adults in a safe, disciplined, and inspiring environment.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookTrialClick}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#8B0000] via-[#A31818] to-[#8B0000] hover:from-[#A31818] hover:to-[#8B0000] text-white font-extrabold text-sm uppercase tracking-wider border border-[#D4AF37] shadow-xl shadow-[#8B0000]/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <span>Book Your Free Trial</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#programs"
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider border border-white/20 backdrop-blur-md transition-all hover:border-[#D4AF37]/50 flex items-center justify-center gap-2"
              >
                View Programs
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#8B0000]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold font-cinzel text-white leading-none">3,000+</div>
                  <div className="text-[11px] text-[#F5F5F5]/60 mt-0.5">Active Students</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#8B0000]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold font-cinzel text-white leading-none">15+ Yrs</div>
                  <div className="text-[11px] text-[#F5F5F5]/60 mt-0.5">Dojo Legacy</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#8B0000]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Star className="w-5 h-5 fill-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-lg font-bold font-cinzel text-white leading-none">4.9 / 5</div>
                  <div className="text-[11px] text-[#F5F5F5]/60 mt-0.5">500+ Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Floating Black Belt Model */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-md glass-panel p-4 rounded-3xl border border-[#D4AF37]/30 shadow-2xl relative">
              <ThreeHeroBelt />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
