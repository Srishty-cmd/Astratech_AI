import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "full";
}

export default function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl mx-auto px-4 sm:px-6",
    default: "max-w-7xl mx-auto px-4 sm:px-6",
    full: "w-full px-4 sm:px-6 lg:px-8",
  };

  return (
    <div className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
