import React from "react";
import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-white/10 bg-[#0A0E17] p-6 sm:p-8 hover:border-amber-500/40 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[#F5A400] font-bold">[{project.number}]</span>
            <span className="text-white/20">|</span>
            <span className="text-slate-400">{project.cohort}</span>
          </div>

          <Link href={`/projects/${project.slug}`}>
            <h3 className="pixel-heading text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight hover:text-[#F5A400] transition-colors">
              {project.title}
            </h3>
          </Link>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {project.description}
          </p>

          <div className="py-3 border-y border-white/[0.08] space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 uppercase">BUILT BY</span>
              <span className="text-white font-medium">{project.builtBy}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 uppercase">PROGRAM</span>
              <span className="text-[#F5A400] font-medium">{project.program}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 uppercase">TECH</span>
              <span className="text-slate-300 font-medium">
                {project.techStack.join(" · ")}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-[#f59e0b] hover:bg-[#d97706] text-black font-mono text-xs font-bold tracking-wider uppercase transition-all"
            >
              <span>[ VIEW ARCHITECTURE → ]</span>
            </Link>
          </div>
        </div>

        {/* Right Preview Image */}
        <div className="lg:col-span-5 relative aspect-video sm:aspect-4/3 rounded border border-white/10 overflow-hidden bg-black">
          {project.image && (
            <img
              src={project.image}
              alt={project.alt || project.title}
              className="w-full h-full object-cover filter contrast-105 saturate-90 hover:scale-105 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between font-mono text-[10px]">
            <span className="px-2 py-0.5 bg-black/80 text-hud-amber border border-amber-500/40 rounded">
              NODE_TELEMETRY: VERIFIED
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
