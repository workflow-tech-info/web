import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: '#059669',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://edengardenkochi.com'),
  title: "Eden Garden Farmstay | 300-Year-Old Heritage Sanctuary in Fort Kochi",
  description: "Experience the ultimate Glowmad retreat at Eden Garden. Sustainable living, authentic Kerala soul, and the best-rated heritage farmstay in Kochi 2026. Managed by Ms. Judith.",
  keywords: [
    "Fort Kochi homestay", "Kerala heritage stay", "Kochi-Muziris Biennale 2026 accommodation",
    "sustainable farmstay India", "slow travel Kochi", "wellness retreat Kerala",
    "best breakfast Fort Kochi", "boutique stay Kochi", "pet-friendly hotels Kochi",
    "eco-tourism Kerala", "300-year-old heritage home", "Ms. Judith Eden Garden",
    "quiet luxury Kochi", "affordable luxury Kochi", "farm-to-table Kerala",
    "digital nomad stay Kochi", "Glowmads India", "authentic Kerala food",
    "top-rated stay Kochi", "hidden gem Fort Kochi"
  ],
  authors: [{ name: "Ms. Judith" }],
  creator: "Eden Garden Farmstay",
  publisher: "Eden Garden Farmstay",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://edengardenkochi.com",
    siteName: "Eden Garden Farmstay",
    title: "Eden Garden Farmstay | Heritage & Sustainable Living",
    description: "A masterclass in regenerative tourism tucked away in Fort Kochi.",
    images: [
      {
        url: "/eden-garden-heritage-farmstay-exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Eden Garden Heritage Farmstay - 300 Year Old Sanctuary in Fort Kochi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden Garden Farmstay | 300-Year Heritage Sanctuary",
    description: "Experience sustainable luxury in a 300-year-old heritage farmstay in Fort Kochi, Kerala.",
    images: ["/eden-garden-heritage-farmstay-exterior.jpg"],
    creator: "@edengardenkochi",
  },
  alternates: {
    canonical: "https://edengardenkochi.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

