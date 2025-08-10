import React from 'react';
import Stars from './Stars';
import Badge from './Badge';
import config from '@/data/config';
import { track } from '@/lib/analytics';

/**
 * A card summarising a single tool.  Shows the name, summary,
 * a handful of bullet points, rating stars, an optional badge and a
 * call–to–action button.  An optional list of alternatives appears
 * under the button to encourage clicks on monetised competitors.
 *
 * @param {Object} props
 * @param {Object} props.tool The tool data
 * @param {Array} props.alternatives Other tools to suggest as alternatives
 */
const ToolCard = ({ tool, alternatives = [] }) => {
  // Pick the first CTA variant to keep the UI simple.  You can rotate
  // through multiple variants if desired by indexing into the array
  // with a random or sequential counter.
  const ctaText = config.copy.ctaVariants[0] || 'Try Now';

  const handleClick = () => {
    track('cta_click', { tool: tool.slug, position: 'card' });
  };

  return (
    <div className="p-4 border rounded-lg flex flex-col justify-between bg-white shadow-sm">
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold leading-tight mr-2">{tool.name}</h3>
          {tool.badge && <Badge label={tool.badge} />}
        </div>
        <p className="text-sm text-gray-700 mb-2 leading-snug">{tool.summary}</p>
        <ul className="mt-1 space-y-1">
          {tool.bullets.map((b, idx) => (
            <li key={idx} className="text-sm text-gray-600">
              • {b}
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <Stars rating={tool.rating} />
        </div>
      </div>
      <div className="mt-4">
        <a
          id={`${tool.slug}-cta`}
          href={`/go/${tool.goSlug}`}
          target="_blank"
          rel="nofollow sponsored noopener"
          onClick={handleClick}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {ctaText}
        </a>
        {alternatives.length > 0 && (
          <div className="mt-2 text-xs text-gray-500">
            Alternatives:{' '}
            {alternatives.map((alt, idx) => (
              <span key={alt.slug}>
                <a
                  href={`/go/${alt.goSlug}`}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="underline hover:text-blue-700"
                >
                  {alt.name}
                </a>
                {idx < alternatives.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolCard;