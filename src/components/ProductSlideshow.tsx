"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { useRouter } from "next/navigation";

const DURATION = 5500;

// ─── Static CSS ────────────────────────────────────────────────────────────────
const SLIDESHOW_CSS = `
.ss-section { width:100%; overflow:hidden; position:relative; user-select:none; background:#f8f7ff; }
.ss-top-bar { height:3px; width:100%; position:relative; overflow:hidden; }

.ss-slide {
  overflow: hidden;
  position: relative;
  transition: background 0.7s;
  display: flex;
  flex-direction: column;
}

.ss-inner {
  display: flex;
  flex-direction: column;
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
  flex: 1;
}

.ss-two-col { display: flex; }

/* ── Desktop ≥768px ── */
@media (min-width: 768px) {
  .ss-slide  { min-height: 740px; height: 740px; }
  .ss-inner  { padding: 0 3.5rem; }

  .ss-eyebrow {
    padding-top: 1.75rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .ss-two-col {
    flex-direction: row;
    gap: 3.5rem;
    padding: 2rem 0 1.5rem;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  .ss-img-col {
    width: 40%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .ss-product-img { max-height: 380px; }

  .ss-text-col {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .ss-anim-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  /* Scrollable text area on desktop */
  .ss-text-inner {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 6px;
    /* Custom scrollbar */
    scrollbar-width: thin;
    scrollbar-color: rgba(0,0,0,0.15) transparent;
  }
  .ss-text-inner::-webkit-scrollbar { width: 4px; }
  .ss-text-inner::-webkit-scrollbar-track { background: transparent; }
  .ss-text-inner::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 4px; }

  .ss-category-row { margin-bottom: 0.9rem; flex-shrink: 0; }
  .ss-cat-chip   { font-size: 10px; padding: 6px 14px; }
  .ss-model-chip { font-size: 10px; padding: 6px 10px; }

  .ss-name {
    font-size: clamp(1.4rem, 2.8vw, 2.3rem);
    margin-bottom: 0.8rem;
    flex-shrink: 0;
    /* No line clamping — show full name */
    display: block;
  }

  .ss-tests-box  { padding: 14px 16px; margin-bottom: 1.1rem; border-radius: 16px; flex-shrink: 0; }
  .ss-tests-label-row { margin-bottom: 10px; }
  .ss-tests-scroll { display: flex; flex-wrap: wrap; gap: 6px; }
  .ss-tests-scroll span { font-size: 10px; padding: 4px 10px; }

  .ss-desc {
    font-size: 0.875rem;
    line-height: 1.85;
    margin-bottom: 1.1rem;
    flex-shrink: 0;
    /* No clamping — show full description */
    display: block;
  }

  .ss-divider { margin-bottom: 1.1rem; flex-shrink: 0; }

  .ss-highlights { display: flex; flex-direction: column; gap: 10px; margin-bottom: 1.5rem; flex-shrink: 0; }
  .ss-highlights-header { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
  .ss-highlights-title  { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; }
  .ss-highlight-dot  { width: 20px; height: 20px; }
  .ss-highlight-text { font-size: 0.82rem; }

  .ss-cta-row { gap: 12px; flex-shrink: 0; padding-bottom: 2px; }
  .ss-cta-primary   { font-size: 0.78rem; padding: 0.65rem 1.4rem; }
  .ss-cta-secondary { font-size: 0.78rem; padding: 0.65rem 1.4rem; }
  .ss-nav { padding: 14px 20px; }
}

/* ── Mobile <768px ── */
@media (max-width: 767px) {
  /*
    Key fix: no fixed height — use min-height so the card can grow.
    The nav bar stays at the bottom naturally.
    The slide shows ALL content — no clipping.
  */
  .ss-slide  { min-height: 540px; }
  .ss-inner  { padding: 0 18px; }

  .ss-eyebrow {
    padding-top: 14px;
    padding-bottom: 6px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .ss-two-col {
    flex-direction: column;
    gap: 0;
    padding: 0 0 16px;
  }

  .ss-img-col {
    width: 100%;
    flex-shrink: 0;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 14px;
  }

  .ss-product-img { max-height: 130px; width: auto; }

  .ss-text-col {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  .ss-anim-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  /* On mobile, text inner is NOT scrollable — shows everything, slide grows */
  .ss-text-inner {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .ss-category-row { margin-bottom: 8px; flex-shrink: 0; }
  .ss-cat-chip   { font-size: 9.5px; padding: 4px 11px; }
  .ss-model-chip { font-size: 9.5px; padding: 4px 10px; }

  /* Full product name — no clamping */
  .ss-name {
    font-size: 1.05rem;
    line-height: 1.4;
    margin-bottom: 8px;
    flex-shrink: 0;
    display: block;
  }

  .ss-tests-box {
    padding: 10px 12px;
    margin-bottom: 10px;
    border-radius: 12px;
    flex-shrink: 0;
  }
  .ss-tests-label-row { margin-bottom: 6px; }
  .ss-tests-scroll {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .ss-tests-scroll span {
    font-size: 9px;
    padding: 3px 8px;
    border-radius: 7px;
    line-height: 1.3;
    font-weight: 600;
    white-space: nowrap;
  }

  /* Full description — no clamping */
  .ss-desc {
    font-size: 0.78rem;
    line-height: 1.65;
    margin-bottom: 10px;
    flex-shrink: 0;
    display: block;
    color: #4b5563;
  }

  .ss-divider { margin-bottom: 10px; flex-shrink: 0; }

  .ss-highlights { display: flex; flex-direction: column; gap: 7px; flex-shrink: 0; margin-bottom: 14px; }
  .ss-highlights-header { display: flex; align-items: center; gap: 5px; margin-bottom: 4px; }
  .ss-highlights-title  { font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; }
  .ss-highlight-row  { margin-bottom: 0; }
  .ss-highlight-dot  { width: 16px; height: 16px; }
  .ss-highlight-text { font-size: 0.74rem; line-height: 1.5; }

  .ss-cta-row {
    gap: 8px;
    flex-shrink: 0;
    padding-bottom: 4px;
  }
  .ss-cta-primary   { font-size: 0.7rem; padding: 0.48rem 1rem; }
  .ss-cta-secondary { font-size: 0.7rem; padding: 0.48rem 1rem; }
  .ss-nav { padding: 10px 18px; }
}
`;

