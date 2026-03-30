"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, X, Copy, Check, Sparkles, ArrowRight } from "lucide-react";

export default function Donate() {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("9819425801");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDonate = () => {
    setFlipping(true);
    setTimeout(() => {
      setShowQR(true);
      setFlipping(false);
    }, 400);
  };

  const handleBack = () => {
    setFlipping(true);
    setTimeout(() => {
      setShowQR(false);
      setFlipping(false);
    }, 400);
  };

  return (
    <section
      id="donate"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #faf8ff 0%, #f3f0ff 40%, #fdf4ff 70%, #f8f7ff 100%)",
      }}
    >
      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large soft violet bloom center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(167,139,250,0.18) 0%, rgba(124,58,237,0.06) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
        {/* Pink top right */}
        <div
          className="absolute -top-20 right-1/4 w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,121,249,0.12) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        {/* Indigo bottom left */}
        <div
          className="absolute -bottom-10 left-1/4 w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 65%)",
            filter: "blur(45px)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Top shimmer line */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 10%, rgba(167,139,250,0.5) 40%, rgba(232,121,249,0.4) 60%, transparent 90%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-md mx-auto">

        {/* Flip card wrapper */}
        <div
          className="transition-all duration-400"
          style={{
            opacity: flipping ? 0 : 1,
            transform: flipping ? "F(0.96) translateY(8px)" : "scale(1) translateY(0)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >

          {/* ══════════════════
              FRONT — CTA
          ══════════════════ */}
          {!showQR && (
            <div className="text-center">

              {/* Floating heart icon */}
              <div className="flex justify-center mb-8">
                <div
                  className="relative flex items-center justify-center w-20 h-20 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 100%)",
                    border: "1px solid #e9d5ff",
                    boxShadow: "0 8px 32px rgba(167,139,250,0.20), 0 2px 8px rgba(124,58,237,0.10)",
                  }}
                >
                  <Heart
                    size={32}
                    style={{
                      color: "#a855f7",
                      fill: "rgba(168,85,247,0.25)",
                      filter: "drop-shadow(0 0 8px rgba(168,85,247,0.4))",
                    }}
                    className="animate-pulse-dot"
                  />
                  {/* Sparkle dot */}
                  <span
                    className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full border-2 border-white"
                    style={{
                      background: "linear-gradient(135deg, #e879f9, #a855f7)",
                      boxShadow: "0 0 8px rgba(232,121,249,0.6)",
                    }}
                  />
                </div>
              </div>

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #fdf4ff, #f3e8ff)",
                  border: "1px solid #e9d5ff",
                }}>
                <Sparkles size={11} style={{ color: "#a855f7" }} />
                <span className=" text-[10px] tracking-[0.2em] uppercase font-bold"
                  style={{
                    background: "linear-gradient(90deg, #9333ea, #e879f9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  Support Healthcare
                </span>
              </div>

              {/* Heading */}
              <h2 className=" text-[2.8rem] lg:text-[3.4rem] font-bold leading-[1.08] text-[#0f0a1e] mb-5">
                Help Us Reach
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #9333ea 0%, #a855f7 40%, #e879f9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  More Lives
                </span>
              </h2>

              {/* Body */}
              <p className="text-[#6b7280] text-[15px] leading-relaxed mb-10 max-w-sm mx-auto">
                Your contribution helps bring precision diagnostic equipment to
                underserved clinics and remote healthcare facilities across Nepal.
              </p>

              {/* Impact stats strip */}
              <div
                className="flex items-center justify-center gap-0 mb-10 rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid #e9d5ff",
                  background: "white",
                  boxShadow: "0 4px 20px rgba(167,139,250,0.10)",
                }}
              >
                {[
                  { num: "50+", label: "Clinics Reached" },
                  { num: "13", label: "Districts" },
                  { num: "100%", label: "Transparent" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex-1 py-4 px-3 text-center"
                    style={{
                      borderRight: i < 2 ? "1px solid #f3e8ff" : "none",
                    }}
                  >
                    <div
                      className=" text-xl font-bold leading-none mb-1"
                      style={{
                        background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.num}
                    </div>
                    <div className="text-[10px] text-[#9ca3af] font-medium">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button
                onClick={handleDonate}
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-[15px] text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #9333ea 0%, #7c3aed 50%, #6d28d9 100%)",
                  boxShadow: "0 6px 32px rgba(124,58,237,0.35), 0 0 0 1px rgba(167,139,250,0.20)",
                }}
              >
                {/* Shine sweep on hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(105deg, rgba(255,255,255,0.18) 0%, transparent 50%)",
                  }}
                />
                <Heart size={16} fill="rgba(255,255,255,0.5)" className="relative" />
                <span className="relative">Donate via eSewa</span>
                <ArrowRight size={15} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-[#c4b5fd] text-xs mt-5 font-medium">
                Scan eSewa QR · Every penny counts ✨
              </p>
            </div>
          )}

          {/* ══════════════════
              BACK — QR Panel
          ══════════════════ */}
          {showQR && (
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "white",
                border: "1px solid #e9d5ff",
                boxShadow: "0 20px 60px rgba(124,58,237,0.12), 0 4px 16px rgba(124,58,237,0.08)",
              }}
            >
              {/* Top gradient bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: "linear-gradient(90deg, #9333ea, #a855f7, #e879f9, #a855f7, #9333ea)",
                  backgroundSize: "200% 100%",
                  animation: "shimmerBar 3s linear infinite",
                }}
              />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 mb-2 bg-[#a855f7] border-[#a855f7] px-2 py-2 rounded-full">
                      <Sparkles size={11}  className="text-white"/>
                      <span className="text-[9px] tracking-[0.2em] uppercase text-white">
                        eSewa Payment
                      </span>
                    </div>
                    <h3 className=" text-2xl -mt-1 font-bold text-[#0f0a1e]">
                      Scan to Donate
                    </h3>
                  </div>
                  <button
                    onClick={handleBack}
                    className="p-2 rounded-xl transition-all duration-200 text-[#9ca3af] hover:text-[#374151] hover:bg-violet-50"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* QR code */}
                <div className="flex justify-center mb-6">
                  <div
                    className="relative w-52 h-52 rounded-2xl overflow-hidden"
                    style={{
                      padding: "10px",
                      background: "white",
                      border: "2px solid #f3e8ff",
                      boxShadow: "0 8px 32px rgba(167,139,250,0.20)",
                    }}
                  >
                    <Image
                      src="/esewa-qr.png"
                      alt="eSewa QR Code"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>

                {/* eSewa ID copy row */}
                <div
                  className="flex items-center justify-between gap-4 rounded-2xl px-5 py-4 mb-5"
                  style={{
                    background: "linear-gradient(135deg, #faf8ff, #f3e8ff)",
                    border: "1px solid #e9d5ff",
                  }}
                >
                  <div>
                    <p className="text-[10px]  uppercase tracking-widest text-violet-400 mb-1">
                      eSewa ID
                    </p>
                    <p className="text-[#0f0a1e]  text-lg font-bold tracking-widest">
                      9819425801
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl font-bold transition-all duration-200 hover:scale-105"
                    style={copied ? {
                      background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
                      border: "1px solid #a7f3d0",
                      color: "#059669",
                    } : {
                      background: "linear-gradient(135deg, #9333ea, #7c3aed)",
                      color: "white",
                      boxShadow: "0 4px 12px rgba(124,58,237,0.3)",
                    }}
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Steps */}
                <div
                  className="rounded-2xl p-5 mb-5"
                  style={{ background: "#faf8ff", border: "1px solid #f3e8ff" }}
                >
                  <p className="text-[10px] tracking-widest text-violet-400 uppercase mb-3">
                    How to pay
                  </p>
                  <ol className="space-y-3">
                    {[
                      "Open eSewa app on your phone",
                      "Scan the QR above OR tap 'Send Money' and enter ID 9819425801",
                      "Enter your amount and confirm payment",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#4b5563]">
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold mt-0.5"
                          style={{
                            background: "linear-gradient(135deg, #9333ea, #7c3aed)",
                            color: "white",
                          }}
                        >
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <p className="text-center text-xs text-[#9ca3af]">
                  After payment, email us at{" "}
                  <span className="text-violet-500 font-medium">info@cognidx.com.np</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes shimmerBar {
          0%   { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </section>
  );
}
