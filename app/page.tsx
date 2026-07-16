import type { Metadata } from 'next';
import LandingClient from './components/LandingClient';
import { faqs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'GlowWise: AI Wellness Coach | Hormones, Hair, Energy & Skin',
  description:
    "GlowWise is your personal AI wellness coach. Track energy, sleep, stress, hormones, hair and skin — and get guidance built around your body, not someone else's.",
  alternates: {
    canonical: 'https://glowwise.app',
  },
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'GlowWise',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  url: 'https://glowwise.app',
  description:
    "GlowWise is an AI wellness coach that learns your patterns across energy, sleep, hormones, hair and skin to give guidance built around your body.",
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'GBP' },
    { '@type': 'Offer', name: 'Wellness Coach', price: '4.99', priceCurrency: 'GBP', billingIncrement: 'Monthly' },
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GlowWise',
  url: 'https://glowwise.app',
  description: 'Privacy-first AI wellness coaching for hormones, hair, energy and skin.',
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <LandingClient />
    </>
  );
}
