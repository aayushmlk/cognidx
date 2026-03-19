"use client";

import { useState, useEffect } from "react";
import { products, categories } from "@/data/products";
import ProductRow from "./ProductRow";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("fia");
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [totalVisitors, setTotalVisitors] = useState(
    products.reduce((a, p) => a + p.baseVisitors, 0)
  );

  useEffect(() => {
    // Listen for navbar/slideshow category selection
    const catHandler = (e: Event) => {
      setActiveCategory((e as CustomEvent<string>).detail);
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    };
    // Listen for specific product highlight from slideshow
    const prodHandler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      setHighlightId(id);
      setTimeout(() => setHighlightId(null), 2000);
    };
    window.addEventListener("selectCategory", catHandler);
    window.addEventListener("selectProduct", prodHandler);
    return () => {
      window.removeEventListener("selectCategory", catHandler);
      window.removeEventListener("selectProduct", prodHandler);
    };
  }, []);

  useEffect(() => {
    const total = products.reduce((acc, p) => {
      try {
        const stored = localStorage.getItem(`visitors_${p.id}`);
        return acc + (stored ? parseInt(stored, 10) : p.baseVisitors);
      } catch { return acc + p.baseVisitors; }
    }, 0);
    setTotalVisitors(total);
  }, []);

  const filtered = products.filter((p) => p.categoryId === activeCategory);

  return (
    <section id="products" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-mono-custom text-[11px] tracking-[0.15em] text-purple-600 uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-4">
            Biomedical Diagnostic Equipment
          </h2>
          <p className="text-[#4a4a6a] text-lg max-w-2xl mx-auto mb-8">
            Explore our comprehensive range of precision diagnostic instruments from globally
            certified manufacturers.
          </p>

          {/* Total visitor counter */}
          <div className="inline-flex flex-col items-center bg-purple-50 border border-purple-200 rounded-2xl px-10 py-4">
            <span className="font-mono-custom text-3xl font-bold text-purple-700">
              {totalVisitors.toLocaleString()}
            </span>
            <span className="text-xs text-[#6b7280] mt-1 tracking-wide">
              Total product page visitors
            </span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-purple-700 text-white shadow-lg shadow-purple-700/30 scale-105"
                  : "bg-white text-purple-700 border border-purple-200 hover:border-purple-400 hover:bg-purple-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products — vertical stack with left-image right-info layout */}
        <div className="space-y-8">
          {filtered.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              highlight={highlightId === product.id}
            />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#9ca3af]">
              No products in this category yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
