import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { PROGRAMS_DATA } from '../data/mockData';
import { Calendar, Clock, CheckCircle2, Shield, User, Mail, Phone, MessageSquare, Download, Sparkles } from 'lucide-react';

interface BookingSectionProps {
  preselectedProgram?: string;
  initialOpen?: boolean;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedProgram = '' }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    studentName: '',
    age: '',
    programId: preselectedProgram || PROGRAMS_DATA[0].title,
    preferredTime: 'Afternoon',
    phone: '',
    email: '',
    calendarDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.email || !formData.phone) return;
    setSubmitted(true);
  };

  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bushido Martial Arts Academy//Free Trial Session//EN
BEGIN:VEVENT
SUMMARY:Bushido Free Trial Session - ${formData.programId}
DESCRIPTION:Free Martial Arts Trial for ${formData.studentName} at Bushido Martial Arts Academy.
LOCATION:Bushido Dojo, 108 Bushido Way, Kyoto Plaza, Suite 400
DTSTART:${formData.calendarDate.replace(/-/g, '')}T170000Z
DTEND:${formData.calendarDate.replace(/-/g, '')}T180000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Bushido_Free_Trial.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="booking" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
            <Sparkles className="w-3.5 h-3.5" />
            Zero Risk Trial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            Book Your <span className="gold-gradient-text">Free Trial Class</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#F5F5F5]/70">
            Experience our world-class dojo atmosphere, meet our master instructors, and receive a free consultation with no obligation.
          </p>
        </div>

        {submitted ? (
          <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-[#D4AF37]/50 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#8B0000] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Official Free Trial Voucher
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-white">
                VIP Trial Confirmed for {formData.studentName}!
              </h3>
              <p className="text-sm text-[#F5F5F5]/80 max-w-lg mx-auto">
                We have reserved your spot for <span className="font-bold text-[#D4AF37]">{formData.programId}</span> on{' '}
                <span className="font-bold text-[#D4AF37]">{formData.calendarDate} ({formData.preferredTime})</span>.
              </p>
            </div>

            {/* Ticket Card Details */}
            <div className="p-6 bg-black/60 rounded-xl border border-white/10 text-left max-w-md mx-auto space-y-3 font-mono text-xs text-[#F5F5F5]/90">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50">Student:</span>
                <span className="font-bold text-white">{formData.studentName} (Age: {formData.age || 'N/A'})</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50">Program:</span>
                <span className="font-bold text-[#D4AF37]">{formData.programId}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50">Date & Slot:</span>
                <span className="font-bold text-white">{formData.calendarDate} • {formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Included Gift:</span>
                <span className="font-bold text-emerald-400">Complimentary Heavyweight Gi</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={handleDownloadICS}
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#b5932a] text-black font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Add to Calendar (.ics)
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/10"
              >
                Book Another Student
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-6 sm:p-10 rounded-2xl border border-[#D4AF37]/30 shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Student Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]/80 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Student Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Vance"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Student Age */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]/80 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Student Age
                </label>
                <input
                  type="number"
                  placeholder="e.g. 9 or 28"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Program Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]/80 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Selected Program *
                </label>
                <select
                  value={formData.programId}
                  onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {PROGRAMS_DATA.map((p) => (
                    <option key={p.id} value={p.title} className="bg-[#121212] text-white">
                      {p.title} ({p.ageGroup})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Picker */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]/80 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Preferred Trial Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.calendarDate}
                  onChange={(e) => setFormData({ ...formData, calendarDate: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]/80 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Preferred Time Window *
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value as BookingFormData['preferredTime'] })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Morning" className="bg-[#121212]">Morning (09:00 AM - 12:00 PM)</option>
                  <option value="Afternoon" className="bg-[#121212]">Afternoon (04:00 PM - 06:30 PM)</option>
                  <option value="Evening" className="bg-[#121212]">Evening (06:30 PM - 09:00 PM)</option>
                </select>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]/80 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-1234"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Email */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]/80 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]/80 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Special Goals or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Looking to improve focus for school, or interested in adult BJJ conditioning."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8B0000] via-[#A31818] to-[#8B0000] hover:from-[#A31818] hover:to-[#8B0000] text-white font-extrabold text-sm uppercase tracking-wider border border-[#D4AF37] shadow-xl shadow-[#8B0000]/40 transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              <span>Confirm & Claim Free Trial Pass</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
