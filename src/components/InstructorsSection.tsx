import React, { useState } from 'react';
import { INSTRUCTORS_DATA } from '../data/mockData';
import { Instructor } from '../types';
import { Shield, Award, CheckCircle2, Quote, X, ChevronRight } from 'lucide-react';

export const InstructorsSection: React.FC = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  return (
    <section id="instructors" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
            <Shield className="w-3.5 h-3.5" />
            Master Pedigree
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            World-Class <span className="gold-gradient-text">Master Instructors</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#F5F5F5]/70">
            Learn directly from internationally recognized champions, hall of famers, and life-long practitioners of Budo.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS_DATA.map((instructor) => (
            <div
              key={instructor.id}
              onClick={() => setSelectedInstructor(instructor)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-72 w-full overflow-hidden bg-black">
                  <img
                    src={instructor.photo}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.9]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />

                  {/* Japanese Title Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-cinzel font-bold rounded-md shadow-lg">
                      {instructor.japaneseTitle}
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#8B0000]/90 text-white text-[11px] font-bold rounded-md flex items-center gap-1 border border-white/10">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {instructor.yearsExperience} Yrs Experience
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-cinzel text-white group-hover:text-[#D4AF37] transition-colors">
                    {instructor.name}
                  </h3>

                  <p className="text-xs text-[#D4AF37] font-semibold">
                    {instructor.rank}
                  </p>

                  <p className="text-xs text-[#F5F5F5]/75 line-clamp-2 leading-relaxed">
                    {instructor.specialization}
                  </p>
                </div>
              </div>

              {/* View Bio Trigger */}
              <div className="p-6 pt-0">
                <div className="py-2.5 px-4 rounded-xl bg-white/5 group-hover:bg-[#8B0000] text-xs font-bold uppercase tracking-wider text-white border border-white/10 flex items-center justify-between transition-colors">
                  <span>View Master Bio</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Modal */}
      {selectedInstructor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl glass-panel bg-[#121212] border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 my-8">
            <button
              onClick={() => setSelectedInstructor(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#8B0000] text-white flex items-center justify-center border border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={selectedInstructor.photo}
                alt={selectedInstructor.name}
                className="w-32 h-32 rounded-2xl object-cover border-2 border-[#D4AF37] shadow-xl shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  {selectedInstructor.japaneseTitle} • {selectedInstructor.yearsExperience} Years Dedicated Practice
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-white">
                  {selectedInstructor.name}
                </h3>
                <p className="text-xs text-[#FF6B6B] font-semibold">{selectedInstructor.rank}</p>
              </div>
            </div>

            <div className="p-4 bg-black/50 rounded-xl border border-[#D4AF37]/20 relative">
              <Quote className="w-6 h-6 text-[#D4AF37]/30 absolute top-2 right-3" />
              <p className="text-xs text-[#F5F5F5]/90 italic leading-relaxed">
                "{selectedInstructor.quote}"
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Master Bio</h4>
              <p className="text-xs text-[#F5F5F5]/80 leading-relaxed">{selectedInstructor.bio}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">Key Career Achievements</h4>
              <ul className="space-y-2">
                {selectedInstructor.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#F5F5F5]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
