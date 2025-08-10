/**
 * JSON‑LD schema builders for SEO.
 *
 * These helpers produce lightweight JSON‑LD objects describing the
 * list of tools and individual products.  They are used in
 * `<Head>` via `dangerouslySetInnerHTML` because Next.js escapes
 * JSON automatically.
 */
function buildItemList(tools) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: tools.map((tool, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `https://fastspeed.ai/go/${tool.goSlug}`,
      name: tool.name,
    })),
  };
}

function buildProduct(tool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tool.name,
    description: tool.summary,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating,
      reviewCount: Math.round(tool.rating * 20),
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: tool.metrics.fromPrice || 0,
      availability: 'https://schema.org/InStock',
      url: `https://fastspeed.ai/go/${tool.goSlug}`,
    },
  };
}

module.exports = { buildItemList, buildProduct };