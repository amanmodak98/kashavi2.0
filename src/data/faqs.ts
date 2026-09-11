export type FaqItem = {
  id: string;
  category: 'general' | 'pricing' | 'process' | 'technical' | 'support';
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: 'pricing-model',
    category: 'pricing',
    question: 'How is pricing structured? Do you offer fixed quotes or hourly billing?',
    answer:
      'We offer both. Most engagements start with a fixed-scope proposal tied to a clear deliverable and timeline — no surprise invoices. Long-running engagements can move to a monthly retainer (dedicated team) or an AI-augmented hours bank. We share a transparent scope document before any work starts so pricing is never a guessing game.',
  },
  {
    id: 'timeline',
    category: 'process',
    question: 'How long does a typical project take from kickoff to launch?',
    answer:
      'Most websites ship in 2–4 weeks, full web apps in 4–6 weeks, and mobile apps in 6–10 weeks. AI chatbot integrations usually land in 3–5 weeks. We commit to a launch date in the proposal and we hit it — on-time delivery rate sits at 98% across the last two years.',
  },
  {
    id: 'ip-ownership',
    category: 'general',
    question: 'Do we own the code and IP once the project is delivered?',
    answer:
      'Yes. Every build is assigned to your company on completion. You receive the full codebase, design files, repository access, deployment credentials, and a signed IP assignment. No licence fees, no code escrow games — the work is yours, full stop.',
  },
  {
    id: 'nda-contracts',
    category: 'general',
    question: 'Can you sign an NDA before we share details?',
    answer:
      'Absolutely. We sign mutual NDAs as a standard first step, before any discovery call. For larger engagements we work under a Master Services Agreement with custom IP, confidentiality and data-handling clauses that fit your procurement process.',
  },
  {
    id: 'timezone',
    category: 'process',
    question: 'What hours do you overlap with clients in the US, UK and EU?',
    answer:
      'Our team works 09:00–19:00 IST. That gives us a 4–5 hour overlap with US Eastern, 6–8 hours with UK / EU, and we offer an async-first culture with daily Loom updates and a shared workspace. Most of our clients say we feel like an in-house team — not an offshore vendor.',
  },
  {
    id: 'payment-terms',
    category: 'pricing',
    question: 'What are your payment terms?',
    answer:
      'Fixed-scope projects are typically 50% upfront to start and 50% on launch. Retainers are billed monthly in advance. We accept bank transfer (India & international), major credit cards and Razorpay. Standard payment terms are Net-7 on invoices.',
  },
  {
    id: 'tech-stack',
    category: 'technical',
    question: 'What technology stack do you work with?',
    answer:
      'Frontend is React, Next.js and TypeScript with Tailwind CSS. Backend is Node.js, Python or Go depending on the use case. Mobile is React Native or Flutter. AI is OpenAI, Anthropic Claude, and open-source models via LangChain. Database is PostgreSQL or MongoDB. We deploy on AWS, Vercel or your own infrastructure.',
  },
  {
    id: 'post-launch',
    category: 'support',
    question: 'What happens after launch? Do you provide ongoing support?',
    answer:
      'Every project ships with 30–90 days of included support depending on tier. After that, most clients move to one of our monthly retainers — covering bug fixes, security patches, performance monitoring and small feature additions. The same team that built your product stays on it.',
  },
];
