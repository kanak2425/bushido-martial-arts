import React, { useState } from 'react';
import { Shield, Send, CheckCircle2, MapPin, Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#070707] border-t border-[#D4AF37]/20 pt-16 pb-8 text-xs text-[#F5F5F5]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B0000] to-[#5E0000] border border-[#D4AF37] flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-black text-white tracking-wider">
                  BUSHIDO
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Martial Arts Academy
                </span>
              </div>
            </a>

            <p className="text-xs text-[#F5F5F5]/70 leading-relaxed max-w-sm">
              World-class martial arts instruction dedicated to developing unshakeable physical capability, emotional composure, and the traditional warrior code of Bushido.
            </p>

            <div className="p-3 bg-black/60 rounded-xl border border-white/10 font-cinzel italic text-[11px] text-[#D4AF37]">
              "Discipline is the bridge between goals and accomplishment."
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase font-cinzel text-white tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {['Home', 'About Philosophy', 'Training Programs', '3D Gear Showcase', 'Belt Progression', 'Class Schedule', 'Membership Plans', 'Free Trial Booking'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="hover:text-[#D4AF37] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Martial Arts Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase font-cinzel text-white tracking-wider">
              Disciplines
            </h4>
            <ul className="space-y-2">
              {['Kids Karate (Ages 4-11)', 'Teen Taekwondo', 'Brazilian Jiu-Jitsu', 'Dutch Kickboxing', 'Women’s Self-Defense', 'Elite Competition Team', 'Private 1-on-1 Coaching'].map((item, idx) => (
                <li key={idx}>
                  <a href="#programs" className="hover:text-[#D4AF37] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase font-cinzel text-white tracking-wider">
              Warrior Gazette
            </h4>
            <p className="text-[11px] text-[#F5F5F5]/70">
              Subscribe for technique breakdown videos, belt ceremony dates, and seminar invitations.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#8B0000]/20 rounded-xl border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Welcome to the Bushido Circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#8B0000] text-white rounded-md text-xs font-bold hover:bg-[#A31818]"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8B0000] text-[#D4AF37] hover:text-white flex items-center justify-center border border-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8B0000] text-[#D4AF37] hover:text-white flex items-center justify-center border border-white/10 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8B0000] text-[#D4AF37] hover:text-white flex items-center justify-center border border-white/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8B0000] text-[#D4AF37] hover:text-white flex items-center justify-center border border-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F5F5F5]/50">
          <div>
            © {new Date().getFullYear()} Bushido Martial Arts Academy. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Dojo Etiquette Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
