import React from "react";
import { allocatedSeats } from "@/data/developers";

export default function AllocatedRuntimeSeats() {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl border border-white/10 bg-[#080b11]/90 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden font-mono">
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#f59e0b]/60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#f59e0b]/60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#f59e0b]/60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#f59e0b]/60 pointer-events-none" />

      {/* Header section */}
      <div className="space-y-3 pb-6 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-[#f59e0b]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping" />
          <span>[ TALENT PIPELINE ]</span>
        </div>
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-['VT323'] uppercase text-white tracking-wider leading-none">
          ALLOCATED RUNTIME SEATS.
        </h3>
        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-2xl leading-relaxed">
          Reserved protocol slots for incoming researchers, software architects, and engineering cohort leads.
        </p>
      </div>

      {/* 3-column Seats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {allocatedSeats.map((seat) => (
          <div
            key={seat.seatId}
            className="rounded-xl border border-white/10 bg-[#05070c]/70 p-6 flex flex-col justify-between space-y-6 hover:border-amber-500/40 hover:bg-white/[0.02] transition-all group relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono text-[#f59e0b] tracking-wider font-semibold">
                {seat.code}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/50 tracking-widest uppercase">
                UNALLOCATED
              </span>
            </div>

            {/* Middle Content */}
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                {seat.title}
              </div>
              <div className="text-[11px] font-mono text-[#f59e0b] tracking-widest uppercase font-semibold">
                {seat.status}
              </div>
              <p className="text-xs font-mono text-slate-400 leading-relaxed pt-2 border-l-2 border-white/10 pl-3 italic">
                &ldquo;{seat.description}&rdquo;
              </p>
            </div>

            {/* Bottom Telemetry Strip */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
              <span className="text-white/50">{seat.requirement}</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[#f59e0b] text-[10px] font-semibold border border-amber-500/30">
                {seat.queueStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
