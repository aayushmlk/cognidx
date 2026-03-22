import { useEffect, useRef } from "react";


/* ── DNA Canvas ── */
export function DNACanvas() {
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
        const x    = i * segW;
        const y1   = s1y(x);
        const y2   = s2y(x);
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
      g1.addColorStop(0, "rgba(124,58,237,0)");
      g1.addColorStop(0.15, "rgba(124,58,237,0.9)");
      g1.addColorStop(0.5, "rgba(167,139,250,1)");
      g1.addColorStop(0.85, "rgba(124,58,237,0.9)");
      g1.addColorStop(1, "rgba(124,58,237,0)");
      ctx.strokeStyle = g1; ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(167,139,250,0.8)"; ctx.shadowBlur = 12;
      ctx.stroke(); ctx.restore();

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) { const y = s2y(x); x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
      const g2 = ctx.createLinearGradient(0, 0, W, 0);
      g2.addColorStop(0, "rgba(109,40,217,0)");
      g2.addColorStop(0.15, "rgba(109,40,217,0.9)");
      g2.addColorStop(0.5, "rgba(124,58,237,1)");
      g2.addColorStop(0.85, "rgba(109,40,217,0.9)");
      g2.addColorStop(1, "rgba(109,40,217,0)");
      ctx.strokeStyle = g2; ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(124,58,237,0.6)"; ctx.shadowBlur = 8;
      ctx.stroke(); ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0d0414"; ctx.fillRect(0, 0, W, H);

      const vg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.55);
      vg.addColorStop(0, "rgba(88,28,135,0.28)");
      vg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);

      particles.forEach((p) => {
        p.x += p.speedX; p.y += p.speedY;
        if (p.x < 0 || p.x > 1) p.speedX *= -1;
        if (p.y < 0 || p.y > 1) p.speedY *= -1;
        const grd = ctx.createRadialGradient(p.x * W, p.y * H, 0, p.x * W, p.y * H, p.r * 4);
        grd.addColorStop(0, `rgba(167,139,250,${p.alpha})`);
        grd.addColorStop(1, "rgba(167,139,250,0)");
        ctx.beginPath(); ctx.arc(p.x * W, p.y * H, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd; ctx.fill();
      });

      const t = tRef.current;
      [
        { hy: H * 0.13, amp: 34, freq: 0.022, speed: 0.007, phase: 0,           alpha: 0.55 },
        { hy: H * 0.5,  amp: 48, freq: 0.018, speed: 0.006, phase: Math.PI,     alpha: 0.27 },
        { hy: H * 0.87, amp: 32, freq: 0.024, speed: 0.008, phase: Math.PI / 2, alpha: 0.52 },
      ].forEach((h) => drawHelixH(h.hy, h.amp, h.freq, t * h.speed + h.phase, h.alpha));

      tRef.current += 1;
      rafRef.current = requestAnimationFrame(loop);
    };

    loop();
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}