"use client";

import { FlaskConical, Users, Award, Microscope } from "lucide-react";
import Image from "next/image";

const stats = [
  { num: "50+",  label: "Product Lines",         icon: FlaskConical },
  { num: "200+", label: "Institutions Served",   icon: Users        },
  { num: "5+",   label: "Global Brand Partners", icon: Award        },
  { num: "70+",  label: "Test Parameters",       icon: Microscope   },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "100px 24px",
        background: "#f4f1fb",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Soft background blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "-8%", right: "-4%",
          width: 560, height: 560, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 68%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-6%", left: "-4%",
          width: 440, height: 440, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,181,253,0.14) 0%, transparent 68%)",
        }} />
      </div>

      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>

        {/* Eyebrow — "Who We Are" inside a solid purple pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 52 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 20px", borderRadius: 100,
            background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
            boxShadow: "0 4px 18px rgba(109,40,217,0.30)",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0 0 6px rgba(255,255,255,0.9)",
            }} />
            <span style={{
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#fff", fontWeight: 700,
            }}>
              Who We Are
            </span>
          </div>
          <div style={{ height: 1, width: 48, background: "linear-gradient(90deg, #a78bfa, transparent)" }} />
        </div>

        {/* Main 2-col grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}>

          {/* LEFT — Image inside purple blob bubble */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>

            {/* Outer soft glow */}
            <div style={{
              position: "absolute",
              width: "115%", height: "115%",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "44% 56% 58% 42% / 50% 46% 54% 50%",
              background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, rgba(167,139,250,0.08) 55%, transparent 72%)",
              filter: "blur(22px)",
            }} />

            {/* Purple bubble fill behind image */}
            <div style={{
              position: "absolute",
              width: "96%", height: "96%",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "38% 62% 54% 46% / 46% 44% 56% 54%",
              background: "linear-gradient(145deg, #ede9fe 0%, #ddd6fe 50%, #c4b5fd 100%)",
            }} />

            {/* Image bubble */}
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              aspectRatio: "4/5",
              borderRadius: "38% 62% 52% 48% / 46% 42% 58% 54%",
              overflow: "hidden",
              border: "2px solid rgba(124,58,237,0.25)",
              boxShadow: "0 8px 48px rgba(109,40,217,0.18), 0 2px 12px rgba(109,40,217,0.1)",
            }}>
              <div style={{
                position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
                background: "linear-gradient(160deg, rgba(124,58,237,0.10) 0%, transparent 50%, rgba(109,40,217,0.08) 100%)",
              }} />
              <Image
                src="/about.jpg"
                alt="About Cognidx"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Floating cert badges */}
            <div style={{
              position: "absolute", bottom: 20, right: 0,
              display: "flex", flexDirection: "column", gap: 8, zIndex: 10,
            }}>
              {[
                { label: "CE",   sub: "EU Standards", bg: "linear-gradient(135deg,#f59e0b,#fbbf24)", shadow: "rgba(245,158,11,0.35)" },
                { label: "NMPA", sub: "CN Standards",  bg: "linear-gradient(135deg,#059669,#10b981)", shadow: "rgba(5,150,105,0.3)"  },
              ].map((cert) => (
                <div key={cert.label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "rgba(255,255,255,0.92)", backdropFilter: "blur(14px)",
                  border: "1px solid rgba(124,58,237,0.12)",
                  borderRadius: 14, padding: "8px 14px",
                  boxShadow: "0 4px 20px rgba(109,40,217,0.12)",
                }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                    background: cert.bg, boxShadow: `0 4px 10px ${cert.shadow}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontSize: 9, fontWeight: 800, color: "#fff" }}>{cert.label}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#1e0a3c", lineHeight: 1.2 }}>{cert.label} Certified</div>
                    <div style={{ fontSize: 11, color: "#7c3aed" }}>{cert.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Text + Stats */}
          <div>
            <h2 style={{
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: "-0.025em",
  color: "rgb(20, 8, 48)",
  marginBottom: 20,
}} className="text-5xl">
  Pioneering Biomedical <span style={{ color: "#7c3aed" }}>Diagnostics</span>
</h2>

            <p style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
              color: "#4b3f6b", lineHeight: 1.85,
              marginBottom: 14,
            }}>
              <strong style={{ color: "#140830", fontWeight: 700 }}>Cognidx Enterprises Pvt. Ltd.</strong> is
              headquartered in Kathmandu, Nepal — bridging advanced diagnostic technology with accessible
              healthcare across South Asia. We partner with CE &amp; NMPA certified global manufacturers
              to deliver state-of-the-art analyzers to hospitals, clinics, and labs nationwide.
            </p>

            <p style={{
              fontSize: "clamp(0.92rem, 1.3vw, 1rem)",
              color: "#7c6fa0", lineHeight: 1.8,
              marginBottom: 40,
            }}>
              From remote mountain clinics to urban tertiary hospitals — accurate, fast, and affordable
              diagnostics reach wherever healthcare is delivered.
            </p>

            {/* Stats 2×2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.num}
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(124,58,237,0.12)",
                      borderRadius: 18,
                      padding: "22px 22px 18px",
                      boxShadow: "0 2px 16px rgba(109,40,217,0.07)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 8px 32px rgba(109,40,217,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 16px rgba(109,40,217,0.07)";
                    }}
                  >
                    <Icon size={18} style={{ color: "#a78bfa", marginBottom: 10 }} />
                    <div style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      fontWeight: 800, lineHeight: 1,
                      color: "#7c3aed", marginBottom: 6, letterSpacing: "-0.02em",
                    }}>
                      {s.num}
                    </div>
                    <div style={{ fontSize: 13, color: "#7c6fa0", fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Brand partners */}
            <div style={{ marginTop: 28 }}>
              <p style={{
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#a78bfa", marginBottom: 12, fontWeight: 600,
              }}>
                Brand Partners
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Anbio", "Seamaty", "Bioelab", "Keylights", "Fapon"].map((b) => (
                  <span key={b} style={{
                    fontSize: 13, fontWeight: 600,
                    padding: "6px 16px", borderRadius: 100,
                    background: "#ede9fe",
                    border: "1px solid rgba(124,58,237,0.18)",
                    color: "#5b21b6",
                    cursor: "default",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#ddd6fe";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#ede9fe";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
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
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}