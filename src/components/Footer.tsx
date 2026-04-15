"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";
import { useRouter } from "next/navigation";
import { useState } from "react";

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Products", href: "/products" },
  { label: "Donate", href: "/#donate" },
  { label: "Contact", href: "/#contact" },
];


const brandPartners = [
  {
    name: "Anbio",
    full: "Anbio Biotechnology",
    origin: "China · Shenzhen",
    products: ["Rapid test kits", "FIA analyzers", "PCR reagents"],
    desc: "Point-of-care diagnostics for infectious disease & immunology.",
  },
  {
    name: "Seamaty",
    full: "Seamaty Medical",
    origin: "China · Chengdu",
    products: ["Biochemistry analyzers", "Electrolyte analyzers"],
    desc: "Compact, fully-automated chemistry analyzers for routine lab work.",
  },
  {
    name: "Bioelab",
    full: "Bioelab",
    origin: "China",
    products: ["Haematology analyzers", "Reagents"],
    desc: "Automated blood cell counting and CBC analysis instruments.",
  },
  {
    name: "DiyaLab",
    full: "DiyaLab",
    origin: "China",
    products: ["FIA analyzers", "Immunoassay strips"],
    desc: "Fluorescence immunoassay systems for rapid quantitative testing.",
  },
  {
    name: "Fapon",
    full: "Fapon Biotech",
    origin: "China · Shenzhen",
    products: ["Chemiluminescence analyzers", "Immunoassay reagents"],
    desc: "High-sensitivity CLIA platforms for hormones, tumour markers & more.",
  },
  {
    name: "Rayto",
    full: "Rayto Life Sciences",
    origin: "China · Shenzhen",
    products: ["ELISA readers", "Urine analyzers", "Microplate washers"],
    desc: "Full-range lab instruments covering urinalysis and immunology workflows.",
  },
];

const phoneNumbers = [
  { label: "+977 9819425801", href: "tel:+9779819425801" },
  { label: "+977 9840259379", href: "tel:+9779840259379" },
  { label: "+977 9801213666", href: "tel:+9779801213666" },
];

const contactItems = [
  {
    icon: MapPin,
    label: "Tinkune, Kathmandu, Nepal",
    href: "https://maps.google.com/?q=Tinkune,Kathmandu",
    external: true,
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.18)",
  },
  {
    icon: Mail,
    label: "info@cognidx.com.np",
    href: "mailto:info@cognidx.com.np",
    external: false,
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.18)",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/9779819425801",
    external: true,
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.2)",
  },
];

