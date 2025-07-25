/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable React strict mode for highlighting potential problems
  reactStrictMode: true,
  // Configure Next.js to output a static export. This allows deployment on
  // platforms like Vercel with minimal serverless functions and great
  // caching, since our application doesn't require dynamic rendering.
  output: 'export',
  // Enable trailing slashes so that exported pages resolve correctly when
  // statically hosted (e.g. `about/` instead of `about`).
  trailingSlash: true,
  // Disable image optimization to avoid runtime dependencies during export.
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;