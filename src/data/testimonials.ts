export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  initials: string;
  role: string;
  company: string;
  industry: string;
  project: string;
  rating: number;
  datePublished: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'priya-bulletin',
    quote:
      'The team rebuilt our entire CMS in 6 weeks and our editorial output jumped 3x. Editors who used to fight the platform now publish in minutes. The fact that they handled infra, design and the newsroom workflow under one roof is why we keep coming back.',
    name: 'Priya Sharma',
    initials: 'PS',
    role: 'Head of Digital',
    company: 'Bharat Bulletin',
    industry: 'News Media',
    project: 'Bharat Bulletin CMS rebuild',
    rating: 5,
    datePublished: '2026-08',
  },
  {
    id: 'neeraj-travo',
    quote:
      'Kashavi shipped our entire booking platform — 28 pages, search, payments, the works — in 5 weeks. They pushed back on three things in our brief that would have hurt conversions, and they were right every time. That kind of honesty is rare.',
    name: 'Neeraj Tiwari',
    initials: 'NT',
    role: 'CEO',
    company: 'Travo Bharat',
    industry: 'Travel',
    project: 'Travo Bharat booking platform',
    rating: 5,
    datePublished: '2026-07',
  },
  {
    id: 'aisha-health',
    quote:
      'Anurag personally reviewed the WCAG work and the team rebuilt our patient portal to AA conformance in two sprints. We did not ask twice — they just delivered it. Our appointment bookings went up 38% in the first month after launch.',
    name: 'Dr. Aisha Khan',
    initials: 'AK',
    role: 'Chief Medical Officer',
    company: 'Curebook Health',
    industry: 'HealthTech',
    project: 'Curebook patient portal',
    rating: 5,
    datePublished: '2026-06',
  },
  {
    id: 'rohan-bindas',
    quote:
      'Our online orders jumped 220% in 90 days. The AI WhatsApp bot they built handles 70% of order questions without a human — and it actually sounds like us. Kashavi does not just ship, they own the outcome.',
    name: 'Rohan Verma',
    initials: 'RV',
    role: 'Founder',
    company: 'Bindas Cafe',
    industry: 'Food & Beverage',
    project: 'Bindas Cafe online ordering + WhatsApp bot',
    rating: 5,
    datePublished: '2026-05',
  },
  {
    id: 'sneha-hotel',
    quote:
      'Three agencies failed before Kashavi. They delivered a hotel management platform in 4 weeks that actually works on a phone in a slow WiFi hotel corridor. Their AI-assisted QA process is something we have not seen anywhere else.',
    name: 'Sneha Gupta',
    initials: 'SG',
    role: 'Founder',
    company: 'Hotel Planner',
    industry: 'Hospitality',
    project: 'Hotel Planner admin + booking',
    rating: 5,
    datePublished: '2026-04',
  },
  {
    id: 'vikram-resort',
    quote:
      'The new site lifted our direct bookings by 3.4x in the first quarter. Anurag signed off every page personally and Kapil led the brand work. The combination of strategic thinking and shipping speed is what makes Kashavi different.',
    name: 'Vikram Iyer',
    initials: 'VI',
    role: 'Managing Director',
    company: 'Nimbus Retreats',
    industry: 'Hospitality',
    project: 'Nimbus Retreats resort website',
    rating: 5,
    datePublished: '2026-03',
  },
];
