import type { Metadata } from 'next';
import LegalLayout from '../../components/LegalLayout';
import { journalPosts } from '@/lib/journal-posts';

const post = journalPosts.find((p) => p.slug === 'signs-of-hormonal-imbalance')!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: {
    canonical: `https://glowwise.app/journal/${post.slug}`,
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.publishedISO,
  dateModified: post.publishedISO,
  author: {
    '@type': 'Organization',
    name: 'GlowWise',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GlowWise',
    url: 'https://glowwise.app',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://glowwise.app/journal/${post.slug}`,
  },
};

export default function SignsOfHormonalImbalance() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <LegalLayout eyebrow={`Journal · ${post.category}`} title={post.title} lastUpdated={post.publishedDate}>
        <p>
          Fatigue that doesn't lift with sleep. A mood that swings for no obvious reason. Skin that breaks out on
          a schedule. Hair that's suddenly shedding more than it used to. On their own, each of these can feel
          like a small, disconnected annoyance — something to just push through. Together, they're often a
          pattern, and that pattern is frequently hormonal.
        </p>

        <div className="info-box">
          <strong>The short version:</strong> hormonal imbalance doesn't usually announce itself with one clear
          symptom. It shows up as a cluster of smaller shifts — in energy, mood, skin, hair, sleep, and
          digestion — that are easy to dismiss individually but add up to something worth paying attention to.
        </div>

        <h2>What &quot;hormonal imbalance&quot; actually means</h2>
        <p>
          Hormones are chemical messengers — produced by glands like the thyroid, adrenals, and ovaries or
          testes — that regulate almost everything your body does: metabolism, mood, sleep, stress response,
          reproductive cycles, and more. When one or more of these hormones is produced in too high or too low
          a quantity, or when the timing of their normal rise and fall gets disrupted, the downstream effects
          can touch nearly every system in your body. That's why hormonal symptoms rarely stay contained to one
          area — a shift in cortisol can affect sleep, which affects mood, which affects appetite, and so on.
        </p>

        <h2>Common signs worth paying attention to</h2>
        <p>
          These are some of the most frequently reported signs of hormonal imbalance. Having one occasionally
          is normal life. Noticing several of them together, recurring, or intensifying over time is what's
          worth exploring further.
        </p>

        <h3>Energy and fatigue</h3>
        <ul>
          <li>Persistent tiredness that doesn't improve with a full night's sleep</li>
          <li>A sharp energy crash at a specific time of day, most often mid-afternoon</li>
          <li>Feeling &quot;wired but tired&quot; — unable to wind down despite exhaustion</li>
        </ul>

        <h3>Mood and mental clarity</h3>
        <ul>
          <li>Mood swings that feel disproportionate to what's actually happening</li>
          <li>Increased anxiety or irritability, particularly around certain points in a monthly cycle</li>
          <li>Brain fog — difficulty concentrating, or losing your train of thought more than usual</li>
        </ul>

        <h3>Skin and hair</h3>
        <ul>
          <li>Breakouts that cluster around the same phase of your cycle each month</li>
          <li>Increased hair shedding, often noticed 2–3 months after a period of stress or illness</li>
          <li>Changes in skin oiliness or dryness that don't match the season or your usual routine</li>
        </ul>

        <h3>Sleep and body regulation</h3>
        <ul>
          <li>Difficulty falling or staying asleep, especially if this is a new pattern</li>
          <li>Night sweats or feeling too warm at night without an obvious cause</li>
          <li>Unexplained changes in weight, appetite, or digestion</li>
        </ul>

        <h2>Why these symptoms are so easy to miss</h2>
        <p>
          Most of these signs develop gradually, and each one in isolation has a dozen possible explanations —
          a bad week, a poor night's sleep, stress at work. That's precisely what makes hormonal patterns hard
          to self-diagnose: the picture only becomes clear when you look at several signals together, over
          time, rather than any single symptom on its own. A breakout the week before your period might seem
          unremarkable in the moment; noticing it happens nearly every month is a different kind of information
          entirely.
        </p>

        <h2>What tends to influence hormonal balance</h2>
        <p>
          Hormonal fluctuation is a normal, expected part of the menstrual cycle, aging, and daily life —
          not something inherently &quot;wrong.&quot; That said, a number of everyday factors can push things
          further out of balance than they'd otherwise be:
        </p>
        <ul>
          <li><strong>Sleep quality and consistency</strong> — irregular sleep disrupts cortisol and melatonin rhythms</li>
          <li><strong>Chronic stress</strong> — sustained high cortisol can suppress other hormone production</li>
          <li><strong>Diet and blood sugar stability</strong> — frequent blood sugar spikes affect insulin, which interacts with other hormones</li>
          <li><strong>Life stage transitions</strong> — puberty, pregnancy, postpartum, and perimenopause all involve significant hormonal shifts</li>
          <li><strong>Underlying conditions</strong> — thyroid disorders and PCOS are common, often under-diagnosed causes of ongoing symptoms</li>
        </ul>

        <h2>Tracking the pattern is the useful part</h2>
        <p>
          Because hormonal symptoms are cumulative and cyclical rather than sudden, the single most useful
          thing you can do — before or alongside seeing a doctor — is start noticing the pattern rather than
          just the individual bad days. When did the fatigue start? Does the skin change line up with a
          particular week of your cycle? Did the hair shedding follow a stressful period a few months back?
        </p>
        <p>
          This is exactly the gap GlowWise was built to close. Rather than treating each symptom as a separate,
          disconnected complaint, GlowWise's AI Coach learns from your daily check-ins — energy, sleep, stress,
          skin, hair — and helps surface the patterns connecting them, so you're not left trying to piece it
          together from memory alone.
        </p>

        <h2>When to see a doctor</h2>
        <p>
          Tracking your own patterns is genuinely useful, but it isn't a substitute for medical care. It's
          worth booking a GP appointment if symptoms are persistent, worsening, or interfering with daily life
          — particularly for significant changes in your menstrual cycle, sudden or severe hair loss, unexplained
          weight changes, or symptoms alongside a family history of thyroid or metabolic conditions. A doctor
          can run bloodwork to check hormone levels directly, which self-tracking alone can't replace.
        </p>

        <div className="info-box">
          Want help spotting your own patterns? <a href="https://glow-wise-kappa.vercel.app/signup">Start free with GlowWise</a> — two questions a
          day to your AI Coach, no credit card required.
        </div>
      </LegalLayout>
    </>
  );
}
