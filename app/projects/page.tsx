import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects — Built by AstraTech AI",
  description:
    "Built by AstraTech — Student and collective capstones, production systems, and open codebases in Jamshedpur.",
};

export default function ProjectsPage() {
  return <ProjectGrid />;
}
