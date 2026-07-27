import React from 'react';
import { Shield, Award, Users, Trophy, Check } from 'lucide-react';
import instructorsPhoto from '../assets/images/dojo_instructors_1784882718932.jpg';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: '15+ Years Experience', sub: 'Rooted in authentic traditional Japanese Martial Arts', icon: Award, value: '15+' },
    { label: '3000+ Students Trained', sub: 'From ages 4 to 68 across all fitness backgrounds', icon: Users, value: '3,000+' },
    { label: 'Certified Instructors', sub: '100% International Black Belt Federation Certified', icon: Shield, value: 'Master Staff' },
    { label: 'National Champions', sub: 'Over 85 Gold Medals in State & World Competitions', icon: Trophy, value: '85+ Medals' },
  ];

  const bushidoVirtues = [
    { kanji: '義 (Gi)', name: 'Integrity & Justice' },
    { kanji: '勇 (Yū)', name: 'Heroic Courage' },
    { kanji: '仁 (Jin)', name: 'Compassion & Respect' },
    { kanji: '礼 (Rei)', name: 'Politeness & Courtesy' },
    { kanji: '誠 (Makoto)', name: 'Sincerity & Honesty' },
    { kanji: '名誉 (Meiyo)', name: 'Honor & Pride' },
    { kanji: '忠義 (Chūgi)', name: 'Loyalty & Duty' },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Large Realistic Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <img
                src={instructorsPhoto}
                alt="Bushido Martial Arts Master teaching students"
                className="w-full h-[480px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl border border-white/10">
                <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  Traditional Dojo Heritage
                </p>
                <p className="text-sm font-cinzel text-white mt-1">
                  "We do not teach fighting to create violence; we teach mastery so violence is never necessary."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphism Information Card & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
              <Shield className="w-3.5 h-3.5" />
              Our Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight leading-tight">
              A Sanctum of <span className="gold-gradient-text">Character, Honor</span> & Mastery
            </h2>

            <p className="text-base text-[#F5F5F5]/80 leading-relaxed">
              Founded in 2008 by Grandmaster Kenji Sato, Bushido Martial Arts Academy is dedicated to preserving the purest virtues of Japanese martial arts while integrating modern exercise science and self-defense mechanics.
            </p>

            <div className="glass-panel p-6 rounded-2xl border border-[#D4AF37]/20 space-y-4">
              <h3 className="text-lg font-bold font-cinzel text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B0000]" />
                The Seven Pillars of Bushido
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {bushidoVirtues.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#F5F5F5]/90">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="font-semibold text-white">{v.kanji}:</span>
                    <span className="text-[#F5F5F5]/70">{v.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B0000]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black font-cinzel text-white">{s.label}</div>
                <div className="text-xs text-[#F5F5F5]/70 mt-1 leading-relaxed">{s.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
