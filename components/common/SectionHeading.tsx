import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  schematicTag?: string;
  schematicCode?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  schematicTag,
  schematicCode,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}>
      {schematicTag && (
        <div className={cn("flex items-center gap-2 font-mono text-xs text-hud-amber mb-2", align === "center" && "justify-center")}>
          <span>{schematicTag}</span>
          <div className="h-px flex-1 max-w-xs bg-amber-500/20" />
          {schematicCode && <span className="text-slate-500">{schematicCode}</span>}
        </div>
      )}
      <h2 className="font-mono text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}
