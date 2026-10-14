import { SiteConfig, MetricItem, PipelineStage } from "@/types/common";

export const siteConfig: SiteConfig = {
  name: "AstraTech AI",
  shortName: "ASTRATECH",
  tagline: "BUILDING THE NEXT GENERATION OF <TECH TALENT/>",
  systemTag: "AI.OS",
  labLocation: "// JAMSHEDPUR LAB",
  coordinates: "LAT: 22.8046°N // LON: 86.2029°E",
  status: "SYS_STATUS: NOMINAL // FEED: 99.8%",
  clock: "CLK: UTC+05:30",
  defenseAuth: "DEF_AUTH: PROTOCOL_L5",
  address: "AstraTech AI Lab, Bistupur, Jamshedpur, Jharkhand — 831001",
  email: "admissions@astratech.ai",
  directorEmail: "director@astratech.ai",
  phone: "+91 (Admissions Hotline Active)",
  socialLinks: [
    { name: "Camera", href: "#", icon: "photo_camera" },
    { name: "Share", href: "#", icon: "share" },
    { name: "Terminal", href: "#", icon: "terminal" },
    { name: "Video", href: "#", icon: "smart_display" },
    { name: "Chat", href: "#", icon: "chat" },
  ],
};

export const heroMetrics: MetricItem[] = [
  { value: "100%", label: "Practical & Git-Backed", highlight: "text-hud-amber" },
  { value: "0%", label: "Passive PPT Lectures", highlight: "text-hud-green" },
  { value: "JAMSHEDPUR", label: "Jharkhand AI Hub", highlight: "text-white" },
  { value: "PROD_READY", label: "Microservice Arch", highlight: "text-hud-cyan" },
];

export const missionPillars = [
  {
    id: "01",
    tag: "[NODE_01 // CORE]",
    icon: "psychology",
    title: "01 // THINK",
    desc: "Develop technical intellect, rigorous computational logic, and deep algorithmic problem-solving ability that scales across distributed systems.",
    detail: "> Logic & First Principles",
    badge: "[ALGO]",
  },
  {
    id: "02",
    tag: "[NODE_02 // SYSTEM]",
    icon: "precision_manufacturing",
    title: "02 // BUILD",
    desc: "Turn theoretical knowledge into real, production-ready applications with test coverage, Git versioning, and clean software architecture.",
    detail: "> Production Artifacts",
    badge: "[CI/CD]",
  },
  {
    id: "03",
    tag: "[NODE_03 // IMPACT]",
    icon: "bolt",
    title: "03 // CREATE",
    desc: "Apply autonomous AI agents and modern web architectures to solve high-friction municipal, healthcare, and industrial challenges.",
    detail: "> Real-World Deployment",
    badge: "[LIVE]",
  },
];

export const pipelineStages: PipelineStage[] = [
  {
    id: "01",
    step: "01",
    title: "> LEARN",
    description: "Build rock-solid theoretical fundamentals from scratch.",
  },
  {
    id: "02",
    step: "02",
    title: "> PRACTICE",
    description: "Daily coding exercises and deterministic edge-case testing.",
  },
  {
    id: "03",
    step: "03",
    title: "> BUILD",
    description: "Create production applications solving genuine societal needs.",
  },
  {
    id: "04",
    step: "04",
    title: "> DEPLOY",
    description: "Take live repos to public cloud endpoints and monitor uptime.",
  },
  {
    id: "05",
    step: "05",
    title: "> SHOWCASE",
    description: "Maintain an undeniable GitHub record of public commits.",
  },
  {
    id: "06",
    step: "06",
    title: "> GROW",
    description: "Sharpen system-level mindset and industry leadership.",
  },
];

export const competitiveAdvantages = [
  {
    id: "01",
    title: "> LEARN BY BUILDING",
    desc: "Zero dry lectures; 100% of curriculum executed inside Git repos.",
  },
  {
    id: "02",
    title: "> GROW TOGETHER",
    desc: "Collaborate with peers who push standards higher every week.",
  },
  {
    id: "03",
    title: "> PUSH LIMITS",
    desc: "Tackle complex architectural challenges beyond standard coursework.",
  },
  {
    id: "04",
    title: "> CREATE IMPACT",
    desc: "Solve localized municipal and regional industrial friction in Jamshedpur.",
  },
  {
    id: "05",
    title: "> PORTFOLIO READY",
    desc: "Graduate with public GitHub repositories, deployed URLs, and verified tests.",
  },
];

export const leadership = {
  name: "Aniket Kumar",
  role: "Director & Lead Systems Architect",
  title: "FOUNDER & ACADEMIC DIRECTOR",
  bio: "Engineering first-principles software and autonomous systems in Jamshedpur, Jharkhand. Dedicated to replacing legacy certification rote-learning with production Git repositories, distributed computing, and regional talent acceleration.",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACRt5M2CZ1KUg0uVvpESy_5wa0mGTbDIUMyg3NJt_EEo1pgB",
  quote: "“The goal is not to produce certified beginners. The goal is to build sovereign engineers who can diagnose kernel traces and design resilient distributed systems.”",
};
