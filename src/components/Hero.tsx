"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, FlaskConical, Microscope, Activity, Award } from "lucide-react";

const stats = [
  { num: "70+", label: "Test Parameters", icon: FlaskConical },
  { num: "200+", label: "Institutions Served", icon: Award },
  { num: "5", label: "Global Brands", icon: Microscope },
  { num: "50+", label: "Product Lines", icon: Activity },
];

const pills = [
  "Fluorescence Immunoassay",
  "Haematology",
  "Blood Gas",
  "Chemiluminescence",
  "Biochemistry",
  "Urinalysis",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#f5f3ff" }}
    >
      {/* ── Background layers ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft mesh blobs */}
        <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, #ede9fe 0%, transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-[-10%] right-[-8%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, #ddd6fe 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, #c4b5fd 0%, transparent 70%)", filter: "blur(80px)", opacity: 0.45 }} />
        <div className="absolute top-[10%] left-[30%] w-[350px] h-[250px]"
          style={{ background: "radial-gradient(ellipse, #a78bfa 0%, transparent 65%)", filter: "blur(90px)", opacity: 0.2 }} />

        {/* Subtle dot grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.12,
          }} />

        {/* Top gradient fade */}
        <div className="absolute top-0 inset-x-0 h-32"
          style={{ background: "linear-gradient(180deg, rgba(237,233,254,0.8) 0%, transparent 100%)" }} />

        {/* Decorative arcs */}
        <svg className="absolute top-[8%] right-[6%] opacity-[0.07] hidden lg:block" width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="150" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 8" />
          <circle cx="160" cy="160" r="110" stroke="#7c3aed" strokeWidth="1" strokeDasharray="4 10" />
          <circle cx="160" cy="160" r="70" stroke="#7c3aed" strokeWidth="0.8" />
        </svg>
        <svg className="absolute bottom-[6%] left-[4%] opacity-[0.06] hidden lg:block" width="260" height="260" viewBox="0 0 260 260" fill="none">
          <circle cx="130" cy="130" r="120" stroke="#7c3aed" strokeWidth="1" strokeDasharray="5 9" />
          <circle cx="130" cy="130" r="80" stroke="#7c3aed" strokeWidth="0.8" />
        </svg>

        {/* Vertical editorial lines */}
        <div className="absolute left-[7%] top-0 bottom-0 w-px hidden lg:block"
          style={{ background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.1) 25%, rgba(124,58,237,0.1) 75%, transparent)" }} />
        <div className="absolute right-[7%] top-0 bottom-0 w-px hidden lg:block"
          style={{ background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.1) 25%, rgba(124,58,237,0.1) 75%, transparent)" }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 pt-28 pb-20 flex flex-col items-center text-center">

        {/* ── Badge ── */}
        <div
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
            transitionDelay: "0ms",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0"
            style={{ boxShadow: "0 0 8px rgba(124,58,237,0.8)", animation: "heroPulse 2s ease-in-out infinite" }} />
          <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-violet-700 font-semibold whitespace-nowrap">
            Kathmandu, Nepal &nbsp;·&nbsp; Est. 2019 &nbsp;·&nbsp; CE &amp; NMPA Certified
          </span>
        </div>

        {/* ── Eyebrow ── */}
        <p
          className={`text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-bold text-violet-400 mb-5 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: "80ms" }}
        >
          Nepal&apos;s Premier Biomedical Diagnostics Partner
        </p>

        {/* ── Headline ── */}
        <h1
          className={`font-bold leading-[1.1] text-gray-900 mb-5 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            fontSize: "clamp(2.2rem, 6.5vw, 4.5rem)",
            letterSpacing: "-0.03em",
            transitionDelay: "140ms",
          }}
        >
          Precision{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #6d28d9 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 5s linear infinite",
            }}
          >
            Diagnostics
          </span>{" "}
          <br className="hidden sm:block" />
          for Modern Nepal
        </h1>

        {/* ── Divider ── */}
        <div
          className={`w-16 h-0.5 rounded-full mb-6 transition-all duration-700 ${mounted ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          style={{
            background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
            transitionDelay: "220ms",
          }}
        />

        {/* ── Sub ── */}
        <p
          className={`text-gray-500 max-w-xl leading-[1.9] mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)", transitionDelay: "280ms" }}
        >
          Cognidx Enterprises delivers world-class biomedical diagnostic
          instruments — from immunoassay to haematology — empowering hospitals,
          clinics, and labs across South Asia.
        </p>

        {/* ── CTA buttons ── */}
        <div
          className={`flex flex-col sm:flex-row gap-3 justify-center mb-12 w-full max-w-xs sm:max-w-none transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "340ms" }}
        >
          <Link
            href="/products"
            className="group relative inline-flex items-center justify-center gap-2.5 font-bold px-8 py-3.5 rounded-2xl text-white text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
              boxShadow: "0 4px 24px rgba(109,40,217,0.35), 0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 55%)" }} />
            <span className="relative">Explore Products</span>
            <ArrowRight size={15} className="relative transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/#about"
            className="group inline-flex items-center justify-center gap-2.5 font-semibold px-8 py-3.5 rounded-2xl text-violet-700 text-[15px] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(124,58,237,0.07)",
              border: "1.5px solid rgba(124,58,237,0.22)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.13)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.07)"; }}
          >
            Our Mission
          </Link>
        </div>

        {/* ── Specialty pills ── */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-14 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "400ms" }}
        >
          {pills.map((p, i) => (
            <span
              key={p}
              className="text-[11px] font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:bg-violet-100 cursor-default"
              style={{
                background: "rgba(124,58,237,0.07)",
                border: "1px solid rgba(124,58,237,0.18)",
                color: "#6d28d9",
              }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* ── Stats grid ── */}
        <div
          className={`w-full max-w-2xl transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "480ms" }}
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(124,58,237,0.14)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 4px 32px rgba(109,40,217,0.08), 0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              const isLastRow0 = i < 2;
              const isNotLast = i < stats.length - 1;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center py-6 px-3 text-center relative group cursor-default transition-colors duration-200"
                  style={{
                    borderRight: isNotLast ? "1px solid rgba(124,58,237,0.1)" : "none",
                    borderBottom: isLastRow0 ? "1px solid rgba(124,58,237,0.1)" : "none",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  <Icon size={15} className="mb-2 text-violet-300" />
                  <div
                    className="text-[1.85rem] font-bold leading-none mb-1"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-gray-400 text-[11px] font-medium tracking-wide leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust line */}
          <p className="text-center text-[11px] text-gray-400 mt-4 tracking-wide">
            Trusted by leading hospitals &amp; diagnostic labs across Nepal &amp; South Asia
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.55; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
