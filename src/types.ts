export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  ageGroup: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | 'Beginner to Advanced';
  scheduleSnippet: string;
  image: string;
  keyBenefits: string[];
  syllabus: string[];
  featured?: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  japaneseTitle: string;
  rank: string;
  yearsExperience: number;
  specialization: string;
  achievements: string[];
  bio: string;
  photo: string;
  quote: string;
}

export interface ScheduleSlot {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  time: string;
  className: string;
  category: 'Kids' | 'Teens' | 'Adults' | 'BJJ' | 'Kickboxing' | 'Competition';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  instructor: string;
  room: string;
  capacity: string;
}

export interface MembershipPlan {
  id: string;
  title: string;
  japaneseSubtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  includesFreeUniform: boolean;
  tournamentAccess: boolean;
  ctaText: string;
}

export interface BeltInfo {
  color: string;
  hex: string;
  textHex: string;
  kanji: string;
  japaneseName: string;
  minMonths: string;
  mindset: string;
  coreTechniques: string[];
  philosophicalFocus: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  beltRank: string;
  yearsAtDojo: string;
  avatar: string;
  quote: string;
  program: string;
  achievementBadge: string;
  beforeAfterStory?: {
    before: string;
    after: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Training' | 'Competitions' | 'Graduations' | 'Youth';
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Children' | 'Equipment' | 'Adults';
}

export interface BookingFormData {
  studentName: string;
  age: string;
  programId: string;
  preferredTime: 'Morning' | 'Afternoon' | 'Evening';
  phone: string;
  email: string;
  calendarDate: string;
  notes: string;
}

export interface Gear3DItem {
  id: string;
  name: string;
  japaneseName: string;
  type: 'belt' | 'gloves' | 'katana' | 'pads' | 'trophy' | 'dummy';
  tagline: string;
  description: string;
  significance: string;
  materialSpecs: string[];
}
