import { Project, SkillNode, TimelineItem, StatItem } from '../types/portfolio';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeColor: string;
  description: string;
  icon: string;
}

export const PERSONAL_INFO = {
  name: 'Dileshwar Kumar',
  logoText: 'DK',
  headline: 'Frontend Developer | Software Engineer | Data Enthusiast',
  roles: ['Frontend Developer', 'Software Engineer', 'Data Analyst', 'Oracle Cloud Certified'],
  shortIntro: 'Building modern, interactive, and scalable digital products.',
  heroDescription: 'Computer Science undergraduate at Panjab University with hands-on experience in building responsive web applications and interactive Power BI business analytics dashboards. Oracle Cloud Infrastructure 2025 Certified Developer.',
  status: 'Open to Opportunities',
  email: 'dileshwarkumar561@gmail.com',
  phone: '+91 9313318882',
  location: 'Panjab University, Hoshiarpur, India',
  educationSummary: 'Bachelor of Engineering in Computer Science (2023–2027) • Panjab University',
  github: 'https://github.com/Dileshwar99',
  linkedin: 'https://www.linkedin.com/in/dileshwarkumar/',
  resumeUrl: '/resume.pdf',
  avatarUrl: '/profile.jpg',
};

export const ABOUT_DATA = {
  heading: 'Engineering Scalable Web Interfaces & Analytical Systems.',
  paragraphs: [
    'I am a Computer Science undergraduate at Panjab University (2023–2027) focused on building high-performance, responsive web applications with modern frontend technologies and creating actionable business intelligence dashboards using Power BI and DAX.',
    'I possess strong fundamentals in Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, and Computer Networks, with practical experience delivering end-to-end frontend interfaces.',
    'As an Oracle Cloud Infrastructure 2025 Certified Developer Professional with internship experience at Oasis Infobyte, I focus on clean code, modular architecture, and delivering software that solves real business challenges.'
  ],
  stats: [
    { value: 'Oracle OCI', label: 'Cloud Certified', sublabel: '2025 Developer Pro' },
    { value: 'Oasis Infobyte', label: 'Web Dev Intern', sublabel: 'Jan 2025 – Feb 2025' },
    { value: '2023–2027', label: 'Panjab University', sublabel: 'B.E. Computer Science' },
    { value: 'Deloitte', label: 'Data Analytics', sublabel: 'Job Simulation' },
  ] as StatItem[]
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'oracle-oci',
    title: 'Oracle Cloud Infrastructure 2025 Certified Developer Professional',
    issuer: 'Oracle',
    date: 'Sep 2025',
    badgeColor: '#f97316',
    description: 'Demonstrates hands-on proficiency in cloud-native application development, microservices, containerization, and Oracle Cloud architecture.',
    icon: 'Cloud'
  },
  {
    id: 'deloitte-da',
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    date: 'Apr 2026',
    badgeColor: '#10b981',
    description: 'Practical training on data wrangling, transformation pipelines, business intelligence modeling, and executive KPI reporting.',
    icon: 'BarChart'
  }
];

export const SKILLS_ECOSYSTEM: SkillNode[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Languages',
    description: 'ES6+, DOM manipulation, asynchronous programming, and dynamic web application logic.',
    color: '#f59e0b',
    level: 'Advanced',
    iconName: 'Code2',
    orbitRadius: 2.2,
    orbitSpeed: -0.45,
    orbitElevation: -0.2
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    description: 'Component architecture, custom hooks, state management, and modern SPA development.',
    color: '#06b6d4',
    level: 'Advanced',
    iconName: 'Atom',
    orbitRadius: 2.5,
    orbitSpeed: 0.4,
    orbitElevation: 0.3
  },
  {
    id: 'powerbi',
    name: 'Power BI / DAX',
    category: 'Data & BI',
    description: 'Data modeling, Power Query transformations, DAX calculations, and interactive KPI reporting.',
    color: '#eab308',
    level: 'Advanced',
    iconName: 'BarChart3',
    orbitRadius: 2.8,
    orbitSpeed: -0.35,
    orbitElevation: 0.2
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Data & BI',
    description: 'Relational database querying, multi-table joins, aggregations, and schema design.',
    color: '#ec4899',
    level: 'Advanced',
    iconName: 'Database',
    orbitRadius: 3.0,
    orbitSpeed: -0.38,
    orbitElevation: -0.3
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    description: 'Data analysis, automation scripting, algorithms, and backend logic development.',
    color: '#3b82f6',
    level: 'Proficient',
    iconName: 'Terminal',
    orbitRadius: 3.2,
    orbitSpeed: 0.3,
    orbitElevation: 0.4
  },
  {
    id: 'cpp',
    name: 'C++ & C',
    category: 'Languages',
    description: 'Object-oriented programming, data structures, algorithms, and performance optimization.',
    color: '#8b5cf6',
    level: 'Advanced',
    iconName: 'Cpu',
    orbitRadius: 3.4,
    orbitSpeed: -0.28,
    orbitElevation: 0.5
  },
  {
    id: 'html',
    name: 'HTML5',
    category: 'Frontend',
    description: 'Semantic markup, accessibility standards, cross-browser compatibility, and SEO structure.',
    color: '#f97316',
    level: 'Advanced',
    iconName: 'FileCode',
    orbitRadius: 2.3,
    orbitSpeed: 0.42,
    orbitElevation: -0.3
  },
  {
    id: 'css',
    name: 'CSS3 / Tailwind',
    category: 'Frontend',
    description: 'Modern flexbox, grid, responsive layouts, animations, and clean design systems.',
    color: '#38bdf8',
    level: 'Advanced',
    iconName: 'Palette',
    orbitRadius: 2.6,
    orbitSpeed: -0.36,
    orbitElevation: 0.4
  },
  {
    id: 'excel',
    name: 'Power Query & Excel',
    category: 'Data & BI',
    description: 'Data transformation, ETL pipelines, pivot reporting, and statistical modeling.',
    color: '#10b981',
    level: 'Advanced',
    iconName: 'Table',
    orbitRadius: 3.3,
    orbitSpeed: 0.28,
    orbitElevation: -0.4
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Tools',
    description: 'Branch workflows, pull requests, version control, and collaborative repository management.',
    color: '#f43f5e',
    level: 'Advanced',
    iconName: 'GitBranch',
    orbitRadius: 3.5,
    orbitSpeed: -0.25,
    orbitElevation: 0.2
  }
];

