/**
 * Affiliate link helper.
 *
 * Builds a URL with UTM parameters appended.  If the primary URL is
 * unavailable (e.g. empty string), the first fallback is used.  The
 * UTM parameters defined on the link entry are combined with any
 * overrides passed to the function.
 */
const links = require('../data/links');

function buildAffiliateUrl(slug, overrides = {}) {
  const entry = links[slug];
  if (!entry) return '#';
  const primary = entry.primary && entry.primary.length > 0 ? entry.primary : entry.fallbacks?.[0] || '#';
  const utm = Object.assign({}, entry.utm || {}, overrides.utm || {});
  try {
    const url = new URL(primary);
    Object.keys(utm).forEach((key) => {
      url.searchParams.set(`utm_${key}`, utm[key]);
    });
    return url.toString();
  } catch (err) {
    // In case primary is not a valid URL simply return it as is.
    return primary;
  }
}

module.exports = { buildAffiliateUrl };