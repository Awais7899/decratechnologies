import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.decratechnologies.com";

export const metadata: Metadata = {
  title: "IT Services - Web Development, Mobile Apps & Cloud Solutions",
  description:
    "Comprehensive IT services including web development, mobile app development, cloud solutions, cybersecurity, data analytics, and digital transformation. Expert technology solutions for your business.",
  keywords: [
    "IT services",
    "web development",
    "mobile app development",
    "cloud solutions",
    "cybersecurity",
    "Glasgow IT company",
  ],
  openGraph: {
    title: "IT Services - Decra Technologies",
    description:
      "Comprehensive technology services including web development, mobile apps, cloud solutions, cybersecurity, and more.",
    url: `${siteUrl}/services`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
