import React from 'react';
import Head from 'next/head';
import tools from '@/data/tools';
import Leaderboard from '@/components/Leaderboard';
import EmailCapture from '@/components/EmailCapture';
import { buildItemList } from '@/lib/schema';

/**
 * Home page containing the hero, leaderboard and email capture.  It
 * embeds an ItemList JSON‑LD script describing the list of tools.  A
 * link in the hero scrolls smoothly to the leaderboard section.
 */
const HomePage = () => {
  const today = new Date();
  const monthYear = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const jsonLd = buildItemList(tools);
  return (
    <>
      <Head>
        <title>Find the Fastest AI Tools — Ranked & Reviewed</title>
        <meta
          name="description"
          content="Find the fastest AI tools ranked and reviewed. Profit‑optimised picks: faster tools, better payouts."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <main className="max-w-5xl mx-auto px-4">
        <section className="text-center py-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Find the Fastest AI Tools — Ranked &amp; Reviewed</h1>
          <p className="text-lg mb-4 text-gray-700">
            Updated Monthly. Profit‑optimised picks: faster tools, better payouts.
          </p>
          <a
            href="#leaderboard"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            See Top Tools
          </a>
          <div className="mt-2">
            <span className="inline-block bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
              {monthYear}
            </span>
          </div>
        </section>
        {/* Leaderboard and email capture */}
        <div id="leaderboard">
          <Leaderboard />
        </div>
        <EmailCapture />
      </main>
    </>
  );
};

export default HomePage;