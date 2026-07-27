import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Shield } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const mapAddress = "108 Bushido Way, Kyoto Plaza, Suite 400";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`;

  return (
    <section id="location" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
            <MapPin className="w-3.5 h-3.5" />
            Dojo Location
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            Visit Our <span className="gold-gradient-text">World-Class Facility</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#F5F5F5]/70">
            Conveniently located with dedicated mat areas, air-purified training arenas, spectator seating, and executive locker rooms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-[#D4AF37]/30 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Bushido Martial Arts Academy
              </span>
              <h3 className="text-2xl font-extrabold font-cinzel text-white">
                Main Headquarters
              </h3>
            </div>

            <div className="space-y-4 text-xs text-[#F5F5F5]/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Physical Address</span>
                  <span>{mapAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Phone Line</span>
                  <span>(555) 839-2041 / (555) 839-2042</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Email Enquiries</span>
                  <span>master@bushidomartialarts.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Training Hours</span>
                  <span>Monday – Friday: 09:00 AM – 09:00 PM</span><br />
                  <span>Saturday: 08:30 AM – 04:30 PM</span><br />
                  <span>Sunday: Closed for Family & Mat Sanitation</span>
                </div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#A31818] hover:from-[#A31818] hover:to-[#8B0000] text-white font-bold text-xs uppercase tracking-wider border border-[#D4AF37] shadow-lg flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37]" />
              <span>Get Live Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: Embedded Google Maps View */}
          <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl relative">
            <iframe
              title="Bushido Dojo Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284245781!2d-122.419415684682!3d37.774929579759!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f30739c33%3A0x6b7724a2e5d9969d!2sMartial%20Arts%20Academy!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }}
              allowFullScreen={false}
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/80 backdrop-blur-md rounded-xl text-xs text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-2 pointer-events-none">
              <Shield className="w-4 h-4 text-[#8B0000]" />
              Bushido Dojo • Free Student Parking On-Site
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
