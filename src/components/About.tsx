"use client";

import { FlaskConical, Users, Award, Microscope, Wrench, BookOpen, Package, Building2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { num: "50+", label: "Product Lines", icon: FlaskConical },
  { num: "100+", label: "Hospitals Reached", icon: Building2 },
  { num: "5+", label: "Global Brand Partners", icon: Award },
  { num: "70+", label: "Test Parameters", icon: Microscope },
];

export default function About() {
  const [animatedNums, setAnimatedNums] = useState(stats.map(() => 0));

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "80px 20px",
        background: "#f4f1fb",
        overflow: "hidden",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #7c3aed66, #7c3aed, #7c3aed66, transparent)",
        }}
      />
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

      <style>{`
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .about-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .about-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 4/5;
          border-radius: 38% 62% 52% 48% / 46% 42% 58% 54%;
          overflow: hidden;
          border: 2px solid rgba(124,58,237,0.25);
          box-shadow: 0 8px 48px rgba(109,40,217,0.18), 0 2px 12px rgba(109,40,217,0.1);
        }
        .about-cert-badges {
          position: absolute;
          bottom: 20px;
          right: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 10;
        }
        .about-services-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 52px;
          flex-wrap: wrap;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-image-col {
            display: flex;
            justify-content: center;
          }
          .about-image-wrapper {
            max-width: 320px;
          }
          .about-cert-badges {
            right: 0;
            bottom: 10px;
          }
        }
        @media (max-width: 600px) {
          .about-services-grid {
            grid-template-columns: 1fr;
          }
          .about-stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .about-image-wrapper {
            max-width: 260px;
          }
          .about-cert-badges {
            right: -8px;
            bottom: 0;
          }
          .about-services-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 32px;
          }
          .about-hero-title {
            font-size: 2rem !important;
          }
        }
      `}</style>

      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>


        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 52 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 20px", borderRadius: 100,
            background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
            boxShadow: "0 4px 18px rgba(109,40,217,0.30)",
          }}>
            <span className="animate-pulse" style={{
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
        <div className="about-hero-grid">

          {/* LEFT — Image inside purple blob bubble */}
          <div className="about-image-col" style={{ position: "relative", display: "flex", justifyContent: "center" }}>

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
            <div className="about-image-wrapper">
              <div style={{
                position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
                background: "linear-gradient(160deg, rgba(124,58,237,0.10) 0%, transparent 50%, rgba(109,40,217,0.08) 100%)",
              }} />
              <Image
                width={400} height={500}
                src="/about.jpg"
                alt="About Cognidx"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* RIGHT — Text + Stats */}
          <div>
            <h2
              className="about-hero-title"
              style={{
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "rgb(20, 8, 48)",
                marginBottom: 20,
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              We bring the right <span style={{ color: "#7c3aed" }}>diagnostic tools</span> to every hospital in Nepal
            </h2>

            <p className="text-justify" style={{
              fontSize: "clamp(0.92rem, 1.4vw, 1.05rem)",
              color: "#4b3f6b", lineHeight: 1.85,
              marginBottom: 14,
            }}>
              <strong style={{ color: "#140830", fontWeight: 700 }}>Cognidx Enterprises Pvt. Ltd.</strong> began with a simple goal: to make quality diagnostic equipment easily accessible in Nepal. We supply and distribute medical instruments, reagents, and consumables used by labs and hospitals daily.
            </p>

            <p className="text-justify" style={{
              fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
              color: "#4b3f6b", lineHeight: 1.8,
              marginBottom: 40,
            }}>
              Since 2080 B.S., we’ve partnered with over 100 hospitals, from small hill clinics to large urban labs, ensuring the right equipment reaches every healthcare facility, so quality care is available everywhere.
            </p>

            {/* Stats 2×2 */}
            <div className="about-stats-grid">
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(124,58,237,0.12)",
                      borderRadius: 18,
                      padding: "20px 18px 16px",
                      boxShadow: "0 2px 16px rgba(109,40,217,0.07)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "default",
                      textAlign: "center",
                    }}
                  >
                    <Icon size={26} style={{ color: "#a78bfa", marginBottom: 10 }} />
                    <div style={{
                      fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
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
         <div style={{ display: "flex", alignItems: "center", gap: 10 , marginBottom:12}}>
  {/* Vertical Gradient Line */}
  <div
    style={{
      width: 3,
      height: 18,
      borderRadius: 2,
      background: "linear-gradient(180deg, #6a5cff, #b46cff)", // adjust to your gradient
    }}
  />

  {/* Text */}
  <p
    style={{
      fontSize: 11,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#997bf3",
      marginBottom: 0,
      fontWeight: 600,
    }}
  >
    Brand Partners
  </p>
</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Anbio", "Seamaty", "Bioelab", "DiyaLab", "Fapon", "Rayto"].map((b) => (
                  <span key={b} style={{
                    fontSize: 13, fontWeight: 600,
                    padding: "6px 16px", borderRadius: 100,
                    background: "#ede9fe",
                    border: "1px solid rgba(124,58,237,0.18)",
                    color: "#5b21b6",
                    transition: "background 0.2s, transform 0.2s",
                    cursor:"pointer"
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
    </section>
  );
}
