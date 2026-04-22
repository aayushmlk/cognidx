"use client";
import { useState, useRef, useEffect } from "react";

const brandPartners = [
  {
    name: "Anbio",
    full: "Anbio Biotechnology",
    origin: "Shenzhen, China",
    products: ["Rapid test kits", "FIA analyzers", "PCR reagents"],
    desc: "Point-of-care diagnostics for infectious disease & immunology.",
    website: "https://www.anbio.cn",
    index: "01",
  },
  {
    name: "Seamaty",
    full: "Seamaty Medical",
    origin: "Chengdu, China",
    products: ["Biochemistry analyzers", "Electrolyte analyzers"],
    desc: "Compact, fully-automated chemistry analyzers for routine lab work.",
    website: "https://www.seamaty.com",
    index: "02",
  },
  {
    name: "Bioelab",
    full: "Bioelab",
    origin: "China",
    products: ["Haematology analyzers", "Reagents"],
    desc: "Automated blood cell counting and CBC analysis instruments.",
    website: "https://www.bioelab.com",
    index: "03",
  },
  {
    name: "DiyaLab",
    full: "DiyaLab",
    origin: "China",
    products: ["FIA analyzers", "Immunoassay strips"],
    desc: "Fluorescence immunoassay systems for rapid quantitative testing.",
    website: "https://www.diyalab.com",
    index: "04",
  },
  {
    name: "Fapon",
    full: "Fapon Biotech",
    origin: "Shenzhen, China",
    products: ["Chemiluminescence analyzers", "Immunoassay reagents"],
    desc: "High-sensitivity CLIA platforms for hormones, tumour markers & more.",
    website: "https://www.fapon.com",
    index: "05",
  },
  {
    name: "Rayto",
    full: "Rayto Life Sciences",
    origin: "Shenzhen, China",
    products: ["ELISA readers", "Urine analyzers", "Microplate washers"],
    desc: "Full-range lab instruments covering urinalysis and immunology workflows.",
    website: "https://www.rayto.com",
    index: "06",
  },
];

{/* const clients = [
  { name: "Agilus Diagnostic Nepal Pvt. Ltd." },
  { name: "Alfa Diagnostic Lab" },
  { name: "Alfa Polyclinic Pvt. Ltd." },
  { name: "Army Hospital" },
  { name: "Asian Diagnostic Laboratory Pvt. Ltd." },
  { name: "Aster Path Lab" },
  { name: "Bageshwori Diagnostic And Polyclinic" },
  { name: "Bhabisya Polyclinic" },
  { name: "Boby Medical Hall And Polyclinic Pvt. Ltd." },
  { name: "Chaudhary Sarkar Box Polyclinic And Diagnostic Center Pvt. Ltd." },
  { name: "Family Pathology And Diagnostic Centre" },
  { name: "Ganeshman Singh Community Hospital" },
  { name: "Genomic Diagnostic Lab" },
  { name: "Gulmi Model Hospital Pvt. Ltd." },
  { name: "Hamro Diagnostic Suppliers" },
]; */}

// ── Typed helpers ──────────────────────────────────────────────────────────────
function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w: string) => w[0])
    .join("")
    .toUpperCase();
}

