import React, { useEffect, useState } from 'react';
import config from '@/data/config';
import { track } from '@/lib/analytics';

/**
 * Top bar promotional banner.  Displays a short promotional message
 * defined in `config.copy.topPromoMsg` and a link to the best tool.  A
 * dismiss button hides the banner and records the preference in
 * `localStorage` so it stays hidden on subsequent visits.  The bar is
 * disabled entirely if `flags.topBarPromo` is false.
 *
 * @param {Object} props
 * @param {Object} props.tool The top ranked tool to promote
 */
const TopBarPromo = ({ tool }) => {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (!config.flags.topBarPromo) return;
    const stored = window.localStorage.getItem('topBarPromoDismissed');
    setDismissed(stored === 'true');
  }, []);

  const handleDismiss = () => {
    window.localStorage.setItem('topBarPromoDismissed', 'true');
    setDismissed(true);
  };

  if (!config.flags.topBarPromo || dismissed || !tool) return null;
  return (
    <div className="bg-blue-600 text-white px-4 py-2 text-sm flex justify-between items-center">
      <span>{config.copy.topPromoMsg}</span>
      <div className="flex items-center space-x-3">
        <a
          href={`/go/${tool.goSlug}`}
          target="_blank"
          rel="nofollow sponsored noopener"
          onClick={() => track('promo_click', { tool: tool.slug })}
          className="underline"
        >
          Learn more
        </a>
        <button onClick={handleDismiss} aria-label="Dismiss" className="font-bold text-lg leading-none">
          ×
        </button>
      </div>
    </div>
  );
};

export default TopBarPromo;