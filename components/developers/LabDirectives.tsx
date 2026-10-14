import React from "react";
import { labDirectives } from "@/data/developers";

export default function LabDirectives() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 py-20 md:py-28 border-b border-border-hud/30 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#f59e0b] tracking-widest">
              <span>[ LAB DIRECTIVE ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-['VT323'] uppercase text-white tracking-wider leading-none">
              WHAT HAPPENS HERE
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-on-surface-variant max-w-md">
            Four operational vectors defining every cohort cycle at AstraTech.
          </p>
        </div>

        <div className="divide-y divide-white/10 font-mono">
          {labDirectives.map((directive) => (
            <div
              key={directive.num}
              className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] transition-colors px-2"
            >
              <div className="flex items-center gap-6">
                <span className="text-2xl sm:text-3xl font-['VT323'] text-[#f59e0b]">
                  {directive.num}
                </span>
                <span className="text-base sm:text-lg text-white font-medium">
                  {directive.title}
                </span>
              </div>
              <span className="text-xs text-on-surface-variant">
                {directive.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
