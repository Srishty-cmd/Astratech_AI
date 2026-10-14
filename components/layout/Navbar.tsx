"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* TOP STATUS TELEMETRY STRIP */}
      <div className="w-full bg-[#080b12] border-b border-border-hud/50 py-1 px-4 text-[10px] font-mono flex items-center justify-between text-text-dim relative z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-hud-green">
            <span className="w-1.5 h-1.5 rounded-full bg-hud-green animate-ping" />
            [{siteConfig.status}]
          </span>
          <span className="hidden md:inline text-amber-500/80">
            [{siteConfig.coordinates}]
          </span>
          <span className="hidden lg:inline text-slate-500">
            [REGION: JAMSHEDPUR, JHARKHAND - NODE_01]
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-hud-amber font-semibold">
            [{siteConfig.defenseAuth}]
          </span>
          <span className="text-slate-400">{siteConfig.clock}</span>
        </div>
      </div>

      {/* TACTICAL NAVIGATION BAR */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-amber-500/30 shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link className="flex items-center gap-2 group" href="/">
              <div className="w-8 h-8 rounded border border-hud-amber/80 bg-black/60 flex items-center justify-center text-hud-amber group-hover:bg-hud-amber group-hover:text-black transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono font-bold text-[15px] tracking-wider text-white">
                    {siteConfig.shortName}
                  </span>
                  <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-amber-500/10 text-hud-amber border border-amber-500/40">
                    {siteConfig.systemTag}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-400 tracking-widest -mt-0.5">
                  {siteConfig.labLocation}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs text-slate-400">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href) && !item.href.includes("#"));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "transition-colors flex items-center gap-1",
                    isActive
                      ? "text-hud-amber font-bold"
                      : "hover:text-hud-amber"
                  )}
                >
                  <span
                    className={cn(
                      "text-[10px]",
                      isActive ? "text-hud-amber/60" : "text-slate-600"
                    )}
                  >
                    {isActive ? ">" : "//"}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            <Link
              className="font-mono text-xs inline-flex items-center gap-1.5 px-4 py-2 rounded bg-amber-500/10 border border-hud-amber text-hud-amber hover:bg-hud-amber hover:text-black font-semibold transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)]"
              href="/contact"
            >
              <span>[INIT_ENROLL]</span>
              <span className="material-symbols-outlined text-[14px]">bolt</span>
            </Link>
            <div className="hidden sm:flex w-8 h-8 rounded border border-slate-700 bg-surface items-center justify-center text-slate-400 text-xs font-mono">
              <span>01</span>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden w-8 h-8 rounded border border-slate-700 bg-black/60 flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isMobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <MobileMenu
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          currentPath={pathname}
        />
      </header>
    </>
  );
}
