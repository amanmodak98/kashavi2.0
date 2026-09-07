import { Hero3D } from "@/components/home3d/Hero3D";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Services } from "@/components/home/Services";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero - 3D Desktop / Optimized Mobile */}
      <Hero3D />

      {/* 2. Trusted By - Social proof */}
      <TrustedBy />

      {/* 3. Services - What we do */}
      <Services />

      {/* 4. Featured Work - Best 3 projects */}
      <FeaturedWork />

      {/* 5. Why Choose Us - Differentiation */}
      <WhyChooseUs />

      {/* 6. How It Works - Simple process */}
      <HowItWorks />

      {/* 7. Testimonials - Social proof */}
      <Testimonials />

      {/* 8. Final CTA - Convert */}
      <FinalCTA />
    </main>
  );
}
