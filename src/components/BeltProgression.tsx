import React, { useState } from 'react';
import { BELT_PROGRESSION_DATA } from '../data/mockData';
import { BeltInfo } from '../types';
import { Award, CheckCircle2, ChevronRight, Sparkles, BookOpen } from 'lucide-react';

export const BeltProgression: React.FC = () => {
  const [activeBeltIndex, setActiveBeltIndex] = useState<number>(0);
  const currentBelt: BeltInfo = BELT_PROGRESSION_DATA[activeBeltIndex];

  return (
    <section id="belts" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
            <Sparkles className="w-3.5 h-3.5" />
            Path of Mastery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            Belt Progression <span className="gold-gradient-text">Timeline</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#F5F5F5]/70">
            Click or scroll through the sacred ranks of traditional martial arts advancement—from open-minded beginner to black belt wisdom.
          </p>
        </div>

        {/* Timeline Belt Strip */}
        <div className="relative mb-12">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0 hidden md:block" />

          <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-4 relative z-10">
            {BELT_PROGRESSION_DATA.map((belt, idx) => {
              const isActive = idx === activeBeltIndex;
              return (
                <button
                  key={belt.color}
                  onClick={() => setActiveBeltIndex(idx)}
                  className={`flex-1 min-w-[120px] p-3 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 text-center group ${
                    isActive
                      ? 'bg-gradient-to-b from-[#1C1C1C] to-[#0B0B0B] border-[#D4AF37] shadow-xl shadow-[#8B0000]/30 scale-105'
                      : 'bg-black/60 border-white/10 hover:border-white/30 hover:scale-100'
                  }`}
                >
                  {/* Belt Fabric Swatch */}
                  <div
                    className="w-16 h-4 rounded-full border border-black/40 shadow-inner relative overflow-hidden flex items-center justify-end px-1"
                    style={{ backgroundColor: belt.hex }}
                  >
                    {idx === 6 && (
                      <div className="w-1.5 h-full bg-[#D4AF37]" title="Gold Rank Stripes" />
                    )}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                    {belt.color}
                  </span>

                  <span className="text-[10px] text-[#D4AF37] font-cinzel">
                    {belt.kanji}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Belt Detail Spotlight Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Belt Fabric Visual */}
            <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
              <div
                className="w-full max-w-xs h-16 rounded-xl border-2 border-[#D4AF37]/50 shadow-2xl flex items-center justify-between px-6 relative overflow-hidden"
                style={{ backgroundColor: currentBelt.hex, color: currentBelt.textHex }}
              >
                <span className="font-cinzel font-black text-lg">{currentBelt.kanji}</span>
                <span className="font-bold uppercase text-xs tracking-widest">{currentBelt.color}</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
                  {currentBelt.japaneseName}
                </span>
                <h3 className="text-2xl font-extrabold font-cinzel text-white">
                  {currentBelt.minMonths}
                </h3>
              </div>

              <div className="px-4 py-2 bg-black/60 rounded-xl border border-white/10 text-xs text-[#FF6B6B] font-medium">
                Mindset: "{currentBelt.mindset}"
              </div>
            </div>

            {/* Right: Core Requirements & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#8B0000]" />
                  Core Techniques Required for Promotion
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentBelt.coreTechniques.map((tech, i) => (
                    <div
                      key={i}
                      className="p-3 bg-black/50 rounded-xl border border-white/10 flex items-center gap-2.5 text-xs text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#8B0000]/10 rounded-xl border border-[#8B0000]/30 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  <BookOpen className="w-4 h-4" />
                  Philosophical Focus
                </div>
                <p className="text-xs text-[#F5F5F5]/90 italic leading-relaxed">
                  "{currentBelt.philosophicalFocus}"
                </p>
              </div>

              {/* Belt Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeBeltIndex === 0}
                  onClick={() => setActiveBeltIndex(Math.max(0, activeBeltIndex - 1))}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold uppercase text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  ← Previous Belt
                </button>

                <span className="text-xs text-[#F5F5F5]/60">
                  Rank {activeBeltIndex + 1} of 7
                </span>

                <button
                  disabled={activeBeltIndex === BELT_PROGRESSION_DATA.length - 1}
                  onClick={() => setActiveBeltIndex(Math.min(BELT_PROGRESSION_DATA.length - 1, activeBeltIndex + 1))}
                  className="px-4 py-2 rounded-lg bg-[#8B0000] hover:bg-[#A31818] text-xs font-bold uppercase text-white disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                >
                  <span>Next Belt</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
