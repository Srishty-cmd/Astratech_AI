import React from "react";
import Link from "next/link";

export default function DevelopersCTA() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 text-center relative overflow-hidden pt-16 md:pt-20 pb-20 md:pb-24">
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-[#f59e0b] border border-[#f59e0b]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping" />
          <span>[ FUTURE BUILDERS ]</span>
        </div>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-['VT323'] uppercase text-white tracking-wider leading-none drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          WHO BUILDS WHAT&apos;S NEXT?
        </h2>
        <p className="text-2xl sm:text-3xl font-mono text-[#f59e0b] tracking-wider font-semibold">
          Maybe it&apos;s you.
        </p>
        <p className="text-sm sm:text-base font-mono text-on-surface-variant max-w-xl mx-auto leading-relaxed pt-1">
          Start learning. Start building.
        </p>
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            className="px-8 py-4 rounded-full bg-[#f59e0b] text-black font-mono font-semibold uppercase tracking-wider hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all"
            href="/contact"
          >
            [ JOIN ASTRA TECH → ]
          </Link>
          <Link
            className="px-8 py-4 rounded-full bg-surface-container-high border border-white/10 text-white font-mono font-semibold uppercase tracking-wider hover:bg-surface-bright transition-colors"
            href="/projects"
          >
            [ EXPLORE THE WORK ↗ ]
          </Link>
        </div>
        <div className="pt-12 font-mono text-xs text-white/40 tracking-widest uppercase">
          JAMSHEDPUR TECH CAMPUS // BATCH 2025-2026 // NODE_ACTIVE
        </div>
      </div>
    </section>
  );
}
