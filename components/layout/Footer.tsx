import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { footerSections, footerRegulatory } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="w-full bg-[#05070c] border-t border-border-hud/40 py-12 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-5 h-5 rounded border border-hud-amber text-hud-amber flex items-center justify-center text-[10px]">
                &gt;
              </span>
              <span>{siteConfig.shortName} AI // SYSTEMS LAB</span>
            </div>
            <p className="text-slate-500 font-sans text-xs max-w-sm">
              Learn. Build. Deploy. Grow. Developing the engineering vanguard of
              Jamshedpur &amp; Eastern India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-7 h-7 rounded border border-slate-800 bg-black flex items-center justify-center text-slate-400 hover:text-hud-amber hover:border-hud-amber transition-all"
                  aria-label={social.name}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Sections Index Column */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-hud-amber font-bold block mb-2">
              {footerSections.title}
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {footerSections.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-hud-amber transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Regulatory Column */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-hud-amber font-bold block mb-2">
              {footerRegulatory.title}
            </span>
            <div className="flex flex-col gap-1.5 text-[11px]">
              {footerRegulatory.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-hud-amber transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>
            © {siteConfig.name}. Jamshedpur, Jharkhand. All systems operational.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hud-green animate-ping" />
            <span className="text-hud-green font-bold">
              [NODE_STATUS: ONLINE]
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
