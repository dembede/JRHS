function getStats() {
  var dailyStats = Math.cell(Math.random() * 10);
  var totalStats = Math.cell(Math.random() * 10);
  return dailyStats, totalStats;
}

module.exports = { getStats };
