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

  const show = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(18px)",
    transition: `opacity .65s ease ${delay}ms, transform .65s ease ${delay}ms`,
  });

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: "100svh",
        // Layered radial-gradient mesh: creamy lavender base with depth-giving orbs
        background: [
          "radial-gradient(ellipse 85% 60% at 12% 10%,  rgba(216,180,254,0.55) 0%, transparent 55%)",
          "radial-gradient(ellipse 60% 70% at 90% 88%,  rgba(192,132,252,0.38) 0%, transparent 55%)",
          "radial-gradient(ellipse 50% 40% at 54% 50%,  rgba(237,221,255,0.45) 0%, transparent 60%)",
          "radial-gradient(ellipse 35% 28% at 78% 18%,  rgba(251,207,232,0.28) 0%, transparent 52%)",
          "linear-gradient(158deg, #eddeff 0%, #e3d0ff 22%, #ecd8ff 48%, #f2e8ff 72%, #e9dcff 100%)",
        ].join(","),
      }}
    >
      {/* ─── Injected keyframes + global helpers ─── */}
      <style>{`

        @keyframes heroPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(168,85,247,0.55); }
          50%      { box-shadow:0 0 0 6px rgba(168,85,247,0); }
        }
        @keyframes floatA {
          0%,100% { transform:translate(0,0) scale(1); }
          33%     { transform:translate(20px,-26px) scale(1.05); }
          66%     { transform:translate(-14px,16px) scale(.97); }
        }
        @keyframes floatB {
          0%,100% { transform:translate(0,0); }
          50%     { transform:translate(-22px,20px); }
        }
        @keyframes floatC {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(-16px); }
        }
        @keyframes spinSlow {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes shimmerAccent {
          0%   { background-position:0% 50%; }
          50%  { background-position:100% 50%; }
          100% { background-position:0% 50%; }
        }
        @keyframes sweepGlint {
          0%   { left:-100%; }
          100% { left:130%; }
        }

        /* Floating blobs */
        .hero-blob { position:absolute; border-radius:50%; pointer-events:none; }
        .hero-blob-1 {
          width:540px; height:500px; top:-100px; left:-140px;
          background:radial-gradient(circle,rgba(216,180,254,.72)0%,rgba(192,132,252,.28)52%,transparent 75%);
          filter:blur(72px); animation:floatA 14s ease-in-out infinite;
        }
        .hero-blob-2 {
          width:440px; height:420px; bottom:-70px; right:-100px;
          background:radial-gradient(circle,rgba(167,139,250,.65)0%,rgba(139,92,246,.22)55%,transparent 75%);
          filter:blur(65px); animation:floatB 17s ease-in-out infinite;
        }
        .hero-blob-3 {
          width:300px; height:300px; top:38%; left:52%;
          background:radial-gradient(circle,rgba(237,221,255,.88)0%,transparent 70%);
          filter:blur(50px); animation:floatC 11s ease-in-out infinite;
        }
        .hero-blob-4 {
          width:220px; height:220px; top:16%; right:11%;
          background:radial-gradient(circle,rgba(251,207,232,.42)0%,rgba(216,180,254,.28)55%,transparent 75%);
          filter:blur(42px); animation:floatC 15s ease-in-out infinite reverse;
        }

        /* Spinning ring */
        .hero-ring {
          position:absolute; border-radius:50%;
          border:1.5px solid rgba(168,85,247,.14);
          top:-70px; right:-70px; width:400px; height:400px;
          animation:spinSlow 44s linear infinite;
          pointer-events:none;
        }
        .hero-ring::before {
          content:''; position:absolute; inset:36px;
          border-radius:50%; border:1px solid rgba(168,85,247,.09);
        }
        .hero-ring::after {
          content:''; position:absolute; inset:76px;
          border-radius:50%; border:.5px solid rgba(168,85,247,.06);
        }

        /* Floating diamond */
        .hero-diamond {
          position:absolute; border-radius:3px;
          background:rgba(168,85,247,.2); border:1px solid rgba(168,85,247,.34);
          transform:rotate(45deg); pointer-events:none;
        }

        /* Dot cluster */
        .hero-dots { position:absolute; display:grid; grid-template-columns:repeat(5,1fr); gap:6px; opacity:.2; pointer-events:none; }
        .hero-dots span { width:3px; height:3px; border-radius:50%; background:#9333ea; display:block; }

        /* Shimmering gradient text */
        .hero-accent {
          font-style:italic; font-weight:600;
          background:linear-gradient(270deg,#7c3aed,#a855f7,#c084fc,#9333ea);
          background-size:300% 300%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:shimmerAccent 5s ease infinite;
        }

        /* Glint sweep on primary button */
        .hero-btn-glint { position:relative; overflow:hidden; }
        .hero-btn-glint::after {
          content:''; position:absolute; top:0; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);
          animation:sweepGlint 3.6s ease-in-out 1.2s infinite;
        }

        /* Stat card hover */
        .hero-stat { transition:transform .28s ease, box-shadow .28s ease; }
        .hero-stat::before {
          content:''; position:absolute; top:0; left:15%; right:15%;
          height:1.5px; border-radius:9999px;
          background:linear-gradient(90deg,transparent,rgba(168,85,247,.42),transparent);
        }
        .hero-stat:hover {
          transform:translateY(-5px);
          box-shadow:0 18px 44px rgba(168,85,247,.20),inset 0 1px 0 rgba(255,255,255,.95) !important;
        }

        /* Scroll hint */
        .hero-scroll {
          position:absolute; bottom:2rem; left:50%; transform:translateX(-50%);
          display:flex; flex-direction:column; align-items:center; gap:7px;
          opacity:.45; z-index:10; pointer-events:none;
        }
        .hero-scroll-mouse {
          width:22px; height:34px; border-radius:11px;
          border:1.5px solid rgba(168,85,247,.55); position:relative;
        }
        .hero-scroll-wheel {
          position:absolute; top:5px; left:50%; transform:translateX(-50%);
          width:3px; height:6px; border-radius:3px; background:#a855f7;
          animation:floatC 1.6s ease-in-out infinite;
        }
        .hero-scroll-text {
          font-size:9px; letter-spacing:.18em; text-transform:uppercase;
          color:#9333ea; font-weight:600;
        }
      `}</style>

      {/* ─── Background blobs ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-blob hero-blob-4" />
      </div>

      {/* ─── Geometric ornaments ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Mesh grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: [
            "linear-gradient(rgba(147,51,234,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(147,51,234,0.04) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "58px 58px",
        }} />

        {/* Dot field */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle, rgba(109,40,217,0.7) 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }} />

        {/* Spinning concentric rings */}
        <div className="hero-ring hidden lg:block" />

        {/* Arc — bottom left */}
        <svg className="absolute hidden lg:block" style={{ bottom: -40, left: -40, opacity: .12 }}
          width="260" height="260" viewBox="0 0 260 260" fill="none">
          <circle cx="0" cy="260" r="190" stroke="#9333ea" strokeWidth="1.2" />
          <circle cx="0" cy="260" r="140" stroke="#a855f7" strokeWidth=".8" />
          <circle cx="0" cy="260" r="90" stroke="#c084fc" strokeWidth=".5" />
        </svg>

        {/* Floating diamonds */}
        {[
          { w: 13, s: { top: "17%", left: "7%", animation: "floatC 8s ease-in-out infinite" } },
          { w: 9, s: { top: "63%", right: "8%", animation: "floatC 10s ease-in-out infinite reverse", opacity: .6 } },
          { w: 7, s: { bottom: "20%", left: "13%", animation: "floatA 12s ease-in-out infinite", opacity: .5 } },
          { w: 5, s: { top: "28%", left: "38%", animation: "floatB 9s ease-in-out infinite", opacity: .4 } },
        ].map((d, i) => (
          <div key={i} className="hero-diamond" style={{ width: d.w, height: d.w, ...d.s }} />
        ))}

        {/* Dot clusters */}
        <div className="hero-dots hidden lg:grid" style={{ top: "11%", right: "11%" }}>
          {Array.from({ length: 20 }).map((_, i) => <span key={i} />)}
        </div>
        <div className="hero-dots hidden lg:grid" style={{ bottom: "17%", left: "6%" }}>
          {Array.from({ length: 15 }).map((_, i) => <span key={i} />)}
        </div>

        {/* Vertical editorial rails */}
        {["5.5%", "right:5.5%"].map((pos, i) => (
          <div key={i}
            className="absolute top-0 bottom-0 w-px hidden lg:block"
            style={{
              [i === 0 ? "left" : "right"]: "5.5%",
              background: "linear-gradient(180deg,transparent,rgba(168,85,247,0.13) 30%,rgba(168,85,247,0.13) 70%,transparent)",
            }}
          />
        ))}
      </div>

      {/* ─── Main content ─── */}
      <div
        className="hero-root relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center"
        style={{ padding: "clamp(5.5rem,14vw,7.5rem) clamp(1.5rem,5vw,3rem) clamp(2.5rem,7vw,5rem)" }}
      >

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-5 sm:mb-7 px-4 py-2 rounded-full"
          style={{
            background: "rgba(255,255,255,0.68)",
            border: "1.5px solid rgba(168,85,247,0.28)",
            boxShadow: "0 3px 24px rgba(168,85,247,0.14), inset 0 1px 0 rgba(255,255,255,0.9)",
            backdropFilter: "blur(16px)",
            maxWidth: "90vw",
            ...show(0),
          }}
        >
          <span className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#9333ea", animation: "heroPulse 2.2s ease-in-out infinite" }} />
          <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-semibold"
            style={{ color: "#7c3aed" }}>
            Kathmandu, Nepal &nbsp;·&nbsp; Est. 2080 BS
          </span>
        </div>

        {/* Eyebrow */}
        <p
          className="text-[9px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.28em] uppercase font-bold mb-4 sm:mb-5"
          style={{ color: "#9333ea", ...show(80) }}
        >
          Nepal&apos;s Premier Biomedical Diagnostics Partner
        </p>

        {/* Headline */}
        <h1
          className="font-bold leading-[1.07] mb-4 sm:mb-5"
          style={{
            fontFamily: "Raleway, system-ui, sans-serif",
            fontSize: "clamp(2.0rem,7vw,5.0rem)",
            letterSpacing: "-0.01em",
            color: "#2d0a52",
            ...show(140),
          }}
        >
          Precision{" "}
          <span className="hero-accent">Diagnostic</span>
          <br className="hidden sm:block" />
          {" "}for Modern Nepal
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center gap-2.5 mb-4 sm:mb-6"
          style={{ ...show(230), transformOrigin: "center" }}>
          <div style={{ width: 44, height: 1.5, borderRadius: 9999, background: "linear-gradient(90deg,transparent,rgba(168,85,247,0.5))" }} />
          <div style={{ width: 8, height: 8, borderRadius: 2, background: "linear-gradient(135deg,#a855f7,#7c3aed)", transform: "rotate(45deg)", boxShadow: "0 0 12px rgba(168,85,247,0.5)" }} />
          <div style={{ width: 44, height: 1.5, borderRadius: 9999, background: "linear-gradient(90deg,rgba(168,85,247,0.5),transparent)" }} />
        </div>

        {/* Sub */}
        <p
          className="max-w-[36rem] leading-[1.88]"
          style={{ fontSize: "clamp(0.88rem,2.2vw,1.06rem)", fontWeight: 300, color: "#543178", marginBottom: "2.4rem", ...show(290) }}
        >
          Cognidx Enterprises delivers world-class biomedical diagnostic
          instruments — Empowering hospitals, clinics, and labs across Nepal
          with precision, reliability, and care.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10 sm:mb-14 w-full max-w-xs sm:max-w-none"
          style={show(360)}
        >
          {/* Primary */}
          <Link
            href="/products"
            className="hero-btn-glint group relative inline-flex items-center justify-center gap-2.5 font-bold rounded-2xl text-white"
            style={{
              fontSize: "clamp(0.85rem,2.4vw,0.94rem)",
              padding: "clamp(0.8rem,2vw,0.9rem) clamp(1.7rem,4vw,2.1rem)",
              background: "linear-gradient(135deg,#7c3aed 0%,#9333ea 52%,#a855f7 100%)",
              boxShadow: "0 8px 32px rgba(124,58,237,0.38),0 2px 8px rgba(0,0,0,0.07),inset 0 1.5px 0 rgba(255,255,255,0.22),inset 0 -1.5px 0 rgba(0,0,0,0.08)",
              transition: "transform .25s ease, box-shadow .25s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 14px 40px rgba(124,58,237,0.46),0 3px 10px rgba(0,0,0,0.1),inset 0 1.5px 0 rgba(255,255,255,0.22)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 8px 32px rgba(124,58,237,0.38),0 2px 8px rgba(0,0,0,0.07),inset 0 1.5px 0 rgba(255,255,255,0.22),inset 0 -1.5px 0 rgba(0,0,0,0.08)";
            }}
          >
            <span className="relative z-10">Explore Products</span>
            <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Ghost */}
          <Link
            href="/#about"
            className="inline-flex items-center justify-center gap-2.5 font-semibold rounded-2xl"
            style={{
              fontSize: "clamp(0.85rem,2.4vw,0.94rem)",
              padding: "clamp(0.8rem,2vw,0.9rem) clamp(1.7rem,4vw,2.1rem)",
              color: "#7c3aed",
              background: "rgba(255,255,255,0.60)",
              border: "1.5px solid rgba(168,85,247,0.28)",
              boxShadow: "0 4px 20px rgba(168,85,247,0.10),inset 0 1px 0 rgba(255,255,255,0.95)",
              backdropFilter: "blur(14px)",
              transition: "transform .25s ease, background .2s ease, box-shadow .25s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-3px)";
              el.style.background = "rgba(255,255,255,0.82)";
              el.style.boxShadow = "0 10px 30px rgba(168,85,247,0.18),inset 0 1px 0 rgba(255,255,255,0.95)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.background = "rgba(255,255,255,0.60)";
              el.style.boxShadow = "0 4px 20px rgba(168,85,247,0.10),inset 0 1px 0 rgba(255,255,255,0.95)";
            }}
          >
            About Us
          </Link>
        </div>

        {/* Trust separator */}
        <div className="flex items-center gap-3.5 w-full max-w-[680px] mb-5" style={show(440)}>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(168,85,247,0.22))" }} />
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap" style={{ color: "#a07cc0" }}>
            Trusted by leading hospitals &amp; labs across Nepal
          </p>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,rgba(168,85,247,0.22),transparent)" }} />
        </div>

        {/* Stat cards */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 w-full max-w-[780px]"
          style={show(500)}
        >
          {stats.map(({ num, label, icon: Icon }, i) => (
            <div
              key={label}
              className="hero-stat relative flex flex-col items-center gap-2.5 py-5 px-3 rounded-[20px] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.58)",
                border: "1.5px solid rgba(255,255,255,0.88)",
                boxShadow: "0 4px 28px rgba(168,85,247,0.10),0 1px 4px rgba(0,0,0,0.04),inset 0 1px 0 rgba(255,255,255,0.95)",
                backdropFilter: "blur(18px)",
              }}
            >
              {/* Icon bubble */}
              <div className="flex items-center justify-center rounded-xl"
                style={{
                  width: 40, height: 40,
                  background: "linear-gradient(135deg,rgba(237,221,255,0.95)0%,rgba(216,180,254,0.65)100%)",
                  border: "1px solid rgba(168,85,247,0.22)",
                  boxShadow: "0 2px 12px rgba(168,85,247,0.15)",
                }}>
                <Icon size={16} style={{ color: "#7c3aed" }} />
              </div>

              {/* Number */}
              <span
                style={{
                  fontFamily: "Raleway, system-ui, sans-serif",
                  fontSize: "clamp(1.8rem,5vw,2.2rem)",
                  fontWeight: 700,
                  color: "#5b21b6",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >{num}</span>

              {/* Label */}
              <span className="text-center leading-snug font-medium uppercase tracking-wider"
                style={{ fontSize: "clamp(0.59rem,1.5vw,0.65rem)", color: "#a07cc0" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}