export default function Footer() {
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    const timeout = setTimeout(scrollToHash, 300); // ⬅️ increased delay

    return () => clearTimeout(timeout);
  }, []);

  const handleCatClick = (catId: string) => {
    if (window.location.pathname === "/products") {
      window.location.hash = catId;

      const el = document.getElementById("product-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });

    } else {
      router.push(`/products#${catId}`);
    }
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ede9fe 0%, #e9d5ff 40%, #ebe9fc 100%)",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: 3,
          width: "100%",
          background: "linear-gradient(90deg, transparent, #7c3aed66, #7c3aed, #7c3aed66, transparent)",
        }}
      />

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -bottom-24 -left-24 w-[500px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(109,40,217,0.25) 0%, transparent 68%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute -top-16 -right-16 w-[380px] h-[320px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(192,132,252,0.18) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px]"
          style={{
            background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-5 flex flex-col gap-7">
            <Link href="/" className="inline-block w-fit group">
              <div className="relative h-10 w-64 transition-opacity duration-200 group-hover:opacity-80">
                <Image
                  src="/cognidx_logo.png"
                  alt="Cognidx"
                  width={195}
                  height={40}
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-[15px] leading-[1.85] text-[#3E424A] max-w-[280px] text-middle">
              Nepal&apos;s biomedical diagnostic equipment supplier,
              bridging advanced technology with accessible healthcare since 2080 BS.
            </p>

            <ul className="space-y-2.5">
              <li>
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5"
                    style={{
                      background: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(124,58,237,0.18)",
                    }}
                  >
                    <Phone size={12} style={{ color: "#7c3aed" }} />
                  </span>
                  <div className="flex flex-col gap-1">
                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="text-[15px] text-[#3E424A] hover:text-[#0f0a1e] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 text-[15px] text-[#3E424A] hover:text-[#0f0a1e] transition-colors duration-200"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-110"
                        style={{
                          background: item.bg,
                          border: `1px solid ${item.border}`,
                        }}
                      >
                        <Icon size={12} style={{ color: item.color }} />
                      </span>
                      {item.label}
                      {item.external && (
                        <ArrowUpRight
                          size={11}
                          className="opacity-0 group-hover:opacity-50 transition-opacity duration-200 ml-auto"
                          style={{ color: item.color }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Products col */}
          <div className="lg:col-span-3">
            <h4
              className="text-[13px] uppercase tracking-[0.25em] font-bold mb-5"
              style={{
                background: "linear-gradient(90deg, #9333ea, #c026d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "Raleway, system-ui, sans-serif"
              }}
            >
              Products
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCatClick(cat.id)}
                    className="group flex items-center gap-2.5 text-[15px] text-[#3E424A] hover:text-[#0f0a1e] transition-all duration-200 text-left"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full transition-all duration-300 group-hover:scale-150"
                      style={{ background: "rgba(124,58,237,0.35)" }}
                    />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {cat.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div className="lg:col-span-3">
            <h4
              className="text-[13px] uppercase tracking-[0.25em] font-bold mb-5"
              style={{
                background: "linear-gradient(90deg, #9333ea, #c026d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "Raleway, system-ui, sans-serif"
              }}
            >
              Company
            </h4>
            <ul className="space-y-2.5 mb-10">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2.5 text-[15px] text-[#3E424A] hover:text-[#0f0a1e] transition-all duration-200"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full transition-all duration-300 group-hover:scale-150"
                      style={{ background: "rgba(124,58,237,0.35)" }}
                    />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4
              className="text-[13px] uppercase tracking-[0.25em] font-bold mb-4"
              style={{
                background: "linear-gradient(90deg, #9333ea, #c026d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "Raleway, system-ui, sans-serif"
              }}
            >
              Brand Partners
            </h4>
            {/* Pills with hover tooltips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>

                {brandPartners.map((b) => (

                  <div key={b.name} className="brand-pill-wrapper">
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 13, fontWeight: 600,
                        padding: "6px 16px", borderRadius: 100,
                        background: activeBrand === b.name ? "#ddd6fe" : "#ede9fe",
                        border: "1px solid rgba(124,58,237,0.18)",
                        color: "#5b21b6",
                        transition: "background 0.2s, transform 0.2s",
                        transform: activeBrand === b.name ? "translateY(-1px)" : "translateY(0)",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                      onMouseEnter={() => setActiveBrand(b.name)}
                      onMouseLeave={() => setActiveBrand(null)}
                    >
                      <a href="/#brandclients" rel="noopener noreferrer">
                        {b.name}
                      </a>
                    </span>


                    {/* Tooltip */}
                    <div className="brand-tooltip">
                      {/* Brand name + origin */}

                      <div style={{ marginBottom: 8 }}>
                        <div style={{
                          fontSize: 13, fontWeight: 700,
                          color: "#140830", marginBottom: 3,
                        }}>
                          {b.full}
                        </div>
                        <div style={{
                          display: "inline-flex", alignItems: "center", gap: 4,
                          fontSize: 11, fontWeight: 600,
                          color: "#7c3aed", letterSpacing: "0.02em",
                        }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
                            <circle cx="5" cy="4" r="2.5" stroke="#7c3aed" strokeWidth="1.2" fill="none" />
                            <path d="M5 6.5 C5 6.5 2 8.5 2 9" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M5 6.5 C5 6.5 8 8.5 8 9" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round" />
                          </svg>
                          {b.origin}
                        </div>
                      </div>

                      {/* Divider */}
                      <div style={{
                        borderTop: "1px solid rgba(124,58,237,0.12)",
                        margin: "8px 0",
                      }} />

                      {/* Product tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                        {b.products.map((p) => (
                          <span key={p} style={{
                            fontSize: 11, fontWeight: 500,
                            padding: "2px 8px", borderRadius: 6,
                            background: "#ede9fe",
                            color: "#5b21b6",
                            border: "1px solid rgba(124,58,237,0.15)",
                          }}>
                            {p}
                          </span>
                        ))}
                      </div>

                      {/* One-line description */}
                      <p style={{
                        fontSize: 11.5, color: "#4b3f6b",
                        lineHeight: 1.6, margin: 0,
                      }}>
                        {b.desc}
                      </p>
                    </div>
                  </div>

                ))}
              </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.4) 30%, rgba(232,121,249,0.3) 50%, rgba(167,139,250,0.4) 70%, transparent 100%)",
        }}
      />

      {/* Bottom bar */}
      <div className="relative max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-3">
        <p className="text-xs text-[#3E424A] text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#2D3036] font-bold">Cognidx Enterprises Pvt. Ltd.</span>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
