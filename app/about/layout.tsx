import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Decra Technologies',
  description: 'Learn about Decra Technologies, our mission, vision, and the talented team behind our innovative solutions.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

