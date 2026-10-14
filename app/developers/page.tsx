import type { Metadata } from "next";
import DevelopersHero from "@/components/developers/DevelopersHero";
import RosterDossier from "@/components/developers/RosterDossier";
import LabDirectives from "@/components/developers/LabDirectives";
import CommunityOps from "@/components/developers/CommunityOps";
import DevelopersCTA from "@/components/developers/DevelopersCTA";

export const metadata: Metadata = {
  title: "Developers & Builders | AstraTech AI",
  description:
    "The people building AstraTech: a growing network of engineers and researchers learning by building production-grade systems in Jamshedpur.",
};

export default function DevelopersPage() {
  return (
    <div className="w-full relative selection:bg-[#f59e0b] selection:text-black min-h-screen">
      <div className="relative z-10 w-full flex flex-col">
        <DevelopersHero />
        <RosterDossier />
        <LabDirectives />
        <CommunityOps />
        <DevelopersCTA />
      </div>
    </div>
  );
}
