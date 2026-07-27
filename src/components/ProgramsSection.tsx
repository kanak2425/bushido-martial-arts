import React, { useState } from 'react';
import { PROGRAMS_DATA } from '../data/mockData';
import { Program } from '../types';
import { ProgramModal } from './ProgramModal';
import { Shield, Clock, Users, ArrowUpRight } from 'lucide-react';

interface ProgramsSectionProps {
  onBookTrial: (programTitle?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onBookTrial }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
            <Shield className="w-3.5 h-3.5" />
            Curriculum of Discipline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            Our Elite <span className="gold-gradient-text">Training Programs</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#F5F5F5]/70">
            Engineered for all age brackets and athletic levels—from basic character building in young warriors to elite competition mastery.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS_DATA.map((program) => (
            <div
              key={program.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-[0.85]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-black/30" />

                  {/* Difficulty Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-[11px] font-bold uppercase rounded-md tracking-wider">
                      {program.difficulty}
                    </span>
                  </div>

                  {/* Age Group Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#8B0000]/80 backdrop-blur-md text-white border border-white/10 text-[11px] font-semibold rounded-md flex items-center gap-1">
                      <Users className="w-3 h-3 text-[#D4AF37]" />
                      {program.ageGroup}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold font-cinzel text-white group-hover:text-[#D4AF37] transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-xs text-[#D4AF37] font-semibold italic">
                    "{program.tagline}"
                  </p>

                  <p className="text-xs text-[#F5F5F5]/75 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs text-[#F5F5F5]/60 border-t border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{program.scheduleSnippet}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#8B0000] text-white font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBookTrial={(title) => onBookTrial(title)}
      />
    </section>
  );
};
