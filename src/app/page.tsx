import { HeroConversion } from '@/components/home/HeroConversion';
import { Marquee } from '@/components/home/Marquee';
import { TrustedBy } from '@/components/home/TrustedBy';
import { ResultsWall } from '@/components/home/ResultsWall';
import { MetricsBar } from '@/components/home/MetricsBar';
import { TrustBuilder } from '@/components/home/TrustBuilder';
import { EngagementModels } from '@/components/home/EngagementModels';
import { Industries } from '@/components/home/Industries';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Testimonials } from '@/components/home/Testimonials';
import { Awards } from '@/components/home/Awards';
import { FAQ } from '@/components/home/FAQ';

export default function Home() {
  return (
    <main>
      <HeroConversion />
      <Marquee />
      <TrustedBy />
      <ResultsWall />
      <MetricsBar />
      <TrustBuilder />
      <EngagementModels />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <Awards />
      <FAQ />
    </main>
  );
}
