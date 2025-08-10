/**
 * List of monetizable AI tools.  Each entry describes a tool and
 * supplies metrics used by the ranking algorithm.
 *
 * Fields:
 *   slug      – unique identifier used internally and for filtering
 *   goSlug    – slug used to generate `/go/slug` redirect pages
 *   name      – display name
 *   category  – grouping for category tabs
 *   rating    – user rating out of 5 (floating point)
 *   summary   – one‑line summary shown on cards and in tables
 *   bullets   – array of three benefit statements
 *   badge     – optional badge label (“Best Value”, “Editor’s Pick”, …)
 *   priority  – optional numeric override; lower numbers rank ahead of
 *               the normal computed score
 *   metrics   – object containing EPC (earnings per click), CVR
 *               (conversion rate), recur (recurring multiplier), payout
 *               (commission percentage), and time_min (monthly
 *               maintenance time in minutes)
 */
const tools = [
  {
    slug: 'jasper',
    goSlug: 'jasper',
    name: 'Jasper',
    category: 'AI Writer',
    rating: 4.7,
    summary: 'Fast AI writing assistant for marketing copy, blogs and more.',
    bullets: [
      'Speedy content creation',
      'High‑quality templates',
      'Multi‑language support',
    ],
    badge: 'Best Overall',
    priority: 1,
    metrics: {
      epc: 0.9,
      cvr: 0.3,
      recur: 1.5,
      payout: 0.3,
      time_min: 30,
    },
  },
  {
    slug: 'copy-ai',
    goSlug: 'copy-ai',
    name: 'Copy.ai',
    category: 'AI Writer',
    rating: 4.5,
    summary: 'Versatile AI writer for social posts, blogs and ads.',
    bullets: [
      '50+ content types',
      'User‑friendly interface',
      'Affordable plans',
    ],
    badge: 'Best Value',
    metrics: {
      epc: 0.7,
      cvr: 0.25,
      recur: 1.2,
      payout: 0.25,
      time_min: 20,
    },
  },
  {
    slug: 'writesonic',
    goSlug: 'writesonic',
    name: 'Writesonic',
    category: 'AI Writer',
    rating: 4.2,
    summary: 'AI‑powered writing assistant for blogs, ads and more.',
    bullets: [
      'Templates library',
      'Multi‑language',
      'Affordable',
    ],
    metrics: {
      epc: 0.6,
      cvr: 0.2,
      recur: 1.1,
      payout: 0.2,
      time_min: 15,
    },
  },
  {
    slug: 'replit',
    goSlug: 'replit',
    name: 'Replit',
    category: 'AI Coder',
    rating: 4.4,
    summary: 'Collaborative coding platform with AI features.',
    bullets: [
      'Real‑time collaboration',
      'AI code completion',
      'Easy deployments',
    ],
    metrics: {
      epc: 0.5,
      cvr: 0.15,
      recur: 1.3,
      payout: 0.25,
      time_min: 20,
    },
  },
  {
    slug: 'pictory',
    goSlug: 'pictory',
    name: 'Pictory',
    category: 'AI Video',
    rating: 4.3,
    summary: 'Turn scripts into video content quickly.',
    bullets: [
      'Auto video creation',
      'Stock footage included',
      'Easy editing',
    ],
    badge: 'Fastest in Tests',
    metrics: {
      epc: 0.55,
      cvr: 0.18,
      recur: 1.2,
      payout: 0.28,
      time_min: 25,
    },
  },
  {
    slug: 'runway',
    goSlug: 'runway',
    name: 'Runway',
    category: 'AI Video',
    rating: 4.0,
    summary: 'Generative AI platform for video editing and effects.',
    bullets: [
      'Advanced AI tools',
      'Real‑time collaboration',
      'Growing asset library',
    ],
    metrics: {
      epc: 0.4,
      cvr: 0.15,
      recur: 1.1,
      payout: 0.2,
      time_min: 30,
    },
  },
  {
    slug: 'durable',
    goSlug: 'durable',
    name: 'Durable',
    category: 'AI Productivity',
    rating: 4.1,
    summary: 'AI website builder for small businesses.',
    bullets: [
      'One‑click site generation',
      'Integrated CRM',
      'Affordable plans',
    ],
    badge: 'Editor’s Pick',
    metrics: {
      epc: 0.65,
      cvr: 0.2,
      recur: 1.4,
      payout: 0.3,
      time_min: 40,
    },
  },
  {
    slug: 'scalenut',
    goSlug: 'scalenut',
    name: 'Scalenut',
    category: 'AI SEO',
    rating: 4.2,
    summary: 'AI‑driven SEO and content research platform.',
    bullets: [
      'Topic clustering',
      'SEO research',
      'AI writing assistant',
    ],
    metrics: {
      epc: 0.6,
      cvr: 0.22,
      recur: 1.3,
      payout: 0.25,
      time_min: 35,
    },
  },
];

module.exports = tools;