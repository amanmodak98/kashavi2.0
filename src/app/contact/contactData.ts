// Contact page data

export const contactTabs = [
  {
    id: 'project',
    label: 'New Project',
    title: 'Start Your Project',
    description: "Tell us about your project and we'll get back to you within 24 hours.",
    fields: ['name', 'email', 'message'],
    messagePlaceholder: "What are you building? What problems are you solving? Any timeline or budget in mind?",
    submitText: 'Send Message',
    successMessage: "Thanks for reaching out! We've received your message and will get back to you within 24 hours."
  },
  {
    id: 'support',
    label: 'Support',
    title: 'Get Support',
    description: 'Existing clients receive priority response.',
    fields: ['name', 'email', 'projectName', 'message'],
    messagePlaceholder: "How can we help with your project?",
    submitText: 'Request Support',
    successMessage: "We've received your support request. A team member will reach out shortly."
  },
  {
    id: 'careers',
    label: 'Careers',
    title: 'Join Our Team',
    description: "We're always looking for talented people.",
    fields: ['name', 'email', 'portfolio', 'message'],
    messagePlaceholder: "What role interests you? What makes you excited about joining Kashavi?",
    submitText: 'Submit Application',
    successMessage: "Thank you for your interest! We'll review your application and get back to you within a week."
  },
  {
    id: 'general',
    label: 'General',
    title: 'General Inquiry',
    description: 'Have a question? We\'re here to help.',
    fields: ['name', 'email', 'subject', 'message'],
    messagePlaceholder: "What can we help you with?",
    submitText: 'Send Message',
    successMessage: "Message received! We'll respond as soon as possible."
  }
];

export const contactMethods = [
  {
    id: 'email',
    icon: '📧',
    title: 'Email Us',
    description: 'For detailed inquiries',
    value: 'hello@kashaviinfotech.com',
    link: 'mailto:hello@kashaviinfotech.com',
    linkText: 'Send Email'
  },
  {
    id: 'call',
    icon: '📞',
    title: 'Book a Call',
    description: 'Schedule a free consultation',
    value: '30-minute free call',
    link: 'https://calendly.com/kashavi', // Replace with actual Calendly link
    linkText: 'Book Now'
  },
  {
    id: 'whatsapp',
    icon: '💬',
    title: 'WhatsApp',
    description: 'Quick questions?',
    value: 'Chat with us',
    link: 'https://wa.me/1234567890', // Replace with actual WhatsApp number
    linkText: 'Start Chat'
  },
  {
    id: 'social',
    icon: '🔗',
    title: 'Social Media',
    description: 'Follow our journey',
    value: 'Connect with us',
    links: [
      { name: 'LinkedIn', url: 'https://linkedin.com/company/kashavi' },
      { name: 'Twitter', url: 'https://twitter.com/kashavi' },
      { name: 'Instagram', url: 'https://instagram.com/kashavi' }
    ]
  }
];

export const processSteps = [
  {
    number: 1,
    title: 'You Submit',
    description: 'Fill out the form or send an email'
  },
  {
    number: 2,
    title: 'We Respond (24hrs)',
    description: "We'll acknowledge receipt and ask any follow-up questions"
  },
  {
    number: 3,
    title: 'Discovery Call',
    description: "We'll schedule a 30-min call to understand your needs (no obligation)"
  },
  {
    number: 4,
    title: 'Proposal',
    description: "If it's a fit, we'll send a detailed proposal with timeline and pricing"
  },
  {
    number: 5,
    title: "Let's Build",
    description: 'Once approved, we kick off your project!'
  }
];

export const officeInfo = {
  location: 'Remote-first team',
  subtitle: 'Serving clients worldwide',
  regions: 'India • USA • Europe',
  hours: 'Monday - Friday',
  time: '9:00 AM - 6:00 PM IST',
  languages: 'English, Hindi'
};

export const quickFAQs = [
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! First 30-minute call is always free.'
  },
  {
    question: 'How soon can you start?',
    answer: 'Typically within 1-2 weeks for new projects.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! We have clients across the globe.'
  },
  {
    question: "What if I'm not sure what I need?",
    answer: "That's okay! We'll help you figure it out."
  }
];
