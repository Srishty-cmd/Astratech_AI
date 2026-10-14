import React from "react";
import Link from "next/link";
import { missionPillars } from "@/data/site";
import Container from "@/components/common/Container";

export default function AboutPreview() {
  return (
    <>
      {/* WHO WE ARE // PILLARS SECTION */}
      <section className="w-full py-20 border-b border-border-hud/30 relative">
        <Container>
          <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-3">
            <span>{"// 01_MISSION_MATRIX"}</span>
            <div className="h-px flex-1 bg-amber-500/20" />
            <span className="text-slate-500">SCHEMATIC: IDENT-01</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-5">
              <h2 className="font-mono text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                WHO WE ARE?
              </h2>
              <div className="font-mono text-xs text-hud-amber mt-1">
                &gt; CODEBASE OVER PAPER CERTS
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-slate-300 text-base leading-relaxed mb-4 font-sans">
                AstraTech AI was created with a vision that technology education
                should go beyond passive lectures and generic certificates. We build
                technical intellect, engineering discipline, and the rare ability to
                turn abstract ideas into production-ready software systems.
              </p>
              <div className="font-mono text-xs text-slate-400 flex items-center justify-between border-t border-slate-800 pt-3">
                <Link
                  className="text-hud-amber hover:underline flex items-center gap-1"
                  href="/about"
                >
                  <span>[VIEW_FULL_COLLECTIVE_VISION]</span>
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </Link>
                <span>SYS_ORIGIN: 2024 / JHARKHAND</span>
              </div>
            </div>
          </div>

          {/* 3 Pillars Blueprint Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="corner-bracket bg-surface-card border border-amber-500/30 p-6 flex flex-col justify-between hover:border-hud-amber transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-hud-amber font-bold">
                      {pillar.tag}
                    </span>
                    <span className="material-symbols-outlined text-hud-amber">
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className="font-mono text-xl font-bold text-white uppercase mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 font-mono text-[11px] text-hud-amber/80 flex items-center justify-between">
                  <span>{pillar.detail}</span>
                  <span className="text-slate-500">{pillar.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TICKER TAPE / TELEMETRY MARQUEE */}
      <div className="w-full bg-[#0a0e17] border-y border-amber-500/30 py-2.5 overflow-hidden font-mono text-xs text-hud-amber select-none">
        <div className="flex whitespace-nowrap items-center gap-8 justify-around opacity-90 px-4">
          <span>[SYS_TELEMETRY: ACTIVE]</span>
          <span className="text-slate-400">{"///"}</span>
          <span>JAMSHEDPUR TECH ECOSYSTEM: ADVANCING</span>
          <span className="text-slate-400">{"///"}</span>
          <span className="text-emerald-400">CODE FIRST : THEORY SECOND</span>
          <span className="text-slate-400">{"///"}</span>
          <span>FULLSTACK + GENERATIVE AI TRACKS LIVE</span>
          <span className="text-slate-400">{"///"}</span>
          <span className="text-hud-amber font-bold">
            ASTRAHACK 2026 REGISTRATIONS OPEN
          </span>
        </div>
      </div>

      {/* VISION STATEMENT HUD BLOCK */}
      <section className="w-full py-20 border-b border-border-hud/30 bg-[#080b13]" id="vision">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-hud-amber mb-6">
            <span>[MANIFESTO // CORE AXIOM]</span>
          </div>
          <blockquote className="font-mono text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-6 leading-tight">
            “Education should lead to creation — not just certification.”
          </blockquote>
          <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Our vision is to build a generation of technology professionals who
            don&apos;t just memorize frameworks, but know how to think, build, and deploy
            high-leverage software. We are actively contributing to the
            technological reinvention of Jamshedpur and the Eastern India tech landscape.
          </p>
        </div>
      </section>
    </>
  );
}
