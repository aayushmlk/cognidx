"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

function getStoredVisitors(id: string, base: number): number {
  if (typeof window === "undefined") return base;
  try {
    const stored = localStorage.getItem(`visitors_${id}`);
    return stored ? parseInt(stored, 10) : base;
  } catch {
    return base;
  }
}

export default function ProductCard({ product }: Props) {
  const [visitors, setVisitors] = useState(product.baseVisitors);
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const stored = getStoredVisitors(product.id, product.baseVisitors);
    const incremented = stored + 1;
    try {
      localStorage.setItem(`visitors_${product.id}`, String(incremented));
    } catch {}
    setVisitors(incremented);
  }, [product.id, product.baseVisitors]);

  return (
    <div className="bg-white border border-purple-100 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-200/60 hover:border-purple-300 flex flex-col group">

      {/* Product Image */}
      <div className="relative bg-gradient-to-br from-slate-50 to-purple-50/40 overflow-hidden border-b border-purple-100">
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={240}
            className="w-full h-52 object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="h-52 flex flex-col items-center justify-center text-purple-300 gap-2">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <rect x="4" y="4" width="48" height="48" rx="8" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3"/>
              <circle cx="28" cy="22" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 44c2-8 8-14 18-14s16 6 18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-xs font-mono-custom tracking-wider">IMAGE COMING SOON</span>
          </div>
        )}

        {/* Brand badge */}
        <span className="absolute top-3 right-3 bg-amber-400 text-[#1a1a2e] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm">
          {product.brand.split(" ")[0]}
        </span>

        {/* Category pill */}
        <span className="absolute bottom-3 left-3 bg-purple-700/85 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wide">
          {product.category}
        </span>
      </div>

      {/* Card Header */}
      <div className="px-5 pt-4 pb-2">
        <p className="font-mono-custom text-[10px] tracking-[0.12em] text-purple-400 uppercase mb-1">
          {product.model}
        </p>
        <h3 className="font-playfair text-[1.1rem] text-[#1a1a2e] font-semibold leading-snug">
          {product.name}
        </h3>
      </div>

      {/* Description */}
      <div className="px-5 pb-3">
        <p className="text-sm text-[#4a4a6a] leading-relaxed line-clamp-3">
          {product.description}
        </p>
      </div>

      {/* Key Specs */}
      <div className="px-5 pb-3 flex-1">
        <div className="space-y-1.5">
          {product.specs.slice(0, expanded ? product.specs.length : 4).map((s) => (
            <div key={s.key} className="flex gap-2 text-xs pb-1.5 border-b border-gray-50 last:border-0">
              <span className="text-purple-700 font-semibold min-w-[95px] shrink-0">{s.key}</span>
              <span className="text-[#6b7280]">{s.value}</span>
            </div>
          ))}
        </div>

        {expanded && product.highlights.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-semibold text-[#1a1a2e] mb-2 uppercase tracking-wide">Key Highlights</p>
            <ul className="space-y-1.5">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-[#4a4a6a]">
                  <span className="text-amber-500 mt-0.5 shrink-0 text-[10px]">◆</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs text-[#9ca3af]">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-dot" />
          <Eye size={11} />
          <span>{visitors.toLocaleString()} views</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-800 font-medium transition-colors"
          >
            {expanded ? (<>Less <ChevronUp size={12} /></>) : (<>Details <ChevronDown size={12} /></>)}
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all hover:shadow-md hover:shadow-purple-700/30"
          >
            <MessageSquare size={11} />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}
