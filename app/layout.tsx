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
    default: "Decra Technologies - Innovative IT Solutions & Services",
    template: "%s | Decra Technologies",
  },
  description:
    "Decra Technologies provides cutting-edge IT services including web development, mobile apps, cloud solutions, cybersecurity, and digital transformation. Transform your business with innovative technology solutions.",
  keywords: [
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
    siteName: "Decra Technologies",
    title: "Decra Technologies - Innovative IT Solutions & Services",
    description:
      "Leading IT services company providing web development, mobile apps, cloud solutions, and cybersecurity services. Transform your business with innovative technology.",
    images: [
      {
        url: `${siteUrl}/assets/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Decra Technologies - IT Solutions & Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Decra Technologies - Innovative IT Solutions & Services",
    description:
      "Leading IT services company providing web development, mobile apps, cloud solutions, and cybersecurity services.",
    images: [`${siteUrl}/assets/images/og-image.jpg`],
    creator: "@decra_technologies",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/assets/images/logo.jpg", sizes: "any" },
      { url: "/assets/images/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/assets/images/logo.jpg",
    apple: "/assets/images/logo.jpg",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
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
