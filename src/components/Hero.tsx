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

const pills = ["Fluorescence Immunoassay", "Haematology", "Blood Gas", "Chemiluminescence", "Biochemistry", "Urinalysis"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(155deg, #6d28d9 0%, #7c3aed 20%, #8b5cf6 42%, #a78bfa 62%, #c4b5fd 80%, #ddd6fe 100%)",
      }}
    >

      {/* ── Atmosphere ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main center bloom */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px]"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 40%, transparent 68%)",
            filter: "blur(50px)",
          }} />
        {/* Rose accent top-right */}
        <div className="absolute -top-20 -right-10 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(circle, rgba(244,114,182,0.25) 0%, transparent 65%)",
            filter: "blur(50px)",
          }} />
        {/* Indigo bottom-left */}
        <div className="absolute -bottom-10 -left-10 w-[450px] h-[380px]"
          style={{
            background: "radial-gradient(ellipse, rgba(109,40,217,0.35) 0%, transparent 65%)",
            filter: "blur(45px)",
          }} />
        {/* Top white haze */}
        <div className="absolute top-0 inset-x-0 h-48"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)" }} />
        {/* Bottom gold horizon */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px]"
          style={{
            background: "radial-gradient(ellipse, rgba(251,191,36,0.15) 0%, transparent 70%)",
            filter: "blur(35px)",
          }} />

        {/* Fine dot grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

        {/* Diagonal shimmer sweep */}
        <div className="absolute inset-0 opacity-[0.14]"
          style={{ background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.7) 50%, transparent 70%)" }} />
      </div>

      {/* ── Vertical editorial lines ── */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-[8%] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.15) 75%, transparent)" }} />
        <div className="absolute right-[8%] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.15) 75%, transparent)" }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center">

        {/* ── Live badge ── */}
        <div
          className={`inline-flex items-center gap-2.5 mb-7 px-5 py-2 rounded-full transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.38)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 2px 24px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.25)",
            transitionDelay: "0ms",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-300"
            style={{ boxShadow: "0 0 10px rgba(110,231,183,1), 0 0 4px rgba(110,231,183,0.8)", animation: "heroPulse 2s ease-in-out infinite" }} />
          <span className=" text-[11px] tracking-[0.18em] uppercase text-white/90 font-medium">
            Kathmandu, Nepal &nbsp;·&nbsp; Est. 2019 &nbsp;·&nbsp; CE &amp; NMPA Certified
          </span>
        </div>

        {/* ── Headline — big editorial treatment ── */}
        <div
          className={`mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <p className=" text-[11px] tracking-[0.32em] uppercase mb-4 font-bold"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.9), rgba(255,255,255,0.5))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            Nepal&apos;s Premier Biomedical Diagnostics Partner
          </p>

          <h1
            className=" font-bold text-white leading-[1.05]"
            style={{
              fontSize: "clamp(2.6rem, 7.5vw, 5.2rem)",
              letterSpacing: "-0.025em",
              textShadow: "0 4px 40px rgba(109,40,217,0.4)",
            }}
          >
            Precision
            <span
              className="mx-3 lg:mx-5 italic"
              style={{
                background: "linear-gradient(135deg, #fef9c3 0%, #fde68a 30%, #fbbf24 60%, #f59e0b 85%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(251,191,36,0.6))",
                animation: "goldShimmer 5s linear infinite",
              }}
            >
              Diagnostics
            </span>
            <br className="hidden sm:block" />
            for Modern Nepal
          </h1>
        </div>

        {/* ── Sub ── */}
        <p
          className={`text-white/75 max-w-lg leading-[1.85] mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.12rem)", transitionDelay: "200ms" }}
        >
          Cognidx Enterprises delivers world-class biomedical diagnostic
          instruments — from immunoassay to haematology — empowering hospitals,
          clinics, and labs across South Asia.
        </p>

        {/* ── CTA buttons ── */}
        <div
          className={`flex flex-wrap gap-4 justify-center mb-12 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <Link
            href="/products"
            className="group relative inline-flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-2xl text-[#3b0764] text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #fef9c3 0%, #fde68a 35%, #fbbf24 70%, #f59e0b 100%)",
              boxShadow: "0 6px 32px rgba(251,191,36,0.55), 0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, transparent 55%)" }} />
            <span className="relative">Explore Products</span>
            <ArrowRight size={15} className="relative transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/#about"
            className="group inline-flex items-center gap-2.5 font-semibold px-8 py-3.5 rounded-2xl text-white text-[15px] transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.38)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.20)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.24)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
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
              className="text-[11px] font-semibold px-3.5 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(8px)",
                animationDelay: `${i * 60}ms`,
              }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* ── Stats grid ── */}
        <div
          className={`w-full max-w-2xl transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center py-5 px-3 text-center relative group cursor-default"
                  style={{
                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.14)" : "none",
                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.14)" : "none",
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(255,255,255,0.07)" }} />
                  <Icon size={16} className="relative mb-2 text-white/50" />
                  <div
                    className=" text-[2rem] font-bold leading-none mb-1 relative"
                    style={{
                      background: "linear-gradient(135deg, #fef9c3, #fbbf24)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 10px rgba(251,191,36,0.4))",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-white/60 text-[11px] font-medium tracking-wide relative leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes goldShimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.35); }
        }
      `}</style>
    </section>
  );
}
