import {
  Program,
  Instructor,
  ScheduleSlot,
  MembershipPlan,
  BeltInfo,
  Testimonial,
  GalleryItem,
  FAQItem,
  Gear3DItem
} from '../types';

import heroImg from '../assets/images/dojo_hero_banner_1784882705863.jpg';
import instructorsImg from '../assets/images/dojo_instructors_1784882718932.jpg';
import graduationImg from '../assets/images/dojo_graduation_1784882732241.jpg';

export { heroImg, instructorsImg, graduationImg };

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'kids-karate',
    title: 'Kids Karate',
    tagline: 'Building Unshakable Focus, Character & Respect',
    description: 'A transformative curriculum for young minds that instills discipline, anti-bullying confidence, coordination, and traditional respect.',
    fullDescription: 'Our Kids Karate program goes beyond physical movement. Through structured traditional katas, safety drills, and positive reinforcement, children learn emotional control, laser-like academic focus, and unyielding self-worth in a supportive family environment.',
    ageGroup: 'Ages 4 - 11',
    difficulty: 'Beginner',
    scheduleSnippet: 'Mon / Wed / Fri • 4:30 PM',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
    keyBenefits: [
      'Sharpen mental focus and academic listening skills',
      'Anti-bullying situational awareness & boundary setting',
      'Develop balance, motor coordination & agility',
      'Learn traditional Japanese etiquette & respect for elders'
    ],
    syllabus: [
      'Basic Stances (Zenkutsu-dachi, Kiba-dachi)',
      'Fundament Block & Strike Combinations',
      'Taikyoku Shodan Kata Mastery',
      'Youth Sparring Safety Protocols & Control'
    ],
    featured: true
  },
  {
    id: 'teen-taekwondo',
    title: 'Teen Taekwondo',
    tagline: 'Dynamic Kicking, Agility & Mental Resilience',
    description: 'High-energy Olympic-style kicking patterns, explosive conditioning, and leadership training tailored specifically for adolescents.',
    fullDescription: 'Adolescence is a crucial stage for character formation. Teen Taekwondo offers a constructive outlet for stress, builds athletic power through aerial kicks and speed drills, and fosters lifelong peer friendships based on honor and mutual encouragement.',
    ageGroup: 'Ages 12 - 17',
    difficulty: 'All Levels',
    scheduleSnippet: 'Tue / Thu • 5:30 PM & Sat • 10:00 AM',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    keyBenefits: [
      'Master high-velocity jump kicking and spin techniques',
      'Build cardiovascular stamina and core muscular strength',
      'Cultivate stress resilience during school and exams',
      'Peer mentorship & junior instructor leadership track'
    ],
    syllabus: [
      'Taegeuk Poomsae Forms 1 through 8',
      'Olympic Sparring Footwork & Timing',
      'Self-Defense Joint Locks & Escapes',
      'Board Breaking Mechanics & Accuracy'
    ],
    featured: true
  },
  {
    id: 'bjj',
    title: 'Brazilian Jiu-Jitsu (BJJ)',
    tagline: 'The Gentle Art of Ground Mastery & Leverage',
    description: 'World-class ground grappling, joint locks, choke submissions, and positional control where technique conquers brute force.',
    fullDescription: 'Brazilian Jiu-Jitsu is physical chess. Designed to enable a smaller defender to defeat a larger attacker through leverage, distance management, and mechanical principles. Taught under IBJJF certified Black Belt instruction in a clean, hygienic mat setting.',
    ageGroup: 'Teens & Adults (14+)',
    difficulty: 'All Levels',
    scheduleSnippet: 'Mon - Thu • 6:30 PM & Sat • 11:30 AM',
    image: 'https://images.unsplash.com/photo-1564415051543-cb73a748a044?auto=format&fit=crop&w=800&q=80',
    keyBenefits: [
      'Realistic real-world ground defense capabilities',
      'Incredible full-body calorie burn and core stabilization',
      'Deep mental calm through problem-solving under pressure',
      'Gi and No-Gi rolling options available weekly'
    ],
    syllabus: [
      'Guard Passing, Side Control & Mount Escapes',
      'Takdowns (Single Leg, Double Leg, Judo Harai Goshi)',
      'Submissions: Armbar, Triangle Choke, Kimuras',
      'Positional Sparring & Flow Rolling Protocols'
    ],
    featured: true
  },
  {
    id: 'kickboxing',
    title: 'Striking & Kickboxing',
    tagline: 'Power, Precision & High-Intensity Conditioning',
    description: 'Dutch-style kickboxing and Muay Thai striking fundamentals combined with heavy bag workouts and technical mitt work.',
    fullDescription: 'Unleash explosive power while burning up to 800 calories per session. Our striking curriculum covers boxing jab-cross mechanics, low kicks, knees, defensive parries, and footwork drills without unnecessary impact.',
    ageGroup: 'Adults (16+)',
    difficulty: 'Beginner to Advanced',
    scheduleSnippet: 'Mon / Wed / Fri • 7:30 PM',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
    keyBenefits: [
      'Maximum fat-burning cardiovascular workout',
      'Develop devastating striking power and hip mobility',
      'Reflex enhancement and reaction timing',
      'Stress release in a vibrant, empowering team atmosphere'
    ],
    syllabus: [
      'Boxing Guard, Angles & Slip Mechanics',
      'Roundhouse Kick Mechanics & Heavy Bag Power',
      'Thai Pad Combination Flow Drills',
      'Light Technical Sparring (Optional)'
    ]
  },
  {
    id: 'womens-self-defense',
    title: 'Women’s Self-Defense',
    tagline: 'Empowerment, Intuition & Tactical Survival',
    description: 'Practical, high-probability self-defense tactics designed to disable larger aggressors and escape hazardous situations safely.',
    fullDescription: 'A specialized tactical course focusing on situational awareness, verbal de-escalation, strike targeting, wrist grab releases, choke escapes, and ground survivability. Taught with empathy, precision, and empowering realism.',
    ageGroup: 'Women & Teens (13+)',
    difficulty: 'Beginner',
    scheduleSnippet: 'Tue / Thu • 7:30 PM & Sat • 9:00 AM',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    keyBenefits: [
      'Recognize and avoid dangerous situations before escalation',
      'Neutralize wrist grabs, hair pulls, and bear hugs instantly',
      'Utilize vital strike points regardless of physical strength',
      'Build unshakeable personal confidence in public settings'
    ],
    syllabus: [
      'Target Identification (Eyes, Throat, Solar Plexus, Groin)',
      'Escapes from Rear Chokes & Wall Pins',
      'Ground Defense and Getting Back Up Safely',
      'Adrenaline Response Management'
    ]
  },
  {
    id: 'competition-training',
    title: 'Elite Competition Team',
    tagline: 'Championship Preparation & Advanced Combat Sports',
    description: 'Invite-only sparring, athletic periodization, mental conditioning, and tournament coaching for state & national competitors.',
    fullDescription: 'Engineered for dedicated athletes aiming for gold medals in Karate Katas, Taekwondo Sparring, or IBJJF Tournaments. Requires head coach evaluation and commitment to elite standards of honor.',
    ageGroup: 'Selected Athletes',
    difficulty: 'Advanced',
    scheduleSnippet: 'Saturday • 1:00 PM - 3:30 PM',
    image: 'https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&w=800&q=80',
    keyBenefits: [
      'Personalized video breakdown & tactical game planning',
      'Peak athletic strength & metabolic conditioning',
      'National referee ruleset & scoring strategy',
      'Mindset training under former Olympic coaches'
    ],
    syllabus: [
      'High-Speed Reaction & Timing Drills',
      'Simulated Tournament Bracket Matchups',
      'Advanced Combination Counter-Striking',
      'Recovery Protocols & Sports Nutrition'
    ]
  }
];

