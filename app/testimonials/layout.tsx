import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.decratechnologies.com";

export const metadata: Metadata = {
  title: "Client Testimonials - What Our Clients Say About Us",
  description:
    "Read authentic client testimonials and reviews about working with Decra Technologies. Discover why businesses trust us for their IT services, web development, and technology solutions.",
  keywords: [
    "testimonials",
    "client reviews",
    "IT services reviews",
    "Decra Technologies reviews",
  ],
  openGraph: {
    title: "Testimonials - Decra Technologies",
    description:
      "Read what our clients have to say about working with Decra Technologies.",
    url: `${siteUrl}/testimonials`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/testimonials`,
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
