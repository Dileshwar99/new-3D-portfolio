export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Frontend' | 'Data Analytics' | 'Full Stack' | 'Web Engineering';
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  gradient: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  metrics?: { label: string; value: string }[];
  uiMockupType: 'browser-code' | 'dashboard-bi' | 'analytics-charts' | 'ecommerce-store' | 'restaurant-food';
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'Frontend' | 'Languages' | 'Data & BI' | 'Tools';
  description: string;
  color: string;
  level: string; // e.g. "Advanced", "Proficient"
  iconName: string;
  orbitRadius: number;
  orbitSpeed: number;
  orbitElevation: number;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  category: 'Education' | 'Projects' | 'Internships' | 'Learning';
  description: string;
  technologies?: string[];
  highlight?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}
