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

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: "100svh", // svh accounts for mobile browser chrome
        background: "linear-gradient(135deg, #0f0720 0%, #1a0a3c 35%, #12062e 65%, #0d0525 100%)",
      }}
    >
      {/* ── Background layers ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Geometric grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(167,139,250,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal accent stripe */}
        <div
          className="absolute -right-32 top-0 w-[500px] h-full opacity-[0.06]"
          style={{
            background: "linear-gradient(135deg, transparent 30%, #a78bfa 50%, transparent 70%)",
            transform: "skewX(-20deg)",
          }}
        />

        {/* Soft glow orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-48 opacity-20"
          style={{
            background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-32 opacity-15"
          style={{
            background: "radial-gradient(ellipse, #a78bfa 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Dot field */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Vertical editorial lines — desktop only */}
        <div className="absolute left-[7%] top-0 bottom-0 w-px hidden lg:block"
          style={{ background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.1) 25%, rgba(124,58,237,0.1) 75%, transparent)" }} />
        <div className="absolute right-[7%] top-0 bottom-0 w-px hidden lg:block"
          style={{ background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.1) 25%, rgba(124,58,237,0.1) 75%, transparent)" }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center"
        style={{
          padding: "clamp(5.5rem, 14vw, 7rem) clamp(1.1rem, 5vw, 3rem) clamp(2rem, 6vw, 5rem)",
        }}
      >

        {/* ── Badge ── */}
        <div
          className={`inline-flex items-center gap-2 mb-5 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{
            background: "rgba(167,139,250,0.10)",
            border: "1px solid rgba(167,139,250,0.25)",
            backdropFilter: "blur(12px)",
            transitionDelay: "0ms",
            maxWidth: "90vw",
          }}
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-500 flex-shrink-0"
            style={{ boxShadow: "0 0 8px rgba(167,139,250,0.8)", animation: "heroPulse 2s ease-in-out infinite" }} />
          <span className="text-[9px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.16em] uppercase font-semibold text-violet-400 text-center leading-snug">
            Kathmandu, Nepal &nbsp;·&nbsp; Est. 2080 BS &nbsp;·&nbsp; CE &amp; NMPA Certified
          </span>
        </div>

        {/* ── Eyebrow ── */}
        <p
          className={`text-[9px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.28em] uppercase font-bold text-violet-400 mb-4 sm:mb-5 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: "80ms" }}
        >
          Nepal&apos;s Premier Biomedical Diagnostics Partner
        </p>

        {/* ── Headline ── */}
        <h1
          className={`font-bold leading-[1.12] text-white mb-4 sm:mb-5 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            fontSize: "clamp(1.9rem, 7.5vw, 4.5rem)",
            letterSpacing: "-0.03em",
            transitionDelay: "140ms",
          }}
        >
          Precision{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 40%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Diagnostic
          </span>{" "}
          <br className="hidden sm:block" />
          for Modern Nepal
        </h1>

        {/* ── Divider ── */}
        <div
          className={`w-12 sm:w-16 h-0.5 rounded-full mb-4 sm:mb-6 transition-all duration-700 ${mounted ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          style={{
            background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
            transitionDelay: "220ms",
          }}
        />

        {/* ── Sub ── */}
        <p
          className={`text-gray-400 max-w-xl leading-[1.8] mb-8 sm:mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ fontSize: "clamp(0.82rem, 2.2vw, 1.05rem)", transitionDelay: "280ms" }}
        >
          Cognidx Enterprises delivers world-class biomedical diagnostic
          instruments — Empowering hospitals, clinics, and labs across Nepal.
        </p>

        {/* ── CTA buttons ── */}
        <div
          className={`flex flex-col sm:flex-row gap-3 justify-center mb-8 sm:mb-12 w-full max-w-xs sm:max-w-none transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "340ms" }}
        >
          <Link
            href="/products"
            className="group relative inline-flex items-center justify-center gap-2.5 font-bold px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              fontSize: "clamp(0.85rem, 2.5vw, 0.94rem)",
              background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
              boxShadow: "0 4px 24px rgba(109,40,217,0.35), 0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 55%)" }} />
            <span className="relative">Explore Products</span>
            <ArrowRight size={14} className="relative transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/#about"
            className="group inline-flex items-center justify-center gap-2.5 font-semibold px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl text-violet-400 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              fontSize: "clamp(0.85rem, 2.5vw, 0.94rem)",
              background: "rgba(124,58,237,0.07)",
              border: "1.5px solid rgba(124,58,237,0.22)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.13)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.07)"; }}
          >
            About Us
          </Link>
        </div>

        {/* ── Trust line ── */}
        <div
          className={`w-full max-w-2xl transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "480ms" }}
        >
          <p className="text-center text-[10px] sm:text-[11px] text-gray-500 tracking-wide">
            Trusted by leading hospitals &amp; diagnostic labs across Nepal
          </p>
        </div>
      </div>

      {/* Keyframe for badge pulse */}
      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}
