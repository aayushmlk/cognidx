"use client";

import { useState, useEffect } from "react";
import { products, categories } from "@/data/products";
import ProductRow from "./ProductRow";
import { ArrowLeft, FlaskConical, Search } from "lucide-react";
import Link from "next/link";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [totalVisitors, setTotalVisitors] = useState(
    products.reduce((a, p) => a + p.baseVisitors, 0)
  );

  // Read hash AFTER mount so window is available — fixes the flash
  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.replace("#", "");
      const match = categories.find((cat) => cat.id === hash);
      setActiveCategory(match ? match.id : categories[0].id);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    window.history.replaceState(null, "", `#${catId}`);
  };

  useEffect(() => {
    const total = products.reduce((acc, p) => {
      try {
        const stored = localStorage.getItem(`visitors_${p.id}`);
        return acc + (stored ? parseInt(stored, 10) : p.baseVisitors);
      } catch { return acc + p.baseVisitors; }
    }, 0);
    setTotalVisitors(total);
  }, []);

  const filtered = activeCategory
    ? products.filter((p) => p.categoryId === activeCategory)
    : [];
  const activeCat = categories.find((c) => c.id === activeCategory);

  // Prevent flash before hash is resolved
  if (!activeCategory) return (
    <div className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #fafafa 0%, #f3f0ff 50%, #fafafa 100%)" }}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-violet-300 border-t-violet-600 animate-spin" />
        <p className="text-sm text-[#9ca3af] font-mono-custom tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #fafafa 0%, #f3f0ff 50%, #fafafa 100%)" }}>

      {/* ══════════════════════════════════════
          TOP HERO BANNER — makes it unmistakably a new page
      ══════════════════════════════════════ */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #3b0e82 0%, #5521a8 25%, #7c3aed 55%, #9333ea 78%, #a855f7 100%)",
        }}
      >
        {/* Atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px]"
            style={{
              background: "radial-gradient(ellipse, rgba(216,180,254,0.22) 0%, transparent 68%)",
              filter: "blur(60px)",
            }}
          />
          <div className="absolute -top-10 right-0 w-[380px] h-[280px]"
            style={{
              background: "radial-gradient(circle, rgba(232,121,249,0.15) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[150px]"
            style={{
              background: "radial-gradient(ellipse, rgba(251,191,36,0.08) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ background: "linear-gradient(118deg, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 65%)" }}
          />
          {/* Bottom fade into content */}
          <div className="absolute bottom-0 inset-x-0 h-16"
            style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.08))" }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-14">

          {/* Back nav */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium mb-10 transition-all duration-200 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            {/* Left — title block */}
            <div>
              {/* Eyebrow pill */}
              <div
                className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <FlaskConical size={10} className="text-violet-300" />
                <span className="font-mono-custom text-[10px] tracking-[0.22em] text-white/65 uppercase">
                  Product Catalogue
                </span>
              </div>

              <h1 className="font-playfair text-4xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-4">
                Biomedical{" "}
                <em
                  className="italic not-italic"
                  style={{
                    background: "linear-gradient(135deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 20px rgba(251,191,36,0.35))",
                  }}
                >
                  Diagnostic
                </em>{" "}
                Equipment
              </h1>

              <p className="text-white/55 text-[15px] leading-relaxed max-w-md">
                Browse our full catalogue of CE-certified diagnostic instruments
                from globally renowned manufacturers.
              </p>
            </div>

            {/* Right — stats */}
            <div
              className="flex items-center gap-0 rounded-2xl overflow-hidden shrink-0"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                backdropFilter: "blur(16px)",
              }}
            >
              {[
                { num: totalVisitors.toLocaleString(), label: "Total Views" },
                { num: products.length.toString(), label: "Products" },
                { num: categories.length.toString(), label: "Categories" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="px-7 py-4 text-center"
                  style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.10)" : "none" }}
                >
                  <div
                    className="font-playfair text-2xl font-bold leading-none mb-1"
                    style={{
                      background: "linear-gradient(135deg, #fde68a, #fbbf24)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="text-white/45 text-[10px] font-medium tracking-wide uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          CATEGORY TABS — sticky
      ══════════════════════════════════════ */}
      <div
        className="sticky top-0 z-30 border-b"
        style={{
          background: "rgba(250,248,255,0.92)",
          backdropFilter: "blur(20px)",
          borderColor: "#ede9fe",
          boxShadow: "0 4px 20px rgba(124,58,237,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const catProducts = products.filter((p) => p.categoryId === cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-250"
                  style={isActive ? {
                    background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                    color: "white",
                    boxShadow: "0 4px 16px rgba(124,58,237,0.30)",
                  } : {
                    background: "transparent",
                    color: "#6b7280",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  {cat.label}
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={isActive ? {
                      background: "rgba(255,255,255,0.20)",
                      color: "white",
                    } : {
                      background: "#f3f4f6",
                      color: "#9ca3af",
                    }}
                  >
                    {catProducts.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PRODUCT LIST
      ══════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Active category info bar */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-1 h-8 rounded-full"
              style={{ background: "linear-gradient(180deg, #7c3aed, #a855f7)" }}
            />
            <div>
              <h2 className="font-playfair text-xl font-bold text-[#0f0a1e]">
                {activeCat?.label}
              </h2>
              <p className="text-xs text-[#9ca3af]">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""} available
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs text-[#6b7280]"
            style={{ background: "white", border: "1px solid #f3f0ff" }}
          >
            <Search size={12} className="text-violet-400" />
            <span>Showing all in category</span>
          </div>
        </div>

        {/* Products */}
        <div className="space-y-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="product-item"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <ProductRow
                product={product}
                highlight={highlightId === product.id}
              />
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔬</div>
              <p className="text-lg font-semibold text-[#374151] mb-2">No products yet</p>
              <p className="text-sm text-[#9ca3af]">This category is coming soon.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes productReveal {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .product-item {
          animation: productReveal 0.45s cubic-bezier(0.16,1,0.3,1) both;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
