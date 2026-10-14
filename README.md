# AstraTech AI — Tactical Cyber Blueprint Web App

A clean, scalable, and maintainable Next.js 15 (App Router) + TypeScript web application for AstraTech AI developer collective and academy in Jamshedpur, Jharkhand.

## Architecture & Folder Structure

```text
my-app/
├── app/
│   ├── layout.tsx             # Root layout: fonts, Tailwind config, scanline overlay, Navbar & Footer
│   ├── page.tsx               # Home page: assembling Hero, AboutPreview, CoursesPreview, ProjectsPreview, CTASection
│   ├── globals.css            # Global Cyber Blueprint styles, scanlines, grids, brackets
│   │
│   ├── about/
│   │   └── page.tsx           # Canonical About page
│   │
│   ├── courses/
│   │   ├── page.tsx           # Course catalog with CourseGrid & syllabus modal
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic course detail page (SSG with generateStaticParams)
│   │
│   ├── projects/
│   │   ├── page.tsx           # Project showcase with ProjectGrid
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic project architecture detail page (SSG)
│   │
│   └── contact/
│       └── page.tsx           # Canonical contact & admissions page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Telemetry strip, branding, desktop nav, and enroll button
│   │   ├── Footer.tsx         # Sections index, regulatory links, and status indicator
│   │   └── MobileMenu.tsx     # Responsive tactical mobile dropdown navigation
│   │
│   ├── home/
│   │   ├── Hero.tsx           # Hero schematic, metric cards, and terminal hardware panel
│   │   ├── AboutPreview.tsx   # Mission matrix, 3 pillars, and marquee telemetry ticker
│   │   ├── CoursesPreview.tsx # 6-stage pedagogical pipeline
│   │   ├── ProjectsPreview.tsx# Optical feeds and 5 competitive advantage vectors
│   │   └── CTASection.tsx     # Enrollment gateway and direct admissions query terminal
│   │
│   ├── courses/
│   │   ├── CourseCard.tsx     # Individual course card with tech badges and actions
│   │   ├── CourseGrid.tsx     # Grid catalog, learning framework, and syllabus requisition
│   │   └── CourseDetails.tsx  # Dynamic course roadmap, modules, prerequisites, and outcomes
│   │
│   ├── projects/
│   │   ├── ProjectCard.tsx    # Editorial showcase card with metrics and specs
│   │   ├── ProjectGrid.tsx    # Flagship capstones, community nodes, and CTA
│   │   └── ProjectDetails.tsx # In-depth project telemetry, benchmarks, and architecture
│   │
│   └── common/
│       ├── Button.tsx         # Reusable tactical button & link component
│       ├── SectionHeading.tsx # Reusable blueprint schematic section heading
│       ├── Container.tsx      # Standardized responsive container wrapper
│       └── Loading.tsx        # Telemetry loading indicator
│
├── data/
│   ├── courses.ts             # Strongly typed courses, learning framework, and benefits
│   ├── projects.ts            # Strongly typed flagship and community capstone records
│   ├── navigation.ts          # Centralized navigation and footer menu configuration
│   └── site.ts                # Site metadata, telemetry, address, pillars, and leadership
│
├── lib/
│   ├── utils.ts               # Utility helpers (cn class merging, slug formatting)
│   └── constants.ts           # Route mappings and global metadata constants
│
├── types/
│   ├── course.ts              # Course and Module TypeScript interfaces
│   ├── project.ts             # Project and ProjectMetric TypeScript interfaces
│   └── common.ts              # NavItem, SiteConfig, and PipelineStage interfaces
│
└── public/
    ├── images/
    │   ├── courses/
    │   ├── projects/
    │   ├── team/
    │   └── general/
    ├── icons/
    └── videos/
```

## Canonical Routes

- `/` — Home Page
- `/about` — About AstraTech AI
- `/courses` — Course Catalog
- `/courses/[slug]` — Individual Course Roadmap (e.g. `/courses/full-stack-development`, `/courses/ai-machine-learning`)
- `/projects` — Project Showcase
- `/projects/[slug]` — Individual Project Architecture (e.g. `/projects/municipal-sensor-telemetry-hub`, `/projects/devflow-code-review-engine`)
- `/contact` — Admissions & Direct Desk Terminal

### Redirects

Canonical redirects are configured in `next.config.ts`:
- `/cources` → `/courses`
- `/project` → `/projects`

## How to Add New Courses & Projects

### Adding a New Course
Simply add a new course object to `data/courses.ts`:
```ts
{
  slug: "quantum-computing",
  title: "Quantum Computing & Qiskit",
  code: "07 // QC",
  status: "ENROLLMENT OPEN",
  category: "Quantum Information",
  duration: "12 Weeks",
  level: "Advanced",
  description: "...",
  techStack: ["Python", "Qiskit", "Linear Algebra"],
  prerequisites: ["Advanced linear algebra"],
  modules: [...],
  outcomes: [...]
}
```
The course will automatically appear in the `/courses` grid and generate its own static route at `/courses/quantum-computing`.

### Adding a New Project
Simply add a new project object to `data/projects.ts`. It will immediately appear on `/projects` and generate a dynamic page at `/projects/[slug]`.

## Development Commands

```bash
# Run development server
npm run dev

# Run linter
npm run lint

# Build production bundle
npm run build
```