export const INSTRUCTORS_DATA: Instructor[] = [
  {
    id: 'kenji-sato',
    name: 'Grandmaster Kenji Sato',
    japaneseTitle: '師範 (Shihan)',
    rank: '9th Dan Black Belt - Shotokan Karate',
    yearsExperience: 42,
    specialization: 'Traditional Karate Katas, Dojo Philosophy & Budo Mindset',
    achievements: [
      'Former 3-Time All-Japan National Kata Champion',
      'Inducted into International Martial Arts Hall of Fame (2012)',
      'Trained over 120 Certified Black Belt Instructors Globally'
    ],
    bio: 'Grandmaster Sato began his training at age 6 in Kyoto under legendary masters. With over four decades of dedicated practice, he embodies the true spirit of Bushido—combining strict technical mastery with profound humility and lifelong wisdom.',
    photo: instructorsImg,
    quote: 'The ultimate aim of martial arts lies not in victory or defeat, but in the perfection of the character of its participants.'
  },
  {
    id: 'elena-rostova',
    name: 'Master Elena Rostova',
    japaneseTitle: '先生 (Sensei)',
    rank: '5th Dan BJJ Black Belt & Judo Master',
    yearsExperience: 21,
    specialization: 'Brazilian Jiu-Jitsu Ground Strategy & Women’s Defense',
    achievements: [
      '2x IBJJF World Champion (Black Belt Heavyweight)',
      'European Open Gold Medalist in Submission Grappling',
      'Head Coach for National Youth BJJ Squad'
    ],
    bio: 'Master Rostova is world-renowned for her technical guard precision and fluid leverage mechanics. Her warm, detail-oriented teaching style ensures students of all weight classes master effortless positional control.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    quote: 'Size and strength fade. Technique, timing, and composure endure forever.'
  },
  {
    id: 'marcus-vance',
    name: 'Master Marcus Vance',
    japaneseTitle: '先生 (Sensei)',
    rank: '6th Dan Taekwondo & Kickboxing Champion',
    yearsExperience: 26,
    specialization: 'Explosive Striking, Olympic Footwork & Youth Leadership',
    achievements: [
      'U.S. National Taekwondo Team Member (2008-2014)',
      'Professional Kickboxing Record: 18 Wins, 2 Losses',
      'Master Degree in Sports Exercise Science'
    ],
    bio: 'Coach Vance brings dynamic energy and cutting-edge sports science into every session. He has mentored hundreds of youth athletes to state championships while emphasizing academic excellence.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    quote: 'Discipline is doing what needs to be done, even when you do not feel like doing it.'
  },
  {
    id: 'mei-ling-tan',
    name: 'Sensei Mei-Ling Tan',
    japaneseTitle: '先生 (Sensei)',
    rank: '4th Dan Karate & Youth Program Director',
    yearsExperience: 16,
    specialization: 'Kids Karate Curriculum, Motor Skills & Anti-Bullying Education',
    achievements: [
      'Asian Martial Arts Games Gold Medalist',
      'Certified Child Development & Behavioral Fitness Specialist',
      'Author of "The Young Warrior’s Path"'
    ],
    bio: 'Sensei Mei-Ling specializes in early childhood character development. She creates an inspiring, joyful environment where shy children transform into confident, polite, and courageous young leaders.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    quote: 'When a child learns to believe in themselves on the tatami mat, there is nothing they cannot achieve in life.'
  }
];

