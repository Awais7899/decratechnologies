import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Decra Technologies',
  description: 'Get in touch with Decra Technologies. We\'re here to help with your technology needs.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

