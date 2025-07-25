import React from 'react';

/**
 * Renders a 0–5 star rating using inline SVG icons. Filled, half and empty
 * stars are displayed based on the provided rating. The icons inherit
 * their color from the parent element, allowing them to be styled via
 * Tailwind classes such as `text-yellow-400`.
 *
 * @param {Object} props
 * @param {number} props.rating A number from 0–5 indicating the rating
 */
export default function Stars({ rating = 0 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex space-x-0.5">
      {/* Full stars */}
      {Array.from({ length: full }).map((_, idx) => (
        <svg
          key={`full-${idx}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.983 2.893a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.983-2.893a1 1 0 00-1.176 0l-3.983 2.893c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.013 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69l1.518-4.674z" />
        </svg>
      ))}
      {/* Half star */}
      {half && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <defs>
            <linearGradient id="halfGradient" x1="0" x2="20" y1="0" y2="0">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.983 2.893a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.983-2.893a1 1 0 00-1.176 0l-3.983 2.893c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.013 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69l1.518-4.674z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.983 2.893a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.983-2.893a1 1 0 00-1.176 0l-3.983 2.893c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.013 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69l1.518-4.674z"
          />
        </svg>
      )}
      {/* Empty stars */}
      {Array.from({ length: empty }).map((_, idx) => (
        <svg
          key={`empty-${idx}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="h-4 w-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.983 2.893a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.983-2.893a1 1 0 00-1.176 0l-3.983 2.893c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.013 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69l1.518-4.674z" />
        </svg>
      ))}
    </div>
  );
}