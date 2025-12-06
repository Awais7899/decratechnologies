import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.decratechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Decra - Innovative IT Solutions & Technology Services",
    template: "%s | Decra",
  },
  description:
    "Decra Technologies - Leading IT services company providing web development, mobile apps, cloud solutions, and cybersecurity. Transform your business with Decra's innovative technology solutions.",
  keywords: [
    "Decra",
    "Decra Technologies",
    "Decra IT services",
    "Decra web development",
    "Decra software",
    "IT services",
    "web development",
    "mobile app development",
    "cloud solutions",
    "cybersecurity",
    "software development",
    "digital transformation",
    "technology consulting",
    "Glasgow IT company",
    "UK technology services",
    "business solutions",
    "enterprise software",
  ],
  authors: [{ name: "Decra Technologies" }],
  creator: "Decra Technologies",
  publisher: "Decra Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Decra",
    title: "Decra - Innovative IT Solutions & Technology Services",
    description:
      "Decra Technologies - Leading IT services company providing web development, mobile apps, cloud solutions, and cybersecurity. Transform your business with Decra.",
    images: [
      {
        url: `${siteUrl}/assets/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Decra - IT Solutions & Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Decra - Innovative IT Solutions & Technology Services",
    description:
      "Decra Technologies - Leading IT services company providing web development, mobile apps, cloud solutions, and cybersecurity.",
    images: [`${siteUrl}/assets/images/og-image.jpg`],
    creator: "@decra_technologies",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <Navigation />
        <main className="pt-20 relative z-10" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
