export default function GenzBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 py-14 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">

        {/* Fist icon */}
        <div className="shrink-0">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Wrist / base */}
            <rect x="22" y="48" width="28" height="16" rx="6" fill="white" fillOpacity="0.95"/>
            {/* Palm */}
            <rect x="20" y="30" width="32" height="22" rx="8" fill="white" fillOpacity="0.95"/>
            {/* Index finger */}
            <rect x="22" y="14" width="8" height="22" rx="4" fill="white" fillOpacity="0.95"/>
            {/* Middle finger */}
            <rect x="32" y="10" width="8" height="22" rx="4" fill="white" fillOpacity="0.95"/>
            {/* Ring finger */}
            <rect x="42" y="14" width="8" height="20" rx="4" fill="white" fillOpacity="0.95"/>
            {/* Pinky */}
            <rect x="50" y="20" width="6" height="16" rx="3" fill="white" fillOpacity="0.9"/>
            {/* Thumb */}
            <rect x="12" y="32" width="12" height="8" rx="4" fill="white" fillOpacity="0.9"/>
          </svg>
        </div>

        {/* Text */}
        <div>
          <p className="text-white/70 text-xs font-mono-custom tracking-[0.2em] uppercase mb-2">
            Our Commitment
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            We Support the Gen Z Movement
          </h2>
          <p className="text-white/75 text-base leading-relaxed max-w-lg">
            Empowering the next generation of healthcare professionals with
            precision diagnostic tools, modern technology, and a commitment
            to accessible, future-forward medicine.
          </p>
        </div>

      </div>
    </section>
  );
}
