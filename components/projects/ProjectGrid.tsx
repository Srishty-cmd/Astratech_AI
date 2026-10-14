import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Container from "@/components/common/Container";

export default function ProjectGrid() {
  const flagshipProjects = projects.slice(0, 3);
  const communityProjects = projects.slice(3);

  return (
    <div className="w-full">
      {/* PROJECTS HERO */}
      <section className="w-full pt-16 pb-14 border-b border-white/10 relative">
        <Container>
          <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-3">
            <span>{"// 01_CAPSTONES_SHOWCASE"}</span>
            <div className="h-px flex-1 max-w-xs bg-amber-500/20" />
            <span className="text-slate-500">[GIT_COMMITS: PUBLIC]</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="pixel-heading text-4xl sm:text-6xl text-white font-normal uppercase tracking-wider mb-4 leading-tight">
              BUILT BY ASTRATECH
            </h1>
            <p className="text-slate-400 font-mono text-sm sm:text-base leading-relaxed max-w-2xl">
              Real software systems designed, developed, containerized, and deployed
              by AstraTech AI students and developer collective in Jamshedpur.
            </p>
          </div>
        </Container>
      </section>

      {/* FLAGSHIP CAPSTONES */}
      <section className="w-full py-16 border-b border-white/10">
        <Container>
          <div className="mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
              <span>{"// 02_FLAGSHIP_DEPLOYS"}</span>
              <div className="h-px flex-1 max-w-xs bg-amber-500/20" />
            </div>
            <h2 className="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
              WHAT THEY&apos;RE BUILDING.
            </h2>
          </div>

          <div className="space-y-8">
            {flagshipProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* COMMUNITY PROJECTS */}
      {communityProjects.length > 0 && (
        <section className="w-full py-16 border-b border-white/10 bg-[#06090e]">
          <Container>
            <div className="mb-12">
              <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
                <span>{"// 03_COMMUNITY_NODES"}</span>
                <div className="h-px flex-1 max-w-xs bg-amber-500/20" />
              </div>
              <h2 className="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
                MORE FROM THE COMMUNITY.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityProjects.map((project) => (
                <div
                  key={project.slug}
                  className="corner-bracket bg-surface-card border border-white/10 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded overflow-hidden bg-black mb-4 border border-white/10">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover filter contrast-105"
                        />
                      )}
                      <div className="absolute top-2 left-2 bg-black/80 font-mono text-[10px] text-hud-amber px-2 py-0.5 border border-amber-500/30">
                        {project.number}
                      </div>
                    </div>

                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="pixel-heading text-2xl text-white font-normal uppercase hover:text-hud-amber transition-colors">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-black/60 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-hud-amber font-mono text-xs font-bold hover:underline flex items-center gap-1"
                    >
                      <span>[VIEW SPECIFICATION]</span>
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CALL TO ACTION // YOUR BUILD COULD BE NEXT */}
      <section className="w-full py-20 border-b border-white/10 text-center">
        <Container size="narrow">
          <div className="inline-block font-mono text-xs text-hud-amber bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30 mb-4">
            [COHORT_2026 // OPEN_ADMISSIONS]
          </div>
          <h2 className="pixel-heading text-4xl sm:text-5xl text-white font-normal uppercase tracking-wide mb-4">
            YOUR BUILD COULD BE NEXT.
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-xl mx-auto mb-8">
            Join the developer laboratory where your code is deployed to real public URLs, evaluated by engineers, and contributed to the regional tech ecosystem.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-hud-amber text-black font-mono text-xs font-bold uppercase rounded hover:bg-hud-amber-light shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
            >
              &gt; APPLY TO BUILD
            </Link>
            <Link
              href="/courses"
              className="px-6 py-3.5 bg-black/50 border border-slate-700 text-slate-300 hover:border-hud-amber hover:text-hud-amber font-mono text-xs uppercase transition-all"
            >
              [ EXPLORE COURSES ]
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
