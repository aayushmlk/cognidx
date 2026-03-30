"use client";

import React from "react";
import { Package, Wrench, Users, BookOpen } from "lucide-react";

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
    <div style={{ marginTop: 80 }} className="px-60 pb-20">
      {/* Header */}
      <div className="about-services-header">
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 100,
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.18)",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#7c3aed",
              }}
            />
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#7c3aed",
                fontWeight: 700,
              }}
            >
              What We Offer
            </span>
          </div>
          <h3
            style={{
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
        <p
          style={{
            fontSize: "clamp(0.85rem, 1.2vw, 0.97rem)",
            color: "#7c6fa0",
            lineHeight: 1.8,
            maxWidth: 300,
            margin: 0,
          }}
        >
          Getting the equipment is just the start. We install it, train your staff, and are a call away whenever you need us.
        </p>
      </div>

      {/* Cards */}
      <div className="about-services-grid">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.title}
              className="relative flex flex-col items-center p-6 rounded-[22px] bg-white border transition-transform cursor-default text-center"
              style={{
                border: "1px solid rgba(124,58,237,0.10)",
                overflow: "hidden",
                transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(109,40,217,0.13)";
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.10)";
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
                  background:
                    "linear-gradient(90deg, rgba(124,58,237,0.0), rgba(124,58,237,0.35), rgba(124,58,237,0.0))",
                }}
              />

              {/* Step number */}
              <div
                className="uppercase mb-4"
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "rgba(106, 6, 213, 0.66)",
                }}
              >
                0{i + 1}
              </div>

              {/* Icon */}
              <div
                className="flex items-center justify-center mb-4 w-20 h-20 rounded-[13px]"
                style={{
                  background: "#f5f3ff",
                  border: "1px solid rgba(124,58,237,0.12)",
                }}
              >
                <Icon size={26} style={{ color: "#7c3aed" }} />
              </div>

              {/* Title */}
              <div
                className="font-bold mb-3"
                style={{
                  fontSize: 16,
                  color: "#7c3aed",
                  lineHeight: 1.3,
                }}
              >
                {svc.title}
              </div>

              {/* Description */}
              <div
                className="text-sm text-[#7c6fa0] leading-relaxed"
                style={{ lineHeight: 1.75 }}
              >
                {svc.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;