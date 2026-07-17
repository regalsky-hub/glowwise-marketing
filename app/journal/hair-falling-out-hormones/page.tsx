import type { Metadata } from 'next';
import LegalLayout from '../../components/LegalLayout';
import { journalPosts } from '@/lib/journal-posts';

const post = journalPosts.find((p) => p.slug === 'why-is-my-hair-falling-out-hormones')!;

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

export default function HairFallingOutHormones() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <LegalLayout eyebrow={`Journal · ${post.category}`} title={post.title} lastUpdated={post.publishedDate}>
        <p>
          Finding more hair than usual in the shower drain, on your pillow, or caught in your brush is one of
          the more unsettling things a body can do — it feels sudden, and it's easy to assume something is
          seriously wrong. Often, though, the explanation is a hormonal one, and it's more common — and more
          delayed — than most people realise.
        </p>

        <div className="info-box">
          <strong>The short version:</strong> a lot of hair shedding isn't happening for the reason you'd
          expect. Hair loss linked to stress, illness, or hormonal shifts typically shows up 2–3 months
          <em> after</em> the trigger, not during it — which is exactly why it feels so hard to explain.
        </div>

        <h2>The delay is the key detail</h2>
        <p>
          Each hair on your head cycles through phases: a long growth phase, a short transition phase, and a
          resting phase before it eventually sheds. Under normal circumstances, this is staggered across your
          scalp so shedding is barely noticeable. A significant stressor — physical or hormonal — can push an
          unusually large number of hairs into that resting phase all at once. Those hairs don't fall out
          immediately; they sit for roughly two to three months before shedding together. This is called
          telogen effluvium, and it's the most common reason for a sudden, noticeable increase in hair loss
          that isn't related to genetics.
        </p>
        <p>
          That delay is exactly why the shedding can feel so disconnected from any obvious cause — the actual
          trigger, whatever it was, is usually a couple of months in the past by the time you notice hair in
          the drain.
        </p>

        <h2>Common hormonal triggers</h2>
        <ul>
          <li>
            <strong>Postpartum hair loss</strong> — a well-documented drop in estrogen after childbirth, often
            noticed around three months postpartum
          </li>
          <li>
            <strong>Thyroid imbalance</strong> — both an underactive and overactive thyroid can cause diffuse
            shedding
          </li>
          <li>
            <strong>Stopping or starting hormonal birth control</strong> — the shift in hormone levels can
            trigger a shedding phase
          </li>
          <li>
            <strong>Perimenopause and menopause</strong> — declining estrogen and progesterone can affect hair
            density over time
          </li>
          <li>
            <strong>PCOS</strong> — often associated with androgen-related thinning, particularly along the
            part line and crown
          </li>
          <li>
            <strong>Chronic stress</strong> — sustained high cortisol is one of the most common non-hormonal
            (but hormone-adjacent) triggers
          </li>
        </ul>

        <h2>How to tell if it's a hormonal pattern</h2>
        <p>
          A few characteristics tend to distinguish hormonally-driven shedding from other causes of hair loss:
        </p>
        <ul>
          <li>It's diffuse — spread across the whole scalp — rather than in a specific patch</li>
          <li>It's a change from your usual baseline, not a lifelong pattern</li>
          <li>You can often trace it back to a stressful, illness, or hormonally significant period roughly 2–3 months earlier</li>
          <li>It tends to be temporary — most telogen effluvium resolves within 6–12 months once the underlying trigger is addressed</li>
        </ul>
        <p>
          This is different from androgenetic alopecia (pattern hair loss), which develops gradually over
          years, tends to follow a specific pattern (crown or part-line thinning), and is genetic rather than
          triggered by a single event.
        </p>

        <h2>Why the two- to three-month gap makes self-diagnosis so hard</h2>
        <p>
          If you're trying to figure out what caused a shedding phase, the natural instinct is to look at what's
          happening <em>right now</em> — but the more useful question is usually &quot;what was going on with my
          sleep, stress, or health about three months ago?&quot; Without a record of that period, it's genuinely
          difficult to reconstruct. This is exactly the kind of gap that daily tracking closes — a log of stress,
          sleep, and any health changes gives you something to look back on when a delayed symptom like this
          shows up.
        </p>
        <p>
          GlowWise's daily check-ins and photo tracking are built for exactly this — not just recording how you
          feel today, but building a timeline your AI Coach can help you look back through when something like
          hair shedding shows up weeks or months later.
        </p>

        <h2>When to see a doctor</h2>
        <p>
          Most telogen effluvium resolves on its own once the trigger passes. That said, it's worth seeing a
          doctor if shedding is severe, doesn't improve after several months, is accompanied by scalp itching,
          redness, or visible bald patches, or if you suspect an underlying condition like a thyroid disorder
          or PCOS — these are worth diagnosing properly with bloodwork rather than guessing from symptoms alone.
        </p>

        <div className="info-box">
          Want to build a timeline you can actually look back on? <a href="https://glow-wise-kappa.vercel.app/signup">Start free with GlowWise</a> — daily
          check-ins and optional photo tracking, two questions a day to your AI Coach, no credit card required.
        </div>
      </LegalLayout>
    </>
  );
}
