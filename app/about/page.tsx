import type { Metadata } from "next";
import aboutData from "@/data/aboutMain.json";

export const metadata: Metadata = {
  title: "About — AstraTech AI",
  description:
    "About AstraTech AI — Systems Engineering Collective in Jamshedpur, Jharkhand. First-principles engineering and production codebases.",
};

export default function AboutPage() {
  return (
    <div
      id="about-page"
      dangerouslySetInnerHTML={{ __html: aboutData.html }}
    />
  );
}
