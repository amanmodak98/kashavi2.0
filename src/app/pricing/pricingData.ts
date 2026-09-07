// Pricing data for Kashavi Infotech

export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for small businesses & MVPs',
    priceRange: '$2,500 - $5,000',
    period: 'per project',
    description: 'Get your idea off the ground with a professional web presence.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '30 days support',
      '2 revision rounds',
      'Mobile-friendly',
      'Fast delivery (2-3 weeks)',
    ],
    cta: 'Get Started',
    timeline: '2-3 weeks',
    popular: false,
    color: '#78716C'
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For businesses ready to scale',
    priceRange: '$7,500 - $15,000',
    period: 'per project',
    description: 'Everything you need to grow your business online.',
    features: [
      'Up to 15 pages',
      'Custom design system',
      'Advanced SEO & analytics',
      'CMS integration',
      'E-commerce ready',
      'API integrations',
      '60 days support',
      'Unlimited revisions',
      'Performance optimization',
      'Mobile app compatible',
    ],
    cta: 'Get Started',
    timeline: '4-6 weeks',
    popular: true,
    color: '#F97316'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Complex projects & ongoing partnership',
    priceRange: "Let's Talk",
    period: 'custom pricing',
    description: 'Tailored solutions for your unique needs.',
    features: [
      'Unlimited pages/features',
      'Custom applications',
      'Dedicated team',
      'Priority support',
      'System integrations',
      'White-label solutions',
      'SLA guarantee',
      'Ongoing development',
      'Strategic consulting',
    ],
    cta: 'Book Consultation',
    timeline: 'Custom',
    popular: false,
    color: '#8B5CF6'
  }
];

export const retainers = [
  {
    id: 'maintenance',
    name: 'Maintenance',
    price: '$500',
    period: 'per month',
    description: 'Keep your site running smoothly',
    features: [
      'Bug fixes',
      'Security updates',
      'Performance monitoring',
      'Monthly reports',
      'Email support'
    ]
  },
  {
    id: 'support',
    name: 'Support + Updates',
    price: '$1,000',
    period: 'per month',
    description: 'Everything in Maintenance plus content updates',
    features: [
      'Everything in Maintenance',
      'Content updates',
      'Feature enhancements',
      'Priority support',
      '5 hours/month included'
    ],
    popular: true
  },
  {
    id: 'development',
    name: 'Ongoing Development',
    price: '$2,500',
    period: 'per month',
    description: 'Continuous improvement and new features',
    features: [
      'Everything in Support',
      'Continuous development',
      'Strategic consulting',
      'Dedicated developer',
      '20 hours/month included'
    ]
  }
];

export const addOns = [
  { name: 'Extra Pages', price: '$200-500 per page' },
  { name: 'Custom Integrations', price: '$500-2,000' },
  { name: 'SEO Package', price: '$1,500' },
  { name: 'Performance Optimization', price: '$1,000' },
  { name: 'Analytics Dashboard', price: '$500' },
  { name: 'Email Marketing Setup', price: '$800' },
  { name: 'Social Media Integration', price: '$400' }
];

export const faqs = [
  {
    question: 'Can I upgrade my package later?',
    answer: "Absolutely! You can start with Starter and upgrade to Growth or Enterprise as your needs grow. We'll credit what you've already paid."
  },
  {
    question: "What if my project doesn't fit a package?",
    answer: "That's what Enterprise is for. We'll create a custom proposal tailored to your specific needs and budget."
  },
  {
    question: 'Do you offer discounts for nonprofits?',
    answer: 'Yes! We offer 20% off for registered nonprofits and educational institutions. Reach out to learn more.'
  },
  {
    question: 'What happens after the project is delivered?',
    answer: 'You get support for 30-60 days (depending on package). After that, you can continue with a retainer or reach out anytime for help.'
  },
  {
    question: 'Can I pay in installments?',
    answer: 'For Growth and Enterprise packages, yes. We can break payments into milestones that work for your budget.'
  },
  {
    question: "What's not included in these prices?",
    answer: 'Third-party services (domains, hosting, premium plugins) and custom content creation (copywriting, professional photography). We\'ll be upfront about any additional costs.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! We work with clients worldwide and handle different currencies and time zones seamlessly.'
  },
  {
    question: 'How do revisions work?',
    answer: 'Starter includes 2 rounds, Growth has unlimited within the original scope. Major scope changes are handled as separate items.'
  }
];

export const comparisonFeatures = [
  {
    category: 'Core Features',
    features: [
      { name: 'Pages/Screens', starter: '5', growth: '15', enterprise: 'Unlimited' },
      { name: 'Responsive Design', starter: true, growth: true, enterprise: true },
      { name: 'Custom Design System', starter: false, growth: true, enterprise: true },
      { name: 'Performance Optimization', starter: false, growth: true, enterprise: true }
    ]
  },
  {
    category: 'Development',
    features: [
      { name: 'CMS Integration', starter: false, growth: true, enterprise: true },
      { name: 'E-commerce Ready', starter: false, growth: true, enterprise: true },
      { name: 'API Integrations', starter: false, growth: true, enterprise: true },
      { name: 'Custom Applications', starter: false, growth: false, enterprise: true }
    ]
  },
  {
    category: 'Support',
    features: [
      { name: 'Design Revisions', starter: '2 rounds', growth: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Support Duration', starter: '30 days', growth: '60 days', enterprise: 'Ongoing' },
      { name: 'Response Time', starter: '48 hours', growth: '24 hours', enterprise: 'Priority' },
      { name: 'Dedicated Team', starter: false, growth: false, enterprise: true }
    ]
  }
];
