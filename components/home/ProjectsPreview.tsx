import React from "react";
import Link from "next/link";
import { competitiveAdvantages } from "@/data/site";
import Container from "@/components/common/Container";

export default function ProjectsPreview() {
  const mediaFeeds = [
    {
      id: "01",
      cam: "[FEED_CAM: 01]",
      title: "[Workstations Lab]",
      badge: "HARDWARE HUB",
      color: "text-hud-amber border-amber-500/30",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDp5M2mYXhAejNPudvlPRSBPKj-qJa8CHoczC2dgvp7PQpFik6lkshNGqDP9sv5MFawQe3jrIrVYRmigSnyYxY9w2fbhfDJ71herVS6N40_f517dqCgICSJCXsCNmv6oIcYmNu0Cv1ilTZR3OYWq9Y_pbxjhvP0w6nXbAXuF30hbOBNb04bjgwdO4FrcmGHpyMcTFGul0OWZEod8ZwHUypXOmXm_s2M9sXdGzDbqJ_h28bRJT-dyxDG",
      alt: "AstraTech developer lab with clean ergonomic dual-display monitors showing Visual Studio Code in Jamshedpur.",
    },
    {
      id: "02",
      cam: "[FEED_CAM: 02]",
      title: "[Architecture Session]",
      badge: "DESIGN SPRINTS",
      color: "text-hud-cyan border-cyan-500/30",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDoY1OxEWs7TfosQJvrOs4g07kktCLcxvadWdLNNWKen8M_GWsf-snKDohMtObIrtYZSuK_9aUMxWexAAF0H5e-pIO0ClATftNV9t5n2S-IjxW78895X3AhCRPeOAxE4Uqs-dFVW_tyxF32MJJrY9cV2M1ASfou1Aq0mh92o5k1i6D8jePLNRgf_VTS7FpP8cKIXFubTr4vgwa4LZEuNMMguSmzVNFLc413xASaHdK4C9d2wuLO_1qd",
      alt: "Collaborative whiteboard session at AstraTech with engineers sketching distributed microservice architecture.",
    },
    {
      id: "03",
      cam: "[FEED_CAM: 03]",
      title: "[Founder Technical Review]",
      badge: "PEER AUDIT",
      color: "text-hud-green border-emerald-500/30",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC8F1Wc9Q3PQBDP6MxVN16wfuF1F83s6KHgyGrgzuuwnu43eCOAmxJlwee0VWa6VuzOWtZZlTglEQp_ggzHFQWs9LCf1gQbPaAT1gLMm0MkzbCikUGjU0ZUA1JXkTqyMMHnlcqlinR8wF1ugxSx5jZJF-rcatR2QuSw63DhgTH0jy3FJomN1NZUeIWVMXfwWtAivSoDf3Eyrzh6NNXYB2V6JZ2Xvz6Qp00v_qoHvSXbdbNfnnM-xg6S",
      alt: "Technical mentorship review session at AstraTech with director Aniket Kumar conducting code inspections.",
    },
  ];

  return (
    <>
      {/* MEDIA GALLERY // INSIDE ASTRATECH */}
      <section className="w-full py-20 border-b border-border-hud/30 bg-[#080b13]" id="media">
        <Container>
          <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
            <span>{"// 08_FACILITY_TELEMETRY"}</span>
            <div className="h-px flex-1 bg-amber-500/20" />
            <span className="text-slate-500">[OPTICAL_FEED]</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-mono text-3xl font-extrabold text-white uppercase tracking-tight">
                INSIDE ASTRATECH
              </h2>
              <p className="font-mono text-xs text-slate-400 mt-1">
                &gt; WHERE THEORETICAL COMPUTATION TRANSFORMS INTO ACTIVE, KEYBOARD-FIRST ENGINEERING
              </p>
            </div>
            <Link
              href="/projects"
              className="font-mono text-xs text-hud-amber hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              <span>[VIEW_STUDENT_PROJECTS]</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {mediaFeeds.map((feed) => (
              <div
                key={feed.id}
                className="corner-bracket bg-surface-card border border-slate-800 overflow-hidden"
              >
                <div className="relative h-60 bg-black">
                  <div
                    className="absolute inset-0 bg-cover bg-center filter grayscale contrast-110"
                    style={{ backgroundImage: `url("${feed.image}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div
                    className={`absolute top-2 left-2 bg-black/80 text-[10px] px-2 py-0.5 border ${feed.color}`}
                  >
                    {feed.cam}
                  </div>
                </div>
                <div className="p-3 bg-black/80 flex items-center justify-between border-t border-slate-800 text-[11px]">
                  <span className="text-white">{feed.title}</span>
                  <span className="text-slate-500">{feed.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY ASTRATECH // 5 TACTICAL ADVANTAGES */}
      <section className="w-full py-20 border-b border-border-hud/30" id="about-vectors">
        <Container>
          <div className="flex items-center gap-2 font-mono text-xs text-hud-amber mb-2">
            <span>{"// 09_COMPETITIVE_ADVANTAGE"}</span>
            <div className="h-px flex-1 bg-amber-500/20" />
            <span className="text-slate-500">[5 VECTORS]</span>
          </div>

          <div className="text-left mb-12">
            <h2 className="font-mono text-3xl font-extrabold text-white uppercase tracking-tight">
              WHY ASTRATECH?
            </h2>
            <p className="font-mono text-xs text-slate-400 mt-1">
              &gt; ENGINEERED TO DISMANTLE PASSIVE EDUCATIONAL HABITS AND BUILD RELENTLESS BUILDER INSTINCTS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono">
            {competitiveAdvantages.map((adv) => (
              <div
                key={adv.id}
                className="corner-bracket bg-surface-card border border-slate-800 p-5 flex flex-col justify-between hover:border-hud-amber transition-all"
              >
                <span className="text-hud-amber font-bold text-lg mb-4">
                  {adv.id}
                </span>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase mb-1">
                    {adv.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal font-mono">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
