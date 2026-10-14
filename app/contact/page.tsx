import type { Metadata } from "next";
import CTASection from "@/components/home/CTASection";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Contact & Admissions — AstraTech AI",
  description:
    "Direct admissions desk and developer communications for AstraTech AI Lab in Bistupur, Jamshedpur, Jharkhand.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Contact Hero Strip */}
      <section className="w-full pt-16 pb-8 border-b border-white/10 relative">
        <Container>
          <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-3">
            <span>{"// 10_COMMUNICATIONS_NODE"}</span>
            <div className="h-px flex-1 max-w-xs bg-amber-500/20" />
            <span className="text-slate-500">[STATUS: DESK_OPEN]</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="pixel-heading text-4xl sm:text-6xl text-white font-normal uppercase tracking-wider mb-4 leading-tight">
              CONNECT WITH THE LAB.
            </h1>
            <p className="text-slate-400 font-mono text-sm sm:text-base leading-relaxed max-w-2xl">
              Direct access to admissions, campus visits, developer partnerships, and technical director consultations in Jamshedpur.
            </p>
          </div>
        </Container>
      </section>

      {/* Reusable Admissions & Desk Terminal Component */}
      <CTASection showHeroBanner={false} />
    </div>
  );
}
