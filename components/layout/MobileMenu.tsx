"use client";

import React from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-[#090d16]/98 border-b border-amber-500/30 px-4 py-4 space-y-3 font-mono text-xs backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
      <div className="flex flex-col space-y-2">
        {navigation.map((item) => {
          const isActive =
            item.href === "/"
              ? currentPath === "/"
              : currentPath.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={cn(
                "px-3 py-2 rounded flex items-center gap-2 transition-colors",
                isActive
                  ? "bg-amber-500/10 text-hud-amber font-bold border border-amber-500/30"
                  : "text-slate-400 hover:text-hud-amber hover:bg-black/40"
              )}
            >
              <span className="text-[10px] text-hud-amber/60">
                {isActive ? ">" : "//"}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="pt-3 border-t border-slate-800">
        <Link
          href="/contact"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded bg-hud-amber text-black font-bold uppercase tracking-wider"
        >
          <span>[INIT_ENROLL]</span>
          <span className="material-symbols-outlined text-[14px]">bolt</span>
        </Link>
      </div>
    </div>
  );
}
