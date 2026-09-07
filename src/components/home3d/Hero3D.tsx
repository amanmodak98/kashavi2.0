'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Hero3DMobile } from './Hero3DMobile';

// Lazy load 3D hero only for desktop
const Hero3DDesktop = dynamic(
  () => import('./Hero3DDesktop').then(mod => ({ default: mod.Hero3DDesktop })),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-stone-600 font-medium">Loading...</p>
        </div>
      </div>
    )
  }
);

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return mounted && matches;
}

export function Hero3D() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show mobile version during SSR and for mobile devices
  if (!mounted || isMobile) {
    return <Hero3DMobile />;
  }

  // Show 3D version for desktop
  return <Hero3DDesktop />;
}
