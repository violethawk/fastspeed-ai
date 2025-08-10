/**
 * Lightweight analytics helper for Plausible.
 *
 * The `track` function does nothing unless analytics are enabled in
 * the configuration.  When enabled, it forwards events to
 * `window.plausible` if available.  Plausible’s script should be
 * included in `_document.jsx` when analytics are turned on.
 */
const config = require('../data/config');

function track(eventName, payload = {}) {
  if (!config.flags.analytics || !config.flags.analytics.enabled) return;
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(eventName, { props: payload });
  }
}

module.exports = { track };