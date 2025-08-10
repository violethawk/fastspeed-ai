// pages/index.jsx
import React from 'react';
import Head from 'next/head';
import tools from '@/data/tools';
import Leaderboard from '@/components/Leaderboard';
import EmailCapture from '@/components/EmailCapture';
import { buildItemList } from '@/lib/schema';
import config from '@/data/config'; // ← add this

export default function Home() {
  const itemListJson = buildItemList(tools);
  const monthYear = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      <Head>
        <title>FastSpeed AI — Find the Fastest AI Tools</title>
        <meta name="description" content="Expert-ranked, speed-first AI tools. Updated monthly." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-4">
        <section className="py-10 text-center">
          <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium mb-3">
            {monthYear}
          </div>

          {/* Use config copy here */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {config.copy.heroTitle}
          </h1>
          <p className="text-gray-700 mb-6">
            {config.copy.heroSub}
          </p>

          <a href="#leaderboard" className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg">
            {config.copy.ctaVariants[0]}
          </a>
        </section>

        <section id="leaderboard" className="py-4">
          <Leaderboard />
        </section>

        <section className="py-10">
          <EmailCapture />
        </section>
      </main>
    </>
  );
}
