import React from "react";
import Link from "next/link";
import { pipelineStages } from "@/data/site";
import Container from "@/components/common/Container";

export default function CoursesPreview() {
  return (
    <section className="w-full py-20 border-b border-border-hud/30 bg-[#080b13]">
      <Container>
        <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
          <span>{"// 04_PEDAGOGICAL_PIPELINE"}</span>
          <div className="h-px flex-1 bg-amber-500/20" />
          <span className="text-slate-500">[ITERATION_LOOP: L1-L6]</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-mono text-3xl font-extrabold text-white uppercase tracking-tight">
              HOW WE LEARN
            </h2>
            <p className="font-mono text-xs text-slate-400 mt-1">
              &gt; AN UNCOMPROMISED ITERATIVE CYCLE DESIGNED TO TRANSITION NOVICES INTO AUTONOMOUS ENGINEERS
            </p>
          </div>
          <Link
            href="/courses"
            className="font-mono text-xs text-hud-amber hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            <span>[VIEW_FULL_COURSE_CATALOG]</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 font-mono">
          {pipelineStages.map((stage) => (
            <div
              key={stage.id}
              className="p-4 bg-black/60 border border-slate-800 rounded flex flex-col justify-between hover:border-hud-amber transition-colors"
            >
              <span className="text-hud-amber font-bold text-xl mb-2">
                {stage.step}
              </span>
              <div>
                <h4 className="text-white font-bold text-xs uppercase mb-1">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
