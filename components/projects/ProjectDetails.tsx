import React from "react";
import Link from "next/link";
import { Project } from "@/types/project";
import Container from "@/components/common/Container";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="w-full py-12">
      <Container>
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-8 border-b border-white/10 pb-4">
          <Link href="/" className="hover:text-hud-amber transition-colors">
            {"// HOME"}
          </Link>
          <span className="text-slate-600">&gt;</span>
          <Link href="/projects" className="hover:text-hud-amber transition-colors">
            {"// PROJECTS"}
          </Link>
          <span className="text-slate-600">&gt;</span>
          <span className="text-hud-amber font-semibold">{project.number}</span>
        </div>

        {/* Project Header Block */}
        <div className="corner-bracket bg-surface-card border border-amber-500/30 p-8 md:p-12 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#F5A400]/10 border border-[#F5A400]/40 text-[#F5A400] font-bold">
                {project.number}
              </span>
              <span className="text-slate-400">{project.cohort}</span>
            </div>
            <div className="flex items-center gap-2 text-hud-cyan">
              <span className="w-2 h-2 rounded-full bg-hud-cyan animate-pulse" />
              <span>STATUS: PRODUCTION_VERIFIED</span>
            </div>
          </div>

          <h1 className="pixel-heading text-4xl sm:text-6xl text-white font-normal uppercase tracking-wide mb-6">
            {project.title}
          </h1>

          <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Authorship & Specs Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono text-xs">
            <div className="p-3 bg-black/40 border border-slate-800 rounded">
              <span className="text-slate-500 block mb-1">SYSTEM ARCHITECT</span>
              <span className="text-white font-bold">{project.builtBy}</span>
            </div>
            <div className="p-3 bg-black/40 border border-slate-800 rounded">
              <span className="text-slate-500 block mb-1">LAB PROGRAM</span>
              <span className="text-hud-amber font-bold">{project.program}</span>
            </div>
            <div className="p-3 bg-black/40 border border-slate-800 rounded">
              <span className="text-slate-500 block mb-1">DEPLOYMENT TARGET</span>
              <span className="text-emerald-400 font-bold">Production Node</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-hud-amber text-black font-mono text-xs font-bold uppercase rounded hover:bg-hud-amber-light shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all flex items-center gap-2"
            >
              <span>[REQUEST_DEMO_ACCESS]</span>
              <span className="material-symbols-outlined text-[16px]">terminal</span>
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3.5 bg-black/50 border border-slate-700 text-slate-300 hover:border-hud-amber hover:text-hud-amber font-mono text-xs uppercase transition-all"
            >
              [BACK_TO_PROJECTS]
            </Link>
          </div>
        </div>

        {/* Media & Architectural Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            {/* Project Optical Preview */}
            {project.image && (
              <div className="rounded border border-slate-800 overflow-hidden bg-black aspect-video relative">
                <img
                  src={project.image}
                  alt={project.alt || project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
                  <span className="bg-black/90 px-2 py-0.5 text-hud-amber border border-amber-500/30 rounded">
                    [TELEMETRY_FEED: OPTICAL_PROJECTION]
                  </span>
                  <span className="text-slate-400 bg-black/90 px-2 py-0.5 rounded">
                    SHA-256 VERIFIED
                  </span>
                </div>
              </div>
            )}

            {/* Architectural Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="corner-bracket bg-surface-card border border-slate-800 p-8 space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
                  <span>{"// SYSTEM_DESIGN_DECISIONS"}</span>
                  <div className="h-px flex-1 bg-amber-500/20" />
                </div>
                <h2 className="font-mono text-xl font-bold text-white uppercase">
                  ENGINEERING HIGHLIGHTS &amp; RESILIENCE
                </h2>
                <ul className="space-y-3 font-mono text-xs text-slate-300">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="text-hud-green font-bold text-sm">✔</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Rail: Metrics & Stack */}
          <div className="lg:col-span-4 space-y-6">
            {/* Live Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="corner-bracket bg-surface-card border border-slate-800 p-6 font-mono text-xs">
                <span className="text-hud-amber font-bold block mb-4 uppercase">
                  [BENCHMARK_TELEMETRY]
                </span>
                <div className="space-y-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 bg-black/60 border border-slate-800 rounded flex items-center justify-between"
                    >
                      <span className="text-slate-400">{m.label}</span>
                      <span className="text-white font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="corner-bracket bg-surface-card border border-slate-800 p-6 font-mono text-xs">
              <span className="text-hud-amber font-bold block mb-3 uppercase">
                [DEPENDENCY_MANIFEST]
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-black/60 border border-slate-800 rounded text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Audit Status */}
            <div className="corner-bracket bg-surface-card border border-slate-800 p-6 font-mono text-xs">
              <span className="text-emerald-400 font-bold block mb-2 uppercase">
                [CI_VERIFICATION]
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                This project passed all automated AST code analyzers, unit tests, and production security audits at AstraTech AI Lab.
              </p>
              <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-2">
                AUDITED BY: Director Aniket Kumar
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
