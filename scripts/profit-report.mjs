#!/usr/bin/env node
/*
 * Print a table of tools ranked by computed profit score.  The score
 * combines earnings per click, conversion rate, recurrence,
 * commission, rating and time cost according to weights defined in
 * `data/config.js`.  Use this script to validate your metrics and
 * weights before deploying.
 */
import tools from '../data/tools.js';
import config from '../data/config.js';
import { rankTools } from '../lib/rank.js';

function printReport() {
  const ranked = rankTools(tools, config.weights);
  const rows = ranked.map(({ tool, score }) => {
    const timeCost = Math.min(tool.metrics.time_min / 60, 1);
    return {
      name: tool.name,
      category: tool.category,
      score: score.toFixed(3),
      timeCost: timeCost.toFixed(3),
      epc: tool.metrics.epc,
      cvr: tool.metrics.cvr,
      recur: tool.metrics.recur,
      payout: tool.metrics.payout,
      rating: tool.rating,
    };
  });
  console.table(rows);
}

printReport();