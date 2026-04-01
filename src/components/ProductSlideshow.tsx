"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle, TestTube2, Zap, Pause, Play } from "lucide-react";
import { products } from "@/data/products";
import { useRouter } from "next/navigation";

const DURATION = 5500;

const CSS = `
  /* ── Reset & Base ── */
  .ss { 
    width: 100%; 
    overflow: hidden; 
    position: relative; 
    user-select: none;
    font-family: 'DM Sans', system-ui, sans-serif;
  }

  .ss-slide {
    position: relative;
    overflow: hidden;
  }

  /* ── CHANGE 1: mobile height increased 582 → 680 ── */
  @media (min-width: 768px) {
    .ss-slide { height: 640px; }
    .ss-nav   { height: 60px; }
  }
  @media (max-width: 767px) {
    .ss-slide { height: 680px; }
    .ss-nav   { height: 58px; }
  }

  .ss-bg {
    position: absolute; inset: 0;
    transition: background 0.8s ease;
    z-index: 0;
  }
  .ss-noise {
    position: absolute; inset: 0; z-index: 1; pointer-events: none; opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px 180px;
  }
  .ss-grid {
    position: absolute; inset: 0; z-index: 1; pointer-events: none;
  }
  .ss-orb-1, .ss-orb-2 {
    position: absolute; border-radius: 50%; pointer-events: none; z-index: 1;
    filter: blur(70px);
  }
  @media (min-width: 768px) {
    .ss-orb-1 { width: 520px; height: 520px; right: -80px; top: -80px; }
    .ss-orb-2 { width: 340px; height: 340px; left: -60px; bottom: -80px; }
  }
  @media (max-width: 767px) {
    .ss-orb-1 { width: 280px; height: 280px; right: -60px; top: -40px; }
    .ss-orb-2 { width: 200px; height: 200px; left: -40px; bottom: -40px; }
  }

  .ss-accent-bar {
    position: absolute; top: 0; left: 0; right: 0; height: 2px; z-index: 20;
    transition: background 0.7s ease;
  }

  .ss-inner {
    position: relative; z-index: 10;
    max-width: 1100px; margin: 0 auto;
    height: 100%;
    display: flex; flex-direction: column;
  }
  @media (min-width: 768px) { .ss-inner { padding: 0 3rem; } }
  @media (max-width: 767px) { .ss-inner { padding: 0 1.1rem; } }

  .ss-eyebrow {
    display: flex; align-items: center; gap: 10px;
    flex-shrink: 0;
  }
  @media (min-width: 768px) { .ss-eyebrow { padding: 1.4rem 0 0; } }
  @media (max-width: 767px) { .ss-eyebrow { padding: 0.9rem 0 0; } }

  .ss-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 12px; border-radius: 100px;
    font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
    transition: background 0.5s, border-color 0.5s, color 0.5s;
  }
  .ss-pulse { width: 5px; height: 5px; border-radius: 50%; }
  .ss-sep { height: 1px; width: 22px; }
  .ss-counter { font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 0.1em; font-variant-numeric: tabular-nums; }

  .ss-cols {
    display: flex;
    flex: 1;
    min-height: 0;
  }
  @media (min-width: 768px) {
    .ss-cols { flex-direction: row; gap: 2.5rem; padding: 1.25rem 0 1.25rem; align-items: stretch; }
  }
  @media (max-width: 767px) {
    .ss-cols { flex-direction: column; gap: 0; padding: 0.5rem 0 0; }
  }

  .ss-img-col {
    position: relative; display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  @media (min-width: 768px) {
    .ss-img-col { width: 38%; }
  }
  @media (max-width: 767px) {
    .ss-img-col { width: 100%; height: 168px; flex-shrink: 0; }
  }

  .ss-img-glow {
    position: absolute; inset: -10%; border-radius: 50%;
    filter: blur(36px); pointer-events: none;
    transition: background 0.7s;
  }
  .ss-img {
    position: relative; z-index: 2;
    object-fit: contain; transition: opacity 0.4s, transform 0.4s;
  }
  @media (min-width: 768px) { .ss-img { max-height: 360px; width: 100%; } }
  @media (max-width: 767px) { .ss-img { max-height: 140px; width: auto; } }

  .ss-brand-pill {
    position: absolute; top: 8px; left: 8px; z-index: 10;
    font-size: 9px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
    padding: 4px 10px; border-radius: 100px; color: #fff;
    transition: background 0.5s, box-shadow 0.5s;
  }

  .ss-text-col {
    display: flex; flex-direction: column;
    min-width: 0; min-height: 0;
  }
  @media (min-width: 768px) { .ss-text-col { flex: 1; } }
  @media (max-width: 767px) { .ss-text-col { flex: 1; min-height: 0; overflow: hidden; } }

  .ss-anim {
    display: flex; flex-direction: column;
    height: 100%;
    transition: opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1);
  }

  .ss-scroll {
    flex: 1; min-height: 0;
    overflow-y: auto; overflow-x: hidden;
    padding-right: 4px;
    scrollbar-width: thin; scrollbar-color: rgba(0,0,0,0.12) transparent;
  }
  .ss-scroll::-webkit-scrollbar { width: 3px; }
  .ss-scroll::-webkit-scrollbar-track { background: transparent; }
  .ss-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }

  .ss-chips { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; flex-shrink: 0; }
  @media (min-width: 768px) { .ss-chips { margin-bottom: 0.7rem; } }
  @media (max-width: 767px) { .ss-chips { margin-bottom: 0.45rem; } }

  .ss-chip {
    display: inline-flex; align-items: center; gap: 5px;
    border-radius: 100px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.13em;
    transition: background 0.4s, color 0.4s, border-color 0.4s;
  }
  @media (min-width: 768px) { .ss-chip { font-size: 9.5px; padding: 5px 12px; } }
  @media (max-width: 767px) { .ss-chip { font-size: 9px; padding: 3.5px 9px; } }

  .ss-model-tag {
    border-radius: 100px; font-weight: 600; font-size: 9.5px;
    padding: 4px 10px; color: #64748b;
    background: rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.08);
  }
  @media (max-width: 767px) { .ss-model-tag { font-size: 9px; padding: 3px 9px; } }

  .ss-name-row {
    display: flex; align-items: center; gap: 10px; flex-shrink: 0;
  }
  @media (min-width: 768px) { .ss-name-row { margin-bottom: 0.9rem; } }
  @media (max-width: 767px) { .ss-name-row { margin-bottom: 0.55rem; } }

  .ss-name-bar {
    width: 3px; border-radius: 3px; flex-shrink: 0; align-self: stretch; min-height: 20px;
    transition: background 0.5s;
  }
  .ss-name {
    font-weight: 800; line-height: 1.2; color: #0f172a;
    letter-spacing: -0.02em;
  }
  @media (min-width: 768px) { .ss-name { font-size: clamp(1.25rem, 2.2vw, 2rem); } }
  @media (max-width: 767px) { .ss-name { font-size: 1.05rem; } }

  .ss-tests-card {
    border-radius: 14px; flex-shrink: 0;
    transition: background 0.5s, border-color 0.5s;
  }
  @media (min-width: 768px) { .ss-tests-card { padding: 12px 14px; margin-bottom: 0.9rem; } }
  @media (max-width: 767px) { .ss-tests-card { padding: 8px 10px; margin-bottom: 0.5rem; } }

  .ss-tests-header {
    display: inline-flex; align-items: center; gap: 5px;
    border-radius: 100px; padding: 3px 10px;
    font-size: 9px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase;
    color: #fff;
    transition: background 0.5s;
  }
  @media (min-width: 768px) { .ss-tests-header { margin-bottom: 8px; } }
  @media (max-width: 767px) { .ss-tests-header { margin-bottom: 5px; } }

  .ss-tests-tags { display: flex; flex-wrap: wrap; gap: 4px; }
  .ss-test-tag {
    border-radius: 7px; font-weight: 600; white-space: nowrap;
    transition: background 0.4s, color 0.4s, border-color 0.4s;
  }
  @media (min-width: 768px) { .ss-test-tag { font-size: 10.5px; padding: 3px 9px; } }
  @media (max-width: 767px) { .ss-test-tag { font-size: 8.5px; padding: 2.5px 7px; } }

  /* ── CHANGE 2: description — 2-line clamp + see more ── */
  .ss-desc-wrap { flex-shrink: 0; }
  @media (min-width: 768px) { .ss-desc-wrap { margin-bottom: 0.9rem; } }
  @media (max-width: 767px) { .ss-desc-wrap { margin-bottom: 0.55rem; } }

  .ss-desc {
    color: #475569; line-height: 1.75;
    text-align: justify;
  }
  .ss-desc.clamped {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @media (min-width: 768px) { .ss-desc { font-size: 0.915rem; } }
  @media (max-width: 767px) { .ss-desc { font-size: 0.73rem; line-height: 1.6; } }

  /* ── CHANGE 3: see more button ── */
  .ss-see-more {
    display: inline-flex; align-items: center; gap: 3px;
    background: none; border: none; cursor: pointer; padding: 2px 0;
    font-weight: 700; letter-spacing: 0.04em;
    transition: opacity 0.2s;
    margin-top: 3px;
  }
  .ss-see-more:hover { opacity: 0.65; }
  @media (min-width: 768px) { .ss-see-more { font-size: 0.75rem; } }
  @media (max-width: 767px) { .ss-see-more { font-size: 0.68rem; } }

  .ss-divider { height: 1px; flex-shrink: 0; transition: background 0.5s; }
  @media (min-width: 768px) { .ss-divider { margin-bottom: 0.9rem; } }
  @media (max-width: 767px) { .ss-divider { margin-bottom: 0.5rem; } }

  .ss-highlights { flex-shrink: 0; }
  @media (min-width: 768px) { .ss-highlights { margin-bottom: 0.5rem; } }
  @media (max-width: 767px) { .ss-highlights { margin-bottom: 0.4rem; } }

  .ss-highlights-label {
    display: inline-flex; align-items: center; gap: 5px;
    border-radius: 100px; padding: 3px 10px;
    font-size: 9px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase;
    color: #fff; margin-bottom: 8px;
    transition: background 0.5s;
  }
  @media (max-width: 767px) { .ss-highlights-label { margin-bottom: 5px; } }

  .ss-hl-list { display: flex; flex-direction: column; }
  @media (min-width: 768px) { .ss-hl-list { gap: 8px; } }
  @media (max-width: 767px) { .ss-hl-list { gap: 5px; } }

  .ss-hl {
    display: flex; align-items: flex-start; gap: 8px;
  }
  .ss-hl-dot {
    flex-shrink: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    transition: background 0.4s, border-color 0.4s;
    margin-top: 2px;
  }
  @media (min-width: 768px) { .ss-hl-dot { width: 18px; height: 18px; } }
  @media (max-width: 767px) { .ss-hl-dot { width: 14px; height: 14px; } }

  .ss-hl-inner { border-radius: 50%; transition: background 0.4s; }
  @media (min-width: 768px) { .ss-hl-inner { width: 5px; height: 5px; } }
  @media (max-width: 767px) { .ss-hl-inner { width: 4px; height: 4px; } }

  .ss-hl-text { color: #334155; font-weight: 500; }
  @media (min-width: 768px) { .ss-hl-text { font-size: 0.9rem; line-height: 1.5; } }
  @media (max-width: 767px) { .ss-hl-text { font-size: 0.72rem; line-height: 1.45; } }

  .ss-cta-row {
    display: flex; align-items: center; flex-nowrap: nowrap; gap: 10px;
    flex-shrink: 0;
    border-top: 1px solid rgba(0,0,0,0.06);
    transition: border-color 0.5s;
  }
  @media (min-width: 768px) { .ss-cta-row { padding: 12px 0 0; margin-top: 4px; } }
  @media (max-width: 767px) { .ss-cta-row { padding: 8px 0 0; margin-top: 2px; } }

  .ss-cta-primary {
    display: inline-flex; align-items: center; gap: 6px;
    border-radius: 10px; font-weight: 700; color: #fff;
    transition: background 0.4s, box-shadow 0.3s, transform 0.15s;
    border: none; cursor: pointer;
  }
  .ss-cta-primary:hover { transform: translateY(-1px); }
  .ss-cta-primary:active { transform: translateY(0); }
  @media (min-width: 768px) { .ss-cta-primary { font-size: 0.77rem; padding: 0.6rem 1.3rem; } }
  @media (max-width: 767px) { .ss-cta-primary { font-size: 0.69rem; padding: 0.45rem 1rem; } }

  .ss-cta-secondary {
    display: inline-flex; align-items: center; gap: 5px;
    border-radius: 10px; font-weight: 600;
    border: 1.5px solid;
    transition: background 0.4s, color 0.4s, border-color 0.4s, transform 0.15s;
    text-decoration: none;
  }
  .ss-cta-secondary:hover { transform: translateY(-1px); }
  @media (min-width: 768px) { .ss-cta-secondary { font-size: 0.77rem; padding: 0.58rem 1.2rem; } }
  @media (max-width: 767px) { .ss-cta-secondary { font-size: 0.69rem; padding: 0.43rem 0.9rem; } }

  .ss-pause-indicator {
    position: absolute; inset: 0; z-index: 30;
    display: flex; align-items: center; justify-content: center;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  .ss-pause-badge {
    display: flex; align-items: center; gap: 6px;
    background: rgba(0,0,0,0.55); backdrop-filter: blur(8px);
    border-radius: 100px; padding: 6px 14px;
    color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
  }

  .ss-nav {
    display: flex; align-items: center; justify-content: center; gap: 14px;
    border-top: 1px solid rgba(0,0,0,0.06);
    transition: background 0.7s, border-color 0.5s;
  }

  .ss-nav-btn {
    display: flex; align-items: center; gap: 4px;
    font-size: 11px; font-weight: 700;
    background: none; border: none; cursor: pointer;
    transition: opacity 0.2s, transform 0.15s;
    padding: 0;
  }
  .ss-nav-btn:hover { opacity: 0.55; transform: scale(0.95); }

  .ss-dots { display: flex; align-items: center; gap: 5px; }
  .ss-dot {
    border-radius: 100px; overflow: hidden;
    cursor: pointer; transition: width 0.3s cubic-bezier(0.4,0,0.2,1), background 0.4s;
    height: 5px; flex-shrink: 0; border: none; padding: 0; position: relative;
  }
  .ss-dot-fill {
    position: absolute; inset-y: 0; left: 0; border-radius: 100px;
    transition: width 0.05s linear;
  }

  @media (max-width: 400px) { .ss-nav-label { display: none; } }
`;

