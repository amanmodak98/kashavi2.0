'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Core architectural structure
function CoreStructure({ animationPhase }: { animationPhase: number }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle breathing rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={meshRef} scale={animationPhase}>
      {/* Central frame structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#171717"
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Inner core */}
      <mesh position={[0, 0, 0]} scale={0.7}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#f97316"
          metalness={0.9}
          roughness={0.1}
          emissive="#f97316"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Thin frame lines */}
      {[
        [2, 0, 0],
        [-2, 0, 0],
        [0, 2, 0],
        [0, -2, 0],
        [0, 0, 2],
        [0, 0, -2],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.05, 0.05, 0.05]} />
          <meshStandardMaterial color="#525252" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

// Floating module component
function FloatingModule({
  position,
  label,
  index,
  animationPhase,
}: {
  position: [number, number, number];
  label: string;
  index: number;
  animationPhase: number;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating
      const offset = index * 0.5;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5 + offset) * 0.2;
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      scale={animationPhase * (hovered ? 1.1 : 1)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Module panel */}
      <mesh>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
        <meshStandardMaterial
          color={hovered ? '#f97316' : '#ffffff'}
          metalness={0.5}
          roughness={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Module frame */}
      <mesh>
        <boxGeometry args={[1.25, 0.85, 0.05]} />
        <meshStandardMaterial
          color="#171717"
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </mesh>

      {/* Small indicator node */}
      <mesh position={[-0.5, 0.3, 0.1]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
    </group>
  );
}

// Connection lines between modules and core
function ConnectionLine({
  start,
  end,
  progress,
}: {
  start: [number, number, number];
  end: [number, number, number];
  progress: number;
}) {
  const lineRef = useRef<THREE.Line>(null);

  useEffect(() => {
    if (lineRef.current) {
      const geometry = lineRef.current.geometry as THREE.BufferGeometry;
      const positions = geometry.attributes.position.array as Float32Array;

      // Animate line drawing
      const currentEnd = [
        start[0] + (end[0] - start[0]) * progress,
        start[1] + (end[1] - start[1]) * progress,
        start[2] + (end[2] - start[2]) * progress,
      ];

      positions[3] = currentEnd[0];
      positions[4] = currentEnd[1];
      positions[5] = currentEnd[2];

      geometry.attributes.position.needsUpdate = true;
    }
  }, [start, end, progress]);

  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#f97316', opacity: 0.6, transparent: true }))} ref={lineRef} />
  );
}

// Signal traveling along connection
function DataSignal({
  start,
  end,
  active,
}: {
  start: [number, number, number];
  end: [number, number, number];
  active: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && active) {
      const t = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2;
      meshRef.current.position.x = start[0] + (end[0] - start[0]) * t;
      meshRef.current.position.y = start[1] + (end[1] - start[1]) * t;
      meshRef.current.position.z = start[2] + (end[2] - start[2]) * t;
    }
  });

  if (!active) return null;

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial
        color="#f97316"
        emissive="#f97316"
        emissiveIntensity={1}
      />
    </mesh>
  );
}

// Main scene component
function Scene() {
  const { camera } = useThree();
  const [animationPhase, setAnimationPhase] = useState(0);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [activeSignals, setActiveSignals] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    // Phase 03 - Assemble 3D system
    let phaseInterval: NodeJS.Timeout | undefined;
    const phaseTimer = setTimeout(() => {
      phaseInterval = setInterval(() => {
        setAnimationPhase((prev) => Math.min(prev + 0.05, 1));
      }, 30);
    }, 1800);

    // Animate connections
    let connectionInterval: NodeJS.Timeout | undefined;
    const connectionTimer = setTimeout(() => {
      connectionInterval = setInterval(() => {
        setConnectionProgress((prev) => Math.min(prev + 0.02, 1));
      }, 30);
    }, 2200);

    // Activate data signals sequentially
    const signalTimers = [2800, 3200, 3600, 4000].map((delay, index) =>
      setTimeout(() => {
        setActiveSignals((prev) => {
          const newSignals = [...prev];
          newSignals[index] = true;
          return newSignals;
        });
      }, delay)
    );

    return () => {
      clearTimeout(phaseTimer);
      clearTimeout(connectionTimer);
      if (phaseInterval) clearInterval(phaseInterval);
      if (connectionInterval) clearInterval(connectionInterval);
      signalTimers.forEach(clearTimeout);
    };
  }, []);

  // Mouse parallax effect - respect reduced motion preference with RAF throttling
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return; // Skip parallax for reduced motion users
    }

    let ticking = false;
    let targetX = 0;
    let targetY = 0;

    const updateCamera = () => {
      camera.position.x = targetX;
      camera.position.y = targetY;
      ticking = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        targetX = (e.clientX / window.innerWidth - 0.5) * 0.1;
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.1;
        requestAnimationFrame(updateCamera);
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [camera]);

  const modules = [
    { position: [3, 2, 0] as [number, number, number], label: 'WEB' },
    { position: [-3, 2, 0] as [number, number, number], label: 'MOBILE' },
    { position: [3, -2, 0] as [number, number, number], label: 'AI' },
    { position: [-3, -2, 0] as [number, number, number], label: 'DATA' },
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#f97316" />

      {/* Core structure */}
      <CoreStructure animationPhase={animationPhase} />

      {/* Floating modules */}
      {modules.map((module, index) => (
        <FloatingModule
          key={index}
          position={module.position}
          label={module.label}
          index={index}
          animationPhase={animationPhase}
        />
      ))}

      {/* Connection lines */}
      {modules.map((module, index) => (
        <ConnectionLine
          key={`line-${index}`}
          start={[0, 0, 0]}
          end={module.position}
          progress={connectionProgress}
        />
      ))}

      {/* Data signals */}
      {modules.map((module, index) => (
        <DataSignal
          key={`signal-${index}`}
          start={[0, 0, 0]}
          end={module.position}
          active={activeSignals[index]}
        />
      ))}

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
    </>
  );
}

export default function DigitalSystem3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
