"use client";

import { useState } from "react";
import { FaPlus, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [bounce, setBounce] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);

    setBounce(true);
    setTimeout(() => setBounce(false), 300);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      <div
        className={`flex flex-col items-center gap-3 mb-3 mr-1 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <a
          href="https://wa.me/9779819425801"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition"
        >
          <FaWhatsapp className="text-white text-xl" />
        </a>

        <a
          href="mailto:info@cognidx.com.np"
          className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full shadow-lg transition"
        >
          <MdEmail className="text-white text-xl" />
        </a>

        <a
          href="tel:+9779819425801"
          className="bg-red-500 hover:bg-red-600 p-4 rounded-full shadow-lg transition"
        >
          <FaPhoneAlt className="text-white text-lg" />
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`bg-[#EA4335] text-white p-4 rounded-full shadow-xl transition transform ${
          bounce ? "scale-110" : "scale-100"
        }`}
      >
        <FaPlus
          className={`text-xl transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
}