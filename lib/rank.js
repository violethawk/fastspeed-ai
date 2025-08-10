/**
 * Profit ranking utilities.
 *
 * The functions in this module compute a profit score for each tool
 * based on a weighted combination of earnings per click (EPC),
 * conversion rate (CVR), recurrence multiplier (RECUR), payout
 * percentage, user rating and time cost.  All metrics except time
 * cost are normalised across the entire data set.  Tools with a
 * defined `priority` property are sorted ahead of the computed
 * ranking.
 */
const tools = require('../data/tools');

/**
 * Compute normalisation statistics for a set of tools.  Returns an
 * object mapping each metric name to its minimum and maximum values.
 *
 * @param {Array} list Array of tool objects
 */
function getNormalizationStats(list) {
  const stats = {
    epc: { min: Infinity, max: -Infinity },
    cvr: { min: Infinity, max: -Infinity },
    recur: { min: Infinity, max: -Infinity },
    payout: { min: Infinity, max: -Infinity },
    rating: { min: Infinity, max: -Infinity },
  };
  for (const tool of list) {
    const m = tool.metrics;
    stats.epc.min = Math.min(stats.epc.min, m.epc);
    stats.epc.max = Math.max(stats.epc.max, m.epc);
    stats.cvr.min = Math.min(stats.cvr.min, m.cvr);
    stats.cvr.max = Math.max(stats.cvr.max, m.cvr);
    stats.recur.min = Math.min(stats.recur.min, m.recur);
    stats.recur.max = Math.max(stats.recur.max, m.recur);
    stats.payout.min = Math.min(stats.payout.min, m.payout);
    stats.payout.max = Math.max(stats.payout.max, m.payout);
    stats.rating.min = Math.min(stats.rating.min, tool.rating);
    stats.rating.max = Math.max(stats.rating.max, tool.rating);
  }
  return stats;
}

/**
 * Linearly scale a value between 0 and 1 given a minimum and maximum.
 * If min and max are equal the function returns 0 to avoid divide by
 * zero.
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
function normalize(value, min, max) {
  if (max === min) return 0;
  return (value - min) / (max - min);
}

/**
 * Compute the profit score for a single tool given weights and
 * normalisation statistics.
 *
 * @param {Object} tool
 * @param {Object} weights
 * @param {Object} stats
 */
function profitScore(tool, weights, stats) {
  const m = tool.metrics;
  const epcN = normalize(m.epc, stats.epc.min, stats.epc.max);
  const cvrN = normalize(m.cvr, stats.cvr.min, stats.cvr.max);
  const recurN = normalize(m.recur, stats.recur.min, stats.recur.max);
  const payoutN = normalize(m.payout, stats.payout.min, stats.payout.max);
  const ratingN = normalize(tool.rating, stats.rating.min, stats.rating.max);
  const timeCost = Math.min(m.time_min / 60, 1);
  return (
    weights.epc * epcN +
    weights.cvr * cvrN +
    weights.recur * recurN +
    weights.payout * payoutN +
    weights.rating * ratingN -
    weights.time_penalty * timeCost
  );
}

/**
 * Rank a list of tools by computed profit score and priority overrides.
 * Returns an array of objects `{ tool, score }`.  Priority values
 * override the computed score: lower numbers appear first.  Tools
 * without a priority are ordered by descending score.
 *
 * @param {Array} list Array of tools
 * @param {Object} weights Weight configuration
 */
function rankTools(list, weights) {
  const stats = getNormalizationStats(list);
  const scored = list.map((tool) => {
    return {
      tool,
      score: profitScore(tool, weights, stats),
    };
  });
  return scored.sort((a, b) => {
    const pa = a.tool.priority;
    const pb = b.tool.priority;
    if (pa != null && pb != null) {
      return pa - pb;
    }
    if (pa != null) return -1;
    if (pb != null) return 1;
    // Descending score
    return b.score - a.score;
  });
}

module.exports = { profitScore, rankTools };