export type Client = {
  id: string;
  name: string;
  industry: string;
};

export const clients: Client[] = [
  { id: 'travo-bharat',   name: 'Travo Bharat',     industry: 'Travel' },
  { id: 'bharat-bulletin', name: 'Bharat Bulletin',  industry: 'News Media' },
  { id: 'fashion-ecom',    name: 'FableFit',         industry: 'E-Commerce' },
  { id: 'hotel-planner',   name: 'Hotel Planner',    industry: 'Hospitality' },
  { id: 'resort-hotel',    name: 'Nimbus Retreats',  industry: 'Hospitality' },
  { id: 'bindas-cafe',     name: 'Bindas Cafe',      industry: 'Food & Beverage' },
  { id: 'normans',         name: "Norman's",         industry: 'Food & Beverage' },
  { id: 'healthtech-co',   name: 'Curebook',         industry: 'HealthTech' },
  { id: 'realestate-crm',  name: 'Nivaara Realty',   industry: 'Real Estate' },
  { id: 'fintech-dash',    name: 'FinPilot',         industry: 'FinTech' },
  { id: 'ai-support',      name: 'Convo.ai',         industry: 'AI & Automation' },
  { id: 'edtech',          name: 'Gurukul',          industry: 'EdTech' },
];

export const pressMentions: Client[] = [
  { id: 'yourstory',    name: 'YourStory',         industry: 'Press' },
  { id: 'inc42',        name: 'Inc42',             industry: 'Press' },
  { id: 'et',           name: 'Economic Times',    industry: 'Press' },
  { id: 'techcrunch',   name: 'TechCrunch',        industry: 'Press' },
  { id: 'forbes',       name: 'Forbes India',      industry: 'Press' },
];
