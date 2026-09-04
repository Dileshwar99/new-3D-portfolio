import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, PerspectiveCamera, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { SKILLS_ECOSYSTEM, PERSONAL_INFO } from '../../data/portfolioData';
import { SkillNode } from '../../types/portfolio';
import { Sparkles, Atom, Code2, Terminal, Database, BarChart3, Cpu, FileCode, Palette, Table, GitBranch } from 'lucide-react';
import { GitHubIcon } from '../ui/Icons';

const iconMap: Record<string, React.ElementType> = {
  Atom,
  Code2,
  Terminal,
  Database,
  BarChart3,
  Cpu,
  FileCode,
  Palette,
  Table,
  GitBranch,
  Github: GitHubIcon,
};

interface Node3DProps {
  skill: SkillNode;
  isSelected: boolean;
  isHovered: boolean;
  onHover: (skill: SkillNode | null) => void;
  onClick: (skill: SkillNode) => void;
}

const SkillNodeItem: React.FC<Node3DProps> = ({
  skill,
  isSelected,
  isHovered,
  onHover,
  onClick,
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const Icon = iconMap[skill.iconName] || Code2;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * skill.orbitSpeed * 0.4;
    const angle = t + (SKILLS_ECOSYSTEM.findIndex(s => s.id === skill.id) * (Math.PI * 2 / SKILLS_ECOSYSTEM.length));
    
    // Smooth orbit path
    const x = Math.cos(angle) * skill.orbitRadius;
    const z = Math.sin(angle) * skill.orbitRadius;
    const y = skill.orbitElevation + Math.sin(t * 1.5) * 0.15;

    meshRef.current.position.set(x, y, z);
    // Face the camera
    meshRef.current.quaternion.copy(state.camera.quaternion);
  });

  return (
    <group ref={meshRef}>
      {/* 3D connecting line back to center */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0, 0, 0, 0, -skill.orbitElevation, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={isHovered || isSelected ? skill.color : '#ffffff'}
          transparent
          opacity={isHovered || isSelected ? 0.6 : 0.12}
        />
      </line>

      <Html distanceFactor={4.5} center className="pointer-events-auto select-none">
        <button
          onClick={() => onClick(skill)}
          onMouseEnter={() => onHover(skill)}
          onMouseLeave={() => onHover(null)}
          className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-xl transition-all duration-300 transform active:scale-95 cursor-pointer ${
            isSelected || isHovered
              ? 'bg-[#181a24] border-white/40 scale-110 shadow-lg'
              : 'bg-[#0d0e14]/85 border-white/10 hover:border-white/25 hover:scale-105'
          }`}
          style={{
            boxShadow: isSelected || isHovered ? `0 0 20px -2px ${skill.color}55` : 'none',
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: skill.color }}
          />
          <Icon className="w-3.5 h-3.5" style={{ color: skill.color }} />
          <span className="text-xs font-mono font-medium text-zinc-200 whitespace-nowrap">
            {skill.name}
          </span>
        </button>
      </Html>
    </group>
  );
};

// Central 3D Branded Core with Dileshwar's Portrait
const CentralCore: React.FC<{ activeSkill: SkillNode | null }> = ({ activeSkill }) => {
  const coreRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.2;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.4;
      ringRef1.current.rotation.y = t * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = -t * 0.35;
      ringRef2.current.rotation.z = t * 0.25;
    }
  });

  return (
    <group ref={coreRef} position={[0, 0, 0]}>
      {/* Outer Gyro Rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[1.5, 0.02, 16, 64]} />
        <meshStandardMaterial 
          color={activeSkill ? activeSkill.color : '#818cf8'} 
          emissive={activeSkill ? activeSkill.color : '#6366f1'} 
          emissiveIntensity={0.6}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh ref={ringRef2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.75, 0.015, 16, 64]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#0891b2" 
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Central Floating Portrait Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Html center distanceFactor={3.2} className="pointer-events-none select-none">
          <div className="flex flex-col items-center justify-center">
            {/* Glowing Avatar Frame */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-600 shadow-[0_0_30px_rgba(99,102,241,0.6)] border border-white/25">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#0d0e14]">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Core Label */}
            <div className="mt-2 px-3 py-1 rounded-full bg-[#090a10]/90 backdrop-blur-md border border-white/15 shadow-2xl text-center">
              <div className="text-[11px] font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300 uppercase">
                DILESHWAR
              </div>
              <div className="text-[8.5px] font-mono text-emerald-400 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Tech Core</span>
              </div>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
};

export const SkillsEcosystem3D: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(SKILLS_ECOSYSTEM[0]);
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);

  const activeSkill = hoveredSkill || selectedSkill;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-panel border border-white/10 p-4 lg:p-6 bg-gradient-to-b from-surface/60 to-background">
      {/* Top Section Header inside container */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10 z-10 relative">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
          <h3 className="font-display font-semibold text-lg text-zinc-100">
            Interactive 3D Technology Ecosystem
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-surface/80 px-3 py-1.5 rounded-full border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Click or hover nodes to inspect</span>
        </div>
      </div>

      {/* Main 3D Canvas Area */}
      <div className="relative w-full h-[460px] md:h-[540px]">
        {/* Background depth glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-96 h-96 rounded-full blur-[140px] opacity-25 transition-colors duration-700"
            style={{ backgroundColor: activeSkill.color }}
          />
        </div>

        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <PerspectiveCamera makeDefault position={[0, 1.2, 7.2]} fov={50} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 + 0.3}
            minPolarAngle={Math.PI / 2 - 0.5}
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={0.4}
          />

          <ambientLight intensity={0.9} />
          <pointLight position={[0, 4, 3]} intensity={2.0} color="#818cf8" />
          <pointLight position={[0, -4, -3]} intensity={1.5} color="#06b6d4" />

          {/* Central Branded Node with Dileshwar's Portrait */}
          <CentralCore activeSkill={activeSkill} />

          {/* Orbiting Tech Nodes */}
          {SKILLS_ECOSYSTEM.map((skill) => (
            <SkillNodeItem
              key={skill.id}
              skill={skill}
              isSelected={selectedSkill.id === skill.id}
              isHovered={hoveredSkill?.id === skill.id}
              onHover={setHoveredSkill}
              onClick={setSelectedSkill}
            />
          ))}
        </Canvas>

        {/* Dynamic Floating Inspector Card (Bottom Left / Overlay) */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-20">
          <div className="glass-panel-hover p-4 rounded-2xl border border-white/15 shadow-2xl backdrop-blur-xl transition-all duration-300">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3.5 h-3.5 rounded-lg shadow-sm"
                  style={{ backgroundColor: activeSkill.color }}
                />
                <h4 className="font-display font-bold text-base text-zinc-100">
                  {activeSkill.name}
                </h4>
                <span className="text-[10.5px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                  {activeSkill.category}
                </span>
              </div>
              <span 
                className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md border"
                style={{
                  color: activeSkill.color,
                  borderColor: `${activeSkill.color}44`,
                  backgroundColor: `${activeSkill.color}15`,
                }}
              >
                {activeSkill.level}
              </span>
            </div>
            
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              "{activeSkill.description}"
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Quick Selector Pill Tray */}
      <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-2">
        {SKILLS_ECOSYSTEM.map((skill) => (
          <button
            key={skill.id}
            onClick={() => setSelectedSkill(skill)}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 border cursor-pointer ${
              activeSkill.id === skill.id
                ? 'bg-indigo-500/20 text-indigo-200 border-indigo-500/50 shadow-sm'
                : 'bg-surface/60 text-zinc-400 border-white/5 hover:border-white/20 hover:text-zinc-200'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
            {skill.name}
          </button>
        ))}
      </div>
    </div>
  );
};
