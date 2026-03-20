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
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

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
          minHeight: 520,
        }}
      >
        {/* Large background orb — morphs with each product */}
        <div
          className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${accent}12 0%, ${accent}05 40%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
        {/* Top-left accent blob */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 w-64 h-64 rounded-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${accent}10 0%, transparent 70%)`,
            filter: "blur(30px)",
          }}
        />
        {/* Bottom center warm glow */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse, ${accent}08 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, ${accent} 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-6xl mx-auto px-8 lg:px-14">
          <div className="flex flex-col lg:flex-row items-center gap-10 py-14 lg:py-20">

            {/* ── LEFT: Image ── */}
            <div className="w-full lg:w-[44%] flex items-center justify-center relative">
              {/* Soft blob behind image */}
              <div
                className="absolute inset-4 rounded-3xl transition-all duration-700"
                style={{
                  background: `radial-gradient(ellipse at center, ${accent}20 0%, transparent 72%)`,
                  filter: "blur(20px)",
                }}
              />

              {/* Image with slide animation */}
              <div
                className="relative z-10 w-full flex items-center justify-center"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating
                    ? direction === "right" ? "translateX(-32px) scale(0.93)" : "translateX(32px) scale(0.93)"
                    : "translateX(0) scale(1)",
                  transition: "opacity 0.42s cubic-bezier(0.4,0,0.2,1), transform 0.42s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={460}
                  height={380}
                  className="object-contain w-full"
                  style={{
                    maxHeight: 360,
                    filter: `drop-shadow(0 20px 56px ${accent}50)`,
                  }}
                  priority={current === 0}
                />
              </div>

              {/* Brand badge */}
              <div
                className="absolute top-0 left-0 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider text-white shadow-lg z-20 transition-all duration-700"
                style={{
                  background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
                  boxShadow: `0 4px 16px ${accent}50`,
                }}
              >
                {p.brand === "—" ? "Generic" : p.brand.split(" ")[0]}
              </div>

              {/* Index indicator */}
              <div
                className="absolute bottom-0 right-0 font-mono-custom text-[11px] font-bold px-3 py-1.5 rounded-full z-20"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  color: accent,
                  border: `1px solid ${accent}25`,
                  boxShadow: `0 2px 12px ${accent}20`,
                }}
              >
                {String(current + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
              </div>
            </div>

            {/* ── RIGHT: Info ── */}
            <div className="w-full lg:w-[56%] lg:pl-6">
              <div
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating
                    ? direction === "right" ? "translateX(28px)" : "translateX(-28px)"
                    : "translateX(0)",
                  transition: "opacity 0.42s cubic-bezier(0.4,0,0.2,1), transform 0.42s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {/* Category chip */}
                <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest transition-all duration-700"
                    style={{
                      background: `${accent}14`,
                      color: accent,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                    {p.category}
                  </span>
                  <span className="text-xs text-[#9ca3af] font-mono">{p.model}</span>
                </div>

                {/* Product name */}
                <h2 className="font-playfair text-2xl sm:text-3xl lg:text-[2.3rem] font-bold text-[#0f0a1e] leading-tight mb-4">
                  {p.name}
                </h2>

                {/* Description */}
                <p className="text-sm text-[#6b7280] leading-[1.85] mb-7 max-w-md">
                  {p.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {p.highlights.slice(0, 4).map((h, i) => (
                    <div
                      key={h}
                      className="flex items-start gap-2 text-[13px] text-[#374151]"
                      style={{
                        opacity: animating ? 0 : 1,
                        transform: animating ? "translateY(8px)" : "translateY(0)",
                        transition: `opacity 0.4s ease ${i * 50}ms, transform 0.4s ease ${i * 50}ms`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-[5px] shrink-0"
                        style={{ background: accent }}
                      />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  {/* View Full Specs — navigates to /products#categoryId */}
                  <button
                    onClick={handleViewSpecs}
                    className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
                      boxShadow: `0 4px 20px ${accent}45`,
                    }}
                  >
                    View Full Specs
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {/* Enquire */}
                  <a
                    href="/#contact"
                    className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    style={{
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

        {/* ── Prev / Next arrows ── */}
        <button
          onClick={() => go(current - 1, "left")}
          className="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1/2 z-20"
          style={{
            background: "rgba(255,255,255,0.95)",
            border: `1px solid ${accent}22`,
            color: accent,
            boxShadow: `0 4px 16px ${accent}20`,
          }}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(current + 1, "right")}
          className="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1/2 z-20"
          style={{
            background: "rgba(255,255,255,0.95)",
            border: `1px solid ${accent}22`,
            color: accent,
            boxShadow: `0 4px 16px ${accent}20`,
          }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="flex items-center justify-between px-6 lg:px-12 py-3.5 transition-all duration-700"
        style={{
          background: `linear-gradient(135deg, ${bg}88, white)`,
          borderTop: `1px solid ${accent}12`,
        }}
      >
        {/* Product name */}
        <span
          className="hidden sm:block text-xs font-semibold max-w-[200px] truncate transition-all duration-700"
          style={{ color: accent }}
        >
          {p.model}
        </span>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "right" : "left")}
              className="rounded-full transition-all duration-400"
              style={{
                width: i === current ? 28 : 6,
                height: 6,
                background: i === current
                  ? `linear-gradient(90deg, ${accent}, ${accent}88)`
                  : `${accent}28`,
              }}
            />
          ))}
        </div>

        {/* Category label */}
        <span
          className="hidden sm:block text-[10px] font-mono-custom uppercase tracking-widest transition-all duration-700"
          style={{ color: `${accent}88` }}
        >
          {p.category}
        </span>
      </div>

      {/* ── Progress bar ── */}
      <div className="h-[2px] relative overflow-hidden" style={{ background: `${accent}12` }}>
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
