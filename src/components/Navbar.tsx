"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/products";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  {
    label: "Products",
    href: "#products",
    dropdown: categories.map((c) => ({
      label: c.label,
      href: `#products`,
      catId: c.id,
    })),
  },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCatClick = (catId: string) => {
    window.dispatchEvent(new CustomEvent("selectCategory", { detail: catId }));
    setDropOpen(false);
    setOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white shadow-lg shadow-purple-100/60 border-b border-gray-100"
        : "bg-gray-50 border-b border-gray-200"
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-24">

        {/* ── Logo only ── */}
        <Link href="/" className="shrink-0 flex items-center">
          <div className="relative h-16 w-64">
            <Image
              src="/cognidx_logo.png"
              alt="Cognidx Enterprises Pvt. Ltd."
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative">
                <button
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                  onClick={() => setDropOpen((v) => !v)}
                  className="flex items-center gap-1 text-purple-800 hover:text-purple-600 px-3 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-purple-50"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${dropOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {dropOpen && (
                  <div
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                    className="absolute top-full left-0 mt-1 bg-[#1e0f44] border border-purple-800/40 rounded-xl shadow-2xl py-2 min-w-[240px] z-50"
                  >
                    {item.dropdown.map((sub) => (
                      <button
                        key={sub.catId}
                        onClick={() => handleCatClick(sub.catId)}
                        className="w-full text-left px-4 py-2.5 text-sm text-purple-300 hover:text-purple hover:bg-purple-800/30 transition-colors"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-purple-800 hover:text-purple-600 px-3 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-purple-50 relative nav-link-hover"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="#donate"
            className="ml-3 bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-300"
          >
            Donate
          </Link>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="lg:hidden text-purple-700 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden bg-[#1e0f44] border-t border-gray-100 px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block text-white/80 hover:text-white py-2 text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pl-4 space-y-1">
                  {item.dropdown.map((sub) => (
                    <button
                      key={sub.catId}
                      onClick={() => handleCatClick(sub.catId)}
                      className="block w-full text-left text-white/60 hover:text-white text-xs py-1.5"
                    >
                      — {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}