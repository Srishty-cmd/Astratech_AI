export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  cohort: string;
  description: string;
  builtBy: string;
  program: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  alt?: string;
  status?: string;
  metrics?: ProjectMetric[];
  highlights?: string[];
}
