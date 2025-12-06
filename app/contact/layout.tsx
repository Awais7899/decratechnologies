import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.decratechnologies.com";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Our IT Experts",
  description:
    "Contact Decra Technologies for IT services, web development, mobile apps, and cloud solutions. Located in Glasgow, UK. Email: decratechnologies@gmail.com | Phone: +92 312 6719140",
  keywords: [
    "contact Decra Technologies",
    "IT services contact",
    "Glasgow IT company contact",
    "technology consulting",
  ],
  openGraph: {
    title: "Contact Us - Decra Technologies",
    description:
      "Get in touch with Decra Technologies. We're here to help with your technology needs.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
