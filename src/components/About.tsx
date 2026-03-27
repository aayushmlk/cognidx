"use client";

import { FlaskConical, Users, Award, Microscope, Wrench, BookOpen, Package, Building2 } from "lucide-react";
import Image from "next/image";

const stats = [
  { num: "50+", label: "Product Lines", icon: FlaskConical },
  { num: "100+", label: "Hospitals Reached", icon: Building2 },
  { num: "5+", label: "Global Brand Partners", icon: Award },
  { num: "70+", label: "Test Parameters", icon: Microscope },
];

const services = [
  {
    icon: Package,
    title: "Supply and Distribution",
    desc: "From analyzers to reagents, we get the right products to your facility — whether you are in Kathmandu or a clinic three hills away.",
  },
  {
    icon: Wrench,
    title: "Machine Installation",
    desc: "We come to you. Our team sets everything up on-site and does not leave until the machine is working exactly as it should.",
  },
  {
    icon: Users,
    title: "Staff Training",
    desc: "We sit with your team and walk through everything hands-on. No manuals, no guesswork, just clear practical guidance at your pace.",
  },
  {
    icon: BookOpen,
    title: "After Sales Support",
    desc: "Questions come up after the sale too. We pick up the phone and help you sort things out, however long it takes.",
  },
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

        {/* Eyebrow */}
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
                width={400} height={500}
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
                { label: "CE", sub: "EU Standards", bg: "linear-gradient(135deg,#f59e0b,#fbbf24)", shadow: "rgba(245,158,11,0.35)" },
                { label: "NMPA", sub: "CN Standards", bg: "linear-gradient(135deg,#059669,#10b981)", shadow: "rgba(5,150,105,0.3)" },
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
              We bring the right <span style={{ color: "#7c3aed" }}>diagnostic tools</span> to every hospital in Nepal
            </h2>

            <p style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
              color: "#4b3f6b", lineHeight: 1.85,
              marginBottom: 14,
            }}>
              <strong style={{ color: "#140830", fontWeight: 700 }}>Cognidx Enterprises Pvt. Ltd.</strong> started
              with a simple idea <br /> &ldquo;Good diagnostic equipment should not be hard to find in Nepal.&rdquo; We work as a
              supplier and distributor of medical instruments with a strong focus on
              In Vitro Diagnostics, alongside the reagents, consumables, and other medical supplies that
              labs and hospitals use every day.
            </p>

            <p style={{
              fontSize: "clamp(0.92rem, 1.3vw, 1rem)",
              color: "#7c6fa0", lineHeight: 1.8,
              marginBottom: 40,
            }}>
              Since we started in 2080 B.S., we have worked with over 100 hospitals across the country.
              From small clinics tucked away in the hills to large urban hospitals and reference labs,
              we make sure the right equipment reaches the people who need it most. Our products are
              available for all grades of healthcare facilities, because we believe the quality of care
              should not depend on where you are located.
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

        {/* ── Services section ── */}
        <div style={{ marginTop: 96 }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 16px", borderRadius: 100,
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.18)",
                marginBottom: 16,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7c3aed" }} />
                <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7c3aed", fontWeight: 700 }}>
                  What We Offer
                </span>
              </div>
              <h3 style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                fontWeight: 700, color: "rgb(20,8,48)",
                letterSpacing: "-0.02em", lineHeight: 1.15, margin: 0,
              }}>
                We stay with you<br />
                <span style={{ color: "#7c3aed" }}>long after delivery</span>
              </h3>
            </div>
            <p style={{
              fontSize: "clamp(0.88rem, 1.2vw, 0.97rem)",
              color: "#7c6fa0", lineHeight: 1.8,
              maxWidth: 300, margin: 0,
            }}>
              Getting the equipment is just the start. We install it, train your staff, and are a call away whenever you need us.
            </p>
          </div>

          {/* Cards — uniform 4-col horizontal row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}>
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(124,58,237,0.10)",
                    borderRadius: 22,
                    padding: "32px 26px 28px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
                    cursor: "default",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(109,40,217,0.13)";
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.10)";
                  }}
                >
                  {/* Subtle top accent line */}
                  <div style={{
                    position: "absolute", top: 0, left: 24, right: 24, height: 2,
                    borderRadius: "0 0 4px 4px",
                    background: "linear-gradient(90deg, rgba(124,58,237,0.0), rgba(124,58,237,0.35), rgba(124,58,237,0.0))",
                  }} />

                  {/* Step number */}
                  <div style={{
                    fontSize: 14, fontWeight: 700, letterSpacing: "0.2em",
                    color: "rgba(106, 6, 213, 0.66)", marginBottom: 18,
                    textTransform: "uppercase",
                  }}>
                    0{i + 1}
                  </div>

                  {/* Icon box */}
                  <div style={{
                    width: 46, height: 46, borderRadius: 13, marginBottom: 22,
                    background: "#f5f3ff",
                    border: "1px solid rgba(124,58,237,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={19} style={{ color: "#7c3aed" }} />
                  </div>

                  {/* Title */}
                  <div style={{
                    fontSize: 15, fontWeight: 700, color: "#140830",
                    marginBottom: 10, lineHeight: 1.3,
                  }}>
                    {svc.title}
                  </div>

                  {/* Desc */}
                  <div style={{
                    fontSize: 13, color: "#7c6fa0", lineHeight: 1.75, flexGrow: 1,
                  }}>
                    {svc.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
