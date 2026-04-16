"use client";

import { FlaskConical, Award, Microscope, Building2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "@/app/About.module.css";

const stats = [
  { num: "50+", label: "Product Lines", icon: FlaskConical },
  { num: "100+", label: "Hospitals Reached", icon: Building2 },
  { num: "5+", label: "Global Brand Partners", icon: Award },
  { num: "70+", label: "Test Parameters", icon: Microscope },
];

const brandPartners = [
  {
    name: "Anbio",
    full: "Anbio Biotechnology",
    origin: "China · Shenzhen",
    products: ["Rapid test kits", "FIA analyzers", "PCR reagents"],
    desc: "Point-of-care diagnostics for infectious disease & immunology.",
  },
  {
    name: "Seamaty",
    full: "Seamaty Medical",
    origin: "China · Chengdu",
    products: ["Biochemistry analyzers", "Electrolyte analyzers"],
    desc: "Compact, fully-automated chemistry analyzers for routine lab work.",
  },
  {
    name: "Bioelab",
    full: "Bioelab",
    origin: "China",
    products: ["Haematology analyzers", "Reagents"],
    desc: "Automated blood cell counting and CBC analysis instruments.",
  },
  {
    name: "DiyaLab",
    full: "DiyaLab",
    origin: "China",
    products: ["FIA analyzers", "Immunoassay strips"],
    desc: "Fluorescence immunoassay systems for rapid quantitative testing.",
  },
  {
    name: "Fapon",
    full: "Fapon Biotech",
    origin: "China · Shenzhen",
    products: ["Chemiluminescence analyzers", "Immunoassay reagents"],
    desc: "High-sensitivity CLIA platforms for hormones, tumour markers & more.",
  },
  {
    name: "Rayto",
    full: "Rayto Life Sciences",
    origin: "China · Shenzhen",
    products: ["ELISA readers", "Urine analyzers", "Microplate washers"],
    desc: "Full-range lab instruments covering urinalysis and immunology workflows.",
  },
];

export default function About() {
  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  return (
    
    <section id="about" style={{ position: "relative", padding: "80px 20px", background: "#f4f1fb", overflow: "hidden", }}>
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background:
            "linear-gradient(90deg, transparent, #7c3aed66, #7c3aed, #7c3aed66, transparent)",
        }}
      />

      {/* Soft background blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-8%",
            right: "-4%",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-6%",
            left: "-4%",
            width: 440,
            height: 440,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,181,253,0.14) 0%, transparent 68%)",
          }}
        />
      </div>

      {/* ── All styles are now in About.module.css — no inline <style> tag ── */}

      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 52 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              boxShadow: "0 4px 18px rgba(109,40,217,0.30)",
            }}
          >
            <span
              className="animate-pulse"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.7)",
                boxShadow: "0 0 6px rgba(255,255,255,0.9)",
              }}
            />
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Who We Are
            </span>
          </div>
          <div
            style={{
              height: 1,
              width: 48,
              background: "linear-gradient(90deg, #a78bfa, transparent)",
            }}
          />
        </div>

        {/* Main 2-col grid */}
        <div className={styles.aboutHeroGrid}>

          {/* LEFT — Image inside purple blob bubble */}
          <div
            className={styles.aboutImageCol}
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            {/* Outer soft glow */}
            <div
              style={{
                position: "absolute",
                width: "115%",
                height: "115%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "44% 56% 58% 42% / 50% 46% 54% 50%",
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.22) 0%, rgba(167,139,250,0.08) 55%, transparent 72%)",
                filter: "blur(22px)",
              }}
            />

            {/* Purple bubble fill behind image */}
            <div
              style={{
                position: "absolute",
                width: "96%",
                height: "96%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "38% 62% 54% 46% / 46% 44% 56% 54%",
                background:
                  "linear-gradient(145deg, #ede9fe 0%, #ddd6fe 50%, #c4b5fd 100%)",
              }}
            />

            {/* Image bubble */}
            <div className={styles.aboutImageWrapper}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  pointerEvents: "none",
                  background:
                    "linear-gradient(160deg, rgba(124,58,237,0.10) 0%, transparent 50%, rgba(109,40,217,0.08) 100%)",
                }}
              />
              <Image
                width={400}
                height={500}
                src="/about.jpg"
                alt="About Cognidx"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* RIGHT — Text + Stats */}
          <div>
            <h2
              className={styles.aboutHeroTitle}
              style={{
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "rgb(20, 8, 48)",
                marginBottom: 20,
              }}
            >
              We bring the right{" "}
              <span style={{ color: "#7c3aed" }}>diagnostic tools</span> to
              every hospital in Nepal
            </h2>

            <p
              className="text-justify"
              style={{
                fontSize: "clamp(0.92rem, 1.4vw, 1.05rem)",
                color: "#4b3f6b",
                lineHeight: 1.85,
                marginBottom: 14,
              }}
            >
              <strong style={{ color: "#140830", fontWeight: 700 }}>
                Cognidx Enterprises Pvt. Ltd.
              </strong>{" "}
              began with a simple goal: to make quality diagnostic equipment
              easily accessible in Nepal. We supply and distribute medical
              instruments, reagents, and consumables used by labs and hospitals
              daily.
            </p>

            <p
              className="text-justify"
              style={{
                fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
                color: "#4b3f6b",
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              Since 2080 B.S., we&apos;ve partnered with over 100 hospitals,
              from small hill clinics to large urban labs, ensuring the right
              equipment reaches every healthcare facility, so quality care is
              available everywhere.
            </p>

            {/* Stats 2×2 */}
            <div className={styles.aboutStatsGrid}>
              {stats.map((s) => {
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
                    <div
                      style={{
                        fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
                        fontWeight: 800,
                        lineHeight: 1,
                        color: "#7c3aed",
                        marginBottom: 6,
                        letterSpacing: "-0.02em",
                      }}
                    >
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
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div
                  style={{
                    width: 3,
                    height: 18,
                    borderRadius: 2,
                    background: "linear-gradient(180deg, #6a5cff, #b46cff)",
                  }}
                />
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

              {/* Pills with hover tooltips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {brandPartners.map((b) => (
                  <div key={b.name} className={styles.brandPillWrapper}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 13,
                        fontWeight: 600,
                        padding: "6px 16px",
                        borderRadius: 100,
                        background: activeBrand === b.name ? "#ddd6fe" : "#ede9fe",
                        border: "1px solid rgba(124,58,237,0.18)",
                        color: "#5b21b6",
                        transition: "background 0.2s, transform 0.2s",
                        transform:
                          activeBrand === b.name
                            ? "translateY(-1px)"
                            : "translateY(0)",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                      onMouseEnter={() => setActiveBrand(b.name)}
                      onMouseLeave={() => setActiveBrand(null)}
                    >
                      <a href="/#brandclients" rel="noopener noreferrer">
                        {b.name}
                      </a>
                    </span>

                    {/* Tooltip */}
                    <div className={styles.brandTooltip}>
                      <div style={{ marginBottom: 8 }}>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: "#140830",
                            marginBottom: 3,
                          }}
                        >
                          {b.full}
                        </div>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#7c3aed",
                            letterSpacing: "0.02em",
                          }}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            style={{ flexShrink: 0 }}
                          >
                            <circle
                              cx="5"
                              cy="4"
                              r="2.5"
                              stroke="#7c3aed"
                              strokeWidth="1.2"
                              fill="none"
                            />
                            <path
                              d="M5 6.5 C5 6.5 2 8.5 2 9"
                              stroke="#7c3aed"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M5 6.5 C5 6.5 8 8.5 8 9"
                              stroke="#7c3aed"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                          </svg>
                          {b.origin}
                        </div>
                      </div>

                      <div
                        style={{
                          borderTop: "1px solid rgba(124,58,237,0.12)",
                          margin: "8px 0",
                        }}
                      />

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                        {b.products.map((prod) => (
                          <span
                            key={prod}
                            style={{
                              fontSize: 11,
                              fontWeight: 500,
                              padding: "2px 8px",
                              borderRadius: 6,
                              background: "#ede9fe",
                              color: "#5b21b6",
                              border: "1px solid rgba(124,58,237,0.15)",
                            }}
                          >
                            {prod}
                          </span>
                        ))}
                      </div>

                      <p
                        style={{
                          fontSize: 11.5,
                          color: "#4b3f6b",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}