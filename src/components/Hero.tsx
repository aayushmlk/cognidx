"use client";

import Link from "next/link";
import { ArrowDown, Activity, Microscope, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl" />
      </div>

      {/* Floating icons */}
      <div className="absolute top-24 left-12 opacity-20 animate-float hidden lg:block">
        <Activity size={48} className="text-purple-300" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
        <Microscope size={56} className="text-pink-300" />
      </div>
      <div className="absolute top-1/2 left-8 opacity-15 animate-float hidden lg:block" style={{ animationDelay: "4s" }}>
        <Heart size={36} className="text-amber-300" />
      </div>

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white/90 px-5 py-2 rounded-full text-xs tracking-widest font-mono-custom mb-8 backdrop-blur-sm">
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        Precision Diagnostics · Est. 2019 · Kathmandu, Nepal
      </div>

      {/* Headline */}
      <h1 className="relative z-10 font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] max-w-4xl mb-6">
        Advancing Health Through{" "}
        <span className="text-amber-400 italic">Precision</span> Diagnostics
      </h1>

      {/* Sub */}
      <p className="relative z-10 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
        Cognidx Enterprises Pvt. Ltd. brings world-class biomedical diagnostic
        equipment to healthcare providers — empowering faster, more accurate
        clinical decisions across Nepal and South Asia.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-wrap gap-4 justify-center mb-16">
        <Link
          href="#products"
          className="bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold px-8 py-3.5 rounded-xl text-base transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/30"
        >
          Explore Products
        </Link>
        <Link
          href="#about"
          className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium px-8 py-3.5 rounded-xl text-base transition-all backdrop-blur-sm"
        >
          Our Mission
        </Link>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 flex flex-wrap justify-center gap-px rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
        {[
          { num: "70+", label: "Test Parameters" },
          { num: "200+", label: "Institutions Served" },
          { num: "5", label: "Global Brand Partners" },
          { num: "50+", label: "Product Lines" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/8 px-8 py-4 text-center min-w-[130px]"
          >
            <div className="font-playfair text-2xl font-bold text-amber-400">
              {stat.num}
            </div>
            <div className="text-white/60 text-xs mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
