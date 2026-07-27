import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Award, Quote, Star, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

export const StudentSuccessSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
            <Sparkles className="w-3.5 h-3.5" />
            Real Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            Student Success & <span className="gold-gradient-text">Victories</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#F5F5F5]/70">
            Read inspiring journeys from students and parents who discovered focus, fitness, and lifelong martial arts discipline.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40 flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-xs text-[#F5F5F5]/85 italic leading-relaxed">
                  "{t.quote}"
                </p>

                {/* Before & After Box */}
                {t.beforeAfterStory && (
                  <div className="p-3 bg-black/60 rounded-xl border border-white/10 space-y-1 text-[11px]">
                    <div className="text-[#FF6B6B]">
                      <span className="font-bold">Before:</span> {t.beforeAfterStory.before}
                    </div>
                    <div className="text-[#D4AF37]">
                      <span className="font-bold">Now:</span> {t.beforeAfterStory.after}
                    </div>
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold font-cinzel text-white">{t.name}</div>
                  <div className="text-[11px] text-[#D4AF37] font-semibold">{t.role}</div>
                  <div className="text-[10px] text-[#F5F5F5]/50">{t.program} • {t.beltRank}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="glass-panel p-8 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#1C1C1C] via-[#121212] to-[#0B0B0B] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 space-y-1 border-b md:border-b-0 md:border-r border-white/10">
            <TrendingUp className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
            <div className="text-3xl font-black font-cinzel text-white">98.4%</div>
            <div className="text-xs text-[#F5F5F5]/70">Student Retention & Belt Goal Rate</div>
          </div>

          <div className="p-4 space-y-1 border-b md:border-b-0 md:border-r border-white/10">
            <Award className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
            <div className="text-3xl font-black font-cinzel text-white">120+</div>
            <div className="text-xs text-[#F5F5F5]/70">Certified Black Belts Awarded</div>
          </div>

          <div className="p-4 space-y-1">
            <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
            <div className="text-3xl font-black font-cinzel text-white">Zero Injury</div>
            <div className="text-xs text-[#F5F5F5]/70">Pro Mat Safety Standards & Protocol</div>
          </div>
        </div>
      </div>
    </section>
  );
};
