import React from 'react';

/**
 * Simple comparison table for the top three tools.  Displays basic
 * pricing and commission information alongside a highlight of the first
 * bullet point.  Where data is missing the cell shows an em dash.
 *
 * @param {Object} props
 * @param {Array} props.tools Array of three tool objects
 */
const ComparisonTable = ({ tools }) => {
  return (
    <div className="overflow-x-auto border rounded-lg mb-4">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 text-left font-semibold">Tool</th>
            <th className="px-3 py-2 text-left font-semibold">Speed</th>
            <th className="px-3 py-2 text-left font-semibold">Trial</th>
            <th className="px-3 py-2 text-left font-semibold">From $</th>
            <th className="px-3 py-2 text-left font-semibold">Commission</th>
            <th className="px-3 py-2 text-left font-semibold">Key Feature</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.slug} className="border-t">
              <td className="px-3 py-2 font-medium whitespace-nowrap">{tool.name}</td>
              <td className="px-3 py-2 whitespace-nowrap">{tool.summary.split(' ')[0] || '—'}</td>
              <td className="px-3 py-2 whitespace-nowrap">{tool.metrics.trial || '—'}</td>
              <td className="px-3 py-2 whitespace-nowrap">{tool.metrics.fromPrice ? `$${tool.metrics.fromPrice}` : '—'}</td>
              <td className="px-3 py-2 whitespace-nowrap">{tool.metrics.payout ? `${Math.round(tool.metrics.payout * 100)}%` : '—'}</td>
              <td className="px-3 py-2 whitespace-nowrap">{tool.bullets[0] || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;