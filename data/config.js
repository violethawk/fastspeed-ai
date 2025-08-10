/**
 * Configuration values used by the ranking model and feature flags.
 *
 * Update the `weights` object to influence the profit score.  The
 * `flags` object enables or disables optional UI components like
 * sticky CTAs or analytics.  The `copy` object centralises any
 * marketing copy that appears in the UI so you can change it without
 * touching the React components.
 */
module.exports = {
  // Weights for the profit score.  All weights except
  // `time_penalty` should sum to 1 for predictable scaling.
  weights: {
    epc: 0.45,
    cvr: 0.2,
    recur: 0.2,
    payout: 0.1,
    rating: 0.05,
    time_penalty: 0.5,
  },
  // Flags to toggle certain pieces of UI and analytics.
  flags: {
    stickyCTA: true,
    topBarPromo: true,
    analytics: {
      enabled: false,
      plausibleDomain: 'fastspeed.ai',
    },
  },
  // Centralised copy.  CTA variants rotate automatically when used in
  // multiple places.  The top promo message is shown in the
  // dismissible banner at the top of the page.
  copy: {
    heroTitle: "Find the Fastest AI Tools — Ranked & Reviewed",
    heroSub: "Updated Monthly. Expert-ranked picks: faster tools, better results.",
    ctaVariants: ["Try Now →", "Get Started →"],
    topPromoMsg: "Editor’s Pick: Jasper — fastest writer in our tests"
  },
};