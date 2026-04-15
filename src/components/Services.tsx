"use client";

import React from "react";
import { Package, Wrench, Users, BookOpen } from "lucide-react";

const ACCENT = "#7c3aed";

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

const Services = () => {
  return (
    <>
      <style>{`
        .services-shell {
          position: relative;
          background: linear-gradient(135deg, #f3eeff 0%, #ffffff 50%, #ede9fe 100%);
          overflow: hidden;
          width: 100%;
        }
        .services-top-bar {
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, transparent, ${ACCENT}66, ${ACCENT}, ${ACCENT}66, transparent);
        }
        .services-wrapper {
          padding: 0 240px 80px;
          position: relative;
          box-sizing: border-box;
        }
        .services-orb-1 {
          pointer-events: none;
          position: absolute;
          right: -160px; top: 50%;
          transform: translateY(-50%);
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, ${ACCENT}0d 0%, ${ACCENT}04 40%, transparent 70%);
          filter: blur(60px);
        }
        .services-orb-2 {
          pointer-events: none;
          position: absolute;
          left: -80px; top: -40px;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, ${ACCENT}0a 0%, transparent 70%);
          filter: blur(44px);
        }
        .services-dot-grid {
          pointer-events: none;
          position: absolute;
          inset: 0;
          opacity: 0.018;
          background-image: radial-gradient(circle, ${ACCENT} 1px, transparent 1px);
          background-size: 34px 34px;
        }
        .about-services-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 40px;
          padding-top: 64px;
          position: relative;
          z-index: 1;
        }
        .about-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1280px) {
          .services-wrapper {
            padding: 0 48px 80px;
          }
          .about-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-wrapper {
            padding: 0 20px 60px;
          }
          .about-services-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 28px;
            padding-top: 40px;
          }
          .about-services-header p {
            max-width: 100% !important;
          }
          .about-services-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .service-card {
            flex-direction: row !important;
            text-align: left !important;
            align-items: flex-start !important;
            padding: 18px !important;
            gap: 16px;
          }
          .service-card-body {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .service-icon-wrap {
            width: 52px !important;
            height: 52px !important;
            min-width: 52px;
            border-radius: 12px !important;
            margin-bottom: 0 !important;
          }
          .service-step {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .services-wrapper {
            padding: 0 16px 48px;
          }
        }
      `}</style>

      <div className="services-shell">
        <div className="services-top-bar" />
        <div className="services-wrapper">
          <div className="services-orb-1" />
          <div className="services-orb-2" />
          <div className="services-dot-grid" />

          {/* Header */}
          <div className="about-services-header">
            <div>
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
                  }} className="animate-pulse" />
                  <span style={{
                    fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "#fff", fontWeight: 700,
                  }}>
                    What We Offer
                  </span>
                </div>
                <div style={{ height: 1, width: 48, background: "linear-gradient(90deg, #a78bfa, transparent)" }} />
              </div>

              <h3
                style={{
                  fontFamily: "Raleway, system-ui, sans-serif",
                  fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                  fontWeight: 700,
                  color: "rgb(20,8,48)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                We stay with you
                <br />
                <span style={{ color: "#7c3aed" }}>long after delivery</span>
              </h3>
            </div>

            <div style={{ display: "flex", alignItems: "stretch", gap: "12px" }}>
              {/* Vertical Gradient Line */}
              <div
                style={{
                  width: "4px",
                  background: "linear-gradient(180deg, #7c3aed, #c084fc)",
                  borderRadius: "4px",
                }}
              />

              <p
                style={{
                  fontSize: "clamp(0.85rem, 1.2vw, 0.97rem)",
                  color: "#7c6fa0",
                  lineHeight: 1.8,
                  maxWidth: 300,
                  margin: 0,
                }}
              >
                Getting the equipment is just the start. We install it, train your
                staff, and are a call away whenever you need us.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="about-services-grid">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="service-card relative flex flex-col items-center p-6 rounded-[22px] cursor-default text-center cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(124,58,237,0.14)",
                    overflow: "hidden",
                    transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(109,40,217,0.16)";
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.30)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.14)";
                  }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 24,
                      right: 24,
                      height: 2,
                      borderRadius: "0 0 4px 4px",
                      background: "linear-gradient(90deg, rgba(124,58,237,0.0), rgba(124,58,237,0.45), rgba(124,58,237,0.0))",
                    }}
                  />

                  {/* Step number */}
                  <div
                    className="service-step uppercase mb-4"
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      color: "rgba(106, 6, 213, 0.66)",
                    }}
                  >
                    0{i + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className="service-icon-wrap flex items-center justify-center mb-4 w-20 h-20 rounded-[13px]"
                    style={{
                      background: "linear-gradient(135deg, #ede9fe, #f5f3ff)",
                      border: "1px solid rgba(124,58,237,0.18)",
                    }}
                  >
                    <Icon size={26} style={{ color: "#7c3aed" }} />
                  </div>

                  {/* Text body */}
                  <div className="service-card-body">
                    <div
                      className="font-bold mb-3"
                      style={{
                        fontSize: 18,
                        color: "#7c3aed",
                        lineHeight: 1.3,
                      }}
                    >
                      {svc.title}
                    </div>

                    <div
                      className="text-sm text-[#7c6fa0] leading-relaxed"
                      style={{ lineHeight: 1.75 }}
                    >
                      {svc.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
