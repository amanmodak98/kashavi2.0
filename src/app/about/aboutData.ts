// Content data for About page
// Note: founderStory + founderStory2 are kept for backwards compatibility,
// but the About page now renders the canonical `founders` array.
import { founders, whyWeBuilt, team as teamMembers } from '@/data/team';

export const founderStory = {
  eyebrow: "THE ORIGIN STORY",
  headline: "Started from frustration, built with purpose.",
  paragraphs: [
    "In 2021, I was watching businesses struggle with agencies that either couldn't code or couldn't design. Never both. They'd get beautiful mockups that couldn't be built, or functional products that looked like they were made in 2005.",
    "Great digital products require both creative thinking and technical excellence. Not one or the other. When design and development work together from day one, magic happens.",
    "Kashavi exists to prove that beautiful design and solid engineering aren't mutually exclusive. We're here to build products that look amazing and work flawlessly."
  ],
  signature: "Kapil Kumar, Founder & CEO",
  photo: "/images/team/Anurag-kashyap.jpg",
  photoAlt: "Kapil Kumar, Founder & CEO of Kashavi Infotech"
};

export const founderStory2 = {
  eyebrow: "DELIVERY & ENGINEERING",
  headline: "The builder who keeps every promise.",
  paragraphs: [
    "Anurag started shipping software at 18 and never stopped. Over twelve years he has personally led the build of 50+ digital products for clients across healthcare, travel, e-commerce, news media and SaaS — from a 2-week MVP for a Bharat-first D2C brand to a multi-tenant hotel platform used by 200+ properties.",
    "He runs Kashavi Infotech as Managing Director and Co-Founder, owning delivery, client relationships, and the standards every build is measured against. He signs off every architecture decision before code is written, and personally reviews every shipped release against the original brief.",
    "Anurag writes about pragmatic engineering, AI integration patterns and Indian-market product thinking. He believes great digital products are built by people who care more about the outcome than the deliverable."
  ],
  signature: "Anurag Kashyap",
  photo: "/images/team/Anurag-kashyap.jpg",
  photoAlt: "Anurag Kashyap, Managing Director & Co-Founder of Kashavi Infotech"
};

// Canonical founders array used by the About page
export { founders, whyWeBuilt };

export const problemCards = [
  {
    id: "agencies",
    icon: "💸",
    title: "Agencies That Can't Execute",
    description: "Beautiful mockups that never work in production. Designs that ignore technical constraints. Promises that can't be kept."
  },
  {
    id: "developers",
    icon: "🐌",
    title: "Developers Who Can't Design",
    description: "Functional but ugly. Fast to build but painful to use. Missing that polish that converts visitors to customers."
  },
  {
    id: "our-approach",
    icon: "⚡",
    title: "Our Approach",
    description: "Design and development working together from day one. Every pixel considered. Every line of code crafted. No compromises, just great work."
  }
];

export const values = [
  {
    id: "no-handoffs",
    name: "No Handoffs",
    icon: "🤝",
    description: "Designers and developers work together from the first sketch. Not sequential, simultaneous.",
    example: "On the Fashion E-Commerce project, our designer and lead developer sat together for the entire discovery phase. They debated hover states, data loading patterns, and mobile interactions before a single line of code was written. Result? Zero 'can't be done' surprises.",
    color: "#3B82F6"
  },
  {
    id: "quality",
    name: "Quality Over Everything",
    icon: "✨",
    description: "We'll miss a deadline before we'll ship something we're not proud of.",
    example: "We once delayed a launch by three days because the loading animation wasn't smooth enough. The client was okay with it. We weren't. Those details matter.",
    color: "#10B981"
  },
  {
    id: "transparency",
    name: "No Black Boxes",
    icon: "🔍",
    description: "You'll always understand what we're building and why. We explain, we teach, we share.",
    example: "Every client gets a walkthrough of their codebase. Not just 'here's how to edit content' but 'here's why we structured it this way.' We want you to own it, truly.",
    color: "#8B5CF6"
  },
  {
    id: "results",
    name: "Results, Not Awards",
    icon: "📊",
    description: "We care about business impact, not design awards. Pretty is pointless if it doesn't convert.",
    example: "We A/B test everything. That beautiful hero animation? Cut it when data showed it hurt mobile conversions. Ego doesn't ship.",
    color: "#F97316"
  },
  {
    id: "learning",
    name: "Always Learning",
    icon: "📚",
    description: "Technology changes weekly. We stay sharp by building side projects, contributing to open source, teaching others.",
    example: "Every Friday afternoon is learning time. Team members share new tools, techniques, or lessons learned. The Healthcare Platform redesign came from a pattern we discovered in these sessions.",
    color: "#6366F1"
  }
];

export const metrics = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 6, suffix: "", label: "Industries Served" },
  { value: 200, prefix: "+", suffix: "%", label: "Avg Revenue Growth" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 2021, suffix: "", label: "Founded" }
];

// Backwards-compatible team export — uses the rich team data from /data/team
export const team = teamMembers;

export const successStories = [
  {
    id: "fashion-ecommerce",
    client: "Fashion E-Commerce",
    challenge: "Outdated platform, 3% conversion rate, hemorrhaging to competitors",
    solution: "Complete platform rebuild with Next.js, SEO restructuring, performance optimization",
    results: [
      { label: "Revenue Growth", value: "+340%" },
      { label: "Monthly Visitors", value: "2.8M" },
      { label: "Conversion Rate", value: "+125%" }
    ],
    link: "/projects/fashion-ecommerce"
  },
  {
    id: "ai-support",
    client: "AI Customer Support",
    challenge: "Support team drowning in tickets, 24hr response times, customers frustrated",
    solution: "Custom AI chatbot with GPT-4, trained on knowledge base, integrated with existing tools",
    results: [
      { label: "Response Time", value: "-75%" },
      { label: "User Satisfaction", value: "92%" },
      { label: "Annual Savings", value: "₹45L" }
    ],
    link: "/projects/ai-customer-support"
  },
  {
    id: "healthcare",
    client: "Healthcare Platform",
    challenge: "Declining user engagement, accessibility complaints, outdated design",
    solution: "Complete UX redesign, WCAG 2.1 AA compliance, mobile-first approach",
    results: [
      { label: "Appointments", value: "+220%" },
      { label: "Active Users", value: "50k+" },
      { label: "User Rating", value: "4.9/5" }
    ],
    link: "/projects/healthcare-platform"
  }
];

export const process = [
  {
    number: 1,
    title: "Discovery",
    duration: "Week 1",
    description: "We ask annoying questions. Lots of them. About your business, your users, your goals, your constraints. We're not trying to sell you something you don't need."
  },
  {
    number: 2,
    title: "Design",
    duration: "Week 2-3",
    description: "You'll see sketches, wireframes, and prototypes. Lots of iteration. We'll show you three directions before we pick one. You'll be involved, not just approving."
  },
  {
    number: 3,
    title: "Build",
    duration: "Week 4-6",
    description: "Development starts before design is 'done' because good code informs good design. You'll see progress daily, not at the end."
  },
  {
    number: 4,
    title: "Launch",
    duration: "Week 7",
    description: "Testing, polish, optimization. We're probably more nervous than you are. Then we ship."
  },
  {
    number: 5,
    title: "Support",
    duration: "Week 8+",
    description: "We don't disappear. 30-day support included. We fix bugs, train your team, and make sure you're confident."
  }
];
