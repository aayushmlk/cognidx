import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const productLinks = [
  { label: "Fluorescence Immunoassay", href: "#products" },
  { label: "Blood Gas & Electrolyte", href: "#products" },
  { label: "Haematology Analyzers", href: "#products" },
  { label: "Chemiluminescence CLIA", href: "#products" },
  { label: "Urine Analyzers", href: "#products" },
  { label: "Biochemistry Analyzers", href: "#products" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0618] text-white/60">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative h-10 w-64">
              <Image
                src="/cognidx_logo.png"
                alt="Cognidx"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>

          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-sm">
            Nepal&apos;s premier biomedical diagnostic equipment supplier. Bridging the gap
            between advanced diagnostic technology and accessible healthcare since 2019.
          </p>
          <div className="space-y-2.5 text-sm">
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="text-purple-400 shrink-0 mt-0.5" />
              <span>Kathmandu, Bagmati Province, Nepal</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={14} className="text-purple-400 shrink-0" />
              <span>+977-1-XXXXXXX</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={14} className="text-purple-400 shrink-0" />
              <a href="mailto:info@cognidx.com.np" className="hover:text-white transition-colors">
                info@cognidx.com.np
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe size={14} className="text-purple-400 shrink-0" />
              <a href="#" className="hover:text-white transition-colors">
                www.cognidx.com.np
              </a>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Products
          </h4>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Brand Partners
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Anbio", "Seamaty", "Bioelab", "Keylights", "Fapon"].map((b) => (
                <span
                  key={b}
                  className="bg-white/5 border border-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Cognidx Enterprises Pvt. Ltd. All rights reserved.</p>
          <p>Designed with ♥ in Kathmandu · We support the GenZ Movement</p>
        </div>
      </div>
    </footer>
  );
}
