import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    code: "01 // FDE",
    status: "ENROLLMENT OPEN",
    category: "Full Stack Engineering",
    duration: "16 Weeks (Intensive)",
    level: "Intermediate to Advanced",
    description:
      "Build modern web applications from frontend to backend, APIs, databases and deployment. Zero dry PPT lectures — 100% of curriculum executed inside Git pull requests.",
    techStack: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS", "Redis"],
    prerequisites: ["Familiarity with basic JavaScript or any programming language", "Git mindset & curiosity"],
    modules: [
      {
        title: "Module 1: Architecture & Modern JavaScript/TypeScript",
        topics: ["Modern ECMAScript & Node runtime internals", "Strict TypeScript typings & generics", "Async control flow & stream pipelines"],
      },
      {
        title: "Module 2: High-Performance Frontend Systems",
        topics: ["Next.js App Router & Server Components (RSC)", "Client-side state management patterns", "Tailwind CSS design systems & accessibility"],
      },
      {
        title: "Module 3: Scalable Backend Services & Databases",
        topics: ["RESTful & RPC microservice architectures", "PostgreSQL schema optimization & index tuning", "Connection pooling, migrations & Prisma ORM"],
      },
      {
        title: "Module 4: Production Deployment & Observability",
        topics: ["Containerization with Docker & Multi-stage builds", "Automated CI/CD via GitHub Actions", "Zero-downtime deployment, caching & monitoring"],
      },
    ],
    outcomes: [
      "Architect and ship production-ready full stack web applications.",
      "Manage real database migrations and query optimization on PostgreSQL.",
      "Maintain a verified public GitHub portfolio with tests and automated CI/CD.",
    ],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    code: "02 // AIML",
    status: "ENROLLMENT OPEN",
    category: "Applied Artificial Intelligence",
    duration: "20 Weeks (Deep Dive)",
    level: "Intermediate to Advanced",
    description:
      "Build practical foundations in artificial intelligence and machine learning through projects. Dissect transformers, embeddings, autonomous agent loops, and neural net weights.",
    techStack: ["Python 3.12", "PyTorch", "Hugging Face", "FastAPI", "Vector DBs (pgvector)", "LangChain", "CUDA"],
    prerequisites: ["Linear algebra & calculus fundamentals", "Python programming proficiency"],
    modules: [
      {
        title: "Module 1: Foundations of Machine Learning",
        topics: ["NumPy, Pandas, & vector mathematics", "Supervised & unsupervised learning algorithms", "Cost functions, gradient descent & regularization"],
      },
      {
        title: "Module 2: Deep Learning & Neural Architectures",
        topics: ["PyTorch computational graphs & autograd", "Convolutional networks & vision embeddings", "Recurrent networks to attention mechanisms"],
      },
      {
        title: "Module 3: Transformers & Generative AI Systems",
        topics: ["Self-attention mathematical breakdown", "Fine-tuning open weights (Llama 3, Mistral)", "Retrieval-Augmented Generation (RAG) pipelines"],
      },
      {
        title: "Module 4: Agentic Frameworks & Production Inference",
        topics: ["Autonomous multi-agent orchestration loops", "FastAPI streaming inference endpoints", "Quantization, GPU memory management & vLLM"],
      },
    ],
    outcomes: [
      "Train, fine-tune, and evaluate deep learning models in PyTorch.",
      "Deploy low-latency RAG systems and autonomous AI agents to production.",
      "Dissect model weights, attention matrices, and inference performance bottlenecks.",
    ],
  },
  {
    slug: "programming-dsa",
    title: "Programming & DSA",
    code: "03 // DSA",
    status: "ENROLLMENT OPEN",
    category: "Computer Science Core",
    duration: "12 Weeks (Foundational)",
    level: "Beginner to Advanced",
    description:
      "Build strong programming fundamentals and algorithmic problem-solving skills. Master computational complexity, memory management, and deterministic code reasoning.",
    techStack: ["C++20", "Data Structures", "Algorithms", "GDB Debugger", "Linux CLI"],
    prerequisites: ["Passion for rigorous logical problem-solving"],
    modules: [
      {
        title: "Module 1: Memory Layout & First-Principles Syntax",
        topics: ["Stack vs Heap allocation & pointers", "Bit manipulation & binary arithmetic", "Time and space complexity (Big-O rigorous proofs)"],
      },
      {
        title: "Module 2: Linear & Non-Linear Data Structures",
        topics: ["Linked lists, stacks, queues & circular buffers", "Hash maps, collision resolution & load factors", "Binary trees, AVL trees, and heaps"],
      },
      {
        title: "Module 3: Advanced Graph Algorithms & Dynamic Programming",
        topics: ["BFS, DFS, Dijkstra, Bellman-Ford & A*", "Memoization vs Tabulation DP patterns", "Greedy strategies & divide-and-conquer paradigms"],
      },
    ],
    outcomes: [
      "Solve complex algorithmic problems with optimal time/space efficiency.",
      "Deeply understand lower-level memory operations and cache locality.",
      "Ace technical whiteboarding sessions and systems engineering interviews.",
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    code: "04 // DATA",
    status: "ENROLLMENT OPEN",
    category: "Business Intelligence & Telemetry",
    duration: "12 Weeks (Applied)",
    level: "Beginner to Intermediate",
    description:
      "Learn to work with real-world municipal and industrial telemetry datasets. Clean, model, query, and transform messy information into actionable strategic insights.",
    techStack: ["SQL (PostgreSQL)", "Python", "Pandas", "PowerBI", "Tableau", "Jupyter"],
    prerequisites: ["Basic computer literacy", "Interest in metrics and statistics"],
    modules: [
      {
        title: "Module 1: Advanced Relational SQL Queries",
        topics: ["Window functions, CTEs & recursive joins", "Aggregations & index execution plans", "Data cleaning & normalization rules"],
      },
      {
        title: "Module 2: Python for Data Engineering",
        topics: ["Pandas & NumPy data manipulation", "Handling missing values & anomaly detection", "Exploratory Data Analysis (EDA) playbooks"],
      },
      {
        title: "Module 3: Dashboards & Strategic Storytelling",
        topics: ["Interactive BI dashboards in PowerBI / Tableau", "Visual hierarchy & decision-making KPIs", "Civic & industrial telemetry case studies"],
      },
    ],
    outcomes: [
      "Query millions of rows efficiently using advanced SQL techniques.",
      "Build live telemetry dashboards tracking real-world KPIs.",
      "Derive evidence-based conclusions from messy unstructured datasets.",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    code: "05 // CLOUD",
    status: "ENROLLMENT OPEN",
    category: "Infrastructure & Systems Operations",
    duration: "14 Weeks (Hands-On)",
    level: "Intermediate",
    description:
      "Master the foundations of modern cloud platforms, container orchestration, GitOps automation, and production observability.",
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Linux"],
    prerequisites: ["Basic Linux CLI familiarity", "Understanding of client-server networking"],
    modules: [
      {
        title: "Module 1: Linux Kernel, Shell & Networking",
        topics: ["POSIX systems programming basics & systemd", "TCP/IP, DNS, SSL/TLS certificates & reverse proxies", "Bash scripting & automation tasks"],
      },
      {
        title: "Module 2: Containers & Orchestration",
        topics: ["Docker engine architecture & image hardening", "Docker Compose multi-service topologies", "Kubernetes pods, services, ingress & configmaps"],
      },
      {
        title: "Module 3: Cloud Infrastructure & CI/CD Pipelines",
        topics: ["Infrastructure as Code using Terraform on AWS", "GitHub Actions automated test & release pipelines", "Prometheus & Grafana telemetry monitoring"],
      },
    ],
    outcomes: [
      "Provision declarative cloud infrastructure with Terraform.",
      "Build automated CI/CD deployment pipelines with zero downtime.",
      "Monitor system health, alerts, and container logs at scale.",
    ],
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    code: "06 // UIUX",
    status: "ENROLLMENT OPEN",
    category: "Product Design & Interfaces",
    duration: "10 Weeks (Studio-Based)",
    level: "Beginner to Intermediate",
    description:
      "Learn how to design intuitive, high-leverage digital interfaces, robust atomic design systems, and cohesive user journeys from prototype to production.",
    techStack: ["Figma", "Design Tokens", "Prototyping", "Wireframing", "Tailwind CSS"],
    prerequisites: ["Visual curiosity and attention to detail"],
    modules: [
      {
        title: "Module 1: User Research & Information Architecture",
        topics: ["User empathy mapping & workflow interviews", "Information architecture & navigation hierarchies", "Low-fidelity wireframing & rapid prototyping"],
      },
      {
        title: "Module 2: Visual Systems & Design Tokens",
        topics: ["Typography scales & optical alignment", "Color theory, accessibility (WCAG AA/AAA) & contrast", "Building reusable component libraries in Figma"],
      },
      {
        title: "Module 3: Design-to-Code Handoff",
        topics: ["Translating design tokens to Tailwind CSS", "Micro-interactions & state transition flows", "Developer collaboration & usability audits"],
      },
    ],
    outcomes: [
      "Design high-fidelity interactive prototypes in Figma.",
      "Build comprehensive, scalable design systems with token libraries.",
      "Collaborate effectively with developers during product implementation.",
    ],
  },
];

export const learningFramework = [
  {
    title: "WORKSHOPS",
    format: "FORMAT: IN-LAB DISSECTION",
    freq: "[ FREQ: BI-WEEKLY ]",
    desc: "Hands-on intensive technical breakdowns, interactive code dissection and systems engineering.",
  },
  {
    title: "PROJECT BUILDING",
    format: "FORMAT: PRODUCTION SPRINTS",
    freq: "[ FREQ: WEEKLY ]",
    desc: "Collaborative sprints, real-world code architecture in the tech lab.",
  },
  {
    title: "HACKATHONS",
    format: "FORMAT: TIME-CONSTRAINED SPRINT",
    freq: "[ FREQ: MONTHLY ]",
    desc: "Fast-paced prototyping, shipping functional products under clock pressure.",
  },
  {
    title: "DEVELOPER SESSIONS",
    format: "FORMAT: PEER FORUM & REFACTOR",
    freq: "[ AUDIT: OPEN_ACCESS ]",
    desc: "Deep code reviews, peer feedback, live refactoring and architecture discussions.",
  },
];

export const learnerBenefits = [
  { title: "PRACTICAL PROJECTS", desc: "Learn by building things that actually work." },
  { title: "HANDS-ON LEARNING", desc: "Apply concepts through practical implementation." },
  { title: "DEVELOPER COMMUNITY", desc: "Learn, share and build alongside other learners." },
  { title: "HACKATHONS & CHALLENGES", desc: "Put your skills to the test through real challenges." },
  { title: "PROJECT SHOWCASE", desc: "Turn your work into something you can actually show." },
  { title: "CONTINUOUS GROWTH", desc: "Keep learning beyond the program." },
];