// ── Animated counter ──────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    const steps = 40;
    const stepVal = target / steps;
    let current = 0;
    ref.current = setInterval(() => {
      current += stepVal;
      if (current >= target) {
        setCount(target);
        if (ref.current) clearInterval(ref.current);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [target, duration]);
  return count;
}

// ── Colour tokens ──────────────────────────────────────────────────────────────
const p = {
  50: "#F4F2FF",
  100: "#E5E1FC",
  200: "#C8C0F8",
  300: "#A99DF2",
  400: "#8876EB",
  500: "#6B55E0",
  600: "#5240C9",
  700: "#3D2FAB",
  800: "#2B2080",
  900: "#1A1357",
} as const;

// ── Styles injected once ───────────────────────────────────────────────────────
const GLOBAL_STYLE = `

  .bc-card {
    background: #fff;
    border: 1.5px solid ${p[100]};
    border-radius: 24px;
    padding: 32px 28px 26px;
    position: relative;
    transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
    box-shadow: 0 1px 3px rgba(80,60,180,0.06);
    overflow: hidden;
    cursor: default;
  }
  .bc-card:hover {
    border-color: ${p[300]};
    box-shadow: 0 12px 40px rgba(107,85,224,0.13), 0 2px 8px rgba(107,85,224,0.06);
    transform: translateY(-4px);
  }
  .bc-card-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    border-radius: 24px 24px 0 0;
    background: linear-gradient(90deg, ${p[600]}, ${p[300]});
    opacity: 0;
    transition: opacity 0.25s;
  }
  .bc-card:hover .bc-card-bar { opacity: 1; }

  .bc-card-idx {
    position: absolute;
    top: 24px; right: 26px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: ${p[200]};
    transition: color 0.2s;
   
    
  }
  .bc-card:hover .bc-card-idx { color: ${p[400]}; }

  .bc-client-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 13px 16px;
    background: #fff;
    border: 1.5px solid ${p[100]};
    border-radius: 16px;
    transition: all 0.2s ease;
    cursor: default;
  }
  .bc-client-row:hover {
    background: ${p[50]};
    border-color: ${p[200]};
    box-shadow: 0 4px 20px rgba(107,85,224,0.08);
    transform: translateX(4px);
  }
  .bc-avatar {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: linear-gradient(135deg, ${p[100]}, ${p[200]});
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: ${p[700]};
    flex-shrink: 0;
    transition: all 0.2s ease;
    
    letter-spacing: 0.04em;
  }
  .bc-client-row:hover .bc-avatar {
    background: linear-gradient(135deg, ${p[600]}, ${p[400]});
    color: #fff;
  }

  .bc-pill {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: ${p[700]};
    background: ${p[50]};
    border: 1px solid ${p[100]};
    border-radius: 40px;
    padding: 3px 11px;
   
  }

  .bc-product-tag {
    font-size: 11.5px;
    font-weight: 500;
    background: ${p[50]};
    color: ${p[700]};
    border: 1px solid ${p[100]};
    border-radius: 8px;
    padding: 4px 11px;
    
    transition: background 0.2s, color 0.2s;
  }
  .bc-card:hover .bc-product-tag {
    background: ${p[100]};
    color: ${p[800]};
  }

  .bc-visit-link {
    font-size: 12px;
    font-weight: 600;
    color: ${p[600]};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    letter-spacing: 0.03em;
    
    transition: color 0.15s, gap 0.15s;
  }
  .bc-visit-link:hover { color: ${p[800]}; gap: 7px; }

  .bc-stat-ring {
    position: relative;
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }
  .bc-stat-ring svg { position: absolute; top: 0; left: 0; }
  .bc-stat-ring-inner {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @keyframes bc-fade-up {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .bc-animate { animation: bc-fade-up 0.55s ease both; }
`;

// ── Component ─────────────────────────────────────────────────────────────────
export default function BrandClient() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);
  // const count = useCountUp(clients.length);

  return (
    <>
      <style>{GLOBAL_STYLE}</style>

      <section
        id="brandclients"
        style={{
          background: "#FDFCFF",
          padding: "112px 32px 120px",

          position: "relative",
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
        {/* ── Decorative blobs ── */}
        <div style={{
          position: "absolute", top: -180, right: -120,
          width: 560, height: 560, borderRadius: "50%",
          background: `radial-gradient(circle, ${p[100]} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -200, left: -100,
          width: 480, height: 480, borderRadius: "50%",
          background: `radial-gradient(circle, ${p[50]} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />





        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* ══ BRAND PARTNERS ══════════════════════════════════════════════════ */}
          <div className="bc-animate" style={{ marginBottom: 5 }}>
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 28, height: 2.5, background: `linear-gradient(90deg,${p[600]},${p[300]})`, borderRadius: 2 }} />
              <span style={{
                fontSize: 10.5, fontWeight: 600, letterSpacing: "0.26em",
                textTransform: "uppercase", color: p[500],

              }}>
                Trusted network
              </span>
            </div>

            {/* Heading */}
            <div style={{ marginBottom: 48 }}>
              <h2 style={{
                fontFamily: "Raleway, system-ui, sans-serif",
                fontSize: "clamp(38px, 5.5vw, 62px)",
                fontWeight: 800,
                color: p[900],
                margin: "0 0 12px",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}>
                Brand{" "}
                <span style={{
                  background: `linear-gradient(135deg, ${p[600]}, ${p[400]})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Partners
                </span>
              </h2>
              <p style={{
                fontSize: 15, color: "#6b6882", margin: 0, fontWeight: 400,
                maxWidth: 440, lineHeight: 1.6,
              }}>
                Collaborating with global leaders in diagnostics to bring world-class instruments to Nepal.
              </p>
            </div>

            {/* Cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
              gap: 20,
            }}>
              {brandPartners.map((b, i) => (
                <div
                  key={b.name}
                  className="bc-card bc-animate"
                  style={{ animationDelay: `${i * 0.07}s` }}
                  onMouseEnter={() => setHoveredCard(b.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bc-card-bar" />
                  <span className="bc-card-idx">{b.index}</span>

                  {/* Header */}
                  <h3 style={{
                    fontFamily: "Raleway, system-ui, sans-serif",
                    fontSize: 19,
                    fontWeight: 700,
                    color: p[900],
                    margin: "0 32px 8px 0",
                    letterSpacing: "-0.015em",
                    lineHeight: 1.2,
                  }}>
                    {b.full}
                  </h3>

                  <span className="bc-pill">{b.origin}</span>

                  <p style={{
                    fontSize: 13.5, color: "#6b6882",
                    lineHeight: 1.7, margin: "14px 0 20px",
                    fontWeight: 400,
                  }}>
                    {b.desc}
                  </p>

                  {/* Products */}
                  <p style={{
                    fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: p[400], margin: "0 0 9px",

                  }}>
                    Key products
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                    {b.products.map((prod, j) => (
                      <span key={j} className="bc-product-tag">{prod}</span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div style={{
                    height: 1,
                    background: `linear-gradient(90deg, ${p[100]}, transparent)`,
                    margin: "0 0 18px",
                  }} />

                  {/* Link */}
                  <a
                    href={b.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bc-visit-link"
                  >
                    Visit website
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8"
                        stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ══ CLIENTS ═════════════════════════════════════════════════════════ */}
          {/*<div>/*}
            {/* Header row */}
          {/* <div style={{
              display: "flex", alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 40, flexWrap: "wrap", gap: 20,
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 28, height: 2.5, background: `linear-gradient(90deg,${p[600]},${p[300]})`, borderRadius: 2 }} />
                  <span style={{
                    fontSize: 10.5, fontWeight: 600, letterSpacing: "0.26em",
                    textTransform: "uppercase", color: p[500],

                  }}>
                    Our clients
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "Raleway, system-ui, sans-serif",
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  fontWeight: 800,
                  color: p[900],
                  margin: "0 0 10px",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.06,
                }}>
                  Trusted across{" "}
                  <span style={{
                    background: `linear-gradient(135deg, ${p[600]}, ${p[400]})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Nepal
                  </span>
                </h2>
                <p style={{ fontSize: 14, color: "#6b6882", margin: 0, lineHeight: 1.6 }}>
                  Hospitals &amp; diagnostic centres that rely on us daily.
                </p>
              </div> */}

          {/* Animated stat ring */}
          {/* <div className="bc-stat-ring">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <circle cx="50" cy="50" r="44" fill="none" stroke={p[100]} strokeWidth="6" />
                  <circle
                    cx="50" cy="50" r="44" fill="none"
                    stroke={`url(#ring-grad)`} strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="276.46"
                    strokeDashoffset="46"
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={p[600]} />
                      <stop offset="100%" stopColor={p[300]} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="bc-stat-ring-inner">
                  <span style={{
                    fontSize: 24, fontWeight: 800, color: p[800],
                    lineHeight: 1, 
                  }}>
                    {count}+
                  </span>
                  <span style={{
                    fontSize: 9.5, fontWeight: 600, color: p[500],
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    fontFamily: "Raleway, system-ui, sans-serif", marginTop: 2,
                  }}>
                    clients
                  </span>
                </div>
              </div>
            </div>*/}

          {/* Client grid */}
          {/*<div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 10,
            }}> */}
          {/* {clients.map((c, i) => {
                const initials = getInitials(c.name);
                const isHov = hoveredClient === c.name;
                return (
                  <div
                    key={c.name}
                    className="bc-client-row bc-animate"
                    style={{ animationDelay: `${0.3 + i * 0.04}s` }}
                    onMouseEnter={() => setHoveredClient(c.name)}
                    onMouseLeave={() => setHoveredClient(null)}
                  >
                    <div className="bc-avatar">{initials}</div>
                    <p style={{
                      fontSize: 13, fontWeight: 500,
                      color: isHov ? p[900] : "#3d3b52",
                      margin: 0, lineHeight: 1.4,
                      transition: "color 0.2s",
                      fontFamily: "Raleway, system-ui, sans-serif",
                    }}>
                      {c.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}