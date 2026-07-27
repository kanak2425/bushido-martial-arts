import React from 'react';
import { Program } from '../types';
import { X, Calendar, CheckCircle2, Award, Clock, Users, ArrowRight } from 'lucide-react';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onBookTrial: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onBookTrial }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel bg-[#121212] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover filter brightness-[0.7]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#8B0000] text-white flex items-center justify-center border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 bg-[#8B0000] text-white text-xs font-bold uppercase rounded-md tracking-wider">
              {program.difficulty}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white mt-2">
              {program.title}
            </h2>
            <p className="text-sm text-[#D4AF37] italic mt-1 font-medium">
              "{program.tagline}"
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Details Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-black/50 rounded-xl border border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="text-[#F5F5F5]/50 block text-[10px] uppercase">Age Group</span>
                <span className="font-semibold text-white">{program.ageGroup}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="text-[#F5F5F5]/50 block text-[10px] uppercase">Schedule</span>
                <span className="font-semibold text-white">{program.scheduleSnippet}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="text-[#F5F5F5]/50 block text-[10px] uppercase">Belt Track</span>
                <span className="font-semibold text-white">Full Rank System</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-cinzel text-white mb-2">About This Program</h3>
            <p className="text-sm text-[#F5F5F5]/80 leading-relaxed">{program.fullDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">Key Student Benefits</h4>
              <ul className="space-y-2">
                {program.keyBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#F5F5F5]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">Curriculum Syllabus Highlights</h4>
              <ul className="space-y-2">
                {program.syllabus.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#F5F5F5]/90">
                    <span className="w-4 h-4 rounded-full bg-[#8B0000]/40 text-[#FF6B6B] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#F5F5F5]/60">
              *Includes free traditional uniform & consultation on day 1.
            </p>
            <button
              onClick={() => {
                onClose();
                onBookTrial(program.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#A31818] hover:from-[#A31818] hover:to-[#8B0000] text-white font-bold text-xs uppercase tracking-wider border border-[#D4AF37] shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Book Free Trial in {program.title}</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
