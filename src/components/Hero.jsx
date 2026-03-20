"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, FlaskConical, Microscope, Activity, Award } from "lucide-react";

const stats = [
  { num: 70,  suffix: "+", label: "Test Parameters",    icon: FlaskConical },
  { num: 200, suffix: "+", label: "Institutions Served", icon: Award },
  { num: 5,   suffix: "",  label: "Global Brands",       icon: Microscope },
  { num: 50,  suffix: "+", label: "Product Lines",       icon: Activity },
];

const pills = [
  "Fluorescence Immunoassay",
  "Haematology",
  "Blood Gas",
  "Chemiluminescence",
  "Biochemistry",
  "Urinalysis",
];

/* ── Count-up hook ── */
function useCountUp(target, duration, start) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

/* ── Stat cell ── */
function StatCell({ stat, index, animate, borderRight }) {
  const Icon  = stat.icon;
  const count = useCountUp(stat.num, 1600 + index * 200, animate);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "14px 6px", borderRight, transition: "background 0.2s", cursor: "default" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
    >
      <Icon size={24} style={{ color: "rgba(167,139,250,0.45)", marginBottom: 5 }} />
      <div style={{ fontSize: "clamp(1.25rem,2.6vw,1.7rem)", fontWeight: 800, lineHeight: 1, marginBottom: 3, fontFamily: "'Syne',sans-serif", background: "linear-gradient(135deg,#a78bfa,#c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        {count}{stat.suffix}
      </div>
      <div style={{ color: "rgba(196,181,253,0.5)", fontSize: 10, fontWeight: 500, letterSpacing: "0.04em", lineHeight: 1.3 }}>
        {stat.label}
      </div>
    </div>
  );
}

/* ── DNA Canvas ── */
function DNACanvas() {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);
  const tRef      = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.00022,
      speedY: (Math.random() - 0.5) * 0.00013,
      alpha: Math.random() * 0.3 + 0.07,
    }));

    const drawHelixH = (hy, amplitude, freq, offset, alpha) => {
      const steps = Math.ceil(W / 5);
      const segW  = W / steps;
      const s1y   = (x) =>  hy + Math.sin(x * freq + offset) * amplitude;
      const s2y   = (x) =>  hy - Math.sin(x * freq + offset) * amplitude;

      for (let i = 0; i <= steps; i++) {
        const x   = i * segW;
        const y1  = s1y(x);
        const y2  = s2y(x);
        const cosV = Math.cos(x * freq + offset);
        const ra   = cosV * 0.5 + 0.5;
        ctx.save();
        ctx.globalAlpha = ra * alpha * 0.58;
        ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2);
        ctx.strokeStyle = i % 2 === 0 ? "hsl(270,75%,62%)" : "hsl(290,70%,68%)";
        ctx.lineWidth = 0.85;
        ctx.stroke();
        if (ra > 0.28) {
          const nr = 1.5 + ra * 2.2;
          ctx.globalAlpha = ra * alpha;
          ctx.beginPath(); ctx.arc(x, y1, nr, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(265,85%,70%,${ra})`; ctx.fill();
          ctx.beginPath(); ctx.arc(x, y2, nr, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(290,80%,72%,${ra})`; ctx.fill();
        }
        ctx.restore();
      }

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) { const y = s1y(x); x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
      const g1 = ctx.createLinearGradient(0, 0, W, 0);
      g1.addColorStop(0, "rgba(124,58,237,0)"); g1.addColorStop(0.15, "rgba(124,58,237,0.9)");
      g1.addColorStop(0.5, "rgba(167,139,250,1)"); g1.addColorStop(0.85, "rgba(124,58,237,0.9)"); g1.addColorStop(1, "rgba(124,58,237,0)");
      ctx.strokeStyle = g1; ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(167,139,250,0.8)"; ctx.shadowBlur = 12;
      ctx.stroke(); ctx.restore();

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) { const y = s2y(x); x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
      const g2 = ctx.createLinearGradient(0, 0, W, 0);
      g2.addColorStop(0, "rgba(109,40,217,0)"); g2.addColorStop(0.15, "rgba(109,40,217,0.9)");
      g2.addColorStop(0.5, "rgba(124,58,237,1)"); g2.addColorStop(0.85, "rgba(109,40,217,0.9)"); g2.addColorStop(1, "rgba(109,40,217,0)");
      ctx.strokeStyle = g2; ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(124,58,237,0.6)"; ctx.shadowBlur = 8;
      ctx.stroke(); ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0d0414"; ctx.fillRect(0, 0, W, H);
      const vg = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W*0.55);
      vg.addColorStop(0, "rgba(88,28,135,0.28)"); vg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);

      particles.forEach((p) => {
        p.x += p.speedX; p.y += p.speedY;
        if (p.x < 0 || p.x > 1) p.speedX *= -1;
        if (p.y < 0 || p.y > 1) p.speedY *= -1;
        const grd = ctx.createRadialGradient(p.x*W, p.y*H, 0, p.x*W, p.y*H, p.r*4);
        grd.addColorStop(0, `rgba(167,139,250,${p.alpha})`); grd.addColorStop(1, "rgba(167,139,250,0)");
        ctx.beginPath(); ctx.arc(p.x*W, p.y*H, p.r*4, 0, Math.PI*2); ctx.fillStyle = grd; ctx.fill();
      });

      const t = tRef.current;
      [
        { hy: H*0.13, amp: 34, freq: 0.022, speed: 0.007, phase: 0,           alpha: 0.55 },
        { hy: H*0.5,  amp: 48, freq: 0.018, speed: 0.006, phase: Math.PI,     alpha: 0.27 },
        { hy: H*0.87, amp: 32, freq: 0.024, speed: 0.008, phase: Math.PI/2,   alpha: 0.52 },
      ].forEach((h) => drawHelixH(h.hy, h.amp, h.freq, t*h.speed + h.phase, h.alpha));

      tRef.current += 1;
      rafRef.current = requestAnimationFrame(loop);
    };

    loop();
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />;
}

