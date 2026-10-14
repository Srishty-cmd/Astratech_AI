import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] w-full p-8 font-mono">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-hud-amber animate-ping inline-block" />
        <span className="text-hud-amber text-xs font-bold">[TELEMETRY_SYNC: STREAMING_NODES]</span>
      </div>
      <p className="text-[11px] text-slate-500">{"// INITIALIZING KERNEL TELEMETRY..."}</p>
    </div>
  );
}
