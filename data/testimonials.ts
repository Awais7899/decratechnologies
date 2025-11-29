export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Hassan",
    role: "CEO",
    company: "TechPak Solutions, Karachi",
    content:
      "Decra Technologies transformed our digital presence completely. Their team delivered our e-commerce platform ahead of schedule, and the quality exceeded all our expectations. Working with them has been a game-changer for our business.",
    rating: 5,
  },
  {
    id: "2",
    name: "Fatima Ali",
    role: "CTO",
    company: "Innovate Lahore",
    content:
      "The mobile application Decra built for us is outstanding. Their attention to detail and understanding of our requirements was impressive. They are truly professional and deliver world-class solutions right here in Pakistan.",
    rating: 5,
  },
  {
    id: "3",
    name: "Sarah Johnson",
    role: "Founder",
    company: "TechStart Inc., USA",
    content:
      "Decra Technologies helped us launch our SaaS platform successfully. Their cloud solutions expertise and modern development practices helped us scale quickly. Working with an international team has been seamless and productive.",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael Chen",
    role: "Director of Operations",
    company: "Digital Solutions, Singapore",
    content:
      "Working with Decra has been exceptional. They understand global market requirements while delivering international quality standards. Our healthcare mobile app is now serving thousands of users seamlessly across multiple countries.",
    rating: 5,
  },
  {
    id: "5",
    name: "Emma Williams",
    role: "Product Manager",
    company: "FinTech Global, UK",
    content:
      "Decra Technologies provided us with cutting-edge financial dashboard solutions. Their team is knowledgeable, responsive, and always goes the extra mile. They have become our trusted technology partner for all future projects.",
    rating: 5,
  },
];
