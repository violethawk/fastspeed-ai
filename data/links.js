/**
 * Affiliate link definitions.
 *
 * Each key corresponds to the `goSlug` of a tool.  The `primary` URL
 * should be your affiliate link.  If the `primary` link is missing or
 * temporarily down, the first URL in `fallbacks` will be used.  UTM
 * parameters are appended automatically via `lib/link.js` and should
 * not be added here.
 */
const links = {
  jasper: {
    primary: 'https://www.jasper.ai',
    fallbacks: ['https://jasper.ai'],
    utm: {
      source: 'fastspeed.ai',
      medium: 'affiliate',
      campaign: 'leaderboard',
    },
  },
  'copy-ai': {
    primary: 'https://www.copy.ai',
    fallbacks: ['https://copy.ai'],
    utm: {
      source: 'fastspeed.ai',
      medium: 'affiliate',
      campaign: 'leaderboard',
    },
  },
  writesonic: {
    primary: 'https://writesonic.com',
    fallbacks: ['https://www.writesonic.com'],
    utm: {
      source: 'fastspeed.ai',
      medium: 'affiliate',
      campaign: 'leaderboard',
    },
  },
  replit: {
    primary: 'https://replit.com',
    fallbacks: ['https://www.replit.com'],
    utm: {
      source: 'fastspeed.ai',
      medium: 'affiliate',
      campaign: 'leaderboard',
    },
  },
  pictory: {
    primary: 'https://pictory.ai',
    fallbacks: ['https://www.pictory.ai'],
    utm: {
      source: 'fastspeed.ai',
      medium: 'affiliate',
      campaign: 'leaderboard',
    },
  },
  runway: {
    primary: 'https://runwayml.com',
    fallbacks: ['https://www.runwayml.com'],
    utm: {
      source: 'fastspeed.ai',
      medium: 'affiliate',
      campaign: 'leaderboard',
    },
  },
  durable: {
    primary: 'https://durable.co',
    fallbacks: ['https://www.durable.co'],
    utm: {
      source: 'fastspeed.ai',
      medium: 'affiliate',
      campaign: 'leaderboard',
    },
  },
  scalenut: {
    primary: 'https://scalenut.com',
    fallbacks: ['https://www.scalenut.com'],
    utm: {
      source: 'fastspeed.ai',
      medium: 'affiliate',
      campaign: 'leaderboard',
    },
  },
};

module.exports = links;