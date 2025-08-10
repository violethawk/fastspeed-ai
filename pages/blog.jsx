import React from 'react';
import Head from 'next/head';

// A handful of evergreen posts.  Draft posts are hidden from the
// teaser grid and cause the page to be noindexed when rendered.
const posts = [
  {
    id: 1,
    title: 'How to Choose the Fastest AI Tool',
    excerpt: 'Learn the key factors to consider when selecting an AI tool for your workflow.',
    draft: false,
  },
  {
    id: 2,
    title: 'Maximising Affiliate Revenue with AI',
    excerpt: 'Strategies to boost your affiliate earnings through top AI tools.',
    draft: false,
  },
  {
    id: 3,
    title: 'The Future of AI Productivity',
    excerpt: 'Insights into how AI will transform productivity tools.',
    draft: true,
  },
];

const BlogPage = () => {
  const published = posts.filter((p) => !p.draft);
  const hasDraft = posts.some((p) => p.draft);
  return (
    <>
      <Head>
        <title>Blog — Fastest AI Tools</title>
        {hasDraft && <meta name="robots" content="noindex" />}
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {published.map((post) => (
            <div key={post.id} className="border p-4 rounded bg-white shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{post.excerpt}</p>
              <a href="#" className="text-blue-600 underline">Read more</a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default BlogPage;