// Project data shared between listing and case studies
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'web' | 'ecommerce' | 'ai' | 'mobile' | 'hospitality' | 'media';
  image: string;
  technologies: string[];
  results: { metric: string; value: string }[];
  caseStudySlug: string;
  liveUrl?: string;
  year: string;
  client?: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
  challenge?: string;
  solution?: string;
}

export const categoryColors: Record<string, string> = {
  web: '#3B82F6',
  ecommerce: '#10B981',
  ai: '#F97316',
  mobile: '#EC4899',
  hospitality: '#8B5CF6',
  media: '#6366F1'
};

export const projects: Project[] = [
  {
    id: 'kashavi-infotech',
    title: 'Kashavi Infotech',
    tagline: 'Digital Marketing Platform',
    description: 'Complete digital transformation for a modern marketing agency with custom CMS and analytics dashboard.',
    category: 'web',
    image: '/images/work/ecommerce-project.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    results: [
      { metric: 'Page Speed', value: '95/100' },
      { metric: 'Load Time', value: '1.2s' },
      { metric: 'Conversion', value: '+45%' }
    ],
    caseStudySlug: 'kashavi-infotech',
    liveUrl: 'https://kashaviinfotech.com',
    year: '2026',
    featured: true,
    size: 'large',
    challenge: 'The agency needed a modern platform that could showcase their work, attract new clients, and streamline their project management.',
    solution: 'We built a custom Next.js platform with integrated CMS, client portal, project showcase, and analytics dashboard.'
  },
  {
    id: 'travo-bharat',
    title: 'Travo Bharat',
    tagline: 'Travel Booking Platform',
    description: 'End-to-end travel booking platform with real-time availability, payment gateway integration, and AI-powered recommendations.',
    category: 'web',
    image: '/images/work/healthcare-platform.svg',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    results: [
      { metric: 'Bookings', value: '10k+' },
      { metric: 'Revenue', value: '+280%' },
      { metric: 'User Rating', value: '4.8/5' }
    ],
    caseStudySlug: 'travo-bharat',
    liveUrl: 'https://travobharat.com',
    year: '2025',
    size: 'medium',
    challenge: 'Customers needed a seamless booking experience with real-time availability across multiple travel services.',
    solution: 'Built a comprehensive travel platform with real-time API integrations, secure payment processing, and AI-powered recommendations.'
  },
  {
    id: 'ecommerce-transformation',
    title: 'Fashion E-Commerce',
    tagline: 'Global E-Commerce Transformation',
    description: 'Complete digital transformation for a fashion retailer, resulting in 340% increase in online revenue and 2.8M+ monthly visitors.',
    category: 'ecommerce',
    image: '/images/work/ecommerce-project.svg',
    technologies: ['Shopify', 'React', 'Node.js', 'SEO'],
    results: [
      { metric: 'Revenue', value: '+340%' },
      { metric: 'Traffic', value: '2.8M/mo' },
      { metric: 'Conversion', value: '+125%' }
    ],
    caseStudySlug: 'fashion-ecommerce',
    year: '2025',
    featured: true,
    size: 'large',
    challenge: 'An outdated e-commerce platform with poor mobile experience and low conversion rates needed complete transformation.',
    solution: 'Rebuilt the entire e-commerce experience with modern Shopify Plus, custom React components, and comprehensive SEO optimization.'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Customer Support',
    tagline: 'AI-Powered Chatbot Dashboard',
    description: 'Enterprise-grade AI chatbot with natural language processing, multi-language support, and analytics dashboard.',
    category: 'ai',
    image: '/images/work/ai-automation.svg',
    technologies: ['OpenAI', 'Python', 'React', 'TensorFlow'],
    results: [
      { metric: 'Response Time', value: '-75%' },
      { metric: 'Satisfaction', value: '92%' },
      { metric: 'Cost Savings', value: '₹45L/yr' }
    ],
    caseStudySlug: 'ai-customer-support',
    year: '2026',
    featured: true,
    size: 'large',
    challenge: 'Customer support team was overwhelmed with repetitive queries, leading to long wait times and customer frustration.',
    solution: 'Developed an AI chatbot using OpenAI GPT-4 with custom training on company knowledge base, handling 80% of common queries automatically.'
  },
  {
    id: 'hotel-planner',
    title: 'Hotel Planner',
    tagline: 'Hospitality Management System',
    description: 'Comprehensive hotel management platform with booking engine, inventory management, and guest experience tools.',
    category: 'hospitality',
    image: '/images/work/real-estate-leads.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    results: [
      { metric: 'Efficiency', value: '+60%' },
      { metric: 'Occupancy', value: '+35%' },
      { metric: 'Guest Score', value: '4.7/5' }
    ],
    caseStudySlug: 'hotel-planner',
    year: '2025',
    size: 'medium',
    challenge: 'Manual booking processes and disconnected systems were causing operational inefficiencies and lost revenue.',
    solution: 'Created an integrated hotel management system with automated booking, inventory tracking, and guest communication tools.'
  },
  {
    id: 'bharat-bulletin',
    title: 'Bharat Bulletin',
    tagline: 'Digital News Platform',
    description: 'Modern news portal with real-time updates, video content, personalized feed, and ad revenue optimization.',
    category: 'media',
    image: '/images/work/healthcare-platform.svg',
    technologies: ['Next.js', 'Sanity CMS', 'TypeScript', 'Vercel'],
    results: [
      { metric: 'Page Views', value: '1.5M/mo' },
      { metric: 'Read Time', value: '+45%' },
      { metric: 'Ad Revenue', value: '+180%' }
    ],
    caseStudySlug: 'bharat-bulletin',
    year: '2025',
    size: 'medium',
    challenge: 'Legacy news platform with slow load times and poor mobile experience was losing readers to competitors.',
    solution: 'Built a modern JAMstack news platform with Sanity CMS, optimized for speed and mobile experience with personalized content delivery.'
  },
  {
    id: 'ai-marketing-automation',
    title: 'Marketing Automation',
    tagline: 'AI-Powered Marketing Platform',
    description: 'Automated marketing workflows with AI-driven content generation, scheduling, and performance analytics.',
    category: 'ai',
    image: '/images/work/ai-automation.svg',
    technologies: ['OpenAI', 'React', 'Python', 'PostgreSQL'],
    results: [
      { metric: 'Efficiency', value: '+300%' },
      { metric: 'Content', value: '1000+/mo' },
      { metric: 'ROI', value: '+250%' }
    ],
    caseStudySlug: 'marketing-automation',
    year: '2024',
    size: 'medium',
    challenge: 'Marketing team was spending too much time on repetitive tasks and struggling to maintain consistent content output.',
    solution: 'Developed an AI-powered marketing automation platform that generates, schedules, and optimizes content across multiple channels.'
  },
  {
    id: 'resort-hotel',
    title: 'Resort Hotel',
    tagline: 'Luxury Resort Website',
    description: 'Premium resort website with immersive visuals, online booking, virtual tours, and guest portal.',
    category: 'hospitality',
    image: '/images/work/real-estate-leads.svg',
    technologies: ['Next.js', 'Framer Motion', 'Stripe', 'Sanity'],
    results: [
      { metric: 'Bookings', value: '+85%' },
      { metric: 'Direct Revenue', value: '+120%' },
      { metric: 'Engagement', value: '+65%' }
    ],
    caseStudySlug: 'resort-hotel',
    year: '2025',
    size: 'small',
    challenge: 'Resort was losing bookings to OTAs due to lack of an engaging direct booking website.',
    solution: 'Created a visually stunning website with immersive photography, virtual tours, and seamless booking experience to drive direct bookings.'
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Platform',
    tagline: 'Telemedicine Solution',
    description: 'Healthcare platform redesign with appointment booking, video consultations, prescription management, and health records.',
    category: 'web',
    image: '/images/work/healthcare-platform.svg',
    technologies: ['React', 'Node.js', 'WebRTC', 'HIPAA'],
    results: [
      { metric: 'Appointments', value: '+220%' },
      { metric: 'User Base', value: '50k+' },
      { metric: 'Satisfaction', value: '4.9/5' }
    ],
    caseStudySlug: 'healthcare-platform',
    year: '2024',
    size: 'medium',
    challenge: 'Healthcare provider needed a HIPAA-compliant telemedicine platform to serve patients remotely during pandemic.',
    solution: 'Built a secure telemedicine platform with video consultations, e-prescriptions, and integrated health records management.'
  },
  {
    id: 'real-estate-leads',
    title: 'Real Estate CRM',
    tagline: 'Lead Generation System',
    description: 'Real estate lead generation system with automated follow-ups, property matching AI, and analytics dashboard.',
    category: 'web',
    image: '/images/work/real-estate-leads.svg',
    technologies: ['React', 'Node.js', 'AI', 'CRM'],
    results: [
      { metric: 'Leads', value: '+400%' },
      { metric: 'Conversion', value: '+150%' },
      { metric: 'Response Time', value: '-80%' }
    ],
    caseStudySlug: 'real-estate-crm',
    year: '2024',
    size: 'small',
    challenge: 'Real estate agents were losing leads due to slow response times and poor lead management.',
    solution: 'Developed a CRM with AI-powered lead scoring, automated follow-ups, and intelligent property matching to maximize conversions.'
  },
  {
    id: 'normans-restaurant',
    title: "Norman's Restaurant",
    tagline: 'Restaurant Website & Ordering',
    description: 'Modern restaurant website with online ordering, table reservations, menu management, and delivery integration.',
    category: 'hospitality',
    image: '/images/work/ecommerce-project.svg',
    technologies: ['Next.js', 'Stripe', 'Sanity', 'Twilio'],
    results: [
      { metric: 'Online Orders', value: '+200%' },
      { metric: 'Revenue', value: '+90%' },
      { metric: 'Repeat Rate', value: '68%' }
    ],
    caseStudySlug: 'normans-restaurant',
    year: '2025',
    size: 'small',
    challenge: 'Restaurant was losing customers to delivery apps and had no online ordering presence.',
    solution: 'Created a beautiful restaurant website with integrated online ordering, table reservations, and loyalty program to drive direct orders.'
  },
  {
    id: 'bindas-cafe',
    title: 'Bindas Cafe',
    tagline: 'Cafe & Food Delivery',
    description: 'Vibrant cafe website with online ordering, loyalty program, event booking, and social media integration.',
    category: 'hospitality',
    image: '/images/work/ai-automation.svg',
    technologies: ['WordPress', 'WooCommerce', 'Custom Theme'],
    results: [
      { metric: 'Orders', value: '+175%' },
      { metric: 'Loyalty Members', value: '5k+' },
      { metric: 'Social Reach', value: '+300%' }
    ],
    caseStudySlug: 'bindas-cafe',
    year: '2025',
    size: 'small',
    challenge: 'Cafe needed an online presence to compete with chain cafes and attract younger customers.',
    solution: 'Built a vibrant, social-media-friendly website with online ordering, event booking, and integrated loyalty rewards program.'
  }
];