export const BELT_PROGRESSION_DATA: BeltInfo[] = [
  {
    color: 'White Belt',
    hex: '#FFFFFF',
    textHex: '#000000',
    kanji: '白帯',
    japaneseName: 'Shirobi (Beginner)',
    minMonths: '0 - 3 Months',
    mindset: 'The Purity of an Open Mind (Shoshin)',
    coreTechniques: [
      'Basic Dojo Etiquette & Bowing (Rei)',
      'Front Stance (Zenkutsu-Dachi)',
      'Straight Punch (Seiken Tsuki)',
      'High Block (Age-Uke)'
    ],
    philosophicalFocus: 'Humility and willingness to learn without ego.'
  },
  {
    color: 'Yellow Belt',
    hex: '#FFD700',
    textHex: '#000000',
    kanji: '黄帯',
    japaneseName: 'Kiobii (First Step)',
    minMonths: '3 - 6 Months',
    mindset: 'Sunlight Awakening Growth',
    coreTechniques: [
      'Side Kick (Yoko-Geri)',
      'Knife Hand Block (Shuto-Uke)',
      'Basic Breakfalls (Ukemi)',
      'Taikyoku Kata'
    ],
    philosophicalFocus: 'Building consistent attendance and physical stamina.'
  },
  {
    color: 'Orange Belt',
    hex: '#FFA500',
    textHex: '#000000',
    kanji: '橙帯',
    japaneseName: 'Daidaiobi (Illumination)',
    minMonths: '6 - 10 Months',
    mindset: 'Warmth of Expanding Skill',
    coreTechniques: [
      'Roundhouse Kick (Mawashi-Geri)',
      'Reverse Punch Mechanics (Gyaku-Tsuki)',
      'Controlled Light Sparring Footwork',
      'Heian Shodan Kata'
    ],
    philosophicalFocus: 'Developing body coordination and hip rotation power.'
  },
  {
    color: 'Green Belt',
    hex: '#2E8B57',
    textHex: '#FFFFFF',
    kanji: '緑帯',
    japaneseName: 'Midoriobi (Deepening Roots)',
    minMonths: '10 - 16 Months',
    mindset: 'Unshakable Foundation',
    coreTechniques: [
      'Back Kick (Ushiro-Geri)',
      'Joint Escape Traps & Takedown Defenses',
      'Heian Nidan & Sandan Katas',
      'Continuous Sparring Timing'
    ],
    philosophicalFocus: 'Emotional composure under physical fatigue.'
  },
  {
    color: 'Blue Belt',
    hex: '#1E90FF',
    textHex: '#FFFFFF',
    kanji: '青帯',
    japaneseName: 'Aobi (Expanding Sky)',
    minMonths: '16 - 24 Months',
    mindset: 'Fluidity & Adapting Like Water',
    coreTechniques: [
      'Spinning Hook Kick & Counter-striking',
      'BJJ Guard Passing & Submissions',
      'Heian Yondan & Godan Katas',
      'Multiple Opponent Positioning'
    ],
    philosophicalFocus: 'Refining subtle timing and distance perception.'
  },
  {
    color: 'Brown Belt',
    hex: '#8B4513',
    textHex: '#FFFFFF',
    kanji: '茶帯',
    japaneseName: 'Chaobi (Ripening Harvest)',
    minMonths: '2 - 3 Years',
    mindset: 'Mastery in Progress',
    coreTechniques: [
      'Tekki Shodan & Bassai Dai Advanced Katas',
      'Advanced Submission Chokes & Sweeps',
      'Junior Student Mentorship & Assistant Teaching',
      'Full Contact Controlled Sparring'
    ],
    philosophicalFocus: 'Polishing internal character and leadership responsibilities.'
  },
  {
    color: 'Black Belt',
    hex: '#000000',
    textHex: '#D4AF37',
    kanji: '黒帯',
    japaneseName: 'Kuroobi (1st Dan - Shodan)',
    minMonths: '3.5 - 5 Years',
    mindset: 'Return to the Beginning (Infinite Journey)',
    coreTechniques: [
      'Kanku Dai & Enpi Master Katas',
      'Complete Striking & Grappling Integration',
      'Self-Created Tactical Sparring Combination Flows',
      'Lifetime Commitment to Bushido Virtues'
    ],
    philosophicalFocus: 'True mastery is knowing that the Black Belt is only the start.'
  }
];

