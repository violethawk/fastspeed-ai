import React from 'react';
import Stars from './Stars';

/**
 * Displays a single AI tool in a card format including its name, summary,
 * pros and cons, rating and an affiliate call‑to‑action button. The card
 * component is responsive and uses Tailwind classes for layout and
 * styling. Replace the affiliate link with a real URL when available.
 *
 * @param {Object} props
 * @param {Object} props.tool Tool metadata defined in data/tools.js
 */
export default function ToolCard({ tool }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-gray-200 p-6 shadow-sm transition hover:shadow-md">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          {tool.summary}
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-700 mb-1">Pros</h4>
            <ul className="list-disc list-inside space-y-1 text-green-700">
              {tool.pros.map((item, idx) => (
                <li key={`pro-${idx}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-1">Cons</h4>
            <ul className="list-disc list-inside space-y-1 text-red-700">
              {tool.cons.map((item, idx) => (
                <li key={`con-${idx}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Stars rating={tool.rating} />
          <span className="text-sm text-gray-600">{tool.rating.toFixed(1)}</span>
        </div>
        <a
          href={tool.affiliateLink}
          className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Try&nbsp;Now
        </a>
      </div>
    </div>
  );
}