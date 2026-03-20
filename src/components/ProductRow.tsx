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

        {/* ── LEFT: Image Panel ── */}
        <div
          className="lg:w-[36%] relative flex items-center justify-center p-10 shrink-0 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${bg} 0%, ${bg}dd 100%)` }}
        >
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-20 transition-all duration-700 group-hover:opacity-30 group-hover:scale-110"
            style={{ background: accent }} />
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-10"
            style={{ background: accent }} />

          <div className="relative z-10 w-full flex items-center justify-center" style={{ minHeight: 200 }}>
            <Image
              src={product.image}
              alt={product.name}
              width={380}
              height={280}
              className="object-contain w-full transition-transform duration-700 group-hover:scale-105"
              style={{
                maxHeight: 260,
                filter: `drop-shadow(0 12px 40px ${accent}55)`,
              }}
            />
          </div>

          {/* Brand badge */}
          <div
            className="absolute top-5 left-5 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md"
            style={{ background: accent }}
          >
            {product.brand === "—" ? "Generic" : product.brand.split(" ")[0]}
          </div>

          {/* Visitor pill */}
          <div
            className="absolute bottom-5 left-5 flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.85)",
              color: accent,
              border: `1px solid ${accent}33`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
            <Eye size={10} />
            {visitors.toLocaleString()}
          </div>
        </div>

        {/* ── RIGHT: Info Panel ── */}
        <div className="lg:w-[64%] flex flex-col p-8 lg:p-10 gap-7">

          {/* Category + model + name */}
          <div>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
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
              <span className="text-[11px] text-[#9ca3af] font-mono">
                {product.model}
              </span>
            </div>

            <h3 className="font-playfair text-2xl lg:text-[1.7rem] font-bold leading-snug mb-3 text-[#111827]">
              {product.name}
            </h3>

            <p className="text-sm text-[#6b7280] leading-relaxed max-w-lg">
              {product.description}
            </p>
          </div>

          {/* Highlights — all shown */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>
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

          {/* Specs table — always visible */}
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${accent}20` }}>
            <div
              className="px-4 py-2.5 flex items-center gap-2"
              style={{ background: `${accent}10` }}
            >
              <Zap size={12} style={{ color: accent }} />
              <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: accent }}>
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
