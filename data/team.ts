export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    bio: 'Visionary leader with 15+ years of experience in technology and business strategy.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'john@decratech.com',
    },
  },
  {
    id: '2',
    name: 'Maria Garcia',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
    bio: 'Expert in cloud architecture and scalable systems with a passion for innovation.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'maria@decratech.com',
    },
  },
  {
    id: '3',
    name: 'Robert Lee',
    role: 'Head of Development',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'Full-stack developer specializing in modern web technologies and best practices.',
    social: {
      linkedin: '#',
      email: 'robert@decratech.com',
    },
  },
  {
    id: '4',
    name: 'Jennifer Park',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    bio: 'Creative designer focused on user experience and creating beautiful, functional interfaces.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'jennifer@decratech.com',
    },
  },
];

