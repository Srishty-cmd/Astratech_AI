import { Developer, DirectiveItem, CommunityActivityItem, AllocatedSeatItem } from "@/types/developer";

export const developers: Developer[] = [
  {
    id: "aniket",
    code: "01 // CORE",
    tag: "CORE / 01",
    name: "ANIKET KUMAR",
    role: "FOUNDER & DIRECTOR",
    reticleTop: "[01_DIR_HQ]",
    reticleBottom: "JH_22.8046",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS3gTStPX3hkwHwR3zB05n4anK2xpLPpNAXp_LWAIKavuhYnEtNEQoeT1czX_esMlR90Wj8VaM51xaV-CQjR52_cfNUn_eNXc3lSOBUtxXWVWXxD5H5s5VbRVaePteRHPlUcInuwf8OP28yl8BhswWxN-2UMcFAy9djrMU0xlYqabDhs4HzsYhnsVh6S3baQ4KscwIeLlGkmvVhkaBoWc_N_BEGMMaUszsNhLxK-Q",
    bio: "Leading AstraTech's mission to engineer high-velocity technology talent and autonomous systems infrastructure from Jamshedpur, Eastern India.",
    focus: "Technology / Education / Innovation / Distributed Systems",
    metaFocus: "SYSTEMS • STRATEGY • AI",
    metaBuilding: "TALENT PIPELINE",
    metaBased: "JAMSHEDPUR",
    status: "ONLINE NODE",
    experience:
      "Architecting cloud services, distributed telemetry pipelines, and engineering curriculum focused on zero-fluff, production-grade systems deployment.",
    education: "Computer Science & Engineering",
    links: [
      { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
      { label: "[ EMAIL ↗ ]", url: "mailto:aniket@astratech.ai", primary: false },
      { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
    ],
  },
  {
    id: "aman",
    code: "02 // CORE",
    tag: "CORE / 02",
    name: "AMAN SHARMA",
    role: "LEAD FULL-STACK ENGINEER",
    reticleTop: "[02_FS_NODE]",
    reticleBottom: "JH_TELEMETRY",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjfSoo-zcPV5lDko0aXoVYKkSUoRlZDANKGfxyV3y746LsSVEuKn7pipn1yKFakFD_zg908RqnC8UjGi0bzZnSTJuuIuxcOKOcDGHWb-6doPXjEH1F6cVOpVZXDfZ6y7tq1oHyGhQIAL34mnQLBujodJ357I18K5ywWujGlESAKlzXOqodDhHm_BqsG-U-ZNbWrZIZGchwcKwHGIk2iZskTd0HwJrt7CuT8xfcQPY",
    bio: "Specializing in real-time telemetry architectures, reactive web nodes, and municipal sensor data pipelines across the eastern industrial corridor.",
    focus: "Full-Stack Architecture / Reactive Nodes / Municipal Sensors / Go / TypeScript",
    metaFocus: "WEB • AI • PRODUCT",
    metaBuilding: "REAL PROJECTS",
    metaBased: "JAMSHEDPUR",
    status: "ONLINE NODE",
    experience:
      "Built the Jamshedpur Municipal Sensor Telemetry Hub; oversees full-stack cohort delivery and Git review sprints.",
    education: "B.Tech in Information Technology",
    links: [
      { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
      { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
      { label: "[ EMAIL ↗ ]", url: "mailto:aman@astratech.ai", primary: false },
    ],
  },
  {
    id: "priya",
    code: "03 // CORE",
    tag: "CORE / 03",
    name: "PRIYA KUMARI",
    role: "AI / ML RESEARCH LEAD",
    reticleTop: "[03_NEURAL_RAG]",
    reticleBottom: "JH_MODEL_LAB",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tJLiPWfBQnN-I28LsGVZIavNBI1FaymXo9wxBHLqf6D46Hces6DdDGdYLfoGVarnZu0N-X2vNVDYeMIf_KmXT1ZJlKdgDHD5P015hm5hXss93LrehnmJxftEAxYx8FmzD7ytLaw2wd4S0arLIfdFV2dSbc1DudNknXB2aM6NkBPZBTUasvRnUgXwiwd1jELeB96NIyZwbN_v4ZG_PhWG9nUw_q0_7MP5EBDJREw",
    bio: "Focusing on localized retrieval-augmented generation models, semantic pipelines, and applied deep learning systems running edge inferences.",
    focus: "Applied Deep Learning / RAG Architectures / Semantic Vectorization / PyTorch",
    metaFocus: "LLMs • RAG • INFERENCE",
    metaBuilding: "ASTRA-AGENT AI",
    metaBased: "JAMSHEDPUR",
    status: "ONLINE NODE",
    experience:
      "Engineered Astra-Agent legal parsing models; leads neural engineering labs and model benchmark testing on local clusters.",
    education: "M.Tech in Artificial Intelligence",
    links: [
      { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
      { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
      { label: "[ EMAIL ↗ ]", url: "mailto:priya@astratech.ai", primary: false },
    ],
  },
  {
    id: "rohan",
    code: "04 // CORE",
    tag: "CORE / 04",
    name: "ROHAN GUPTA",
    role: "SYSTEMS & DEVOPS ARCHITECT",
    reticleTop: "[04_INFRA_SEC]",
    reticleBottom: "JH_CONTAINER_04",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLoiVDZWcMnkw55Pl77vl9GBRyhG5DbRVqszE6ui0-4uzmlMRyBO6wJWQvSbq2f62GwyffI02g0EHD1ngWOCBEpKb7_62nL9W1KSoF7yyS87IAqCl_vARuxgp5OkO9HlOyr21E71rj1l2AsQ6EmPDLs9XzKZtAmXdbHEsC5B6XBmyMEa4wmEZAdvvj2IwGRAH_kyXjUf10EzI9kzADMfzhzh6EAEeBGLruIPjdfpg",
    bio: "Designing autonomous CI/CD pipelines, container orchestration, and AST static security analysis tools for physical and cloud clusters.",
    focus: "Linux Kernel / Kubernetes Orchestration / AST Security / Zero-Trust Pipelines",
    metaFocus: "INFRA • CLOUD • DEVOPS",
    metaBuilding: "DEVFLOW ENGINE",
    metaBased: "JAMSHEDPUR",
    status: "ONLINE NODE",
    experience:
      "Architect of DevFlow code review engine; manages production telemetry nodes and zero-trust lab security.",
    education: "B.Tech in Computer Science",
    links: [
      { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
      { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
      { label: "[ EMAIL ↗ ]", url: "mailto:rohan@astratech.ai", primary: false },
    ],
  },
  {
    id: "aditi",
    code: "05 // CORE",
    tag: "CORE / 05",
    name: "ADITI ROY",
    role: "PRODUCT DESIGNER & UI/UX LEAD",
    reticleTop: "[05_HUD_DS]",
    reticleBottom: "JH_UI_STUDIO",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEGnK_uPNrSGDMCnP8mvfggV3tZibKsNg0mGBtcW6ljELgYeGH5MfhY-fs7z5CxMvtIz9H4eZiihf6mOG1o5vj7LHNFkIQIxbyUXNkjNCAmoZfCLr5ZyvbeSyfFlcgNE_mUhoNpg0khksh-oU72C9r4Iktk5Pe98jfnXki-m7vrM_UzqLPkZDW_zis4nlutZFrm0LdeT-OUk8SoL9Lx0G9HIsjh-RnPMFYawyRs3U",
    bio: "Crafting technical design systems, high-density HUD interfaces, and accessible developer tooling experiences for student cohort platforms.",
    focus: "Technical Design Systems / Cyber HUD Interfaces / Interaction Architecture / Figma",
    metaFocus: "SYSTEM DESIGN • UI/UX",
    metaBuilding: "ASTRA HUD SPEC",
    metaBased: "JAMSHEDPUR",
    status: "ONLINE NODE",
    experience:
      "Lead designer behind AstraTech's Cyber Blueprint interface and student project exhibition platforms.",
    education: "Bachelor of Design (Interaction Design)",
    links: [
      { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
      { label: "[ PORTFOLIO ↗ ]", url: "#", primary: false },
      { label: "[ EMAIL ↗ ]", url: "mailto:aditi@astratech.ai", primary: false },
    ],
  },
  {
    id: "vikram",
    code: "06 // CORE",
    tag: "CORE / 06",
    name: "VIKRAM SINGH",
    role: "SYSTEMS & CLOUD ENGINEER",
    reticleTop: "[06_CLOUD_NODE]",
    reticleBottom: "JH_INFRA_06",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjfSoo-zcPV5lDko0aXoVYKkSUoRlZDANKGfxyV3y746LsSVEuKn7pipn1yKFakFD_zg908RqnC8UjGi0bzZnSTJuuIuxcOKOcDGHWb-6doPXjEH1F6cVOpVZXDfZ6y7tq1oHyGhQIAL34mnQLBujodJ357I18K5ywWujGlESAKlzXOqodDhHm_BqsG-U-ZNbWrZIZGchwcKwHGIk2iZskTd0HwJrt7CuT8xfcQPY",
    bio: "Managing localized multi-tenant cluster compute nodes, edge daemon synchronization, and distributed memory caches.",
    focus: "Distributed Cache / Docker Compose / Bare Metal Linux / Rust",
    metaFocus: "CLUSTERS • DISTRIBUTED",
    metaBuilding: "HYBRID COMPUTE",
    metaBased: "JAMSHEDPUR",
    status: "ONLINE NODE",
    experience:
      "Spearheaded local cluster hardware setup with custom kernel parameters for low-latency batch processing.",
    education: "B.Tech in Computer Engineering",
    links: [
      { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
      { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
      { label: "[ EMAIL ↗ ]", url: "mailto:vikram@astratech.ai", primary: false },
    ],
  },
  {
    id: "rahul",
    code: "07 // CORE",
    tag: "CORE / 07",
    name: "RAHUL VERMA",
    role: "COMPUTER VISION & EDGE AI",
    reticleTop: "[07_CV_EDGE]",
    reticleBottom: "JH_CAMERA_NET",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLoiVDZWcMnkw55Pl77vl9GBRyhG5DbRVqszE6ui0-4uzmlMRyBO6wJWQvSbq2f62GwyffI02g0EHD1ngWOCBEpKb7_62nL9W1KSoF7yyS87IAqCl_vARuxgp5OkO9HlOyr21E71rj1l2AsQ6EmPDLs9XzKZtAmXdbHEsC5B6XBmyMEa4wmEZAdvvj2IwGRAH_kyXjUf10EzI9kzADMfzhzh6EAEeBGLruIPjdfpg",
    bio: "Deploying quantized object detection models, optical flow algorithms, and embedded camera telemetry across field robotics nodes.",
    focus: "Edge AI / TensorRT / OpenCV / PyTorch Mobile / C++",
    metaFocus: "VISION • TENSORRT",
    metaBuilding: "EDGE RETINEX",
    metaBased: "JAMSHEDPUR",
    status: "ONLINE NODE",
    experience:
      "Engineered real-time defect inspection prototype for Eastern industrial metal stamping lines.",
    education: "B.Tech in Electronics & Communication",
    links: [
      { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
      { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
      { label: "[ EMAIL ↗ ]", url: "mailto:rahul@astratech.ai", primary: false },
    ],
  },
  {
    id: "sanya",
    code: "08 // CORE",
    tag: "CORE / 08",
    name: "SANYA SEN",
    role: "DATA & NEURAL PIPELINES",
    reticleTop: "[08_NEURAL_PIPE]",
    reticleBottom: "JH_DATA_LAKE",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tJLiPWfBQnN-I28LsGVZIavNBI1FaymXo9wxBHLqf6D46Hces6DdDGdYLfoGVarnZu0N-X2vNVDYeMIf_KmXT1ZJlKdgDHD5P015hm5hXss93LrehnmJxftEAxYx8FmzD7ytLaw2wd4S0arLIfdFV2dSbc1DudNknXB2aM6NkBPZBTUasvRnUgXwiwd1jELeB96NIyZwbN_v4ZG_PhWG9nUw_q0_7MP5EBDJREw",
    bio: "Building high-throughput data ingest pipelines, feature stores, and automated model re-training orchestration workflows.",
    focus: "Kafka / Apache Spark / Feature Engineering / Parquet Storage / Python",
    metaFocus: "DATA PIPELINES • KAFKA",
    metaBuilding: "FEATURE STREAM",
    metaBased: "JAMSHEDPUR",
    status: "ONLINE NODE",
    experience:
      "Architected asynchronous streaming ingestion for 200,000+ daily telemetry packets from municipal sensors.",
    education: "B.Tech in Data Science & Engineering",
    links: [
      { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
      { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
      { label: "[ EMAIL ↗ ]", url: "mailto:sanya@astratech.ai", primary: false },
    ],
  },
  {
    id: "arjun",
    code: "09 // CORE",
    tag: "CORE / 09",
    name: "ARJUN NAIR",
    role: "CYBERSECURITY & ZERO-TRUST ARCHITECT",
    reticleTop: "[09_ZERO_TRUST]",
    reticleBottom: "JH_SEC_GATE",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS3gTStPX3hkwHwR3zB05n4anK2xpLPpNAXp_LWAIKavuhYnEtNEQoeT1czX_esMlR90Wj8VaM51xaV-CQjR52_cfNUn_eNXc3lSOBUtxXWVWXxD5H5s5VbRVaePteRHPlUcInuwf8OP28yl8BhswWxN-2UMcFAy9djrMU0xlYqabDhs4HzsYhnsVh6S3baQ4KscwIeLlGkmvVhkaBoWc_N_BEGMMaUszsNhLxK-Q",
    bio: "Hardening system perimeters, audit daemon logging, and mutual TLS token verification for distributed lab student microservices.",
    focus: "Zero-Trust Architecture / Cryptographic Verification / mTLS / SIEM / Rust",
    metaFocus: "CYBERSEC • ZERO-TRUST",
    metaBuilding: "AUTH PROTOCOL L5",
    metaBased: "JAMSHEDPUR",
    status: "ONLINE NODE",
    experience:
      "Authored AstraTech Protocol L5 access policy and sandboxed runtime for student submitted microservice test suites.",
    education: "B.Tech in Information Security",
    links: [
      { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
      { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
      { label: "[ EMAIL ↗ ]", url: "mailto:arjun@astratech.ai", primary: false },
    ],
  },
];

export const labDirectives: DirectiveItem[] = [
  {
    num: "01 // LEARN",
    title: "Learn modern engineering through real code.",
    desc: "ZERO-FLUFF CURRICULUM • PRODUCTION STACK",
    sub: "ZERO-FLUFF CURRICULUM • PRODUCTION STACK",
  },
  {
    num: "02 // BUILD",
    title: "Turn concepts into working projects.",
    desc: "TANGIBLE CODE • REVENUE & OPEN SOURCE",
    sub: "TANGIBLE CODE • REVENUE & OPEN SOURCE",
  },
  {
    num: "03 // SHIP",
    title: "Deploy, test, improve and show your work.",
    desc: "REAL USERS • CONTINUOUS DEPLOYMENT",
    sub: "REAL USERS • CONTINUOUS DEPLOYMENT",
  },
  {
    num: "04 // CONNECT",
    title: "Learn alongside people building in the same direction.",
    desc: "PEER CODE REVIEWS • CO-FOUNDER NETWORK",
    sub: "PEER CODE REVIEWS • CO-FOUNDER NETWORK",
  },
];

export const communityActivities: CommunityActivityItem[] = [
  {
    actTag: "// ACT_01",
    title: "WORKSHOPS",
    subtitle: "HANDS-ON PROTOCOLS",
    description: "Bi-weekly deep dive labs",
  },
  {
    actTag: "// ACT_02",
    title: "HACKATHONS",
    subtitle: "48H SPRINT BUILDS",
    description: "Rapid prototype ship cycle",
  },
  {
    actTag: "// ACT_03",
    title: "PROJECT BUILDS",
    subtitle: "PRODUCTION CODE",
    description: "Real deployed systems",
  },
  {
    actTag: "// ACT_04",
    title: "TECH TALKS",
    subtitle: "ENGINEERING SESSIONS",
    description: "Architecture breakdowns",
  },
  {
    actTag: "// ACT_05",
    title: "PEER AUDITS",
    subtitle: "STRICT CODE REVIEWS",
    description: "Continuous PR scrutiny",
  },
];

export const talentPipelineImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCl-hCUfnlwiSoSYGEj09B5iPsO3D6BAzjBag1f8KSY5ZvPj-1Cgw7GUZPv-AgTe9lbMaARdwhu5i0Li9KEi86AlJUWw3yIp4JrgAZLLlH33pBEgGmK4zLx7QXz8WAwAPL-UWH7EQTSRxaS8zuV3KB9nR_NSCFoSFiqBlEnpxNJQNkoQXhzGQ5ukCudAeCWRLiOyEqRQjvs7HJMHvm5GXR_tUPguLK3QggzwY3ubhFrBBJJOGyeQclD";

export const allocatedSeats: AllocatedSeatItem[] = [
  {
    seatId: "01",
    code: "[ OPEN SEAT // 01 ]",
    title: "NEXT CORE MEMBER",
    status: "COMING SOON",
    description: "This position will be updated when a new member joins the team.",
    requirement: "// REQ: SYS_ARCH",
    queueStatus: "[ QUEUED ]",
  },
  {
    seatId: "02",
    code: "[ OPEN SEAT // 02 ]",
    title: "NEXT CORE MEMBER",
    status: "COMING SOON",
    description: "This position will be updated when a new member joins the team.",
    requirement: "// REQ: NEURAL_RESEARCH",
    queueStatus: "[ QUEUED ]",
  },
  {
    seatId: "03",
    code: "[ OPEN SEAT // 03 ]",
    title: "NEXT CORE MEMBER",
    status: "COMING SOON",
    description: "This position will be updated when a new member joins the team.",
    requirement: "// REQ: DEV_REL_OPS",
    queueStatus: "[ QUEUED ]",
  },
];

