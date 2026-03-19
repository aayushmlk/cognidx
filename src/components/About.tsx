"use client";

import { CheckCircle2 } from "lucide-react";

const stats = [
  { num: "50+", label: "Product Lines" },
  { num: "200+", label: "Institutions Served" },
  { num: "5+", label: "Global Brand Partners" },
  { num: "70+", label: "Test Parameters" },
];

const values = [
  "Precision-first approach to every diagnostic solution",
  "Partnerships with CE & NMPA certified global brands",
  "Rapid nationwide support and after-sales service",
  "Empowering Gen Z healthcare professionals",
  "Sustainable and cost-efficient diagnostic ecosystems",
  "Dedicated training and technical assistance",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text side */}
        <div>
          <p className="font-mono-custom text-[11px] tracking-[0.15em] text-purple-600 uppercase mb-3">
            Who We Are
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
            Pioneering Biomedical Diagnostics in South Asia
          </h2>
          <div className="space-y-4 text-[#4a4a6a] leading-relaxed text-[0.97rem]">
            <p>
              <strong className="text-[#2d1b69]">Cognidx Enterprises Pvt. Ltd.</strong> is a
              leading biomedical solutions company headquartered in Kathmandu, Nepal, dedicated to
              transforming the landscape of clinical diagnostics across South Asia. Founded with a
              vision to bridge the gap between advanced diagnostic technology and accessible
              healthcare, we have emerged as a trusted partner for hospitals, clinics,
              laboratories, and emergency care units.
            </p>
            <p>
              We represent globally acclaimed manufacturers including{" "}
              <strong className="text-[#2d1b69]">
                Anbio Biotechnology, Seamaty, Bioelab, Keylights Science & Technology,
              </strong>{" "}
              and{" "}
              <strong className="text-[#2d1b69]">Fapon Biotech</strong> — delivering
              state-of-the-art analyzers spanning immunoassay, haematology, blood gas analysis,
              chemiluminescence, urine analysis, and biochemistry.
            </p>
            <p>
              Our philosophy is simple: every patient deserves a diagnosis backed by precision.
              From remote mountain clinics to urban tertiary hospitals, we ensure that accurate,
              fast, and affordable diagnostic tools reach wherever healthcare is delivered.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((s) => (
              <div
                key={s.num}
                className="bg-gradient-to-br from-purple-50 to-purple-100/60 rounded-xl p-5 border border-purple-100"
              >
                <div className="font-playfair text-3xl font-bold text-purple-700">
                  {s.num}
                </div>
                <div className="text-sm text-[#6b7280] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#2d1b69] to-[#5b2d8e] rounded-2xl p-10 text-white overflow-hidden">
            {/* Deco circle */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-400/10 rounded-full" />

            <h3 className="font-playfair text-2xl font-semibold mb-3 relative z-10">
              Our Core Values
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 relative z-10">
              Every decision we make is guided by our unwavering commitment to accuracy,
              accessibility, and innovation in diagnostics.
            </p>

            <ul className="space-y-3 relative z-10">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-white/85">
                  <CheckCircle2
                    size={16}
                    className="text-amber-400 shrink-0 mt-0.5"
                  />
                  {v}
                </li>
              ))}
            </ul>

            {/* Brand pills */}
            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <p className="text-white/50 text-xs mb-3 font-mono-custom tracking-widest">
                BRAND PARTNERS
              </p>
              <div className="flex flex-wrap gap-2">
                {["Anbio", "Seamaty", "Bioelab", "Keylights", "Fapon"].map((b) => (
                  <span
                    key={b}
                    className="bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <div className="absolute -bottom-6 -left-6 bg-amber-400 text-[#1a1a2e] rounded-xl px-5 py-4 shadow-xl shadow-amber-400/30">
            <div className="font-playfair text-2xl font-bold">CE</div>
            <div className="text-xs font-semibold">Certified Products</div>
          </div>
        </div>
      </div>
    </section>
  );
}
