import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../data/mockData';
import { Calendar, Clock, MapPin, Users, Filter, CheckCircle2 } from 'lucide-react';

interface ScheduleSectionProps {
  onBookTrial: (className?: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onBookTrial }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const categories = ['All', 'Kids', 'Teens', 'Adults', 'BJJ', 'Kickboxing', 'Competition'];

  const filteredSchedule = SCHEDULE_DATA.filter((slot) => {
    const matchDay = slot.day === selectedDay;
    const matchCat = selectedCategory === 'All' || slot.category === selectedCategory;
    return matchDay && matchCat;
  });

  return (
    <section id="schedule" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
            <Calendar className="w-3.5 h-3.5" />
            Timetable
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            Interactive <span className="gold-gradient-text">Class Schedule</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#F5F5F5]/70">
            Select a day and filter by program discipline to find the perfect training time for your routine.
          </p>
        </div>

        {/* Day Selector Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDay(d)}
              className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border shrink-0 ${
                selectedDay === d
                  ? 'bg-gradient-to-r from-[#8B0000] to-[#5E0000] text-white border-[#D4AF37] shadow-lg shadow-[#8B0000]/30 scale-105'
                  : 'bg-black/60 text-[#F5F5F5]/70 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Discipline Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs text-[#D4AF37] font-semibold flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold'
                  : 'bg-white/5 text-[#F5F5F5]/70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        {filteredSchedule.length === 0 ? (
          <div className="glass-panel p-12 text-center rounded-2xl border border-white/10 max-w-lg mx-auto">
            <p className="text-base font-cinzel text-white">No classes match your selected filters on {selectedDay}.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-4 py-2 bg-[#8B0000] text-white text-xs uppercase font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredSchedule.map((slot) => (
              <div
                key={slot.id}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#8B0000]/40 text-[#FF6B6B] border border-[#8B0000]/60 text-[10px] font-bold uppercase rounded">
                      {slot.category}
                    </span>
                    <span className="px-2 py-0.5 bg-white/10 text-[#D4AF37] text-[10px] font-semibold rounded">
                      {slot.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-cinzel text-white group-hover:text-[#D4AF37] transition-colors">
                    {slot.className}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#F5F5F5]/70">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{slot.time}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#F5F5F5]/40" />
                      <span>{slot.room}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#F5F5F5]/40" />
                      <span>{slot.instructor}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex flex-col sm:items-end gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-white/10">
                  <span className="text-[11px] text-[#D4AF37] font-mono">
                    Mats: {slot.capacity}
                  </span>
                  <button
                    onClick={() => onBookTrial(slot.className)}
                    className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-[#8B0000] to-[#A31818] hover:from-[#A31818] hover:to-[#8B0000] text-white text-xs uppercase font-bold tracking-wider rounded-lg border border-[#D4AF37]/40 shadow-md flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Reserve Seat
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
