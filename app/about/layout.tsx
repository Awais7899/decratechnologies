import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.decratechnologies.com";

export const metadata: Metadata = {
  title: "About Us - Our Mission, Vision & Expert IT Team",
  description:
    "Learn about Decra Technologies, a leading IT services company based in Glasgow, UK. Discover our mission, vision, values, and the talented team behind our innovative technology solutions.",
  keywords: [
    "about Decra Technologies",
    "IT company Glasgow",
    "technology team",
    "IT services company UK",
  ],
  openGraph: {
    title: "About Us - Decra Technologies",
    description:
      "Learn about Decra Technologies, our mission, vision, and the talented team behind our innovative solutions.",
    url: `${siteUrl}/about`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
