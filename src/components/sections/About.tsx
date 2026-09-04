import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA, CERTIFICATIONS, PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

const RotatingGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.25;
      meshRef.current.rotation.y = t * 0.35;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y = -t * 0.2;
      ringRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.6, 0]} />
          <meshStandardMaterial
            color="#6366f1"
            wireframe
            emissive="#4f46e5"
            emissiveIntensity={0.8}
          />
        </mesh>
      </Float>

      <mesh ref={ringRef}>
        <torusGeometry args={[2.2, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};

export const About: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setRotateX(-y * 0.03);
    setRotateY(x * 0.03);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto">
        <SectionHeader
          badge="// 01. IDENTITY & BACKGROUND"
          title="Turning ideas into"
          titleAccent="digital experiences."
          subtitle="Computer Science undergraduate at Panjab University & Oracle Cloud Certified Developer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Full Professional Portrait Frame with 3D Depth */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full rounded-3xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-surface/80 to-background">
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

              <div className="absolute inset-0 pointer-events-none opacity-50">
                <Canvas gl={{ alpha: true, antialias: true }}>
                  <ambientLight intensity={0.7} />
                  <pointLight position={[3, 3, 3]} intensity={1.5} color="#818cf8" />
                  <RotatingGeometry />
                </Canvas>
              </div>

              {/* 3D Perspective Card showing full proper portrait framing */}
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="relative z-10 p-3 sm:p-4 rounded-2xl bg-[#090a10]/95 border border-white/20 backdrop-blur-xl shadow-2xl space-y-4 w-full"
              >
                {/* Full Portrait Container with natural aspect ratio */}
                <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#07080c] group">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <div className="text-base font-display font-bold text-white">{PERSONAL_INFO.name}</div>
                      <div className="text-xs font-mono text-cyan-300">Software Engineer | Frontend</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 backdrop-blur-md">
                      ● Active
                    </span>
                  </div>
                </div>

                {/* Verified Credentials */}
                <div className="text-xs font-mono text-zinc-300 space-y-2 border-t border-white/10 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                      Education
                    </span>
                    <span className="text-zinc-200">Panjab University ('27)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                      Internship
                    </span>
                    <span className="text-zinc-200">Oasis Infobyte</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-orange-400" />
                      Certified
                    </span>
                    <span className="text-orange-300">Oracle OCI 2025 Pro</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      Location
                    </span>
                    <span className="text-zinc-200">Hoshiarpur, India</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Narrative & Statistics */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="text-zinc-300/90">
                  {p}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {ABOUT_DATA.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-4 rounded-2xl glass-panel border border-white/10 text-left hover:border-white/20 transition-colors"
                >
                  <div className="text-lg sm:text-xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono font-medium text-zinc-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-sans mt-0.5">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-2xl bg-surface/70 border border-white/10 hover:border-white/20 transition-all flex items-start gap-3"
                >
                  <div 
                    className="p-2 rounded-xl border flex-shrink-0 mt-0.5"
                    style={{ 
                      backgroundColor: `${cert.badgeColor}15`, 
                      borderColor: `${cert.badgeColor}30`,
                      color: cert.badgeColor 
                    }}
                  >
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-display font-bold text-white leading-tight">
                      {cert.title}
                    </span>
                    <div className="flex items-center gap-2 text-[10.5px] font-mono text-zinc-400">
                      <span className="text-indigo-400 font-semibold">{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans leading-normal">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
