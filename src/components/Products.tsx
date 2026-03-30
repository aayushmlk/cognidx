"use client";

import { useState, useEffect, useRef } from "react";
import { products, categories } from "@/data/products";
import ProductRow from "./ProductCard";
import { ArrowLeft, ChevronLeft, ChevronRight, Activity } from "lucide-react";
import Link from "next/link";
import { FaThLarge } from "react-icons/fa";
import { FaBoxOpen, FaEye } from "react-icons/fa6";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  const [totalVisitors] = useState(
    products.reduce((a, p) => a + p.baseVisitors, 0)
  );

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      const match = categories.find((cat) => cat.id === hash);

      if (match) {
        setActiveCategory(match.id);

        // 🔥 NEW: scroll to product section
        setTimeout(() => {
          const el = document.getElementById("product-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        setActiveCategory(categories[0].id);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);

    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const checkScroll = () => {
    const el = tabsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    setTimeout(checkScroll, 50);
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [activeCategory]);

  const scrollTabs = (dir: "left" | "right") => {
    const el = tabsRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    window.history.replaceState(null, "", `#${catId}`);
    const el = tabsRef.current;
    if (el) {
      const btn = el.querySelector(`[data-cat="${catId}"]`) as HTMLElement;
      btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const filtered = activeCategory ? products.filter((p) => p.categoryId === activeCategory) : [];
  const activeCat = categories.find((c) => c.id === activeCategory);

  if (!activeCategory) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#f8f7ff" }}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-violet-300 border-t-violet-600 animate-spin" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #f9f8ff 0%, #f3f0ff 50%, #f9f8ff 100%)" }}>

      {/* ══ HERO  ══ */}
      <div className="relative overflow-hidden" style={{ minHeight: 180 }}>

        {/* Layered background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0f0720 0%, #1a0a3c 35%, #12062e 65%, #0d0525 100%)",
          }}
        />

        {/* Geometric grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(167,139,250,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal accent stripe */}
        <div
          className="absolute -right-32 top-0 w-[500px] h-full opacity-[0.06]"
          style={{
            background: "linear-gradient(135deg, transparent 30%, #a78bfa 50%, transparent 70%)",
            transform: "skewX(-20deg)",
          }}
        />

        {/* Soft glow orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-48 opacity-20"
          style={{
            background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-32 opacity-15"
          style={{
            background: "radial-gradient(ellipse, #a78bfa 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Dot field — subtle */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">

          {/* Top row: back + eyebrow */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/80 hover:text-white transition-all duration-200 group back-link"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <ArrowLeft size={13} className="transition-transform duration-200 group-hover:-translate-x-1" />
              Back
            </Link>

            <div
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 mt-2 rounded-full"
              style={{
                background: "rgba(167,139,250,0.10)",
                border: "1px solid rgba(167,139,250,0.25)",
              }}
            >
              <Activity size={10} className="text-violet-400" />
              <span style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(167,139,250,0.8)", textTransform: "uppercase", fontWeight: 700 }}>
                Product Catalogue
              </span>
            </div>
          </div>

          {/* Main hero content — horizontal layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Title block */}
            <div className="flex-1 flex flex-col justify-center">
              <h1
                className="font-bold text-white leading-[1.1] mb-3"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                Biomedical{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 40%, #7c3aed 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Diagnostic
                </span>
                <br />Equipment
              </h1>

              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                CE-certified diagnostic instruments from globally trusted manufacturers — built for precision, designed for clinicians.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col items-center gap-3 flex-wrap mb-2">
              {[
                { num: totalVisitors.toLocaleString(), label: " Total Views", icon: <FaEye size={14} /> },
                { num: products.length, label: "Products", icon: <FaBoxOpen size={14} /> },
                { num: categories.length, label: "Categories", icon: <FaThLarge size={14} /> },


              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-5 py-3 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid #6b21a8",        // dark purple border
                    backdropFilter: "blur(12px)",
                    minWidth: 150,
                    boxShadow: "0 0 4px #6b21a8, 0 0 8px #6b21a8", // subtle tight glow
                  }}
                >
                  <span
                    className=" font-bold leading-none mb-1"
                    style={{
                      fontSize: "1.6rem",
                      background: "linear-gradient(135deg, #fff 0%, #c4b5fd 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.num}
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    {/* Icon */}
                    <div className="mb-2 text-xl text-purple-300 mt-1">
                      {s.icon}
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade into page bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{ background: "linear-gradient(180deg, transparent, #f3f0ff)" }}
        />
      </div>

      {/* ══ CATEGORY TABS — sticky ══ */}
      <div
        className="sticky top-0 z-30 border-b"
        style={{
          background: "rgba(249,248,255,0.96)",
          backdropFilter: "blur(20px)",
          borderColor: "#ede9fe",
          boxShadow: "0 4px 20px rgba(124,58,237,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="relative flex items-center gap-1">

            {canScrollLeft && (
              <button
                onClick={() => scrollTabs("left")}
                className="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-150 z-10"
                style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed", border: "1px solid #ede9fe" }}
              >
                <ChevronLeft size={14} />
              </button>
            )}

            <div
              ref={tabsRef}
              className="flex items-center gap-1.5 overflow-x-auto flex-1 no-scrollbar"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = products.filter((p) => p.categoryId === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    data-cat={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                    style={isActive ? {
                      background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                      color: "white",
                      boxShadow: "0 4px 14px rgba(124,58,237,0.30)",
                    } : {
                      background: "transparent",
                      color: "#6b7280",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {cat.label}
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                      style={isActive ? { background: "rgba(255,255,255,0.22)", color: "white" } : { background: "#f3f4f6", color: "#9ca3af" }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {canScrollRight && (
              <button
                onClick={() => scrollTabs("right")}
                className="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-150 z-10"
                style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed", border: "1px solid #ede9fe" }}
              >
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ══ PRODUCT LIST ══ */}

      <div id="product-section" className="max-w-5xl mx-auto px-6 py-10">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-[3px] h-7 rounded-full" style={{ background: "linear-gradient(180deg, #7c3aed, #a855f7)" }} />
          <div>
            <h2 className="text-lg font-bold text-[#0f0a1e]">{activeCat?.label}</h2>
            <p className="text-xs font-semibold text-[#9ca3af]">{filtered.length} product{filtered.length !== 1 ? "s" : ""} available</p>
          </div>
        </div>

        <div className="space-y-6">
          {filtered.map((product, i) => (
            <div key={product.id} className="product-item" style={{ animationDelay: `${i * 60}ms` }}>
              <ProductRow product={product} highlight={highlightId === product.id} />
            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        @keyframes productReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .product-item {
          animation: productReveal 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        .back-link:hover {
          background: rgba(255,255,255,0.12) !important;
          border-color: rgba(255,255,255,0.28) !important;
        }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
