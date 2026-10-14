import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "municipal-sensor-telemetry-hub",
    number: "PROJECT / 001",
    title: "MUNICIPAL SENSOR TELEMETRY HUB",
    cohort: "COHORT 2025",
    builtBy: "Aman Sharma",
    program: "FDE Engine",
    techStack: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    description:
      "Real-time municipal telemetry ingestion pipeline tracking air quality, industrial emission levels, and municipal water flow across Jamshedpur industrial zones.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHJ7QdW0UoZA7vz9pWtSke3Cf_9o4ygoGW_-M7S08CwCfJ6pD3BbY-Gwr-N0dd6N8Hi7IEtn-CBqbbA5JvY9D8haFBrQKvbR8GnZSfwNGQ4RI1IxTD5vDFX1lMJ7YSKGzRLnn_2u-bpOMzsMzrPHq4BSPsUZ49_v9edgZ_yLBz1xakNeafgsZVBJ1nS8WqXohFinBEMdXRU2TodHqdgrHER0tdQb6IiqCEm7SAG4U",
    alt: "Municipal Sensor Telemetry Hub dashboard displaying geospatial air quality sensors and Jamshedpur industrial node metrics.",
    metrics: [
      { label: "INGESTION RATE", value: "45,000 evt/sec" },
      { label: "SENSOR NODES", value: "128 Industrial Nodes" },
      { label: "QUERY LATENCY", value: "< 14ms" },
    ],
    highlights: [
      "Decoupled WebSocket ingestion queue resilient against high traffic spikes.",
      "TimescaleDB hypertable partitioning for historical geospatial queries.",
      "Role-based municipal monitoring interface with automated anomaly alert thresholds.",
    ],
  },
  {
    slug: "astra-agent-legal-assistant",
    number: "PROJECT / 002",
    title: "ASTRA-AGENT: LEGAL ASSISTANT",
    cohort: "COHORT 2025",
    builtBy: "Priya Kumari",
    program: "AI Systems",
    techStack: ["FastAPI", "Llama-3", "pgvector", "Next.js"],
    description:
      "Autonomous legal document cross-examiner and contract clause compliance analyzer built for small enterprises and regional trade disputes in Eastern India.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLBtln-mCQfuego-rgDnB2yzKi31jKD32gmX4ak1s8sZvQATEK58fEb2lCEuLKWLdfWrwna1Q4OEPZf9gPZVV1OC8TU_aqCRihcuAnyfgSsgiibuTZvKXyYlkv_R1_GVOkZt3K4X3ZiPGJpijkPBnnuBdomZJgQuZfKgM1kTIgImga-3KL_Avviq_wpQhLGr8EM9s_AV0IRHhIeFUUqjzuuk9B_OV461tGaK0-sWA",
    alt: "Astra-Agent legal assistant terminal demonstrating clause dissection and multi-hop legal citation trees.",
    metrics: [
      { label: "DOCUMENT PARSE", value: "< 2.8 sec" },
      { label: "RECALL RATE", value: "99.4%" },
      { label: "FOUNDATION", value: "Llama-3-8B-Instruct" },
    ],
    highlights: [
      "Multi-hop citation verification engine preventing LLM hallucination in contract clauses.",
      "Semantic similarity graph search using pgvector embeddings on statutory precedents.",
      "Privacy-preserving local inference runtime keeping enterprise files strictly on-premise.",
    ],
  },
  {
    slug: "devflow-code-review-engine",
    number: "PROJECT / 003",
    title: "DEVFLOW: CODE REVIEW ENGINE",
    cohort: "COHORT 2025",
    builtBy: "Rohan Patel",
    program: "Dev Tools",
    techStack: ["Go", "Rust", "Docker", "GitHub Apps"],
    description:
      "Automated Git AST inspection bot enforcing memory safety, cyclomatic complexity thresholds, and deterministic concurrency guarantees across student repositories.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVwiX22i6pLJe8n_Z0MkGIHhJ61oLPhGTK-luuh1j3ZoHKK3HKDQHTb96dD2TBsSjcCwxv_nCaEhleg2sOYO8M1PaG3F_SaIv3L9j-tJ0Qk_Jr5iFeiHAcOxn-8GeW2EcFQaUMVPdBMDUBdKdd6A8tUxNc2tlbeaTXguAzS68hH1V6H8Nc1W8RM85GC1R7c0KPphm6Cy-G1rSIjBUKm6wJUYO18B76b06n_eiA1-Q",
    alt: "DevFlow code review bot inspecting Rust and Go abstract syntax trees on GitHub Pull Requests.",
    metrics: [
      { label: "ANALYSIS SPEED", value: "18,000 LOC/sec" },
      { label: "ENGINE BINARY", value: "Native Rust Worker" },
      { label: "WEBHOOK LATENCY", value: "180ms" },
    ],
    highlights: [
      "Abstract syntax tree parsing for memory leaks and race conditions prior to merge.",
      "Instant GitHub Pull Request commentary with diff fix suggestions.",
      "Zero external cloud telemetry dependency with local container execution.",
    ],
  },
  {
    slug: "kinetic-logistics-routing",
    number: "PROJECT / 004",
    title: "KINETIC LOGISTICS ROUTING",
    cohort: "COMMUNITY BUILD",
    builtBy: "AstraTech Community",
    program: "Optimization Algorithms",
    techStack: ["Python", "FastAPI", "NetworkX", "Leaflet"],
    description:
      "Logistics Graph Neural Net & Dijkstra routing engine for Jamshedpur industrial transport corridors avoiding real-time congestion chokepoints.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC73Ztvy8rc9LISkvhwpj4yGTo32ceSEASpBlPXEe4QLWk-Uo3CNpCW8_9_efqci3-z5KCEYhJgsOKleG8PWkh9KNGFYxMmS2v7cknVP_gPMcWcAwf_jJIpB4xhX3UQeBoVxhr5JnunQ1B6dymO1a0CBuxXV89QjSntA565jym0zirbNOFCEEH-Sqah679nQZX0ayMrFUzAXM9VnWxHBYQZQxDB6M8KFynNOLuY9MA",
    alt: "Kinetic Logistics Routing visual graph map displaying optimal transport paths.",
    metrics: [
      { label: "NODE RESOLUTION", value: "1,420 Vertices" },
      { label: "RE-ROUTE TIME", value: "42ms" },
      { label: "FUEL SAVING", value: "18.2% Avg" },
    ],
    highlights: [
      "Dynamic Dijkstra weight updating based on sensor telemetry feeds.",
      "Industrial freight corridor zoning with vehicle axle restrictions.",
    ],
  },
  {
    slug: "campus-attendance-vision-node",
    number: "PROJECT / 005",
    title: "CAMPUS ATTENDANCE VISION NODE",
    cohort: "EDGE LAB",
    builtBy: "AstraTech Community",
    program: "Edge Computer Vision",
    techStack: ["OpenCV", "YOLOv8", "Raspberry Pi 5", "SQLite"],
    description:
      "Edge AI OpenCV + YOLOv8 face landmark detection telemetry with Raspberry Pi 5 edge inferencing and offline cryptographic syncing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7H8h-_l4c3d07ZwzzUsznfJM5Vmk4KUbpZEUEPI41pNHRWqiYkFOL2n6YeVo1VU7sN0EKbmUTFsX7uTXwjO_ljmHAwJ42vmcKEzi5bvyKqu6sRHUc6IkjtnC8a_G4SwYyYR2MBOZQvzgsPkbktTAnEkAR_58AZInwLOcDt3JneSzHgAdPUjk5elLuw5d0vytJayVC_4JoYDRHu9Z54rXtmZPi-Zzpi06kLhyk800",
    alt: "Campus Attendance Vision Node edge hardware telemetry and landmark bounding boxes.",
    metrics: [
      { label: "FPS ON EDGE", value: "28 FPS (NPU)" },
      { label: "ENROLLMENT STORE", value: "Offline Ed25519" },
      { label: "ACCURACY", value: "99.1%" },
    ],
    highlights: [
      "On-device neural acceleration running without internet connection.",
      "Cryptographically signed attendance hashes preventing spoofing.",
    ],
  },
];
