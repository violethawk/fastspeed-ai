import React from 'react';

/**
 * Display a row of five star icons.  Stars up to the rounded rating
 * are coloured yellow and the remainder are grey.  No external
 * libraries are used – the SVG path comes from Heroicons and is
 * licensed under MIT.
 *
 * @param {Object} props
 * @param {number} props.rating Rating on a 0–5 scale
 */
const Stars = ({ rating = 0 }) => {
  const full = Math.round(rating);
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < full ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.334 4.097a1 1 0 00.95.69h4.318c.969 0 1.371 1.24.588 1.81l-3.494 2.54a1 1 0 00-.364 1.118l1.334 4.097c.3.92-.755 1.688-1.54 1.118l-3.494-2.54a1 1 0 00-1.176 0l-3.494 2.54c-.784.57-1.838-.197-1.539-1.118l1.334-4.097a1 1 0 00-.363-1.118L2.161 9.524c-.783-.57-.38-1.81.588-1.81h4.318a1 1 0 00.95-.69l1.334-4.097z" />
        </svg>
      ))}
    </div>
  );
};

export default Stars;