"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { products } from "@/data/products";

export default function ProductSlideshow() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((idx + products.length) % products.length);
      setAnimating(false);
    }, 300);
  }, [animating]);

  // Auto-advance every 5s
  useEffect(() => {
    const t = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(t);
  }, [current, go]);

  const p = products[current];

  return (
    <section className="w-full bg-[#0f0a1e] py-0 overflow-hidden">
      <div
        className="relative min-h-[580px] flex items-stretch transition-all duration-500"
        style={{ background: `linear-gradient(135deg, #0f0a1e 0%, ${p.accentColor}22 100%)` }}
      >
        {/* Left — real product image */}
        <div
          className="relative w-1/2 flex items-center justify-center p-10 overflow-hidden"
          style={{ background: p.bgColor + "18" }}
        >
          {/* Soft bg glow */}
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: `radial-gradient(ellipse at center, ${p.accentColor} 0%, transparent 70%)` }}
          />
          <div
            className={`relative z-10 transition-all duration-300 ${animating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
            style={{ maxWidth: 480, width: "100%" }}
          >
            <Image
              src={p.image}
              alt={p.name}
              width={480}
              height={420}
              className="object-contain w-full"
              style={{ maxHeight: 420, filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))" }}
              priority={current === 0}
            />
          </div>

          {/* Brand pill */}
          <span
            className="absolute top-6 left-6 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
            style={{ background: p.accentColor, color: "#fff" }}
          >
            {p.brand}
          </span>
        </div>

        {/* Right — product info */}
        <div className="w-1/2 flex flex-col justify-center px-14 py-12">
          <div
            className={`transition-all duration-300 ${animating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            {/* Category */}
            <p className="font-mono-custom text-[11px] tracking-[0.18em] uppercase mb-3"
               style={{ color: p.accentColor }}>
              {p.category}
            </p>

            {/* Name */}
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              {p.name}
            </h2>

            {/* Model badge */}
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5"
              style={{ background: p.accentColor + "33", color: p.accentColor, border: `1px solid ${p.accentColor}55` }}
            >
              Model: {p.model}
            </span>

            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              {p.description}
            </p>

            {/* Key features bullets */}
            <div className="mb-8">
              <p className="text-white/40 text-[10px] font-mono-custom tracking-widest uppercase mb-3">
                Key Features
              </p>
              <ul className="space-y-2">
                {p.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ background: p.accentColor }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <a
                href="#products"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("selectCategory", { detail: p.categoryId }));
                  window.dispatchEvent(new CustomEvent("selectProduct", { detail: p.id }));
                }}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: p.accentColor }}
              >
                View Full Specs
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-xl text-sm font-medium text-white/70 border border-white/20 hover:bg-white/10 transition-all"
              >
                Enquire
              </a>
            </div>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={() => go(current - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-20"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(current + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-20"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 py-4 bg-[#0f0a1e]">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="transition-all duration-300"
          >
            <Circle
              size={8}
              className={i === current ? "fill-amber-400 text-amber-400" : "fill-white/20 text-white/20"}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="h-0.5 bg-white/10">
        <div
          key={current}
          className="h-full transition-none"
          style={{
            background: p.accentColor,
            animation: "progress 5s linear",
            width: "100%",
            transformOrigin: "left",
          }}
        />
      </div>
      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
