import { Code, Smartphone, Cloud, Shield, BarChart, Zap } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  features: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: Code,
    features: ['React & Next.js', 'Responsive Design', 'SEO Optimized', 'Fast Performance'],
  },
  {
    id: '2',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Ready'],
  },
  {
    id: '3',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for your business.',
    icon: Cloud,
    features: ['AWS & Azure', 'Scalable Architecture', '24/7 Monitoring', 'Cost Optimized'],
  },
  {
    id: '4',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: Shield,
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Detection'],
  },
  {
    id: '5',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics.',
    icon: BarChart,
    features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Custom Dashboards'],
  },
  {
    id: '6',
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to modernize your business.',
    icon: Zap,
    features: ['Process Automation', 'Digital Strategy', 'Legacy Modernization', 'Change Management'],
  },
];

