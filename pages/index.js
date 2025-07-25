import Head from 'next/head';
import { useState } from 'react';
import ToolCard from '@/components/ToolCard';
import tools from '@/data/tools';

export default function Home() {
  // Category filter state. When set to "All", all tools are shown.
  const [category, setCategory] = useState('All');
  const categories = [
    'All',
    'AI Writer',
    'AI Coder',
    'AI Chatbot',
    'AI API',
    'AI Productivity Tool'
  ];
  // Sort tools by rating descending and filter by selected category
  const sorted = [...tools].sort((a, b) => b.rating - a.rating);
  const filtered = category === 'All'
    ? sorted
    : sorted.filter((tool) => tool.category === category);
  // Limit to top 10
  const displayed = filtered.slice(0, 10);

  return (
    <>
      <Head>
        <title>fastspeed.ai – Find the Fastest AI Tools</title>
        <meta
          name="description"
          content="Discover the fastest AI tools across writing, coding, chat and more. Ranked, reviewed and ready to use."
        />
        <meta property="og:title" content="fastspeed.ai – Find the Fastest AI Tools" />
        <meta
          property="og:description"
          content="Discover the fastest AI tools across writing, coding, chat and more. Ranked, reviewed and ready to use."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fastspeed.ai" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-24 px-6 text-center bg-gradient-to-b from-white to-blue-50" id="hero">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Find the Fastest AI Tools in the World
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Ranked. Reviewed. Ready to use.
          </p>
          <a
            href="#leaderboard"
            className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Tools
          </a>
        </section>

        {/* Leaderboard Section */}
        <section className="py-16 px-6 bg-white" id="leaderboard">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top AI Tools</h2>
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    category === cat
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                  onClick={() => setCategory(cat)}
                >
                  {cat.replace('AI ', '')}
                </button>
              ))}
            </div>
            {/* Tool Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayed.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
              {displayed.length === 0 && (
                <p className="col-span-full text-center text-gray-600">
                  No tools found in this category.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Email Capture Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Get updates on the fastest new tools
            </h3>
            <p className="text-gray-600 mb-6">
              We’ll let you know when new AI tools hit the leaderboard. No spam, just speed.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-auto flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Notify Me
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8 px-6">
          <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-800">fastspeed.ai</p>
              <p>Your guide to the fastest AI tools on the web.</p>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <p>
                <strong>Affiliate disclaimer:</strong> Some links on this site are affiliate
                links. We may earn a commission when you click through and make a purchase
                at no additional cost to you.
              </p>
              <p>
                <a
                  href="mailto:contact@fastspeed.ai"
                  className="text-primary hover:underline"
                >
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}