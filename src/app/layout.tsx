import type { Metadata } from "next";
import "./globals.css";
import FloatingCTA from "@/components/CTAButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Cognidx Enterprises Pvt. Ltd. | Precision Diagnostics Nepal",
    template: "%s | Cognidx Enterprises",
  },
  description:
    "Nepal's premier biomedical diagnostic equipment supplier. World-class analyzers for serving hospitals and clinics across South Asia.",
  keywords: [
    "biomedical diagnostics Nepal",
    "immunoassay analyzer",
    "haematology analyzer Nepal",
    "blood gas analyzer",
    "chemiluminescence immunoassay",
    "urine analyzer Nepal",
    "biochemistry analyzer",
    "Cognidx Enterprises",
    "Anbio biotechnology Nepal",
    "Seamaty Nepal",
    "medical equipment Nepal",
    "Kathmandu diagnostics",
  ],
  authors: [{ name: "Cognidx Enterprises Pvt. Ltd.", url: "https://cognidx.com.np" }],
  creator: "Cognidx Enterprises Pvt. Ltd.",
  publisher: "Cognidx Enterprises Pvt. Ltd.",
  metadataBase: new URL("https://cognidx.com.np"),

  icons: {
    icon: [{ url: "/favicon.png" }],
    apple: [{ url: "/favicon.png" }],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognidx.com.np",
    siteName: "Cognidx Enterprises Pvt. Ltd.",
    title: "Cognidx Enterprises Pvt. Ltd. | Precision Diagnostics Nepal",
    description:
      "Nepal's premier biomedical diagnostic equipment supplier. World-class analyzers for immunoassay, haematology, blood gas, chemiluminescence, urine analysis, and biochemistry.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cognidx Enterprises" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cognidx Enterprises Pvt. Ltd. | Precision Diagnostics Nepal",
    description: "Nepal's premier biomedical diagnostic equipment supplier.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar/>
        {children}
        <Footer/>
        <FloatingCTA />
      </body>
    </html>
  );
}
