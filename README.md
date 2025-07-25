# fastspeed.ai

fastspeed.ai is a modern, one‑page affiliate website that helps visitors
discover the fastest AI tools across multiple categories. The site is built
with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) and
is optimized for a static export so it can be deployed easily on
platforms like Vercel or any static hosting provider.

## Features

* **Hero section** with a clear headline, subheadline and call‑to‑action.
* **Leaderboard** of top AI tools, including category filtering, pros/cons
  lists, star ratings and affiliate CTA buttons.
* Optional **email capture** form to collect visitor emails for future
  updates.
* **Responsive design** that looks great on mobile and desktop.
* **Easy extensibility** via a simple data file (`data/tools.js`) so new
  tools can be added or removed without touching the core UI.
* **SEO friendly** metadata and Open Graph tags.

## Development

After cloning the repository, install dependencies and run the development
server:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser to see the site.

To build and export a static version of the site:

```bash
npm run build
```

The exported files will be placed in the `out/` directory and can be
deployed to Vercel, Netlify or any static hosting service.

## Adding Tools

All tool information lives in `data/tools.js`. To add a new tool:

1. Create a new object with the same fields as the existing entries.
2. Append it to the array. Categories should match one of the existing
   category filters or you can add a new filter by editing
   `pages/index.js`.
3. Update the `affiliateLink` with your real affiliate URL.

## License

This project is provided as‑is without any warranty. Feel free to modify
and adapt it for your own use.