"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, CheckCircle2, MessageSquare, Zap } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  highlight?: boolean;
}

export default function ProductRow({ product, highlight }: Props) {
  const [visitors, setVisitors] = useState(product.baseVisitors);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`visitors_${product.id}`);
      const count = stored ? parseInt(stored, 10) : product.baseVisitors;
      const next = count + 1;
      localStorage.setItem(`visitors_${product.id}`, String(next));
      setVisitors(next);
    } catch { }
  }, [product.id, product.baseVisitors]);

  const accent = product.accentColor;
  const bg = product.bgColor;

  return (
    <div
      id={`product-${product.id}`}
      className="group relative rounded-3xl overflow-hidden transition-all duration-500"
      style={{
        background: "white",
        border: `1px solid ${accent}22`,
        boxShadow: highlight
          ? `0 0 0 3px ${accent}, 0 20px 60px ${accent}30`
          : `0 4px 24px ${accent}12`,
      }}
    >
      {/* Top color stripe */}
      <div className="h-1 w-full" style={{
        background: `linear-gradient(90deg, ${accent}cc, ${accent}44, transparent)`
      }} />

      <div className="flex flex-col lg:flex-row">

        {/* ── LEFT: Image Panel — wider, taller, more air ── */}
        <div
          className="lg:w-[44%] relative flex items-center justify-center shrink-0 overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${bg} 0%, ${bg}cc 60%, ${bg}88 100%)`,
            minHeight: 340,
            padding: "48px 44px",
          }}
        >
          {/* Large decorative circle — back layer */}
          <div
            className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-[0.18] transition-all duration-700 group-hover:opacity-[0.28] group-hover:scale-110"
            style={{ background: accent }}
          />
          {/* Small decorative circle — top-left */}
          <div
            className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-[0.10]"
            style={{ background: accent }}
          />
          {/* Subtle centre glow behind image */}
          <div
            className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-60"
            style={{
              background: `radial-gradient(ellipse 65% 60% at 55% 52%, ${accent}22 0%, transparent 70%)`,
            }}
          />

          {/* Image */}
          <div className="relative z-10 w-full flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={480}
              height={360}
              className="object-contain w-full transition-transform duration-700 group-hover:scale-[1.06]"
              style={{
                maxHeight: 310,
                filter: `drop-shadow(0 18px 52px ${accent}60)`,
              }}
            />
          </div>

          {/* Brand badge */}
          <div className="flex flex-row">
            
          </div>
          <div
            className="absolute top-5 left-5 text-white text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
              boxShadow: `0 4px 14px ${accent}50`,
            }}
          >
            {product.brand === "—" ? "Generic" : product.brand.split(" ")[0]}
            
          </div>
             {/* Model number — bottom right */}
          <div
            className="absolute bottom-5 right-5 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.75)",
              color: accent,
              border: `1px solid ${accent}20`,
            }}
          >
            {product.model}
          </div>
         

          {/* Visitor pill */}
          <div
            className="absolute bottom-5 left-5 flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.90)",
              color: accent,
              border: `1px solid ${accent}28`,
              boxShadow: `0 2px 10px ${accent}18`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
            <Eye size={10} />
            {visitors.toLocaleString()}
          </div>
          

        
        </div>

        {/* ── RIGHT: Info Panel ── */}
        <div className="lg:w-[56%] flex flex-col p-8 lg:p-10 gap-7">

          {/* Category + name */}
          <div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                style={{
                  background: `${accent}15`,
                  color: accent,
                  border: `1px solid ${accent}30`,
                }}
              >
                {product.category}
              </span>
            </div>

            <h3 className="font-playfair text-2xl lg:text-[1.8rem] font-bold leading-snug mb-3 text-[#111827]">
              {product.name}
            </h3>

            <p className="text-sm text-[#6b7280] leading-relaxed max-w-lg">
              {product.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>
              Key Highlights
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-[#374151] leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs table */}
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${accent}20` }}>
            <div
              className="px-4 py-2.5 flex items-center gap-2"
              style={{ background: `${accent}10` }}
            >
              <Zap size={14} style={{ color: accent }} />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: accent }}>
                Technical Specifications
              </span>
            </div>
            <table className="w-full text-xs">
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={s.key} style={{ background: i % 2 === 0 ? "white" : `${accent}06` }}>
                    <td
                      className="px-4 py-2.5 font-semibold w-[38%] border-r"
                      style={{ color: accent, borderColor: `${accent}15` }}
                    >
                      {s.key}
                    </td>
                    <td className="px-4 py-2.5 text-[#4b5563]">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Enquire button */}
          <div className="pt-2" style={{ borderTop: `1px solid ${accent}15` }}>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 rounded-xl text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
                boxShadow: `0 4px 20px ${accent}40`,
              }}
            >
              <MessageSquare size={14} />
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}