export const MARQUEE_TECH = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React.js',
  'Next.js',
  'Node.js & Express.js',
  'Power BI',
  'Power Query',
  'DAX Measures',
  'SQL',
  'Python',
  'C++ & C',
  'Microsoft Excel',
  'Git / GitHub',
  'Oracle Cloud (OCI)',
  'Data Cleaning & Modeling'
];

export const PROJECTS: Project[] = [
  {
    id: 'dportfolio',
    number: '01',
    title: 'Personal Portfolio Website',
    tagline: 'Modular Multi-Section Developer Portfolio & Interactive Showcase',
    description: 'A fully responsive personal portfolio with a modular multi-section layout (Home, About, Skills, Projects, Contact), smooth scroll-spy navigation, and an AJAX contact form.',
    longDescription: 'Designed and developed a fully responsive personal portfolio website with a modular multi-section layout. Implemented interactive frontend features including smooth scroll-spy navigation, a sticky navbar, a mobile hamburger menu, dynamic Typed.js animations, animated skill progress bars, and an AJAX-based contact form (FormSubmit API) providing real-time feedback without page reload. Managed through Git and GitHub with a clean commit history.',
    category: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Typed.js', 'FormSubmit API', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/Dileshwar99',
    liveUrl: '#live-simulator-dportfolio',
    featured: true,
    accentColor: '#6366f1',
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    problem: 'Static resumes do not showcase interactive frontend capabilities, responsive mobile navigation, DOM state management, or asynchronous API integration.',
    solution: 'Built a lightweight web application featuring scroll-spy navigation, dynamic typing animations, real-time AJAX form feedback, and a cross-device responsive layout.',
    keyFeatures: [
      'Modular section architecture: Home, About, Skills, Services, Projects, Contact',
      'Smooth scroll-spy navigation with sticky navbar and active link tracking',
      'Typed.js typing effect animation and interactive skill progress indicators',
      'FormSubmit AJAX API integration with real-time feedback (no page reload)',
      'Git and GitHub version control with clear, iterative commit history'
    ],
    metrics: [
      { label: 'Responsive Design', value: '100% Mobile Ready' },
      { label: 'Form Feedback', value: 'Instant AJAX' },
      { label: 'Lighthouse Score', value: '99/100' }
    ],
    uiMockupType: 'browser-code'
  },
  {
    id: 'blinkit-sales-dashboard',
    number: '02',
    title: 'Blinkit Sales Dashboard',
    tagline: 'Quick-Commerce Business Intelligence & DAX Analytics',
    description: 'An interactive Power BI dashboard analyzing Blinkit’s sales performance, outlet metrics, and customer ratings across product categories.',
    longDescription: 'Built an end-to-end Power BI dashboard analyzing grocery quick-commerce operations for Blinkit to support data-driven business decisions. Designed KPI cards and visuals including Total Sales, Average Sales, Items Sold, and Average Customer Rating alongside breakdowns by fat content, item type, outlet size, outlet location, and outlet establishment trends. Cleaned, transformed, and modeled raw sales data in Power Query, then wrote custom DAX measures.',
    category: 'Data Analytics',
    technologies: ['Power BI', 'Power Query', 'DAX Measures', 'Data Modeling', 'Data Visualization'],
    githubUrl: 'https://github.com/Dileshwar99/Blinkit-Sales-Dashboard-Power-BI.git',
    liveUrl: '#live-simulator-blinkit',
    featured: true,
    accentColor: '#eab308',
    gradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    problem: 'Unorganized sales logs make it difficult for management to evaluate outlet tier performance, product velocity, and item-level revenue trends.',
    solution: 'Engineered an interactive Power BI dashboard with DAX calculations, enabling real-time slicing by outlet tier, location, size, and product categories.',
    keyFeatures: [
      'KPI metrics: Total Sales ($1.20M), Average Sales ($141), Items Sold (8,523), Rating (3.9 ★)',
      'Item Fat Content sales analysis across Low Fat vs Regular products',
      'Tiered outlet analysis: Tier 1 (Downtown), Tier 2 (Metropolitan), and Tier 3 (Suburban)',
      'Power Query ETL data cleaning pipeline with calculated DAX measures'
    ],
    metrics: [
      { label: 'Total Sales Analyzed', value: '$1.20M' },
      { label: 'Products Modeled', value: '8,523 Items' },
      { label: 'Avg Customer Rating', value: '3.9 / 5.0 ★' }
    ],
    uiMockupType: 'dashboard-bi'
  },
  {
    id: 'super-store-sales-dashboard',
    number: '03',
    title: 'Super Store Sales Dashboard',
    tagline: 'Multi-Category Retail Sales & Profitability DAX Analytics',
    description: 'A Power BI dashboard analyzing sales performance, profitability, and customer purchasing patterns across a multi-category retail dataset.',
    longDescription: 'Developed a comprehensive Power BI retail business dashboard analyzing customer purchasing trends, regional profitability, and shipment channels. Built interactive views across Sales, Profit, Quantity, Category, Sub-Category, Region, Segment, Ship Mode, and Payment Mode to enable actionable business insights. Applied data cleaning, transformation, and modeling in Power Query and DAX.',
    category: 'Data Analytics',
    technologies: ['Power BI', 'Power Query', 'DAX', 'Microsoft Excel', 'Data Cleaning', 'Data Modeling'],
    githubUrl: 'https://github.com/Dileshwar99/Power-BI-Super-store-sales-dashboard.git',
    liveUrl: '#live-simulator-superstore',
    featured: true,
    accentColor: '#06b6d4',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    problem: 'Complex multi-category spreadsheets often obscure unprofitable product segments, regional margin variances, and shipping inefficiencies.',
    solution: 'Designed an interactive analytics dashboard with Power Query data cleaning and DAX measures to isolate high-margin categories, regional trends, and customer segments.',
    keyFeatures: [
      'Multi-metric views: Sales, Profit Margins, Quantity, and Shipping Channels',
      'Hierarchical category drill-downs for Technology, Office Supplies, and Furniture',
      'Regional performance analysis (East, West, Central, South) with interactive slicers',
      'Power Query data cleaning pipeline ensuring high reporting accuracy'
    ],
    metrics: [
      { label: 'Data Cleaning Accuracy', value: '99.9%' },
      { label: 'Analysis Dimensions', value: '9 Slicers' },
      { label: 'Profit Visibility', value: 'Real-Time Views' }
    ],
    uiMockupType: 'analytics-charts'
  },
  {
    id: 'ecommerce-website',
    number: '04',
    title: 'Modern E-Commerce Web Application',
    tagline: 'Interactive Online Storefront with Product Catalog & Dynamic Cart',
    description: 'A responsive e-commerce web platform featuring product category filtering, real-time cart state management, checkout simulation, and search.',
    longDescription: 'Engineered a modern, fully responsive e-commerce web application with interactive product browsing, multi-category filtering, dynamic price calculation, and real-time shopping cart state management. Features responsive product cards with hover effects, instant add-to-cart badges, promotional banner carousels, and order summary calculation.',
    category: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Cart State Management', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/Dileshwar99/ecommerce-website.git',
    liveUrl: '#live-simulator-ecommerce',
    featured: true,
    accentColor: '#10b981',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    problem: 'Traditional static storefront templates lack client-side interactive cart states, instant category switching, and real-time total recalculations without page reloads.',
    solution: 'Built a lightweight, responsive e-commerce application with dynamic DOM state handling, interactive shopping cart management, and instant multi-category product filtering.',
    keyFeatures: [
      'Dynamic product catalog with instant category filtering (Electronics, Fashion, Essentials)',
      'Real-time interactive shopping cart with quantity adjustment and instant price recalculation',
      'Responsive product grid with badges, star ratings, and smooth hover micro-interactions',
      'Simulated instant checkout flow with live order confirmation feedback',
      'Clean Git version control with open-source repository @Dileshwar99'
    ],
    metrics: [
      { label: 'Cart Responsiveness', value: 'Instant (<10ms)' },
      { label: 'Device Adaptability', value: '100% Mobile Ready' },
      { label: 'Product Filter Speed', value: 'Real-time' }
    ],
    uiMockupType: 'ecommerce-store'
  },
  {
    id: 'restaurant-website',
    number: '05',
    title: 'Gourmet Restaurant & Table Booking Platform',
    tagline: 'Interactive Culinary Showcase, Digital Menu & Table Reservation System',
    description: 'A responsive dining website featuring interactive multi-course menu navigation, online reservation simulator, customer reviews, and chef specials.',
    longDescription: 'Developed a dynamic gourmet restaurant and dining experience web application. Features interactive multi-course menu cards with price tags and dietary badges, simulated real-time table reservation booking system with date/time pickers and guest counters, smooth scroll navigation, and a responsive mobile layout.',
    category: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Interactive Menu', 'Reservation System', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/Dileshwar99/restaurant-website.git',
    liveUrl: '#live-simulator-restaurant',
    featured: true,
    accentColor: '#f59e0b',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    problem: 'Traditional restaurant websites are static PDF menus that fail to offer interactive dish exploration, dietary filtering, or instant table reservation confirmation.',
    solution: 'Designed an interactive culinary web platform with category tabs (Starters, Main Course, Desserts, Beverages), dynamic booking form simulator, and instant reservation confirmation.',
    keyFeatures: [
      'Interactive culinary menu with dietary tags (Chef Special, Vegan, Gluten-Free)',
      'Real-time table reservation simulator with party size, date, and time slot selection',
      'Smooth scroll-spy navigation across Story, Menu, Chef Specials, and Booking',
      'High-performance cross-device responsive UI built with semantic HTML and CSS',
      'Open-source repository hosted on GitHub @Dileshwar99'
    ],
    metrics: [
      { label: 'Reservation Flow', value: 'Instant Feedback' },
      { label: 'Menu Exploration', value: 'Interactive Tabs' },
      { label: 'Mobile Compatibility', value: '100% Fluid' }
    ],
    uiMockupType: 'restaurant-food'
  }
];

