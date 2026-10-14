file:///c%3A/Users/win11/Desktop/WEBSITE/my-app/design.md {"mtime":1791444754978,"ctime":1791444460700,"size":175119,"etag":"3gol1c1i65r70","orphaned":false,"typeId":""}
<!-- AstraTech AI — Tactical Cyber Blueprint -->
<!DOCTYPE html>

<html class="dark" lang="en" style=""><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><meta content="web_standard" name="shell-type"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/><link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&amp;family=Space+Grotesk:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><script>tailwind.config = {darkMode: "class", theme: {extend: {colors: {canvas: "#07090e", surface: "#111318", "surface-card": "#101420", "surface-panel": "#141a29", "hud-amber": "#f59e0b", "hud-amber-light": "#fbbf24", "hud-green": "#10b981", "hud-cyan": "#06b6d4", "line-dim": "rgba(245, 158, 11, 0.15)", "line-blueprint": "rgba(56, 189, 248, 0.12)", "border-hud": "rgba(245, 158, 11, 0.25)", "border-glow": "rgba(16, 185, 129, 0.35)", "text-lead": "#f8fafc", "text-dim": "#94a3b8", "surface-container-highest": "#32353a", "on-secondary": "#2b3136", "on-secondary-fixed-variant": "#41484c", "on-primary": "#2d3137", "primary-container": "#0d1117", "surface-container-high": "#272a2f", "surface-bright": "#37393e", "secondary-fixed-dim": "#c1c7cd", "on-secondary-container": "#b3b9bf", "primary-fixed": "#dfe2eb", "on-tertiary": "#3a2e26", "surface-container": "#1d2024", "on-primary-container": "#797d85", error: "#ffb4ab", "tertiary-container": "#180f08", outline: "#8f9095", "inverse-primary": "#5b5e66", "error-container": "#93000a", "surface-tint": "#c3c6cf", "surface-dim": "#111318", "on-primary-fixed": "#181c22", "on-primary-fixed-variant": "#43474e", "outline-variant": "#45474b", "tertiary-fixed-dim": "#d6c3b7", "primary-fixed-dim": "#c3c6cf", background: "#111318", "surface-container-lowest": "#0c0e13", "surface-container-low": "#191c20", "on-background": "#e1e2e9", "secondary-container": "#434a4f", primary: "#c3c6cf", "on-tertiary-container": "#897a6f", "on-error-container": "#ffdad6", "on-surface": "#e1e2e9", "on-secondary-fixed": "#161c21", "tertiary-fixed": "#f3dfd2", "surface-variant": "#32353a", "on-tertiary-fixed": "#231a12", "inverse-on-surface": "#2e3035", tertiary: "#d6c3b7", "on-tertiary-fixed-variant": "#51443b", "on-error": "#690005", secondary: "#c1c7cd", "on-surface-variant": "#c6c6cb", "secondary-fixed": "#dde3e9", "inverse-surface": "#e1e2e9"}, fontFamily: {mono: ["'JetBrains Mono'", "monospace"], sans: ["'Space Grotesk'", "sans-serif"], headline: ["Sora"], display: ["Sora"], body: ["Space Grotesk"], label: ["Space Grotesk"]}, fontSize: {}, borderRadius: {DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px"}}}};</script><style>
  @layer base {
    body {
      background-color: #06080d;
      color: #cbd5e1;
      font-family: 'Space Grotesk', sans-serif;
    }
  }
  .blueprint-grid {
    background-image: 
      linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
      linear-gradient(to right, rgba(245, 158, 11, 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(245, 158, 11, 0.08) 1px, transparent 1px);
    background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
  }
  .hud-scanline {
    background: linear-gradient(180deg, rgba(255,255,255,0.01) 50%, rgba(0, 0, 0, 0.35) 51%);
    background-size: 100% 4px;
  }
  .corner-bracket {
    position: relative;
  }
  .corner-bracket::before, .corner-bracket::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    pointer-events: none;
  }
  .corner-bracket::before {
    top: -1px; left: -1px;
    border-top: 2px solid #f59e0b;
    border-left: 2px solid #f59e0b;
  }
  .corner-bracket::after {
    bottom: -1px; right: -1px;
    border-bottom: 2px solid #f59e0b;
    border-right: 2px solid #f59e0b;
  }
  .crosshair {
    position: relative;
  }
  .crosshair::before {
    content: '+';
    position: absolute;
    font-family: 'JetBrains Mono', monospace;
    color: #f59e0b;
    font-size: 12px;
    opacity: 0.6;
  }
</style></head><body class="bg-[#06080d] text-slate-300 font-sans selection:bg-hud-amber selection:text-black antialiased relative blueprint-grid"><div class="fixed inset-0 pointer-events-none hud-scanline z-40 opacity-40"></div>
<!-- TOP STATUS TELEMETRY STRIP -->
<div class="w-full bg-[#080b12] border-b border-border-hud/50 py-1 px-4 text-[10px] font-mono flex items-center justify-between text-text-dim relative z-50">
<div class="flex items-center gap-4">
<span class="flex items-center gap-1.5 text-hud-green"><span class="w-1.5 h-1.5 rounded-full bg-hud-green animate-ping"></span>[SYS_STATUS: NOMINAL // FEED: 99.8%]</span>
<span class="hidden md:inline text-amber-500/80">[LAT: 22.8046°N // LON: 86.2029°E]</span>
<span class="hidden lg:inline text-slate-500">[REGION: JAMSHEDPUR, JHARKHAND - NODE_01]</span>
</div>
<div class="flex items-center gap-3">
<span class="text-hud-amber font-semibold">[DEF_AUTH: PROTOCOL_L5]</span>
<span class="text-slate-400">CLK: UTC+05:30</span>
</div>
</div>
<!-- TACTICAL NAVIGATION BAR -->
<header class="sticky top-0 left-0 right-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-amber-500/30 shadow-[0_4px_25px_rgba(0,0,0,0.8)]"><div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
<div class="flex items-center gap-3">
<a class="flex items-center gap-2 group" data-path="home" href="#">
<div class="w-8 h-8 rounded border border-hud-amber/80 bg-black/60 flex items-center justify-center text-hud-amber group-hover:bg-hud-amber group-hover:text-black transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]">
<span class="material-symbols-outlined text-[18px]">terminal</span>
</div>
<div class="flex flex-col">
<div class="flex items-center gap-1.5">
<span class="font-mono font-bold text-[15px] tracking-wider text-white">ASTRATECH</span>
<span class="text-[9px] font-mono px-1 py-0.5 rounded bg-amber-500/10 text-hud-amber border border-amber-500/40">AI.OS</span>
</div>
<span class="text-[9px] font-mono text-slate-400 tracking-widest -mt-0.5">// JAMSHEDPUR LAB</span>
</div>
</a>
</div>
<nav class="hidden lg:flex items-center gap-6 font-mono text-xs text-slate-400" data-active-classes="text-hud-amber font-semibold"><a aria-current="page" class="text-hud-amber font-bold flex items-center gap-1" data-path="home" href="#"><span class="text-[10px] text-hud-amber/60">&gt;</span>HOME</a>
<a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="about" href="#about"><span class="text-[10px] text-slate-600">//</span>ABOUT</a>
<a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="courses" href="#courses"><span class="text-[10px] text-slate-600">//</span>COURSES</a><a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="projects" href="#projects"><span class="text-[10px] text-slate-600">//</span>PROJECTS</a>
<a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="developers" href="#developers"><span class="text-[10px] text-slate-600">//</span>DEVELOPERS</a>
<a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="media" href="#media"><span class="text-[10px] text-slate-600">//</span>MEDIA</a>
<a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="contact" href="#contact"><span class="text-[10px] text-slate-600">//</span>CONTACT</a></nav>
<div class="flex items-center gap-3">
<a class="font-mono text-xs inline-flex items-center gap-1.5 px-4 py-2 rounded bg-amber-500/10 border border-hud-amber text-hud-amber hover:bg-hud-amber hover:text-black font-semibold transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)]" data-path="join-astratech" href="#join">
<span class="">[INIT_ENROLL]</span>
<span class="material-symbols-outlined text-[14px]">bolt</span>
</a>
<div class="w-8 h-8 rounded border border-slate-700 bg-surface flex items-center justify-center text-slate-400 text-xs font-mono">
<span class="">01</span>
</div>
</div>
</div></header>
<main class="w-full relative z-10">
<!-- HERO SCHEMATIC SECTION -->
<section class="relative w-full pt-10 pb-20 border-b border-border-hud/40 overflow-hidden">
<!-- Blueprint Corner Crosshairs -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 relative">
<div class="flex items-center justify-between mb-4 text-[11px] font-mono text-amber-500/60 border-b border-amber-500/20 pb-2">
<div class="flex items-center gap-2">
<span class="inline-block w-2 h-2 bg-hud-amber"></span>
<span class="">HUD_STAGE: HERO_INITIALIZE // TARGET: REGIONAL TECH TALENT</span>
</div>
<div class="hidden sm:flex items-center gap-4">
<span class="">ARCH: SEC_V4.2</span>
<span class="">ZONE: JHARKHAND</span>
</div>
</div>
<!-- Main Title Block with Terminal Bracket HUD -->
<div class="corner-bracket bg-surface-card/60 p-6 md:p-10 border border-amber-500/30 backdrop-blur-sm relative">
<div class="flex items-center gap-2 mb-3">
<span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-hud-green/10 border border-hud-green text-hud-green tracking-widest">[ONLINE // ACTIVE COHORT ENROLLMENT]</span>
<span class="text-xs font-mono text-slate-500">EST_2024</span>
</div>
<div class="max-w-4xl">
<h1 class="font-mono text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.1] mb-4">
          BUILDING THE NEXT GENERATION OF <span class="text-hud-amber drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">&lt;TECH TALENT/&gt;</span>
</h1>
<p class="font-sans text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
          AstraTech AI is a technology education and developer community in Jamshedpur focused on practical learning, production-grade repositories, real projects, innovation, and first-principles engineering thinking.
        </p>
</div>
<!-- Action Cluster -->
<div class="flex flex-wrap items-center gap-4 mb-8">
<a class="px-6 py-3 rounded font-mono text-xs uppercase font-bold bg-hud-amber text-black hover:bg-hud-amber-light hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all flex items-center gap-2" href="#courses">
<span class="">&gt; EXPLORE COURSES</span>
<span class="material-symbols-outlined text-[16px]">arrow_downward</span>
</a>
<a class="px-6 py-3 rounded font-mono text-xs uppercase font-semibold bg-black/50 border border-slate-700 text-slate-200 hover:border-hud-amber hover:text-hud-amber transition-all flex items-center gap-2" href="#join">
<span class="">[JOIN_ASTRATECH]</span>
<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
<!-- Telemetry Metrics Grid -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-amber-500/20 pt-6">
<div class="p-3 bg-black/40 border border-slate-800 rounded">
<div class="font-mono text-2xl font-bold text-hud-amber">100%</div>
<div class="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Practical &amp; Git-Backed</div>
</div>
<div class="p-3 bg-black/40 border border-slate-800 rounded">
<div class="font-mono text-2xl font-bold text-hud-green">0%</div>
<div class="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Passive PPT Lectures</div>
</div>
<div class="p-3 bg-black/40 border border-slate-800 rounded">
<div class="font-mono text-xl font-bold text-white">JAMSHEDPUR</div>
<div class="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Jharkhand AI Hub</div>
</div>
<div class="p-3 bg-black/40 border border-slate-800 rounded">
<div class="font-mono text-xl font-bold text-hud-cyan">PROD_READY</div>
<div class="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Microservice Arch</div>
</div>
</div>
</div>
<!-- TERMINAL / HARDWARE SPLIT HUD PANEL -->
<div class="mt-8 rounded border border-slate-800 bg-[#0a0d14] overflow-hidden shadow-2xl">
<div class="bg-[#111624] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
<div class="flex items-center gap-2 text-slate-300">
<span class="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
<span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
<span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
<span class="ml-2 text-hud-amber font-semibold">astratech-core-engine@node-01:~$</span>
</div>
<span class="text-slate-400 font-mono text-[11px]">[SHELL: BASH v5.2]</span>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 font-mono text-xs">
<div class="lg:col-span-7 p-5 bg-black/70 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-2">
<p class="text-hud-amber"><span class="text-white">$</span> astra init --stack=production-ai-fullstack --loc=jamshedpur</p>
<p class="text-slate-400">&gt; Initializing AstraTech developer kernel...</p>
<p class="text-hud-green"><span class="text-emerald-400">✔</span> Compiling modules: [PyTorch, FastAPI, Next.js 14, Docker, PostgreSQL]</p>
<p class="text-slate-300"><span class="text-hud-amber">✔</span> Continuous integration tests: AST Code Analysers ENABLED</p>
<p class="text-slate-300"><span class="text-hud-cyan">✔</span> Local civic dataset connected: Jamshedpur Municipal Telemetry</p>
<div class="pt-4 border-t border-slate-800 flex items-center justify-between text-hud-amber">
<span class="">[KERNEL_STATUS: ACTIVE]</span>
<span class="text-hud-green animate-pulse">● PORT 3000 ONLINE</span>
</div>
</div>
<div class="lg:col-span-5 relative min-h-[220px] bg-slate-950">
<div class="absolute inset-0 bg-cover bg-center filter saturate-75 brightness-90" data-alt="A cinematic high-tech developer lab at AstraTech in Jamshedpur with multi-monitor workstation setups displaying code terminals, neural network graphs, and robotic hardware prototypes, low ambient lighting with sharp white and charcoal cybernetic accents." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAa1tj49ijDNKwHDA1_ytoeS-avY5sKjtGw4Pf8p57DtCMr2rqzd_NKZo-xlBXYCpxfy98wS0hfjeG7V9-92HPk0UfA0DlXFgUbuOwUtlbMscvxR8kxqXg1xzCibC7ECUut-G4tpZGc_9m8jhABoFkyYhU1rNwlyJU-aguKvnCEu1mcjB1XL4cBQApedqQh3VYiZgmUPMMsqme9jDiGT0TGWVtrNWTJcWmPlyFi70rn13bRq6mUKK-K");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
<div class="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
<span class="px-2 py-0.5 bg-black/80 text-hud-amber border border-amber-500/40 rounded">[ASTRATECH HARDWARE &amp; AI LAB]</span>
<span class="text-slate-300 bg-black/80 px-2 py-0.5 rounded">JSR_OFFLINE_CAMPUS</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- WHO WE ARE // PILLARS SECTION -->
<section class="w-full py-20 border-b border-border-hud/30 relative">
<div class="max-w-7xl mx-auto px-4 sm:px-6">
<div class="flex items-center gap-2 font-mono text-xs text-hud-amber mb-3">
<span class="">// 01_MISSION_MATRIX</span>
<div class="h-px flex-1 bg-amber-500/20"></div>
<span class="text-slate-500">SCHEMATIC: IDENT-01</span>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
<div class="lg:col-span-5">
<h2 class="font-mono text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
          WHO WE ARE?
        </h2>
<div class="font-mono text-xs text-hud-amber mt-1">&gt; CODEBASE OVER PAPER CERTS</div>
</div>
<div class="lg:col-span-7">
<p class="text-slate-300 text-base leading-relaxed mb-4">
          AstraTech AI was created with a vision that technology education should go beyond passive lectures and generic certificates. We build technical intellect, engineering discipline, and the rare ability to turn abstract ideas into production-ready software systems.
        </p>
<div class="font-mono text-xs text-slate-400 flex items-center justify-between border-t border-slate-800 pt-3">
<a class="text-hud-amber hover:underline flex items-center gap-1" href="#vision">
<span class="">[VIEW_FULL_COLLECTIVE_VISION]</span>
<span class="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
<span class="">SYS_ORIGIN: 2024 / JHARKHAND</span>
</div>
</div>
</div>
<!-- 3 Pillars Blueprint Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- 01 THINK -->
<div class="corner-bracket bg-surface-card border border-amber-500/30 p-6 flex flex-col justify-between hover:border-hud-amber transition-all">
<div>
<div class="flex items-center justify-between mb-4">
<span class="font-mono text-xs text-hud-amber font-bold">[NODE_01 // CORE]</span>
<span class="material-symbols-outlined text-hud-amber">psychology</span>
</div>
<h3 class="font-mono text-xl font-bold text-white uppercase mb-2">01 // THINK</h3>
<p class="text-sm text-slate-300 leading-relaxed">
            Develop technical intellect, rigorous computational logic, and deep algorithmic problem-solving ability that scales across distributed systems.
          </p>
</div>
<div class="mt-6 pt-4 border-t border-slate-800/80 font-mono text-[11px] text-hud-amber/80 flex items-center justify-between">
<span class="">&gt; Logic &amp; First Principles</span>
<span class="text-slate-500">[ALGO]</span>
</div>
</div>
<!-- 02 BUILD -->
<div class="corner-bracket bg-surface-card border border-amber-500/30 p-6 flex flex-col justify-between hover:border-hud-amber transition-all">
<div>
<div class="flex items-center justify-between mb-4">
<span class="font-mono text-xs text-hud-amber font-bold">[NODE_02 // SYSTEM]</span>
<span class="material-symbols-outlined text-hud-amber">precision_manufacturing</span>
</div>
<h3 class="font-mono text-xl font-bold text-white uppercase mb-2">02 // BUILD</h3>
<p class="text-sm text-slate-300 leading-relaxed">
            Turn theoretical knowledge into real, production-ready applications with test coverage, Git versioning, and clean software architecture.
          </p>
</div>
<div class="mt-6 pt-4 border-t border-slate-800/80 font-mono text-[11px] text-hud-amber/80 flex items-center justify-between">
<span class="">&gt; Production Artifacts</span>
<span class="text-slate-500">[CI/CD]</span>
</div>
</div>
<!-- 03 CREATE -->
<div class="corner-bracket bg-surface-card border border-amber-500/30 p-6 flex flex-col justify-between hover:border-hud-amber transition-all">
<div>
<div class="flex items-center justify-between mb-4">
<span class="font-mono text-xs text-hud-amber font-bold">[NODE_03 // IMPACT]</span>
<span class="material-symbols-outlined text-hud-amber">bolt</span>
</div>
<h3 class="font-mono text-xl font-bold text-white uppercase mb-2">03 // CREATE</h3>
<p class="text-sm text-slate-300 leading-relaxed">
            Apply autonomous AI agents and modern web architectures to solve high-friction municipal, healthcare, and industrial challenges.
          </p>
</div>
<div class="mt-6 pt-4 border-t border-slate-800/80 font-mono text-[11px] text-hud-amber/80 flex items-center justify-between">
<span class="">&gt; Real-World Deployment</span>
<span class="text-slate-500">[LIVE]</span>
</div>
</div>
</div>
</div>
</section>
<!-- TICKER TAPE / TELEMETRY MARQUEE -->
<div class="w-full bg-[#0a0e17] border-y border-amber-500/30 py-2.5 overflow-hidden font-mono text-xs text-hud-amber select-none">
<div class="flex whitespace-nowrap items-center gap-8 justify-around opacity-90">
<span class="">[SYS_TELEMETRY: ACTIVE]</span>
<span class="text-slate-400">///</span>
<span class="">JAMSHEDPUR TECH ECOSYSTEM: ADVANCING</span>
<span class="text-slate-400">///</span>
<span class="text-emerald-400">CODE FIRST : THEORY SECOND</span>
<span class="text-slate-400">///</span>
<span class="">FULLSTACK + GENERATIVE AI TRACKS LIVE</span>
<span class="text-slate-400">///</span>
<span class="text-hud-amber font-bold">ASTRAHACK 2026 REGISTRATIONS OPEN</span>
</div>
</div>
<!-- VISION STATEMENT HUD BLOCK -->
<section class="w-full py-20 border-b border-border-hud/30 bg-[#080b13]" id="vision">
<div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-hud-amber mb-6">
<span class="">[MANIFESTO // CORE AXIOM]</span>
</div>
<blockquote class="font-mono text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-6 leading-tight">
      “Education should lead to creation — not just certification.”
    </blockquote>
<p class="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
      Our vision is to build a generation of technology professionals who don't just memorize frameworks, but know how to think, build, and deploy high-leverage software. We are actively contributing to the technological reinvention of Jamshedpur and the Eastern India tech landscape.
    </p>
</div>
</section>
<!-- LEADERSHIP HUD // THE PERSON BEHIND ASTRATECH -->
<!-- WHAT WE TEACH // 6 ENGINE TRACKS -->
<!-- HOW WE LEARN // 6-STAGE PIPELINE HUD -->
<section class="w-full py-20 border-b border-border-hud/30 bg-[#080b13]">
<div class="max-w-7xl mx-auto px-4 sm:px-6">
<div class="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
<span class="">// 04_PEDAGOGICAL_PIPELINE</span>
<div class="h-px flex-1 bg-amber-500/20"></div>
<span class="text-slate-500">[ITERATION_LOOP: L1-L6]</span>
</div>
<div class="text-left mb-12">
<h2 class="font-mono text-3xl font-extrabold text-white uppercase tracking-tight">
        HOW WE LEARN
      </h2>
<p class="font-mono text-xs text-slate-400 mt-1">&gt; AN UNCOMPROMISED ITERATIVE CYCLE DESIGNED TO TRANSITION NOVICES INTO AUTONOMOUS ENGINEERS</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 font-mono">
<div class="p-4 bg-black/60 border border-slate-800 rounded flex flex-col justify-between hover:border-hud-amber transition-colors">
<span class="text-hud-amber font-bold text-xl mb-2">01</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; LEARN</h4>
<p class="text-[11px] text-slate-400">Build rock-solid theoretical fundamentals from scratch.</p>
</div>
</div>
<div class="p-4 bg-black/60 border border-slate-800 rounded flex flex-col justify-between hover:border-hud-amber transition-colors">
<span class="text-hud-amber font-bold text-xl mb-2">02</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; PRACTICE</h4>
<p class="text-[11px] text-slate-400">Daily coding exercises and deterministic edge-case testing.</p>
</div>
</div>
<div class="p-4 bg-black/60 border border-slate-800 rounded flex flex-col justify-between hover:border-hud-amber transition-colors">
<span class="text-hud-amber font-bold text-xl mb-2">03</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; BUILD</h4>
<p class="text-[11px] text-slate-400">Create production applications solving genuine societal needs.</p>
</div>
</div>
<div class="p-4 bg-black/60 border border-slate-800 rounded flex flex-col justify-between hover:border-hud-amber transition-colors">
<span class="text-hud-amber font-bold text-xl mb-2">04</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; DEPLOY</h4>
<p class="text-[11px] text-slate-400">Take live repos to public cloud endpoints and monitor uptime.</p>
</div>
</div>
<div class="p-4 bg-black/60 border border-slate-800 rounded flex flex-col justify-between hover:border-hud-amber transition-colors">
<span class="text-hud-amber font-bold text-xl mb-2">05</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; SHOWCASE</h4>
<p class="text-[11px] text-slate-400">Maintain an undeniable GitHub record of public commits.</p>
</div>
</div>
<div class="p-4 bg-black/60 border border-slate-800 rounded flex flex-col justify-between hover:border-hud-amber transition-colors">
<span class="text-hud-amber font-bold text-xl mb-2">06</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; GROW</h4>
<p class="text-[11px] text-slate-400">Sharpen system-level mindset and industry leadership.</p>
</div>
</div>
</div>
</div>
</section>
<!-- MEET THE DEVELOPERS // ROSTER HUD -->
<!-- BUILT AT ASTRATECH // CAPSTONES HUD -->
<!-- EVENTS & HACKATHONS // ASTRAHACK 2026 -->
<section class="w-full py-20 border-b border-border-hud/30" id="events">
<div class="max-w-7xl mx-auto px-4 sm:px-6">
<div class="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
<div class="h-px flex-1 bg-amber-500/20"></div>
</div>
</div>
</section>
<!-- MEDIA GALLERY // INSIDE ASTRATECH -->
<section class="w-full py-20 border-b border-border-hud/30 bg-[#080b13]" id="media">
<div class="max-w-7xl mx-auto px-4 sm:px-6">
<div class="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
<span class="">// 08_FACILITY_TELEMETRY</span>
<div class="h-px flex-1 bg-amber-500/20"></div>
<span class="text-slate-500">[OPTICAL_FEED]</span>
</div>
<div class="text-left mb-12">
<h2 class="font-mono text-3xl font-extrabold text-white uppercase tracking-tight">
        INSIDE ASTRATECH
      </h2>
<p class="font-mono text-xs text-slate-400 mt-1">&gt; WHERE THEORETICAL COMPUTATION TRANSFORMS INTO ACTIVE, KEYBOARD-FIRST ENGINEERING</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
<!-- Media 01 -->
<div class="corner-bracket bg-surface-card border border-slate-800 overflow-hidden">
<div class="relative h-60 bg-black">
<div class="absolute inset-0 bg-cover bg-center filter grayscale contrast-110" data-alt="AstraTech developer lab with clean ergonomic dual-display monitors showing Visual Studio Code, dark cyber-minimalist lab interior in Jamshedpur." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp5M2mYXhAejNPudvlPRSBPKj-qJa8CHoczC2dgvp7PQpFik6lkshNGqDP9sv5MFawQe3jrIrVYRmigSnyYxY9w2fbhfDJ71herVS6N40_f517dqCgICSJCXsCNmv6oIcYmNu0Cv1ilTZR3OYWq9Y_pbxjhvP0w6nXbAXuF30hbOBNb04bjgwdO4FrcmGHpyMcTFGul0OWZEod8ZwHUypXOmXm_s2M9sXdGzDbqJ_h28bRJT-dyxDG");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div class="absolute top-2 left-2 bg-black/80 text-[10px] text-hud-amber px-2 py-0.5 border border-amber-500/30">[FEED_CAM: 01]</div>
</div>
<div class="p-3 bg-black/80 flex items-center justify-between border-t border-slate-800 text-[11px]">
<span class="text-white">[Workstations Lab]</span>
<span class="text-slate-500">HARDWARE HUB</span>
</div>
</div>
<!-- Media 02 -->
<div class="corner-bracket bg-surface-card border border-slate-800 overflow-hidden">
<div class="relative h-60 bg-black">
<div class="absolute inset-0 bg-cover bg-center filter grayscale contrast-110" data-alt="Intense collaborative whiteboard session at AstraTech with engineers sketching distributed microservice architecture diagrams with hand drawn database nodes." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoY1OxEWs7TfosQJvrOs4g07kktCLcxvadWdLNNWKen8M_GWsf-snKDohMtObIrtYZSuK_9aUMxWexAAF0H5e-pIO0ClATftNV9t5n2S-IjxW78895X3AhCRPeOAxE4Uqs-dFVW_tyxF32MJJrY9cV2M1ASfou1Aq0mh92o5k1i6D8jePLNRgf_VTS7FpP8cKIXFubTr4vgwa4LZEuNMMguSmzVNFLc413xASaHdK4C9d2wuLO_1qd");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div class="absolute top-2 left-2 bg-black/80 text-[10px] text-hud-cyan px-2 py-0.5 border border-cyan-500/30">[FEED_CAM: 02]</div>
</div>
<div class="p-3 bg-black/80 flex items-center justify-between border-t border-slate-800 text-[11px]">
<span class="text-white">[Architecture Session]</span>
<span class="text-slate-500">DESIGN SPRINTS</span>
</div>
</div>
<!-- Media 03 -->
<div class="corner-bracket bg-surface-card border border-slate-800 overflow-hidden">
<div class="relative h-60 bg-black">
<div class="absolute inset-0 bg-cover bg-center filter grayscale contrast-110" data-alt="Technical mentorship review session at AstraTech with director Aniket Kumar conducting code inspections on a high-resolution projector screen." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8F1Wc9Q3PQBDP6MxVN16wfuF1F83s6KHgyGrgzuuwnu43eCOAmxJlwee0VWa6VuzOWtZZlTglEQp_ggzHFQWs9LCf1gQbPaAT1gLMm0MkzbCikUGjU0ZUA1JXkTqyMMHnlcqlinR8wF1ugxSx5jZJF-rcatR2QuSw63DhgTH0jy3FJomN1NZUeIWVMXfwWtAivSoDf3Eyrzh6NNXYB2V6JZ2Xvz6Qp00v_qoHvSXbdbNfnnM-xg6S");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div class="absolute top-2 left-2 bg-black/80 text-[10px] text-hud-green px-2 py-0.5 border border-emerald-500/30">[FEED_CAM: 03]</div>
</div>
<div class="p-3 bg-black/80 flex items-center justify-between border-t border-slate-800 text-[11px]">
<span class="text-white">[Founder Technical Review]</span>
<span class="text-slate-500">PEER AUDIT</span>
</div>
</div>
</div>
</div>
</section>
<!-- WHY ASTRATECH // 5 TACTICAL ADVANTAGES -->
<section class="w-full py-20 border-b border-border-hud/30" id="about">
<div class="max-w-7xl mx-auto px-4 sm:px-6">
<div class="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
<span class="">// 09_COMPETITIVE_ADVANTAGE</span>
<div class="h-px flex-1 bg-amber-500/20"></div>
<span class="text-slate-500">[5 VECTORS]</span>
</div>
<div class="text-left mb-12">
<h2 class="font-mono text-3xl font-extrabold text-white uppercase tracking-tight">
        WHY ASTRATECH?
      </h2>
<p class="font-mono text-xs text-slate-400 mt-1">&gt; ENGINEERED TO DISMANTLE PASSIVE EDUCATIONAL HABITS AND BUILD RELENTLESS BUILDER INSTINCTS</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono">
<div class="corner-bracket bg-surface-card border border-slate-800 p-5 flex flex-col justify-between hover:border-hud-amber transition-all">
<span class="text-hud-amber font-bold text-lg mb-4">01</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; LEARN BY BUILDING</h4>
<p class="text-[11px] text-slate-400">Zero dry lectures; 100% of curriculum executed inside Git repos.</p>
</div>
</div>
<div class="corner-bracket bg-surface-card border border-slate-800 p-5 flex flex-col justify-between hover:border-hud-amber transition-all">
<span class="text-hud-amber font-bold text-lg mb-4">02</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; GROW TOGETHER</h4>
<p class="text-[11px] text-slate-400">Collaborate with peers who push standards higher every week.</p>
</div>
</div>
<div class="corner-bracket bg-surface-card border border-slate-800 p-5 flex flex-col justify-between hover:border-hud-amber transition-all">
<span class="text-hud-amber font-bold text-lg mb-4">03</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; PUSH LIMITS</h4>
<p class="text-[11px] text-slate-400">Tackle complex architectural challenges beyond standard coursework.</p>
</div>
</div>
<div class="corner-bracket bg-surface-card border border-slate-800 p-5 flex flex-col justify-between hover:border-hud-amber transition-all">
<span class="text-hud-amber font-bold text-lg mb-4">04</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; CREATE IMPACT</h4>
<p class="text-[11px] text-slate-400">Solve localized municipal and regional industrial friction in Jamshedpur.</p>
</div>
</div>
<div class="corner-bracket bg-surface-card border border-slate-800 p-5 flex flex-col justify-between hover:border-hud-amber transition-all">
<span class="text-hud-amber font-bold text-lg mb-4">05</span>
<div>
<h4 class="text-white font-bold text-xs uppercase mb-1">&gt; PORTFOLIO READY</h4>
<p class="text-[11px] text-slate-400">Graduate with public GitHub repositories, deployed URLs, and verified tests.</p>
</div>
</div>
</div>
</div>
</section>
<!-- REAL STORIES COHORT PLACEHOLDER -->
<!-- READY TO BUILD // CALL TO ACTION -->
<section class="w-full py-20 border-b border-border-hud/30 relative" id="join">
<div class="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
<div class="inline-block font-mono text-xs text-hud-amber bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30 mb-4">
      [ENROLLMENT_GATEWAY // COHORT 2026]
    </div>
<h2 class="font-mono text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
      READY TO BUILD WITH US?
    </h2>
<p class="text-slate-300 text-base max-w-xl mx-auto mb-8">
      Become part of a growing collective of technical intellects, systems builders, and pragmatic problem-solvers in Jamshedpur.
    </p>
<a class="inline-flex items-center gap-2 px-8 py-3.5 bg-hud-amber text-black font-mono text-xs font-bold uppercase rounded hover:bg-hud-amber-light shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all" href="#contact">
<span class="">&gt; APPLY TO COHORT</span>
<span class="material-symbols-outlined text-[16px]">north_east</span>
</a>
</div>
</section>
<!-- CONTACT / ADMISSIONS TERMINAL -->
<section class="w-full py-20 border-b border-border-hud/30 bg-[#080b13]" id="contact">
<div class="max-w-7xl mx-auto px-4 sm:px-6">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
<!-- Contact Info Left -->
<div class="lg:col-span-5 flex flex-col justify-between font-mono">
<div>
<div class="text-xs text-hud-amber mb-2">// 10_DIRECT_DESK</div>
<h2 class="text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
            HAVE A QUESTION?
          </h2>
<p class="text-slate-400 font-sans text-sm leading-relaxed mb-8">
            Whether you are an aspiring builder seeking admission, a college student looking for real technical intellect, or an industry firm looking to hire our vetted developers, we respond directly.
          </p>
<div class="space-y-4 text-xs">
<div class="p-3 bg-black/60 border border-slate-800 rounded">
<span class="text-hud-amber block mb-1">[PHYSICAL_CAMPUS]</span>
<span class="text-white">AstraTech AI Lab, Bistupur, Jamshedpur, Jharkhand — 831001</span>
</div>
<div class="p-3 bg-black/60 border border-slate-800 rounded">
<span class="text-hud-green block mb-1">[OFFICIAL_COMMUNICATIONS]</span>
<span class="text-white">admissions@astratech.ai • director@astratech.ai</span>
</div>
<div class="p-3 bg-black/60 border border-slate-800 rounded">
<span class="text-hud-cyan block mb-1">[WHATSAPP_HOTLINE]</span>
<span class="text-white">+91 (Admissions Hotline Active)</span>
</div>
</div>
</div>
<div class="pt-6 border-t border-slate-800 mt-6 text-[11px] text-slate-500">
          [STATUS: ADMISSIONS DESK OPEN (MON - SAT) // UTC+05:30]
        </div>
</div>
<!-- Contact Terminal Form -->
<div class="lg:col-span-7">
<div class="corner-bracket bg-surface-card border border-amber-500/40 p-6 md:p-8">
<div class="font-mono text-xs text-hud-amber mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
<span class="">[TERMINAL_INPUT: ADMISSION_QUERY]</span>
<span class="text-slate-500">SEC_CHANNEL_01</span>
</div>
<form class="space-y-4 font-mono text-xs" onsubmit="event.preventDefault(); alert('Official enquiry received. AstraTech Admissions will review your profile.');">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label class="block text-slate-400 mb-1">&gt; FULL_NAME *</label>
<input class="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none" placeholder="e.g. Rahul Sharma" required="" type="text"/>
</div>
<div>
<label class="block text-slate-400 mb-1">&gt; EMAIL_ADDRESS *</label>
<input class="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none" placeholder="rahul@example.com" required="" type="email"/>
</div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label class="block text-slate-400 mb-1">&gt; PHONE_NUMBER *</label>
<input class="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none" placeholder="+91 XXXXX XXXXX" required="" type="tel"/>
</div>
<div>
<label class="block text-slate-400 mb-1">&gt; BACKGROUND_CATEGORY *</label>
<select class="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none">
<option>College Student (Engineering)</option>
<option>College Student (Other Track)</option>
<option>Working Professional</option>
<option>Independent Builder</option>
</select>
</div>
</div>
<div>
<label class="block text-slate-400 mb-1">&gt; PROGRAM_OF_INTEREST *</label>
<select class="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none">
<option>01 Full Stack Development (MERN / Next.js)</option>
<option>02 Artificial Intelligence (LLMs / PyTorch)</option>
<option>03 Programming &amp; DSA (Algorithms)</option>
<option>04 Data Analytics (SQL / Python / BI)</option>
<option>05 Cloud &amp; DevOps (AWS / Docker)</option>
<option>06 UI/UX &amp; Product Design</option>
</select>
</div>
<div>
<label class="block text-slate-400 mb-1">&gt; QUESTIONS_OR_GOALS</label>
<textarea class="w-full bg-black/80 border border-slate-700 text-white p-3 rounded focus:border-hud-amber focus:ring-0 outline-none" placeholder="Tell us what you want to build and your expectations..." rows="3"></textarea>
</div>
<button class="w-full py-3 bg-hud-amber text-black font-bold uppercase rounded hover:bg-hud-amber-light transition-all flex items-center justify-center gap-2" type="submit">
<span class="">[TRANSMIT_OFFICIAL_ENQUIRY]</span>
<span class="material-symbols-outlined text-[16px]">send</span>
</button>
</form>
</div>
</div>
</div>
</div>
</section>
<!-- REGIONAL MAP // HUD LOCATION SCHEMATIC -->
</main>
<!-- HUD FOOTER -->
<footer class="w-full bg-[#05070c] border-t border-border-hud/40 py-12 font-mono text-xs text-slate-400"><div class="max-w-7xl mx-auto px-4 sm:px-6">
<div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
<div class="md:col-span-5 space-y-3">
<div class="flex items-center gap-2 text-white font-bold text-sm">
<span class="w-5 h-5 rounded border border-hud-amber text-hud-amber flex items-center justify-center text-[10px]">&gt;</span>
<span class="">ASTRATECH AI // SYSTEMS LAB</span>
</div>
<p class="text-slate-500 font-sans text-xs max-w-sm">
        Learn. Build. Deploy. Grow. Developing the engineering vanguard of Jamshedpur &amp; Eastern India.
      </p>
<div class="flex items-center gap-3 pt-2">
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">photo_camera</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">share</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">terminal</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">smart_display</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">chat</span></a>
</div>
</div>
<div class="md:col-span-4 space-y-2">
<span class="text-hud-amber font-bold block mb-2">[SECTIONS_INDEX]</span>
<div class="grid grid-cols-2 gap-2 text-[11px]">
<a class="hover:text-hud-amber transition-colors" data-path="about" href="#">// ABOUT</a>
<a class="hover:text-hud-amber transition-colors" data-path="courses" href="#">// COURSES</a>
<a class="hover:text-hud-amber transition-colors" data-path="developers" href="#">// DEVELOPERS</a>
<a class="hover:text-hud-amber transition-colors" data-path="projects" href="#">// PROJECTS</a>
<a class="hover:text-hud-amber transition-colors" data-path="events" href="#">// EVENTS</a>
<a class="hover:text-hud-amber transition-colors" data-path="media" href="#">// MEDIA</a>
<a class="hover:text-hud-amber transition-colors" data-path="contact" href="#">// CONTACT</a>
</div>
</div>
<div class="md:col-span-3 space-y-2">
<span class="text-hud-amber font-bold block mb-2">[REGULATORY]</span>
<div class="flex flex-col gap-1.5 text-[11px]">
<a class="hover:text-hud-amber transition-colors" data-path="privacy-policy" href="#">// PRIVACY_POLICY</a>
<a class="hover:text-hud-amber transition-colors" data-path="terms" href="#">// TERMS_OF_SERVICE</a>
<a class="hover:text-hud-amber transition-colors" data-path="refund-policy" href="#">// REFUND_POLICY</a>
</div>
</div>
</div>
<div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
<span class="">© AstraTech AI. Jamshedpur, Jharkhand. All systems operational.</span>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-hud-green animate-ping"></span>
<span class="text-hud-green font-bold">[NODE_STATUS: ONLINE]</span>
</div>
</div>
</div></footer>
</body></html>

<!-- AstraTech AI — About Page (Tactical Cyber Blueprint) -->
<!DOCTYPE html>

<html class="dark" lang="en" style=""><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><meta content="web_standard" name="shell-type"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/><link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&amp;family=Space+Grotesk:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {canvas: "#07090e", surface: "#111318", "surface-card": "#101420", "surface-panel": "#141a29", "hud-amber": "#f59e0b", "hud-amber-light": "#fbbf24", "hud-green": "#10b981", "hud-cyan": "#06b6d4", "line-dim": "rgba(245, 158, 11, 0.15)", "line-blueprint": "rgba(56, 189, 248, 0.12)", "border-hud": "rgba(245, 158, 11, 0.25)", "border-glow": "rgba(16, 185, 129, 0.35)", "text-lead": "#f8fafc", "text-dim": "#94a3b8", "surface-container-highest": "#32353a", "on-secondary": "#2b3136", "on-secondary-fixed-variant": "#41484c", "on-primary": "#2d3137", "primary-container": "#0d1117", "surface-container-high": "#272a2f", "surface-bright": "#37393e", "secondary-fixed-dim": "#c1c7cd", "on-secondary-container": "#b3b9bf", "primary-fixed": "#dfe2eb", "on-tertiary": "#3a2e26", "surface-container": "#1d2024", "on-primary-container": "#797d85", error: "#ffb4ab", "tertiary-container": "#180f08", outline: "#8f9095", "inverse-primary": "#5b5e66", "error-container": "#93000a", "surface-tint": "#c3c6cf", "surface-dim": "#111318", "on-primary-fixed": "#181c22", "on-primary-fixed-variant": "#43474e", "outline-variant": "#45474b", "tertiary-fixed-dim": "#d6c3b7", "primary-fixed-dim": "#c3c6cf", background: "#111318", "surface-container-lowest": "#0c0e13", "surface-container-low": "#191c20", "on-background": "#e1e2e9", "secondary-container": "#434a4f", primary: "#c3c6cf", "on-tertiary-container": "#897a6f", "on-error-container": "#ffdad6", "on-surface": "#e1e2e9", "on-secondary-fixed": "#161c21", "tertiary-fixed": "#f3dfd2", "surface-variant": "#32353a", "on-tertiary-fixed": "#231a12", "inverse-on-surface": "#2e3035", tertiary: "#d6c3b7", "on-tertiary-fixed-variant": "#51443b", "on-error": "#690005", secondary: "#c1c7cd", "on-surface-variant": "#c6c6cb", "secondary-fixed": "#dde3e9", "inverse-surface": "#e1e2e9"}, fontFamily: {mono: ["'JetBrains Mono'", "monospace"], sans: ["'Space Grotesk'", "sans-serif"], headline: ["Sora"], display: ["Sora"], body: ["Space Grotesk"], label: ["Space Grotesk"]}, fontSize: {}, borderRadius: {DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px"}}}};</script><style>
  @layer base {
    body {
      background-color: #06080d;
      color: #cbd5e1;
      font-family: 'Space Grotesk', sans-serif;
    }
  }
  .blueprint-grid {
    background-image: 
      linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
      linear-gradient(to right, rgba(245, 158, 11, 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(245, 158, 11, 0.08) 1px, transparent 1px);
    background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
  }
  .hud-scanline {
    background: linear-gradient(180deg, rgba(255,255,255,0.01) 50%, rgba(0, 0, 0, 0.35) 51%);
    background-size: 100% 4px;
  }
  .corner-bracket {
    position: relative;
  }
  .corner-bracket::before, .corner-bracket::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    pointer-events: none;
  }
  .corner-bracket::before {
    top: -1px; left: -1px;
    border-top: 2px solid #f59e0b;
    border-left: 2px solid #f59e0b;
  }
  .corner-bracket::after {
    bottom: -1px; right: -1px;
    border-bottom: 2px solid #f59e0b;
    border-right: 2px solid #f59e0b;
  }
  .crosshair {
    position: relative;
  }
  .crosshair::before {
    content: '+';
    position: absolute;
    font-family: 'JetBrains Mono', monospace;
    color: #f59e0b;
    font-size: 12px;
    opacity: 0.6;
  }
</style></head><body class="bg-[#06080d] text-slate-300 font-sans selection:bg-hud-amber selection:text-black antialiased relative blueprint-grid"><div class="fixed inset-0 pointer-events-none hud-scanline z-40 opacity-40"></div>
<!-- TOP STATUS TELEMETRY STRIP -->
<div class="w-full bg-[#080b12] border-b border-border-hud/50 py-1 px-4 text-[10px] font-mono flex items-center justify-between text-text-dim relative z-50">
<div class="flex items-center gap-4">
<span class="flex items-center gap-1.5 text-hud-green"><span class="w-1.5 h-1.5 rounded-full bg-hud-green animate-ping"></span>[SYS_STATUS: NOMINAL // FEED: 99.8%]</span>
<span class="hidden md:inline text-amber-500/80">[LAT: 22.8046°N // LON: 86.2029°E]</span>
<span class="hidden lg:inline text-slate-500">[REGION: JAMSHEDPUR, JHARKHAND - NODE_01]</span>
</div>
<div class="flex items-center gap-3">
<span class="text-hud-amber font-semibold">[DEF_AUTH: PROTOCOL_L5]</span>
<span class="text-slate-400">CLK: UTC+05:30</span>
</div>
</div>
<!-- TACTICAL NAVIGATION BAR -->
<header class="sticky top-0 left-0 right-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-amber-500/30 shadow-[0_4px_25px_rgba(0,0,0,0.8)]"><div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
<div class="flex items-center gap-3">
<a class="flex items-center gap-2 group" data-path="home" href="#">
<div class="w-8 h-8 rounded border border-hud-amber/80 bg-black/60 flex items-center justify-center text-hud-amber group-hover:bg-hud-amber group-hover:text-black transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]">
<span class="material-symbols-outlined text-[18px]">terminal</span>
</div>
<div class="flex flex-col">
<div class="flex items-center gap-1.5">
<span class="font-mono font-bold text-[15px] tracking-wider text-white">ASTRATECH</span>
<span class="text-[9px] font-mono px-1 py-0.5 rounded bg-amber-500/10 text-hud-amber border border-amber-500/40">AI.OS</span>
</div>
<span class="text-[9px] font-mono text-slate-400 tracking-widest -mt-0.5">// JAMSHEDPUR LAB</span>
</div>
</a>
</div>
<nav class="hidden lg:flex items-center gap-6 font-mono text-xs text-slate-400" data-active-classes="text-hud-amber font-semibold"><a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="home" href="#"><span class="text-[10px] text-slate-600">//</span>HOME</a>
<a class="text-hud-amber font-semibold transition-colors flex items-center gap-1" data-path="about" href="#"><span class="text-[10px] text-hud-amber/60">&gt;</span>ABOUT</a>
<a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="courses" href="#"><span class="text-[10px] text-slate-600">//</span>COURSES</a><a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="projects" href="#"><span class="text-[10px] text-slate-600">//</span>PROJECTS</a>
<a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="developers" href="#"><span class="text-[10px] text-slate-600">//</span>DEVELOPERS</a>
<a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="media" href="#"><span class="text-[10px] text-slate-600">//</span>MEDIA</a>
<a class="hover:text-hud-amber transition-colors flex items-center gap-1" data-path="contact" href="#"><span class="text-[10px] text-slate-600">//</span>CONTACT</a></nav>
<div class="flex items-center gap-3">
<a class="font-mono text-xs inline-flex items-center gap-1.5 px-4 py-2 rounded bg-amber-500/10 border border-hud-amber text-hud-amber hover:bg-hud-amber hover:text-black font-semibold transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)]" data-path="join-astratech" href="#join">
<span class="">[INIT_ENROLL]</span>
<span class="material-symbols-outlined text-[14px]">bolt</span>
</a>
<div class="w-8 h-8 rounded border border-slate-700 bg-surface flex items-center justify-center text-slate-400 text-xs font-mono">
<span class="">01</span>
</div>
</div>
</div></header>
<main class="w-full relative z-10"><link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=VT323&amp;display=swap" rel="stylesheet"/>
<div class="flex flex-col w-full text-slate-300 font-sans relative selection:bg-hud-amber selection:text-black">
<!-- TOP HUD TELEMETRY TICKER SUB-HEADER -->
<div class="w-full bg-[#05070B] border-b border-white/10 px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between text-xs font-mono text-text-dim">
<div class="flex items-center gap-3">
<span class="inline-flex items-center gap-1.5 text-hud-green font-medium">
<span class="w-1.5 h-1.5 rounded-full bg-hud-green animate-pulse"></span>
        MANIFEST::v2.4_ONLINE
      </span>
<span class="hidden sm:inline text-white/20">|</span>
<span class="text-slate-400 hidden md:inline">SYSTEM: ASTRATECH-AI-FOUNDATION</span>
<span class="text-white/20 hidden md:inline">|</span>
<span class="text-hud-amber font-mono text-[11px]">[NODE: 22.8048° N, 86.2029° E]</span>
</div>
<div class="flex items-center gap-4 text-[11px]">
<span class="text-slate-400">COHORT CYCLE: <span class="text-white">2026-ALPHA</span></span>
<span class="text-hud-cyan hidden lg:inline font-mono">HASH: 9a7e2::deploy</span>
</div>
</div>
<!-- SECTION 1: HERO / ABOUT ARCHITECTURE -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-b border-white/10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<!-- Left Column: Primary Typography & Callouts -->
<div class="lg:col-span-7 flex flex-col space-y-6">
<div class="flex items-center gap-2 font-mono text-xs text-hud-amber tracking-widest uppercase">
<span class="px-2 py-0.5 bg-amber-500/10 border border-hud-amber/40 rounded-none">[ SYSTEM // ABOUT ASTRA ]</span>
<span class="text-slate-500">// LAB PROTOCOL 01</span>
</div>
<h1 class="text-6xl sm:text-7xl lg:text-8xl font-normal text-white uppercase tracking-tight leading-none" style="font-family: 'VT323', monospace;">
          ABOUT ASTRATECH AI
        </h1>
<p class="text-xl sm:text-2xl text-slate-200 font-sans font-light leading-relaxed">
          Building the next generation of <span class="text-hud-amber font-semibold">tech talent</span> and sovereign systems engineers.
        </p>
<p class="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
          AstraTech AI is a technical education and developer ecosystem grounded in raw fundamentals, production codebases, and systems thinking. We reject superficial syntax memorization to build a ruthless culture of shipping real software from Jamshedpur to global networks.
        </p>
<!-- CTA Cluster -->
<div class="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
<a class="inline-flex items-center gap-2 bg-hud-amber text-black font-semibold px-6 py-3 rounded-none hover:bg-hud-amber-light transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]" href="#vision">
<span class="">[ EXPLORE DOCTRINE ]</span>
<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
<a class="inline-flex items-center gap-2 bg-transparent text-slate-200 border border-white/20 px-6 py-3 rounded-none hover:border-hud-amber hover:text-hud-amber transition-all" href="#pipeline">
<span class="">[ INSPECT PIPELINE ]</span>
<span class="material-symbols-outlined text-[16px]">schema</span>
</a>
</div>
<!-- Telemetry micro-row -->
<div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
<div>
<div class="text-slate-500 text-[10px] tracking-wider uppercase">CORE DOCTRINE</div>
<div class="text-white font-medium mt-1">FIRST-PRINCIPLES</div>
</div>
<div>
<div class="text-slate-500 text-[10px] tracking-wider uppercase">VERIFICATION</div>
<div class="text-hud-green font-medium mt-1">100% PRODUCTION PRs</div>
</div>
<div>
<div class="text-slate-500 text-[10px] tracking-wider uppercase">LOCATION_STAMP</div>
<div class="text-hud-cyan font-medium mt-1">JHARKHAND LAB 01</div>
</div>
</div>
</div>
<!-- Right Column: Interactive Diagnostic Manifest Terminal -->
<div class="lg:col-span-5 bg-[#090D15] border border-white/15 rounded-none p-5 relative shadow-[0_8px_30px_rgba(0,0,0,0.6)] font-mono text-xs backdrop-blur-md">
<!-- Terminal Header -->
<div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-text-dim text-[11px]">
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 rounded-none bg-red-500/80 inline-block"></span>
<span class="w-2.5 h-2.5 rounded-none bg-yellow-500/80 inline-block"></span>
<span class="w-2.5 h-2.5 rounded-none bg-green-500/80 inline-block"></span>
<span class="ml-2 text-slate-300">astratech-core::about_manifest.sh</span>
</div>
<span class="text-hud-amber font-mono">STATUS: 200 OK</span>
</div>
<!-- Code Block -->
<div class="space-y-2.5 text-slate-300 text-[12px] leading-relaxed">
<div class="text-slate-500">// Initializing node diagnostic telemetry...</div>
<div class=""><span class="text-hud-cyan">$</span> cat &lt;&lt; 'EOF' &gt; /etc/astratech/mission.conf</div>
<div class="pl-3 border-l-2 border-hud-amber/60 text-slate-300 space-y-1 py-1">
<p class=""><span class="text-hud-amber">NAME</span> = "AstraTech AI Lab"</p>
<p class=""><span class="text-hud-amber">FOUNDED</span> = "Jamshedpur, Eastern India"</p>
<p class=""><span class="text-hud-amber">PHILOSOPHY</span> = "Zero fake credentials. Pure execution."</p>
<p class=""><span class="text-hud-amber">TARGET</span> = "Tier-1 Systems Builders"</p>
<p class=""><span class="text-hud-amber">RUNTIME</span> = "Distributed Cohort + In-Person R&amp;D"</p>
</div>
<div class=""><span class="text-hud-cyan">$</span> ./verify_doctrine --strict-mode</div>
<div class="text-hud-green text-[11px] bg-emerald-950/20 border border-emerald-500/20 p-2.5">
            [OK] Architecture validated: Monolith to Cloud-Native<br/>
            [OK] Sandboxed Toy Environments: DEPRECATED<br/>
            [OK] Real Git Repositories: MOUNTED<br/>
            [OK] Linux Kernel &amp; Hardware Primaries: ACTIVE
          </div>
<div class="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-white/5">
<span class="">MEM: 64MB / SHM ALLOCATED</span>
<span class="text-hud-amber animate-pulse">_CURSOR_READY</span>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 2: WHY ASTRA? MATRIX (Passive vs Active Systems) -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10">
<div class="flex flex-col space-y-4 mb-12">
<div class="font-mono text-xs text-hud-amber uppercase tracking-widest">[ 01 // PURPOSE &amp; MISSION ]</div>
<h2 class="text-5xl sm:text-6xl text-white uppercase tracking-tight" style="font-family: 'VT323', monospace;">
        WHY ASTRA?
      </h2>
<p class="text-lg text-slate-400 max-w-3xl font-sans">
        Traditional software education has devolved into mindless video reproduction and vanity certificates. AstraTech was forged to eliminate that gap, arming engineers with real architectural competence.
      </p>
</div>
<!-- Comparative Matrix Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Conventional EdTech (Legacy Flaws) -->
<div class="bg-[#090C12] border border-red-500/20 p-6 sm:p-8 relative backdrop-blur-md">
<div class="absolute -top-3 left-6 bg-[#090C12] px-3 font-mono text-xs text-red-400 border border-red-500/30 uppercase">
          [ CONVENTIONAL TUTORIAL PARALYSIS ]
        </div>
<div class="space-y-6 pt-2 font-mono text-xs">
<div class="border-b border-white/5 pb-4">
<span class="text-red-400 font-bold block mb-1">01. SYNTAX MEMORIZATION</span>
<p class="text-slate-400 font-sans text-sm">Memorizing high-level library syntax without understanding memory layouts, CPU cycles, network packets, or runtime compilers.</p>
</div>
<div class="border-b border-white/5 pb-4">
<span class="text-red-400 font-bold block mb-1">02. DUMMY TOY APPS</span>
<p class="text-slate-400 font-sans text-sm">Building identical, trivial TODO lists that run on localhost and crash under any production concurrent traffic.</p>
</div>
<div class="border-b border-white/5 pb-4">
<span class="text-red-400 font-bold block mb-1">03. PASSIVE STREAMING</span>
<p class="text-slate-400 font-sans text-sm">Binge-watching video modules creates an illusion of competence while leaving engineers stranded when facing a blank terminal or production bug.</p>
</div>
<div>
<span class="text-red-400 font-bold block mb-1">04. VANITY CERTIFICATES</span>
<p class="text-slate-400 font-sans text-sm">Digital paper certificates with zero verifiable commit histories, zero pull requests, and zero real engineering reputation.</p>
</div>
</div>
</div>
<!-- AstraTech AI Standard (First-Principles) -->
<div class="bg-[#080E18] border border-hud-amber/40 p-6 sm:p-8 relative shadow-[0_0_30px_rgba(245,158,11,0.06)] backdrop-blur-md">
<div class="absolute -top-3 left-6 bg-[#080E18] px-3 font-mono text-xs text-hud-amber border border-hud-amber/60 uppercase">
          [ ASTRATECH SYSTEMS ENGINEERING ]
        </div>
<div class="space-y-6 pt-2 font-mono text-xs">
<div class="border-b border-white/10 pb-4">
<span class="text-hud-amber font-bold block mb-1">01. FIRST-PRINCIPLES DECONSTRUCTION</span>
<p class="text-slate-300 font-sans text-sm">Dissect how operating systems, protocols (TCP/UDP/HTTP), databases, and neural models calculate state under the hood.</p>
</div>
<div class="border-b border-white/10 pb-4">
<span class="text-hud-amber font-bold block mb-1">02. PRODUCTION RESILIENT MICROSERVICES</span>
<p class="text-slate-300 font-sans text-sm">Design fault-tolerant pipelines, containerized architectures, observability metrics, and production-ready APIs.</p>
</div>
<div class="border-b border-white/10 pb-4">
<span class="text-hud-amber font-bold block mb-1">03. TERMINAL &amp; REAL PR REVIEWS</span>
<p class="text-slate-300 font-sans text-sm">Live code walkthroughs, Git merge conflicts, automated testing pipelines, and ruthless code review standards.</p>
</div>
<div>
<span class="text-hud-amber font-bold block mb-1">04. PROVABLE REPUTATION ON GITHUB</span>
<p class="text-slate-300 font-sans text-sm">Proof of work measured exclusively in merged pull requests, public architectural RFCs, and working public URLs.</p>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 3: VISION & FOUR PILLARS -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10" id="vision">
<div class="flex flex-col space-y-4 mb-14">
<div class="font-mono text-xs text-hud-amber uppercase tracking-widest">[ 02 // DOCTRINE ]</div>
<h2 class="text-5xl sm:text-6xl text-white uppercase tracking-tight" style="font-family: 'VT323', monospace;">
        ENGINEERING WORTH BUILDING.
      </h2>
<p class="text-lg text-slate-300 max-w-3xl font-sans font-light">
        "We want to build a generation of technology professionals who don't just learn technology, but understand how to think, build, solve and create with it."
      </p>
</div>
<!-- 4 Pillars Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Card 01: THINK -->
<div class="bg-[#0A0D15] border border-white/10 p-6 relative group hover:border-hud-amber/60 transition-all">
<div class="font-mono text-hud-cyan text-xs mb-3 font-semibold">[ 01 // THINK ]</div>
<h3 class="text-2xl text-white font-mono uppercase mb-2">Computational Rigor</h3>
<p class="text-slate-400 font-sans text-sm leading-relaxed mb-4">
          Deconstruct complex domain constraints. Master algorithmic design patterns, data structure efficiency, and latency boundaries.
        </p>
<div class="font-mono text-[11px] text-slate-500 pt-4 border-t border-white/5 flex items-center justify-between">
<span class="">ALGO_LEVEL: ADVANCED</span>
<span class="text-hud-cyan font-bold">O(1)</span>
</div>
</div>
<!-- Card 02: BUILD -->
<div class="bg-[#0A0D15] border border-white/10 p-6 relative group hover:border-hud-amber/60 transition-all">
<div class="font-mono text-hud-amber text-xs mb-3 font-semibold">[ 02 // BUILD ]</div>
<h3 class="text-2xl text-white font-mono uppercase mb-2">Production Clean Code</h3>
<p class="text-slate-400 font-sans text-sm leading-relaxed mb-4">
          Write maintainable, modular software following decoupled architecture standards, comprehensive unit testing, and robust documentation.
        </p>
<div class="font-mono text-[11px] text-slate-500 pt-4 border-t border-white/5 flex items-center justify-between">
<span class="">CI_STATUS: STRICT</span>
<span class="text-hud-amber font-bold">PASS 100%</span>
</div>
</div>
<!-- Card 03: SOLVE -->
<div class="bg-[#0A0D15] border border-white/10 p-6 relative group hover:border-hud-amber/60 transition-all">
<div class="font-mono text-hud-green text-xs mb-3 font-semibold">[ 03 // SOLVE ]</div>
<h3 class="text-2xl text-white font-mono uppercase mb-2">Pragmatic Impact</h3>
<p class="text-slate-400 font-sans text-sm leading-relaxed mb-4">
          Apply tech to tangible friction points across regional infrastructure, logistics, internal tooling, and developer productivity gaps.
        </p>
<div class="font-mono text-[11px] text-slate-500 pt-4 border-t border-white/5 flex items-center justify-between">
<span class="">FRICTION: ZEROED</span>
<span class="text-hud-green font-bold">DEPLOYED</span>
</div>
</div>
<!-- Card 04: CREATE -->
<div class="bg-[#0A0D15] border border-white/10 p-6 relative group hover:border-hud-amber/60 transition-all">
<div class="font-mono text-white text-xs mb-3 font-semibold">[ 04 // CREATE ]</div>
<h3 class="text-2xl text-white font-mono uppercase mb-2">Autonomous Systems</h3>
<p class="text-slate-400 font-sans text-sm leading-relaxed mb-4">
          Harness modern AI toolchains, vector stores, distributed compute, and full-stack orchestration to pioneer unbuilt possibilities.
        </p>
<div class="font-mono text-[11px] text-slate-500 pt-4 border-t border-white/5 flex items-center justify-between">
<span class="">HORIZON: 2026+</span>
<span class="text-white font-bold">AUTONOMOUS</span>
</div>
</div>
</div>
</section>
<!-- SECTION 4: THE 4-STAGE PIPELINE -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10" id="pipeline">
<div class="flex flex-col space-y-4 mb-16">
<div class="font-mono text-xs text-hud-amber uppercase tracking-widest">[ 03 // PEDAGOGY PIPELINE ]</div>
<h2 class="text-5xl sm:text-6xl text-white uppercase tracking-tight" style="font-family: 'VT323', monospace;">
        LEARN → BUILD → DEPLOY → GROW
      </h2>
<p class="text-lg text-slate-400 max-w-2xl font-sans">
        A deterministic linear pipeline transforming curious beginners into autonomous production systems engineers.
      </p>
</div>
<!-- Pipeline Step Chain -->
<div class="relative grid grid-cols-1 md:grid-cols-4 gap-6">
<!-- Stage 1 -->
<div class="bg-[#080B11] border border-white/10 p-6 relative">
<div class="w-8 h-8 bg-white/5 border border-white/20 text-white font-mono flex items-center justify-center text-xs mb-4">
          01
        </div>
<div class="font-mono text-xs text-hud-cyan tracking-wider uppercase mb-1">STAGE 01</div>
<h3 class="text-xl text-white font-mono uppercase mb-3">LEARN</h3>
<p class="text-slate-400 font-sans text-xs leading-relaxed">
          Build unbreakable fundamentals. Deconstruct systems from core network protocols, memory management, and clean data architectures.
        </p>
<div class="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
          KEY: Fundamentals First
        </div>
</div>
<!-- Stage 2 -->
<div class="bg-[#080B11] border border-white/10 p-6 relative">
<div class="w-8 h-8 bg-hud-amber/10 border border-hud-amber text-hud-amber font-mono flex items-center justify-center text-xs mb-4">
          02
        </div>
<div class="font-mono text-xs text-hud-amber tracking-wider uppercase mb-1">STAGE 02</div>
<h3 class="text-xl text-white font-mono uppercase mb-3">BUILD</h3>
<p class="text-slate-400 font-sans text-xs leading-relaxed">
          Translate understanding into real code. Maintain continuous Git branches, write comprehensive unit tests, and resolve merge conflicts.
        </p>
<div class="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
          KEY: Git Workflow Mastery
        </div>
</div>
<!-- Stage 3 -->
<div class="bg-[#080B11] border border-white/10 p-6 relative">
<div class="w-8 h-8 bg-hud-green/10 border border-hud-green text-hud-green font-mono flex items-center justify-center text-xs mb-4">
          03
        </div>
<div class="font-mono text-xs text-hud-green tracking-wider uppercase mb-1">STAGE 03</div>
<h3 class="text-xl text-white font-mono uppercase mb-3">DEPLOY</h3>
<p class="text-slate-400 font-sans text-xs leading-relaxed">
          Code is not real until it lives in production. Configure automated CI/CD runs, configure DNS, TLS, Docker containers, and edge proxies.
        </p>
<div class="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
          KEY: Live Production Deploy
        </div>
</div>
<!-- Stage 4 -->
<div class="bg-[#080B11] border border-white/10 p-6 relative">
<div class="w-8 h-8 bg-white/10 border border-white text-white font-mono flex items-center justify-center text-xs mb-4">
          04
        </div>
<div class="font-mono text-xs text-white tracking-wider uppercase mb-1">STAGE 04</div>
<h3 class="text-xl text-white font-mono uppercase mb-3">GROW</h3>
<p class="text-slate-400 font-sans text-xs leading-relaxed">
          Continuous refinement through open-source contributions, technical hackathons, architectural debates, and mentoring incoming cohorts.
        </p>
<div class="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
          KEY: Sustainable Mastery
        </div>
</div>
</div>
</section>
<!-- SECTION 5: REGIONAL PRESENCE — BUILDING FROM JAMSHEDPUR -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<!-- Narrative -->
<div class="lg:col-span-7 space-y-6">
<div class="font-mono text-xs text-hud-amber uppercase tracking-widest">
          [ 04 // REGIONAL PRESENCE // JHARKHAND ]
        </div>
<h2 class="text-5xl sm:text-6xl text-white uppercase tracking-tight" style="font-family: 'VT323', monospace;">
          BUILDING FROM JAMSHEDPUR.
        </h2>
<p class="text-lg text-slate-300 font-sans leading-relaxed">
          AstraTech AI is committed to contributing to Jamshedpur's growth in the digital and intelligence era. We believe tier-1 software does not belong exclusively to metropolitan tech enclaves.
        </p>
<p class="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
          Historically the industrial cradle of India's steel and manufacturing economy, Jamshedpur possesses an unmatched work ethic and engineering discipline. AstraTech channels that industrial rigor into software engineering, artificial intelligence systems, and distributed cloud computing.
        </p>
<!-- Location Telemetry Specs -->
<div class="bg-[#090C14] border border-white/10 p-5 font-mono text-xs space-y-3">
<div class="flex items-center justify-between border-b border-white/5 pb-2">
<span class="text-slate-500">HEADQUARTERS NODE</span>
<span class="text-white font-semibold">BISTUPUR, JAMSHEDPUR - JHARKHAND</span>
</div>
<div class="flex items-center justify-between border-b border-white/5 pb-2">
<span class="text-slate-500">GEO_COORDINATES</span>
<span class="text-hud-amber">22.8048° N, 86.2029° E</span>
</div>
<div class="flex items-center justify-between">
<span class="text-slate-500">INFRASTRUCTURE</span>
<span class="text-hud-green font-medium">FIBER SYMMETRIC // DEDICATED WORKSPACE LAB</span>
</div>
</div>
</div>
<!-- Map & Schematic Frame -->
<div class="lg:col-span-5 bg-[#080B10] border border-white/15 p-6 relative">
<div class="flex items-center justify-between font-mono text-[11px] text-text-dim border-b border-white/10 pb-3 mb-4">
<span class="">GRID_LOCATOR: JSR-IND-01</span>
<span class="text-hud-green flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-hud-green inline-block"></span>
            ACTIVE LAB
          </span>
</div>
<!-- Schematic Map View -->
<div class="w-full h-64 bg-cover bg-center rounded-none relative border border-white/10" data-location="Bistupur, Jamshedpur, Jharkhand" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyyTNLOrOu0pRu237FfchoReS3ghqxxlpdXHRxMgQ760iWT5zmLhyovoWmyHEtayfyHu1GkYc0kSNHwBK8nLBujiogTQZzxwDVu_FNLcVj6I-GlMFFHgg-mZBd5jDv-NOM22ur8SbCKrW40ZfR6VuHmyFNtfjYYBgWUfNqI0R3Kfda2oj-RIaGSqB9qHoqxOaTYCALL8qVz0hyAkD6CAO2Y9JwtUO3vWq0N_9Wqfm_CAa4BM0wFGAZ')">
<div class="absolute inset-0 bg-black/40 backdrop-grayscale flex items-center justify-center">
<div class="text-center font-mono p-3 bg-black/80 border border-hud-amber text-xs">
<div class="text-hud-amber font-bold">[ NODE_CENTRAL ]</div>
<div class="text-[10px] text-slate-300">ASTRATECH LAB // JAMSHEDPUR</div>
</div>
</div>
</div>
<!-- Radar / Telemetry readout -->
<div class="pt-4 grid grid-cols-2 gap-2 font-mono text-[11px] text-slate-400">
<div class="">COMMUNITY: 500+ BUILDERS</div>
<div class="text-right text-hud-cyan">REGIONAL CAPACITY: LEVEL-1</div>
</div>
</div>
</div>
</section>
<!-- SECTION 6: PEOPLE BEHIND ASTRA (Founder & Contributor Guild) -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10">
<div class="flex flex-col space-y-4 mb-14">
<div class="font-mono text-xs text-hud-amber uppercase tracking-widest">
        [ 05 // LEADERSHIP &amp; ARCHITECTS ]
      </div>
<h2 class="text-5xl sm:text-6xl text-white uppercase tracking-tight" style="font-family: 'VT323', monospace;">
        THE PEOPLE BEHIND THE BUILD.
      </h2>
<p class="text-lg text-slate-400 max-w-2xl font-sans">
        Built by practitioners who spend their days in source code, Linux command lines, and system deployments.
      </p>
</div>
<!-- Founder Primary Card -->
<div class="bg-[#090D16] border border-hud-amber/30 p-6 sm:p-10 mb-12 relative shadow-[0_0_35px_rgba(245,158,11,0.05)] backdrop-blur-md">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div class="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
<img class="w-44 h-44 object-cover border border-hud-amber/40 shadow-[0_0_20px_rgba(245,158,11,0.2)] mb-4" alt="Aniket Kumar - Founder &amp; Systems Architect" data-alt="Portrait of Aniket Kumar, Founder and Systems Architect of AstraTech AI" src="/aniket-kumar.png"/>
<h3 class="text-2xl font-mono font-bold text-white uppercase">Aniket Kumar</h3>
<p class="font-mono text-xs text-hud-amber mt-1">FOUNDER &amp; SYSTEMS ARCHITECT</p>
<div class="flex items-center gap-4 mt-4 font-mono text-xs text-slate-400">
<a class="hover:text-hud-amber transition-colors" href="#">[ GITHUB ]</a>
<span class="">//</span>
<a class="hover:text-hud-amber transition-colors" href="#">[ LINKEDIN ]</a>
</div>
</div>
<div class="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
<div class="font-mono text-xs text-hud-green tracking-widest uppercase">[ DIRECTOR_MANIFEST ]</div>
<blockquote class="text-lg sm:text-xl text-slate-200 font-sans italic leading-relaxed">
            "I didn't want AstraTech AI to become another place where students simply consume courses. I wanted to create an environment where they learn to think, build and engineer."
          </blockquote>
<p class="text-slate-400 font-sans text-sm leading-relaxed">
            With years of experience architecting cloud services, data pipelines, and intelligent systems, Aniket launched AstraTech to establish an authentic proving ground in Eastern India. His curriculum prioritizes low-level fundamentals, autonomous debugging, and hands-on delivery above all else.
          </p>
<div class="pt-4 flex flex-wrap gap-2 font-mono text-[11px]">
<span class="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300">Distributed Systems</span>
<span class="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300">Linux Kernel &amp; OS</span>
<span class="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300">LLM Infrastructure</span>
<span class="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300">Compiler Toolchains</span>
</div>
</div>
</div>
</div>
<!-- Guild & Fellow Contributors Matrix -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
<!-- Fellow 1 -->
<div class="bg-[#080B12] border border-white/10 p-5 space-y-3">
<div class="flex items-center justify-between text-slate-500 text-[10px]">
<span class="">[ ROLE: GUILD_LEAD ]</span>
<span class="text-hud-green">ONLINE</span>
</div>
<div class="text-base font-bold text-white uppercase">Systems &amp; AI Mentors</div>
<p class="font-sans text-xs text-slate-400">
          Engineers working at high-scale tech firms reviewing PRs, leading architecture teardowns, and conducting mock triage sessions.
        </p>
<div class="text-[11px] text-hud-amber pt-2 border-t border-white/5">
          FOCUS: High-Throughput Microservices
        </div>
</div>
<!-- Fellow 2 -->
<div class="bg-[#080B12] border border-white/10 p-5 space-y-3">
<div class="flex items-center justify-between text-slate-500 text-[10px]">
<span class="">[ ROLE: LAB_OPERATIONS ]</span>
<span class="text-hud-cyan">VERIFIED</span>
</div>
<div class="text-base font-bold text-white uppercase">Full-Stack Lab Fellows</div>
<p class="font-sans text-xs text-slate-400">
          Dedicated mentors assisting cohorts with Git conflicts, cloud provisioning bugs, test-suite construction, and database queries.
        </p>
<div class="text-[11px] text-hud-cyan pt-2 border-t border-white/5">
          FOCUS: Frontend Architecture &amp; REST/gRPC
        </div>
</div>
<!-- Fellow 3 -->
<div class="bg-[#080B12] border border-white/10 p-5 space-y-3">
<div class="flex items-center justify-between text-slate-500 text-[10px]">
<span class="">[ ROLE: OPEN_SOURCE ]</span>
<span class="text-hud-amber">ACTIVE</span>
</div>
<div class="text-base font-bold text-white uppercase">Open Source Advocates</div>
<p class="font-sans text-xs text-slate-400">
          Guiding student builders through their initial upstream Linux, Rust, Python, and TypeScript contributions in public repositories.
        </p>
<div class="text-[11px] text-white pt-2 border-t border-white/5">
          FOCUS: Upstream RFCs &amp; Commits
        </div>
</div>
</div>
</section>
<!-- SECTION 7: FINAL CALL TO ACTION (DON'T JUST LEARN TECHNOLOGY) -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 my-8">
<div class="bg-[#070A10] border border-hud-amber/50 p-8 sm:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.1)] backdrop-blur-md">
<!-- Ambient corner marks -->
<div class="absolute top-2 left-2 font-mono text-[10px] text-hud-amber/60">[INIT_SEQUENCE]</div>
<div class="absolute top-2 right-2 font-mono text-[10px] text-hud-amber/60">[NODE: ACTIVE]</div>
<div class="absolute bottom-2 left-2 font-mono text-[10px] text-slate-600">[SEC_PROTOCOL: L5]</div>
<div class="absolute bottom-2 right-2 font-mono text-[10px] text-slate-600">[TERM: EOF]</div>
<div class="max-w-3xl mx-auto space-y-6">
<div class="font-mono text-xs text-hud-amber tracking-widest uppercase">
          [ END OF SPECIFICATION // INITIALIZE ]
        </div>
<h2 class="text-5xl sm:text-6xl md:text-7xl font-normal text-white uppercase tracking-tight leading-none" style="font-family: 'VT323', monospace;">
          DON'T JUST LEARN TECHNOLOGY.<br/>
<span class="text-hud-amber">BUILD WITH IT.</span>
</h2>
<p class="text-slate-300 font-sans text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
          The future belongs to the engineers who write the tests, launch the microservices, and maintain the infrastructure. Step into the terminal.
        </p>
<!-- CTA Buttons -->
<div class="flex flex-wrap items-center justify-center gap-4 pt-6 font-mono text-xs">
<a class="bg-hud-amber text-black font-bold px-8 py-3.5 rounded-none hover:bg-hud-amber-light transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-2" data-path="courses" href="#">
<span class="">[ EXPLORE ASTRA COHORTS ]</span>
<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
<a class="bg-transparent text-white border border-white/30 px-8 py-3.5 rounded-none hover:border-hud-amber hover:text-hud-amber transition-all" data-path="contact" href="#">
<span class="">[ CONTACT LAB DIRECTORS ]</span>
</a>
</div>
<div class="pt-6 font-mono text-[11px] text-slate-500">
          JAMSHEDPUR LAB ADMISSIONS: OPEN // IN-PERSON &amp; DISTRIBUTED SYNC
        </div>
</div>
</div>
</section>
</div></main>
<!-- HUD FOOTER -->
<footer class="w-full bg-[#05070c] border-t border-border-hud/40 py-12 font-mono text-xs text-slate-400"><div class="max-w-7xl mx-auto px-4 sm:px-6">
<div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
<div class="md:col-span-5 space-y-3">
<div class="flex items-center gap-2 text-white font-bold text-sm">
<span class="w-5 h-5 rounded border border-hud-amber text-hud-amber flex items-center justify-center text-[10px]">&gt;</span>
<span class="">ASTRATECH AI // SYSTEMS LAB</span>
</div>
<p class="text-slate-500 font-sans text-xs max-w-sm">
        Learn. Build. Deploy. Grow. Developing the engineering vanguard of Jamshedpur &amp; Eastern India.
      </p>
<div class="flex items-center gap-3 pt-2">
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">photo_camera</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">share</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">terminal</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">smart_display</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all" href="#"><span class="material-symbols-outlined text-[14px]">chat</span></a>
</div>
</div>
<div class="md:col-span-4 space-y-2">
<span class="text-hud-amber font-bold block mb-2">[SECTIONS_INDEX]</span>
<div class="grid grid-cols-2 gap-2 text-[11px]">
<a class="hover:text-hud-amber transition-colors" data-path="about" href="#">// ABOUT</a>
<a class="hover:text-hud-amber transition-colors" data-path="courses" href="#">// COURSES</a>
<a class="hover:text-hud-amber transition-colors" data-path="developers" href="#">// DEVELOPERS</a>
<a class="hover:text-hud-amber transition-colors" data-path="projects" href="#">// PROJECTS</a>
<a class="hover:text-hud-amber transition-colors" data-path="events" href="#">// EVENTS</a>
<a class="hover:text-hud-amber transition-colors" data-path="media" href="#">// MEDIA</a>
<a class="hover:text-hud-amber transition-colors" data-path="contact" href="#">// CONTACT</a>
</div>
</div>
<div class="md:col-span-3 space-y-2">
<span class="text-hud-amber font-bold block mb-2">[REGULATORY]</span>
<div class="flex flex-col gap-1.5 text-[11px]">
<a class="hover:text-hud-amber transition-colors" data-path="privacy-policy" href="#">// PRIVACY_POLICY</a>
<a class="hover:text-hud-amber transition-colors" data-path="terms" href="#">// TERMS_OF_SERVICE</a>
<a class="hover:text-hud-amber transition-colors" data-path="refund-policy" href="#">// REFUND_POLICY</a>
</div>
</div>
</div>
<div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
<span class="">© AstraTech AI. Jamshedpur, Jharkhand. All systems operational.</span>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-hud-green animate-ping"></span>
<span class="text-hud-green font-bold">[NODE_STATUS: ONLINE]</span>
</div>
</div>
</div></footer>
</body></html>

<!-- AstraTech AI — Courses (Tactical Minimal) -->
<!DOCTYPE html>

<html class="dark" lang="en" style=""><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><meta content="web_standard" name="shell-type"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/><link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&amp;family=Space+Grotesk:wght@400;500;600;700&amp;family=VT323&amp;display=swap" rel="stylesheet"/><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {canvas: "#070A0F", surface: "#111318", "surface-card": "#0d121c", "surface-panel": "#111827", "hud-amber": "#F5A400", "hud-amber-light": "#fbbf24", "hud-green": "#10b981", "hud-cyan": "#06b6d4", "border-hud": "rgba(245, 164, 0, 0.25)", "text-lead": "#f8fafc", "text-dim": "#94a3b8", "surface-container-highest": "#32353a", "on-secondary": "#2b3136", "on-secondary-fixed-variant": "#41484c", "on-primary": "#2d3137", "primary-container": "#0d1117", "surface-container-high": "#272a2f", "surface-bright": "#37393e", "secondary-fixed-dim": "#c1c7cd", "on-secondary-container": "#b3b9bf", "primary-fixed": "#dfe2eb", "on-tertiary": "#3a2e26", "surface-container": "#1d2024", "on-primary-container": "#797d85", error: "#ffb4ab", "tertiary-container": "#180f08", outline: "#8f9095", "inverse-primary": "#5b5e66", "error-container": "#93000a", "surface-tint": "#c3c6cf", "surface-dim": "#111318", "on-primary-fixed": "#181c22", "on-primary-fixed-variant": "#43474e", "outline-variant": "#45474b", "tertiary-fixed-dim": "#d6c3b7", "primary-fixed-dim": "#c3c6cf", background: "#111318", "surface-container-lowest": "#0c0e13", "surface-container-low": "#191c20", "on-background": "#e1e2e9", "secondary-container": "#434a4f", primary: "#c3c6cf", "on-tertiary-container": "#897a6f", "on-error-container": "#ffdad6", "on-surface": "#e1e2e9", "on-secondary-fixed": "#161c21", "tertiary-fixed": "#f3dfd2", "surface-variant": "#32353a", "on-tertiary-fixed": "#231a12", "inverse-on-surface": "#2e3035", tertiary: "#d6c3b7", "on-tertiary-fixed-variant": "#51443b", "on-error": "#690005", secondary: "#c1c7cd", "on-surface-variant": "#c6c6cb", "secondary-fixed": "#dde3e9", "inverse-surface": "#e1e2e9"}, fontFamily: {mono: ["'JetBrains Mono'", "monospace"], pixel: ["'VT323'", "monospace"], sans: ["'Space Grotesk'", "sans-serif"], headline: ["Sora"], display: ["Sora"], body: ["Space Grotesk"], label: ["Space Grotesk"]}, fontSize: {}, borderRadius: {DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px"}}}};</script><style>
  @layer base {
    body {
      background-color: #070A0F;
      color: #cbd5e1;
      font-family: 'JetBrains Mono', monospace;
    }
  }
  .blueprint-grid {
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to right, rgba(245, 164, 0, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(245, 164, 0, 0.04) 1px, transparent 1px);
    background-size: 24px 24px, 24px 24px, 120px 120px, 120px 120px;
  }
  .hud-scanline {
    background: linear-gradient(180deg, rgba(255,255,255,0.015) 50%, rgba(0, 0, 0, 0.28) 51%);
    background-size: 100% 4px;
  }
  .pixel-heading {
    font-family: 'VT323', monospace;
    letter-spacing: 0.02em;
  }
</style></head><body class="bg-[#070A0F] text-slate-300 font-mono selection:bg-[#F5A400] selection:text-black antialiased relative blueprint-grid min-h-screen flex flex-col justify-between"><div class="fixed inset-0 pointer-events-none hud-scanline z-40 opacity-40"></div>
<!-- TOP STATUS TELEMETRY STRIP -->
<div class="w-full bg-[#05070c] border-b border-[#F5A400]/20 py-1.5 px-4 text-[11px] font-mono flex items-center justify-between text-slate-400 relative z-50">
<div class="flex items-center gap-4">
<span class="flex items-center gap-1.5 text-[#10b981]"><span class="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping"></span>[SYS_STATUS: NOMINAL // FEED: 99.8%]</span>
<span class="hidden md:inline text-[#F5A400]/80">[LAT: 22.8048° N // LON: 86.2029° E]</span>
<span class="hidden lg:inline text-slate-500">[REGION: JAMSHEDPUR, JHARKHAND — NODE_01]</span>
</div>
<div class="flex items-center gap-3">
<span class="text-[#F5A400] font-semibold">[DEF_AUTH: PROTOCOL_L5]</span>
<span class="text-slate-400">CLK: UTC+05:30</span>
</div>
</div>
<!-- TACTICAL NAVIGATION BAR -->
<header class="sticky top-0 left-0 right-0 z-50 bg-[#070A0F]/90 backdrop-blur-md border-b border-[#F5A400]/30 shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
<div class="flex items-center gap-3">
<a class="flex items-center gap-2.5 group" data-path="home" href="#">
<div class="w-8 h-8 rounded border border-[#F5A400]/80 bg-black/60 flex items-center justify-center text-[#F5A400] group-hover:bg-[#F5A400] group-hover:text-black transition-all shadow-[0_0_10px_rgba(245,164,0,0.2)]">
<span class="material-symbols-outlined text-[18px]">terminal</span>
</div>
<div class="flex flex-col">
<div class="flex items-center gap-1.5">
<span class="font-mono font-bold text-[15px] tracking-wider text-white">ASTRATECH</span>
<span class="text-[9px] font-mono px-1 py-0.5 rounded bg-[#F5A400]/10 text-[#F5A400] border border-[#F5A400]/40">AI.OS</span>
</div>
<span class="text-[9px] font-mono text-slate-400 tracking-widest -mt-0.5">// JAMSHEDPUR LAB</span>
</div>
</a>
</div>
<nav class="hidden lg:flex items-center gap-7 font-mono text-xs text-slate-400">
<a class="hover:text-[#F5A400] transition-colors flex items-center gap-1" data-path="home" href="#"><span class="text-[10px] text-slate-600">//</span>HOME</a>
<a class="hover:text-[#F5A400] transition-colors flex items-center gap-1" data-path="about" href="#about"><span class="text-[10px] text-slate-600">//</span>ABOUT</a>
<a class="text-[#F5A400] font-semibold flex items-center gap-1" data-path="courses" href="#courses"><span class="text-[10px] text-[#F5A400]">&gt;</span>COURSES</a><a class="hover:text-[#F5A400] transition-colors flex items-center gap-1" data-path="projects" href="#projects"><span class="text-[10px] text-slate-600">//</span>PROJECTS</a>
<a class="hover:text-[#F5A400] transition-colors flex items-center gap-1" data-path="developers" href="#developers"><span class="text-[10px] text-slate-600">//</span>DEVELOPERS</a>
<a class="hover:text-[#F5A400] transition-colors flex items-center gap-1" data-path="media" href="#media"><span class="text-[10px] text-slate-600">//</span>MEDIA</a>
<a class="hover:text-[#F5A400] transition-colors flex items-center gap-1" data-path="contact" href="#contact"><span class="text-[10px] text-slate-600">//</span>CONTACT</a>
</nav>
<div class="flex items-center gap-3">
<a class="font-mono text-xs inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#F5A400]/10 border border-[#F5A400] text-[#F5A400] hover:bg-[#F5A400] hover:text-black font-semibold transition-all shadow-[0_0_15px_rgba(245,164,0,0.25)]" data-path="join-astratech" href="#courses">
<span class="">[INIT_ENROLL]</span>
<span class="material-symbols-outlined text-[14px]">bolt</span>
</a>
<div class="w-8 h-8 rounded border border-slate-700 bg-[#0b0f17] flex items-center justify-center text-slate-400 text-xs font-mono">
<span class="">01</span>
</div>
</div>
</div>
</header>
<main class="w-full relative z-10 flex-grow">
<!-- SECTION 1: HERO -->
<section class="w-full px-4 sm:px-6 pt-16 pb-14 border-b border-white/10 bg-[#070A0F]">
<div class="max-w-7xl mx-auto flex flex-col items-start gap-4">
<div class="flex items-center gap-2">
<span class="px-2.5 py-0.5 text-xs font-mono font-bold tracking-widest text-[#F5A400] bg-[#F5A400]/10 border border-[#F5A400]/30">
          [ COURSES / PROGRAMS ]
        </span>
</div>
<h1 class="pixel-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal uppercase leading-[1.08] max-w-4xl tracking-wide">
        BUILD SKILLS THAT YOU CAN <span class="text-[#F5A400]">ACTUALLY BUILD WITH.</span>
</h1>
<p class="max-w-2xl text-sm sm:text-base font-mono text-slate-400 leading-relaxed pt-1">
        Practical technology programs focused on learning, building and real-world application.
      </p>
</div>
</section>
<!-- SECTION 2: COURSES (AVAILABLE PROGRAMS) - EXACT 2x3 GRID -->
<section class="w-full px-4 sm:px-6 py-16 sm:py-20" id="courses">
<div class="max-w-7xl mx-auto space-y-10">
<!-- Section Header -->
<div class="space-y-2 border-b border-white/10 pb-6">
<span class="text-xs font-mono font-semibold tracking-wider text-[#F5A400] uppercase">
          [ AVAILABLE PROGRAMS ]
        </span>
<h2 class="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
          CHOOSE YOUR DIRECTION.
        </h2>
</div>
<!-- EXACT 2 x 3 GRID -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
<!-- CARD 01: FULL STACK DEVELOPMENT -->
<article class="p-8 md:p-10 bg-[#0d121c]/80 backdrop-blur-md border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between gap-8 rounded-none">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3">
<span class="text-xs font-mono font-bold text-[#F5A400] tracking-wider">01 // FDE</span>
<div class="flex items-center gap-2 text-[11px] font-mono text-[#10b981]">
<span class="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span class="">ENROLLMENT OPEN</span>
</div>
</div>
<h3 class="pixel-heading text-2xl sm:text-3xl text-white font-normal uppercase tracking-wide pt-1">
              FULL STACK DEVELOPMENT
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Build modern web applications from frontend to backend, APIs, databases and deployment.
            </p>
</div>
<div>
<button class="w-full sm:w-auto px-6 py-3 bg-[#F5A400]/10 hover:bg-[#F5A400] text-[#F5A400] hover:text-black border border-[#F5A400]/60 font-mono text-xs font-bold uppercase tracking-wider transition-all" onclick="openCurriculumModal('Full Stack Development')" type="button">
              [ GET CURRICULUM → ]
            </button>
</div>
</article>
<!-- CARD 02: AI & MACHINE LEARNING -->
<article class="p-8 md:p-10 bg-[#0d121c]/80 backdrop-blur-md border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between gap-8 rounded-none">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3">
<span class="text-xs font-mono font-bold text-[#F5A400] tracking-wider">02 // AIML</span>
<div class="flex items-center gap-2 text-[11px] font-mono text-[#10b981]">
<span class="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span class="">ENROLLMENT OPEN</span>
</div>
</div>
<h3 class="pixel-heading text-2xl sm:text-3xl text-white font-normal uppercase tracking-wide pt-1">
              AI &amp; MACHINE LEARNING
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Build practical foundations in artificial intelligence and machine learning through projects.
            </p>
</div>
<div>
<button class="w-full sm:w-auto px-6 py-3 bg-[#F5A400]/10 hover:bg-[#F5A400] text-[#F5A400] hover:text-black border border-[#F5A400]/60 font-mono text-xs font-bold uppercase tracking-wider transition-all" onclick="openCurriculumModal('AI &amp; Machine Learning')" type="button">
              [ GET CURRICULUM → ]
            </button>
</div>
</article>
<!-- CARD 03: PROGRAMMING & DSA -->
<article class="p-8 md:p-10 bg-[#0d121c]/80 backdrop-blur-md border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between gap-8 rounded-none">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3">
<span class="text-xs font-mono font-bold text-slate-400 tracking-wider">03 // PROGRAMMING</span>
<div class="flex items-center gap-2 text-[11px] font-mono text-amber-400/90">
<span class="w-2 h-2 rounded-full bg-[#F5A400]"></span>
<span class="">COMING SOON</span>
</div>
</div>
<h3 class="pixel-heading text-2xl sm:text-3xl text-white font-normal uppercase tracking-wide pt-1">
              PROGRAMMING &amp; DSA
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Build strong programming fundamentals and problem-solving skills.
            </p>
</div>
<div>
<button class="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-[#F5A400]/15 text-slate-300 hover:text-[#F5A400] border border-white/20 hover:border-[#F5A400]/50 font-mono text-xs font-medium uppercase tracking-wider transition-all" onclick="triggerNotifyMe('PROGRAMMING &amp; DSA')" type="button">
              [ NOTIFY ME → ]
            </button>
</div>
</article>
<!-- CARD 04: DATA ANALYTICS -->
<article class="p-8 md:p-10 bg-[#0d121c]/80 backdrop-blur-md border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between gap-8 rounded-none">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3">
<span class="text-xs font-mono font-bold text-slate-400 tracking-wider">04 // DATA</span>
<div class="flex items-center gap-2 text-[11px] font-mono text-amber-400/90">
<span class="w-2 h-2 rounded-full bg-[#F5A400]"></span>
<span class="">COMING SOON</span>
</div>
</div>
<h3 class="pixel-heading text-2xl sm:text-3xl text-white font-normal uppercase tracking-wide pt-1">
              DATA ANALYTICS
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Learn to work with data and turn information into useful insights.
            </p>
</div>
<div>
<button class="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-[#F5A400]/15 text-slate-300 hover:text-[#F5A400] border border-white/20 hover:border-[#F5A400]/50 font-mono text-xs font-medium uppercase tracking-wider transition-all" onclick="triggerNotifyMe('DATA ANALYTICS')" type="button">
              [ NOTIFY ME → ]
            </button>
</div>
</article>
<!-- CARD 05: CLOUD & DEVOPS -->
<article class="p-8 md:p-10 bg-[#0d121c]/80 backdrop-blur-md border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between gap-8 rounded-none">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3">
<span class="text-xs font-mono font-bold text-slate-400 tracking-wider">05 // CLOUD</span>
<div class="flex items-center gap-2 text-[11px] font-mono text-amber-400/90">
<span class="w-2 h-2 rounded-full bg-[#F5A400]"></span>
<span class="">COMING SOON</span>
</div>
</div>
<h3 class="pixel-heading text-2xl sm:text-3xl text-white font-normal uppercase tracking-wide pt-1">
              CLOUD &amp; DEVOPS
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Learn the foundations of cloud, deployment and modern development workflows.
            </p>
</div>
<div>
<button class="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-[#F5A400]/15 text-slate-300 hover:text-[#F5A400] border border-white/20 hover:border-[#F5A400]/50 font-mono text-xs font-medium uppercase tracking-wider transition-all" onclick="triggerNotifyMe('CLOUD &amp; DEVOPS')" type="button">
              [ NOTIFY ME → ]
            </button>
</div>
</article>
<!-- CARD 06: UI/UX & PRODUCT DESIGN -->
<article class="p-8 md:p-10 bg-[#0d121c]/80 backdrop-blur-md border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between gap-8 rounded-none">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3">
<span class="text-xs font-mono font-bold text-slate-400 tracking-wider">06 // DESIGN</span>
<div class="flex items-center gap-2 text-[11px] font-mono text-amber-400/90">
<span class="w-2 h-2 rounded-full bg-[#F5A400]"></span>
<span class="">COMING SOON</span>
</div>
</div>
<h3 class="pixel-heading text-2xl sm:text-3xl text-white font-normal uppercase tracking-wide pt-1">
              UI/UX &amp; PRODUCT DESIGN
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Learn how to design useful, intuitive digital experiences.
            </p>
</div>
<div>
<button class="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-[#F5A400]/15 text-slate-300 hover:text-[#F5A400] border border-white/20 hover:border-[#F5A400]/50 font-mono text-xs font-medium uppercase tracking-wider transition-all" onclick="triggerNotifyMe('UI/UX &amp; PRODUCT DESIGN')" type="button">
              [ NOTIFY ME → ]
            </button>
</div>
</article>
</div>
</div>
</section>
<!-- SECTION 3: FINAL CTA -->
<!-- SECTION: INSIDE ASTRA (MEDIA & LAB CULTURE) -->
<section class="w-full px-4 sm:px-6 py-16 sm:py-20 border-t border-white/10 bg-[#05070c] relative" id="inside-astra">
<div class="max-w-7xl mx-auto space-y-10">
<!-- Header -->
<div class="space-y-2 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span class="text-xs font-mono font-semibold tracking-wider text-[#F5A400] uppercase block mb-1">
          [ INSIDE ASTRA ]
        </span>
<h2 class="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
          LEARNING BEYOND THE SCREEN.
        </h2>
<p class="text-xs sm:text-sm font-mono text-slate-400 mt-2 max-w-xl">
          Direct immersion into the physical lab space, live system refactoring, and collaborative engineering telemetry.
        </p>
</div>
<div class="flex items-center gap-2 text-xs font-mono text-slate-500">
<span class="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
<span class="">LAB_FEED: ACTIVE // JAMSHEDPUR</span>
</div>
</div>
<!-- 4-Card Media Gallery Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
<!-- CARD 1: WORKSHOPS -->
<article class="p-6 sm:p-8 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between group rounded-none relative overflow-hidden">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3 text-xs font-mono">
<span class="text-[#F5A400] font-bold tracking-wider">01 // WORKSHOPS</span>
<span class="text-slate-500">// JSR_LAB_01</span>
</div>
<!-- Media Canvas / Tactical Mock Visual -->
<div class="w-full h-48 bg-[#070A0F] border border-white/5 relative flex flex-col justify-between p-4 group-hover:border-[#F5A400]/30 transition-colors overflow-hidden">
<div class="absolute inset-0 bg-[radial-gradient(#F5A400_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
<div class="flex items-center justify-between z-10">
<span class="text-[10px] font-mono px-2 py-0.5 bg-[#F5A400]/10 text-[#F5A400] border border-[#F5A400]/25">DISSECTION_BENCH</span>
<span class="material-symbols-outlined text-slate-600 text-sm">memory</span>
</div>
<div class="z-10 font-mono text-[11px] text-slate-400 space-y-1 bg-black/60 p-2.5 border border-white/5 backdrop-blur-sm">
<div class="text-[#10b981] flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>SYSTEM_TRACE: LIVE PARSING
</div>
<div class="text-slate-500 text-[10px]">&gt; kernel_inspect --node=jsr-alpha</div>
</div>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide pt-2 group-hover:text-[#F5A400] transition-colors">
              WORKSHOPS
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Hands-on intensive technical breakdowns, interactive code dissection and systems engineering.
            </p>
</div>
<div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
<span class="">FORMAT: IN-LAB DISSECTION</span>
<span class="text-[#F5A400] text-[11px]">[ FREQ: BI-WEEKLY ]</span>
</div>
</article>
<!-- CARD 2: PROJECT BUILDING -->
<article class="p-6 sm:p-8 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between group rounded-none relative overflow-hidden">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3 text-xs font-mono">
<span class="text-[#F5A400] font-bold tracking-wider">02 // BUILDS</span>
<span class="text-slate-500">// SPRINT_PROTOCOL</span>
</div>
<!-- Media Canvas / Tactical Mock Visual -->
<div class="w-full h-48 bg-[#070A0F] border border-white/5 relative flex flex-col justify-between p-4 group-hover:border-[#F5A400]/30 transition-colors overflow-hidden">
<div class="absolute inset-0 bg-[radial-gradient(#F5A400_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
<div class="flex items-center justify-between z-10">
<span class="text-[10px] font-mono px-2 py-0.5 bg-[#F5A400]/10 text-[#F5A400] border border-[#F5A400]/25">COLLAB_ARCH</span>
<span class="material-symbols-outlined text-slate-600 text-sm">developer_board</span>
</div>
<div class="z-10 font-mono text-[11px] text-slate-400 space-y-1 bg-black/60 p-2.5 border border-white/5 backdrop-blur-sm">
<div class="text-white flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#F5A400]"></span>BRANCH: main &lt;-- feature/realtime-cluster
</div>
<div class="text-slate-500 text-[10px]">&gt; git commit -m "deploy distributed pipeline"</div>
</div>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide pt-2 group-hover:text-[#F5A400] transition-colors">
              PROJECT BUILDING
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Collaborative sprints, real-world code architecture in the tech lab.
            </p>
</div>
<div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
<span class="">FORMAT: CO-WORKING SPRINT</span>
<span class="text-[#F5A400] text-[11px]">[ PIPELINE: PRODUCTION ]</span>
</div>
</article>
<!-- CARD 3: HACKATHONS -->
<article class="p-6 sm:p-8 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between group rounded-none relative overflow-hidden">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3 text-xs font-mono">
<span class="text-[#F5A400] font-bold tracking-wider">03 // HACKATHONS</span>
<span class="text-slate-500">// CLOCK_PRESSURE</span>
</div>
<!-- Media Canvas / Tactical Mock Visual -->
<div class="w-full h-48 bg-[#070A0F] border border-white/5 relative flex flex-col justify-between p-4 group-hover:border-[#F5A400]/30 transition-colors overflow-hidden">
<div class="absolute inset-0 bg-[radial-gradient(#F5A400_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
<div class="flex items-center justify-between z-10">
<span class="text-[10px] font-mono px-2 py-0.5 bg-[#F5A400]/10 text-[#F5A400] border border-[#F5A400]/25">RAPID_DEPLOY</span>
<span class="material-symbols-outlined text-slate-600 text-sm">timer</span>
</div>
<div class="z-10 font-mono text-[11px] text-slate-400 space-y-1 bg-black/60 p-2.5 border border-white/5 backdrop-blur-sm">
<div class="text-amber-400 flex items-center justify-between">
<span class="">TIMER: T-MINUS 04:12:09</span>
<span class="text-[9px] text-[#10b981]">STATUS: SHIPPED</span>
</div>
<div class="text-slate-500 text-[10px]">&gt; prod_release v1.0.4 [VERIFIED]</div>
</div>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide pt-2 group-hover:text-[#F5A400] transition-colors">
              HACKATHONS
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Fast-paced prototyping, shipping functional products under clock pressure.
            </p>
</div>
<div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
<span class="">FORMAT: 24H - 48H INTENSIVE</span>
<span class="text-[#F5A400] text-[11px]">[ CADENCE: MONTHLY ]</span>
</div>
</article>
<!-- CARD 4: DEVELOPER SESSIONS -->
<article class="p-6 sm:p-8 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between group rounded-none relative overflow-hidden">
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-white/5 pb-3 text-xs font-mono">
<span class="text-[#F5A400] font-bold tracking-wider">04 // SESSIONS</span>
<span class="text-slate-500">// EVENT_SYS</span>
</div>
<!-- Media Canvas / Tactical Mock Visual -->
<div class="w-full h-48 bg-[#070A0F] border border-white/5 relative flex flex-col justify-between p-4 group-hover:border-[#F5A400]/30 transition-colors overflow-hidden">
<div class="absolute inset-0 bg-[radial-gradient(#F5A400_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
<div class="flex items-center justify-between z-10">
<span class="text-[10px] font-mono px-2 py-0.5 bg-[#F5A400]/10 text-[#F5A400] border border-[#F5A400]/25">CODE_REVIEW</span>
<span class="material-symbols-outlined text-slate-600 text-sm">sync_alt</span>
</div>
<div class="z-10 font-mono text-[11px] text-slate-400 space-y-1 bg-black/60 p-2.5 border border-white/5 backdrop-blur-sm">
<div class="text-[#10b981] flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>CRITIQUE: PEER_AUDIT COMPLETE
</div>
<div class="text-slate-500 text-[10px]">&gt; refactor(auth): migrate to zero-trust token mesh</div>
</div>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide pt-2 group-hover:text-[#F5A400] transition-colors">
              DEVELOPER SESSIONS
            </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Deep code reviews, peer feedback, live refactoring and architecture discussions.
            </p>
</div>
<div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
<span class="">FORMAT: PEER FORUM &amp; REFACTOR</span>
<span class="text-[#F5A400] text-[11px]">[ AUDIT: OPEN_ACCESS ]</span>
</div>
</article>
</div>
</div>
</section><!-- SECTION: WHAT YOU GET -->
<section class="w-full px-4 sm:px-6 py-16 sm:py-20 border-t border-white/10 bg-[#070A0F] relative" id="what-you-get">
<div class="max-w-7xl mx-auto space-y-10">
<!-- Header -->
<div class="space-y-2 border-b border-white/10 pb-6">
<span class="text-xs font-mono font-semibold tracking-wider text-[#F5A400] uppercase block mb-1">
        [ BEYOND THE CURRICULUM ]
      </span>
<h2 class="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
        WHAT YOU GET.
      </h2>
<p class="text-xs sm:text-sm font-mono text-slate-400 mt-2 max-w-xl leading-relaxed">
        The program is built around more than just a syllabus.
      </p>
</div>
<!-- 2 x 3 Technical Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Card 01 -->
<article class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 rounded-none group">
<div class="space-y-2">
<div class="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2 text-slate-400">
<span class="text-[#F5A400] font-bold tracking-wider">01 // PROJECTS</span>
<span class="text-slate-600">[SYS_EXEC]</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            PRACTICAL PROJECTS
          </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
            Learn by building things that actually work.
          </p>
</div>
</article>
<!-- Card 02 -->
<article class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 rounded-none group">
<div class="space-y-2">
<div class="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2 text-slate-400">
<span class="text-[#F5A400] font-bold tracking-wider">02 // METHODOLOGY</span>
<span class="text-slate-600">[SYS_PRACTICE]</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            HANDS-ON LEARNING
          </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
            Apply concepts through practical implementation.
          </p>
</div>
</article>
<!-- Card 03 -->
<article class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 rounded-none group">
<div class="space-y-2">
<div class="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2 text-slate-400">
<span class="text-[#F5A400] font-bold tracking-wider">03 // NETWORK</span>
<span class="text-slate-600">[PEER_MESH]</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            DEVELOPER COMMUNITY
          </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
            Learn, share and build alongside other learners.
          </p>
</div>
</article>
<!-- Card 04 -->
<article class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 rounded-none group">
<div class="space-y-2">
<div class="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2 text-slate-400">
<span class="text-[#F5A400] font-bold tracking-wider">04 // COMPETITION</span>
<span class="text-slate-600">[SPRINT_TEST]</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            HACKATHONS &amp; CHALLENGES
          </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
            Put your skills to the test through real challenges.
          </p>
</div>
</article>
<!-- Card 05 -->
<article class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 rounded-none group">
<div class="space-y-2">
<div class="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2 text-slate-400">
<span class="text-[#F5A400] font-bold tracking-wider">05 // PORTFOLIO</span>
<span class="text-slate-600">[PROOF_OF_WORK]</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            PROJECT SHOWCASE
          </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
            Turn your work into something you can actually show.
          </p>
</div>
</article>
<!-- Card 06 -->
<article class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 rounded-none group">
<div class="space-y-2">
<div class="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2 text-slate-400">
<span class="text-[#F5A400] font-bold tracking-wider">06 // EVOLUTION</span>
<span class="text-slate-600">[LONG_CYCLE]</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            CONTINUOUS GROWTH
          </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
            Keep learning beyond the program.
          </p>
</div>
</article>
</div>
</div>
</section>
<!-- SECTION: HOW TO GET STARTED -->
<section class="w-full px-4 sm:px-6 py-16 sm:py-20 border-t border-white/10 bg-[#05070c] relative" id="how-to-get-started">
<div class="max-w-7xl mx-auto space-y-10">
<!-- Header -->
<div class="space-y-2 border-b border-white/10 pb-6">
<span class="text-xs font-mono font-semibold tracking-wider text-[#F5A400] uppercase block mb-1">
        [ ENROLLMENT / PROCESS ]
      </span>
<h2 class="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
        HOW TO GET STARTED.
      </h2>
<p class="text-xs sm:text-sm font-mono text-slate-400 mt-2 max-w-xl leading-relaxed">
        A structured pipeline from initial selection to hands-on deployment in the lab.
      </p>
</div>
<!-- 5-Step Pipeline Flow -->
<div class="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
<!-- Step 01 -->
<div class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 relative group">
<div class="space-y-3">
<div class="flex items-center justify-between font-mono text-xs">
<span class="px-2 py-0.5 bg-[#F5A400]/10 border border-[#F5A400]/30 text-[#F5A400] font-bold">STEP 01</span>
<span class="text-slate-600 text-[10px] hidden md:inline">// FLOW</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            CHOOSE
          </h3>
<p class="text-xs font-mono text-slate-400 leading-relaxed">
            Choose the program that fits your direction.
          </p>
</div>
<div class="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
<span class="">DIR_SELECT</span>
<span class="text-[#F5A400]">→</span>
</div>
</div>
<!-- Step 02 -->
<div class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 relative group">
<div class="space-y-3">
<div class="flex items-center justify-between font-mono text-xs">
<span class="px-2 py-0.5 bg-[#F5A400]/10 border border-[#F5A400]/30 text-[#F5A400] font-bold">STEP 02</span>
<span class="text-slate-600 text-[10px] hidden md:inline">// FLOW</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            REQUEST
          </h3>
<p class="text-xs font-mono text-slate-400 leading-relaxed">
            Request the detailed curriculum.
          </p>
</div>
<div class="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
<span class="">DISPATCH_REQ</span>
<span class="text-[#F5A400]">→</span>
</div>
</div>
<!-- Step 03 -->
<div class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 relative group">
<div class="space-y-3">
<div class="flex items-center justify-between font-mono text-xs">
<span class="px-2 py-0.5 bg-[#F5A400]/10 border border-[#F5A400]/30 text-[#F5A400] font-bold">STEP 03</span>
<span class="text-slate-600 text-[10px] hidden md:inline">// FLOW</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            REVIEW
          </h3>
<p class="text-xs font-mono text-slate-400 leading-relaxed">
            Understand the program, structure and expectations.
          </p>
</div>
<div class="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
<span class="">SYLLABUS_AUDIT</span>
<span class="text-[#F5A400]">→</span>
</div>
</div>
<!-- Step 04 -->
<div class="p-6 bg-[#0b0f17] border border-white/10 hover:border-[#F5A400]/40 transition-colors flex flex-col justify-between space-y-4 relative group">
<div class="space-y-3">
<div class="flex items-center justify-between font-mono text-xs">
<span class="px-2 py-0.5 bg-[#F5A400]/10 border border-[#F5A400]/30 text-[#F5A400] font-bold">STEP 04</span>
<span class="text-slate-600 text-[10px] hidden md:inline">// FLOW</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            CONNECT
          </h3>
<p class="text-xs font-mono text-slate-400 leading-relaxed">
            Connect with AstraTech for the next steps.
          </p>
</div>
<div class="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
<span class="">SYNAPSE_LINK</span>
<span class="text-[#F5A400]">→</span>
</div>
</div>
<!-- Step 05 -->
<div class="p-6 bg-[#0b0f17] border border-[#F5A400]/30 hover:border-[#F5A400] transition-colors flex flex-col justify-between space-y-4 relative group shadow-[0_0_15px_rgba(245,164,0,0.1)]">
<div class="space-y-3">
<div class="flex items-center justify-between font-mono text-xs">
<span class="px-2 py-0.5 bg-[#F5A400] text-black font-bold">STEP 05</span>
<span class="text-[#10b981] text-[10px]">[READY]</span>
</div>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide group-hover:text-[#F5A400] transition-colors">
            BEGIN
          </h3>
<p class="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
            Start learning, building and growing.
          </p>
</div>
<div class="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#F5A400]">
<span class="">EXEC_INIT</span>
<span class="font-bold">✓</span>
</div>
</div>
</div>
</div>
</section><section class="w-full px-4 sm:px-6 py-16 sm:py-20 border-t border-white/10 bg-[#080c14]">
<div class="max-w-7xl mx-auto text-center flex flex-col items-center space-y-4">
<span class="text-xs font-mono font-semibold tracking-wider text-[#F5A400] uppercase">
        [ START BUILDING ]
      </span>
<h2 class="pixel-heading text-3xl sm:text-4xl lg:text-5xl text-white font-normal uppercase tracking-wide">
        FIND YOUR NEXT BUILD.
      </h2>
<p class="max-w-xl text-xs sm:text-sm font-mono text-slate-400 leading-relaxed pb-2">
        Choose a direction, learn the fundamentals and start building.
      </p>
<a class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F5A400] hover:bg-[#d97706] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,164,0,0.2)]" href="#courses">
<span class="">[ EXPLORE ASTRA → ]</span>
</a>
</div>
</section>
</main>
<!-- MODAL A: GET THE CURRICULUM -->
<div class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm p-4 overflow-y-auto flex items-center justify-center" id="curriculumModal">
<div class="bg-[#0b0f17] border border-[#F5A400]/40 w-full max-w-lg p-6 sm:p-8 relative shadow-2xl space-y-6">
<!-- Header -->
<div class="flex items-center justify-between border-b border-white/10 pb-4">
<div>
<span class="text-[10px] font-mono text-[#F5A400] tracking-wider block">// TELEMETRY DISPATCH</span>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide">GET THE CURRICULUM</h3>
</div>
<button class="text-xs font-mono text-slate-400 hover:text-white px-2 py-1 border border-white/10 hover:border-slate-400 transition-colors" onclick="closeCurriculumModal()" type="button">
        [ ✕ CLOSE ]
      </button>
</div>
<!-- Form View -->
<div class="space-y-4" id="curriculumFormContainer">
<p class="text-xs font-mono text-slate-400 leading-relaxed">
        Tell us a little about yourself and we'll send the detailed curriculum directly to your email.
      </p>
<form class="space-y-3.5" id="curriculumForm" onsubmit="handleCurriculumSubmit(event)">
<!-- Full Name -->
<div class="space-y-1">
<label class="block text-[11px] font-mono text-slate-300">FULL NAME *</label>
<input class="w-full bg-[#070A0F] border border-white/15 text-white px-3 py-2 text-xs font-mono focus:border-[#F5A400] focus:ring-0 focus:outline-none" placeholder="e.g. Rahul Sharma" required="" type="text"/>
</div>
<!-- Email -->
<div class="space-y-1">
<label class="block text-[11px] font-mono text-slate-300">EMAIL *</label>
<input class="w-full bg-[#070A0F] border border-white/15 text-white px-3 py-2 text-xs font-mono focus:border-[#F5A400] focus:ring-0 focus:outline-none" placeholder="name@domain.com" required="" type="email"/>
</div>
<!-- Phone Number -->
<div class="space-y-1">
<label class="block text-[11px] font-mono text-slate-300">PHONE NUMBER</label>
<input class="w-full bg-[#070A0F] border border-white/15 text-white px-3 py-2 text-xs font-mono focus:border-[#F5A400] focus:ring-0 focus:outline-none" placeholder="+91 98765 43210" type="tel"/>
</div>
<!-- Current Status -->
<div class="space-y-1">
<label class="block text-[11px] font-mono text-slate-300">CURRENT STATUS *</label>
<select class="w-full bg-[#070A0F] border border-white/15 text-white px-3 py-2 text-xs font-mono focus:border-[#F5A400] focus:ring-0 focus:outline-none" required="">
<option disabled="" selected="" value="">Select status...</option>
<option value="Student">Student</option>
<option value="Working Professional">Working Professional</option>
<option value="Graduate">Graduate</option>
<option value="Other">Other</option>
</select>
</div>
<!-- Course -->
<div class="space-y-1">
<label class="block text-[11px] font-mono text-slate-300">COURSE *</label>
<select class="w-full bg-[#070A0F] border border-white/15 text-white px-3 py-2 text-xs font-mono focus:border-[#F5A400] focus:ring-0 focus:outline-none" id="courseSelectField" required="">
<option value="Full Stack Development">Full Stack Development</option>
<option value="AI &amp; Machine Learning">AI &amp; Machine Learning</option>
</select>
</div>
<!-- Submit Button -->
<div class="pt-2">
<button class="w-full py-2.5 px-4 bg-[#F5A400] hover:bg-[#d97706] text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors" type="submit">
            [ SEND CURRICULUM → ]
          </button>
</div>
<p class="text-[10px] font-mono text-slate-500 text-center pt-1">
          Your information is used only to respond to your curriculum request.
        </p>
</form>
</div>
<!-- Success State -->
<div class="hidden text-center py-6 space-y-4" id="curriculumSuccessState">
<div class="w-10 h-10 border border-[#10b981] bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mx-auto text-lg font-mono">
        ✓
      </div>
<h4 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wider">
        CURRICULUM REQUEST RECEIVED
      </h4>
<p class="text-xs font-mono text-slate-300 max-w-xs mx-auto leading-relaxed">
        The detailed curriculum will be sent to your email.
      </p>
<div class="pt-2">
<button class="py-2 px-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-mono font-semibold transition-colors" onclick="closeCurriculumModal()" type="button">
          [ CLOSE ]
        </button>
</div>
</div>
</div>
</div>
<!-- MODAL B: NOTIFY ME MODAL -->
<div class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm p-4 overflow-y-auto flex items-center justify-center" id="notifyModal">
<div class="bg-[#0b0f17] border border-[#F5A400]/40 w-full max-w-md p-6 sm:p-8 relative shadow-2xl space-y-4">
<div class="flex items-center justify-between border-b border-white/10 pb-3">
<div>
<span class="text-[10px] font-mono text-[#F5A400] tracking-wider block">// SYLLABUS RELEASE ALERT</span>
<h3 class="pixel-heading text-2xl text-white font-normal uppercase tracking-wide" id="notifyCourseTitle">NOTIFY ME</h3>
</div>
<button class="text-xs font-mono text-slate-400 hover:text-white px-2 py-1 border border-white/10 hover:border-slate-400" onclick="closeNotifyModal()" type="button">[ ✕ ]</button>
</div>
<p class="text-xs font-mono text-slate-400 leading-relaxed">
      Enter your email address below. We'll send you an alert the moment this curriculum is scheduled and declassified for enrollment.
    </p>
<form class="space-y-3 pt-1" onsubmit="handleNotifySubmit(event)">
<div class="space-y-1">
<label class="block text-[11px] font-mono text-slate-300">EMAIL ADDRESS *</label>
<input class="w-full bg-[#070A0F] border border-white/15 text-white px-3 py-2 text-xs font-mono focus:border-[#F5A400] focus:ring-0 focus:outline-none" placeholder="developer@domain.com" required="" type="email"/>
</div>
<button class="w-full py-2.5 bg-[#F5A400] text-black font-mono font-bold text-xs uppercase hover:bg-[#d97706] transition-colors" type="submit">
        [ NOTIFY ME → ]
      </button>
</form>
<div class="hidden text-center text-xs font-mono text-[#10b981] pt-2" id="notifySuccess">
      ✓ RECORD LOGGED. You will receive an alert once syllabus enrollments open.
    </div>
</div>
</div>
<!-- FOOTER -->
<footer class="w-full bg-[#05070c] border-t border-[#F5A400]/25 py-12 font-mono text-xs text-slate-400">
<div class="max-w-7xl mx-auto px-4 sm:px-6">
<div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
<div class="md:col-span-5 space-y-3">
<div class="flex items-center gap-2 text-white font-bold text-sm">
<span class="w-5 h-5 rounded border border-[#F5A400] text-[#F5A400] flex items-center justify-center text-[10px]">&gt;</span>
<span class="">ASTRATECH AI // SYSTEMS LAB</span>
</div>
<p class="text-slate-500 font-sans text-xs max-w-sm">
          Learn. Build. Deploy. Grow. Developing the engineering vanguard of Jamshedpur &amp; Eastern India.
        </p>
<div class="flex items-center gap-3 pt-2">
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-[#F5A400] hover:border-[#F5A400] transition-all" href="#"><span class="material-symbols-outlined text-[14px]">photo_camera</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-[#F5A400] hover:border-[#F5A400] transition-all" href="#"><span class="material-symbols-outlined text-[14px]">share</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-[#F5A400] hover:border-[#F5A400] transition-all" href="#"><span class="material-symbols-outlined text-[14px]">terminal</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-[#F5A400] hover:border-[#F5A400] transition-all" href="#"><span class="material-symbols-outlined text-[14px]">smart_display</span></a>
<a class="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-[#F5A400] hover:border-[#F5A400] transition-all" href="#"><span class="material-symbols-outlined text-[14px]">chat</span></a>
</div>
</div>
<div class="md:col-span-4 space-y-2">
<span class="text-[#F5A400] font-bold block mb-2">[SECTIONS_INDEX]</span>
<div class="grid grid-cols-2 gap-2 text-[11px]">
<a class="hover:text-[#F5A400] transition-colors" data-path="about" href="#">// ABOUT</a>
<a class="hover:text-[#F5A400] transition-colors" data-path="courses" href="#">// COURSES</a>
<a class="hover:text-[#F5A400] transition-colors" data-path="developers" href="#">// DEVELOPERS</a>
<a class="hover:text-[#F5A400] transition-colors" data-path="projects" href="#">// PROJECTS</a>
<a class="hover:text-[#F5A400] transition-colors" data-path="events" href="#">// EVENTS</a>
<a class="hover:text-[#F5A400] transition-colors" data-path="media" href="#">// MEDIA</a>
<a class="hover:text-[#F5A400] transition-colors" data-path="contact" href="#">// CONTACT</a>
</div>
</div>
<div class="md:col-span-3 space-y-2">
<span class="text-[#F5A400] font-bold block mb-2">[REGULATORY]</span>
<div class="flex flex-col gap-1.5 text-[11px]">
<a class="hover:text-[#F5A400] transition-colors" data-path="privacy-policy" href="#">// PRIVACY_POLICY</a>
<a class="hover:text-[#F5A400] transition-colors" data-path="terms" href="#">// TERMS_OF_SERVICE</a>
<a class="hover:text-[#F5A400] transition-colors" data-path="refund-policy" href="#">// REFUND_POLICY</a>
</div>
</div>
</div>
<div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
<span class="">© AstraTech AI. Jamshedpur, Jharkhand. All systems operational.</span>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
<span class="text-[#10b981] font-bold">[NODE_STATUS: ONLINE]</span>
</div>
</div>
</div>
</footer>
<!-- Interactive Scripts -->
<script>
  function openCurriculumModal(courseName) {
    const modal = document.getElementById('curriculumModal');
    const select = document.getElementById('courseSelectField');
    const formContainer = document.getElementById('curriculumFormContainer');
    const successState = document.getElementById('curriculumSuccessState');

    if (courseName && select) {
      select.value = courseName;
    }
    formContainer.classList.remove('hidden');
    successState.classList.add('hidden');
    modal.classList.remove('hidden');
  }

  function closeCurriculumModal() {
    document.getElementById('curriculumModal').classList.add('hidden');
  }

  function handleCurriculumSubmit(e) {
    e.preventDefault();
    document.getElementById('curriculumFormContainer').classList.add('hidden');
    document.getElementById('curriculumSuccessState').classList.remove('hidden');
  }

  function triggerNotifyMe(courseTitle) {
    const modal = document.getElementById('notifyModal');
    if (courseTitle) {
      document.getElementById('notifyCourseTitle').innerText = 'NOTIFY: ' + courseTitle;
    }
    document.getElementById('notifySuccess').classList.add('hidden');
    modal.classList.remove('hidden');
  }

  function closeNotifyModal() {
    document.getElementById('notifyModal').classList.add('hidden');
  }

  function handleNotifySubmit(e) {
    e.preventDefault();
    document.getElementById('notifySuccess').classList.remove('hidden');
    setTimeout(() => {
      closeNotifyModal();
    }, 2000);
  }
</script>
</body></html>

<!-- AstraTech AI — Projects (Editorial Showcase) -->
<!DOCTYPE html><html class="dark" lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta content="web_standard" name="shell-type">
<link href="https://fonts.googleapis.com" rel="preconnect">
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;family=VT323&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {"surface-base": "#05070C", "surface-card": "#0A0E17", "surface-container": "#1d2024", "surface-elevated": "#121927", "border-subtle": "rgba(255, 255, 255, 0.08)", "border-strong": "rgba(255, 255, 255, 0.16)", "amber-brand": "#F5A400", "amber-glow": "#FFB020", "amber-muted": "rgba(245, 164, 0, 0.12)", "text-primary": "#F1F5F9", "text-secondary": "#94A3B8", "text-muted": "#64748B", "silver-metallic": "#CBD5E1", "surface-container-highest": "#32353a", "on-secondary": "#2b3136", surface: "#111318", "on-secondary-fixed-variant": "#41484c", "on-primary": "#2d3137", "primary-container": "#0d1117", "surface-container-high": "#272a2f", "surface-bright": "#37393e", "secondary-fixed-dim": "#c1c7cd", "on-secondary-container": "#b3b9bf", "primary-fixed": "#dfe2eb", "on-tertiary": "#3a2e26", "on-primary-container": "#797d85", error: "#ffb4ab", "tertiary-container": "#180f08", outline: "#8f9095", "inverse-primary": "#5b5e66", "error-container": "#93000a", "surface-tint": "#c3c6cf", "surface-dim": "#111318", "on-primary-fixed": "#181c22", "on-primary-fixed-variant": "#43474e", "outline-variant": "#45474b", "tertiary-fixed-dim": "#d6c3b7", "primary-fixed-dim": "#c3c6cf", background: "#111318", "surface-container-lowest": "#0c0e13", "surface-container-low": "#191c20", "on-background": "#e1e2e9", "secondary-container": "#434a4f", primary: "#c3c6cf", "on-tertiary-container": "#897a6f", "on-error-container": "#ffdad6", "on-surface": "#e1e2e9", "on-secondary-fixed": "#161c21", "tertiary-fixed": "#f3dfd2", "surface-variant": "#32353a", "on-tertiary-fixed": "#231a12", "inverse-on-surface": "#2e3035", tertiary: "#d6c3b7", "on-tertiary-fixed-variant": "#51443b", "on-error": "#690005", secondary: "#c1c7cd", "on-surface-variant": "#c6c6cb", "secondary-fixed": "#dde3e9", "inverse-surface": "#e1e2e9"}, fontFamily: {"display-vt": ["\"VT323\"", "monospace"], mono: ["\"JetBrains Mono\"", "\"Space Grotesk\"", "monospace"], sans: ["\"Space Grotesk\"", "system-ui", "sans-serif"], headline: ["Sora"], display: ["Sora"], body: ["Space Grotesk"], label: ["Space Grotesk"]}, fontSize: {}, borderRadius: {DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px"}}}};</script>
<style>
    @layer base {
      html, body {
        margin: 0;
        padding: 0;
        background-color: #05070C;
        color: #F1F5F9;
      }
      body { overscroll-behavior: none; }
    }
    ::-webkit-scrollbar { display: none; }
  </style>
</head>
<body class="bg-surface-base font-sans text-text-primary antialiased selection:bg-amber-brand selection:text-surface-base min-h-screen flex flex-col justify-between">
<!-- TOP TELEMETRY PROTOCOL TICKER & NAVBAR -->
<header class="fixed top-0 left-0 right-0 z-50 bg-[#05070C]/90 backdrop-blur-xl border-b border-white/10">
  <!-- Top Telemetry Protocol Ticker -->
  <div class="w-full border-b border-white/[0.08] bg-[#030508] px-4 sm:px-8 py-1">
    <div class="max-w-7xl mx-auto flex items-center justify-between font-mono text-[10px] tracking-widest text-text-muted">
      <div class="flex items-center gap-3">
        <span class="flex items-center gap-1.5 text-text-primary">
          <span class="h-1.5 w-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
          [SYS_STATUS: <span class="text-[#f59e0b]">NOMINAL</span> // FEED: <span class="text-white">99.8%</span>]
        </span>
        <span class="hidden sm:inline text-white/20">|</span>
        <span class="hidden sm:inline text-slate-400">[LAT: 22.8046° N // LON: 86.2029° E]</span>
        <span class="hidden lg:inline text-white/20">|</span>
        <span class="hidden lg:inline text-text-muted">[REGION: JAMSHEDPUR, JHARKHAND - NODE_01]</span>
      </div>
      <div class="flex items-center gap-4 text-[10px]">
        <span class="hidden md:inline text-slate-400">[DEP_AUTH: PROTOCOL_L5]</span>
        <span class="hidden md:inline text-white/20">|</span>
        <span class="text-[#f59e0b] font-medium">CLK: UTC+05:30</span>
      </div>
    </div>
  </div>
  <!-- Main Navigation Bar -->
  <div class="h-16 max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
    <div class="flex items-center gap-6">
      <a class="flex flex-col group" data-path="home" href="#">
        <div class="flex items-center gap-2">
          <span class="font-mono text-base font-bold tracking-tight text-white group-hover:text-[#f59e0b] transition-colors">ASTRATECH AI</span>
          <span class="px-1.5 py-0.5 rounded bg-amber-brand/10 text-[#f59e0b] font-mono text-[10px] font-semibold border border-[#f59e0b]/40">AI.0</span>
        </div>
        <span class="font-mono text-[9px] text-text-muted tracking-widest uppercase">// JAMSHEDPUR LAB</span>
      </a>
    </div>
    <!-- Nav Links -->
    <nav class="hidden xl:flex items-center gap-1">
      <a class="px-3 py-1.5 font-mono text-xs text-slate-300 hover:text-white transition-colors tracking-wider uppercase" data-path="home" href="#">// HOME</a>
      <a class="px-3 py-1.5 font-mono text-xs text-slate-300 hover:text-white transition-colors tracking-wider uppercase" data-path="about" href="#">// ABOUT</a>
      <a class="px-3 py-1.5 font-mono text-xs text-slate-300 hover:text-white transition-colors tracking-wider uppercase" data-path="courses" href="#">// COURSES</a>
      <a aria-current="page" class="px-3 py-1.5 font-mono text-xs text-[#f59e0b] font-medium tracking-wider uppercase flex items-center gap-1.5" data-path="projects" href="#"><span class="h-1.5 w-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>// PROJECTS</a>
      <a class="px-3 py-1.5 font-mono text-xs text-slate-300 hover:text-white transition-colors tracking-wider uppercase" data-path="developers" href="#">// DEVELOPERS</a>
      <a class="px-3 py-1.5 font-mono text-xs text-slate-300 hover:text-white transition-colors tracking-wider uppercase" data-path="media" href="#">// MEDIA</a>
      <a class="px-3 py-1.5 font-mono text-xs text-slate-300 hover:text-white transition-colors tracking-wider uppercase" data-path="contact" href="#">// CONTACT</a>
    </nav>
    <!-- Right CTAs -->
    <div class="flex items-center gap-3">
      <a class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-sm bg-amber-brand/10 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-xs font-semibold tracking-wider hover:bg-[#f59e0b] hover:text-black transition-all duration-200" data-path="enrollment" href="#">
        [INIT_ENROLL] ⚡
      </a>
      <div class="w-8 h-8 rounded bg-surface-elevated border border-white/10 flex items-center justify-center text-slate-300 font-mono text-xs font-medium">
        01
      </div>
    </div>
  </div>
</header>
<!-- MAIN EDITORIAL CONTENT -->
<main class="w-full pt-28 pb-20 bg-surface-base relative overflow-hidden">
<!-- Ambient Technical Grid Pattern & Subtle Glows -->
<div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(245,164,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,164,0,0.03)_1px,transparent_1px)] [background-size:32px_32px]"></div>
<div class="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-brand/5 blur-[140px]"></div>
<div class="pointer-events-none absolute top-[1200px] -left-40 w-[600px] h-[600px] rounded-full bg-[#182035]/30 blur-[160px]"></div>
<!-- 01 — HERO SECTION -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-20 md:pt-16 md:pb-24">
<div class="flex flex-col gap-4 border-b border-white/10 pb-16">
<div class="flex items-center gap-3 font-mono text-xs text-amber-brand">
<span class="px-2.5 py-1 rounded bg-amber-brand/10 border border-amber-brand/30 tracking-widest uppercase font-semibold">
            [ PROJECTS / ASTRA BUILDS ]
          </span>
<span class="text-text-muted">// PRODUCTION DIRECTORY</span>
</div>
<div class="mt-2"><h1 class="font-display-vt text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none uppercase">BUILT BY <span class="text-[#f59e0b]">ASTRATECH</span></h1><p class="font-mono text-xl sm:text-2xl text-[#f59e0b] mt-4 tracking-wide font-normal">Real projects. Real builders. Real learning.</p><p class="text-slate-400 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed font-sans">Explore what students are building while turning their learning into working products. Deployed from raw prototypes directly to high-reliability production nodes.</p></div>
</div>
</section>
<!-- 02 — FEATURED BUILDS (Alternating Large Editorial Rhythm) -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-28 md:space-y-36">
<div class="flex items-center justify-between border-b border-white/10 pb-6">
<div class="space-y-1">
<span class="font-mono text-xs text-amber-brand tracking-widest block uppercase">[ FEATURED PROJECTS ]</span>
<h2 class="font-display-vt text-4xl sm:text-5xl text-white tracking-tight uppercase">
            WHAT THEY'RE BUILDING<span class="text-amber-brand">.</span>
</h2>
</div>
<div class="hidden sm:flex items-center gap-2 font-mono text-xs text-text-muted">
<span class="h-2 w-2 rounded-full bg-amber-brand animate-pulse"></span>
<span class="">LIVE PRODUCTION VERIFIED</span>
</div>
</div>
<!-- BUILD 01 (Left: Visual, Right: Text) -->
<article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
<!-- Visual Container -->
<div class="lg:col-span-7 group relative rounded-xl overflow-hidden bg-surface-card border border-white/10 hover:border-amber-brand/40 transition-all duration-500 shadow-2xl">
<div class="relative w-full aspect-[16/10] bg-[#070A10] overflow-hidden">
<img class="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" data-alt="Technical telemetry and IoT sensor dashboard showing municipal air quality index real-time graphs, map points for Jamshedpur industrial grid, dark cyber aesthetic, high contrast amber accents, micro data charts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHJ7QdW0UoZA7vz9pWtSke3Cf_9o4ygoGW_-M7S08CwCfJ6pD3BbY-Gwr-N0dd6N8Hi7IEtn-CBqbbA5JvY9D8haFBrQKvbR8GnZSfwNGQ4RI1IxTD5vDFX1lMJ7YSKGzRLnn_2u-bpOMzsMzrPHq4BSPsUZ49_v9edgZ_yLBz1xakNeafgsZVBJ1nS8WqXohFinBEMdXRU2TodHqdgrHER0tdQb6IiqCEm7SAG4U">
<div class="absolute inset-0 bg-gradient-to-t from-surface-card/80 via-transparent to-transparent"></div>
<!-- Technical Tag Overlay -->
<div class="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 rounded bg-[#05070C]/90 border border-white/10 text-silver-metallic backdrop-blur-md">
<span class="text-amber-brand">[ NODE: JH-01 ]</span> SENSOR INGEST STREAM
            </div>
<div class="absolute bottom-4 right-4 font-mono text-[11px] px-2.5 py-1 rounded bg-[#05070C]/90 border border-amber-brand/30 text-amber-brand backdrop-blur-md flex items-center gap-1.5">
<span class="h-1.5 w-1.5 rounded-full bg-amber-brand animate-ping"></span> LIVE CLUSTER
            </div>
</div>
</div>
<!-- Editorial Details -->
<div class="lg:col-span-5 flex flex-col justify-center space-y-5">
<div class="flex items-center gap-3 font-mono text-xs">
<span class="text-amber-brand font-bold">[ PROJECT / 001 ]</span>
<span class="text-white/20">|</span>
<span class="text-text-muted">COHORT 2025</span>
</div>
<h3 class="font-display-vt text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight">
            MUNICIPAL SENSOR TELEMETRY HUB
          </h3>
<p class="text-text-secondary text-sm sm:text-base leading-relaxed font-sans">
            Real-time municipal telemetry ingestion pipeline tracking air quality, industrial emission levels, and municipal water flow across Jamshedpur industrial zones.
          </p>
<div class="py-3 border-y border-white/[0.08] space-y-2 font-mono text-xs">
<div class="flex items-center justify-between">
<span class="text-text-muted uppercase">BUILT BY</span>
<span class="text-text-primary font-medium">Aman Sharma</span>
</div>
<div class="flex items-center justify-between">
<span class="text-text-muted uppercase">PROGRAM</span>
<span class="text-amber-brand font-medium">FDE Engine</span>
</div>
<div class="flex items-center justify-between">
<span class="text-text-muted uppercase">TECH</span>
<span class="text-silver-metallic font-medium">React · Node.js · PostgreSQL · WebSockets</span>
</div>
</div>
<!-- Clean 2 Action Buttons -->
<div class="flex flex-wrap items-center gap-3 pt-2"><a class="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-[#f59e0b] hover:bg-[#d97706] text-black font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-[0_0_16px_rgba(245,158,11,0.25)] hover:scale-[1.02]" href="#">[ LIVE PROJECT → ]</a><a class="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-transparent border border-white/20 hover:border-[#f59e0b] text-slate-300 hover:text-white font-mono text-xs font-medium tracking-wider transition-all duration-200" href="#">[ GITHUB → ]</a></div>
</div>
</article>
<!-- BUILD 02 (REVERSED: Text on Left, Visual on Right) -->
<article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
<!-- Editorial Details (Appears first on desktop) -->
<div class="lg:col-span-5 flex flex-col justify-center space-y-5 order-2 lg:order-1">
<div class="flex items-center gap-3 font-mono text-xs">
<span class="text-amber-brand font-bold">[ PROJECT / 002 ]</span>
<span class="text-white/20">|</span>
<span class="text-text-muted">NEURAL WORKSPACE</span>
</div>
<h3 class="font-display-vt text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight">
            ASTRA-AGENT: LEGAL ASSISTANT
          </h3>
<p class="text-text-secondary text-sm sm:text-base leading-relaxed font-sans">
            Retrieval-augmented conversational agent designed to index, parse, and summarize complex regional land and legal compliance documents in Hindi and English.
          </p>
<div class="py-3 border-y border-white/[0.08] space-y-2 font-mono text-xs">
<div class="flex items-center justify-between">
<span class="text-text-muted uppercase">BUILT BY</span>
<span class="text-text-primary font-medium">Priya Kumari</span>
</div>
<div class="flex items-center justify-between">
<span class="text-text-muted uppercase">PROGRAM</span>
<span class="text-amber-brand font-medium">AIML Track</span>
</div>
<div class="flex items-center justify-between">
<span class="text-text-muted uppercase">TECH</span>
<span class="text-silver-metallic font-medium">FastAPI · Python · LangChain · pgvector</span>
</div>
</div>
<!-- Clean 2 Action Buttons -->
<div class="flex flex-wrap items-center gap-3 pt-2"><a class="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-[#f59e0b] hover:bg-[#d97706] text-black font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-[0_0_16px_rgba(245,158,11,0.25)] hover:scale-[1.02]" href="#">[ LIVE PROJECT → ]</a><a class="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-transparent border border-white/20 hover:border-[#f59e0b] text-slate-300 hover:text-white font-mono text-xs font-medium tracking-wider transition-all duration-200" href="#">[ GITHUB → ]</a></div>
</div>
<!-- Visual Container -->
<div class="lg:col-span-7 group relative rounded-xl overflow-hidden bg-surface-card border border-white/10 hover:border-amber-brand/40 transition-all duration-500 shadow-2xl order-1 lg:order-2">
<div class="relative w-full aspect-[16/10] bg-[#070A10] overflow-hidden">
<img class="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" data-alt="Technical user interface mockup of a bilingual AI legal assistant showing retrieval augmented generation vectors, chat transcripts in Hindi and English, sleek dark cybersecurity theme with amber highlighted code markers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLBtln-mCQfuego-rgDnB2yzKi31jKD32gmX4ak1s8sZvQATEK58fEb2lCEuLKWLdfWrwna1Q4OEPZf9gPZVV1OC8TU_aqCRihcuAnyfgSsgiibuTZvKXyYlkv_R1_GVOkZt3K4X3ZiPGJpijkPBnnuBdomZJgQuZfKgM1kTIgImga-3KL_Avviq_wpQhLGr8EM9s_AV0IRHhIeFUUqjzuuk9B_OV461tGaK0-sWA">
<div class="absolute inset-0 bg-gradient-to-t from-surface-card/80 via-transparent to-transparent"></div>
<!-- Technical Tag Overlay -->
<div class="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 rounded bg-[#05070C]/90 border border-white/10 text-silver-metallic backdrop-blur-md">
<span class="text-amber-brand">[ RAG MODEL ]</span> BGE-M3 DUAL PIPELINE
            </div>
<div class="absolute bottom-4 right-4 font-mono text-[11px] px-2.5 py-1 rounded bg-[#05070C]/90 border border-amber-brand/30 text-amber-brand backdrop-blur-md flex items-center gap-1.5">
<span class="h-1.5 w-1.5 rounded-full bg-amber-brand animate-ping"></span> EMBEDDINGS ACTIVE
            </div>
</div>
</div>
</article>
<!-- BUILD 03 (Normal: Visual on Left, Text on Right) -->
<article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
<!-- Visual Container -->
<div class="lg:col-span-7 group relative rounded-xl overflow-hidden bg-surface-card border border-white/10 hover:border-amber-brand/40 transition-all duration-500 shadow-2xl">
<div class="relative w-full aspect-[16/10] bg-[#070A10] overflow-hidden">
<img class="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" data-alt="Developer portal dashboard terminal showing automated security scanning reports, AST code tree, Git pull request diffs, code lint analysis in dark minimalist futuristic style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVwiX22i6pLJe8n_Z0MkGIHhJ61oLPhGTK-luuh1j3ZoHKK3HKDQHTb96dD2TBsSjcCwxv_nCaEhleg2sOYO8M1PaG3F_SaIv3L9j-tJ0Qk_Jr5iFeiHAcOxn-8GeW2EcFQaUMVPdBMDUBdKdd6A8tUxNc2tlbeaTXguAzS68hH1V6H8Nc1W8RM85GC1R7c0KPphm6Cy-G1rSIjBUKm6wJUYO18B76b06n_eiA1-Q">
<div class="absolute inset-0 bg-gradient-to-t from-surface-card/80 via-transparent to-transparent"></div>
<!-- Technical Tag Overlay -->
<div class="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 rounded bg-[#05070C]/90 border border-white/10 text-silver-metallic backdrop-blur-md">
<span class="text-amber-brand">[ AST PARSER ]</span> SEC_SCAN RUNTIME
            </div>
<div class="absolute bottom-4 right-4 font-mono text-[11px] px-2.5 py-1 rounded bg-[#05070C]/90 border border-amber-brand/30 text-amber-brand backdrop-blur-md flex items-center gap-1.5">
<span class="h-1.5 w-1.5 rounded-full bg-amber-brand animate-ping"></span> SUB-SECOND AUDIT
            </div>
</div>
</div>
<!-- Editorial Details -->
<div class="lg:col-span-5 flex flex-col justify-center space-y-5">
<div class="flex items-center gap-3 font-mono text-xs">
<span class="text-amber-brand font-bold">[ PROJECT / 003 ]</span>
<span class="text-white/20">|</span>
<span class="text-text-muted">CI/CD DEVTOOL</span>
</div>
<h3 class="font-display-vt text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight">
            DEVFLOW: CODE REVIEW ENGINE
          </h3>
<p class="text-text-secondary text-sm sm:text-base leading-relaxed font-sans">
            Automated code analysis tool running static linting and security vulnerability scanning on pull requests with sub-second latency metric logs.
          </p>
<div class="py-3 border-y border-white/[0.08] space-y-2 font-mono text-xs">
<div class="flex items-center justify-between">
<span class="text-text-muted uppercase">BUILT BY</span>
<span class="text-text-primary font-medium">Rohan Gupta</span>
</div>
<div class="flex items-center justify-between">
<span class="text-text-muted uppercase">PROGRAM</span>
<span class="text-amber-brand font-medium">FDE Cohort</span>
</div>
<div class="flex items-center justify-between">
<span class="text-text-muted uppercase">TECH</span>
<span class="text-silver-metallic font-medium">TypeScript · Docker · Redis · Tailwind</span>
</div>
</div>
<!-- Clean 2 Action Buttons -->
<div class="flex flex-wrap items-center gap-3 pt-2"><a class="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-[#f59e0b] hover:bg-[#d97706] text-black font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-[0_0_16px_rgba(245,158,11,0.25)] hover:scale-[1.02]" href="#">[ LIVE PROJECT → ]</a><a class="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-transparent border border-white/20 hover:border-[#f59e0b] text-slate-300 hover:text-white font-mono text-xs font-medium tracking-wider transition-all duration-200" href="#">[ GITHUB → ]</a></div>
</div>
</article>
</section>
<!-- 03 — STUDENT PROJECTS (Clean, Spacious 2-Column Grid) -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-16">
<div class="flex flex-col gap-2 mb-12 border-b border-white/10 pb-6">
<span class="font-mono text-xs text-amber-brand tracking-widest uppercase block">[ MORE BUILDS ]</span>
<h2 class="font-display-vt text-4xl sm:text-5xl text-white tracking-tight uppercase">
          MORE FROM THE COMMUNITY<span class="text-amber-brand">.</span>
</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
<!-- Community Card 1 -->
<article class="flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-surface-card border border-white/10 hover:border-amber-brand/40 transition-all duration-300 group shadow-lg">
<div class="space-y-6">
<div class="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-[#070A10] border border-white/[0.08]">
<div class="w-full h-full bg-cover bg-center opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500" data-location="Jamshedpur, Jharkhand" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkhbo6_PsI13iRm6igOpFu32VvpH3p05xIHJIsA9eUbhg7ts1H3Wp-d2nqDySf1xd6_JEU0YhrPenCdedqL2dMpgW1pHg0dMoJezMSX0J-ZwluVTH1IuxawjpVV65X9gO37GYjtKqfW_vK6fgUUdlTirLrElqxJdYhCUInPr2KmL7YQDcitsRwgrspXmKCf8ynvaJnZEt1MMRFUv6nZaYA_xgAVDQmleP-x7Z3BP8')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent"></div>
<div class="absolute top-3 left-3 font-mono text-[10px] px-2 py-0.5 rounded bg-surface-base/90 border border-white/10 text-silver-metallic">
                [ ROUTING / GEO ]
              </div>
</div>
<div class="space-y-2">
<h3 class="font-display-vt text-2xl sm:text-3xl text-white group-hover:text-amber-brand transition-colors uppercase tracking-wide">
                KINETIC LOGISTICS ROUTING
              </h3>
<div class="font-mono text-xs text-text-muted space-y-0.5">
<div class="">BUILDER: <span class="text-text-primary">Vikram Singh &amp; Aditi Roy</span></div>
<div class="">PROGRAM: <span class="text-amber-brand">AIML Core</span></div>
</div>
<p class="text-text-secondary text-sm leading-relaxed pt-2">
                Heuristic routing optimizer for regional freight distribution corridors connecting Jamshedpur, Ranchi, and Kolkata terminals under dynamic traffic loads.
              </p>
</div>
</div>
<div class="pt-6 mt-6 border-t border-white/[0.08]">
<a class="inline-flex items-center font-mono text-xs text-amber-brand hover:text-amber-glow font-semibold tracking-wider transition-colors gap-1.5" href="#">
              [ VIEW PROJECT → ]
            </a>
</div>
</article>
<!-- Community Card 2 -->
<article class="flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-surface-card border border-white/10 hover:border-amber-brand/40 transition-all duration-300 group shadow-lg">
<div class="space-y-6">
<div class="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-[#070A10] border border-white/[0.08]">
<img class="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500" data-alt="Edge computing AI vision camera system hardware node mounted in computer lab, running localized PyTorch model with bounding box overlays and real-time inference latency numbers, dark blue and graphite styling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC73Ztvy8rc9LISkvhwpj4yGTo32ceSEASpBlPXEe4QLWk-Uo3CNpCW8_9_efqci3-z5KCEYhJgsOKleG8PWkh9KNGFYxMmS2v7cknVP_gPMcWcAwf_jJIpB4xhX3UQeBoVxhr5JnunQ1B6dymO1a0CBuxXV89QjSntA565jym0zirbNOFCEEH-Sqah679nQZX0ayMrFUzAXM9VnWxHBYQZQxDB6M8KFynNOLuY9MA">
<div class="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent"></div>
<div class="absolute top-3 left-3 font-mono text-[10px] px-2 py-0.5 rounded bg-surface-base/90 border border-white/10 text-silver-metallic">
                [ EDGE / ONNX ]
              </div>
</div>
<div class="space-y-2">
<h3 class="font-display-vt text-2xl sm:text-3xl text-white group-hover:text-amber-brand transition-colors uppercase tracking-wide">
                CAMPUS ATTENDANCE VISION NODE
              </h3>
<div class="font-mono text-xs text-text-muted space-y-0.5">
<div class="">BUILDER: <span class="text-text-primary">Rahul Verma</span></div>
<div class="">PROGRAM: <span class="text-amber-brand">AI / ML Track</span></div>
</div>
<p class="text-text-secondary text-sm leading-relaxed pt-2">
                Edge-computed face verification system running on localized hardware with zero cloud dependency and on-device privacy guarantee.
              </p>
</div>
</div>
<div class="pt-6 mt-6 border-t border-white/[0.08]">
<a class="inline-flex items-center font-mono text-xs text-amber-brand hover:text-amber-glow font-semibold tracking-wider transition-colors gap-1.5" href="#">
              [ VIEW PROJECT → ]
            </a>
</div>
</article>
</div>
</section>
<!-- 04 — STUDENT SPOTLIGHT (Editorial Human-Focused Story) -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 border-t border-white/10">
<div class="flex flex-col gap-2 mb-10">
<span class="font-mono text-xs text-amber-brand tracking-widest uppercase block">[ BUILDER / STORY ]</span>
<h2 class="font-display-vt text-4xl sm:text-5xl text-white tracking-tight uppercase">
          BEHIND THE BUILD<span class="text-amber-brand">.</span>
</h2>
</div>
<div class="p-8 sm:p-12 lg:p-16 rounded-2xl bg-surface-card border border-white/10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
<!-- Ambient Watermark -->
<div class="absolute -right-8 -bottom-8 pointer-events-none select-none opacity-[0.03] font-display-vt text-[160px] text-white">
          BUILDER
        </div>
<!-- Left: Authentic Student Portrait/Lab Scene -->
<div class="lg:col-span-5 relative rounded-xl overflow-hidden bg-surface-container border border-white/10 aspect-[4/5] shadow-2xl">
<img class="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700" data-alt="Student developer working deeply at an engineering workstation inside AstraTech labs Jamshedpur surrounded by terminal code displays and hardware prototype breadboards, focused cinematic technical portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7H8h-_l4c3d07ZwzzUsznfJM5Vmk4KUbpZEUEPI41pNHRWqiYkFOL2n6YeVo1VU7sN0EKbmUTFsX7uTXwjO_ljmHAwJ42vmcKEzi5bvyKqu6sRHUc6IkjtnC8a_G4SwYyYR2MBOZQvzgsPkbktTAnEkAR_58AZInwLOcDt3JneSzHgAdPUjk5elLuw5d0vytJayVC_4JoYDRHu9Z54rXtmZPi-Zzpi06kLhyk800">
<div class="absolute inset-0 bg-gradient-to-t from-surface-base/90 via-transparent to-transparent"></div>
<div class="absolute bottom-4 left-4 font-mono text-xs text-silver-metallic bg-surface-base/90 px-3 py-1 rounded border border-white/10">
            JAMSHEDPUR LAB // TERMINAL 04
          </div>
</div>
<!-- Right: Story Transcript -->
<div class="lg:col-span-7 flex flex-col justify-center space-y-6 relative z-10">
<div class="space-y-4">
<div>
<span class="font-mono text-[11px] text-text-muted tracking-widest uppercase block">BUILT BY</span>
<div class="font-mono text-lg text-white font-semibold">Aman Sharma — <span class="text-amber-brand font-normal">Full-Stack Developer</span></div>
</div>
<div>
<span class="font-mono text-[11px] text-text-muted tracking-widest uppercase block">PROJECT</span>
<div class="font-display-vt text-2xl sm:text-3xl text-white tracking-wide uppercase">Municipal Sensor Telemetry Hub</div>
</div>
</div>
<div class="space-y-3 pt-2 border-t border-white/[0.08]"><a class="inline-flex items-center px-5 py-2.5 rounded-sm bg-transparent border border-[#f59e0b]/40 hover:border-[#f59e0b] text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm" href="#">[ VIEW PROJECT → ]</a></div>
<div class="pt-2"><a class="inline-flex items-center px-5 py-2.5 rounded-sm bg-transparent border border-[#f59e0b]/40 hover:border-[#f59e0b] text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm" href="#">[ VIEW PROJECT → ]</a></div>
</div>
</div>
</section>
<!-- 05 — THE BUILD PROCESS (Minimal, Elegant Horizontal Sequence) -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 border-t border-white/10">
<div class="flex flex-col gap-2 mb-12 text-center md:text-left">
<span class="font-mono text-xs text-amber-brand tracking-widest uppercase block">[ HOW IT HAPPENS ]</span>
<h2 class="font-display-vt text-4xl sm:text-5xl text-white tracking-tight uppercase">
          FROM IDEA TO BUILD<span class="text-amber-brand">.</span>
</h2>
<p class="text-text-secondary text-base max-w-2xl mt-1">
          Students turn what they learn into something they can actually build, test and show.
        </p>
</div>
<!-- Minimal Horizontal Timeline Sequence -->
<div class="p-8 sm:p-12 rounded-xl bg-surface-card border border-white/10 relative">
<div class="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
<!-- Step 1 -->
<div class="flex flex-col space-y-2 relative">
<div class="flex items-center gap-2 font-mono text-xs text-text-muted">
<span class="text-amber-brand font-bold">01 //</span>
<span class="">PHASE</span>
</div>
<div class="font-display-vt text-3xl sm:text-4xl text-white tracking-wide uppercase">IDEA</div>
<p class="text-text-secondary text-xs sm:text-sm font-sans pt-1">
              Identify a concrete regional, algorithmic, or commercial opportunity.
            </p>
</div>
<!-- Step 2 -->
<div class="flex flex-col space-y-2 relative">
<div class="flex items-center gap-2 font-mono text-xs text-text-muted">
<span class="text-amber-brand font-bold">02 //</span>
<span class="">PHASE</span>
</div>
<div class="font-display-vt text-3xl sm:text-4xl text-white tracking-wide uppercase">BUILD</div>
<p class="text-text-secondary text-xs sm:text-sm font-sans pt-1">
              Turn theoretical design into executable code and reactive schemas.
            </p>
</div>
<!-- Step 3 -->
<div class="flex flex-col space-y-2 relative">
<div class="flex items-center gap-2 font-mono text-xs text-text-muted">
<span class="text-amber-brand font-bold">03 //</span>
<span class="">PHASE</span>
</div>
<div class="font-display-vt text-3xl sm:text-4xl text-white tracking-wide uppercase">TEST</div>
<p class="text-text-secondary text-xs sm:text-sm font-sans pt-1">
              Stress test, benchmark latency, and profile under real concurrency.
            </p>
</div>
<!-- Step 4 -->
<div class="flex flex-col space-y-2 relative">
<div class="flex items-center gap-2 font-mono text-xs text-text-muted">
<span class="text-amber-brand font-bold">04 //</span>
<span class="">PHASE</span>
</div>
<div class="font-display-vt text-3xl sm:text-4xl text-white tracking-wide uppercase text-amber-brand">DEPLOY</div>
<p class="text-text-secondary text-xs sm:text-sm font-sans pt-1">
              Push public URLs, attach live telemetry, and maintain production uptime.
            </p>
</div>
</div>
<!-- Horizontal Flow Arrow Line -->
<div class="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-text-muted">
<div class="flex items-center gap-3">
<span class="h-2 w-2 rounded-full bg-amber-brand animate-ping"></span>
<span class="">SYSTEM CONTINUUM PROTOCOL</span>
</div>
<span class="text-amber-brand">IDEA → BUILD → TEST → DEPLOY</span>
</div>
</div>
</section>
<!-- 06 — NEXT BUILD / CTA -->
<section class="relative w-full max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-16">
<div class="p-10 sm:p-16 md:p-20 rounded-2xl bg-gradient-to-b from-surface-card to-[#070A10] border border-white/10 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl">
<div class="flex items-center gap-2 font-mono text-xs text-amber-brand">
<span class="h-1.5 w-1.5 rounded-full bg-amber-brand animate-ping"></span>
<span class="">[ NEXT BUILD ]</span>
</div>
<h2 class="font-display-vt text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight max-w-3xl leading-none">
          YOUR BUILD COULD BE NEXT<span class="text-amber-brand">.</span>
</h2>
<p class="font-mono text-lg sm:text-xl text-text-secondary max-w-xl">
          Every project starts with an idea.
        </p>
<div class="pt-4 flex flex-wrap justify-center gap-4"><a class="px-8 py-3.5 rounded-sm bg-[#f59e0b] hover:bg-[#d97706] text-black font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105 shadow-[0_0_24px_rgba(245,158,11,0.35)]" data-path="courses" href="#">[ EXPLORE COURSES → ]</a></div>
<div class="pt-6 font-mono text-xs text-text-muted tracking-widest uppercase">
          ASTRA_ACADEMY // JAMSHEDPUR TECH CAMPUS // BATCH 2025-2026
        </div>
</div>
</section>
</main>
<!-- MULTI-COLUMN TECHNICAL TELEMETRY FOOTER -->
<footer class="w-full bg-[#030508] border-t border-white/10 pt-16 pb-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-white/10">
      <!-- Col 1 & 2: Lab Identity -->
      <div class="md:col-span-2 space-y-4">
        <div class="flex items-center gap-2">
          <span class="font-mono text-xl text-white tracking-tight font-bold">ASTRATECH AI</span>
          <span class="font-mono text-[10px] text-[#f59e0b] px-1.5 py-0.5 rounded bg-surface-elevated border border-[#f59e0b]/40">// BLUEPRINT ARCH</span>
        </div>
        <p class="text-sm text-slate-400 max-w-md leading-relaxed font-sans">
          Autonomous intelligence and computational infrastructure laboratory. Precision neural runtime architectures deployed from Jamshedpur node.
        </p>
        <div class="flex items-center gap-4 pt-2">
          <div class="flex items-center gap-2 font-mono text-xs text-white px-3 py-1 rounded bg-surface-elevated border border-white/10">
            <span class="h-2 w-2 rounded-full bg-[#f59e0b] animate-ping"></span>
            [NODE_STATUS: ONLINE]
          </div>
          <span class="font-mono text-xs text-slate-400">GEO: 22.8046°N, 86.2029°E</span>
        </div>
      </div>
      <!-- Col 3: Directory -->
      <div>
        <span class="font-mono text-xs text-white tracking-widest block mb-4 uppercase">[SECTIONS_INDEX]</span>
        <ul class="space-y-2 font-mono text-xs">
          <li class="flex items-center gap-2">
            <span class="text-[#f59e0b]">01.</span>
            <a class="text-slate-400 hover:text-white transition-colors" data-path="about" href="#">About</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-[#f59e0b]">02.</span>
            <a class="text-slate-400 hover:text-white transition-colors" data-path="developers" href="#">Developers</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-[#f59e0b]">03.</span>
            <a class="text-slate-400 hover:text-white transition-colors" data-path="events" href="#">Events</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-[#f59e0b]">04.</span>
            <a class="text-slate-400 hover:text-white transition-colors" data-path="contact" href="#">Contact</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-[#f59e0b]">05.</span>
            <a class="text-slate-400 hover:text-white transition-colors" data-path="courses" href="#">Courses</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-[#f59e0b]">06.</span>
            <a class="text-slate-400 hover:text-white transition-colors" data-path="projects" href="#">Projects</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-[#f59e0b]">07.</span>
            <a class="text-slate-400 hover:text-white transition-colors" data-path="media" href="#">Media</a>
          </li>
        </ul>
      </div>
      <!-- Col 4: Regulatory -->
      <div>
        <span class="font-mono text-xs text-white tracking-widest block mb-4 uppercase">[REGULATORY]</span>
        <ul class="space-y-2 font-mono text-xs text-slate-400">
          <li class=""><a class="hover:text-white transition-colors" data-path="governance-ethics" href="#">Neural Governance</a></li>
          <li class=""><a class="hover:text-white transition-colors" data-path="protocol-l5-security" href="#">Protocol L5 Security</a></li>
          <li class=""><a class="hover:text-white transition-colors" data-path="api-terms" href="#">Runtime API Terms</a></li>
          <li class=""><a class="hover:text-white transition-colors" data-path="data-compliance" href="#">Telemetry Compliance</a></li>
        </ul>
      </div>
    </div>
    <!-- Bottom Status Bar -->
    <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted">
      <div class="text-slate-400">© AstraTech AI, Jamshedpur, Jharkhand. All systems operational.</div>
      <div class="flex items-center gap-3">
        <span class="text-slate-400">LAT: 22.8046°N // LON: 86.2029°E</span>
        <span class="text-white/20">//</span>
        <span class="text-[#f59e0b]">SYS_REV: 4.8.1-PROD</span>
      </div>
    </div>
  </div>
</footer>




</body></html>

<!DOCTYPE html><html class="dark" lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta content="web_standard" name="shell-type">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
<link href="https://fonts.googleapis.com" rel="preconnect">
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&amp;family=Space+Grotesk:wght@400;500;600;700&amp;family=Space+Mono:ital,wght@0,400;0,700;1,400&amp;family=VT323&amp;display=swap" rel="stylesheet">
<style>
    @layer base {
      html, body { margin:0; padding:0; }
      body { overscroll-behavior:none; }
      main > :first-child { margin-top:0 !important; }
      main > :last-child { margin-bottom:0 !important; }
    }
    ::-webkit-scrollbar { display:none; }
  </style>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#c3c6cf",
            "tertiary-fixed": "#f3dfd2",
            "tertiary": "#d6c3b7",
            "on-error-container": "#ffdad6",
            "inverse-primary": "#5b5e66",
            "on-primary-fixed": "#181c22",
            "outline": "#8f9095",
            "surface-container-low": "#191c20",
            "primary-fixed-dim": "#c3c6cf",
            "surface-container-high": "#272a2f",
            "primary-container": "#0d1117",
            "on-surface-variant": "#c6c6cb",
            "tertiary-fixed-dim": "#d6c3b7",
            "on-primary": "#2d3137",
            "surface-container": "#1d2024",
            "on-primary-fixed-variant": "#43474e",
            "surface-variant": "#32353a",
            "on-tertiary-fixed": "#231a12",
            "tertiary-container": "#180f08",
            "inverse-surface": "#e1e2e9",
            "on-tertiary-fixed-variant": "#51443b",
            "surface": "#111318",
            "on-surface": "#e1e2e9",
            "inverse-on-surface": "#2e3035",
            "outline-variant": "#45474b",
            "on-primary-container": "#797d85",
            "secondary-fixed": "#dde3e9",
            "on-background": "#e1e2e9",
            "surface-dim": "#111318",
            "on-tertiary-container": "#897a6f",
            "error-container": "#93000a",
            "surface-container-lowest": "#0c0e13",
            "surface-tint": "#c3c6cf",
            "on-secondary-container": "#b3b9bf",
            "secondary-container": "#434a4f",
            "error": "#ffb4ab",
            "secondary": "#c1c7cd",
            "background": "#111318",
            "surface-container-highest": "#32353a",
            "on-error": "#690005",
            "primary-fixed": "#dfe2eb",
            "on-secondary": "#2b3136",
            "on-secondary-fixed-variant": "#41484c",
            "on-secondary-fixed": "#161c21",
            "on-tertiary": "#3a2e26",
            "secondary-fixed-dim": "#c1c7cd",
            "surface-bright": "#37393e"
          },
          borderRadius: {
            "DEFAULT": "1rem",
            "lg": "2rem",
            "xl": "3rem",
            "full": "9999px"
          },
          fontFamily: {
            "headline": ["Sora", "sans-serif"],
            "display": ["VT323", "monospace"],
            "body": ["Space Grotesk", "sans-serif"],
            "label": ["Space Mono", "monospace"],
            "mono": ["Space Mono", "monospace"]
          }
        }
      }
    }
  </script>
</head>
<body class="bg-[#05070c] font-body text-on-surface antialiased selection:bg-[#f59e0b] selection:text-black">
<!-- TOP HUD / TELEMETRY STATUS BAR -->
<header class="fixed top-0 w-full z-40 bg-[#05070c]/95 backdrop-blur-xl border-b border-white/5">
<div class="w-full bg-[#080b11] px-4 lg:px-8 py-1.5 flex flex-wrap items-center justify-between text-[11px] font-mono text-on-surface-variant border-b border-white/5">
<div class="flex items-center gap-4 flex-wrap">
<span class="flex items-center gap-1.5 text-white">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping"></span>
          [SYS_STATUS: NOMINAL // FEED: 99.8%]
        </span>
<span class="hidden md:inline text-white/60">[LAT: 22.8046° N // LON: 86.2029° E]</span>
<span class="hidden lg:inline text-white/60">[REGION: JAMSHEDPUR, JHARKHAND - NODE_01]</span>
</div>
<div class="flex items-center gap-4">
<span class="hidden sm:inline text-white/60">[DEP_AUTH: PROTOCOL_L5]</span>
<span class="text-[#f59e0b] font-medium">CLK: UTC+05:30</span>
</div>
</div>
<!-- MAIN NAVBAR -->
<div class="h-20 w-full px-4 lg:px-8 flex items-center justify-between">
<div class="flex items-center gap-3">
<a class="flex flex-col group" href="#">
<div class="flex items-center gap-2">
<span class="font-headline font-bold text-lg lg:text-xl tracking-wider text-white group-hover:text-[#f59e0b] transition-colors">ASTRATECH AI</span>
<span class="px-2 py-0.5 rounded-full bg-surface-container-high text-[10px] font-mono text-[#f59e0b] uppercase border border-[#f59e0b]/20">[AI.0]</span>
</div>
<span class="text-[11px] font-mono tracking-widest text-on-surface-variant">// JAMSHEDPUR LAB</span>
</a>
</div>
<nav class="hidden xl:flex items-center gap-6 font-mono text-xs tracking-wider">
<a class="text-on-surface-variant hover:text-white transition-colors" data-path="home" href="#">// HOME</a>
<a class="text-on-surface-variant hover:text-white transition-colors" data-path="about" href="#">// ABOUT</a>
<a class="text-on-surface-variant hover:text-white transition-colors" data-path="courses" href="#">// COURSES</a>
<a class="text-on-surface-variant hover:text-white transition-colors" data-path="projects" href="#">// PROJECTS</a>
<a aria-current="page" class="text-white font-semibold flex items-center gap-1.5 text-[#f59e0b]" data-path="developers" href="#">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
          // DEVELOPERS
        </a>
<a class="text-on-surface-variant hover:text-white transition-colors" data-path="media" href="#">// MEDIA</a>
<a class="text-on-surface-variant hover:text-white transition-colors" data-path="contact" href="#">// CONTACT</a>
</nav>
<div class="flex items-center gap-3">
<span class="hidden sm:inline-flex px-2 py-1 rounded bg-surface-container-high text-[10px] font-mono text-on-surface-variant border border-white/5">01</span>
<button class="px-4 py-2 rounded-full bg-[#f59e0b] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all" type="button">
          [INIT_ENROLL] ⚡
        </button>
<div class="w-8 h-8 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center">
<span class="material-symbols-outlined text-[#f59e0b] text-[18px]">terminal</span>
</div>
</div>
</div>
</header>
<main class="w-full pt-28 bg-[#05070c] relative">
<!-- AMBER BLUEPRINT GRID ATMOSPHERE -->
<div class="fixed inset-0 pointer-events-none opacity-40 [background-image:linear-gradient(to_right,rgba(245,164,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,164,0,0.03)_1px,transparent_1px)] [background-size:32px_32px] z-0"></div>
<div class="relative z-10 w-full flex flex-col">
<!-- ==========================================
       01 // HERO SECTION (EDITORIAL NARRATIVE)
       ========================================== -->
<section class="w-full px-4 sm:px-8 lg:px-14 pt-10 pb-16 md:pt-14 md:pb-20 border-b border-white/5">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
<div class="space-y-4 max-w-3xl">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#f59e0b]/20 text-xs font-mono tracking-widest text-[#f59e0b]">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping"></span>
<span class="">[ ASTRA / PEOPLE ]</span>
</div>
<h1 class="text-5xl sm:text-7xl md:text-8xl tracking-wider text-white font-['VT323'] uppercase leading-none drop-shadow-[0_0_25px_rgba(245,158,11,0.2)]">
          THE PEOPLE BUILDING ASTRATECH
        </h1>
<p class="text-base sm:text-lg text-on-surface-variant font-mono max-w-2xl leading-relaxed">
          Not a team directory. A growing network of people who learn by building.
        </p>
</div>
<div class="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 text-xs font-mono">
<div class="px-3.5 py-2 rounded-md bg-surface-container-high/80 border border-white/5 text-[#f59e0b] flex items-center gap-2">
<span class="inline-block w-2 h-2 bg-[#f59e0b] rounded-full"></span>
<span class="">[DIGITAL_ARCHIVE // ROSTER_L5]</span>
</div>
<div class="text-on-surface-variant text-[11px] tracking-widest">JAMSHEDPUR LAB NODE_01 // 09 VERIFIED BUILDERS</div>
</div>
</div>
</section>
<!-- ==========================================
       02 // MASTER-DETAIL DEVELOPER EDITORIAL SECTION
       Full vertical height stretching alignment
       ========================================== -->
<section class="w-full px-4 sm:px-8 lg:px-14 py-16 md:py-24 border-b border-white/5" id="people-index">
<div class="max-w-7xl mx-auto space-y-6">
<!-- TOP HUD BAR -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#080b11] border border-white/10 font-mono text-xs">
<div class="flex items-center gap-3">
<span class="text-[#f59e0b] font-bold tracking-widest uppercase">ASTRA CORE // BUILDER ARCHIVE</span>
<span class="text-white/30 hidden sm:inline">|</span>
<span class="text-white/60 hidden sm:inline">EDITORIAL DOSSIER TELEMETRY</span>
</div>
<div class="flex items-center gap-3 text-[11px]">
<span class="flex items-center gap-1.5 text-emerald-400">
<span class="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping"></span>
            [SYS_INDEX: 09 VERIFIED_NODES]
          </span>
<span class="text-white/40 hidden md:inline">// NODE: 22.8046° N</span>
</div>
</div>
<!-- MASTER-DETAIL MAIN FRAME: items-stretch for 100% height equal matching columns -->
<div class="rounded-2xl border border-white/10 bg-[#080b11]/80 backdrop-blur-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl items-stretch">
<!-- LEFT COLUMN: MEMBER ROSTER INDEX (5 COLS) -->
<div class="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col bg-[#05070c]/60 h-full">
<div class="px-6 py-4 border-b border-white/10 font-mono text-xs text-[#f59e0b] flex items-center justify-between">
<span class="">// ROSTER SELECTOR</span>
<span class="text-white/40 text-[10px]">SELECT FOR DOSSIER</span>
</div>
<div class="flex flex-col divide-y divide-white/5 flex-grow" id="roster-list" role="tablist">
<!-- Member 01 -->
<button class="w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group hover:bg-white/[0.03] border-l-2 border-transparent" data-member="aniket" onclick="selectMember('aniket')" type="button">
<div class="space-y-1">
<div class="text-[11px] font-mono text-[#f59e0b] tracking-wider">01 // CORE</div>
<div class="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                  ANIKET KUMAR
                </div>
<div class="text-xs font-mono text-white/70 uppercase tracking-widest">
                  FOUNDER &amp; DIRECTOR
                </div>
</div>
<div class="flex flex-col items-end gap-1.5 shrink-0 pl-3">
<span class="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px] hidden">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  ● ACTIVE
                </span>
<span class="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">DOSSIER ↗</span>
</div>
</button>
<!-- Member 02 (Default Selected) -->
<button class="w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group hover:bg-white/[0.03] border-l-2 border-transparent" data-member="aman" onclick="selectMember('aman')" type="button">
<div class="space-y-1">
<div class="text-[11px] font-mono text-[#f59e0b] tracking-wider">02 // CORE</div>
<div class="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                  AMAN SHARMA
                </div>
<div class="text-xs font-mono text-white/70 uppercase tracking-widest">
                  LEAD FULL-STACK ENGINEER
                </div>
</div>
<div class="flex flex-col items-end gap-1.5 shrink-0 pl-3">
<span class="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px] hidden">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  ● ACTIVE
                </span>
<span class="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">DOSSIER ↗</span>
</div>
</button>
<!-- Member 03 -->
<button class="w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group hover:bg-white/[0.03] border-l-2 border-transparent" data-member="priya" onclick="selectMember('priya')" type="button">
<div class="space-y-1">
<div class="text-[11px] font-mono text-[#f59e0b] tracking-wider">03 // CORE</div>
<div class="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                  PRIYA KUMARI
                </div>
<div class="text-xs font-mono text-white/70 uppercase tracking-widest">
                  AI / ML RESEARCH LEAD
                </div>
</div>
<div class="flex flex-col items-end gap-1.5 shrink-0 pl-3">
<span class="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px] hidden">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  ● ACTIVE
                </span>
<span class="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">DOSSIER ↗</span>
</div>
</button>
<!-- Member 04 -->
<button class="w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group hover:bg-white/[0.03] border-l-2 border-transparent" data-member="rohan" onclick="selectMember('rohan')" type="button">
<div class="space-y-1">
<div class="text-[11px] font-mono text-[#f59e0b] tracking-wider">04 // CORE</div>
<div class="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                  ROHAN GUPTA
                </div>
<div class="text-xs font-mono text-white/70 uppercase tracking-widest">
                  SYSTEMS &amp; DEVOPS ARCHITECT
                </div>
</div>
<div class="flex flex-col items-end gap-1.5 shrink-0 pl-3">
<span class="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px] hidden">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  ● ACTIVE
                </span>
<span class="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">DOSSIER ↗</span>
</div>
</button>
<!-- Member 05 -->
<button class="w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group bg-[#f59e0b]/10 border-l-2 border-[#f59e0b]" data-member="aditi" onclick="selectMember('aditi')" type="button">
<div class="space-y-1">
<div class="text-[11px] font-mono text-[#f59e0b] tracking-wider">05 // CORE</div>
<div class="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                  ADITI ROY
                </div>
<div class="text-xs font-mono text-white/70 uppercase tracking-widest">
                  PRODUCT DESIGNER &amp; UI/UX LEAD
                </div>
</div>
<div class="flex flex-col items-end gap-1.5 shrink-0 pl-3">
<span class="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px]">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  ● ACTIVE
                </span>
<span class="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">DOSSIER ↗</span>
</div>
</button>
<!-- Member 06 -->
<button class="w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group hover:bg-white/[0.03] border-l-2 border-transparent" data-member="vikram" onclick="selectMember('vikram')" type="button">
<div class="space-y-1">
<div class="text-[11px] font-mono text-[#f59e0b] tracking-wider">06 // CORE</div>
<div class="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                  VIKRAM SINGH
                </div>
<div class="text-xs font-mono text-white/70 uppercase tracking-widest">
                  SYSTEMS &amp; CLOUD ENGINEER
                </div>
</div>
<div class="flex flex-col items-end gap-1.5 shrink-0 pl-3">
<span class="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px] hidden">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  ● ACTIVE
                </span>
<span class="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">DOSSIER ↗</span>
</div>
</button>
<!-- Member 07 -->
<button class="w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group hover:bg-white/[0.03] border-l-2 border-transparent" data-member="rahul" onclick="selectMember('rahul')" type="button">
<div class="space-y-1">
<div class="text-[11px] font-mono text-[#f59e0b] tracking-wider">07 // CORE</div>
<div class="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                  RAHUL VERMA
                </div>
<div class="text-xs font-mono text-white/70 uppercase tracking-widest">
                  COMPUTER VISION &amp; EDGE AI
                </div>
</div>
<div class="flex flex-col items-end gap-1.5 shrink-0 pl-3">
<span class="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px] hidden">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  ● ACTIVE
                </span>
<span class="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">DOSSIER ↗</span>
</div>
</button>
<!-- Member 08 -->
<button class="w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group hover:bg-white/[0.03] border-l-2 border-transparent" data-member="sanya" onclick="selectMember('sanya')" type="button">
<div class="space-y-1">
<div class="text-[11px] font-mono text-[#f59e0b] tracking-wider">08 // CORE</div>
<div class="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                  SANYA SEN
                </div>
<div class="text-xs font-mono text-white/70 uppercase tracking-widest">
                  DATA &amp; NEURAL PIPELINES
                </div>
</div>
<div class="flex flex-col items-end gap-1.5 shrink-0 pl-3">
<span class="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px] hidden">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  ● ACTIVE
                </span>
<span class="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">DOSSIER ↗</span>
</div>
</button>
<!-- Member 09 -->
<button class="w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group hover:bg-white/[0.03] border-l-2 border-transparent" data-member="arjun" onclick="selectMember('arjun')" type="button">
<div class="space-y-1">
<div class="text-[11px] font-mono text-[#f59e0b] tracking-wider">09 // CORE</div>
<div class="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                  ARJUN NAIR
                </div>
<div class="text-xs font-mono text-white/70 uppercase tracking-widest">
                  CYBERSECURITY &amp; ZERO-TRUST ARCHITECT
                </div>
</div>
<div class="flex flex-col items-end gap-1.5 shrink-0 pl-3">
<span class="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px] hidden">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  ● ACTIVE
                </span>
<span class="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">DOSSIER ↗</span>
</div>
</button>
</div>
<div class="mt-auto p-4 border-t border-white/5 font-mono text-[11px] text-white/40 flex items-center justify-between bg-[#040609]/40">
<span class="">STATUS: SYNCHRONIZED</span>
<span class="text-[#f59e0b]">NODE_CLUSTER: IND-EAST-01</span>
</div>
</div>
<!-- RIGHT COLUMN: ACTIVE PROFILE DOSSIER (7 COLS) - FULL HEIGHT FLEX CONTAINER -->
<div class="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-opacity duration-300 relative bg-[#080b11] h-full" id="profile-display"><div class="space-y-8 flex-1 flex flex-col w-full">
  <!-- FULL-WIDTH PROMINENT HERO PORTRAIT TREATMENT (340px-420px height) -->
  <div class="relative rounded-2xl overflow-hidden bg-surface-container-high border border-white/10 shadow-2xl h-[340px] md:h-[400px] w-full group">
    <!-- Crosshair Reticles / HUD Badges -->
    <div class="absolute top-3 left-3 z-20 font-mono text-[10px] bg-[#05070c]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#f59e0b]/30 text-[#f59e0b] tracking-wider" id="detail-reticle-top">[05_HUD_DS]</div>
    <div class="absolute top-3 right-3 z-20 font-mono text-[10px] bg-[#05070c]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-white/70 tracking-wider flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping"></span>
      ASTRA_CORE // ARCHIVE
    </div>
    <div class="absolute bottom-3 left-3 z-20 font-mono text-[10px] bg-[#05070c]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#f59e0b]/30 text-[#f59e0b] tracking-wider" id="detail-reticle-bottom">JH_UI_STUDIO</div>
    <div class="absolute bottom-3 right-3 z-20 font-mono text-[10px] bg-[#05070c]/80 backdrop-blur-md px-2.5 py-1 rounded border border-emerald-400/30 text-emerald-400 tracking-wider flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> VERIFIED
    </div>
    <img alt="ADITI ROY" class="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 ease-out" id="detail-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEGnK_uPNrSGDMCnP8mvfggV3tZibKsNg0mGBtcW6ljELgYeGH5MfhY-fs7z5CxMvtIz9H4eZiihf6mOG1o5vj7LHNFkIQIxbyUXNkjNCAmoZfCLr5ZyvbeSyfFlcgNE_mUhoNpg0khksh-oU72C9r4Iktk5Pe98jfnXki-m7vrM_UzqLPkZDW_zis4nlutZFrm0LdeT-OUk8SoL9Lx0G9HIsjh-RnPMFYawyRs3U">
    <div class="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-black/30 pointer-events-none"></div>
  </div>

  <!-- PROFILE DETAILS STACKED DIRECTLY BENEATH -->
  <div class="space-y-6 w-full flex-grow">
    <!-- Header & Bio -->
    <div class="space-y-3">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-[#f59e0b] border border-[#f59e0b]/20" id="detail-tag">[ CORE / 05 ]</div>
        <div class="text-xs font-mono text-[#f59e0b] uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-surface-container-low" id="detail-role">PRODUCT DESIGNER &amp; UI/UX LEAD</div>
      </div>
      <h2 class="text-4xl sm:text-6xl font-['VT323'] uppercase text-white tracking-wide leading-tight" id="detail-name">ADITI ROY</h2>
      <p class="text-base text-on-surface font-body leading-relaxed max-w-3xl" id="detail-bio">Crafting technical design systems, high-density HUD interfaces, and accessible developer tooling experiences for student cohort platforms.</p>
    </div>

    <!-- Authentic Editorial Metadata Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs border-t border-white/5">
      <div class="p-3 rounded-xl bg-surface-container-low/60 border border-white/5 space-y-1">
        <span class="text-[10px] text-white/40 uppercase block tracking-wider">FOCUS</span>
        <span class="text-white text-xs font-semibold" id="meta-focus">SYSTEM DESIGN • UI/UX</span>
      </div>
      <div class="p-3 rounded-xl bg-surface-container-low/60 border border-white/5 space-y-1">
        <span class="text-[10px] text-white/40 uppercase block tracking-wider">BUILDING</span>
        <span class="text-[#f59e0b] text-xs font-semibold" id="meta-building">ASTRA HUD SPEC</span>
      </div>
      <div class="p-3 rounded-xl bg-surface-container-low/60 border border-white/5 space-y-1">
        <span class="text-[10px] text-white/40 uppercase block tracking-wider">BASED IN</span>
        <span class="text-white text-xs font-semibold" id="meta-based">JAMSHEDPUR</span>
      </div>
      <div class="p-3 rounded-xl bg-surface-container-low/60 border border-white/5 space-y-1">
        <span class="text-[10px] text-white/40 uppercase block tracking-wider">STATUS</span>
        <span class="text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          ONLINE NODE
        </span>
      </div>
    </div>

    <!-- Technical Breakdown (Focus / Exp / Edu) -->
    <div class="space-y-4 pt-4 border-t border-white/10 font-mono text-xs">
      <div class="space-y-1.5">
        <div class="text-[11px] text-[#f59e0b] uppercase tracking-wider font-semibold flex items-center gap-2">
          <span class="w-1.5 h-1.5 bg-[#f59e0b]"></span>
          [ TECHNICAL FOCUS ]
        </div>
        <div class="text-on-surface-variant text-sm leading-relaxed pl-3.5" id="detail-focus">Technical Design Systems / Cyber HUD Interfaces / Interaction Architecture / Figma</div>
      </div>
      <div class="space-y-1.5">
        <div class="text-[11px] text-[#f59e0b] uppercase tracking-wider font-semibold flex items-center gap-2">
          <span class="w-1.5 h-1.5 bg-[#f59e0b]"></span>
          [ REAL CONTRIBUTIONS ]
        </div>
        <div class="text-on-surface-variant text-sm leading-relaxed pl-3.5" id="detail-exp">Lead designer behind AstraTech's Cyber Blueprint interface and student project exhibition platforms.</div>
      </div>
      <div class="space-y-1.5">
        <div class="text-[11px] text-[#f59e0b] uppercase tracking-wider font-semibold flex items-center gap-2">
          <span class="w-1.5 h-1.5 bg-[#f59e0b]"></span>
          [ ACADEMIC / LAB BACKGROUND ]
        </div>
        <div class="text-on-surface-variant text-sm leading-relaxed pl-3.5" id="detail-edu">Bachelor of Design (Interaction Design)</div>
      </div>
    </div>
  </div>
</div>

<!-- DIRECT VERIFIED CHANNELS -->
<div class="pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center gap-3 font-mono text-xs" id="detail-links"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-[#f59e0b] text-black font-semibold uppercase tracking-wider hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all">[ LINKEDIN ↗ ]</a><a href="#" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-surface-container-high border border-white/10 text-on-surface font-medium uppercase tracking-wider hover:bg-surface-bright transition-colors">[ PORTFOLIO ↗ ]</a><a href="mailto:aditi@astratech.ai" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-surface-container-high border border-white/10 text-on-surface font-medium uppercase tracking-wider hover:bg-surface-bright transition-colors">[ EMAIL ↗ ]</a></div></div>
</div>
</div>
</section>
<!-- ==========================================
       03 // TYPOGRAPHIC MANIFESTO: LEARN • BUILD • SHARE
       ========================================== -->

<!-- ==========================================
       04 // WHAT HAPPENS HERE (Studio/Program Manifesto)
       ========================================== -->
<section class="w-full px-4 sm:px-8 lg:px-14 py-20 md:py-28 border-b border-white/5 bg-[#05070c]">
<div class="max-w-7xl mx-auto space-y-12">
<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
<div class="space-y-2">
<div class="inline-flex items-center gap-2 text-xs font-mono text-[#f59e0b] tracking-widest">
<span class="">[ LAB DIRECTIVE ]</span>
</div>
<h2 class="text-4xl sm:text-6xl font-['VT323'] uppercase text-white tracking-wider leading-none">WHAT HAPPENS HERE</h2>
</div>
<div class="font-mono text-xs text-on-surface-variant">
          LAB PROTOCOL // ZERO-FLUFF METHODOLOGY
        </div>
</div>
<!-- Compact Editorial Manifesto List -->
<div class="divide-y divide-white/10 border-y border-white/10 font-mono">
<div class="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] transition-colors px-2">
<div class="flex items-center gap-6">
<span class="text-2xl sm:text-3xl font-['VT323'] text-[#f59e0b]">01 // LEARN</span>
<span class="text-base sm:text-lg text-white font-medium">Understand the technology behind the tools.</span>
</div>
<span class="text-xs text-on-surface-variant">FIRST PRINCIPLES • SYSTEMS FOUNDATION</span>
</div>
<div class="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] transition-colors px-2">
<div class="flex items-center gap-6">
<span class="text-2xl sm:text-3xl font-['VT323'] text-[#f59e0b]">02 // BUILD</span>
<span class="text-base sm:text-lg text-white font-medium">Turn concepts into working projects.</span>
</div>
<span class="text-xs text-on-surface-variant">TANGIBLE CODE • REVENUE &amp; OPEN SOURCE</span>
</div>
<div class="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] transition-colors px-2">
<div class="flex items-center gap-6">
<span class="text-2xl sm:text-3xl font-['VT323'] text-[#f59e0b]">03 // SHIP</span>
<span class="text-base sm:text-lg text-white font-medium">Deploy, test, improve and show your work.</span>
</div>
<span class="text-xs text-on-surface-variant">REAL USERS • CONTINUOUS DEPLOYMENT</span>
</div>
<div class="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] transition-colors px-2">
<div class="flex items-center gap-6">
<span class="text-2xl sm:text-3xl font-['VT323'] text-[#f59e0b]">04 // CONNECT</span>
<span class="text-base sm:text-lg text-white font-medium">Learn alongside people building in the same direction.</span>
</div>
<span class="text-xs text-on-surface-variant">PEER CODE REVIEWS • CO-FOUNDER NETWORK</span>
</div>
</div>
</div>
</section>
<!-- ==========================================
       05 // FROM LEARNING TO BUILDING (Visual Progression)
       ========================================== -->

<!-- ==========================================
       06 // BUILT HERE (Real Projects as Proof)
       Horizontal Editorial Format
       ========================================== -->

<!-- ==========================================
       07 // THE PEOPLE AROUND THE CODE (Community Section)
       ========================================== -->
<section class="w-full px-4 sm:px-8 lg:px-14 py-20 md:py-28 border-b border-white/5 bg-[#080b11]/70">
<div class="max-w-7xl mx-auto space-y-12">
<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
<div class="space-y-2">
<div class="inline-flex items-center gap-2 text-xs font-mono text-[#f59e0b] tracking-widest">
<span class="">[ COLLECTIVE FORCE ]</span>
</div>
<h2 class="text-4xl sm:text-6xl font-['VT323'] uppercase text-white tracking-wider leading-none">THE PEOPLE AROUND THE CODE</h2>
</div>
<p class="font-mono text-xs sm:text-sm text-on-surface-variant max-w-md"><br></p>
</div>
<!-- Real Community Activities - Clean High-Density Strip -->
<div class="rounded-2xl border border-white/10 bg-[#080b11]/90 backdrop-blur-md overflow-hidden shadow-2xl divide-y divide-white/10 font-mono"><div class="px-6 py-3 bg-[#05070c]/80 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-white/10"><div class="flex items-center gap-2 text-[#f59e0b]"><span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping"></span><span class="font-bold tracking-widest uppercase">// COMMUNITY_OPS_TELEMETRY</span></div><div class="flex items-center gap-4 text-[11px] text-white/40"><span class="hidden sm:inline">PEER_ENGAGEMENT_V3</span><span class="text-emerald-400 font-semibold">[PROTOCOL ACTIVE]</span></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-[#05070c]/40"><div class="p-5 flex flex-col justify-between group hover:bg-white/[0.03] transition-all space-y-3"><div class="flex items-center justify-between"><span class="text-[10px] text-[#f59e0b] tracking-wider">// ACT_01</span><span class="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#f59e0b] transition-colors"></span></div><div><div class="text-xl font-['VT323'] text-white tracking-wide uppercase group-hover:text-[#f59e0b] transition-colors leading-tight">WORKSHOPS</div><div class="text-[11px] text-white/50 tracking-wide mt-1">HANDS-ON PROTOCOLS</div></div><div class="text-[10px] text-white/30 pt-2 border-t border-white/5">Bi-weekly deep dive labs</div></div><div class="p-5 flex flex-col justify-between group hover:bg-white/[0.03] transition-all space-y-3"><div class="flex items-center justify-between"><span class="text-[10px] text-[#f59e0b] tracking-wider">// ACT_02</span><span class="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#f59e0b] transition-colors"></span></div><div><div class="text-xl font-['VT323'] text-white tracking-wide uppercase group-hover:text-[#f59e0b] transition-colors leading-tight">HACKATHONS</div><div class="text-[11px] text-white/50 tracking-wide mt-1">48H SPRINT BUILDS</div></div><div class="text-[10px] text-white/30 pt-2 border-t border-white/5">Rapid prototype ship cycle</div></div><div class="p-5 flex flex-col justify-between group hover:bg-white/[0.03] transition-all space-y-3"><div class="flex items-center justify-between"><span class="text-[10px] text-[#f59e0b] tracking-wider">// ACT_03</span><span class="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#f59e0b] transition-colors"></span></div><div><div class="text-xl font-['VT323'] text-white tracking-wide uppercase group-hover:text-[#f59e0b] transition-colors leading-tight">PROJECT BUILDS</div><div class="text-[11px] text-white/50 tracking-wide mt-1">PRODUCTION CODE</div></div><div class="text-[10px] text-white/30 pt-2 border-t border-white/5">Real deployed systems</div></div><div class="p-5 flex flex-col justify-between group hover:bg-white/[0.03] transition-all space-y-3"><div class="flex items-center justify-between"><span class="text-[10px] text-[#f59e0b] tracking-wider">// ACT_04</span><span class="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#f59e0b] transition-colors"></span></div><div><div class="text-xl font-['VT323'] text-white tracking-wide uppercase group-hover:text-[#f59e0b] transition-colors leading-tight">TECH TALKS</div><div class="text-[11px] text-white/50 tracking-wide mt-1">ENGINEERING SESSIONS</div></div><div class="text-[10px] text-white/30 pt-2 border-t border-white/5">Architecture breakdowns</div></div><div class="p-5 flex flex-col justify-between group hover:bg-white/[0.03] transition-all space-y-3"><div class="flex items-center justify-between"><span class="text-[10px] text-[#f59e0b] tracking-wider">// ACT_05</span><span class="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#f59e0b] transition-colors"></span></div><div><div class="text-xl font-['VT323'] text-white tracking-wide uppercase group-hover:text-[#f59e0b] transition-colors leading-tight">PEER AUDITS</div><div class="text-[11px] text-white/50 tracking-wide mt-1">STRICT CODE REVIEWS</div></div><div class="text-[10px] text-white/30 pt-2 border-t border-white/5">Continuous PR scrutiny</div></div></div></div>
<!-- Qualitative Proof Points Strip -->

<!-- Authentic Talent Pipeline / Allocated Runtime Seats Visual Re-embedded -->
<div class="pt-4 flex justify-center items-center w-full">
<img alt="Allocated Runtime Seats" class="w-full max-w-6xl mx-auto rounded-xl border border-white/10 shadow-2xl block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl-hCUfnlwiSoSYGEj09B5iPsO3D6BAzjBag1f8KSY5ZvPj-1Cgw7GUZPv-AgTe9lbMaARdwhu5i0Li9KEi86AlJUWw3yIp4JrgAZLLlH33pBEgGmK4zLx7QXz8WAwAPL-UWH7EQTSRxaS8zuV3KB9nR_NSCFoSFiqBlEnpxNJQNkoQXhzGQ5ukCudAeCWRLiOyEqRQjvs7HJMHvm5GXR_tUPguLK3QggzwY3ubhFrBBJJOGyeQclD">
</div>
</div>
</section>
<!-- ==========================================
       08 // FINAL MINIMAL CTA & COMPACT FOOTER
       ========================================== -->
<section class="w-full px-4 sm:px-8 lg:px-14 bg-[#080b11] text-center relative overflow-hidden pt-12 md:pt-14 pb-16 md:pb-20">
<div class="max-w-4xl mx-auto space-y-6 relative z-10">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-[#f59e0b] border border-[#f59e0b]/20">
<span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping"></span>
<span class="">[ FUTURE BUILDERS ]</span>
</div>
<h2 class="text-5xl sm:text-7xl md:text-8xl font-['VT323'] uppercase text-white tracking-wider leading-none drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]">
        WHO BUILDS WHAT'S NEXT?
      </h2>
<p class="text-2xl sm:text-3xl font-mono text-[#f59e0b] tracking-wider font-semibold">
        Maybe it's you.
      </p>
<p class="text-sm sm:text-base font-mono text-on-surface-variant max-w-xl mx-auto leading-relaxed pt-1">
        Start learning. Start building.
      </p>
<div class="pt-6 flex flex-wrap items-center justify-center gap-4">
<a class="px-8 py-4 rounded-full bg-[#f59e0b] text-black font-mono font-semibold uppercase tracking-wider hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all" href="#">
          [ JOIN ASTRA TECH → ]
        </a>
<a class="px-8 py-4 rounded-full bg-surface-container-high border border-white/10 text-white font-mono font-semibold uppercase tracking-wider hover:bg-surface-bright transition-colors" href="#">
          [ EXPLORE THE WORK ↗ ]
        </a>
</div>
<div class="pt-12 font-mono text-xs text-white/40 tracking-widest uppercase">
        JAMSHEDPUR TECH CAMPUS // BATCH 2025-2026 // NODE_ACTIVE
      </div>
</div>
</section>
</div>
</main>
<!-- ==========================================
       COMPACT CLEAN FOOTER
       ========================================== -->
<footer class="w-full bg-[#040609] pt-12 pb-8 border-t border-white/5 relative z-10">
<div class="w-full px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/5">
<div class="space-y-1">
<div class="flex items-center gap-2">
<span class="font-headline font-bold text-lg text-white">ASTRATECH AI</span>
<span class="px-2 py-0.5 rounded-full bg-surface-container-high text-[10px] font-mono text-[#f59e0b] border border-[#f59e0b]/20">[LEARN. BUILD. DEPLOY.]</span>
</div>
<p class="text-xs text-on-surface-variant font-mono">
          Jamshedpur Advanced AI Lab &amp; Autonomous Engineering Node
        </p>
</div>
<!-- Explore Links -->
<div class="flex flex-wrap items-center gap-6 font-mono text-xs">
<span class="text-white/40 uppercase">EXPLORE:</span>
<a class="text-on-surface-variant hover:text-white transition-colors" data-path="about" href="#">About</a>
<a class="text-on-surface-variant hover:text-white transition-colors" data-path="courses" href="#">Courses</a>
<a class="text-on-surface-variant hover:text-white transition-colors" data-path="projects" href="#">Projects</a>
</div>
<!-- Connect Links -->
<div class="flex flex-wrap items-center gap-6 font-mono text-xs">
<span class="text-white/40 uppercase">CONNECT:</span>
<a class="text-on-surface-variant hover:text-[#f59e0b] transition-colors" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">LinkedIn</a>
<a class="text-on-surface-variant hover:text-[#f59e0b] transition-colors" href="https://github.com" rel="noopener noreferrer" target="_blank">GitHub</a>
<a class="text-on-surface-variant hover:text-[#f59e0b] transition-colors" href="#" rel="noopener noreferrer">WhatsApp / Community</a>
</div>
</div>
<div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-on-surface-variant">
<div class="">
        © AstraTech AI — Jamshedpur, India.
      </div>
<div class="flex items-center gap-3">
<span class="">COORDS: 22.8046° N, 86.2029° E</span>
<span class="">•</span>
<span class="text-[#f59e0b]">STATUS: NOMINAL</span>
</div>
</div>
</div>
</footer>
<!-- SCRIPT: MASTER-DETAIL ROSTER SELECTOR -->
<script>
  const membersData = {
    aniket: {
      tag: "CORE / 01",
      name: "ANIKET KUMAR",
      role: "FOUNDER & DIRECTOR",
      reticleTop: "[01_DIR_HQ]",
      reticleBottom: "JH_22.8046",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS3gTStPX3hkwHwR3zB05n4anK2xpLPpNAXp_LWAIKavuhYnEtNEQoeT1czX_esMlR90Wj8VaM51xaV-CQjR52_cfNUn_eNXc3lSOBUtxXWVWXxD5H5s5VbRVaePteRHPlUcInuwf8OP28yl8BhswWxN-2UMcFAy9djrMU0xlYqabDhs4HzsYhnsVh6S3baQ4KscwIeLlGkmvVhkaBoWc_N_BEGMMaUszsNhLxK-Q",
      bio: "Leading AstraTech's mission to engineer high-velocity technology talent and autonomous systems infrastructure from Jamshedpur, Eastern India.",
      focus: "Technology / Education / Innovation / Distributed Systems",
      metaFocus: "SYSTEMS • STRATEGY • AI",
      metaBuilding: "TALENT PIPELINE",
      metaBased: "JAMSHEDPUR",
      experience: "Architecting cloud services, distributed telemetry pipelines, and engineering curriculum focused on zero-fluff, production-grade systems deployment.",
      education: "Computer Science & Engineering",
      links: [
        { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
        { label: "[ EMAIL ↗ ]", url: "mailto:aniket@astratech.ai", primary: false },
        { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false }
      ]
    },
    aman: {
      tag: "CORE / 02",
      name: "AMAN SHARMA",
      role: "LEAD FULL-STACK ENGINEER",
      reticleTop: "[02_FS_NODE]",
      reticleBottom: "JH_TELEMETRY",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjfSoo-zcPV5lDko0aXoVYKkSUoRlZDANKGfxyV3y746LsSVEuKn7pipn1yKFakFD_zg908RqnC8UjGi0bzZnSTJuuIuxcOKOcDGHWb-6doPXjEH1F6cVOpVZXDfZ6y7tq1oHyGhQIAL34mnQLBujodJ357I18K5ywWujGlESAKlzXOqodDhHm_BqsG-U-ZNbWrZIZGchwcKwHGIk2iZskTd0HwJrt7CuT8xfcQPY",
      bio: "Specializing in real-time telemetry architectures, reactive web nodes, and municipal sensor data pipelines across the eastern industrial corridor.",
      focus: "Full-Stack Architecture / Reactive Nodes / Municipal Sensors / Go / TypeScript",
      metaFocus: "WEB • AI • PRODUCT",
      metaBuilding: "REAL PROJECTS",
      metaBased: "JAMSHEDPUR",
      experience: "Built the Jamshedpur Municipal Sensor Telemetry Hub; oversees full-stack cohort delivery and Git review sprints.",
      education: "B.Tech in Information Technology",
      links: [
        { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
        { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
        { label: "[ EMAIL ↗ ]", url: "mailto:aman@astratech.ai", primary: false }
      ]
    },
    priya: {
      tag: "CORE / 03",
      name: "PRIYA KUMARI",
      role: "AI / ML RESEARCH LEAD",
      reticleTop: "[03_NEURAL_RAG]",
      reticleBottom: "JH_MODEL_LAB",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tJLiPWfBQnN-I28LsGVZIavNBI1FaymXo9wxBHLqf6D46Hces6DdDGdYLfoGVarnZu0N-X2vNVDYeMIf_KmXT1ZJlKdgDHD5P015hm5hXss93LrehnmJxftEAxYx8FmzD7ytLaw2wd4S0arLIfdFV2dSbc1DudNknXB2aM6NkBPZBTUasvRnUgXwiwd1jELeB96NIyZwbN_v4ZG_PhWG9nUw_q0_7MP5EBDJREw",
      bio: "Focusing on localized retrieval-augmented generation models, semantic pipelines, and applied deep learning systems running edge inferences.",
      focus: "Applied Deep Learning / RAG Architectures / Semantic Vectorization / PyTorch",
      metaFocus: "LLMs • RAG • INFERENCE",
      metaBuilding: "ASTRA-AGENT AI",
      metaBased: "JAMSHEDPUR",
      experience: "Engineered Astra-Agent legal parsing models; leads neural engineering labs and model benchmark testing on local clusters.",
      education: "M.Tech in Artificial Intelligence",
      links: [
        { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
        { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
        { label: "[ EMAIL ↗ ]", url: "mailto:priya@astratech.ai", primary: false }
      ]
    },
    rohan: {
      tag: "CORE / 04",
      name: "ROHAN GUPTA",
      role: "SYSTEMS & DEVOPS ARCHITECT",
      reticleTop: "[04_INFRA_SEC]",
      reticleBottom: "JH_CONTAINER_04",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLoiVDZWcMnkw55Pl77vl9GBRyhG5DbRVqszE6ui0-4uzmlMRyBO6wJWQvSbq2f62GwyffI02g0EHD1ngWOCBEpKb7_62nL9W1KSoF7yyS87IAqCl_vARuxgp5OkO9HlOyr21E71rj1l2AsQ6EmPDLs9XzKZtAmXdbHEsC5B6XBmyMEa4wmEZAdvvj2IwGRAH_kyXjUf10EzI9kzADMfzhzh6EAEeBGLruIPjdfpg",
      bio: "Designing autonomous CI/CD pipelines, container orchestration, and AST static security analysis tools for physical and cloud clusters.",
      focus: "Linux Kernel / Kubernetes Orchestration / AST Security / Zero-Trust Pipelines",
      metaFocus: "INFRA • CLOUD • DEVOPS",
      metaBuilding: "DEVFLOW ENGINE",
      metaBased: "JAMSHEDPUR",
      experience: "Architect of DevFlow code review engine; manages production telemetry nodes and zero-trust lab security.",
      education: "B.Tech in Computer Science",
      links: [
        { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
        { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
        { label: "[ EMAIL ↗ ]", url: "mailto:rohan@astratech.ai", primary: false }
      ]
    },
    aditi: {
      tag: "CORE / 05",
      name: "ADITI ROY",
      role: "PRODUCT DESIGNER & UI/UX LEAD",
      reticleTop: "[05_HUD_DS]",
      reticleBottom: "JH_UI_STUDIO",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEGnK_uPNrSGDMCnP8mvfggV3tZibKsNg0mGBtcW6ljELgYeGH5MfhY-fs7z5CxMvtIz9H4eZiihf6mOG1o5vj7LHNFkIQIxbyUXNkjNCAmoZfCLr5ZyvbeSyfFlcgNE_mUhoNpg0khksh-oU72C9r4Iktk5Pe98jfnXki-m7vrM_UzqLPkZDW_zis4nlutZFrm0LdeT-OUk8SoL9Lx0G9HIsjh-RnPMFYawyRs3U",
      bio: "Crafting technical design systems, high-density HUD interfaces, and accessible developer tooling experiences for student cohort platforms.",
      focus: "Technical Design Systems / Cyber HUD Interfaces / Interaction Architecture / Figma",
      metaFocus: "SYSTEM DESIGN • UI/UX",
      metaBuilding: "ASTRA HUD SPEC",
      metaBased: "JAMSHEDPUR",
      experience: "Lead designer behind AstraTech's Cyber Blueprint interface and student project exhibition platforms.",
      education: "Bachelor of Design (Interaction Design)",
      links: [
        { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
        { label: "[ PORTFOLIO ↗ ]", url: "#", primary: false },
        { label: "[ EMAIL ↗ ]", url: "mailto:aditi@astratech.ai", primary: false }
      ]
    },
    vikram: {
      tag: "CORE / 06",
      name: "VIKRAM SINGH",
      role: "SYSTEMS & CLOUD ENGINEER",
      reticleTop: "[06_CLOUD_NODE]",
      reticleBottom: "JH_INFRA_06",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjfSoo-zcPV5lDko0aXoVYKkSUoRlZDANKGfxyV3y746LsSVEuKn7pipn1yKFakFD_zg908RqnC8UjGi0bzZnSTJuuIuxcOKOcDGHWb-6doPXjEH1F6cVOpVZXDfZ6y7tq1oHyGhQIAL34mnQLBujodJ357I18K5ywWujGlESAKlzXOqodDhHm_BqsG-U-ZNbWrZIZGchwcKwHGIk2iZskTd0HwJrt7CuT8xfcQPY",
      bio: "Managing localized multi-tenant cluster compute nodes, edge daemon synchronization, and distributed memory caches.",
      focus: "Distributed Cache / Docker Compose / Bare Metal Linux / Rust",
      metaFocus: "CLUSTERS • DISTRIBUTED",
      metaBuilding: "HYBRID COMPUTE",
      metaBased: "JAMSHEDPUR",
      experience: "Spearheaded local cluster hardware setup with custom kernel parameters for low-latency batch processing.",
      education: "B.Tech in Computer Engineering",
      links: [
        { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
        { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
        { label: "[ EMAIL ↗ ]", url: "mailto:vikram@astratech.ai", primary: false }
      ]
    },
    rahul: {
      tag: "CORE / 07",
      name: "RAHUL VERMA",
      role: "COMPUTER VISION & EDGE AI",
      reticleTop: "[07_CV_EDGE]",
      reticleBottom: "JH_CAMERA_NET",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLoiVDZWcMnkw55Pl77vl9GBRyhG5DbRVqszE6ui0-4uzmlMRyBO6wJWQvSbq2f62GwyffI02g0EHD1ngWOCBEpKb7_62nL9W1KSoF7yyS87IAqCl_vARuxgp5OkO9HlOyr21E71rj1l2AsQ6EmPDLs9XzKZtAmXdbHEsC5B6XBmyMEa4wmEZAdvvj2IwGRAH_kyXjUf10EzI9kzADMfzhzh6EAEeBGLruIPjdfpg",
      bio: "Deploying quantized object detection models, optical flow algorithms, and embedded camera telemetry across field robotics nodes.",
      focus: "Edge AI / TensorRT / OpenCV / PyTorch Mobile / C++",
      metaFocus: "VISION • TENSORRT",
      metaBuilding: "EDGE RETINEX",
      metaBased: "JAMSHEDPUR",
      experience: "Engineered real-time defect inspection prototype for Eastern industrial metal stamping lines.",
      education: "B.Tech in Electronics & Communication",
      links: [
        { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
        { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
        { label: "[ EMAIL ↗ ]", url: "mailto:rahul@astratech.ai", primary: false }
      ]
    },
    sanya: {
      tag: "CORE / 08",
      name: "SANYA SEN",
      role: "DATA & NEURAL PIPELINES",
      reticleTop: "[08_NEURAL_PIPE]",
      reticleBottom: "JH_DATA_LAKE",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tJLiPWfBQnN-I28LsGVZIavNBI1FaymXo9wxBHLqf6D46Hces6DdDGdYLfoGVarnZu0N-X2vNVDYeMIf_KmXT1ZJlKdgDHD5P015hm5hXss93LrehnmJxftEAxYx8FmzD7ytLaw2wd4S0arLIfdFV2dSbc1DudNknXB2aM6NkBPZBTUasvRnUgXwiwd1jELeB96NIyZwbN_v4ZG_PhWG9nUw_q0_7MP5EBDJREw",
      bio: "Building high-throughput data ingest pipelines, feature stores, and automated model re-training orchestration workflows.",
      focus: "Kafka / Apache Spark / Feature Engineering / Parquet Storage / Python",
      metaFocus: "DATA PIPELINES • KAFKA",
      metaBuilding: "FEATURE STREAM",
      metaBased: "JAMSHEDPUR",
      experience: "Architected asynchronous streaming ingestion for 200,000+ daily telemetry packets from municipal sensors.",
      education: "B.Tech in Data Science & Engineering",
      links: [
        { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
        { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
        { label: "[ EMAIL ↗ ]", url: "mailto:sanya@astratech.ai", primary: false }
      ]
    },
    arjun: {
      tag: "CORE / 09",
      name: "ARJUN NAIR",
      role: "CYBERSECURITY & ZERO-TRUST ARCHITECT",
      reticleTop: "[09_ZERO_TRUST]",
      reticleBottom: "JH_SEC_GATE",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS3gTStPX3hkwHwR3zB05n4anK2xpLPpNAXp_LWAIKavuhYnEtNEQoeT1czX_esMlR90Wj8VaM51xaV-CQjR52_cfNUn_eNXc3lSOBUtxXWVWXxD5H5s5VbRVaePteRHPlUcInuwf8OP28yl8BhswWxN-2UMcFAy9djrMU0xlYqabDhs4HzsYhnsVh6S3baQ4KscwIeLlGkmvVhkaBoWc_N_BEGMMaUszsNhLxK-Q",
      bio: "Hardening system perimeters, audit daemon logging, and mutual TLS token verification for distributed lab student microservices.",
      focus: "Zero-Trust Architecture / Cryptographic Verification / mTLS / SIEM / Rust",
      metaFocus: "CYBERSEC • ZERO-TRUST",
      metaBuilding: "AUTH PROTOCOL L5",
      metaBased: "JAMSHEDPUR",
      experience: "Authored AstraTech Protocol L5 access policy and sandboxed runtime for student submitted microservice test suites.",
      education: "B.Tech in Information Security",
      links: [
        { label: "[ LINKEDIN ↗ ]", url: "https://linkedin.com", primary: true },
        { label: "[ GITHUB ↗ ]", url: "https://github.com", primary: false },
        { label: "[ EMAIL ↗ ]", url: "mailto:arjun@astratech.ai", primary: false }
      ]
    }
  };

  function selectMember(key) {
    const data = membersData[key];
    if (!data) return;

    const buttons = document.querySelectorAll('#roster-list button');
    buttons.forEach(btn => {
      const isTarget = btn.getAttribute('data-member') === key;
      const statusTag = btn.querySelector('.status-tag');
      if (isTarget) {
        btn.className = 'w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group bg-[#f59e0b]/10 border-l-2 border-[#f59e0b]';
        if (statusTag) statusTag.classList.remove('hidden');
      } else {
        btn.className = 'w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group hover:bg-white/[0.03] border-l-2 border-transparent';
        if (statusTag) statusTag.classList.add('hidden');
      }
    });

    const display = document.getElementById('profile-display');
    if (display) {
      display.classList.add('opacity-40');
      setTimeout(() => {
        const tagEl = document.getElementById('detail-tag');
        const nameEl = document.getElementById('detail-name');
        const roleEl = document.getElementById('detail-role');
        const bioEl = document.getElementById('detail-bio');
        const focusEl = document.getElementById('detail-focus');
        const expEl = document.getElementById('detail-exp');
        const eduEl = document.getElementById('detail-edu');
        const avatarEl = document.getElementById('detail-avatar');
        const reticleTopEl = document.getElementById('detail-reticle-top');
        const reticleBottomEl = document.getElementById('detail-reticle-bottom');
        const linksEl = document.getElementById('detail-links');
        const metaFocusEl = document.getElementById('meta-focus');
        const metaBuildingEl = document.getElementById('meta-building');
        const metaBasedEl = document.getElementById('meta-based');

        if (tagEl) tagEl.textContent = `[ ${data.tag} ]`;
        if (nameEl) nameEl.textContent = data.name;
        if (roleEl) roleEl.textContent = data.role;
        if (bioEl) bioEl.textContent = data.bio;
        if (focusEl) focusEl.textContent = data.focus;
        if (expEl) expEl.textContent = data.experience;
        if (eduEl) eduEl.textContent = data.education;
        if (metaFocusEl) metaFocusEl.textContent = data.metaFocus || "WEB • AI • PRODUCT";
        if (metaBuildingEl) metaBuildingEl.textContent = data.metaBuilding || "REAL PROJECTS";
        if (metaBasedEl) metaBasedEl.textContent = data.metaBased || "JAMSHEDPUR";
        if (avatarEl) {
          avatarEl.src = data.avatar;
          avatarEl.alt = data.name;
        }
        if (reticleTopEl) reticleTopEl.textContent = data.reticleTop;
        if (reticleBottomEl) reticleBottomEl.textContent = data.reticleBottom;

        if (linksEl) {
          linksEl.innerHTML = data.links.map(l => {
            if (l.primary) {
              return `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-[#f59e0b] text-black font-semibold uppercase tracking-wider hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all">${l.label}</a>`;
            } else {
              return `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-surface-container-high border border-white/10 text-on-surface font-medium uppercase tracking-wider hover:bg-surface-bright transition-colors">${l.label}</a>`;
            }
          }).join('');
        }

        display.classList.remove('opacity-40');
      }, 150);
    }

    if (history.replaceState) {
      history.replaceState(null, null, `#member=${key}`);
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash && hash.includes('member=')) {
      const memberKey = hash.split('member=')[1];
      if (membersData[memberKey]) {
        selectMember(memberKey);
      }
    }
  });
</script>


</body></html>