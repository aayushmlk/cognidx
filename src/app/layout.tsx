import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cognidx Enterprises Pvt. Ltd. | Precision Diagnostics Nepal",
    template: "%s | Cognidx Enterprises",
  },
  description:
    "Nepal's premier biomedical diagnostic equipment supplier. World-class analyzers for immunoassay, haematology, blood gas, chemiluminescence, urine analysis, and biochemistry — serving hospitals and clinics across South Asia.",
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
    apple: [{ url: "/favicon.png", }],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,600;1,700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}