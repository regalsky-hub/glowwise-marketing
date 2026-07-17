import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '../components/LegalLayout';
import { journalPosts } from '@/lib/journal-posts';

export const metadata: Metadata = {
  title: 'Journal | GlowWise',
  description:
    'Hormone-literate guidance on energy, hair, skin, and the patterns behind how you feel — from the GlowWise team.',
  alternates: {
    canonical: 'https://glowwise.app/journal',
  },
};

export default function Journal() {
  return (
    <LegalLayout eyebrow="Journal" title={<>Understand <em style={{ fontStyle: 'italic', color: '#6B9E7F' }}>your patterns.</em></>}>
      <p style={{ marginBottom: '32px' }}>
        Hormone-literate guidance on energy, hair, skin, and the patterns behind how you feel — written to help you connect the dots your body's already showing you.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {journalPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            style={{
              display: 'block',
              textDecoration: 'none',
              padding: '24px 0',
              borderBottom: '1px solid rgba(168, 153, 104, 0.2)',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#6B9E7F',
              }}>
                {post.category}
              </span>
              <span style={{ color: '#A89968', fontSize: '12px' }}>·</span>
              <span style={{ fontSize: '12px', color: '#A89968' }}>{post.readTime}</span>
            </div>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '22px',
              fontWeight: 500,
              color: '#3D4A52',
              marginBottom: '8px',
              letterSpacing: '-0.01em',
            }}>
              {post.title}
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#5A6770' }}>
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </LegalLayout>
  );
}
