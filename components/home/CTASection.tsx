"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import Container from "@/components/common/Container";

interface CTASectionProps {
  showHeroBanner?: boolean;
}

export default function CTASection({ showHeroBanner = true }: CTASectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* READY TO BUILD // CALL TO ACTION BANNER */}
      {showHeroBanner && (
        <section className="w-full py-20 border-b border-border-hud/30 relative" id="join">
          <Container size="narrow" className="text-center relative z-10">
            <div className="inline-block font-mono text-xs text-hud-amber bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30 mb-4">
              [ENROLLMENT_GATEWAY // COHORT 2026]
            </div>
            <h2 className="font-mono text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
              READY TO BUILD WITH US?
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto mb-8 font-sans">
              Become part of a growing collective of technical intellects, systems
              builders, and pragmatic problem-solvers in Jamshedpur.
            </p>
            <a
              href="#contact-terminal"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-hud-amber text-black font-mono text-xs font-bold uppercase rounded hover:bg-hud-amber-light shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
            >
              <span>&gt; APPLY TO COHORT</span>
              <span className="material-symbols-outlined text-[16px]">
                north_east
              </span>
            </a>
          </Container>
        </section>
      )}

      {/* CONTACT / ADMISSIONS TERMINAL */}
      <section
        className="w-full py-20 border-b border-border-hud/30 bg-[#080b13]"
        id="contact-terminal"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Info Left */}
            <div className="lg:col-span-5 flex flex-col justify-between font-mono">
              <div>
                <div className="text-xs text-hud-amber mb-2">
                  {"// 10_DIRECT_DESK"}
                </div>
                <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
                  HAVE A QUESTION?
                </h2>
                <p className="text-slate-400 font-sans text-sm leading-relaxed mb-8">
                  Whether you are an aspiring builder seeking admission, a college
                  student looking for real technical intellect, or an industry firm
                  looking to hire our vetted developers, we respond directly.
                </p>
                <div className="space-y-4 text-xs">
                  <div className="p-3 bg-black/60 border border-slate-800 rounded">
                    <span className="text-hud-amber block mb-1">
                      [PHYSICAL_CAMPUS]
                    </span>
                    <span className="text-white">{siteConfig.address}</span>
                  </div>
                  <div className="p-3 bg-black/60 border border-slate-800 rounded">
                    <span className="text-hud-green block mb-1">
                      [OFFICIAL_COMMUNICATIONS]
                    </span>
                    <span className="text-white">
                      {siteConfig.email} • {siteConfig.directorEmail}
                    </span>
                  </div>
                  <div className="p-3 bg-black/60 border border-slate-800 rounded">
                    <span className="text-hud-cyan block mb-1">
                      [WHATSAPP_HOTLINE]
                    </span>
                    <span className="text-white">{siteConfig.phone}</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-800 mt-6 text-[11px] text-slate-500">
                [STATUS: ADMISSIONS DESK OPEN (MON - SAT) // UTC+05:30]
              </div>
            </div>

            {/* Contact Terminal Form */}
            <div className="lg:col-span-7">
              <div className="corner-bracket bg-surface-card border border-amber-500/40 p-6 md:p-8">
                <div className="font-mono text-xs text-hud-amber mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>[TERMINAL_INPUT: ADMISSION_QUERY]</span>
                  <span className="text-slate-500">SEC_CHANNEL_01</span>
                </div>

                {submitted ? (
                  <div className="p-8 text-center space-y-3 font-mono">
                    <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <span className="material-symbols-outlined text-xl">check</span>
                    </div>
                    <div className="text-emerald-400 font-bold text-sm uppercase">
                      [ENQUIRY_TRANSMITTED: ACK RECEIVED]
                    </div>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Official enquiry received. AstraTech Admissions will review your profile and respond within 24 operational hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-4 py-2 border border-slate-700 hover:border-hud-amber text-xs text-slate-300 hover:text-white rounded"
                    >
                      [SUBMIT_NEW_ENQUIRY]
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 mb-1">
                          &gt; FULL_NAME *
                        </label>
                        <input
                          className="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none"
                          placeholder="e.g. Rahul Sharma"
                          required
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">
                          &gt; EMAIL_ADDRESS *
                        </label>
                        <input
                          className="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none"
                          placeholder="rahul@example.com"
                          required
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 mb-1">
                          &gt; PHONE_NUMBER *
                        </label>
                        <input
                          className="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none"
                          placeholder="+91 XXXXX XXXXX"
                          required
                          type="tel"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">
                          &gt; BACKGROUND_CATEGORY *
                        </label>
                        <select className="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none">
                          <option>College Student (Engineering)</option>
                          <option>College Student (Other Track)</option>
                          <option>Working Professional</option>
                          <option>Independent Builder</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">
                        &gt; PROGRAM_OF_INTEREST *
                      </label>
                      <select className="w-full bg-black/80 border border-slate-700 text-white px-3 py-2.5 rounded focus:border-hud-amber focus:ring-0 outline-none">
                        <option>01 Full Stack Development (Next.js / Node.js)</option>
                        <option>02 Artificial Intelligence (PyTorch / LLMs)</option>
                        <option>03 Programming &amp; DSA (Algorithms)</option>
                        <option>04 Data Analytics (SQL / Python / BI)</option>
                        <option>05 Cloud &amp; DevOps (AWS / Docker)</option>
                        <option>06 UI/UX &amp; Product Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">
                        &gt; QUESTIONS_OR_GOALS
                      </label>
                      <textarea
                        className="w-full bg-black/80 border border-slate-700 text-white p-3 rounded focus:border-hud-amber focus:ring-0 outline-none"
                        placeholder="Tell us what you want to build and your expectations..."
                        rows={3}
                      />
                    </div>

                    <button
                      className="w-full py-3 bg-hud-amber text-black font-bold uppercase rounded hover:bg-hud-amber-light transition-all flex items-center justify-center gap-2 cursor-pointer"
                      type="submit"
                    >
                      <span>[TRANSMIT_OFFICIAL_ENQUIRY]</span>
                      <span className="material-symbols-outlined text-[16px]">
                        send
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