export default function ProductSlideshow() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [showPauseHint, setShowPauseHint] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false); // ← new

  const progressRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTickRef = useRef(Date.now());
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clickHandled = useRef(false);

  useEffect(() => { setMounted(true); }, []);

  const goTo = useCallback(
    (idx: number, dir: "left" | "right" = "right") => {
      if (animating) return;
      const next = ((idx % products.length) + products.length) % products.length;
      setDirection(dir);
      setAnimating(true);
      setProgress(0);
      setDescExpanded(false); // ← reset on slide change
      progressRef.current = 0;
      lastTickRef.current = Date.now();
      setTimeout(() => { setCurrent(next); setAnimating(false); }, 360);
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

  const handleSlideClick = () => {
    if (clickHandled.current) { clickHandled.current = false; return; }
    const next = !paused;
    setPaused(next);
    setShowPauseHint(true);
    if (hintTimer.current) clearTimeout(hintTimer.current);
    hintTimer.current = setTimeout(() => setShowPauseHint(false), 1200);
  };

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 42) {
      clickHandled.current = true;
      goTo(dx < 0 ? current + 1 : current - 1, dx < 0 ? "right" : "left");
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const p = products[current];
  const accent = mounted ? p.accentColor : "#7c3aed";
  const bg = mounted ? p.bgColor : "#f5f3ff";

  const slideAnim: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? direction === "right" ? "translateX(28px)" : "translateX(-28px)"
      : "translateX(0)",
  };
  const imgAnim: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? direction === "right" ? "translateX(-36px) scale(0.92)" : "translateX(36px) scale(0.92)"
      : "translateX(0) scale(1)",
  };

  const a = (op: string) => mounted ? `${accent}${op}` : `rgba(0,0,0,0.05)`;

  return (
    <section className="ss">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div
        className="ss-slide"
        onClick={handleSlideClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: "pointer" }}
      >
        <div className="ss-accent-bar" style={{
          background: mounted
            ? `linear-gradient(90deg, transparent, ${accent}55, ${accent}, ${accent}55, transparent)`
            : "transparent"
        }} />

        <div className="ss-bg" style={{
          background: mounted
            ? `linear-gradient(140deg, ${bg}f0 0%, #ffffff 45%, ${bg}80 100%)`
            : "#f8f7ff"
        }} />
        <div className="ss-noise" />
        <div className="ss-grid" style={{
          backgroundImage: mounted ? `radial-gradient(circle, ${accent}16 1px, transparent 1px)` : "none",
          backgroundSize: "30px 30px",
        }} />
        {mounted && (
          <>
            <div className="ss-orb-1" style={{ background: `radial-gradient(circle, ${accent}1a 0%, ${accent}05 50%, transparent 75%)` }} />
            <div className="ss-orb-2" style={{ background: `radial-gradient(circle, ${accent}12 0%, transparent 70%)` }} />
          </>
        )}

        <div className="ss-pause-indicator" style={{ opacity: showPauseHint ? 1 : 0 }}>
          <div className="ss-pause-badge">
            {paused ? <Pause size={12} /> : <Play size={12} />}
            {paused ? "Paused" : "Playing"}
          </div>
        </div>

        <div className="ss-inner">
          <div className="ss-eyebrow">
            <div className="ss-badge" style={{
              background: mounted ? `linear-gradient(135deg, ${accent}1a, ${accent}0a)` : "rgba(0,0,0,0.04)",
              border: mounted ? `1px solid ${accent}2e` : "1px solid rgba(0,0,0,0.08)",
              color: accent,
            }}>
              <span className="ss-pulse animate-pulse" style={{ background: accent, boxShadow: mounted ? `0 0 6px ${accent}` : "none" }} />
              Products
            </div>
            <div className="ss-sep" style={{ background: mounted ? `linear-gradient(90deg, ${accent}30, transparent)` : "rgba(0,0,0,0.06)" }} />
            <span className="ss-counter">{String(current + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}</span>
            {paused && (
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, opacity: 0.7, marginLeft: 2 }}>
                · PAUSED
              </span>
            )}
          </div>

          <div className="ss-cols">
            <div className="ss-img-col">
              {mounted && <div className="ss-img-glow" style={{ background: `radial-gradient(ellipse at center, ${accent}28 0%, transparent 65%)` }} />}
              <Image
                src={p.image} alt={p.name}
                width={460} height={380}
                className="ss-img"
                style={{
                  ...imgAnim,
                  filter: mounted ? `drop-shadow(0 16px 40px ${accent}55)` : "none",
                }}
                priority={current === 0}
              />
              <div className="ss-brand-pill" style={{
                background: mounted ? `linear-gradient(135deg, ${accent}, ${accent}cc)` : "#888",
                boxShadow: mounted ? `0 3px 10px ${accent}44` : "none",
              }}>
                {p.brand === "—" ? "Generic" : p.brand.split(" ")[0]}
              </div>
            </div>

            <div className="ss-text-col">
              <div className="ss-anim" style={slideAnim}>
                <div className="ss-scroll">

                  <div className="ss-chips">
                    <span className="ss-chip" style={{
                      background: a("14"), color: accent, border: `1px solid ${a("28")}`,
                    }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: accent, flexShrink: 0 }} />
                      {p.category}
                    </span>
                    <span className="ss-model-tag">{p.model}</span>
                  </div>

                  <div className="ss-name-row">
                    <div className="ss-name-bar" style={{ background: `linear-gradient(180deg, ${accent}, ${accent}55)` }} />
                    <h2 className="ss-name">{p.name}</h2>
                  </div>

                  <div className="ss-tests-card" style={{
                    background: mounted ? `linear-gradient(135deg, ${accent}0e, ${accent}05)` : "rgba(0,0,0,0.02)",
                    border: mounted ? `1px solid ${accent}1e` : "1px solid rgba(0,0,0,0.06)",
                  }}>
                    <div className="ss-tests-header" style={{ background: accent }}>
                      <TestTube2 size={11} color="#fff" />
                      Tests Covered
                    </div>
                    <div className="ss-tests-tags">
                      {p.tests.map((t) => (
                        <span key={t} className="ss-test-tag" style={{
                          background: a("10"), color: accent, border: `1px solid ${a("20")}`,
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* ── CHANGE: description with 2-line clamp + see more ── */}
                  <div className="ss-desc-wrap">
                    <p className={`ss-desc${descExpanded ? "" : " clamped"}`}>
                      {p.description}
                    </p>
                    <button
                      className="ss-see-more"
                      style={{ color: accent }}
                      onClick={(e) => { e.stopPropagation(); setDescExpanded((v) => !v); }}
                    >
                      {descExpanded ? (
                        <>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                            <path d="M2 8L6 4L10 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          See less
                        </>
                      ) : (
                        <>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          See more
                        </>
                      )}
                    </button>
                  </div>

                  <div className="ss-divider" style={{
                    background: mounted ? `linear-gradient(90deg, ${accent}25, transparent 60%)` : "rgba(0,0,0,0.06)",
                  }} />

                  <div className="ss-highlights">
                    <div className="ss-highlights-label" style={{ background: accent }}>
                      <Zap size={11} color="#fff" />
                      Highlights
                    </div>
                    <div className="ss-hl-list">
                      {p.highlights.slice(0, 3).map((h, i) => (
                        <div key={h} className="ss-hl" style={{
                          opacity: animating ? 0 : 1,
                          transform: animating ? "translateY(6px)" : "translateY(0)",
                          transition: `opacity 0.38s ease ${i * 55}ms, transform 0.38s ease ${i * 55}ms`,
                        }}>
                          <span className="ss-hl-dot" style={{
                            background: a("12"), border: `1.5px solid ${a("28")}`,
                          }}>
                            <span className="ss-hl-inner" style={{ background: accent }} />
                          </span>
                          <span className="ss-hl-text">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="ss-cta-row" style={{ borderTopColor: a("18") }}>
                  <button
                    className="ss-cta-primary"
                    onClick={(e) => { e.stopPropagation(); router.push(`/products#${p.categoryId}`); }}
                    style={{
                      background: mounted ? `linear-gradient(135deg, ${accent}, ${accent}cc)` : "#888",
                      boxShadow: mounted ? `0 4px 14px ${accent}40` : "none",
                    }}
                  >
                    View Full Specs
                    <ArrowRight size={12} />
                  </button>
                  <a
                    href="https://wa.me/9779819425801?text=I'm%20interested%20in%20learning%20more%20about%20your%20products."
                    target="_blank" rel="noopener noreferrer"
                    className="ss-cta-secondary"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      color: accent,
                      background: a("0e"),
                      borderColor: a("2a"),
                    }}
                  >
                    <MessageCircle size={12} />
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ss-nav" style={{
        background: mounted ? `linear-gradient(135deg, ${bg}60, #ffffff)` : "#ffffff",
        borderTopColor: a("12"),
      }}>
        <button
          className="ss-nav-btn"
          style={{ color: accent }}
          onClick={() => goTo(current - 1, "left")}
          aria-label="Previous"
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="ss-nav-label" style={{ fontSize: 13 }}>Prev</span>
        </button>

        <div className="ss-dots">
          {products.map((_, i) => (
            <button
              key={i}
              className="ss-dot"
              onClick={() => goTo(i, i > current ? "right" : "left")}
              aria-label={`Go to ${i + 1}`}
              style={{
                width: i === current ? 24 : 6,
                background: mounted ? (i < current ? accent : `${accent}22`) : "rgba(0,0,0,0.10)",
              }}
            >
              {i === current && mounted && (
                <span
                  className="ss-dot-fill"
                  style={{ width: `${progress * 100}%`, background: accent }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          className="ss-nav-btn"
          style={{ color: accent }}
          onClick={() => goTo(current + 1, "right")}
          aria-label="Next"
        >
          <span className="ss-nav-label" style={{ fontSize: 13 }}>Next</span>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}