// components/ComparisonTable.jsx
import React from 'react';

/**
 * Public-safe comparison table for the top three tools.
 * Columns: Speed, Free Trial, From $, Key Feature (no owner metrics).
 */
const ComparisonTable = ({ tools }) => {
  const rows = (tools || []).slice(0, 3).map((t) => ({
    name: t.name,
    speed: t.bullets?.[0] || '—',
    trial: t.trial ?? '—',
    priceFrom: typeof t.priceFrom === 'number' ? `$${t.priceFrom}/mo` : (t.priceFrom || '—'),
    keyFeature: t.bullets?.[1] || t.summary || '—',
  }));

  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left px-4 py-3 font-semibold">Tool</th>
            <th className="text-left px-4 py-3">Speed</th>
            <th className="text-left px-4 py-3">Free Trial</th>
            <th className="text-left px-4 py-3">From $</th>
            <th className="text-left px-4 py-3">Key Feature</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t">
              <td className="px-4 py-3 font-medium">{r.name}</td>
              <td className="px-4 py-3">{r.speed}</td>
              <td className="px-4 py-3">{r.trial}</td>
              <td className="px-4 py-3">{r.priceFrom}</td>
              <td className="px-4 py-3">{r.keyFeature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
