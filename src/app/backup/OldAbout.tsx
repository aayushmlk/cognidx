"use client";

import { CheckCircle2, FlaskConical, Users, Award, Microscope } from "lucide-react";

const stats = [
  { num: "50+", label: "Product Lines", icon: FlaskConical, color: "#7c3aed", bg: "#f5f3ff" },
  { num: "200+", label: "Institutions Served", icon: Users, color: "#0891b2", bg: "#ecfeff" },
  { num: "5+", label: "Global Brand Partners", icon: Award, color: "#059669", bg: "#ecfdf5" },
  { num: "70+", label: "Test Parameters", icon: Microscope, color: "#d97706", bg: "#fffbeb" },
];

const values = [
  "Precision-first approach to every diagnostic solution",
  "Partnerships with CE & NMPA certified global brands",
  "Rapid nationwide support and after-sales service",
  "Empowering Gen Z healthcare professionals",
  "Sustainable and cost-efficient diagnostic ecosystems",
  "Dedicated training and technical assistance",
];

const brands = ["Anbio", "Seamaty", "Bioelab", "Keylights", "Fapon"];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden bg-white">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[650px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #ede9fe 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[450px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #ddd6fe 0%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #5b21b6 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #7c3aed, transparent)" }} />
          <span className=" text-[11px] tracking-[0.22em] text-violet-500 uppercase">
            Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT — Story + Stats */}
          <div>
            <h2 className=" text-4xl lg:text-[3.1rem] font-bold text-[#0f0a1e] leading-[1.15] mb-8">
              Pioneering{" "}
              <span style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Biomedical
              </span>
              <br />
              Diagnostics in South Asia
            </h2>

            <div className="space-y-4 text-[#4a4a6a] leading-[1.9] text-[0.94rem] mb-10">
              <p>
                <strong className="text-[#0f0a1e] font-semibold">Cognidx Enterprises Pvt. Ltd.</strong> is
                a leading biomedical solutions company headquartered in Kathmandu, Nepal, dedicated to
                transforming the landscape of clinical diagnostics across South Asia. Founded with a vision
                to bridge the gap between advanced diagnostic technology and accessible healthcare, we have
                emerged as a trusted partner for hospitals, clinics, laboratories, and emergency care units.
              </p>
              <p>
                We represent globally acclaimed manufacturers including{" "}
                <strong className="text-[#0f0a1e] font-semibold">
                  Anbio Biotechnology, Seamaty, Bioelab, Keylights Science & Technology,
                </strong>{" "}
                and <strong className="text-[#0f0a1e] font-semibold">Fapon Biotech</strong> — delivering
                state-of-the-art analyzers spanning immunoassay, haematology, blood gas analysis,
                chemiluminescence, urine analysis, and biochemistry.
              </p>
              <p>
                Our philosophy is simple: every patient deserves a diagnosis backed by precision. From
                remote mountain clinics to urban tertiary hospitals, we ensure that accurate, fast, and
                affordable diagnostic tools reach wherever healthcare is delivered.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.num}
                    className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default"
                    style={{
                      background: s.bg,
                      border: `1px solid ${s.color}20`,
                      boxShadow: `0 2px 12px ${s.color}10`,
                    }}
                  >
                    <div
                      className="inline-flex p-2.5 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${s.color}18` }}
                    >
                      <Icon size={16} style={{ color: s.color }} />
                    </div>
                    <div
                      className=" text-[2rem] font-bold leading-none mb-1"
                      style={{ color: s.color }}
                    >
                      {s.num}
                    </div>
                    <div className="text-xs text-[#6b7280] font-medium leading-snug">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Values card + cert row */}
          <div className="flex flex-col gap-4">

            {/* Values card */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #faf8ff 0%, #f0ebff 60%, #e8e0ff 100%)",
                border: "1px solid #ddd6fe",
                boxShadow: "0 16px 48px rgba(124,58,237,0.10), 0 2px 8px rgba(124,58,237,0.06)",
              }}
            >
              {/* Decorative blobs inside card */}
              <div
                className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-40 pointer-events-none"
                style={{ background: "radial-gradient(circle, #c4b5fd, transparent 70%)" }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(circle, #a5b4fc, transparent 70%)" }}
              />

              <div className="relative z-10 p-8">
                {/* Card header row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className=" text-xl font-bold text-[#0f0a1e] mb-1">
                      Our Core Values
                    </h3>
                    <p className="text-xs text-[#6b7280] leading-relaxed max-w-[240px]">
                      Guided by accuracy, accessibility, and innovation in every diagnostic decision.
                    </p>
                  </div>
                  {/* Est. badge inline — no floating */}
                  <div
                    className="shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center"
                    style={{
                      background: "white",
                      border: "1px solid #ede9fe",
                      boxShadow: "0 4px 16px rgba(124,58,237,0.12)",
                    }}
                  >
                    <span className="text-[9px] text-violet-400 uppercase tracking-wider">Est.</span>
                    <span className="text-lg font-bold text-[#0f0a1e] leading-none">2019</span>
                  </div>
                </div>

                {/* Values list */}
                <ul className="space-y-3 mb-7">
                  {values.map((v) => (
                    <li key={v} className="flex items-start gap-3 text-sm text-[#374151] leading-snug">
                      <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#7c3aed" }} />
                      {v}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px w-full mb-5" style={{ background: "linear-gradient(90deg, #ddd6fe, transparent)" }} />

                {/* Brand partners */}
                <div>
                  <p className=" text-[10px] tracking-[0.2em] text-violet-400 uppercase mb-3">
                    Brand Partners
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((b) => (
                      <span
                        key={b}
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-full cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        style={{
                          background: "white",
                          color: "#5b21b6",
                          border: "1px solid #ddd6fe",
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

            {/* Certification badges row — below card, not overlapping */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className="rounded-2xl px-5 py-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-default"
                style={{
                  background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
                  border: "1px solid #fde68a",
                  boxShadow: "0 2px 12px rgba(245,158,11,0.10)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                    boxShadow: "0 4px 14px rgba(245,158,11,0.35)",
                  }}
                >
                  <span className=" text-lg font-bold text-white">CE</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0f0a1e]">CE Certified</div>
                  <div className="text-xs text-[#92400e]">EU Standards</div>
                </div>
              </div>

              <div
                className="rounded-2xl px-5 py-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-default"
                style={{
                  background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
                  border: "1px solid #a7f3d0",
                  boxShadow: "0 2px 12px rgba(5,150,105,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #059669, #10b981)",
                    boxShadow: "0 4px 14px rgba(5,150,105,0.30)",
                  }}
                >
                  <span className=" text-[10px] font-bold text-white leading-tight text-center">NMPA</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0f0a1e]">NMPA Certified</div>
                  <div className="text-xs text-[#065f46]">China Standards</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
