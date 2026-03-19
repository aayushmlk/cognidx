import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const productLinks = [
  { label: "Fluorescence Immunoassay", href: "#products" },
  { label: "Blood Gas & Electrolyte", href: "#products" },
  { label: "Haematology Analyzers", href: "#products" },
  { label: "Chemiluminescence CLIA", href: "#products" },
  { label: "Urine Analyzers", href: "#products" },
  { label: "Biochemistry Analyzers", href: "#products" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

const brandPartners = ["Anbio", "Seamaty", "Bioelab", "Keylights", "Fapon"];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#05030d] text-white overflow-hidden">

      {/* ═══════════════════════════════════════
          BACKGROUND LAYERS
      ═══════════════════════════════════════ */}

      {/* Deep dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Large violet orb — lower left */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 w-[700px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(109,77,255,0.18) 0%, rgba(109,77,255,0.06) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Smaller rose/violet orb — upper right */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-[450px] h-[350px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, rgba(99,60,220,0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Faint center glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124,92,252,0.04) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* ═══════════════════════════════════════
          TOP GLOW LINE
      ═══════════════════════════════════════ */}
      <div className="relative">
        {/* Main shimmer */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(124,92,252,0.3) 20%, rgba(167,139,250,0.9) 50%, rgba(124,92,252,0.3) 80%, transparent 100%)",
          }}
        />
        {/* Glow spread below the line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px]"
          style={{
            boxShadow: "0 0 30px 6px rgba(139,92,246,0.35)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════ */}
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12">

        {/* ── Brand ─────────────────────── */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Logo */}
          <Link href="/" className="inline-block w-fit">
            <div className="relative h-10 w-40">
              <Image
                src="/cognidx_logo.png"
                alt="Cognidx"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
          </Link>

          {/* Description */}
          <p className="text-sm leading-relaxed text-white/50 max-w-[300px]">
            Nepal&apos;s premier biomedical diagnostic equipment supplier,
            bridging advanced technology with accessible healthcare since&nbsp;2019.
          </p>

          {/* Contact items */}
          <ul className="space-y-2">
            {/* Address */}
            <li>
              <a
                href="https://maps.google.com/?q=Tinkune,Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    background: "rgba(124,92,252,0.12)",
                    border: "1px solid rgba(124,92,252,0.25)",
                  }}
                >
                  <MapPin size={12} className="text-violet-400" />
                </span>
                Tinkune, Kathmandu, Nepal
              </a>
            </li>

            {/* Phone */}
            <li>
              <a
                href="tel:+9779819425801"
                className="group flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(124,92,252,0.12)",
                    border: "1px solid rgba(124,92,252,0.25)",
                  }}
                >
                  <Phone size={12} className="text-violet-400" />
                </span>
                +977 9819425801
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="mailto:info@cognidx.com.np"
                className="group flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(124,92,252,0.12)",
                    border: "1px solid rgba(124,92,252,0.25)",
                  }}
                >
                  <Mail size={12} className="text-violet-400" />
                </span>
                info@cognidx.com.np
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href="https://wa.me/9779819425801"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.25)",
                  }}
                >
                  <MessageCircle size={12} className="text-emerald-400" />
                </span>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Spacer */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* ── Products ──────────────────── */}
        <div className="lg:col-span-3">
          <h4
            className="text-[12px] uppercase tracking-[0.25em] font-bold mb-5"
            style={{
              background: "linear-gradient(90deg, #a78bfa, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Products
          </h4>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-violet-500/40 group-hover:bg-violet-400 group-hover:shadow-[0_0_6px_rgba(167,139,250,0.8)] transition-all duration-200" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Company ───────────────────── */}
        <div className="lg:col-span-3">
          <h4
            className="text-[12px] uppercase tracking-[0.25em] font-bold mb-5"
            style={{
              background: "linear-gradient(90deg, #a78bfa, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Company
          </h4>
          <ul className="space-y-2.5 mb-10">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-violet-500/40 group-hover:bg-violet-400 group-hover:shadow-[0_0_6px_rgba(167,139,250,0.8)] transition-all duration-200" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Partners */}
          <h4
            className="text-[10px] uppercase tracking-[0.25em] font-bold mb-3.5"
            style={{
              background: "linear-gradient(90deg, #a78bfa, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Partners
          </h4>
          <div className="flex flex-wrap gap-2">
            {brandPartners.map((b) => (
              <span
                key={b}
                className="text-xs font-medium px-3 py-1 rounded-full text-violet-300/80 hover:text-violet-200 transition-all duration-200 cursor-default"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,92,252,0.1), rgba(99,60,220,0.06))",
                  border: "1px solid rgba(124,92,252,0.22)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          BOTTOM BAR
      ═══════════════════════════════════════ */}

      {/* Gradient divider */}
      <div
        className="relative h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,92,252,0.2) 30%, rgba(124,92,252,0.35) 50%, rgba(124,92,252,0.2) 70%, transparent 100%)",
        }}
      />

      <div
        className="relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(124,92,252,0.05) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-center items-center gap-2">
          <p className="text-xs text-white/60 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/80 font-medium">
              Cognidx Enterprises Pvt. Ltd.
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
