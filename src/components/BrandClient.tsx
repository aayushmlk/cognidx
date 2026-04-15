"use client";
const brandPartners = [
  {
    name: "Anbio",
    full: "Anbio Biotechnology",
    origin: "Shenzhen, China",
    products: ["Rapid test kits", "FIA analyzers", "PCR reagents"],
    desc: "Point-of-care diagnostics for infectious disease & immunology.",
    website: "https://www.anbio.cn",
  },
  {
    name: "Seamaty",
    full: "Seamaty Medical",
    origin: "Chengdu, China",
    products: ["Biochemistry analyzers", "Electrolyte analyzers"],
    desc: "Compact, fully-automated chemistry analyzers for routine lab work.",
    website: "https://www.seamaty.com",
  },
  {
    name: "Bioelab",
    full: "Bioelab",
    origin: "China",
    products: ["Haematology analyzers", "Reagents"],
    desc: "Automated blood cell counting and CBC analysis instruments.",
    website: "https://www.bioelab.com",
  },
  {
    name: "DiyaLab",
    full: "DiyaLab",
    origin: "China",
    products: ["FIA analyzers", "Immunoassay strips"],
    desc: "Fluorescence immunoassay systems for rapid quantitative testing.",
    website: "https://www.diyalab.com",
  },
  {
    name: "Fapon",
    full: "Fapon Biotech",
    origin: "Shenzhen, China",
    products: ["Chemiluminescence analyzers", "Immunoassay reagents"],
    desc: "High-sensitivity CLIA platforms for hormones, tumour markers & more.",
    website: "https://www.fapon.com",
  },
  {
    name: "Rayto",
    full: "Rayto Life Sciences",
    origin: "Shenzhen, China",
    products: ["ELISA readers", "Urine analyzers", "Microplate washers"],
    desc: "Full-range lab instruments covering urinalysis and immunology workflows.",
    website: "https://www.rayto.com",
  },
];

const clients = [
  {
    name: "Agilus Diagnostic Nepal Pvt. Ltd.",
  },
  {
    name: "Alfa Diagnostic Lab",
  },
  {
    name: "Alfa Polyclinic Pvt. Ltd.",
  },
  {
    name: "Army Hospital",
  },
  {
    name: "Asian Diagnostic Laboratory Pvt. Ltd.",
  },
  {
    name: "Aster Path Lab",
  },
  {
    name: "Bageshwori Diagnostic And Polyclinic",
  },
  {
    name: "Bhabisya Polyclinic",
  },
  {
    name: "Boby Medical Hall And Polyclinic Pvt. Ltd.",
  },
  {
    name: "Chaudhary Sarkar Box Polyclinic And Diagnostic Center Pvt. Ltd.",
  },
  {
    name: "Family Pathology And Diagnostic Centre",
  },
  {
    name: "Ganeshman Singh Community Hospital",
  },
  {
    name: "Genomic Diagnostic Lab",
  },
  {
    name: "Gulmi Model Hospital Pvt. Ltd.",
  },
  {
    name: "Hamro Diagnostic Suppliers",
  },
];

export default function BrandClient() {
  return (
    <section id="brandclients" className="relative py-24 px-6 bg-gradient-to-b from-[#f8f6ff] to-[#f1ecff] overflow-hidden">
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #7c3aed66, #7c3aed, #7c3aed66, transparent)",
        }}
      />
      {/* Background glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-300/20 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-16">
          <p style={{ fontFamily: "Raleway, system-ui, sans-serif" }} className="text-xs tracking-[0.25em] font-bold text-purple-600 mb-3">
            TRUSTED NETWORK
          </p>

          <h2 style={{ fontFamily: "Raleway, system-ui, sans-serif" }} className="text-4xl font-bold text-[#140830] mb-3">
            Brand Partners
          </h2>

          <p style={{ fontFamily: "Raleway, system-ui, sans-serif" }} className="text-purple-700 text-sm">
            Collaborating with global leaders in diagnostics.
          </p>
        </div>

        {/* BRAND CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandPartners.map((b) => (
            <div
              key={b.name}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-400/40 to-indigo-400/30 hover:from-purple-500/60 hover:to-indigo-500/60 transition-all duration-300"
            >
              <div className="h-full rounded-2xl bg-white/80 backdrop-blur-xl p-6 shadow-sm group-hover:shadow-xl transition">

                {/* Name */}
                <h3 style={{ fontFamily: "Raleway, system-ui, sans-serif" }} className="text-lg font-semibold text-[#140830]">
                  {b.name}
                </h3>
                <p style={{ fontFamily: "Raleway, system-ui, sans-serif" }} className="text-sm text-purple-500 mb-2">
                  {b.full}
                </p>

                {/* Origin */}
                <span style={{ fontFamily: "Raleway, system-ui, sans-serif" }} className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                  {b.origin}
                </span>

                {/* Description */}
                <p style={{ fontFamily: "Raleway, system-ui, sans-serif" }} className="text-sm text-gray-800 mt-4 leading-relaxed">
                  {b.desc}
                </p>

                {/* Products */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {b.products.map((p, i) => (
                    <span
                      key={i}
                      style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
                      className="text-[13px] font-bold bg-purple-50 text-purple-600 px-2 py-1 rounded-md"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={b.website}
                  target="_blank"
                  style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
                  className="inline-block mt-5 text-sm font-semibold text-purple-600 hover:text-purple-800 transition"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CLIENT SECTION */}
        <div className="mt-28">
          <div className="mb-12">
            <h2
              style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
              className="text-3xl font-bold text-[#140830] mb-2"
            >
              Our Clients
            </h2>

            <p
              style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
              className="text-purple-500 text-sm"
            >
              Trusted by hospitals & diagnostic centers across Nepal.
            </p>
          </div>

          {/* NEW GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {clients.map((c, index) => {
              const initials = c.name
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("");

              return (
                <div
                  key={c.name}
                  className="group relative p-[1px] rounded-xl bg-gradient-to-br from-purple-300/40 to-indigo-300/30 hover:from-purple-500/60 hover:to-indigo-500/60 transition-all duration-300"
                >
                  <div className="relative h-full rounded-xl bg-white/70 backdrop-blur-xl p-4 flex items-center gap-3 shadow-sm group-hover:shadow-xl transition-all">

                    {/* Avatar */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold text-sm shadow-md">
                      {initials}
                    </div>

                    {/* Name */}
                    <p
                      style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
                      className="text-sm font-semibold text-[#140830] leading-snug"
                    >
                      {c.name}
                    </p>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 blur-lg transition" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}