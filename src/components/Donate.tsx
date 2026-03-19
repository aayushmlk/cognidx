"use client";

import { useState } from "react";
import { Heart, CheckCircle } from "lucide-react";

const presets = ["NPR 500", "NPR 1,000", "NPR 2,500", "NPR 5,000"];

export default function Donate() {
  const [selected, setSelected] = useState<string | null>(null);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selected || custom;
    if (!amount) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setSelected(null);
    setCustom("");
    setName("");
  };

  return (
    <section
      id="donate"
      className="relative bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#1a1a2e] py-24 px-6 overflow-hidden"
    >
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-8 right-16 w-32 h-32 bg-amber-400/5 rounded-full blur-xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-400/20 rounded-2xl mb-6">
          <Heart className="text-amber-400" size={28} />
        </div>

        <p className="font-mono-custom text-[11px] tracking-[0.15em] text-purple-400 uppercase mb-3">
          Support Healthcare
        </p>
        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Help Us Reach More Lives
        </h2>
        <p className="text-white/65 text-lg leading-relaxed mb-10">
          Your contribution helps us bring precision diagnostic equipment to underserved
          clinics and remote healthcare facilities across Nepal. Every donation makes a
          difference.
        </p>

        {submitted ? (
          <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-2xl px-8 py-10 flex flex-col items-center gap-4">
            <CheckCircle className="text-emerald-400" size={48} />
            <h3 className="font-playfair text-2xl text-white font-semibold">
              Thank You for Your Generosity!
            </h3>
            <p className="text-white/60 text-sm">
              Your support helps us make diagnostics accessible to all.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Preset amounts */}
            <div className="flex flex-wrap justify-center gap-3">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    setSelected(p);
                    setCustom("");
                  }}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold border transition-all ${
                    selected === p
                      ? "bg-amber-400 border-amber-400 text-[#1a1a2e]"
                      : "bg-white/8 border-white/20 text-white hover:bg-white/15"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Custom amount + name */}
            <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Custom amount (NPR)"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setSelected(null);
                }}
                className="bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm outline-none focus:border-amber-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold px-10 py-3.5 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-400/30 disabled:opacity-40"
              disabled={!selected && !custom}
            >
              Donate Now ♥
            </button>

            <p className="text-white/30 text-xs mt-3">
              * This is a simulated donation form. Contact us to arrange actual contributions.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
