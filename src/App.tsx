import React, { useState } from 'react';
import { OpeningCinematic } from './components/OpeningCinematic';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ThreeGearViewer } from './components/ThreeGearViewer';
import { BeltProgression } from './components/BeltProgression';
import { InstructorsSection } from './components/InstructorsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { MembershipSection } from './components/MembershipSection';
import { StudentSuccessSection } from './components/StudentSuccessSection';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { FAQSection } from './components/FAQSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  const [cinematicKey, setCinematicKey] = useState<number>(1);
  const [showCinematic, setShowCinematic] = useState<boolean>(true);
  const [selectedTrialProgram, setSelectedTrialProgram] = useState<string>('');

  const handleReplayIntro = () => {
    setCinematicKey((prev) => prev + 1);
    setShowCinematic(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBooking = (programTitle?: string) => {
    if (programTitle) {
      setSelectedTrialProgram(programTitle);
    }
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5] font-sans relative overflow-x-hidden">
      {/* Artistic Flair Theme - Dojo Door Side Accents */}
      <div className="hidden lg:block dojo-door" />
      <div className="hidden lg:block dojo-door right" />

      {/* Opening Cinematic Animation */}
      {showCinematic && (
        <OpeningCinematic
          key={cinematicKey}
          onComplete={() => setShowCinematic(false)}
        />
      )}

      {/* Main Website Structure */}
      <Navbar
        onBookTrialClick={() => scrollToBooking()}
        onReplayIntroClick={handleReplayIntro}
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onBookTrialClick={() => scrollToBooking()} />

        {/* 2. About & Philosophy Section */}
        <AboutSection />

        {/* 3. Training Programs */}
        <ProgramsSection onBookTrial={(title) => scrollToBooking(title)} />

        {/* 4. 3D Feature Section: Martial Arts Gear & Weapons */}
        <section id="gear3d" className="py-12 bg-gradient-to-b from-[#0B0B0B] via-[#121212] to-[#0B0B0B] border-y border-white/5">
          <ThreeGearViewer />
        </section>

        {/* 5. Belt Progression Timeline */}
        <BeltProgression />

        {/* 6. Instructor Roster */}
        <InstructorsSection />

        {/* 7. Interactive Class Schedule */}
        <ScheduleSection onBookTrial={(className) => scrollToBooking(className)} />

        {/* 8. Membership Plans */}
        <MembershipSection onSelectPlan={(planTitle) => scrollToBooking(`Membership: ${planTitle}`)} />

        {/* 9. Student Success & Transformations */}
        <StudentSuccessSection />

        {/* 10. Photo & Moment Gallery */}
        <GallerySection />

        {/* 11. Online Free Trial Booking Form */}
        <BookingSection preselectedProgram={selectedTrialProgram} />

        {/* 12. FAQ Accordion */}
        <FAQSection />

        {/* 13. Google Maps Location */}
        <LocationSection />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
