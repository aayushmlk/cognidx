"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, Zap, ChevronDown, ChevronUp, TestTube2, FlaskConical, MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  highlight?: boolean;
}



export default function ProductRow({ product, highlight }: Props) {
  const [visitors, setVisitors] = useState(product.baseVisitors);
  const [showAllTests, setShowAllTests] = useState(false);
  const [imgError, setImgError] = useState(false);

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
  const enrich = product.id;

  return (
    <div
      id={`product-${product.id}`}
      className="group relative rounded-3xl overflow-hidden transition-all duration-500"
      style={{
        background: "white",
        border: `1px solid ${accent}1e`,
        boxShadow: highlight
          ? `0 0 0 2px ${accent}, 0 20px 60px ${accent}28`
          : `0 2px 20px ${accent}0e`,
      }}
    >
      {/* Top accent stripe */}
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}44, transparent)` }} />

      <div className="flex flex-col lg:flex-row">

        {/* ── LEFT: Image Panel ── */}
        <div
          className="lg:w-[38%] relative flex flex-col items-center justify-between shrink-0 overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${bg} 0%, ${bg}cc 60%, ${bg}88 100%)`,
            minHeight: 360,
            padding: "40px 36px 28px",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-[0.16] transition-all duration-700 group-hover:opacity-[0.26] group-hover:scale-110" style={{ background: accent }} />
          <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full opacity-[0.09]" style={{ background: accent }} />
          <div className="absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-50" style={{ background: `radial-gradient(ellipse 65% 55% at 55% 50%, ${accent}20 0%, transparent 70%)` }} />

          {/* Top badges */}
          <div className="w-full flex items-start justify-between z-10 relative">
            <div className="text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg" style={{ background: `linear-gradient(135deg, ${accent}, ${accent}bb)`, boxShadow: `0 4px 14px ${accent}48` }}>
              {product.brand === "—" ? "Generic" : product.brand.split(" ")[0]}
            </div>
            <div className="text-[10px] font-mono font-bold px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.80)", color: accent, border: `1px solid ${accent}22` }}>
              {product.model}
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10 w-full flex items-center justify-center flex-1 py-4">
            {!imgError ? (
              <Image
                src={product.image}
                alt={product.name}
                width={420}
                height={320}
                className="object-contain w-full transition-transform duration-700 group-hover:scale-[1.05]"
                style={{ maxHeight: 260, filter: `drop-shadow(0 16px 48px ${accent}58)` }}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-48 opacity-30">
                <FlaskConical size={48} style={{ color: accent }} />
                <span className="text-xs mt-2 font-semibold uppercase tracking-wider" style={{ color: accent }}>Image Coming Soon</span>
              </div>
            )}
          </div>

          {/* Bottom: views + tagline */}
          <div className="w-full z-10 relative">
            {enrich && (
              <p className="text-center text-[13px] font-semibold mb-3 leading-snug" style={{ color: `${accent}cc` }}>
                {product.tagline}
              </p>
            )}
            <div className="flex items-center justify-center gap-1.5 text-[13px] font-semibold px-3 py-1.5 rounded-full mx-auto w-fit" style={{ background: "rgba(255,255,255,0.85)", color: accent, border: `1px solid ${accent}25` }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
              <Eye size={10} />
              {visitors.toLocaleString()} views
            </div>
          </div>
        </div>

        {/* ── RIGHT: Info Panel ── */}
        <div className="lg:w-[62%] flex flex-col p-7 lg:p-9 gap-6">

          {/* Category + Name + Description */}
          <div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full" style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}28` }}>
                {product.category}
              </span>
            </div>
            <h3 className="font-playfair text-xl lg:text-2xl font-bold leading-snug mb-2.5 text-[#111827]">
              {product.name}
            </h3>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* ── Tests Covered ── */}
          {enrich && product.testsCovered.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TestTube2 size={13} style={{ color: accent }} />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>Tests Covered</p>
              </div>
              <div className="space-y-2.5">
                {(showAllTests ? product.testsCovered : product.testsCovered.slice(0, 3)).map((group) => (
                  <div key={group.label}>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: `${accent}99` }}>{group.label}</p>
                    <div className="flex flex-wrap gap-1">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md"
                          style={{ background: `${accent}0d`, color: accent, border: `1px solid ${accent}1e` }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {product.testsCovered.length > 3 && (
                <button
                  onClick={() => setShowAllTests(v => !v)}
                  className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold transition-colors"
                  style={{ color: accent }}
                >
                  {showAllTests ? <><ChevronUp size={12} /> Show less</> : <><ChevronDown size={12} /> Show {product.testsCovered.length - 3} more groups</>}
                </button>
              )}
            </div>
          )}

          {/* ── Key Highlights ── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap size={13} style={{ color: accent }} />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>Key Highlights</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(product.highlights).map((h) => (
                <div key={h} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${accent}12`, border: `1.5px solid ${accent}28` }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                  </span>
                  <span className="text-[0.78rem] text-[#374151] leading-snug font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Specs Table ── */}
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${accent}18` }}>
            <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: `${accent}0c` }}>
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: accent }}>Technical Specifications</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {product.specs.map((s, i) => (
                <div
                  key={s.key}
                  className="flex gap-3 px-4 py-2.5 border-b text-xs"
                  style={{
                    background: i % 2 === 0 ? "white" : `${accent}04`,
                    borderColor: `${accent}10`,
                  }}
                >
                  <span className="font-semibold shrink-0 min-w-[90px]" style={{ color: accent }}>{s.key}</span>
                  <span className="text-[#4b5563]">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Application scenarios + CTA ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1" style={{ borderTop: `1px solid ${accent}12` }}>
            {enrich && (
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest mb-1.5" style={{ color: `${accent}88` }}>Used In</p>
                <div className="flex flex-wrap gap-1">
                  {product.applicationScenarios.map((s) => (
                    <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-lg" style={{ background: `${accent}0e`, color: accent, border: `1px solid ${accent}1e` }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <a
              href="https://wa.me/9779819425801?text=I'm%20interested%20in%20learning%20more%20about%20your%20products."
              className="inline-flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-xl text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-90 shrink-0"
              style={{
                background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
                boxShadow: `0 4px 18px ${accent}38`,
              }}
            >
              <MessageCircle size={13} />
              WhatsApp to Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
