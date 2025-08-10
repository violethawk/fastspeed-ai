# FastSpeed AI v2

FastSpeed AI v2 is a static affiliate website built with **Next.js 14**, **React 18** and **Tailwind CSS**.  Its only purpose is to help you discover the fastest AI tools while maximising affiliate revenue and minimising maintenance overhead.  The ranking model is profit‑first: each tool’s earnings per click, conversion rate, recurring payouts and maintenance cost are weighted to arrive at a single score.  High profit tools surface to the top automatically – you simply update the numbers in a data file.

## Features

- **Static export** – the entire site is rendered at build time and can be deployed to any static host (the free Vercel plan works perfectly).
- **Profit ranking** – a small utility normalises each tool’s metrics and produces a single score.  You can tune the weights in `data/config.js` to emphasise EPC, conversion, recurrence or your own rating.
- **Cloaked affiliate links** – `/go/[slug]` pages redirect through your affiliate URLs and automatically append UTM parameters.  If a primary link is missing the first fallback is used.
- **Sticky mobile CTA** – on small screens a fixed call–to–action bar appears when the top tool’s card scrolls out of view.
- **Dismissible top bar promo** – highlight an editor’s pick or limited‑time offer across all pages.  Visitors can dismiss it and their choice is remembered in `localStorage`.
- **Easy maintenance** – add or remove tools by editing **only** the JSON‑like files in `data/`.  No React knowledge needed.  All display copy (hero text, CTA variations, promo messages) lives in `data/config.js`.
- **JSON‑LD** – pages include basic structured data (ItemList and Product/AggregateRating) to help search engines understand your content.

## Getting started

```bash
cd fastspeed-ai-v2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site during development.  When you’re ready to build the static site run:

```bash
npm run build
```

This command generates an `out/` directory containing HTML, CSS and JavaScript assets.  Deploy `out/` to Vercel or your favourite static host.

### Commands

- `npm run dev` – start a development server with hot reload.
- `npm run build` – build and statically export the site to `out/`.
- `npm run report:profit` – print a table of tools ranked by computed profit score along with their time cost.  Use this to verify that your weights and metrics make sense.
- `npm run check:links` – perform a quick sanity check of all primary and fallback URLs defined in `data/links.js`.  It issues a HEAD request and reports `ok`/`fail` per URL.

## Editing content in under 10 minutes

Routine operations – such as adding a new tool or tweaking copy – never require touching React code.  All editable data lives under the `data/` directory:

| File | Purpose |
|---|---|
| `data/tools.js` | List of tools with names, categories, ratings, summaries, bullet points, optional badges and priority overrides.  Each tool also defines a `metrics` object (EPC, conversion rate, recurrence multiplier, payout and monthly maintenance minutes) used to calculate the profit score. |
| `data/links.js` | Maps each `goSlug` to a primary affiliate link and a set of fallbacks.  The default UTM parameters are appended automatically. |
| `data/config.js` | Houses the weighting factors used by the ranking algorithm, feature flags (enable/disable sticky CTA, top bar promo and analytics) and any copy that appears in the UI (CTA variants, promo message). |

To **add or replace a tool**:

1. Open `data/tools.js` and add a new object to the exported array or update an existing one.  Use a unique `slug` and `goSlug` and fill in reasonable metric estimates.  Optionally assign a `badge` (e.g. “Best Value”) or `priority` (lower numbers appear ahead of the normal ranking).
2. Define the corresponding entry in `data/links.js` with a `primary` URL and zero or more `fallbacks`.  You do **not** need to add UTM parameters here – they are appended at runtime.
3. Run `npm run report:profit` to see where your new tool lands.  Adjust metrics or weights if necessary.

To **tweak the ranking model** edit the `weights` object in `data/config.js`.  The default weights favour high earnings per click with moderate emphasis on conversion, recurrence and payout, and penalise time‑consuming tools.  Ensure all weights sum to 1 (except the time penalty) to keep the score on a sensible scale.

## Profit model

The ranking algorithm lives in `lib/rank.js`.  For each metric we normalise its value across all tools to a 0–1 range.  Rating is mapped from 0–5 to 0–1 directly and time cost scales linearly with a hard cap at one hour per month.  The final profit score is computed as:

```
profit = w.epc⋅EPC_norm + w.cvr⋅CVR_norm + w.recur⋅RECUR_norm
       + w.payout⋅PAYOUT_norm + w.rating⋅RATING_norm
       − w.time_penalty⋅TIME_COST
```

Tools with a `priority` field are pulled to the top regardless of their score.  Set a numeric value (e.g. `priority: 1`) to force ordering.

## Deploying

1. Run `npm run build` to generate the static site into the `out/` directory.
2. Push the repository to GitHub or your preferred version control system.
3. Create a new project on [Vercel](https://vercel.com/) and point it at your repository.  Choose the **Static** output option when prompted.  Vercel will detect Next.js automatically and deploy the contents of `out/` on every push.

## Privacy and disclosures

FastSpeed AI participates in various affiliate programs.  When you click on a link to purchase a product, we may receive a commission at no extra cost to you.  This site does not collect or store any personal information.  If analytics are enabled in `data/config.js` a lightweight script from [Plausible](https://plausible.io/) will record anonymised page views and click events.  You can disable analytics entirely by setting `flags.analytics.enabled` to `false`.

---

*Built with ♥ to help you find the fastest AI tools while keeping maintenance to a minimum.*