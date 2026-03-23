"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import { products } from "@/data/products";
import { useRouter } from "next/navigation";

export default function ProductSlideshow() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const go = useCallback(
    (idx: number, dir: "left" | "right" = "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((idx + products.length) % products.length);
        setAnimating(false);
      }, 420);
    },
    [animating]
  );

  useEffect(() => {
    const t = setInterval(() => go(current + 1, "right"), 5500);
    return () => clearInterval(t);
  }, [current, go]);

  const p = products[current];
  const accent = p.accentColor;
  const bg = p.bgColor;

  const handleViewSpecs = () => {
    router.push(`/products#${p.categoryId}`);
  };

  return (
    <section className="w-full overflow-hidden relative" style={{ background: "#f8f7ff" }}>

      {/* ══ SECTION HEADER ══ */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #faf8ff 100%)",
          borderBottom: "1px solid #ede9fe",
        }}
      >
    
        <div
          className="absolute bottom-0 left-8 right-8 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #7c3aed33, transparent)" }}
        />
      </div>

      {/* ── Animated top accent bar ── */}
      <div className="h-[3px] w-full relative overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}88, ${accent}, ${accent}88, transparent)` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`,
            animation: "shimmerAccent 2.5s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Main slide ── */}
      <div
        className="relative transition-all duration-700 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${bg}ee 0%, #ffffff 55%, ${bg}55 100%)`,
        }}
      >
        {/* Background orbs */}
        <div
          className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${accent}12 0%, ${accent}05 40%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-20 top-0 w-72 h-72 rounded-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${accent}10 0%, transparent 70%)`,
            filter: "blur(30px)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse, ${accent}08 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, ${accent} 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 py-6 sm:py-8">
          <div className="flex items-center gap-3">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 16px", borderRadius: 100,
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              boxShadow: "0 4px 18px rgba(109,40,217,0.30)",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "rgba(255,255,255,0.7)",
                boxShadow: "0 0 6px rgba(255,255,255,0.9)",
              }} />
              <span style={{
                fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#fff", fontWeight: 700,
              }}>
                New Products
              </span>
            </div>
            <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, #a78bfa, transparent)" }} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14">
          {/* Stack vertically on mobile, side-by-side on md+ */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 py-10 md:py-16 lg:py-20">

            {/* ── Image ── */}
            <div className="w-full md:w-[40%] md:shrink-0 flex items-center justify-center relative px-8 md:px-0">
              <div
                className="absolute inset-4 rounded-3xl transition-all duration-700"
                style={{
                  background: `radial-gradient(ellipse at center, ${accent}22 0%, transparent 72%)`,
                  filter: "blur(20px)",
                }}
              />
              <div
                className="relative z-10 w-full flex items-center justify-center"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating
                    ? direction === "right" ? "translateX(-36px) scale(0.92)" : "translateX(36px) scale(0.92)"
                    : "translateX(0) scale(1)",
                  transition: "opacity 0.42s cubic-bezier(0.4,0,0.2,1), transform 0.42s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={480}
                  height={400}
                  className="object-contain w-full"
                  style={{
                    maxHeight: 260,
                    filter: `drop-shadow(0 20px 48px ${accent}55)`,
                  }}
                  priority={current === 0}
                />
              </div>

              {/* Brand badge */}
              <div
                className="absolute top-0 left-8 md:left-0 text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider text-white shadow-lg z-20 transition-all duration-700"
                style={{
                  background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
                  boxShadow: `0 4px 20px ${accent}55`,
                }}
              >
                {p.brand === "—" ? "Generic" : p.brand.split(" ")[0]}
              </div>
            </div>

            {/* ── Info ── */}
            <div className="w-full md:flex-1 md:min-w-0 md:pl-4">
              <div
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating
                    ? direction === "right" ? "translateX(32px)" : "translateX(-32px)"
                    : "translateX(0)",
                  transition: "opacity 0.42s cubic-bezier(0.4,0,0.2,1), transform 0.42s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {/* Category + model */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-widest transition-all duration-700"
                    style={{
                      background: `${accent}14`,
                      color: accent,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                    {p.category}
                  </span>
                  <span
                    className="text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg"
                    style={{
                      background: "rgba(0,0,0,0.04)",
                      color: "#6b7280",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {p.model}
                  </span>
                </div>

                {/* Product name */}
                <h3
                  className="font-playfair font-bold text-[#0f0a1e] leading-[1.08] mb-3 sm:mb-4"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}
                >
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-[#6b7280] leading-[1.8] mb-5 sm:mb-8 text-sm sm:text-[1.02rem]">
                  {p.description}
                </p>

                {/* Divider */}
                <div
                  className="mb-5 sm:mb-7 h-px"
                  style={{ background: `linear-gradient(90deg, ${accent}30, transparent)` }}
                />

                {/* Highlights — 1 col on mobile, 2 cols on sm+ */}
                <div className="grid grid-cols-1 gap-2.5 sm:gap-3 mb-7 sm:mb-9">
                  {p.highlights.slice(0, 4).map((h, i) => (
                    <div
                      key={h}
                      className="flex items-start gap-2.5"
                      style={{
                        opacity: animating ? 0 : 1,
                        transform: animating ? "translateY(10px)" : "translateY(0)",
                        transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
                      }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                      </span>
                      <span className="text-[#374151] leading-snug font-medium text-sm">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleViewSpecs}
                    className="group inline-flex items-center gap-2.5 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                    style={{
                      padding: "0.7rem 1.4rem",
                      background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
                      boxShadow: `0 6px 24px ${accent}45`,
                    }}
                  >
                    View Full Specs
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <a
                    href="/#contact"
                    className="group inline-flex items-center gap-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      padding: "0.7rem 1.4rem",
                      color: accent,
                      background: `${accent}10`,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    <ExternalLink size={13} />
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next — smaller on mobile, hidden on very small when content stacks */}
        <button
          onClick={() => go(current - 1, "left")}
          className="absolute left-1 sm:left-3 lg:left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
          style={{
            background: "rgba(255,255,255,0.97)",
            border: `1px solid ${accent}22`,
            color: accent,
            boxShadow: `0 4px 20px ${accent}25`,
          }}
        >
          <ChevronLeft size={15} className="sm:hidden" />
          <ChevronLeft size={18} className="hidden sm:block" />
        </button>
        <button
          onClick={() => go(current + 1, "right")}
          className="absolute right-1 sm:right-3 lg:right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
          style={{
            background: "rgba(255,255,255,0.97)",
            border: `1px solid ${accent}22`,
            color: accent,
            boxShadow: `0 4px 20px ${accent}25`,
          }}
        >
          <ChevronRight size={15} className="sm:hidden" />
          <ChevronRight size={18} className="hidden sm:block" />
        </button>
      </div>

      {/* ── Bottom dot bar ── */}
      <div
        className="flex items-center justify-center px-5 sm:px-8 lg:px-14 py-3 sm:py-4 transition-all duration-700"
        style={{
          background: `linear-gradient(135deg, ${bg}88, white)`,
          borderTop: `1px solid ${accent}12`,
        }}
      >
        <div className="flex items-center gap-1.5 sm:gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "right" : "left")}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                background: i === current
                  ? `linear-gradient(90deg, ${accent}, ${accent}88)`
                  : `${accent}28`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="h-[3px] relative overflow-hidden" style={{ background: `${accent}12` }}>
        <div
          key={current}
          className="absolute inset-y-0 left-0 h-full"
          style={{
            background: `linear-gradient(90deg, ${accent}, ${accent}88)`,
            animation: "slideProgress 5.5s linear forwards",
            transformOrigin: "left",
          }}
        />
      </div>

      <style>{`
        @keyframes slideProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes shimmerAccent {
          0%   { transform: translateX(-100%); opacity: 0.6; }
          50%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}