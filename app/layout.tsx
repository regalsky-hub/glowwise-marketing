import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://glowwise.app'),
  title: {
    default: 'GlowWise: AI Wellness Coach | Hormones, Hair, Energy & Skin',
    template: '%s | GlowWise',
  },
  description:
    "GlowWise is your personal AI wellness coach. Track energy, sleep, stress, hormones, hair and skin — and get guidance built around your body, not someone else's.",
  keywords: [
    'AI wellness coach',
    'hormone health',
    'hair loss',
    'energy crashes',
    'brain fog',
    'skin health',
    'sleep tracking',
    'stress management',
  ],
  openGraph: {
    title: 'GlowWise: AI Wellness Coach',
    description:
      "Track energy, sleep, stress, hormones, hair and skin — and get guidance built around your body, not someone else's.",
    url: 'https://glowwise.app',
    siteName: 'GlowWise',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlowWise: AI Wellness Coach',
    description:
      "Track energy, sleep, stress, hormones, hair and skin — and get guidance built around your body, not someone else's.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
