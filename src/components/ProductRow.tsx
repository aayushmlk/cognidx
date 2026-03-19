"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, CheckCircle2, MessageSquare, ChevronDown, ChevronUp } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  highlight?: boolean;
}

export default function ProductRow({ product, highlight }: Props) {
  const [visitors, setVisitors] = useState(product.baseVisitors);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`visitors_${product.id}`);
      const count = stored ? parseInt(stored, 10) : product.baseVisitors;
      const next = count + 1;
      localStorage.setItem(`visitors_${product.id}`, String(next));
      setVisitors(next);
    } catch {}
  }, [product.id, product.baseVisitors]);

  return (
    <div
      id={`product-${product.id}`}
      className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
        highlight ? "ring-2 ring-offset-2" : ""
      }`}
      style={{
        background: product.bgColor,
        borderColor: product.accentColor + "33",
        ["--ring-color" as string]: product.accentColor,
      }}
    >
      <div className="flex flex-col lg:flex-row min-h-[340px]">

        {/* ── LEFT: Product Image ── */}
        <div
          className="lg:w-[42%] relative flex items-center justify-center p-8 overflow-hidden shrink-0"
          style={{ background: product.bgColor }}
        >
          {/* Radial glow behind the image */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, ${product.accentColor}18 0%, transparent 72%)`,
            }}
          />

          <div className="relative z-10 w-full flex items-center justify-center" style={{ maxHeight: 320 }}>
            <Image
              src={product.image}
              alt={product.name}
              width={460}
              height={320}
              className="object-contain w-full transition-transform duration-500 hover:scale-105"
              style={{
                maxHeight: 320,
                filter: `drop-shadow(0 8px 32px ${product.accentColor}44)`,
              }}
            />
          </div>

          {/* Brand badge */}
          <span
            className="absolute top-4 left-4 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider text-white shadow-sm"
            style={{ background: product.accentColor }}
          >
            {product.brand === "—" ? "Generic" : product.brand}
          </span>
        </div>

        {/* ── RIGHT: Product Info ── */}
        <div className="lg:w-[58%] flex flex-col justify-between p-8 lg:p-10 bg-white/70 backdrop-blur-sm">

          {/* Top section */}
          <div>
            {/* Category + model */}
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span
                className="text-[10px] font-mono-custom tracking-[0.15em] uppercase font-semibold"
                style={{ color: product.accentColor }}
              >
                {product.category}
              </span>
              <span
                className="text-[10px] px-2.5 py-0.5 rounded-full font-mono-custom"
                style={{
                  background: product.accentColor + "18",
                  color: product.accentColor,
                  border: `1px solid ${product.accentColor}44`,
                }}
              >
                {product.model}
              </span>
            </div>

            {/* Name */}
            <h3
              className="font-playfair text-2xl lg:text-[1.65rem] font-bold leading-snug mb-3"
              style={{ color: "#1a1a2e" }}
            >
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#4a4a6a] leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Key highlights */}
            <ul className="space-y-2 mb-5">
              {product.highlights.slice(0, expanded ? product.highlights.length : 3).map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 mt-0.5"
                    style={{ color: product.accentColor }}
                  />
                  <span className="text-[#374151]">{h}</span>
                </li>
              ))}
            </ul>

            {/* Specs table */}
            {expanded && (
              <div className="mb-5 rounded-xl overflow-hidden border" style={{ borderColor: product.accentColor + "22" }}>
                <table className="w-full text-xs">
                  <tbody>
                    {product.specs.map((s, i) => (
                      <tr
                        key={s.key}
                        className={i % 2 === 0 ? "bg-white/60" : "bg-white/30"}
                      >
                        <td
                          className="px-4 py-2.5 font-semibold w-[38%]"
                          style={{ color: product.accentColor }}
                        >
                          {s.key}
                        </td>
                        <td className="px-4 py-2.5 text-[#374151]">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Bottom section */}
          <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-gray-200/60">
            {/* Visitor count */}
            <div className="flex items-center gap-1.5 text-xs text-[#9ca3af]">
              <span
                className="w-2 h-2 rounded-full animate-pulse-dot"
                style={{ background: product.accentColor }}
              />
              <Eye size={12} />
              <span>{visitors.toLocaleString()} views</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border transition-all"
                style={{
                  color: product.accentColor,
                  borderColor: product.accentColor + "44",
                  background: product.accentColor + "0d",
                }}
              >
                {expanded ? (<>Less <ChevronUp size={13} /></>) : (<>Full Specs <ChevronDown size={13} /></>)}
              </button>

              <a
                href="#contact"
                className="flex items-center gap-1.5 text-xs font-bold px-5 py-2 rounded-lg text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{
                  background: product.accentColor,
                  boxShadow: `0 4px 15px ${product.accentColor}44`,
                }}
              >
                <MessageSquare size={12} />
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
