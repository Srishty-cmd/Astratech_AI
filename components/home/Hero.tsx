import React from "react";
import Link from "next/link";
import { heroMetrics } from "@/data/site";
import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section className="relative w-full pt-10 pb-20 border-b border-border-hud/40 overflow-hidden">
      <Container>
        {/* Schematic Top Telemetry Header */}
        <div className="flex items-center justify-between mb-4 text-[11px] font-mono text-amber-500/60 border-b border-amber-500/20 pb-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-hud-amber" />
            <span>HUD_STAGE: HERO_INITIALIZE // TARGET: REGIONAL TECH TALENT</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>ARCH: SEC_V4.2</span>
            <span>ZONE: JHARKHAND</span>
          </div>
        </div>

        {/* Main Title Block with Terminal Bracket HUD */}
        <div className="corner-bracket bg-surface-card/60 p-6 md:p-10 border border-amber-500/30 backdrop-blur-sm relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-hud-green/10 border border-hud-green text-hud-green tracking-widest">
              [ONLINE // ACTIVE COHORT ENROLLMENT]
            </span>
            <span className="text-xs font-mono text-slate-500">EST_2024</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-mono text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.1] mb-4">
              BUILDING THE NEXT GENERATION OF{" "}
              <span className="text-hud-amber drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                &lt;TECH TALENT/&gt;
              </span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
              AstraTech AI is a technology education and developer community in
              Jamshedpur focused on practical learning, production-grade repositories,
              real projects, innovation, and first-principles engineering thinking.
            </p>
          </div>

          {/* Action Cluster */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/courses"
              className="px-6 py-3 rounded font-mono text-xs uppercase font-bold bg-hud-amber text-black hover:bg-hud-amber-light hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all flex items-center gap-2"
            >
              <span>&gt; EXPLORE COURSES</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_downward
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded font-mono text-xs uppercase font-semibold bg-black/50 border border-slate-700 text-slate-200 hover:border-hud-amber hover:text-hud-amber transition-all flex items-center gap-2"
            >
              <span>[JOIN_ASTRATECH]</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-amber-500/20 pt-6">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3 bg-black/40 border border-slate-800 rounded"
              >
                <div
                  className={`font-mono text-xl sm:text-2xl font-bold ${metric.highlight || "text-white"}`}
                >
                  {metric.value}
                </div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TERMINAL / HARDWARE SPLIT HUD PANEL */}
        <div className="mt-8 rounded border border-slate-800 bg-[#0a0d14] overflow-hidden shadow-2xl">
          <div className="bg-[#111624] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-hud-amber font-semibold">
                astratech-core-engine@node-01:~$
              </span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">
              [SHELL: BASH v5.2]
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 font-mono text-xs">
            <div className="lg:col-span-7 p-5 bg-black/70 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-2">
              <p className="text-hud-amber">
                <span className="text-white">$</span> astra init
                --stack=production-ai-fullstack --loc=jamshedpur
              </p>
              <p className="text-slate-400">
                &gt; Initializing AstraTech developer kernel...
              </p>
              <p className="text-hud-green">
                <span className="text-emerald-400">✔</span> Compiling modules:
                [PyTorch, FastAPI, Next.js 15, Docker, PostgreSQL]
              </p>
              <p className="text-slate-300">
                <span className="text-hud-amber">✔</span> Continuous integration
                tests: AST Code Analysers ENABLED
              </p>
              <p className="text-slate-300">
                <span className="text-hud-cyan">✔</span> Local civic dataset
                connected: Jamshedpur Municipal Telemetry
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-hud-amber">
                <span>[KERNEL_STATUS: ACTIVE]</span>
                <span className="text-hud-green animate-pulse">
                  ● PORT 3000 ONLINE
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[220px] bg-slate-950">
              <div
                className="absolute inset-0 bg-cover bg-center filter saturate-75 brightness-90"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAa1tj49ijDNKwHDA1_ytoeS-avY5sKjtGw4Pf8p57DtCMr2rqzd_NKZo-xlBXYCpxfy98wS0hfjeG7V9-92HPk0UfA0DlXFgUbuOwUtlbMscvxR8kxqXg1xzCibC7ECUut-G4tpZGc_9m8jhABoFkyYhU1rNwlyJU-aguKvnCEu1mcjB1XL4cBQApedqQh3VYiZgmUPMMsqme9jDiGT0TGWVtrNWTJcWmPlyFi70rn13bRq6mUKK-K")',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
                <span className="px-2 py-0.5 bg-black/80 text-hud-amber border border-amber-500/40 rounded">
                  [ASTRATECH HARDWARE &amp; AI LAB]
                </span>
                <span className="text-slate-300 bg-black/80 px-2 py-0.5 rounded">
                  JSR_OFFLINE_CAMPUS
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
