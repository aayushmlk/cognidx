"use client";

import { useState, useEffect, useRef } from "react";
import { DNACanvas } from "./DNA";
import { FlaskConical, Microscope, Activity, Award } from "lucide-react";

const pills = [
  "Fluorescence Immunoassay",
  "Haematology",
  "Blood Gas",
  "Chemiluminescence",
  "Biochemistry",
  "Urinalysis",
];

const stats = [
  { num: 70,  suffix: "+", label: "Test Parameters",     icon: FlaskConical },
  { num: 200, suffix: "+", label: "Institutions Served", icon: Award },
  { num: 5,   suffix: "",  label: "Global Brands",       icon: Microscope },
  { num: 50,  suffix: "+", label: "Product Lines",       icon: Activity },
];

function useCountUp(target, duration, start) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function StatCell({ stat, index, animate, borderRight }) {
  const Icon  = stat.icon;
  const count = useCountUp(stat.num, 1600 + index * 200, animate);
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center", padding: "14px 6px",
        borderRight, transition: "background 0.2s", cursor: "default",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
    >
      <Icon size={22} style={{ color: "rgba(167,139,250,0.5)", marginBottom: 5 }} />
      <div style={{
        fontSize: "clamp(1.2rem,2.6vw,1.6rem)", fontWeight: 700,
        lineHeight: 1, marginBottom: 3,
        fontFamily: "'Syne',sans-serif", color: "#e9d5ff",
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{ color: "rgba(196,181,253,0.5)", fontSize: 10, fontWeight: 500, letterSpacing: "0.05em" }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted]           = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
 
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => setStatsVisible(true), 700);
    return () => clearTimeout(t);
  }, [mounted]);
 
  const fade = (delay) => ({
    transition: "opacity 0.65s ease, transform 0.65s ease",
    transitionDelay: delay,
    opacity:   mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(14px)",
  });
 
  return (
    <section style={{
      position: "relative", width: "100%", height: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", background: "#0d0414",
    }}>
      <DNACanvas />
 
      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(13,4,20,0.18) 0%, rgba(13,4,20,0.70) 100%), linear-gradient(180deg, rgba(13,4,20,0.88) 0%, rgba(13,4,20,0.10) 28%, rgba(13,4,20,0.10) 72%, rgba(13,4,20,0.88) 100%)",
      }} />
 
      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10, display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center", width: "100%",
        maxWidth: 860, padding: "0 20px", gap: 0,
      }}>
 
        {/* Badge */}
        <div style={{
          ...fade("0ms"), display: "inline-flex", alignItems: "center", gap: 8,
          marginBottom: 12, padding: "6px 15px", borderRadius: 100,
          background: "rgba(88,28,135,0.35)", border: "1px solid rgba(167,139,250,0.3)",
          backdropFilter: "blur(14px)",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%", background: "#a78bfa",
            boxShadow: "0 0 10px rgba(167,139,250,0.9), 0 0 22px rgba(167,139,250,0.5)",
            flexShrink: 0, animation: "heroPulse 2s ease-in-out infinite",
          }} />
          <span style={{
            fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#ddd6fe", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap",
          }}>
            Kathmandu, Nepal &nbsp;-&nbsp; Est. 2019 
          </span>
        </div>
 
        {/* Eyebrow */}
        <p style={{
          ...fade("80ms"), fontSize: 13, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "#a78bfa",
          fontWeight: 600, fontFamily: "'DM Sans', sans-serif", marginBottom: 14,
        }}>
          Nepal&apos;s Premier Biomedical Diagnostics Partner
        </p>
 
        {/* Headline — plain white, no gradient text */}
        <h1 style={{
          ...fade("140ms"),
          fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
          fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.025em",
          color: "#f5f0ff", fontFamily: "'DM Sans', sans-serif", marginBottom: 18,
        }}>
          Cognidx —{" "}
          <span style={{ color: "#c4b5fd", fontStyle: "italic", fontWeight: 700 }}>
            Improving lives
          </span>{" "}
          with precision and care
        </h1>
 
        {/* Divider */}
        <div style={{
          ...fade("200ms"), width: 44, height: 2, borderRadius: 99,
          background: "linear-gradient(90deg,#7c3aed,#a78bfa)", margin: "0 auto 12px",
        }} />
 
        {/* Sub — plain readable text */}
        <p style={{
          ...fade("250ms"),
          fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
          color: "rgba(220,210,240,0.75)", lineHeight: 1.8,
          maxWidth: 560, marginBottom: 20,
          fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
        }}>
          Cognidx Enterprises delivers world-class biomedical diagnostic instruments —
          from immunoassay to haematology — empowering hospitals, clinics, and labs
          across Nepal.
        </p>
 
        {/* Pills */}
        <div style={{
          ...fade("310ms"), display: "flex", flexWrap: "wrap",
          justifyContent: "center", gap: 6, marginBottom: 14, marginTop: 5,
        }}>
          {pills.map((p) => (
            <span
              key={p}
              style={{
                fontSize: 12, fontWeight: 500, padding: "6px 16px",
                borderRadius: 100, background: "rgba(88,28,135,0.3)",
                border: "1px solid rgba(167,139,250,0.22)", color: "#ddd6fe",
                backdropFilter: "blur(6px)", cursor: "default",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(88,28,135,0.55)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(88,28,135,0.3)"; }}
            >
              {p}
            </span>
          ))}
        </div>
 
        {/* Stats */}
        <div style={{ ...fade("370ms"), width: "100%", maxWidth: 620 }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderRadius: 15,
            overflow: "hidden", background: "rgba(30,10,50,0.65)",
            border: "1px solid rgba(167,139,250,0.18)", backdropFilter: "blur(24px)",
            boxShadow: "0 4px 32px rgba(109,40,217,0.18), inset 0 1px 0 rgba(167,139,250,0.1)",
          }}>
            {stats.map((stat, i) => (
              <StatCell
                key={stat.label}
                stat={stat}
                index={i}
                animate={statsVisible}
                borderRight={i < stats.length - 1 ? "1px solid rgba(167,139,250,0.12)" : "none"}
              />
            ))}
          </div>
          <p style={{
            textAlign: "center", fontSize: 10,
            marginTop: 9, letterSpacing: "0.05em",
          }} className="text-gray-100/60">
            Trusted by leading hospitals &amp; diagnostic labs all over Nepal
          </p>
        </div>
      </div>
 
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes heroPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.5); }
        }
      `}</style>
    </section>
  );
}