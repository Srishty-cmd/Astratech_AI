"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { developers } from "@/data/developers";
import { Developer } from "@/types/developer";
import { cn } from "@/lib/utils";

export default function RosterDossier() {
  const [selectedId, setSelectedId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash && hash.includes("member=")) {
        const memberKey = hash.split("member=")[1];
        if (developers.some((d) => d.id === memberKey)) {
          return memberKey;
        }
      }
    }
    return "aditi";
  });
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.includes("member=")) {
        const memberKey = hash.split("member=")[1];
        if (developers.some((d) => d.id === memberKey)) {
          setSelectedId(memberKey);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectMember = (id: string) => {
    if (id === selectedId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedId(id);
      setIsTransitioning(false);
      if (typeof window !== "undefined" && window.history.replaceState) {
        window.history.replaceState(null, "", `#member=${id}`);
      }
    }, 150);
  };

  const activeMember: Developer =
    developers.find((d) => d.id === selectedId) || developers[0];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 py-16 md:py-24 border-b border-border-hud/30 relative" id="people-index">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* TOP HUD BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#080b11] border border-white/10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[#f59e0b] font-bold tracking-widest uppercase">
              ASTRA CORE // BUILDER ARCHIVE
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white/60 hidden sm:inline">
              EDITORIAL DOSSIER TELEMETRY
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
              [SYS_INDEX: 09 VERIFIED_NODES]
            </span>
            <span className="text-white/40 hidden md:inline">{"// NODE: 22.8046° N"}</span>
          </div>
        </div>

        {/* MASTER-DETAIL MAIN FRAME */}
        <div className="rounded-2xl border border-white/10 bg-[#080b11]/80 backdrop-blur-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl items-stretch">
          {/* LEFT COLUMN: MEMBER ROSTER INDEX (5 COLS) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col bg-[#05070c]/60 h-full">
            <div className="px-6 py-4 border-b border-white/10 font-mono text-xs text-[#f59e0b] flex items-center justify-between">
              <span>{"// ROSTER SELECTOR"}</span>
              <span className="text-white/40 text-[10px]">
                {developers.length} OF {developers.length} ACTIVE
              </span>
            </div>

            <div className="divide-y divide-white/5 flex-grow" id="roster-list">
              {developers.map((member) => {
                const isSelected = member.id === activeMember.id;
                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => handleSelectMember(member.id)}
                    className={cn(
                      "w-full text-left p-4.5 sm:p-5 transition-all duration-300 flex items-center justify-between group",
                      isSelected
                        ? "bg-[#f59e0b]/10 border-l-2 border-[#f59e0b]"
                        : "hover:bg-white/[0.03] border-l-2 border-transparent"
                    )}
                  >
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono text-[#f59e0b] tracking-wider">
                        {member.code}
                      </div>
                      <div className="text-2xl font-['VT323'] uppercase text-white tracking-wide group-hover:text-[#f59e0b] transition-colors leading-tight">
                        {member.name}
                      </div>
                      <div className="text-xs font-mono text-white/70 uppercase tracking-widest">
                        {member.role}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0 pl-3">
                      {isSelected ? (
                        <span className="status-tag inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                          ● ACTIVE
                        </span>
                      ) : null}
                      <span className="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">
                        DOSSIER ↗
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-auto p-4 border-t border-white/5 font-mono text-[11px] text-white/40 flex items-center justify-between bg-[#040609]/40">
              <span>STATUS: SYNCHRONIZED</span>
              <span className="text-[#f59e0b]">NODE_CLUSTER: IND-EAST-01</span>
            </div>
          </div>

          {/* RIGHT COLUMN: ACTIVE PROFILE DOSSIER (7 COLS) */}
          <div
            className={cn(
              "lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-opacity duration-300 relative bg-[#080b11] h-full",
              isTransitioning ? "opacity-40" : "opacity-100"
            )}
            id="profile-display"
          >
            <div className="space-y-8 flex-1 flex flex-col w-full">
              {/* FULL-WIDTH PROMINENT HERO PORTRAIT TREATMENT */}
              <div className="relative rounded-2xl overflow-hidden bg-surface-container-high border border-white/10 shadow-2xl h-[340px] md:h-[400px] w-full group">
                {/* Crosshair Reticles / HUD Badges */}
                <div className="absolute top-3 left-3 z-20 font-mono text-[10px] bg-[#05070c]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#f59e0b]/30 text-[#f59e0b] tracking-wider">
                  {activeMember.reticleTop}
                </div>
                <div className="absolute top-3 right-3 z-20 font-mono text-[10px] bg-[#05070c]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-white/70 tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping" />
                  ASTRA_CORE // ARCHIVE
                </div>
                <div className="absolute bottom-3 left-3 z-20 font-mono text-[10px] bg-[#05070c]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#f59e0b]/30 text-[#f59e0b] tracking-wider">
                  {activeMember.reticleBottom}
                </div>
                <div className="absolute bottom-3 right-3 z-20 font-mono text-[10px] bg-[#05070c]/80 backdrop-blur-md px-2.5 py-1 rounded border border-emerald-400/30 text-emerald-400 tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> VERIFIED
                </div>

                <div className="relative w-full h-full">
                  <Image
                    alt={activeMember.name}
                    src={activeMember.avatar}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 ease-out"
                    priority
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* PROFILE DETAILS STACKED DIRECTLY BENEATH */}
              <div className="space-y-6 w-full flex-grow">
                {/* Header & Bio */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-[#f59e0b] border border-[#f59e0b]/20">
                      [ {activeMember.tag} ]
                    </div>
                    <div className="text-xs font-mono text-[#f59e0b] uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-surface-container-low">
                      {activeMember.role}
                    </div>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-['VT323'] uppercase text-white tracking-wide leading-tight">
                    {activeMember.name}
                  </h2>
                  <p className="text-base text-on-surface font-body leading-relaxed max-w-3xl">
                    {activeMember.bio}
                  </p>
                </div>

                {/* Authentic Editorial Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs border-t border-white/5">
                  <div className="p-3 rounded-xl bg-surface-container-low/60 border border-white/5 space-y-1">
                    <span className="text-[10px] text-white/40 uppercase block tracking-wider">
                      FOCUS
                    </span>
                    <span className="text-white text-xs font-semibold">
                      {activeMember.metaFocus}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low/60 border border-white/5 space-y-1">
                    <span className="text-[10px] text-white/40 uppercase block tracking-wider">
                      BUILDING
                    </span>
                    <span className="text-[#f59e0b] text-xs font-semibold">
                      {activeMember.metaBuilding}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low/60 border border-white/5 space-y-1">
                    <span className="text-[10px] text-white/40 uppercase block tracking-wider">
                      BASED IN
                    </span>
                    <span className="text-white text-xs font-semibold">
                      {activeMember.metaBased}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low/60 border border-white/5 space-y-1">
                    <span className="text-[10px] text-white/40 uppercase block tracking-wider">
                      STATUS
                    </span>
                    <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {activeMember.status || "ONLINE NODE"}
                    </span>
                  </div>
                </div>

                {/* Technical Breakdown (Focus / Exp / Edu) */}
                <div className="space-y-4 pt-4 border-t border-white/10 font-mono text-xs">
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-[#f59e0b] uppercase tracking-wider font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#f59e0b]" />
                      [ TECHNICAL FOCUS ]
                    </div>
                    <div className="text-on-surface-variant text-sm leading-relaxed pl-3.5">
                      {activeMember.focus}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-[#f59e0b] uppercase tracking-wider font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#f59e0b]" />
                      [ REAL CONTRIBUTIONS ]
                    </div>
                    <div className="text-on-surface-variant text-sm leading-relaxed pl-3.5">
                      {activeMember.experience}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-[#f59e0b] uppercase tracking-wider font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#f59e0b]" />
                      [ ACADEMIC / LAB BACKGROUND ]
                    </div>
                    <div className="text-on-surface-variant text-sm leading-relaxed pl-3.5">
                      {activeMember.education}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DIRECT VERIFIED CHANNELS */}
            <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center gap-3 font-mono text-xs">
              {activeMember.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-4 py-2 rounded-full uppercase tracking-wider transition-all",
                    link.primary
                      ? "bg-[#f59e0b] text-black font-semibold hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                      : "bg-surface-container-high border border-white/10 text-on-surface font-medium hover:bg-surface-bright"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
