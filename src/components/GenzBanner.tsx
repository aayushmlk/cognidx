import { FaHandFist } from "react-icons/fa6";

export default function GenzBanner() {
  return (
    <section
      className="relative py-16 px-6 sm:px-10"
      style={{
        background: "#0f0520",
        backgroundImage: `
          radial-gradient(ellipse at 0% 100%, #3b0764 0%, transparent 50%),
          radial-gradient(ellipse at 100% 0%, #2e1065 0%, transparent 50%)
        `,
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-violet-900/35 blur-[60px]" />
        <div className="absolute bottom-[-60px] right-[10%] w-[200px] h-[200px] rounded-full bg-purple-900/40 blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-12 text-center sm:text-left">

        {/* Icon card */}
        <div
          className="shrink-0 w-[110px] h-[110px] rounded-[28px] flex items-center justify-center relative"
          style={{
            background: "linear-gradient(135deg, #3b0764, #5b21b6)",
            border: "1px solid rgba(167,139,250,0.2)",
            boxShadow: "0 0 50px rgba(109,40,217,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="absolute inset-px rounded-[27px] bg-gradient-to-br from-white/[0.07] to-transparent pointer-events-none" />
          <FaHandFist size={52} color="#ede9fe" />
        </div>

        {/* Text */}
        <div className="min-w-0 w-full">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-violet-500 mb-3 flex items-center gap-2.5 justify-center sm:justify-start">
            <span className="block w-6 h-px bg-violet-600 rounded" />
            Our Commitment
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-black text-violet-50 leading-[1.15] mb-4">
            We Support the{" "}
            <em className="italic text-violet-400">
              Gen Z Movement
            </em>
          </h2>
          <p className="text-violet-300/70 text-[15px] leading-relaxed max-w-[420px] mb-6">
            Empowering the next generation of healthcare professionals with
            precision diagnostic tools, modern technology, and a commitment
            to accessible, future-forward medicine.
          </p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase text-violet-200 bg-violet-700/35 border border-violet-500/40">
              <span className="w-[5px] h-[5px] rounded-full bg-violet-400 animate-pulse" />
              Future-Forward Medicine
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase text-violet-300/70 bg-violet-900/20 border border-violet-700/25">
              Precision Diagnostics
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase text-violet-300/70 bg-violet-900/20 border border-violet-700/25">
              Next Gen Healthcare
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}