import React from "react";
import Link from "next/link";
import { Course } from "@/types/course";
import Container from "@/components/common/Container";

interface CourseDetailsProps {
  course: Course;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <div className="w-full py-12">
      <Container>
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-8 border-b border-white/10 pb-4">
          <Link href="/" className="hover:text-hud-amber transition-colors">
            {"// HOME"}
          </Link>
          <span className="text-slate-600">&gt;</span>
          <Link href="/courses" className="hover:text-hud-amber transition-colors">
            {"// COURSES"}
          </Link>
          <span className="text-slate-600">&gt;</span>
          <span className="text-hud-amber font-semibold">{course.code}</span>
        </div>

        {/* Main Course Header */}
        <div className="corner-bracket bg-surface-card border border-amber-500/30 p-8 md:p-12 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#F5A400]/10 border border-[#F5A400]/40 text-[#F5A400] font-mono text-xs font-bold">
                {course.code}
              </span>
              <span className="text-xs font-mono text-slate-400">
                CATEGORY: {course.category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#10b981]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>{course.status}</span>
            </div>
          </div>

          <h1 className="pixel-heading text-4xl sm:text-6xl text-white font-normal uppercase tracking-wide mb-6">
            {course.title}
          </h1>

          <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            {course.description}
          </p>

          {/* Quick Telemetry Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6 font-mono text-xs">
            <div className="p-3 bg-black/40 border border-slate-800 rounded">
              <span className="text-slate-500 block mb-1">DURATION</span>
              <span className="text-white font-bold">{course.duration}</span>
            </div>
            <div className="p-3 bg-black/40 border border-slate-800 rounded">
              <span className="text-slate-500 block mb-1">SKILL LEVEL</span>
              <span className="text-hud-amber font-bold">{course.level}</span>
            </div>
            <div className="p-3 bg-black/40 border border-slate-800 rounded">
              <span className="text-slate-500 block mb-1">METHODOLOGY</span>
              <span className="text-emerald-400 font-bold">Git-First PRs</span>
            </div>
            <div className="p-3 bg-black/40 border border-slate-800 rounded">
              <span className="text-slate-500 block mb-1">CAMPUS HUB</span>
              <span className="text-hud-cyan font-bold">Jamshedpur Lab</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-hud-amber text-black font-mono text-xs font-bold uppercase rounded hover:bg-hud-amber-light shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all flex items-center gap-2"
            >
              <span>[ENROLL_IN_TRACK]</span>
              <span className="material-symbols-outlined text-[16px]">bolt</span>
            </Link>
            <Link
              href="/courses"
              className="px-6 py-3.5 bg-black/50 border border-slate-700 text-slate-300 hover:border-hud-amber hover:text-hud-amber font-mono text-xs uppercase transition-all"
            >
              [BACK_TO_ALL_COURSES]
            </Link>
          </div>
        </div>

        {/* Modules & Curriculum Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
              <span>{"// SYLLABUS_DECONSTRUCTION"}</span>
              <div className="h-px flex-1 bg-amber-500/20" />
            </div>

            <h2 className="font-mono text-2xl font-bold text-white uppercase tracking-tight mb-4">
              TECHNICAL ROADMAP &amp; MODULES
            </h2>

            <div className="space-y-4">
              {course.modules.map((mod, idx) => (
                <div
                  key={mod.title}
                  className="corner-bracket bg-surface-card border border-slate-800 p-6"
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="text-hud-amber font-bold">
                      STAGE 0{idx + 1}
                    </span>
                    <span className="text-slate-500">[PRODUCTION_READY]</span>
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white mb-4">
                    {mod.title}
                  </h3>
                  <ul className="space-y-2 font-mono text-xs text-slate-300">
                    {mod.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span className="text-hud-green font-bold">✔</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Rail: Prerequisites & Outcomes */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack */}
            <div className="corner-bracket bg-surface-card border border-slate-800 p-6 font-mono text-xs">
              <span className="text-hud-amber font-bold block mb-3 uppercase">
                [TECHNOLOGY_STACK]
              </span>
              <div className="flex flex-wrap gap-2">
                {course.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-black/60 border border-slate-800 rounded text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="corner-bracket bg-surface-card border border-slate-800 p-6 font-mono text-xs">
              <span className="text-hud-amber font-bold block mb-3 uppercase">
                [ADMISSION_PREREQUISITES]
              </span>
              <ul className="space-y-2 text-slate-300">
                {course.prerequisites.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">&gt;</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Outcomes */}
            <div className="corner-bracket bg-surface-card border border-slate-800 p-6 font-mono text-xs">
              <span className="text-hud-green font-bold block mb-3 uppercase">
                [VERIFIABLE_OUTCOMES]
              </span>
              <ul className="space-y-2.5 text-slate-300">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">●</span>
                    <span className="leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