export const SCHEDULE_DATA: ScheduleSlot[] = [
  { id: '1', day: 'Monday', time: '04:30 PM - 05:25 PM', className: 'Little Tigers Karate', category: 'Kids', level: 'Beginner', instructor: 'Sensei Mei-Ling', room: 'Dojo A', capacity: '14 / 16' },
  { id: '2', day: 'Monday', time: '05:30 PM - 06:25 PM', className: 'Teen Taekwondo Kicking', category: 'Teens', level: 'All Levels', instructor: 'Coach Marcus', room: 'Dojo A', capacity: '18 / 20' },
  { id: '3', day: 'Monday', time: '06:30 PM - 07:30 PM', className: 'BJJ Fundamentals (Gi)', category: 'BJJ', level: 'Beginner', instructor: 'Master Elena', room: 'Mat Room B', capacity: '22 / 25' },
  { id: '4', day: 'Monday', time: '07:30 PM - 08:30 PM', className: 'Kickboxing Heavy Bag', category: 'Kickboxing', level: 'All Levels', instructor: 'Coach Marcus', room: 'Dojo A', capacity: '16 / 20' },

  { id: '5', day: 'Tuesday', time: '04:30 PM - 05:25 PM', className: 'Youth Karate Advanced Katas', category: 'Kids', level: 'Advanced', instructor: 'Sensei Mei-Ling', room: 'Dojo A', capacity: '12 / 15' },
  { id: '6', day: 'Tuesday', time: '05:30 PM - 06:25 PM', className: 'Teen BJJ & Grappling', category: 'Teens', level: 'All Levels', instructor: 'Master Elena', room: 'Mat Room B', capacity: '15 / 18' },
  { id: '7', day: 'Tuesday', time: '06:30 PM - 07:30 PM', className: 'Adult Shotokan Karate', category: 'Adults', level: 'Intermediate', instructor: 'Grandmaster Sato', room: 'Dojo A', capacity: '20 / 22' },
  { id: '8', day: 'Tuesday', time: '07:30 PM - 08:30 PM', className: 'Women’s Tactical Defense', category: 'Adults', level: 'Beginner', instructor: 'Sensei Mei-Ling', room: 'Dojo A', capacity: '18 / 20' },

  { id: '9', day: 'Wednesday', time: '04:30 PM - 05:25 PM', className: 'Little Tigers Karate', category: 'Kids', level: 'Beginner', instructor: 'Sensei Mei-Ling', room: 'Dojo A', capacity: '15 / 16' },
  { id: '10', day: 'Wednesday', time: '05:30 PM - 06:25 PM', className: 'Teen Taekwondo Sparring', category: 'Teens', level: 'Intermediate', instructor: 'Coach Marcus', room: 'Dojo A', capacity: '16 / 20' },
  { id: '11', day: 'Wednesday', time: '06:30 PM - 07:30 PM', className: 'BJJ Advanced Positional Guard', category: 'BJJ', level: 'Advanced', instructor: 'Master Elena', room: 'Mat Room B', capacity: '19 / 20' },
  { id: '12', day: 'Wednesday', time: '07:30 PM - 08:30 PM', className: 'Dutch Striking & Padwork', category: 'Kickboxing', level: 'All Levels', instructor: 'Coach Marcus', room: 'Dojo A', capacity: '18 / 20' },

  { id: '13', day: 'Thursday', time: '04:30 PM - 05:25 PM', className: 'Youth Karate Belt Prep', category: 'Kids', level: 'Intermediate', instructor: 'Sensei Mei-Ling', room: 'Dojo A', capacity: '14 / 16' },
  { id: '14', day: 'Thursday', time: '05:30 PM - 06:25 PM', className: 'Teen Kickboxing Conditioning', category: 'Teens', level: 'All Levels', instructor: 'Coach Marcus', room: 'Dojo A', capacity: '17 / 20' },
  { id: '15', day: 'Thursday', time: '06:30 PM - 07:30 PM', className: 'Adult BJJ No-Gi & Submissions', category: 'BJJ', level: 'All Levels', instructor: 'Master Elena', room: 'Mat Room B', capacity: '24 / 25' },
  { id: '16', day: 'Thursday', time: '07:30 PM - 08:30 PM', className: 'Women’s Tactical Defense', category: 'Adults', level: 'Beginner', instructor: 'Sensei Mei-Ling', room: 'Dojo A', capacity: '19 / 20' },

  { id: '17', day: 'Friday', time: '04:30 PM - 05:30 PM', className: 'Family Open Mat & Katas', category: 'Kids', level: 'All Levels', instructor: 'Grandmaster Sato', room: 'Dojo A', capacity: '25 / 30' },
  { id: '18', day: 'Friday', time: '06:00 PM - 07:15 PM', className: 'BJJ & Karate Sparring Exchange', category: 'Adults', level: 'Intermediate', instructor: 'Master Elena & Sato', room: 'Main Arena', capacity: '28 / 30' },

  { id: '19', day: 'Saturday', time: '09:00 AM - 10:00 AM', className: 'Women’s Empower Defense', category: 'Adults', level: 'Beginner', instructor: 'Sensei Mei-Ling', room: 'Dojo A', capacity: '16 / 20' },
  { id: '20', day: 'Saturday', time: '10:00 AM - 11:15 AM', className: 'Teen & Adult Combined Striking', category: 'Kickboxing', level: 'All Levels', instructor: 'Coach Marcus', room: 'Dojo A', capacity: '20 / 25' },
  { id: '21', day: 'Saturday', time: '11:30 AM - 01:00 PM', className: 'BJJ All-Ranks Open Mat', category: 'BJJ', level: 'All Levels', instructor: 'Master Elena', room: 'Mat Room B', capacity: '30 / 35' },
  { id: '22', day: 'Saturday', time: '01:00 PM - 03:30 PM', className: 'Elite Competition Team Practice', category: 'Competition', level: 'Advanced', instructor: 'All Head Masters', room: 'Main Arena', capacity: '12 / 12' }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'beginner-plan',
    title: 'Beginner Discipline',
    japaneseSubtitle: '初心者 (Shoshinsha)',
    monthlyPrice: 129,
    annualPrice: 109,
    description: 'Perfect for new students building foundational skills, focus, and physical fitness.',
    features: [
      'Access to 2 Classes Per Week',
      'Full Access to Beginners Belt Curriculum',
      'Progressive Belt Testing Eligibility',
      'Free Mobile Student App & Video Portal',
      '10% Discount on Dojo Apparel'
    ],
    includesFreeUniform: true,
    tournamentAccess: false,
    ctaText: 'Start Beginner Journey'
  },
  {
    id: 'standard-plan',
    title: 'Warrior Standard',
    japaneseSubtitle: '武士 (Bushi)',
    monthlyPrice: 189,
    annualPrice: 159,
    description: 'Our most popular plan for students committed to rapid belt advancement & mastery.',
    isPopular: true,
    features: [
      'UNLIMITED Access to All Martial Arts Classes',
      'Includes Karate, BJJ, Taekwondo & Kickboxing',
      'Complimentary Custom Embroidered Gi & Belt',
      'Monthly Private 1-on-1 Progress Review',
      'Free Access to Weekend Open Mat Sessions',
      'Family Add-on Discount (25% Off 2nd Member)'
    ],
    includesFreeUniform: true,
    tournamentAccess: true,
    ctaText: 'Enroll in Warrior Plan'
  },
  {
    id: 'elite-plan',
    title: 'Bushido Black Belt Elite',
    japaneseSubtitle: '黒帯 (Kuroobi)',
    monthlyPrice: 249,
    annualPrice: 209,
    description: 'Designed for serious martial artists, competitors, and aspiring instructors.',
    features: [
      'Unlimited Classes + Elite Competition Team Entry',
      '2 Monthly Private 1-on-1 Master Coaching Sessions',
      'Custom Competition Gi, Gloves & Protective Gear Set',
      'Priority Belt Testing & Master Seminar Access',
      'VIP Locker & Recovery Zone Access',
      'Full Guest Passes (2 Friends Per Month)'
    ],
    includesFreeUniform: true,
    tournamentAccess: true,
    ctaText: 'Apply for Elite Status'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'David & Sarah Jenkins',
    role: 'Parents of Leo (Age 9)',
    beltRank: 'Orange Belt',
    yearsAtDojo: '2 Years',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=200',
    quote: 'Bushido Academy completely transformed our son Leo. Before joining, he struggled with focus and self-confidence at school. Within 6 months, his teachers noticed a dramatic improvement in his attention and politeness. Sensei Mei-Ling is an absolute blessing.',
    program: 'Kids Karate',
    achievementBadge: 'Honor Roll Student & Dojo Merit Award',
    beforeAfterStory: {
      before: 'Shy, easily distracted, lacked physical coordination.',
      after: 'Confident Orange Belt, top marks in class, respectful leader.'
    }
  },
  {
    id: '2',
    name: 'Marcus Sterling',
    role: 'Corporate Executive & BJJ Practitioner',
    beltRank: 'Purple Belt',
    yearsAtDojo: '4 Years',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=200',
    quote: 'As a 42-year-old executive under high stress, Bushido Academy is my sanctuary. Master Elena’s Jiu-Jitsu instruction is world-class. I lost 32 lbs, gained mental clarity, and found a brotherhood of humble, driven people.',
    program: 'Brazilian Jiu-Jitsu',
    achievementBadge: 'IBJJF State Masters Gold Medalist',
    beforeAfterStory: {
      before: 'High blood pressure, work burn-out, zero grappling experience.',
      after: '32 lbs weight loss, Purple Belt, peak athletic stamina.'
    }
  },
  {
    id: '3',
    name: 'Aaliyah Chen',
    role: 'University Student',
    beltRank: 'Green Belt',
    yearsAtDojo: '1.5 Years',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=200',
    quote: 'The Women’s Self-Defense and Kickboxing courses gave me an unshakeable sense of security when walking across campus at night. The environment is respectful, empowering, and incredibly motivating.',
    program: 'Kickboxing & Women’s Defense',
    achievementBadge: 'Certified Tactical Awareness Graduate',
    beforeAfterStory: {
      before: 'Anxious in crowded or night settings.',
      after: 'Empowered, sharp reflexes, athletic power.'
    }
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: '1', title: 'Kata Precision & Focus', category: 'Training', image: heroImg, description: 'Students executing synchronized Shotokan katas under Grandmaster Sato.' },
  { id: '2', title: 'Master Sato Mentoring Youth', category: 'Youth', image: instructorsImg, description: 'Hands-on correction of stance and posture during youth belt training.' },
  { id: '3', title: 'Black Belt Graduation Ceremony', category: 'Graduations', image: graduationImg, description: 'Receiving the embroidered silk black belt after years of dedicated discipline.' },
  { id: '4', title: 'Olympic Taekwondo High Kick', category: 'Competitions', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80', description: 'National championship gold medal round scoring kick.' },
  { id: '5', title: 'BJJ Ground Sweep Technique', category: 'Training', image: 'https://images.unsplash.com/photo-1564415051543-cb73a748a044?auto=format&fit=crop&w=800&q=80', description: 'Master Elena demonstrating guard passing mechanics on mat B.' },
  { id: '6', title: 'Kickboxing Heavy Bag Drills', category: 'Training', image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80', description: 'High-intensity power striking and conditioning.' },
  { id: '7', title: 'Youth Sparring Championship', category: 'Youth', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80', description: 'Young warriors displaying sportsmanship and control.' },
  { id: '8', title: 'National Trophy Presentation', category: 'Competitions', image: 'https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&w=800&q=80', description: 'Bushido Academy winning 1st Place Overall Academy Shield.' }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    category: 'General',
    question: 'Do beginners need prior athletic or martial arts experience?',
    answer: 'Absolutely not. Over 70% of our incoming students begin with zero prior experience. Our beginner curriculum is step-by-step, safe, and tailored to build your strength, flexibility, and confidence at your own natural pace.'
  },
  {
    id: '2',
    category: 'Children',
    question: 'What age can children start training at Bushido Academy?',
    answer: 'Children can begin as early as age 4 in our Little Tigers Karate program. The curriculum focuses on fundamental motor skills, listening focus, listening discipline, balance, and positive character building.'
  },
  {
    id: '3',
    category: 'Equipment',
    question: 'Are uniforms (Gi) provided when I join?',
    answer: 'Yes! All new membership plans include a complimentary traditional heavyweight martial arts Gi (uniform) and white belt during your registration.'
  },
  {
    id: '4',
    category: 'General',
    question: 'How often should I or my child train each week?',
    answer: 'For optimal physical progression and mental retention, we recommend attending 2 to 3 classes per week. Our flexible schedule offers morning, afternoon, and evening slots.'
  },
  {
    id: '5',
    category: 'Adults',
    question: 'Am I too old to start martial arts or BJJ as an adult?',
    answer: 'You are never too old! We have adult students who started in their 30s, 40s, 50s, and 60s. Martial arts practice improves joint mobility, cardio endurance, and stress relief without unnecessary wear on the body.'
  },
  {
    id: '6',
    category: 'General',
    question: 'How long does it take to earn a Black Belt at Bushido Academy?',
    answer: 'Earning a Black Belt at Bushido Academy typically takes between 3.5 to 5 years of consistent practice. We hold high standards of technical excellence—a Black Belt earned here represents real, earned capability.'
  }
];

export const GEAR_3D_ITEMS: Gear3DItem[] = [
  {
    id: 'black-belt',
    name: 'Silk Embroidered Black Belt',
    japaneseName: '黒帯 (Kuroobi)',
    type: 'belt',
    tagline: 'Symbol of Unshakeable Mastery & Humble Beginnings',
    description: 'Hand-stitched premium silk black belt featuring gold kanji embroidery and gold rank stripes. Represents years of blood, sweat, discipline, and devotion to the way of Bushido.',
    significance: 'In ancient dojos, a white belt turned dark over years of intense practice without being washed—symbolizing that wisdom is earned through struggle.',
    materialSpecs: ['100% Japanese Silk Exterior', 'Heavyweight Cotton Core', 'Gold Metallic Thread Kanji', '1.75 inch Width (4.5 cm)']
  },
  {
    id: 'boxing-gloves',
    name: 'Pro Leather Striking Gloves',
    japaneseName: 'グローブ (Guroobu)',
    type: 'gloves',
    tagline: 'Ergonomic Protection for Devastating Power',
    description: 'Grain cowhide leather gloves engineered with multi-layered shock-absorbing gel padding, reinforced wrist stabilization, and moisture-wicking inner lining.',
    significance: 'Protection allows martial artists to train at full speed with maximum power while protecting both striker and training partner.',
    materialSpecs: ['Full-Grain Premium Cowhide', 'High-Density Injection Foam', 'Extra-Wide Hook & Loop Wrist Support', '16 oz Professional Weight']
  },
  {
    id: 'katana',
    name: 'Traditional Forged Katana',
    japaneseName: '日本刀 (Nihontō)',
    type: 'katana',
    tagline: 'The Soul of the Samurai Spirit',
    description: 'Clay-tempered high-carbon steel blade with genuine hamon line, dark ray-skin tsuka handle wrap, solid brass tsuba guard, and hand-lacquered wooden scabbard.',
    significance: 'The katana teaches precise focus and mindfulness. In Budo, the sword is drawn not to cut down an enemy, but to cut down one’s own ego and fear.',
    materialSpecs: ['1095 Clay-Tempered Carbon Steel', 'Real Ray-Skin (Samegawa) Handle', 'Solid Brass Tsuba & Fittings', 'Hand-Lacquered Wooden Saya']
  },
  {
    id: 'training-pads',
    name: 'Heavy-Duty Focus Mitts',
    japaneseName: 'ミット (Mitto)',
    type: 'pads',
    tagline: 'Precision Targetry for Speed & Reaction',
    description: 'Curved impact focus pads with target center ring, shock dispersion core, and padded wrist wedges for coach comfort during heavy striking combinations.',
    significance: 'Pad work develops the vital rhythm, distance perception, and lightning-fast combination flow required in real combat sports.',
    materialSpecs: ['Microfiber Leather Construction', 'Dual-Layer Impact Foam', 'Curved Anatomical Palm Ball', 'Padded Wrist Enclosure']
  },
  {
    id: 'trophy',
    name: 'Championship Victory Trophy',
    japaneseName: '優勝杯 (Yūshōhai)',
    type: 'trophy',
    tagline: 'Testament to Perseverance & Competitive Honor',
    description: 'Solid brass martial arts trophy featuring a martial artist in front kick stance mounted on a polished mahogany wooden base with engraved championship plaque.',
    significance: 'Trophies are not given for inherent talent, but as a public tribute to the thousands of invisible practice hours spent when no one was watching.',
    materialSpecs: ['Polished Gold Brass Alloy', 'Solid American Mahogany Base', 'Custom Diamond Engraved Plate', '18 inches Height (45 cm)']
  },
  {
    id: 'dummy',
    name: 'Wooden Practice Dummy',
    japaneseName: '木人樁 (Muk Yan Jong)',
    type: 'dummy',
    tagline: 'The Silent Master of Structure & Deflection',
    description: 'Traditional hardwood training dummy with spring-loaded wooden arms and angled leg, mounted on an iron frame for conditioning and trapping flow.',
    significance: 'Originating in traditional Wing Chun and Kung Fu, the wooden dummy develops hard bone conditioning, centerline theory, and continuous deflection flow.',
    materialSpecs: ['Solid Teak Hardwood Trunk', 'Spring-Loaded Floating Base', '3 Tapered Hardwood Arms', 'Reinforced Curved Leg']
  }
];
