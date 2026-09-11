export type Founder = {
  id: string;
  name: string;
  initials: string;
  role: string;
  headline: string;
  paragraphs: string[];
  signature: string;
  accent: string;
};

export type TeamMember = {
  id: string;
  name: string;
  initials: string;
  role: string;
  bio: string;
  skills: string[];
  accent: string;
};

export const founders: Founder[] = [
  {
    id: 'anurag-kashyap',
    name: 'Anurag Kashyap',
    initials: 'AK',
    role: 'Managing Director & Co-Founder',
    headline: 'The builder who keeps every promise.',
    paragraphs: [
      'Anurag started shipping software at 18 and never stopped. Over twelve years he has personally led the build of 50+ digital products for clients across healthcare, travel, e-commerce, news media and SaaS — from a 2-week MVP for a Bharat-first D2C brand to a multi-tenant hotel platform used by 200+ properties.',
      'He runs Kashavi Infotech as Managing Director and Co-Founder, owning delivery, client relationships, and the standards every build is measured against. He signs off every architecture decision before code is written, and personally reviews every shipped release against the original brief.',
      'Anurag writes about pragmatic engineering, AI integration patterns and Indian-market product thinking. He believes great digital products are built by people who care more about the outcome than the deliverable.'
    ],
    signature: 'Anurag Kashyap',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    id: 'kapil-kumar',
    name: 'Kapil Kumar',
    initials: 'KK',
    role: 'Founder & CEO',
    headline: 'The strategist behind the work.',
    paragraphs: [
      'Kapil has spent the last decade obsessing over the gap between design and engineering — where most agency projects quietly fail. He founded Kashavi Infotech in 2021 to prove that beautiful design and solid engineering are not mutually exclusive. They are the same discipline, applied together, from day one.',
      'As Founder and CEO he sets the company strategy, leads the brand and creative direction, and runs the partnerships and growth engine. He works directly with select clients on positioning, narrative and the long-term arc of their product.',
      'Before Kashavi he led product teams at two early-stage startups, shipped a consumer app to 1M+ users, and consulted for agencies struggling with execution. He still writes code on weekends — usually to teach the team something new.'
    ],
    signature: 'Kapil Kumar',
    accent: 'from-brand-700 to-brand-800',
  },
];

export const team: TeamMember[] = [
  {
    id: 'vp-design',
    name: 'Priya Mehra',
    initials: 'PM',
    role: 'VP of Design',
    bio: 'Leads the design practice. Spends her weekends refactoring brand systems for fun.',
    skills: ['Brand systems', 'Product design', 'Design ops'],
    accent: 'from-pink-500 to-rose-500',
  },
  {
    id: 'vp-engineering',
    name: 'Arjun Patel',
    initials: 'AP',
    role: 'VP of Engineering',
    bio: 'Owns the build pipeline. Reads documentation for fun. Refactors at 2 AM if it can be cleaner.',
    skills: ['Next.js', 'Node.js', 'Cloud architecture'],
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'head-ai',
    name: 'Sneha Iyer',
    initials: 'SI',
    role: 'Head of AI & Automation',
    bio: 'Builds the chatbots and workflow systems. Ships a new AI agent demo every Friday.',
    skills: ['LLMs', 'RAG', 'WhatsApp automation'],
    accent: 'from-violet-500 to-purple-500',
  },
  {
    id: 'head-mobile',
    name: 'Rohan Sharma',
    initials: 'RS',
    role: 'Head of Mobile',
    bio: 'React Native and Flutter specialist. Has shipped 12 apps to the App Store this year alone.',
    skills: ['React Native', 'Flutter', 'iOS / Android'],
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'head-growth',
    name: 'Aanya Joshi',
    initials: 'AJ',
    role: 'Head of Growth & SEO',
    bio: 'Lives in GA4. A/B tests everything. Once improved a client conversion rate 3x in six weeks.',
    skills: ['SEO', 'AEO', 'Conversion'],
    accent: 'from-amber-500 to-orange-500',
  },
  {
    id: 'head-qa',
    name: 'Vivek Nair',
    initials: 'VN',
    role: 'Head of Quality',
    bio: 'Catches the bugs before launch day. Maintains a regression suite of 2,400+ test cases.',
    skills: ['Playwright', 'Accessibility', 'Performance'],
    accent: 'from-slate-500 to-zinc-500',
  },
];

export const whyWeBuilt =
  'Kashavi Infotech was started in 2021 with a single belief: businesses deserve digital products that are both beautiful and reliable — without paying for two different agencies to get them. Today we are a 30+ specialist team shipping 50+ products a year for clients across India, the Middle East and Europe, and we have not changed that belief.';
