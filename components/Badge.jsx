import React from 'react';

/**
 * Simple badge component used to highlight special awards on tool cards.
 * The badge colour is fixed for consistency across the site.
 *
 * @param {Object} props
 * @param {string} props.label Text to display inside the badge
 */
const Badge = ({ label }) => {
  if (!label) return null;
  return (
    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
      {label}
    </span>
  );
};

export default Badge;