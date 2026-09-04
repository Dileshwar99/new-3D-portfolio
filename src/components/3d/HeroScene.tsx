import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { FallbackScene } from './FallbackScene';
import { Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

// Optimized Interactive Procedural 3D Laptop with realistic production code
const LaptopModel: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  const screenMesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 0.8) * 0.08;
    group.current.rotation.y = Math.sin(t * 0.4) * 0.08 - 0.2;
    group.current.rotation.x = 0.15 + Math.cos(t * 0.5) * 0.03;
  });

  return (
    <group ref={group} position={[-0.4, -0.2, 0]} scale={[1.15, 1.15, 1.15]}>
      {/* Base / Keyboard chassis */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.08, 1.7]} />
        <meshStandardMaterial 
          color="#18181f" 
          metalness={0.85} 
          roughness={0.25} 
        />
      </mesh>

      {/* Keyboard recessed area */}
      <mesh position={[0, 0.045, -0.1]}>
        <boxGeometry args={[2.2, 0.01, 1.0]} />
        <meshStandardMaterial color="#0c0d12" roughness={0.6} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.045, 0.55]}>
        <boxGeometry args={[0.85, 0.005, 0.5]} />
        <meshStandardMaterial color="#20222a" metalness={0.4} roughness={0.3} />
      </mesh>

      {/* Screen Lid */}
      <group position={[0, 0.05, -0.85]} rotation={[-0.45, 0, 0]}>
        <mesh position={[0, 0.8, 0]} castShadow>
          <boxGeometry args={[2.5, 1.6, 0.06]} />
          <meshStandardMaterial color="#14151b" metalness={0.9} roughness={0.2} />
        </mesh>

        <mesh ref={screenMesh} position={[0, 0.8, 0.035]}>
          <planeGeometry args={[2.35, 1.45]} />
          <meshStandardMaterial 
            color="#08090f" 
            emissive="#1e1b4b" 
            emissiveIntensity={0.6}
            roughness={0.1}
          />
        </mesh>

        {/* Dynamic Branded 3D Screen with Dileshwar Kumar's Name, College, and Code */}
        <Html
          transform
          position={[0, 0.8, 0.038]}
          rotation={[0, 0, 0]}
          distanceFactor={1.55}
          className="pointer-events-none select-none"
        >
          <div className="w-[370px] h-[230px] bg-[#07080d]/95 backdrop-blur-md rounded-lg p-3.5 border border-indigo-500/40 shadow-2xl flex flex-col font-mono text-[10px] text-zinc-300 leading-relaxed overflow-hidden">
            {/* Top Header Bar */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                <span className="text-[10px] font-bold text-zinc-200 ml-1 tracking-wide">dileshwar@dev-station</span>
              </div>
              <span className="text-[8.5px] font-semibold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                B.E. CSE 2023–2027
              </span>
            </div>
            
            {/* Prominent Name & College Banner on Screen */}
            <div className="mb-2 p-2 rounded-lg bg-gradient-to-r from-indigo-950/70 via-purple-950/40 to-[#0d0e15] border border-indigo-500/30">
              <div className="flex items-center justify-between">
                <div className="text-[12px] font-display font-bold text-white tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  DILESHWAR KUMAR
                </div>
                <span className="text-[8.5px] text-emerald-400 font-semibold bg-emerald-500/15 px-1.5 py-0.5 rounded">Active</span>
              </div>
              <div className="text-[9.5px] text-indigo-300 font-sans font-medium mt-0.5">
                Panjab University (SSGPURC, Hoshiarpur)
              </div>
            </div>

            {/* Code / Tech Stream */}
            <div className="space-y-1 text-zinc-300 text-[9.5px] flex-1">
              <p><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;</p>
              <p className="pl-3.5"><span className="text-zinc-400">role:</span> <span className="text-amber-300">"Frontend Developer & Data Enthusiast"</span>,</p>
              <p className="pl-3.5"><span className="text-zinc-400">stack:</span> [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Three.js"</span>, <span className="text-emerald-300">"Power BI"</span>, <span className="text-emerald-300">"SQL"</span>],</p>
              <p className="pl-3.5"><span className="text-zinc-400">cert:</span> <span className="text-indigo-300">"Oracle Cloud Infrastructure Certified"</span></p>
              <p>&#125;;</p>
            </div>

            {/* Terminal Footer */}
            <div className="pt-1.5 flex items-center justify-between text-[8.5px] text-zinc-400 border-t border-white/10">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live 3D Production Build
              </span>
              <span className="text-zinc-400">Panjab University</span>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
};

// Floating Holographic 3D Portrait Portal & Geometric Accents
const FloatingArtifacts: React.FC = () => {
  const avatarGroup = useRef<THREE.Group>(null);
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (avatarGroup.current) {
      avatarGroup.current.position.y = 0.9 + Math.sin(t * 1.1) * 0.1;
      avatarGroup.current.rotation.y = Math.sin(t * 0.4) * 0.12;
    }
    if (meshRef1.current) {
      meshRef1.current.rotation.x = t * 0.3;
      meshRef1.current.rotation.y = t * 0.4;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = -t * 0.2;
      meshRef2.current.rotation.z = t * 0.35;
      meshRef2.current.position.y = -0.9 + Math.cos(t * 0.9) * 0.1;
    }
  });

  return (
    <>
      {/* 3D Floating Executive Portrait Frame */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.7}>
        <group ref={avatarGroup} position={[2.2, 0.8, 0.4]}>
          <Html distanceFactor={2.4} transform className="pointer-events-none select-none">
            <div className="relative flex flex-col items-center">
              <div className="relative p-1.5 rounded-2xl bg-[#090a10]/95 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(99,102,241,0.45)]">
                <div className="w-32 h-44 rounded-xl overflow-hidden bg-[#07080c] relative border border-white/10">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-1.5 left-2 right-2 text-center">
                    <div className="text-[11px] font-display font-bold text-white leading-none">{PERSONAL_INFO.name}</div>
                    <div className="text-[8.5px] font-mono text-cyan-300">Software Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </Html>
        </group>
      </Float>

      {/* Floating Wireframe Icosahedron */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
        <mesh ref={meshRef1} position={[-2.2, 1.2, -0.4]}>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial 
            color="#818cf8" 
            wireframe 
            emissive="#6366f1"
            emissiveIntensity={0.8}
          />
        </mesh>
      </Float>

      {/* Floating Glowing Torus */}
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1}>
        <mesh ref={meshRef2} position={[-2.1, -0.8, 0.2]}>
          <torusGeometry args={[0.32, 0.08, 16, 32]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            metalness={0.9} 
            roughness={0.2}
            emissive="#0891b2"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </>
  );
};

// Interactive Mouse Responsive Particles
const ParticleField: React.FC<{ count?: number }> = ({ count = 90 }) => {
  const points = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorPalette = [
      new THREE.Color('#818cf8'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#c084fc'),
      new THREE.Color('#e0e7ff')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.y = t;
    points.current.rotation.x = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

const CameraRig: React.FC = () => {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.6, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.4 + 0.3, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

export const HeroScene: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) return null;

  if (!hasWebGL) {
    return <FallbackScene />;
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] select-none rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl">
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <PerspectiveCamera makeDefault position={[0, 0.4, 4.4]} fov={45} />
        <CameraRig />

        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.6} castShadow />
        <pointLight position={[-4, 3, 2]} intensity={2.5} color="#818cf8" />
        <pointLight position={[4, -2, 2]} intensity={2.0} color="#06b6d4" />
        <pointLight position={[0, 4, -2]} intensity={1.2} color="#c084fc" />

        <LaptopModel />
        <FloatingArtifacts />
        <ParticleField count={70} />

        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.45}
          scale={7}
          blur={2.5}
          far={3}
          color="#000000"
        />
      </Canvas>
    </div>
  );
};
