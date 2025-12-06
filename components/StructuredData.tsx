interface StructuredDataProps {
  type?: "Organization" | "WebSite" | "Service" | "LocalBusiness";
}

export default function StructuredData({
  type = "Organization",
}: StructuredDataProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.decratechnologies.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Decra Technologies",
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logo.jpg`,
    description:
      "Leading IT services company providing web development, mobile apps, cloud solutions, and cybersecurity services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ibrox Street",
      addressLocality: "Glasgow",
      addressRegion: "Scotland",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-312-6719140",
      contactType: "Customer Service",
      email: "decratechnologies@gmail.com",
      areaServed: "GB",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61583690993562",
      "https://www.linkedin.com/company/decra-technologies/",
      "https://www.instagram.com/decra_technologies/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Decra Technologies",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    name: "Decra Technologies",
    image: `${baseUrl}/assets/images/logo.jpg`,
    description:
      "Leading IT services company providing web development, mobile apps, cloud solutions, and cybersecurity services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ibrox Street",
      addressLocality: "Glasgow",
      addressRegion: "Scotland",
      postalCode: "",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "55.8642",
      longitude: "-4.2518",
    },
    url: baseUrl,
    telephone: "+92-312-6719140",
    email: "decratechnologies@gmail.com",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Services",
    provider: {
      "@type": "Organization",
      name: "Decra Technologies",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cybersecurity",
          },
        },
      ],
    },
  };

  let schema: Record<string, unknown>;
  if (type === "WebSite") {
    schema = websiteSchema;
  } else if (type === "LocalBusiness") {
    schema = localBusinessSchema;
  } else if (type === "Service") {
    schema = serviceSchema;
  } else {
    schema = organizationSchema;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
