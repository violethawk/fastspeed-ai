import React, { useEffect, useState } from 'react';
import config from '@/data/config';
import { track } from '@/lib/analytics';

/**
 * Mobile‑only sticky call–to–action bar.  When the top tool’s card
 * CTA button scrolls out of view, this bar appears at the bottom of
 * the viewport.  Clicking the bar tracks a CTA click event and
 * navigates to the cloaked affiliate link via the `/go` route.
 *
 * @param {Object} props
 * @param {Object} props.tool The top ranked tool
 */
const StickyCTA = ({ tool }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!config.flags.stickyCTA || !tool) return;
    const target = document.getElementById(`${tool.slug}-cta`);
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // When the CTA is fully or partially visible, hide the sticky bar
          if (entry.isIntersecting) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [tool]);

  if (!config.flags.stickyCTA || !tool || !visible) return null;
  const ctaText = config.copy.ctaVariants[0] || 'Try Now';
  return (
    <div className="fixed bottom-0 inset-x-0 p-3 bg-white border-t shadow md:hidden z-50">
      <div className="flex items-center justify-between">
        <span className="font-medium text-sm mr-2">{tool.name}</span>
        <a
          href={`/go/${tool.goSlug}`}
          target="_blank"
          rel="nofollow sponsored noopener"
          onClick={() => track('cta_click', { tool: tool.slug, position: 'sticky' })}
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;