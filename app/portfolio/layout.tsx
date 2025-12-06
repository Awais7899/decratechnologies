import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.decratechnologies.com";

export const metadata: Metadata = {
  title: "Portfolio - Our Successful IT Projects & Case Studies",
  description:
    "Explore our portfolio of successful IT projects including e-commerce platforms, mobile apps, cloud solutions, and enterprise software. See how Decra Technologies helps businesses achieve their goals.",
  keywords: [
    "portfolio",
    "IT projects",
    "case studies",
    "web development projects",
    "mobile app projects",
    "Glasgow IT portfolio",
  ],
  openGraph: {
    title: "Portfolio - Decra Technologies",
    description:
      "Explore our portfolio of successful projects and see how we help businesses achieve their goals.",
    url: `${siteUrl}/portfolio`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
