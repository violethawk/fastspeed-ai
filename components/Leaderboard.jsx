import React, { useState } from 'react';
import tools from '@/data/tools';
import config from '@/data/config';
import { rankTools } from '@/lib/rank';
import CategoryTabs from './CategoryTabs';
import ComparisonTable from './ComparisonTable';
import ToolCard from './ToolCard';

/**
 * The Leaderboard component organises the ranking logic and display.
 * It renders a comparison table for the top three tools overall,
 * category tabs to filter the grid, and a responsive grid of tool
 * cards sorted by profit score.  Alternatives are computed on the
 * fly: for each card we show up to two other tools from the same
 * category.
 */
const Leaderboard = () => {
  const [category, setCategory] = useState('All');
  const ranked = rankTools(tools, config.weights);
  // Top 3 across all categories for the comparison table
  const top3 = ranked.slice(0, 3).map((entry) => entry.tool);
  // Categories list (unique)
  const categories = ['All', ...Array.from(new Set(tools.map((t) => t.category)))];
  // Tools filtered by selected category
  const filtered =
    category === 'All'
      ? ranked
      : ranked.filter((entry) => entry.tool.category === category);
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <ComparisonTable tools={top3} />
      <CategoryTabs categories={categories} selected={category} onSelect={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {filtered.map(({ tool }) => {
          // Pick up to two alternatives from the same category (excluding self)
          const alternatives = ranked
            .filter((entry) => entry.tool.category === tool.category && entry.tool.slug !== tool.slug)
            .slice(0, 2)
            .map((entry) => entry.tool);
          return <ToolCard key={tool.slug} tool={tool} alternatives={alternatives} />;
        })}
      </div>
    </section>
  );
};

export default Leaderboard;