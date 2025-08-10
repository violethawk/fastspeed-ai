const path = require('path');

/**
 * Next.js configuration file.
 *
 * We opt into React strict mode for better runtime checks and
 * static export output. Images are left unoptimized so they can be
 * served directly without invoking any external services. No rewrites
 * or redirects are required for this site; all affiliate cloaking is
 * handled client side via dynamic pages under `/go/[slug]`.
 */
module.exports = {
  reactStrictMode: true,
  // Export the site to static HTML in the `out` directory during build.
  output: 'export',
  // Disable Next.js image optimization. We serve all images from the
  // `public/` folder and rely on manual compression to stay under
  // the 120&nbsp;KB budget per file.
  images: {
    unoptimized: true,
  },
};