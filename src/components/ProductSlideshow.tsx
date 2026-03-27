"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle, } from "lucide-react";
import { products } from "@/data/products";
import { useRouter } from "next/navigation";

const DURATION = 5500;



export default function ProductSlideshow() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const lastTickRef = useRef<number>(Date.now());

  const go = useCallback(
    (idx: number, dir: "left" | "right" = "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setProgress(0);
      progressRef.current = 0;
      lastTickRef.current = Date.now();
      setTimeout(() => {
        setCurrent((idx + products.length) % products.length);
        setAnimating(false);
      }, 380);
    },
    [animating]
  );

  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (!pausedRef.current) {
        const now = Date.now();
        const delta = now - lastTickRef.current;
        lastTickRef.current = now;
        progressRef.current = Math.min(progressRef.current + delta / DURATION, 1);
        setProgress(progressRef.current);
        if (progressRef.current >= 1) go(current + 1, "right");
      } else {
        lastTickRef.current = Date.now();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current, go]);

  useEffect(() => { pausedRef.current = paused; }, [paused]);

  const handlePointerDown = () => {
    pressTimer.current = setTimeout(() => setPaused(true), 120);
  };
  const handlePointerUp = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    setPaused(false);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    handlePointerDown();
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    handlePointerUp();
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40)
      go(dx < 0 ? current + 1 : current - 1, dx < 0 ? "right" : "left");
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const p = products[current];
  const meta = { id: p.id, description: p.description, tests: p.tests };
  const accent = p.accentColor;
  const bg = p.bgColor;

  return (
    <section
      className="w-full overflow-hidden relative select-none"
      style={{ background: "#f8f7ff" }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Top accent line ── */}
      <div className="h-[3px] w-full relative overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}66, ${accent}, ${accent}66, transparent)`,
          }}
        />
      </div>

      {/* ── Main slide — fixed height ── */}
      <div
        className="relative transition-colors duration-700 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${bg}ee 0%, #ffffff 55%, ${bg}55 100%)`,
          height: 740,
        }}
      >
        {/* Background orbs */}
        <div
          className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${accent}0e 0%, ${accent}03 40%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-24 -top-12 w-[420px] h-[420px] rounded-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${accent}08 0%, transparent 70%)`,
            filter: "blur(44px)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage: `radial-gradient(circle, ${accent} 1px, transparent 1px)`,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 h-full flex flex-col">

          {/* ── Eyebrow row ── */}
          <div className="pt-7 flex items-center gap-3">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "6px 15px", borderRadius: 100,
              background: `linear-gradient(135deg, ${accent}18, ${accent}0a)`,
              border: `1px solid ${accent}2e`,
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: accent,
                boxShadow: `0 0 8px ${accent}`,
              }} />
              <span style={{
                fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
                color: accent, fontWeight: 700,
              }}>
                Products
              </span>
            </div>
            <div style={{ height: 1, width: 32, background: `linear-gradient(90deg, ${accent}30, transparent)` }} />
            <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
              {String(current + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
            </span>
          </div>

          {/* ── Two-column layout ── */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 flex-1 py-8">

            {/* LEFT — Image only, full height */}
            <div
              className="w-full md:w-[40%] md:shrink-0 flex items-center justify-center relative"
            >
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-3xl transition-all duration-700"
                style={{
                  background: `radial-gradient(ellipse at center, ${accent}1c 0%, transparent 68%)`,
                  filter: "blur(30px)",
                }}
              />

              <div
                className="relative z-10 w-full h-full flex items-center justify-center"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating
                    ? direction === "right"
                      ? "translateX(-44px) scale(0.88)"
                      : "translateX(44px) scale(0.88)"
                    : "translateX(0) scale(1)",
                  transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={460}
                  height={380}
                  className="object-contain w-full"
                  style={{
                    maxHeight: 380,
                    filter: `drop-shadow(0 24px 60px ${accent}55)`,
                  }}
                  priority={current === 0}
                />
              </div>

              {/* Brand badge */}
              <div
                className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider text-white z-20 transition-all duration-700"
                style={{
                  background: `linear-gradient(135deg, ${accent}, ${accent}bb)`,
                  boxShadow: `0 4px 18px ${accent}48`,
                }}
              >
                {p.brand === "—" ? "Generic" : p.brand.split(" ")[0]}
              </div>
            </div>

            {/* RIGHT — All text content */}
            <div className="w-full md:flex-1 md:min-w-0 flex flex-col justify-center">
              <div
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating
                    ? direction === "right" ? "translateX(36px)" : "translateX(-36px)"
                    : "translateX(0)",
                  transition: "opacity 0.38s cubic-bezier(0.4,0,0.2,1), transform 0.38s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {/* Category + model chips */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest transition-all duration-700"
                    style={{
                      background: `${accent}10`,
                      color: accent,
                      border: `1px solid ${accent}26`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                    {p.category}
                  </span>
                  <span
                    className="text-[10px] font-mono font-semibold px-2.5 py-1.5 rounded-lg"
                    style={{
                      background: "rgba(0,0,0,0.035)",
                      color: "#6b7280",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {p.model}
                  </span>
                </div>

                {/* Product name */}
                <h3
                  className="font-playfair font-bold text-[#0f0a1e] leading-tight mb-3"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {p.name}
                </h3>

                {/* ── Tests / Used For card — sits right below title ── */}
                <div
                  className="rounded-2xl px-4 py-3.5 mb-5 transition-all duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${accent}0c, ${accent}05)`,
                    border: `1px solid ${accent}1e`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <span
                      className="w-[3px] h-4 rounded-full shrink-0"
                      style={{ background: `linear-gradient(180deg, ${accent}, ${accent}44)` }}
                    />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                      Tests Covered
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {meta.tests.map((test) => (
                      <span
                        key={test}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-lg leading-snug"
                        style={{
                          background: `${accent}10`,
                          color: accent,
                          border: `1px solid ${accent}22`,
                        }}
                      >
                        {test}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-[#5a6070] leading-[1.9] mb-5 text-[0.9rem]"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {meta.description}
                </p>

                {/* Divider */}
                <div
                  className="mb-5 h-px"
                  style={{ background: `linear-gradient(90deg, ${accent}22, transparent 65%)` }}
                />

                {/* Highlights */}
                <div className="flex flex-col gap-2.5 mb-7">
                  {p.highlights.slice(0, 3).map((h, i) => (
                    <div
                      key={h}
                      className="flex items-start gap-3"
                      style={{
                        opacity: animating ? 0 : 1,
                        transform: animating ? "translateY(8px)" : "translateY(0)",
                        transition: `opacity 0.4s ease ${i * 70}ms, transform 0.4s ease ${i * 70}ms`,
                      }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: `${accent}12`,
                          border: `1.5px solid ${accent}28`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                      </span>
                      <span className="text-[#374151] leading-snug font-medium text-[0.82rem]">{h}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => router.push(`/products#${p.categoryId}`)}
                    className="group inline-flex items-center gap-2 rounded-xl text-[0.78rem] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{
                      padding: "0.65rem 1.4rem",
                      background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
                      boxShadow: `0 6px 22px ${accent}38`,
                    }}
                  >
                    View Full Specs
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <a
                    href="https://wa.me/9779819425801?text=I'm%20interested%20in%20learning%20more%20about%20your%20products."
                    className="group inline-flex items-center gap-2 rounded-xl text-[0.78rem] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      padding: "0.65rem 1.4rem",
                      color: accent,
                      background: `${accent}0c`,
                      border: `1px solid ${accent}26`,
                    }}
                  >
                    <MessageCircle size={15} />
                    WhatsApp to Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom nav bar ── */}
      <div
        className="flex items-center justify-center gap-3 px-5 py-3.5 transition-all duration-700"
        style={{
          background: `linear-gradient(135deg, ${bg}55, white)`,
          borderTop: `1px solid ${accent}0e`,
        }}
      >
        {/* Prev */}
        <button
          onClick={() => go(current - 1, "left")}
          className="flex items-center gap-1 text-[11px] font-semibold transition-all duration-200 hover:opacity-60 shrink-0"
          style={{ color: accent }}
          aria-label="Previous product"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Compact pill progress dots */}
        <div className="flex items-center gap-1">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "right" : "left")}
              className="relative rounded-full overflow-hidden transition-all duration-300"
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                flexShrink: 0,
                background: i < current ? accent : `${accent}22`,
              }}
              aria-label={`Go to product ${i + 1}`}
            >
              {i === current && (
                <span
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${progress * 100}%`,
                    background: accent,
                    transition: "width 0.05s linear",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => go(current + 1, "right")}
          className="flex items-center gap-1 text-[11px] font-semibold transition-all duration-200 hover:opacity-60 shrink-0"
          style={{ color: accent }}
          aria-label="Next product"
        >
          <span className="hidden sm:inline">Next</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
