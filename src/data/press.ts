export type Award = {
  id: string;
  name: string;
  org: string;
  year: number;
  category: string;
  icon: 'trophy' | 'star' | 'medal' | 'crown' | 'shield' | 'gem';
};

export const awards: Award[] = [
  { id: 'clutch-top',       name: 'Top B2B Agency',         org: 'Clutch',              year: 2026, category: 'Rating',       icon: 'star' },
  { id: 'goodfirms-top',    name: 'Top Web Developers',    org: 'GoodFirms',           year: 2026, category: 'Ranking',      icon: 'crown' },
  { id: 'et-leader',        name: 'Leaders in Digital',    org: 'Economic Times',      year: 2026, category: 'Featured',     icon: 'trophy' },
  { id: 'google-partner',   name: 'Google Partner',        org: 'Google',              year: 2026, category: 'Partnership',  icon: 'shield' },
  { id: 'meta-partner',     name: 'Meta Business Partner', org: 'Meta',                year: 2025, category: 'Partnership',  icon: 'gem' },
  { id: 'shopify-experts',  name: 'Shopify Experts',       org: 'Shopify',             year: 2025, category: 'Certification', icon: 'medal' },
];

export const publications: { id: string; name: string }[] = [
  { id: 'yourstory',  name: 'YourStory' },
  { id: 'inc42',      name: 'Inc42' },
  { id: 'et',         name: 'Economic Times' },
  { id: 'techcrunch', name: 'TechCrunch' },
  { id: 'forbes',     name: 'Forbes India' },
];