export const TIMELINE_JOURNEY: TimelineItem[] = [
  {
    id: 'internship-oasis',
    period: 'Jan 2025 — Feb 2025',
    title: 'Web Development Intern — Oasis Infobyte',
    subtitle: 'Frontend & Dynamic Web Applications',
    category: 'Internships',
    description: 'Built responsive, cross-browser web pages using HTML, CSS, and JavaScript, translating design mockups into functional interfaces. Developed and deployed dynamic web applications end-to-end, from UI implementation to functional testing. Used Git and GitHub for version control, branching, and collaborative code management. Debugged and refined live projects to improve application performance and user experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub', 'Testing'],
    highlight: 'Full-cycle web deployment & Git collaborative branching'
  },
  {
    id: 'education-pu',
    period: '2023 — 2027',
    title: 'Bachelor of Engineering in Computer Science',
    subtitle: 'Panjab University • Hoshiarpur, India',
    category: 'Education',
    description: 'Undergraduate student in Computer Science & Engineering. Key coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Operating Systems, Database Management Systems (DBMS), Computer Networking, and Software Engineering.',
    technologies: ['C++', 'C', 'Python', 'SQL', 'Data Structures', 'DBMS', 'OS', 'Networking'],
    highlight: 'Core CS Foundations & Software Engineering'
  },
  {
    id: 'certifications-cloud',
    period: 'Sep 2025 — Apr 2026',
    title: 'Oracle Cloud Certified Developer & Deloitte Simulation',
    subtitle: 'Industry Certifications & Training',
    category: 'Learning',
    description: 'Earned the Oracle Cloud Infrastructure 2025 Certified Developer Professional credential demonstrating cloud architecture and development proficiency. Completed the Deloitte Data Analytics Job Simulation focusing on data cleaning, DAX modeling, and executive KPI reporting.',
    technologies: ['Oracle Cloud (OCI)', 'Power BI', 'Power Query', 'DAX', 'Deloitte'],
    highlight: 'Oracle Cloud Certified Developer Professional'
  },
  {
    id: 'projects-milestone',
    period: '2024 — 2026',
    title: 'Software Development & Analytics Projects',
    subtitle: 'Open Source Software Engineering & Analytics Solutions',
    category: 'Projects',
    description: 'Designed, built, and open-sourced projects on GitHub (@Dileshwar99), including responsive web platforms with AJAX APIs, quick-commerce Blinkit sales intelligence dashboards, and Super Store retail analytics suites with DAX modeling.',
    technologies: ['HTML5/CSS3', 'JavaScript', 'React', 'Power BI', 'Power Query', 'DAX', 'SQL'],
    highlight: 'All projects available on GitHub @Dileshwar99'
  }
];
