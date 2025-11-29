export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'Decra Technologies transformed our business with their innovative solutions. Their team is professional, responsive, and truly understands our needs.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'InnovateCorp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Working with Decra has been an exceptional experience. They delivered our project on time and exceeded our expectations in every way.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Digital Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'The quality of work and attention to detail is outstanding. Decra Technologies helped us launch our product successfully and scale our operations.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Founder',
    company: 'StartupHub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Decra Technologies provided us with cutting-edge solutions that gave us a competitive edge. Highly recommended!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    role: 'Director of Operations',
    company: 'Global Enterprises',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    content: 'Their expertise in cloud solutions helped us modernize our infrastructure. The team is knowledgeable and always available to help.',
    rating: 5,
  },
];

