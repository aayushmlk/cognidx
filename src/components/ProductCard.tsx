"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Eye,
  Zap,
  ChevronDown,
  ChevronUp,
  TestTube2,
  FlaskConical,
  MessageCircle,
  ClipboardPlus,
  ZapIcon,
  EyeOff,
  NotebookTabs,
  ReceiptText,
} from "lucide-react";
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
    } catch {}
  }, [product.id, product.baseVisitors]);

  const accent = product.accentColor;
  const bg = product.bgColor;
  const enrich = product.id;

  return (
    <div
      id={`product-${product.id}`}
      className="rounded-3xl p-4 sm:p-6 flex flex-col gap-6"
      style={{
        background: "#f9fafb",
      }}
    >
      {/* ───────────────── IMAGE CARD ───────────────── */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${bg} 0%, ${bg}cc 60%, ${bg}88 100%)`,
          border: `1px solid ${accent}22`,
          boxShadow: `0 10px 40px ${accent}20`,
          padding: "28px",
        }}
      >
        {/* Decorations */}
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-[0.50]"
          style={{ background: accent }}
        />
        <div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-[0.40]"
          style={{ background: accent }}
        />

        {/* Badges */}
        <div className="flex justify-between mb-4 relative z-10">
          <span
            className="text-white text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: accent }}
          >
            {product.brand === "—" ? "Generic" : product.brand}
          </span>

          <span
            className="text-xs font-semibold px-3 py-1 rounded-lg"
            style={{
              background: "#fff",
              color: accent,
              border: `1px solid ${accent}22`,
            }}
          >
            {product.model}
          </span>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center relative z-10">
          {!imgError ? (
            <Image
              src={product.image}
              alt={product.name}
              width={420}
              height={320}
              className="object-contain w-full max-h-[260px] sm:max-h-[300px]"
              style={{
                filter: `drop-shadow(0 20px 50px ${accent}50)`,
              }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-48 opacity-40">
              <FlaskConical size={48} style={{ color: accent }} />
              <span className="text-xs mt-2">Image Coming Soon</span>
            </div>
          )}
        </div>

        {/* Tagline + Views */}
        <div className="mt-4 text-center relative z-10">
          {enrich && (
            <p
              className="text-sm font-semibold mb-2"
              style={{ color: accent }}
            >
              {product.tagline}
            </p>
          )}

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs"
            style={{
              background: "#fff",
              color: accent,
              border: `1px solid ${accent}22`,
            }}
          >
            <Eye size={12} />
            {visitors.toLocaleString()} views
          </div>
        </div>
      </div>

      {/* ───────────────── CONTENT CARD ───────────────── */}
      <div
        className="rounded-3xl p-5 sm:p-7 flex flex-col gap-7"
        style={{
          background: "white",
          border: `1px solid ${accent}1e`,
          boxShadow: `0 10px 40px ${accent}10`,
        }}
      >
        {/* Title */}
        <div>
          <span
            className="text-xs font-bold px-3 py-2 rounded-full text-white"
            style={{ background: accent }}
          >
            {product.category}
          </span>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-3">
            {product.name}
          </h2>

          <p className="text-gray-600 mt-3 text-justify leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>
        </div>

        {/* Highlights */}
        <div>
           <div
  className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full"
  style={{
    background: accent || "#22c55e", // green fill
    color: "#ffffff",
  }}
>
  <Zap size={13} style={{ color: "#fff" }} />
  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
    Key Highlights
  </p>
</div>

          <div className="grid sm:grid-cols-2 gap-3">
  {product.highlights.map((h) => (
    <div key={h} className="flex items-start gap-2 text-sm text-gray-700">
      {/* Thicker bullet */}
      <span
        className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
        style={{ backgroundColor: accent }}
      />
      {/* Highlight text */}
      <span className="leading-snug">{h}</span>
    </div>
  ))}
</div>
        </div>

        {/* Tests Covered */}
        {enrich && product.testsCovered.length > 0 && (
          <div>
            <div
  className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full"
  style={{
    background: accent || "#22c55e", // green fill
    color: "#ffffff",
  }}
>
  <TestTube2 size={13} style={{ color: "#fff" }} />
  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
    Tests Covered
  </p>
</div>

            <div className="space-y-3">
              {(showAllTests
                ? product.testsCovered
                : product.testsCovered.slice(0, 3)
              ).map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold mb-1 text-gray-700">
                    {group.label}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded-md"
                        style={{
                          background: `${accent}10`,
                          color: accent,
                        }}
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
                onClick={() => setShowAllTests((v) => !v)}
                className="mt-3 flex items-center gap-1 text-xs font-semibold underline"
                style={{ color: accent }}
              >
                {showAllTests ? (
                  <>
                    <ChevronUp size={12} /> Show less
                  </>
                ) : (
                  <>
                    <ChevronDown size={12} /> Show more
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Specs */}
        <div>
           <div
  className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full"
  style={{
    background: accent || "#22c55e", // green fill
    color: "#ffffff",
  }}
>
  <ReceiptText size={13} style={{ color: "#fff" }} />
  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
    Technical Specifications
  </p>
</div>

          <div
            className="rounded-xl overflow-hidden border"
            style={{ borderColor: `${accent}22` }}
          >
            {product.specs.map((s, i) => (
              <div
                key={s.key}
                className="flex justify-between px-4 py-3 text-sm"
                style={{
                  background: i % 2 === 0 ? "#fff" : `${accent}40`,
                }}
              >
                <span
                  className="font-semibold"
                  style={{ color: accent }}
                >
                  {s.key}
                </span>

                <span className="text-gray-600 font-semibold text-right">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        {enrich && (
          <div>
            <div
  className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full"
  style={{
    background: accent || "#22c55e", // green fill
    color: "#ffffff",
  }}
>
  <ClipboardPlus size={13} style={{ color: "#fff" }} />
  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
    Used In
  </p> 
</div>
            <div className="flex flex-wrap gap-2">
              {product.applicationScenarios.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1 rounded-lg"
                  style={{
                    background: `${accent}20`,
                    color: accent,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

  

        {/* CTA */}
        <div className="pt-4 border-t" style={{ borderColor: `${accent}20` }}>
          <p className="text-[12px] text-gray-600 mb-2" style={{ color: accent }}>
    Please feel free to contact us for more information or any inquiries — we’re happy to assist you!
  </p>
          <a
            href="https://wa.me/9779819425801?text=I'm%20interested%20in%20learning%20more%20about%20your%20products."
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-sm font-semibold"
            style={{
              background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
            }}
          >
            <MessageCircle size={14} />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}