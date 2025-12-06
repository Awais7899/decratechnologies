import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Decra Technologies",
    short_name: "Decra",
    description:
      "Decra Technologies - Innovative IT Solutions & Technology Services",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FF7A00",
    icons: [
      {
        src: "/assets/images/logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/assets/images/logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
