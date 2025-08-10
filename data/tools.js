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
// data/tools.js
// Public-facing fields (trial, priceFrom, bullets, rating, etc.) are shown in UI.
// Monetization metrics (epc, cvr, recur, payout, time_min) are private and used only by /lib/rank.js.
const tools = [
  {
    slug: 'jasper',
    goSlug: 'jasper',
    name: 'Jasper',
    category: 'AI Writer',
    rating: 4.7,
    summary: 'Fast, polished AI writing for teams.',
    bullets: ['Very fast outputs', 'Great templates', 'Team workflows'],
    trial: '7-day',
    priceFrom: 39,
    badge: 'Best Overall',
    alternatives: ['copy-ai', 'writesonic'],
    metrics: { epc: 0.9, cvr: 0.30, recur: 1.5, payout: 0.30, time_min: 30 },
  },
  {
    slug: 'copy-ai',
    goSlug: 'copy-ai',
    name: 'Copy.ai',
    category: 'AI Writer',
    rating: 4.5,
    summary: 'Quick marketing copy with solid brand voice tools.',
    bullets: ['Strong for marketers', 'Brand voice', 'Good templates'],
    trial: 'Free plan',
    priceFrom: 49,
    badge: 'Editor’s Pick',
    alternatives: ['jasper', 'writesonic'],
    metrics: { epc: 0.7, cvr: 0.25, recur: 1.2, payout: 0.25, time_min: 20 },
  },
  {
    slug: 'writesonic',
    goSlug: 'writesonic',
    name: 'Writesonic',
    category: 'AI Writer',
    rating: 4.2,
    summary: 'Budget-friendly writing with decent quality.',
    bullets: ['Affordable', 'SEO modes', 'Multiple tones'],
    trial: 'Free plan',
    priceFrom: 16,
    badge: 'Best Value',
    alternatives: ['jasper', 'copy-ai'],
    metrics: { epc: 0.6, cvr: 0.20, recur: 1.1, payout: 0.20, time_min: 15 },
  },
  {
    slug: 'replit',
    goSlug: 'replit',
    name: 'Replit',
    category: 'AI Coder',
    rating: 4.4,
    summary: 'In-browser IDE with AI assistance and instant deploys.',
    bullets: ['Quick prototypes', 'AI code help', 'One-click deploys'],
    trial: 'Free plan',
    priceFrom: 0,
    alternatives: ['jasper', 'durable'],
    metrics: { epc: 0.5, cvr: 0.15, recur: 1.3, payout: 0.25, time_min: 20 },
  },
  {
    slug: 'pictory',
    goSlug: 'pictory',
    name: 'Pictory',
    category: 'AI Video',
    rating: 4.3,
    summary: 'Turn scripts or articles into short videos quickly.',
    bullets: ['Fast video drafts', 'Auto captions', 'Stock assets'],
    trial: 'Free trial',
    priceFrom: 19,
    alternatives: ['runway'],
    metrics: { epc: 0.55, cvr: 0.18, recur: 1.2, payout: 0.28, time_min: 25 },
  },
  {
    slug: 'runway',
    goSlug: 'runway',
    name: 'Runway',
    category: 'AI Video',
    rating: 4.0,
    summary: 'Advanced AI video generation and editing.',
    bullets: ['Powerful gen-AI', 'Green screen', 'Motion tools'],
    trial: 'Free plan',
    priceFrom: 15,
    badge: 'Fastest in Tests',
    alternatives: ['pictory'],
    metrics: { epc: 0.4, cvr: 0.15, recur: 1.1, payout: 0.20, time_min: 30 },
  },
  {
    slug: 'durable',
    goSlug: 'durable',
    name: 'Durable',
    category: 'AI Productivity',
    rating: 4.1,
    summary: 'Launch a small business website in minutes.',
    bullets: ['Instant sites', 'AI copy', 'Easy edits'],
    trial: 'Free plan',
    priceFrom: 15,
    alternatives: ['replit'],
    metrics: { epc: 0.65, cvr: 0.20, recur: 1.4, payout: 0.30, time_min: 40 },
  },
  {
    slug: 'scalenut',
    goSlug: 'scalenut',
    name: 'Scalenut',
    category: 'AI SEO',
    rating: 4.2,
    summary: 'Plan and write SEO content with AI briefs.',
    bullets: ['SEO outlines', 'Keyword clusters', 'Optimizer'],
    trial: '7-day',
    priceFrom: 23,
    alternatives: ['writesonic', 'jasper'],
    metrics: { epc: 0.6, cvr: 0.22, recur: 1.3, payout: 0.25, time_min: 35 },
  },
];

export default tools;
