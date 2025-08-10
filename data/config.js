/**
 * Configuration values used by the ranking model and feature flags.
 *
 * Update the `weights` object to influence the profit score.  The
 * `flags` object enables or disables optional UI components like
 * sticky CTAs or analytics.  The `copy` object centralises any
 * marketing copy that appears in the UI so you can change it without
 * touching the React components.
 */
// data/config.js
// Centralised config for weights, feature flags, and public-facing copy.

module.exports = {
  // Weights for the profit ranking algorithm (private use only)
  weights: {
    epc: 0.45,
    cvr: 0.2,
    recur: 0.2,
    payout: 0.1,
    rating: 0.05,
    time_penalty: 0.5
  },

  // Feature flags for optional UI elements and analytics
  flags: {
    stickyCTA: true,
    topBarPromo: true,
    analytics: {
      enabled: false, // set to true to enable Plausible snippet in _document.jsx
      plausibleDomain: "fastspeed.ai"
    }
  },

  // All copy that appears in the UI
  copy: {
    // Hero section
    heroTitle: "Find the Fastest AI Tools — Ranked & Reviewed",
    heroSub: "Updated Monthly. Expert-ranked picks: faster tools, better results.",

    // CTA button text variants (randomised per render)
    ctaVariants: ["Try Now →", "Get Started →"],

    // Top bar promo message (can reference a current high-performer)
    topPromoMsg: "Editor’s Pick: Jasper — fastest writer in our tests"
  }
};
