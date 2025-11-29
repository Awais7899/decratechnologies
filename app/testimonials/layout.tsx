import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials - Decra Technologies',
  description: 'Read what our clients have to say about working with Decra Technologies.',
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

