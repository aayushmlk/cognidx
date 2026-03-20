import { FaHandFist } from "react-icons/fa6";

export default function GenzBanner() {
  return (
    <section
      className="relative py-16 px-6 sm:px-10 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #faf8ff 0%, #f3e8ff 40%, #fdf4ff 70%, #f5f3ff 100%)",
        borderTop: "1px solid #ede9fe",
        borderBottom: "1px solid #ede9fe",
      }}
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left violet bloom */}
        <div
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        {/* Right pink bloom */}
        <div
          className="absolute -bottom-10 right-0 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,121,249,0.15) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Shimmer top line */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 10%, rgba(167,139,250,0.6) 40%, rgba(232,121,249,0.4) 60%, transparent 90%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-10 text-center sm:text-left">

        {/* Icon card */}
        <div
          className="shrink-0 w-[100px] h-[100px] rounded-3xl flex items-center justify-center relative"
          style={{
            background: "linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%)",
            border: "1px solid #ddd6fe",
            boxShadow: "0 8px 32px rgba(124,58,237,0.18), 0 2px 8px rgba(124,58,237,0.10)",
          }}
        >
          {/* Inner glow ring */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(167,139,250,0.3) 0%, transparent 60%)",
            }}
          />
          <FaHandFist
            size={44}
            style={{
              color: "#7c3aed",
              filter: "drop-shadow(0 0 10px rgba(124,58,237,0.4))",
            }}
          />
          {/* Pulse dot */}
          <span
            className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full border-2 border-white animate-pulse"
            style={{
              background: "linear-gradient(135deg, #e879f9, #a855f7)",
              boxShadow: "0 0 8px rgba(232,121,249,0.6)",
            }}
          />
        </div>

        {/* Text */}
        <div className="min-w-0 w-full">
          {/* Eyebrow */}
          <p className=" text-[10px] tracking-[0.28em] uppercase mb-3 flex items-center gap-2.5 justify-center sm:justify-start">
            <span
              className="block w-6 h-px rounded"
              style={{ background: "linear-gradient(90deg, #9333ea, #e879f9)" }}
            />
            <span style={{
              background: "linear-gradient(90deg, #9333ea, #c026d3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Our Commitment
            </span>
          </p>

          {/* Heading */}
          <h2 className=" text-3xl sm:text-4xl font-bold text-[#0f0a1e] leading-[1.15] mb-3">
            We Support the{" "}
            <em
              className="italic not-italic"
              style={{
                background: "linear-gradient(135deg, #9333ea 0%, #a855f7 50%, #e879f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gen Z Movement
            </em>
          </h2>

          {/* Body */}
          <p className="text-[#6b7280] text-[14.5px] leading-relaxed max-w-[420px] mb-6 mx-auto sm:mx-0">
            Empowering the next generation of healthcare professionals with
            precision diagnostic tools, modern technology, and a commitment
            to accessible, future-forward medicine.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full  text-[10px] tracking-widest uppercase font-semibold"
              style={{
                background: "linear-gradient(135deg, #f3e8ff, #fdf4ff)",
                border: "1px solid #ddd6fe",
                color: "#7c3aed",
                boxShadow: "0 2px 8px rgba(124,58,237,0.12)",
              }}
            >
              <span
                className="w-[5px] h-[5px] rounded-full animate-pulse"
                style={{ background: "#a855f7" }}
              />
              Future-Forward Medicine
            </span>
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full  text-[10px] tracking-widest uppercase font-medium"
              style={{
                background: "white",
                border: "1px solid #e9d5ff",
                color: "#9333ea",
                boxShadow: "0 1px 4px rgba(124,58,237,0.08)",
              }}
            >
              Precision Diagnostics
            </span>
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full  text-[10px] tracking-widest uppercase font-medium"
              style={{
                background: "white",
                border: "1px solid #e9d5ff",
                color: "#9333ea",
                boxShadow: "0 1px 4px rgba(124,58,237,0.08)",
              }}
            >
              Next Gen Healthcare
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
