import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "terminal";
  href?: string;
  icon?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-mono text-xs uppercase font-bold transition-all cursor-pointer select-none";

  const variantStyles = {
    primary:
      "bg-hud-amber text-black hover:bg-hud-amber-light hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]",
    secondary:
      "bg-[#F5A400]/10 hover:bg-[#F5A400] text-[#F5A400] hover:text-black border border-[#F5A400]/60",
    outline:
      "bg-black/50 border border-slate-700 text-slate-200 hover:border-hud-amber hover:text-hud-amber",
    terminal:
      "bg-amber-500/10 border border-hud-amber text-hud-amber hover:bg-hud-amber hover:text-black shadow-[0_0_15px_rgba(245,158,11,0.25)]",
  };

  const combinedClasses = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {icon && <span className="material-symbols-outlined text-[16px]">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {icon && <span className="material-symbols-outlined text-[16px]">{icon}</span>}
    </button>
  );
}
