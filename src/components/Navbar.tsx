"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, PhoneCall, Heart, Info, Box, Briefcase, House, ShoppingCart } from "lucide-react";
import { categories } from "@/data/products";

const navItems = [
  { label: "Home", href: "/", icon: <House size={16} /> },
  { label: "About", href: "#about", icon: <Info size={16} /> },
  {
    label: "Products",
    href: "#products",
    icon: <ShoppingCart size={16} />,
    dropdown: categories.map((c) => ({
      label: c.label,
      href: `#products`,
      catId: c.id,
    })),
  },
  { label: "Services", href: "#services", icon: <Briefcase size={16} /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("Home");
  const [donateClicked, setDonateClicked] = useState(false);


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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-50 shadow-md border-b"
          : "bg-gray-50 border-b border-gray-50"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-24">
        
        {/* ── Logo LEFT ── */}
        <Link href="/" className="flex items-center shrink-0 ">
          <div className="relative h-14 w-52">
            <Image
              src="/cognidx_logo.png"
              alt="Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* ── CENTER NAV LINKS ── */}
<div className="hidden lg:flex items-center gap-6">
  {navItems.map((item) =>
    item.dropdown ? (
      <div key={item.label} className="relative group">
  {/* Products button */}
  <button
    className={`relative text-lg font-semibold tracking-wide flex items-center gap-1 text-gray-800 transition-colors duration-300 hover:text-purple-700 ${
      active === item.label ? "text-purple-700" : ""
    }`}
    onClick={() => setDropOpen((v) => !v)}
  >
    {item.label}
    <ChevronDown
      size={14}
      strokeWidth={4}
      className={`ml-1 font-semibold transition-transform duration-300 ${
        dropOpen ? "rotate-180" : "rotate-0"
      } group-hover:rotate-180`}
    />
    {/* Underline */}
    <span
      className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
        active === item.label || dropOpen ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </button>

  {/* Dropdown / Mega Menu */}
  <div
    className={`absolute left-0 top-full mt-2 w-max min-w-[320px] bg-white rounded-xl shadow-lg py-4 px-6 grid grid-cols-2 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}
    onMouseEnter={() => setDropOpen(true)}
    onMouseLeave={() => setDropOpen(false)}
  >
    {item.dropdown.map((sub) => (
      <button
        key={sub.catId}
        onClick={() => {
          handleCatClick(sub.catId);
          setActive(item.label);
        }}
        className="w-full text-left px-4 py-3 rounded-md text-gray-700 font-medium text-base transition-colors duration-200 hover:bg-purple-50 hover:text-purple-700"
      >
        {sub.label}
      </button>
    ))}
  </div>
</div>
    ) : (
      <Link
        key={item.label}
        href={item.href}
        onClick={() => setActive(item.label)}
        className={`relative  flex items-center justify-center gap-1 text-lg font-semibold tracking-wide group transition-all duration-300 ${
          active === item.label ? "text-purple-700" : "text-gray-800"
        } hover:text-purple-700`}
      >
      {/* {item.icon && <span className="text-gray-600">{item.icon}</span>} */}
        {item.label}

        {/* underline */}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
            active === item.label ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    )
  )}
</div>

       <div className="hidden lg:flex items-center gap-4 relative">

  {/* Contact Button (gradient like donate) */}
  <Link
    href="#contact"
    className="vibrate-hover flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700
    text-white font-medium text-sm tracking-wide
    transition-all duration-300 font-sans"
  >
    <PhoneCall
      size={18}
      className="icon-vibrate transition-transform duration-200"
    />
    Contact
  </Link>
  <div>|</div>

  {/* Donate Button (green) */}
<Link
  href="#donate"
  onClick={(e) => {
    e.preventDefault(); // prevent page jump
    setDonateClicked((prev) => !prev); // toggle click state
  }}
  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-green-500
    text-white font-semibold text-sm tracking-wide relative group transition-all duration-300"
>
  <Heart
    size={16}
    className={`transition-all duration-300 fill-white stroke-white 
      ${donateClicked ? "fill-red-500 stroke-red-500" : "group-hover:fill-red-500 group-hover:stroke-red-500"}`}
  />
  Donate
</Link>

</div>

        {/* ── MOBILE TOGGLE ── */}
        <button
          className="lg:hidden text-black p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* ── MOBILE MENU ── */}
{/* ── MOBILE MENU ── */}
{open && (
  <div className="lg:hidden bg-[#1e0f44] px-4 py-4 space-y-2">

    {/* Nav Links */}
    {navItems.map((item) => (
      <div key={item.label} className="w-full">
        <button
  className={`flex justify-between w-full items-center py-2 px-3 font-semibold text-left text-white rounded-md hover:bg-gray-700 transition-all duration-200`}
  onClick={() => {
    const section = document.getElementById(item.href?.replace("#", ""));
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setActive(item.label);
    if (!item.dropdown) setOpen(false);
  }}
>
  {item.label}
  {item.dropdown && (
    <ChevronDown
      size={16}
      strokeWidth={3}
      className={`transition-transform duration-300 ${
        dropOpen && active === item.label ? "rotate-180" : "rotate-0"
      }`}
    />
  )}
</button>

{/* Active underline */}
{active === item.label && !item.dropdown && (
  <span className="block h-[2px] w-full bg-purple-500 mt-1 rounded-full" />
)}

        {/* Dropdown */}
        {item.dropdown && active === item.label && (
          <div className="pl-4 mt-2 space-y-1">
            {item.dropdown.map((sub) => (
              <button
                key={sub.catId}
                className="w-full text-left text-gray-200 py-2 px-3 rounded-md hover:bg-purple-700/20 hover:text-white transition-colors duration-200"
                onClick={() => {
                  handleCatClick(sub.catId);
                  setOpen(false);
                  setActive("");
                }}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}
      </div>
    ))}

    {/* Contact & Donate in same row */}
    <div className="flex items-center justify-between gap-2 mt-4">
      {/* Contact */}
      <Link
        href="#contact"
        className="flex-1 flex flex-col items-center py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium text-sm transition-all duration-300"
        onClick={() => setOpen(false)}
      >
        <PhoneCall size={20} />
        Contact
      </Link>

      {/* Donate */}
      <Link
        href="#donate"
        onClick={(e) => {
          e.preventDefault();
          setDonateClicked((prev) => !prev);
          setOpen(false);
        }}
        className="flex-1 flex flex-col items-center py-2 rounded-lg bg-green-500 text-white font-semibold text-sm transition-all duration-300"
      >
        <Heart
          size={20}
          className={`transition-all duration-300 fill-white stroke-white ${
            donateClicked
              ? "fill-red-500 stroke-red-500"
              : "group-hover:fill-red-500 group-hover:stroke-red-500"
          }`}
        />
        Donate
      </Link>
    </div>
  </div>
)}
    </nav>
  );
}