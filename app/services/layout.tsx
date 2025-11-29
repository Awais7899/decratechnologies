import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Decra Technologies',
  description: 'Comprehensive technology services including web development, mobile apps, cloud solutions, cybersecurity, and more.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

