export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  publishedISO: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'signs-of-hormonal-imbalance',
    title: 'Signs of Hormonal Imbalance: What Your Body Might Be Telling You',
    excerpt:
      "Fatigue, mood swings, breakouts, hair changes — hormonal imbalance shows up differently for everyone. Here's how to start recognising the patterns.",
    category: 'Hormones',
    readTime: '7 min read',
    publishedDate: '17 July 2026',
    publishedISO: '2026-07-17',
  },
];
