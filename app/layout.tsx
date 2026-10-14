import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AstraTech AI — Tactical Cyber Blueprint",
  description:
    "AstraTech AI is a technology education and developer community in Jamshedpur focused on practical learning, production-grade repositories, real projects, innovation, and first-principles engineering thinking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="shell-type" content="web_standard" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=VT323&family=Sora:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      canvas: "#07090e",
                      surface: "#111318",
                      "surface-card": "#101420",
                      "surface-panel": "#141a29",
                      "hud-amber": "#f59e0b",
                      "hud-amber-light": "#fbbf24",
                      "hud-green": "#10b981",
                      "hud-cyan": "#06b6d4",
                      "line-dim": "rgba(245, 158, 11, 0.15)",
                      "line-blueprint": "rgba(56, 189, 248, 0.12)",
                      "border-hud": "rgba(245, 158, 11, 0.25)",
                      "border-glow": "rgba(16, 185, 129, 0.35)",
                      "text-lead": "#f8fafc",
                      "text-dim": "#94a3b8",
                      "surface-base": "#05070C",
                      "surface-elevated": "#121927",
                      "border-subtle": "rgba(255, 255, 255, 0.08)",
                      "border-strong": "rgba(255, 255, 255, 0.16)",
                      "amber-brand": "#F5A400",
                      "amber-glow": "#FFB020",
                      "amber-muted": "rgba(245, 164, 0, 0.12)",
                      "text-primary": "#F1F5F9",
                      "text-secondary": "#94A3B8",
                      "text-muted": "#64748B",
                      "silver-metallic": "#CBD5E1",
                      "surface-container-highest": "#32353a",
                      "on-secondary": "#2b3136",
                      "on-secondary-fixed-variant": "#41484c",
                      "on-primary": "#2d3137",
                      "primary-container": "#0d1117",
                      "surface-container-high": "#272a2f",
                      "surface-bright": "#37393e",
                      "secondary-fixed-dim": "#c1c7cd",
                      "on-secondary-container": "#b3b9bf",
                      "primary-fixed": "#dfe2eb",
                      "on-tertiary": "#3a2e26",
                      "surface-container": "#1d2024",
                      "on-primary-container": "#797d85",
                      error: "#ffb4ab",
                      "tertiary-container": "#180f08",
                      outline: "#8f9095",
                      "inverse-primary": "#5b5e66",
                      "error-container": "#93000a",
                      "surface-tint": "#c3c6cf",
                      "surface-dim": "#111318",
                      "on-primary-fixed": "#181c22",
                      "on-primary-fixed-variant": "#43474e",
                      "outline-variant": "#45474b",
                      "tertiary-fixed-dim": "#d6c3b7",
                      "primary-fixed-dim": "#c3c6cf",
                      background: "#111318",
                      "surface-container-lowest": "#0c0e13",
                      "surface-container-low": "#191c20",
                      "on-background": "#e1e2e9",
                      "secondary-container": "#434a4f",
                      primary: "#c3c6cf",
                      "on-tertiary-container": "#897a6f",
                      "on-error-container": "#ffdad6",
                      "on-surface": "#e1e2e9",
                      "on-secondary-fixed": "#161c21",
                      "tertiary-fixed": "#f3dfd2",
                      "surface-variant": "#32353a",
                      "on-tertiary-fixed": "#231a12",
                      "inverse-on-surface": "#2e3035",
                      tertiary: "#d6c3b7",
                      "on-tertiary-fixed-variant": "#51443b",
                      "on-error": "#690005",
                      secondary: "#c1c7cd",
                      "on-surface-variant": "#c6c6cb",
                      "secondary-fixed": "#dde3e9",
                      "inverse-surface": "#e1e2e9"
                    },
                    fontFamily: {
                      mono: ["'JetBrains Mono'", "monospace"],
                      sans: ["'Space Grotesk'", "sans-serif"],
                      headline: ["Sora"],
                      display: ["Sora"],
                      body: ["Space Grotesk"],
                      label: ["Space Grotesk"],
                      pixel: ["'VT323'", "monospace"],
                      "display-vt": ["'VT323'", "monospace"]
                    },
                    borderRadius: {
                      DEFAULT: "1rem",
                      lg: "2rem",
                      xl: "3rem",
                      full: "9999px"
                    }
                  }
                }
              };
            `,
          }}
        />
      </head>
      <body className="bg-[#06080d] text-slate-300 font-sans selection:bg-hud-amber selection:text-black antialiased relative blueprint-grid min-h-screen flex flex-col justify-between">
        <div className="fixed inset-0 pointer-events-none hud-scanline z-40 opacity-40" />
        <Navbar />
        <main className="w-full relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
