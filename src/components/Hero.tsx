"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { num: "70+", label: "Test Parameters" },
  { num: "200+", label: "Institutions" },
  { num: "5", label: "Global Brands" },
  { num: "50+", label: "Product Lines" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #3b0e82 0%, #5521a8 20%, #7c3aed 45%, #9333ea 65%, #a855f7 80%, #c084fc 100%)",
      }}
    >

      {/* ═══════════════════════════════════
          ATMOSPHERE LAYERS
      ═══════════════════════════════════ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Center bloom — brighter */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[800px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(216,180,254,0.30) 0%, rgba(167,139,250,0.12) 45%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Rose top-right */}
        <div className="absolute -top-20 right-0 w-[550px] h-[550px]"
          style={{
            background: "radial-gradient(circle, rgba(244,114,182,0.20) 0%, rgba(232,121,249,0.10) 45%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />
        {/* Lavender bottom-left */}
        <div className="absolute -bottom-10 -left-10 w-[450px] h-[380px]"
          style={{
            background: "radial-gradient(ellipse at bottom left, rgba(196,132,252,0.28) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        {/* Gold horizon */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[200px]"
          style={{
            background: "radial-gradient(ellipse, rgba(251,191,36,0.12) 0%, transparent 65%)",
            filter: "blur(35px)",
          }}
        />
        {/* White soft top vignette */}
        <div className="absolute top-0 inset-x-0 h-48"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)" }}
        />

        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Diagonal shimmer */}
        <div className="absolute inset-0 opacity-[0.10]"
          style={{
            background: "linear-gradient(118deg, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 65%)",
          }}
        />

        {/* Top shimmer line */}
        <div className="absolute top-0 inset-x-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 30%, rgba(244,114,182,0.5) 50%, rgba(255,255,255,0.4) 70%, transparent)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════
          EDITORIAL GRID LINES
      ═══════════════════════════════════ */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-[10%] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.10) 30%, rgba(255,255,255,0.10) 70%, transparent)" }}
        />
        <div className="absolute right-[10%] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.10) 30%, rgba(255,255,255,0.10) 70%, transparent)" }}
        />
        <div className="absolute top-[58%] inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 20%, rgba(255,255,255,0.07) 80%, transparent)" }}
        />
      </div>

      {/* ═══════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-28 flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className="hero-item inline-flex items-center gap-2.5 mb-10 px-5 py-2 rounded-full text-[11px] tracking-[0.18em] uppercase text-white/80"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 2px 20px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.15)",
            animationDelay: "0ms",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"
            style={{ boxShadow: "0 0 8px rgba(110,231,183,0.9)" }}
          />
          Kathmandu, Nepal · Est. 2019 · CE Certified
        </div>

        {/* Eyebrow */}
        <p
          className="hero-item font-mono-custom text-[11px] tracking-[0.32em] uppercase mb-5 font-bold"
          style={{
            background: "linear-gradient(90deg, #fce7f3, #f5d0fe, #ede9fe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animationDelay: "80ms",
          }}
        >
          Biomedical Diagnostic Equipment
        </p>

        {/* Headline */}
        <h1
          className="hero-item font-playfair font-bold text-white leading-[1.04] mb-8"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            letterSpacing: "-0.02em",
            animationDelay: "160ms",
          }}
        >
          Advancing Health
          <br />
          Through{" "}
          <em
            className="italic"
            style={{
              background: "linear-gradient(135deg, #fde68a 0%, #fbbf24 35%, #f59e0b 65%, #fde68a 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(251,191,36,0.55))",
              animation: "goldShimmer 4s linear infinite",
            }}
          >
            Precision
          </em>
          <br />
          <span style={{ color: "rgba(255,255,255,0.92)" }}>Diagnostics</span>
        </h1>

        {/* Sub */}
        <p
          className="hero-item text-white/70 max-w-xl leading-[1.9] mb-12"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            animationDelay: "240ms",
          }}
        >
          Cognidx Enterprises brings world-class biomedical diagnostic
          instruments to hospitals, labs, and clinics — empowering faster,
          more accurate clinical decisions across Nepal and South Asia.
        </p>

        {/* CTAs */}
        <div
          className="hero-item flex flex-wrap gap-4 justify-center mb-16"
          style={{ animationDelay: "320ms" }}
        >
          <Link
            href="#products"
            className="group relative inline-flex items-center gap-2.5 font-bold px-9 py-4 rounded-2xl text-[#2d0e5c] text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%)",
              boxShadow: "0 6px 32px rgba(251,191,36,0.45), 0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 60%)" }}
            />
            <span className="relative">Explore Products</span>
            <ArrowRight size={15} className="relative transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#about"
            className="group inline-flex items-center gap-2.5 font-semibold px-9 py-4 rounded-2xl text-white text-[15px] transition-all duration-300 hover:-translate-y-1.5"
            style={{
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.30)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
          >
            Our Mission
          </Link>
        </div>

        {/* Stats */}
        <div
          className="hero-item w-full max-w-2xl"
          style={{ animationDelay: "400ms" }}
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.20)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-5 px-4 text-center relative group"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <div
                  className="font-playfair text-[1.85rem] font-bold leading-none mb-1.5 relative"
                  style={{
                    background: "linear-gradient(135deg, #fde68a, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.num}
                </div>
                <div className="text-white/60 text-[11px] font-medium tracking-wide relative">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 hover:text-white/65 transition-all duration-300 group"
      >
        <span className="font-mono-custom text-[9px] tracking-[0.25em] uppercase group-hover:tracking-[0.35em] transition-all duration-300">
          Scroll
        </span>
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1px solid rgba(255,255,255,0.25)" }}
        >
          <div
            className="w-1 h-2 rounded-full bg-white/60"
            style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
          />
        </div>
      </a>

      <style>{`
        @keyframes goldShimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scrollDot {
          0%   { transform: translateY(0);    opacity: 1; }
          80%  { transform: translateY(14px); opacity: 0; }
          81%  { transform: translateY(0);    opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-item {
          animation: heroReveal 0.75s cubic-bezier(0.16,1,0.3,1) both;
        }
      `}</style>
    </section>
  );
}
