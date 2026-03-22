"use client";

import { FlaskConical, Users, Award, Microscope } from "lucide-react";

const stats = [
  { num: "50+",  label: "Product Lines",        icon: FlaskConical, color: "#7c3aed" },
  { num: "200+", label: "Institutions Served",  icon: Users,        color: "#6d28d9" },
  { num: "5+",   label: "Global Brand Partners",icon: Award,        color: "#5b21b6" },
  { num: "70+",  label: "Test Parameters",      icon: Microscope,   color: "#4c1d95" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "96px 24px",
        background: "#06030f",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background glow orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "-10%", left: "-5%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", right: "-5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(88,28,135,0.14) 0%, transparent 65%)",
        }} />
        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, #7c3aed, transparent)" }} />
          <span style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#a78bfa", fontWeight: 600,
          }}>
            Who We Are
          </span>
        </div>

        {/* Main layout: image left, content right */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}>

          {/* LEFT — Image in purple glowing bubble */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>

            {/* Outer glow ring */}
            <div style={{
              position: "absolute",
              width: "105%", height: "105%",
              borderRadius: "42% 58% 55% 45% / 48% 44% 56% 52%",
              background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(88,28,135,0.12) 55%, transparent 72%)",
              filter: "blur(18px)",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
            }} />

            {/* Inner bubble frame */}
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              aspectRatio: "4/5",
              borderRadius: "38% 62% 52% 48% / 46% 42% 58% 54%",
              overflow: "hidden",
              border: "1.5px solid rgba(167,139,250,0.3)",
              boxShadow: "0 0 60px rgba(109,40,217,0.3), 0 0 120px rgba(88,28,135,0.15), inset 0 0 40px rgba(124,58,237,0.08)",
            }}>
              {/* Purple tint overlay on image */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
                background: "linear-gradient(160deg, rgba(109,40,217,0.22) 0%, rgba(88,28,135,0.08) 50%, rgba(109,40,217,0.18) 100%)",
              }} />
              <img
                src="/about.jpg"
                alt="About Cognidx"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Floating cert badges — anchored bottom-right of image */}
            <div style={{
              position: "absolute", bottom: 16, right: 0,
              display: "flex", flexDirection: "column", gap: 8, zIndex: 10,
            }}>
              {[
                { label: "CE", sub: "EU Standards",    bg: "linear-gradient(135deg,#f59e0b,#fbbf24)", shadow: "rgba(245,158,11,0.4)" },
                { label: "NMPA", sub: "CN Standards",  bg: "linear-gradient(135deg,#059669,#10b981)", shadow: "rgba(5,150,105,0.4)" },
              ].map((cert) => (
                <div key={cert.label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "rgba(10,5,20,0.75)", backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14, padding: "8px 14px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: cert.bg, boxShadow: `0 4px 12px ${cert.shadow}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: "#fff" }}>{cert.label}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#f5f0ff", lineHeight: 1.2 }}>{cert.label} Certified</div>
                    <div style={{ fontSize: 11, color: "rgba(196,181,253,0.6)" }}>{cert.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Text + Stats */}
          <div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#f5f0ff", marginBottom: 20,
            }}>
              Pioneering Biomedical{" "}
              <span style={{ color: "#a78bfa" }}>Diagnostics</span>{" "}
              in South Asia
            </h2>

            <p style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
              color: "rgba(210,200,240,0.72)", lineHeight: 1.85,
              marginBottom: 14,
            }}>
              <strong style={{ color: "#e9d5ff", fontWeight: 600 }}>Cognidx Enterprises Pvt. Ltd.</strong> is
              headquartered in Kathmandu, Nepal — bridging advanced diagnostic technology with accessible
              healthcare across South Asia. We partner with CE &amp; NMPA certified global manufacturers
              to deliver state-of-the-art analyzers to hospitals, clinics, and labs nationwide.
            </p>

            <p style={{
              fontSize: "clamp(0.93rem, 1.3vw, 1rem)",
              color: "rgba(196,181,253,0.58)", lineHeight: 1.8,
              marginBottom: 40,
            }}>
              From remote mountain clinics to urban tertiary hospitals — accurate, fast, and affordable
              diagnostics reach wherever healthcare is delivered.
            </p>

            {/* Stats grid — 2×2, prominent */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
            }}>
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.num}
                    style={{
                      background: "rgba(30,10,55,0.7)",
                      border: "1px solid rgba(167,139,250,0.18)",
                      borderRadius: 18,
                      padding: "20px 22px",
                      backdropFilter: "blur(16px)",
                      boxShadow: "0 4px 24px rgba(88,28,135,0.14)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 8px 32px rgba(109,40,217,0.28)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 24px rgba(88,28,135,0.14)";
                    }}
                  >
                    <Icon size={18} style={{ color: "rgba(167,139,250,0.55)", marginBottom: 10 }} />
                    <div style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      fontWeight: 800, lineHeight: 1,
                      color: "#e9d5ff", marginBottom: 6, letterSpacing: "-0.02em",
                    }}>
                      {s.num}
                    </div>
                    <div style={{
                      fontSize: 13, color: "rgba(196,181,253,0.55)", fontWeight: 500,
                    }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Brand partners strip */}
            <div style={{ marginTop: 28 }}>
              <p style={{
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(167,139,250,0.45)", marginBottom: 12, fontWeight: 600,
              }}>
                Brand Partners
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Anbio", "Seamaty", "Bioelab", "Keylights", "Fapon"].map((b) => (
                  <span key={b} style={{
                    fontSize: 13, fontWeight: 600,
                    padding: "6px 16px", borderRadius: 100,
                    background: "rgba(88,28,135,0.28)",
                    border: "1px solid rgba(167,139,250,0.22)",
                    color: "#ddd6fe",
                    backdropFilter: "blur(8px)",
                    cursor: "default",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(88,28,135,0.52)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(88,28,135,0.28)"; }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @media (max-width: 768px) {
          #about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}