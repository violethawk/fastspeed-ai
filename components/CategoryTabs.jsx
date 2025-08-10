import React from 'react';

/**
 * Render a row of category buttons.  The active category is styled
 * differently.  When clicked, `onSelect` is invoked with the new
 * category name.
 *
 * @param {Object} props
 * @param {Array<string>} props.categories List of category labels
 * @param {string} props.selected Currently selected category
 * @param {(cat: string) => void} props.onSelect Callback when a tab is clicked
 */
const CategoryTabs = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            selected === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;