/* ── Hero ── */
export default function Hero() {
  const [mounted, setMounted]           = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => setStatsVisible(true), 700);
    return () => clearTimeout(t);
  }, [mounted]);

  const fade = (delay) => ({
    transition: "opacity 0.65s ease, transform 0.65s ease",
    transitionDelay: delay,
    opacity:   mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(14px)",
  });

  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#0d0414" }}>
      <DNACanvas />

      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(13,4,20,0.18) 0%, rgba(13,4,20,0.70) 100%), linear-gradient(180deg, rgba(13,4,20,0.88) 0%, rgba(13,4,20,0.10) 28%, rgba(13,4,20,0.10) 72%, rgba(13,4,20,0.88) 100%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%", maxWidth: 860, padding: "0 20px", gap: 0 }}>

        {/* Badge */}
        <div style={{ ...fade("0ms"), display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12, padding: "6px 15px", borderRadius: 100, background: "rgba(88,28,135,0.35)", border: "1px solid rgba(167,139,250,0.3)", backdropFilter: "blur(14px)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 10px rgba(167,139,250,0.9), 0 0 22px rgba(167,139,250,0.5)", animation: "heroPulse 2s ease-in-out infinite", flexShrink: 0 }} />
          <span style={{ fontSize: 10, letterSpacing: "0.17em", textTransform: "uppercase", color: "#ddd6fe", fontWeight: 600, fontFamily: "'Syne',sans-serif", whiteSpace: "nowrap" }}>
            Kathmandu, Nepal &nbsp;·&nbsp; Est. 2019 &nbsp;·&nbsp; CE &amp; NMPA Certified
          </span>
        </div>

        {/* Eyebrow */}
        <p style={{ ...fade("80ms"), fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#a78bfa", fontWeight: 700, fontFamily: "'Syne',sans-serif", marginBottom: 10 }}>
          Nepal&apos;s Premier Biomedical Diagnostics Partner
        </p>

        {/* Headline */}
        <h1 style={{ ...fade("140ms"), fontSize: "clamp(1.85rem, 5.2vw, 3.6rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#faf5ff", fontFamily: "'Syne',sans-serif", marginBottom: 12 }}>
          Cognidx{" "}
          <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#a78bfa 0%,#c4b5fd 45%,#7c3aed 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer 4s linear infinite" }}>
            Improving lives with 
          </span>{" "}
          precision and care
        </h1>

        {/* Divider */}
        <div style={{ ...fade("200ms"), width: 44, height: 2, borderRadius: 99, background: "linear-gradient(90deg,#7c3aed,#a78bfa)", margin: "0 auto 12px" }} />

        {/* Sub */}
        <p style={{ ...fade("250ms"), fontSize: "clamp(0.83rem,1.3vw,0.96rem)", color: "rgba(218, 212, 241, 0.72)", lineHeight: 1.8, maxWidth: 500, marginBottom: 16 }} className="font-serif" >
          Cognidx Enterprises delivers world-class biomedical diagnostic instruments — from immunoassay to haematology — empowering hospitals, clinics, and labs across South Asia.
        </p>

        {/* CTAs
        <div style={{ ...fade("310ms"), display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 14 }}>
          <Link
            href="/products"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 700, padding: "10px 24px", borderRadius: 13, color: "#fff", fontSize: 14, fontFamily: "'Syne',sans-serif", background: "linear-gradient(135deg,#7c3aed 0%,#6d28d9 100%)", boxShadow: "0 4px 22px rgba(109,40,217,0.5), inset 0 1px 0 rgba(255,255,255,0.12)", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(109,40,217,0.65)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 22px rgba(109,40,217,0.5), inset 0 1px 0 rgba(255,255,255,0.12)"; }}
          >
            Explore Products <ArrowRight size={14} />
          </Link>
          <Link
            href="/#about"
            style={{ display: "inline-flex", alignItems: "center", fontWeight: 600, padding: "10px 24px", borderRadius: 13, color: "#c4b5fd", fontSize: 14, fontFamily: "'Syne',sans-serif", background: "rgba(88,28,135,0.3)", border: "1.5px solid rgba(167,139,250,0.28)", backdropFilter: "blur(8px)", textDecoration: "none", transition: "background 0.2s, transform 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(88,28,135,0.55)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(88,28,135,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Our Mission
          </Link>
        </div> */}

        {/* Pills */}
        <div style={{ ...fade("370ms"), display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, marginBottom: 14 , marginTop:5}}>
          {pills.map((p) => (
            <span key={p} style={{ fontSize: 10, fontWeight: 500, padding: "5px 12px", borderRadius: 100, background: "rgba(88,28,135,0.3)", border: "1px solid rgba(167,139,250,0.22)", color: "#ddd6fe", backdropFilter: "blur(6px)", cursor: "default", transition: "background 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(88,28,135,0.55)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(88,28,135,0.3)"; }}
            >{p}</span>
          ))}
        </div>

        {/* Stats */}
        <div style={{ ...fade("430ms"), width: "100%", maxWidth: 620 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderRadius: 15, overflow: "hidden", background: "rgba(30,10,50,0.65)", border: "1px solid rgba(167,139,250,0.18)", backdropFilter: "blur(24px)", boxShadow: "0 4px 32px rgba(109,40,217,0.18), inset 0 1px 0 rgba(167,139,250,0.1)" }}>
            {stats.map((stat, i) => (
              <StatCell
                key={stat.label}
                stat={stat}
                index={i}
                animate={statsVisible}
                borderRight={i < stats.length - 1 ? "1px solid rgba(167,139,250,0.12)" : "none"}
              />
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 10, color: "rgba(167,139,250,0.35)", marginTop: 9, letterSpacing: "0.05em" }} className="text-base">
            Trusted by leading hospitals &amp; diagnostic labs across Nepal &amp; South Asia
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
        @keyframes shimmer { 0%{background-position:0% center} 100%{background-position:200% center} }
        @keyframes heroPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
      `}</style>
    </section>
  );
}