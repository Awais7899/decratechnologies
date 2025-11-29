import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Decra Technologies',
  description: 'Explore our portfolio of successful projects and see how we help businesses achieve their goals.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

