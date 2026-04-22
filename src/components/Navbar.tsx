"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, PhoneCall, Heart, ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

type Section = "home" | "about" | "contact" | "";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") { setActiveSection(""); return; }

    const resetHome = () => { if (window.scrollY < 80) setActiveSection("home"); };
    window.addEventListener("scroll", resetHome, { passive: true });

    const el = document.getElementById("about");
    if (!el) return () => window.removeEventListener("scroll", resetHome);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection("about");
        else if (window.scrollY < 80) setActiveSection("home");
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    obs.observe(el);

    return () => {
      window.removeEventListener("scroll", resetHome);
      obs.disconnect();
    };
  }, [pathname]);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isProductsPage = pathname.startsWith("/products");
  const homeActive = pathname === "/" && activeSection === "home";
  const aboutActive = pathname === "/" && activeSection === "about";
  const contactActive = pathname === "/contacts";

  const handleCatClick = (catId: string) => {
    window.location.href = `/products#${catId}`;
    setOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "white",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(124,58,237,0.12)" : "1px solid #f3f0ff",
          boxShadow: scrolled ? "0 4px 32px rgba(124,58,237,0.08)" : "none",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">

          {/* Logo */}
          {/* <Link href="/" className="flex items-center shrink-0 group">
            <div className="relative h-12 w-64 flex-shrink-0 transition-opacity duration-200 group-hover:opacity-80">
              <Image src="/cognidx_logo.png" alt="Cognidx" width={195} height={40} className="object-contain object-left" priority />
            </div>
          </Link> */}

          {/* ── Desktop center nav ── */}
          <div className="hidden lg:flex items-center">
            <NavItem href="/" label="Home" active={homeActive} />
            <NavItem href="/#about" label="About" active={aboutActive} />


            {/* Products — CSS group-hover dropdown */}
            <div className="group relative mx-1">
              {/* Trigger button */}
              <button
                className="relative px-5 py-2.5 rounded-xl text-[15px] font-semibold flex items-center gap-1.5 transition-all duration-200 outline-none"
                style={{ color: isProductsPage ? "#7c3aed" : "#374151" }}
              >
                <span className="group-hover:text-[#7c3aed] transition-colors duration-200">Products</span>
                <ChevronDown
                  size={13} strokeWidth={3}
                  className="transition-transform duration-300 group-hover:rotate-180 mt-0.5"
                  style={{ color: isProductsPage ? "#a855f7" : "#9ca3af" }}
                />
                {/* Hover bg pill */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(124,58,237,0.055)" }} />
                {/* Active dot */}
                {isProductsPage && <ActiveDot />}
              </button>

              {/* Active underline for products page */}
              {isProductsPage && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2.5px] w-[60%] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #7c3aed, #c026d3)",
                    boxShadow: "0 0 10px rgba(124,58,237,0.5)",
                  }} />
              )}

              {/* Dropdown panel — shown via CSS group-hover, NOT JS */}
              <div className="absolute left-0 top-full pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                style={{ minWidth: 390 }}>
                {/* Bridge — fills the gap so mouse can move to panel */}
                <div className="absolute -top-2 left-0 right-0 h-2" />

                <div className="rounded-2xl py-3 px-2"
                  style={{
                    background: "white",
                    border: "1px solid rgba(124,58,237,0.12)",
                    boxShadow: "0 20px 60px rgba(124,58,237,0.16), 0 4px 16px rgba(0,0,0,0.06)",
                  }}>
                  <div className="px-4 pb-2.5 mb-1" style={{ borderBottom: "1px solid #f3f0ff" }}>
                    <p className=" text-[10px] tracking-[0.22em] text-violet-400 uppercase">
                      Browse by category
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-0.5">
                    {categories.map((cat) => (
                      <button key={cat.id} onClick={() => handleCatClick(cat.id)}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-[13px] font-medium text-[#374151] flex items-center gap-2.5 transition-all duration-150 hover:text-[#7c3aed]"
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f3ff"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgba(124,58,237,0.35)" }} />
                        {cat.label}
                      </button>
                    ))}
                  </div>
                  <div className="px-2 pt-2.5 mt-1" style={{ borderTop: "1px solid #f3f0ff" }}>
                    <Link href="/products"
                      className="group/btn flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
                      View All Products
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavItem href="/contacts" label="Contacts" active={contactActive} />
          </div>

          {/* ── Desktop right ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contacts"
              className="vibrate-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", boxShadow: "0 4px 16px rgba(124,58,237,0.30)" }}>
              <PhoneCall size={14} className="icon-vibrate" />
              Contact
            </Link>
            <div className="w-px h-5 bg-violet-100" />
            <Link href="/#donate"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #10b981, #059669)", boxShadow: "0 4px 16px rgba(16,185,129,0.25)" }}>
              <Heart size={13} className="fill-white stroke-white group-hover:fill-red-300 group-hover:stroke-red-300 transition-all duration-300" />
              Donate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-250"
            style={{
              background: open ? "#f3f0ff" : "transparent",
              border: open ? "1px solid #ddd6fe" : "1px solid transparent",
              color: "#7c3aed",
            }}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="relative w-5 h-5">
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-250
                ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-45 scale-75"}`}>
                <X size={19} />
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-250
                ${open ? "opacity-0 -rotate-45 scale-75" : "opacity-100 rotate-0 scale-100"}`}>
                <Menu size={19} />
              </span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <div
        className="lg:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          background: "rgba(90,40,180,0.15)",
          backdropFilter: open ? "blur(6px)" : "blur(0px)",
        }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-[340px] flex flex-col"
        style={{
          transform: open ? "translateX(0)" : "translateX(105%)",
          transition: "transform 0.38s cubic-bezier(0.32,0.72,0,1)",
          background: "linear-gradient(175deg, #faf8ff 0%, #f3f0ff 55%, #fdf4ff 100%)",
          boxShadow: open ? "-16px 0 60px rgba(124,58,237,0.16)" : "none",
          borderLeft: "1px solid rgba(124,58,237,0.10)",
        }}
      >
        {/* Atmosphere blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%)", filter: "blur(30px)" }} />
          <div className="absolute bottom-24 -left-10 w-48 h-48 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(232,121,249,0.12) 0%, transparent 70%)", filter: "blur(28px)" }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        </div>

        {/* Header */}
        <div className="relative flex items-center justify-between px-5 pt-6 pb-5"
          style={{ borderBottom: "1px solid rgba(124,58,237,0.10)" }}>
          <div className="relative h-10 w-40">
            <Image src="/cognidx_logo.png" alt="Cognidx" fill className="object-contain object-left" />
          </div>
          <button onClick={() => setOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200"
            style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed", border: "1px solid rgba(124,58,237,0.15)" }}>
            <X size={16} />
          </button>
        </div>

        {/* Nav items */}
        <div className="relative flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
          <MobileNavItem href="/" label="Home" active={pathname === "/" && activeSection === "home"} onClick={() => setOpen(false)} />
          <MobileNavItem href="/#about" label="About" active={pathname === "/" && activeSection === "about"} onClick={() => setOpen(false)} />

          {/* Products accordion */}
          <div className="rounded-2xl overflow-hidden transition-all duration-200"
            style={{
              border: isProductsPage ? "1px solid rgba(124,58,237,0.20)" : "1px solid rgba(0,0,0,0.05)",
              background: isProductsPage ? "rgba(124,58,237,0.05)" : "rgba(0,0,0,0.01)",
            }}>
            <button
              onClick={() => setMobileProductsOpen((v) => !v)}
              className="flex items-center justify-between w-full px-4 py-3.5 text-[15px] font-semibold transition-all duration-200"
              style={{ color: isProductsPage ? "#7c3aed" : "#374151" }}
            >
              <span>Products</span>
              <div className="flex items-center gap-2">
                {isProductsPage && (
                  <span className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: "#a855f7", boxShadow: "0 0 8px rgba(168,85,247,0.6)" }} />
                )}
                <div className="w-6 h-6 flex items-center justify-center rounded-lg transition-all duration-300"
                  style={{
                    background: mobileProductsOpen ? "rgba(124,58,237,0.12)" : "rgba(0,0,0,0.05)",
                    transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}>
                  <ChevronDown size={13} strokeWidth={2.5} style={{ color: isProductsPage ? "#7c3aed" : "#6b7280" }} />
                </div>
              </div>
            </button>

            <div className="overflow-hidden transition-all duration-350"
              style={{ maxHeight: mobileProductsOpen ? "600px" : "0px", opacity: mobileProductsOpen ? 1 : 0 }}>
              <div className="px-3 pb-3 space-y-0.5"
                style={{ background: "rgba(124,58,237,0.04)", borderTop: "1px solid rgba(124,58,237,0.08)" }}>
                <div className="pt-3 pb-1.5 px-2">
                  <p className=" text-[9px] tracking-[0.25em] text-violet-400 uppercase">Select category</p>
                </div>
                {categories.map((cat) => (
                  <button key={cat.id} onClick={() => handleCatClick(cat.id)}
                    className="flex items-center gap-2.5 w-full text-left px-4 py-2.5 rounded-xl text-[13px] font-medium text-[#6b7280] transition-all duration-150"
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.08)"; e.currentTarget.style.color = "#7c3aed"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6b7280"; }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgba(124,58,237,0.35)" }} />
                    {cat.label}
                  </button>
                ))}
                <div className="pt-2 pb-1 px-1">
                  <Link href="/products" onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", boxShadow: "0 4px 16px rgba(124,58,237,0.25)" }}>
                    View All Products <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <MobileNavItem href="/contacts" label="Contacts" active={contactActive} onClick={() => setOpen(false)} />
        </div>

        {/* Footer */}
        <div className="relative px-4 pb-8 pt-4 space-y-2.5"
          style={{ borderTop: "1px solid rgba(124,58,237,0.10)" }}>
          <Link href="/contacts" onClick={() => setOpen(false)}
            className="vibrate-hover flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-[15px] font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", boxShadow: "0 6px 24px rgba(124,58,237,0.28)" }}>
            <PhoneCall size={15} className="icon-vibrate" />
            Contact Us
          </Link>
          <Link href="/#donate" onClick={() => setOpen(false)}
            className="group flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-[15px] font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #10b981, #059669)", boxShadow: "0 6px 20px rgba(16,185,129,0.22)" }}>
            <Heart size={14} className="fill-white stroke-white group-hover:fill-red-300 group-hover:stroke-red-300 transition-all duration-300" />
            Donate Now
          </Link>
          <p className="text-center text-[11px] text-[#9ca3af] pt-1  tracking-wide">
            Cognidx Enterprises · Est. 2080 BS
          </p>
        </div>
      </div>
    </>
  );
}

function NavItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href}
      className="relative mx-1 px-5 py-2.5 rounded-xl text-[15px] font-semibold group transition-all duration-200 inline-flex items-center"
      style={{ color: active ? "#7c3aed" : "#374151" }}
    >
      <span className="relative z-10 group-hover:text-[#7c3aed] transition-colors duration-200">{label}</span>
      <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: "rgba(124,58,237,0.055)" }} />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-400"
        style={{
          width: active ? "60%" : "0%",
          background: "linear-gradient(90deg, #7c3aed, #c026d3)",
          boxShadow: active ? "0 0 10px rgba(124,58,237,0.55)" : "none",
          opacity: active ? 1 : 0,
        }} />
      {active && <ActiveDot />}
    </Link>
  );
}

function ActiveDot() {
  return (
    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full animate-pulse"
      style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)", boxShadow: "0 0 6px rgba(168,85,247,0.7)" }} />
  );
}

function MobileNavItem({ href, label, active, onClick }: { href: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick}
      className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-semibold transition-all duration-200"
      style={{
        color: active ? "#7c3aed" : "#374151",
        background: active ? "rgba(124,58,237,0.08)" : "transparent",
        border: active ? "1px solid rgba(124,58,237,0.18)" : "1px solid rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.05)"; }}
      onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
    >
      {label}
      {active && (
        <span className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: "#a855f7", boxShadow: "0 0 8px rgba(168,85,247,0.6)" }} />
      )}
    </Link>
  );
}
