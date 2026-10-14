export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  slug: string;
  title: string;
  code: string;
  description: string;
  status: "ENROLLMENT OPEN" | "COMING SOON" | "ARCHIVED" | string;
  duration: string;
  level: string;
  category: string;
  image?: string;
  techStack: string[];
  prerequisites: string[];
  modules: CourseModule[];
  outcomes: string[];
}
