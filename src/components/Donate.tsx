"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, X, Copy, Check } from "lucide-react";

export default function Donate() {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("9819425801");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="donate"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #07040f 0%, #0e0720 55%, #07040f 100%)",
      }}
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main violet bloom */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[560px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(139,92,246,0.22) 0%, rgba(109,40,217,0.08) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Cyan top-right */}
        <div
          className="absolute -top-16 right-1/4 w-[320px] h-[320px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(34,211,238,0.12) 0%, transparent 65%)",
            filter: "blur(55px)",
          }}
        />
        {/* Pink bottom-left */}
        <div
          className="absolute -bottom-10 -left-10 w-[360px] h-[260px]"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(196,92,252,0.12) 0%, transparent 65%)",
            filter: "blur(55px)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(167,139,250,0.13) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Top shimmer */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(167,139,250,0.7) 35%, rgba(34,211,238,0.55) 65%, transparent 95%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-lg mx-auto text-center">

        {!showQR ? (
          <>
            {/* Heart badge */}
            <div className="flex justify-center mb-8">
              <div
                className="relative flex items-center justify-center w-[72px] h-[72px] rounded-[22px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(109,40,217,0.15) 100%)",
                  border: "1px solid rgba(167,139,250,0.45)",
                  boxShadow:
                    "0 0 40px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <Heart
                  size={30}
                  className="text-violet-300"
                  fill="rgba(139,92,246,0.4)"
                  style={{ filter: "drop-shadow(0 0 10px rgba(167,139,250,0.7))" }}
                />
                <span
                  className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full"
                  style={{
                    background: "#22d3ee",
                    boxShadow: "0 0 10px rgba(34,211,238,0.9)",
                  }}
                />
              </div>
            </div>

            {/* Eyebrow */}
            <p
              className="text-[10px] tracking-[0.3em] uppercase font-bold mb-4"
              style={{
                background: "linear-gradient(90deg, #c084fc, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Support Healthcare
            </p>

            {/* Heading */}
            <h2 className="text-[44px] lg:text-[56px] font-bold leading-[1.07] tracking-tight text-white mb-5">
              Help Us Reach
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #e879f9 0%, #a78bfa 40%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                More Lives
              </span>
            </h2>

            {/* Body */}
            <p className="text-white/55 text-[15px] leading-relaxed mb-12 max-w-sm mx-auto">
              Your contribution helps bring precision diagnostic equipment to
              underserved clinics and remote healthcare facilities across Nepal.
            </p>

            {/* Donate button */}
            <button
              onClick={() => setShowQR(true)}
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-[15px] text-white overflow-hidden transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%)",
                boxShadow:
                  "0 4px 30px rgba(124,58,237,0.45), 0 0 0 1px rgba(167,139,250,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 50px rgba(124,58,237,0.65), 0 0 0 1px rgba(167,139,250,0.45)";
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 30px rgba(124,58,237,0.45), 0 0 0 1px rgba(167,139,250,0.2)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              {/* Shine sweep */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(105deg, rgba(255,255,255,0.15) 0%, transparent 45%)",
                }}
              />
              <Heart size={17} fill="rgba(255,255,255,0.4)" className="relative" />
              <span className="relative">Donate Now</span>
            </button>

            <p className="text-white/20 text-xs mt-5">
              Scan eSewa QR to contribute · every rupee counts
            </p>
          </>
        ) : (
          /* ── QR Panel ── */
          <div
            className="relative rounded-3xl p-8"
            style={{
              background:
                "linear-gradient(160deg, rgba(124,58,237,0.16) 0%, rgba(7,4,15,0.97) 100%)",
              border: "1px solid rgba(167,139,250,0.3)",
              boxShadow:
                "0 0 100px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >
            {/* Inner shimmer */}
            <div
              className="absolute top-0 left-10 right-10 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(196,132,252,0.6), rgba(34,211,238,0.4), transparent)",
              }}
            />

            {/* Close */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 p-1.5 rounded-xl transition-all duration-200 text-white/30 hover:text-white hover:bg-white/10"
            >
              <X size={15} />
            </button>

            {/* Title */}
            <p
              className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2"
              style={{
                background: "linear-gradient(90deg, #c084fc, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              eSewa Payment
            </p>
            <h3 className="text-white text-[22px] font-bold mb-6">
              Scan to Donate
            </h3>

            {/* QR */}
            <div className="flex justify-center mb-6">
              <div
                className="relative w-56 h-56 rounded-2xl overflow-hidden"
                style={{
                  background: "#ffffff",
                  padding: "10px",
                  boxShadow:
                    "0 0 60px rgba(139,92,246,0.4), 0 0 0 1px rgba(167,139,250,0.25)",
                }}
              >
                <Image
                  src="/esewa-qr.png"
                  alt="eSewa QR Code"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
            </div>

            {/* eSewa ID */}
            <div
              className="flex items-center justify-between gap-4 rounded-2xl px-5 py-4 mb-5"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
              }}
            >
              <div className="text-left">
                <p
                  className="text-[9.5px] uppercase tracking-widest mb-1"
                  style={{ color: "rgba(196,132,252,0.65)" }}
                >
                  eSewa ID
                </p>
                <p className="text-white font-mono text-base font-bold tracking-widest">
                  9819425801
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl font-bold transition-all duration-200"
                style={
                  copied
                    ? {
                      background: "rgba(34,211,238,0.18)",
                      border: "1px solid rgba(34,211,238,0.45)",
                      color: "#22d3ee",
                      boxShadow: "0 0 14px rgba(34,211,238,0.2)",
                    }
                    : {
                      background: "rgba(139,92,246,0.22)",
                      border: "1px solid rgba(167,139,250,0.4)",
                      color: "#c084fc",
                    }
                }
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Steps */}
            <ol className="space-y-2.5 mb-6 text-left">
              {[
                "Open eSewa app on your phone",
                "Scan the QR code above using the app's QR scanner OR Tap 'Send Money' and enter the given eSewa ID (9819425801)",
                "Enter amount and confirm the payment",
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] text-white/50">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                    style={{
                      background: "rgba(139,92,246,0.25)",
                      border: "1px solid rgba(167,139,250,0.4)",
                      color: "#c084fc",
                    }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <p className="text-center text-[11.5px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              After payment, email us at{" "}
              <span style={{ color: "rgba(196,132,252,0.7)" }}>
                info@cognidx.com.np
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
