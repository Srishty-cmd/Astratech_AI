import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import CoursesPreview from "@/components/home/CoursesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "AstraTech AI — Tactical Cyber Blueprint",
  description:
    "AstraTech AI is a technology education and developer community in Jamshedpur focused on practical learning, production-grade repositories, real projects, innovation, and first-principles engineering thinking.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CoursesPreview />
      <ProjectsPreview />
      <CTASection />
    </>
  );
}
