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
    icon: [

      { url: "/cognidx_logo.png" },
    ],
    apple: [{ url: "/cognidx_logo.png", sizes: "180x180" }],

  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognidx.com.np",
    siteName: "Cognidx Enterprises Pvt. Ltd.",
    title: "Cognidx Enterprises Pvt. Ltd. | Precision Diagnostics Nepal",
    description:
      "Nepal's premier biomedical diagnostic equipment supplier. World-class analyzers for immunoassay, haematology, blood gas, chemiluminescence, urine analysis, and biochemistry.",
    images: [{ url: "/cognidx_logo.png", width: 1200, height: 630, alt: "Cognidx Enterprises" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cognidx Enterprises Pvt. Ltd. | Precision Diagnostics Nepal",
    description: "Nepal's premier biomedical diagnostic equipment supplier.",
    images: ["/cognidx_logo.png"],
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
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