export default function ProductSlideshow() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const lastTickRef = useRef<number>(Date.now());

  useEffect(() => { setMounted(true); }, []);

  const goTo = useCallback(
    (idx: number, dir: "left" | "right" = "right") => {
      if (animating) return;
      const next = ((idx % products.length) + products.length) % products.length;
      setDirection(dir);
      setAnimating(true);
      setProgress(0);
      progressRef.current = 0;
      lastTickRef.current = Date.now();
      setTimeout(() => { setCurrent(next); setAnimating(false); }, 380);
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
        if (progressRef.current >= 1) goTo(current + 1, "right");
      } else {
        lastTickRef.current = Date.now();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current, goTo]);

  useEffect(() => { pausedRef.current = paused; }, [paused]);

  const handlePointerDown = () => { pressTimer.current = setTimeout(() => setPaused(true), 120); };
  const handlePointerUp = () => { if (pressTimer.current) clearTimeout(pressTimer.current); setPaused(false); };
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
      goTo(dx < 0 ? current + 1 : current - 1, dx < 0 ? "right" : "left");
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const p = products[current];
  const accent = p.accentColor;
  const bg = p.bgColor;

  const slideContentAnim: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating ? (direction === "right" ? "translateX(32px)" : "translateX(-32px)") : "translateX(0)",
    transition: "opacity 0.38s cubic-bezier(0.4,0,0.2,1), transform 0.38s cubic-bezier(0.4,0,0.2,1)",
  };
  const imgAnim: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating ? (direction === "right" ? "translateX(-40px) scale(0.9)" : "translateX(40px) scale(0.9)") : "translateX(0) scale(1)",
    transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
  };

  const accentBg10 = mounted ? `${accent}10` : "rgba(0,0,0,0.04)";
  const accentBd26 = mounted ? `1px solid ${accent}26` : "1px solid rgba(0,0,0,0.08)";
  const accentColor = mounted ? accent : "#888";

  return (
    <section
      className="ss-section"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <style dangerouslySetInnerHTML={{ __html: SLIDESHOW_CSS }} />

      {/* ── Top accent bar ── */}
      <div className="ss-top-bar">
        {mounted && (
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg,transparent,${accent}66,${accent},${accent}66,transparent)` }} />
        )}
      </div>

      {/* ── Main slide ── */}
      <div
        className="ss-slide"
        style={mounted ? { background: `linear-gradient(135deg,${bg}ee 0%,#ffffff 55%,${bg}55 100%)` } : { background: "#f8f7ff" }}
      >
        {/* Decorative orbs */}
        {mounted && (
          <>
            <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
              style={{ background: `radial-gradient(circle,${accent}0e 0%,${accent}03 40%,transparent 70%)`, filter: "blur(60px)" }} />
            <div className="pointer-events-none absolute -left-24 -top-12 w-[380px] h-[380px] rounded-full"
              style={{ background: `radial-gradient(circle,${accent}08 0%,transparent 70%)`, filter: "blur(44px)" }} />
            <div className="pointer-events-none absolute inset-0 opacity-[0.015]"
              style={{ backgroundImage: `radial-gradient(circle,${accent} 1px,transparent 1px)`, backgroundSize: "34px 34px" }} />
          </>
        )}

        <div className="ss-inner">

          {/* ── Eyebrow ── */}
          <div className="ss-eyebrow">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "5px 13px", borderRadius: 100,
              background: mounted ? `linear-gradient(135deg,${accent}18,${accent}0a)` : "rgba(0,0,0,0.04)",
              border: mounted ? `1px solid ${accent}2e` : "1px solid rgba(0,0,0,0.08)",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: accentColor, boxShadow: mounted ? `0 0 7px ${accent}` : "none" }} />
              <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: accentColor, fontWeight: 700 }}>
                Products
              </span>
            </div>
            <div style={{ height: 1, width: 26, background: mounted ? `linear-gradient(90deg,${accent}30,transparent)` : "rgba(0,0,0,0.07)" }} />
            <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
              {String(current + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
            </span>
          </div>

          {/* ── Two-col layout ── */}
          <div className="ss-two-col">

            {/* Image col */}
            <div className="ss-img-col">
              {mounted && (
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: `radial-gradient(ellipse at center,${accent}1c 0%,transparent 68%)`, filter: "blur(28px)" }} />
              )}
              <div className="relative z-10 w-full h-full flex items-center justify-center" style={imgAnim}>
                <Image
                  src={p.image} alt={p.name}
                  width={460} height={380}
                  className="ss-product-img object-contain w-full"
                  style={{ filter: mounted ? `drop-shadow(0 18px 44px ${accent}55)` : "none" }}
                  priority={current === 0}
                />
              </div>
              <div
                className="absolute top-2.5 left-2.5 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-white z-20"
                style={{ background: mounted ? `linear-gradient(135deg,${accent},${accent}bb)` : "#888", boxShadow: mounted ? `0 3px 12px ${accent}48` : "none" }}
              >
                {p.brand === "—" ? "Generic" : p.brand.split(" ")[0]}
              </div>
            </div>

            {/* Text col */}
            <div className="ss-text-col">
              <div className="ss-anim-wrapper" style={slideContentAnim}>

                {/* Scrollable (desktop) / full-height (mobile) content */}
                <div className="ss-text-inner">

                  {/* Category + model */}
                  <div className="ss-category-row flex items-center gap-2 flex-wrap">
                    <span className="ss-cat-chip inline-flex items-center gap-1.5 font-bold rounded-full uppercase tracking-widest"
                      style={{ background: accentBg10, color: accentColor, border: accentBd26 }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accentColor }} />
                      {p.category}
                    </span>
                    <span className="ss-model-chip font-semibold rounded-lg"
                      style={{ background: "rgba(0,0,0,0.035)", color: "#6b7280", border: "1px solid #e5e7eb" }}>
                      {p.model}
                    </span>
                  </div>

                  {/* Full name — never clamped */}
                  <h3 className="ss-name font-bold text-[#0f0a1e] leading-tight"
                    style={{ fontFamily: "Raleway, system-ui, sans-serif" }}>
                    {p.name}
                  </h3>

                  {/* Tests card */}
                  <div className="ss-tests-box"
                    style={{ background: mounted ? `linear-gradient(135deg,${accent}0c,${accent}05)` : "rgba(0,0,0,0.02)", border: mounted ? `1px solid ${accent}1e` : "1px solid rgba(0,0,0,0.06)" }}>
                    <div className="ss-tests-label-row flex items-center gap-1.5">
                      <span className="w-[3px] h-3.5 rounded-full shrink-0"
                        style={{ background: mounted ? `linear-gradient(180deg,${accent},${accent}44)` : "#ccc" }} />
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: accentColor }}>
                        Tests Covered
                      </p>
                    </div>
                    <div className="ss-tests-scroll">
                      {p.tests.map((test) => (
                        <span key={test} className="rounded-lg font-semibold leading-snug"
                          style={{ background: accentBg10, color: accentColor, border: mounted ? `1px solid ${accent}22` : "1px solid rgba(0,0,0,0.06)" }}>
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Full description — never clamped */}
                  <p className="ss-desc text-[#5a6070]">
                    {p.description}
                  </p>

                  {/* Divider */}
                  <div className="ss-divider h-px"
                    style={{ background: mounted ? `linear-gradient(90deg,${accent}22,transparent 65%)` : "rgba(0,0,0,0.06)" }} />

                  {/* All highlights — no .slice(0,3) limit */}
                  <div className="ss-highlights">
                    <div className="ss-highlights-header">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                        <path
                          d="M7 1.5L8.5 5.5H12.5L9.5 8L10.5 12L7 9.5L3.5 12L4.5 8L1.5 5.5H5.5L7 1.5Z"
                          fill={accentColor} opacity="0.9"
                        />
                      </svg>
                      <span className="ss-highlights-title" style={{ color: accentColor }}>Highlights</span>
                    </div>
                    {p.highlights.slice(0, 3).map((h, i) => (
                      <div key={h} className="ss-highlight-row flex items-start gap-2"
                        style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(5px)" : "translateY(0)", transition: `opacity 0.4s ease ${i * 60}ms,transform 0.4s ease ${i * 60}ms` }}>
                        <span className="ss-highlight-dot rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: mounted ? `${accent}12` : "rgba(0,0,0,0.04)", border: mounted ? `1.5px solid ${accent}28` : "1.5px solid rgba(0,0,0,0.08)" }}>
                          <span className="w-1 h-1 rounded-full" style={{ background: accentColor }} />
                        </span>
                        <span className="ss-highlight-text text-[#374151] font-medium">{h}</span>
                      </div>
                    ))}
                  </div>

                </div>{/* end ss-text-inner */}

                {/* CTAs — always at bottom */}
                <div className="ss-cta-row flex flex-nowrap">
                  <button
                    onClick={() => router.push(`/products#${p.categoryId}`)}
                    className="ss-cta-primary group inline-flex items-center gap-1.5 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: mounted ? `linear-gradient(135deg,${accent},${accent}cc)` : "#888", boxShadow: mounted ? `0 5px 16px ${accent}38` : "none" }}
                  >
                    View Full Specs
                    <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                  <a
                    href="https://wa.me/9779819425801?text=I'm%20interested%20in%20learning%20more%20about%20your%20products."
                    target="_blank" rel="noopener noreferrer"
                    className="ss-cta-secondary group inline-flex items-center gap-1.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    style={{ color: accentColor, background: accentBg10, border: accentBd26 }}
                  >
                    <MessageCircle size={12} />
                    WhatsApp Us
                  </a>
                </div>

              </div>{/* end ss-anim-wrapper */}
            </div>{/* end ss-text-col */}
          </div>{/* end ss-two-col */}
        </div>{/* end ss-inner */}
      </div>{/* end ss-slide */}

      {/* ── Nav bar ── */}
      <div
        className="ss-nav flex items-center justify-center gap-3"
        style={{
          background: mounted ? `linear-gradient(135deg,${bg}55,white)` : "white",
          borderTop: mounted ? `1px solid ${accent}12` : "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <button onClick={() => goTo(current - 1, "left")}
          className="flex items-center gap-1 text-[11px] font-semibold hover:opacity-60 shrink-0 transition-opacity"
          style={{ color: accentColor }} aria-label="Previous product">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">Prev</span>
        </button>

        <div className="flex items-center gap-1.5">
          {products.map((_, i) => (
            <button key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className="relative rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === current ? 22 : 6, height: 6, flexShrink: 0, background: mounted ? (i < current ? accent : `${accent}22`) : "rgba(0,0,0,0.1)" }}
              aria-label={`Go to product ${i + 1}`}
            >
              {i === current && mounted && (
                <span className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${progress * 100}%`, background: accent, transition: "width 0.05s linear" }} />
              )}
            </button>
          ))}
        </div>

        <button onClick={() => goTo(current + 1, "right")}
          className="flex items-center gap-1 text-[11px] font-semibold hover:opacity-60 shrink-0 transition-opacity"
          style={{ color: accentColor }} aria-label="Next product">
          <span className="hidden sm:inline">Next</span>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </section>
  );
}
