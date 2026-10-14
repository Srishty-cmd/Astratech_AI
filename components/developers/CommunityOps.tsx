import React from "react";
import { communityActivities } from "@/data/developers";
import AllocatedRuntimeSeats from "./AllocatedRuntimeSeats";

export default function CommunityOps() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 py-20 md:py-28 border-b border-border-hud/30 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#f59e0b] tracking-widest">
              <span>[ COLLECTIVE FORCE ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-['VT323'] uppercase text-white tracking-wider leading-none">
              THE PEOPLE AROUND THE CODE
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-on-surface-variant max-w-md">
            Peer collaboration, rigorous reviews, and distributed telemetry across the network.
          </p>
        </div>

        {/* Real Community Activities - Clean High-Density Strip */}
        <div className="rounded-2xl border border-white/10 bg-[#080b11]/90 backdrop-blur-md overflow-hidden shadow-2xl divide-y divide-white/10 font-mono">
          <div className="px-6 py-3 bg-[#05070c]/80 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-white/10">
            <div className="flex items-center gap-2 text-[#f59e0b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping" />
              <span className="font-bold tracking-widest uppercase">
                {"// COMMUNITY_OPS_TELEMETRY"}
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-white/40">
              <span className="hidden sm:inline">PEER_ENGAGEMENT_V3</span>
              <span className="text-emerald-400 font-semibold">[PROTOCOL ACTIVE]</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-[#05070c]/40">
            {communityActivities.map((act) => (
              <div
                key={act.actTag}
                className="p-5 flex flex-col justify-between group hover:bg-white/[0.03] transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#f59e0b] tracking-wider">
                    {act.actTag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#f59e0b] transition-colors" />
                </div>
                <div>
                  <div className="text-xl font-['VT323'] text-white tracking-wide uppercase group-hover:text-[#f59e0b] transition-colors leading-tight">
                    {act.title}
                  </div>
                  <div className="text-[11px] text-white/50 tracking-wide mt-1">
                    {act.subtitle}
                  </div>
                </div>
                <div className="text-[10px] text-white/30 pt-2 border-t border-white/5">
                  {act.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authentic Talent Pipeline / Allocated Runtime Seats - Crystal-Clear Zero-Blur HUD */}
        <div className="pt-4 flex justify-center items-center w-full">
          <AllocatedRuntimeSeats />
        </div>
      </div>
    </section>
  );
}
