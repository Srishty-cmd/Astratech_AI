"use client";

import React, { useState } from "react";
import { courses, learningFramework, learnerBenefits } from "@/data/courses";
import CourseCard from "./CourseCard";
import Container from "@/components/common/Container";

export default function CourseGrid() {
  const [activeModalCourse, setActiveModalCourse] = useState<string | null>(null);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  const closeModal = () => {
    setActiveModalCourse(null);
    setModalSubmitted(false);
  };

  return (
    <div className="w-full">
      {/* COURSES HERO */}
      <section className="w-full pt-16 pb-14 border-b border-white/10 relative">
        <Container>
          <div className="flex items-center gap-2 font-mono text-xs text-[#F5A400] mb-3">
            <span>{"// 01_CURRICULUM_INDEX"}</span>
            <div className="h-px flex-1 max-w-xs bg-[#F5A400]/20" />
            <span className="text-slate-500">[STANDARDS: L5_PRODUCTION]</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="pixel-heading text-4xl sm:text-6xl text-white font-normal uppercase tracking-wider mb-4 leading-tight">
              BUILD SKILLS THAT YOU CAN ACTUALLY BUILD WITH.
            </h1>
            <p className="text-slate-400 font-mono text-sm sm:text-base leading-relaxed max-w-2xl">
              Practical technical education built around modern engineering standards,
              real repositories, and active problem solving in Jamshedpur.
            </p>
          </div>
        </Container>
      </section>

      {/* CHOOSE YOUR DIRECTION // 2x3 GRID */}
      <section className="w-full py-20 border-b border-white/10">
        <Container>
          <div className="mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F5A400] mb-2">
              <span>{"// 02_ENGINE_TRACKS"}</span>
              <div className="h-px flex-1 max-w-xs bg-[#F5A400]/20" />
              <span className="text-slate-500">[TOTAL_TRACKS: 06]</span>
            </div>
            <h2 className="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
              CHOOSE YOUR DIRECTION.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.slug}
                course={course}
                onOpenCurriculumModal={(title) => setActiveModalCourse(title)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* LEARNING BEYOND THE SCREEN */}
      <section className="w-full py-20 border-b border-white/10 bg-[#06090e]">
        <Container>
          <div className="mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F5A400] mb-2">
              <span>{"// 03_PRACTICAL_FORMATS"}</span>
              <div className="h-px flex-1 max-w-xs bg-[#F5A400]/20" />
              <span className="text-slate-500">[CAMPUS_SPRINTS]</span>
            </div>
            <h2 className="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
              LEARNING BEYOND THE SCREEN.
            </h2>
            <p className="font-mono text-xs text-slate-400 mt-1">
              &gt; HANDS-ON IN-LAB CADENCE SHARPENING REAL CODING DISCIPLINE
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningFramework.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 bg-[#0d121c]/60 border border-white/10 flex flex-col justify-between hover:border-[#F5A400]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#F5A400] mb-3 pb-2 border-b border-white/5">
                    <span>0{idx + 1} {"// SPRINT"}</span>
                    <span>{item.freq}</span>
                  </div>
                  <h3 className="pixel-heading text-2xl text-white font-normal uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 mt-4 text-[10px] font-mono text-slate-500">
                  {item.format}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT YOU GET */}
      <section className="w-full py-20 border-b border-white/10">
        <Container>
          <div className="mb-12 text-left">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F5A400] mb-2">
              <span>{"// 04_STUDENT_OUTCOMES"}</span>
              <div className="h-px flex-1 max-w-xs bg-[#F5A400]/20" />
            </div>
            <h2 className="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
              WHAT YOU GET.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            {learnerBenefits.map((b, idx) => (
              <div
                key={b.title}
                className="p-6 bg-black/40 border border-slate-800 rounded flex flex-col justify-between hover:border-[#F5A400]/40 transition-colors"
              >
                <span className="text-[#F5A400] font-bold text-lg mb-2">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase mb-1">
                    {b.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW TO GET STARTED */}
      <section className="w-full py-20 border-b border-white/10 bg-[#06090e]">
        <Container>
          <div className="mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F5A400] mb-2">
              <span>{"// 05_ONBOARDING_PIPELINE"}</span>
              <div className="h-px flex-1 max-w-xs bg-[#F5A400]/20" />
            </div>
            <h2 className="pixel-heading text-3xl sm:text-4xl text-white font-normal uppercase tracking-wide">
              HOW TO GET STARTED.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 font-mono text-xs">
            {[
              { num: "01", step: "CHOOSE", desc: "Select the track aligning with your technical goals." },
              { num: "02", step: "REQUEST", desc: "Submit your official curriculum inquiry or admissions query." },
              { num: "03", step: "REVIEW", desc: "Undergo a direct diagnostic interview with lab directors." },
              { num: "04", step: "CONNECT", desc: "Join our developer discord and access lab repository." },
              { num: "05", step: "BEGIN", desc: "Write production code on day one alongside active peers." },
            ].map((s) => (
              <div
                key={s.step}
                className="p-4 bg-black/60 border border-slate-800 rounded flex flex-col justify-between hover:border-[#F5A400]/40 transition-colors"
              >
                <span className="text-[#F5A400] font-bold text-lg mb-2">{s.num}</span>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase mb-1">&gt; {s.step}</h4>
                  <p className="text-[11px] text-slate-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CURRICULUM MODAL */}
      {activeModalCourse && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0b101a] border border-[#F5A400]/60 p-6 sm:p-8 max-w-lg w-full font-mono text-xs space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[#F5A400] font-bold uppercase">
                [CURRICULUM_REQUEST: {activeModalCourse}]
              </span>
              <button
                type="button"
                onClick={closeModal}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {modalSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <span className="text-emerald-400 font-bold text-sm block">
                  ✔ CURRICULUM DISPATCHED
                </span>
                <p className="text-slate-300">
                  Detailed technical syllabus for {activeModalCourse} has been queued. Check your inbox within 10 minutes.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-4 px-6 py-2 bg-[#F5A400] text-black font-bold uppercase"
                >
                  [CLOSE]
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <p className="text-slate-300">
                  Enter your email address to receive the full repository roadmap,
                  prerequisites, and evaluation milestones for {activeModalCourse}.
                </p>
                <div>
                  <label className="block text-slate-400 mb-1">&gt; YOUR_EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="engineer@domain.com"
                    className="w-full bg-black border border-slate-700 text-white p-2.5 rounded focus:border-[#F5A400] outline-none"
                  />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-slate-700 text-slate-300 hover:text-white"
                  >
                    [CANCEL]
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#F5A400] text-black font-bold uppercase hover:bg-amber-400"
                  >
                    [DISPATCH_SYLLABUS]
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
