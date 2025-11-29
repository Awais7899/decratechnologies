export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern e-commerce platform with advanced features and seamless user experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "2",
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description:
      "A comprehensive healthcare app connecting patients with healthcare providers.",
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "#",
  },
  {
    id: "3",
    title: "Financial Dashboard",
    category: "Data Analytics",
    description:
      "Real-time financial dashboard with advanced analytics and reporting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    link: "#",
  },
  {
    id: "4",
    title: "SaaS Platform",
    category: "Cloud Solutions",
    description:
      "Scalable SaaS platform with multi-tenant architecture and microservices.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["AWS", "Docker", "Kubernetes", "Node.js"],
    link: "#",
  },
  {
    id: "5",
    title: "Education Platform",
    category: "Web Development",
    description:
      "Interactive learning platform with video streaming and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Node.js", "MongoDB", "WebRTC"],
    link: "#",
  },
  {
    id: "6",
    title: "IoT Management System",
    category: "Cloud Solutions",
    description:
      "Comprehensive IoT platform for device management and data collection.",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
    technologies: ["Azure IoT", "Python", "React", "Time Series DB"],
    link: "#",
  },
];
