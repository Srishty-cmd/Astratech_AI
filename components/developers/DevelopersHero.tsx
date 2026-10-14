import React from "react";

export default function DevelopersHero() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 pt-10 pb-16 md:pt-14 md:pb-20 border-b border-border-hud/30 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#f59e0b]/20 text-xs font-mono tracking-widest text-[#f59e0b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping" />
            <span>[ ASTRA / PEOPLE ]</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl tracking-wider text-white font-['VT323'] uppercase leading-none drop-shadow-[0_0_25px_rgba(245,158,11,0.2)]">
            THE PEOPLE BUILDING ASTRATECH
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant font-mono max-w-2xl leading-relaxed">
            Not a team directory. A growing network of people who learn by building.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 text-xs font-mono">
          <div className="px-3.5 py-2 rounded-md bg-surface-container-high/80 border border-white/5 text-[#f59e0b] flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full" />
            <span>[DIGITAL_ARCHIVE // ROSTER_L5]</span>
          </div>
          <div className="text-on-surface-variant text-[11px] tracking-widest">
            JAMSHEDPUR LAB NODE_01 // 09 VERIFIED BUILDERS
          </div>
        </div>
      </div>
    </section>
  );
}
