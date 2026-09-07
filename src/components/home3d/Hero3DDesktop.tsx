'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import Link from 'next/link';
import { MainSphere, OrbitRings, FloatingElements } from './Scene3D';

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export function Hero3DDesktop() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas dpr={[1, 2]}>
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} angle={0.3} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97316" />

            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

            {/* Scene */}
            <MainSphere />
            <OrbitRings />
            <FloatingElements />

            {/* Environment */}
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl pointer-events-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight">
              Digital solutions<br />
              that <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">actually work</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed max-w-2xl">
              We build websites and apps that grow your business. Beautiful design, solid code, real results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-xl">
              <div>
                <div className="text-4xl font-black text-orange-500 mb-1">50+</div>
                <div className="text-sm text-stone-400">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-black text-orange-500 mb-1">98%</div>
                <div className="text-sm text-stone-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-black text-orange-500 mb-1">2-3wk</div>
                <div className="text-sm text-stone-400">Delivery</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/50 hover:shadow-xl hover:scale-105"
              >
                <span>Start Your Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold text-lg rounded-xl hover:bg-white/20 transition-all"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
