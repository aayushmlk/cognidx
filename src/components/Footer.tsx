"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { categories } from "@/data/products";

const companyLinks = [
  { label: "About Us", href: "./#about" },
  { label: "Our Products", href: "#products" },
  { label: "Donate", href: "./#donate" },
  { label: "Contact", href: "./#contact" },
];

const brandPartners = ["Anbio", "Seamaty", "Bioelab", "DiyaLab", "Fapon", "Rayto"];

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

const h4Style: React.CSSProperties = {
  fontFamily: "Raleway, system-ui, sans-serif",
  background: "linear-gradient(90deg, #9333ea, #c026d3)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function Footer() {
  const router = useRouter();

  const handleCatClick = (catId: string) => {
    // Store the target so the products page can scroll to it after mount
    sessionStorage.setItem("scrollTo", catId);
    router.push(`/products#${catId}`);
  };

  return (
    <footer
      id="contactsss"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f3eeff 0%, #ffffff 50%, #ede9fe 100%)",
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
            background: "radial-gradient(ellipse, rgba(167,139,250,0.22) 0%, transparent 68%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute -top-16 -right-16 w-[380px] h-[320px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(232,121,249,0.12) 0%, transparent 65%)",
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
              <div className="relative h-10 w-44 transition-opacity duration-200 group-hover:opacity-80">
                <Image
                  src="/cognidx_logo.png"
                  alt="Cognidx"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm leading-[1.85] text-[#6b7280] max-w-[280px]">
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
                        className="text-sm text-[#6b7280] hover:text-[#0f0a1e] transition-colors duration-200"
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
                      className="group flex items-center gap-3 text-sm text-[#6b7280] hover:text-[#0f0a1e] transition-colors duration-200"
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
              className="text-[10px] uppercase tracking-[0.25em] font-bold mb-5"
              style={h4Style}
            >
              Products
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCatClick(cat.id)}
                    className="group flex items-center gap-2.5 text-sm text-[#6b7280] hover:text-[#0f0a1e] transition-all duration-200 text-left"
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
              className="text-[10px] uppercase tracking-[0.25em] font-bold mb-5"
              style={h4Style}
            >
              Company
            </h4>
            <ul className="space-y-2.5 mb-10">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2.5 text-sm text-[#6b7280] hover:text-[#0f0a1e] transition-all duration-200"
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
              className="text-[10px] uppercase tracking-[0.25em] font-bold mb-4"
              style={h4Style}
            >
              Partners
            </h4>
            <div className="flex flex-wrap gap-2">
              {brandPartners.map((b) => (
                <span
                  key={b}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: "white",
                    color: "#7c3aed",
                    border: "1px solid #e9d5ff",
                    boxShadow: "0 1px 4px rgba(124,58,237,0.08)",
                  }}
                >
                  {b}
                </span>
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
        <p className="text-xs text-[#9ca3af] text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#374151] font-semibold">Cognidx Enterprises Pvt. Ltd.</span>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
