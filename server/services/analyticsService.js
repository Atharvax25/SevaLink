const { CATEGORY_LABELS } = require("../utils/taskSignals");
const { getPerformanceScore } = require("./gamificationService");

const predictionCatalog = {
  [CATEGORY_LABELS.food]: "Food demand likely in the next 3 days",
  [CATEGORY_LABELS.medical]: "Medical support demand likely in the next 3 days",
  [CATEGORY_LABELS.education]: "Education support demand likely this week",
  [CATEGORY_LABELS.shelter]: "Shelter relief demand likely in the next 3 days",
  [CATEGORY_LABELS.logistics]: "Logistics and supply demand likely in the next 3 days",
  [CATEGORY_LABELS.emergency]: "Emergency response demand likely in the next 72 hours",
  "General support": "General volunteer activity likely to stay active this week",
};

function buildPredictionReport(tasks) {
  const now = Date.now();
  const lastSevenDays = tasks.filter(
    (task) => now - new Date(task.createdAt).getTime() <= 1000 * 60 * 60 * 24 * 7
  );
  const previousSevenDays = tasks.filter((task) => {
    const age = now - new Date(task.createdAt).getTime();
    return age > 1000 * 60 * 60 * 24 * 7 && age <= 1000 * 60 * 60 * 24 * 14;
  });

  const countByCategory = (collection) =>
    collection.reduce((accumulator, task) => {
      const key = task.category || "General support";
      accumulator[key] = (accumulator[key] || 0) + 1;
      return accumulator;
    }, {});

  const recentCounts = countByCategory(lastSevenDays);
  const previousCounts = countByCategory(previousSevenDays);

  const predictions = Object.entries(recentCounts)
    .filter(([, count]) => count >= 2)
    .map(([category, count]) => {
      const baseline = previousCounts[category] || 0;
      const growth = count - baseline;
      const confidence = Math.min(96, 58 + count * 8 + Math.max(growth, 0) * 6);

      return {
        category,
        confidence,
        message: predictionCatalog[category] || `${category} demand likely to rise soon`,
        signal: `${count} similar task${count === 1 ? "" : "s"} in the last 7 days`,
      };
    })
    .sort((left, right) => right.confidence - left.confidence);

  if (predictions.length === 0) {
    predictions.push({
      category: "General support",
      confidence: 52,
      message: "No major spike detected yet, but medium-volunteer demand remains steady",
      signal: "Current task volume is stable",
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    predictions,
  };
}

function buildHeatmapPoints(tasks) {
  return tasks
    .filter((task) => task.geoLocation?.lat !== null && task.geoLocation?.lng !== null)
    .map((task) => ({
      id: String(task._id),
      title: task.title,
      category: task.category,
      lat: task.geoLocation.lat,
      lng: task.geoLocation.lng,
      location: task.location,
      severity: task.severity,
      status: task.status,
      urgencyScore: task.urgencyScore || 0,
    }));
}

function buildLeaderboard(volunteers) {
  return [...volunteers]
    .sort((left, right) =>
      (right.points || 0) - (left.points || 0) ||
      (right.tasksCompleted || 0) - (left.tasksCompleted || 0) ||
      left.name.localeCompare(right.name)
    )
    .slice(0, 8)
    .map((volunteer, index) => ({
      id: String(volunteer._id),
      rank: index + 1,
      name: volunteer.name,
      email: volunteer.email,
      points: volunteer.points || 0,
      tasksCompleted: volunteer.tasksCompleted || 0,
      badges: volunteer.badges || [],
      performanceScore: Number((getPerformanceScore(volunteer) * 100).toFixed(1)),
    }));
}

function buildSeverityBreakdown(tasks) {
  return tasks.reduce(
    (accumulator, task) => {
      const severity = task.severity || "medium";
      accumulator[severity] = (accumulator[severity] || 0) + 1;
      return accumulator;
    },
    { low: 0, medium: 0, high: 0, critical: 0 }
  );
}

function buildCategoryBreakdown(tasks) {
  return tasks.reduce((accumulator, task) => {
    const category = task.category || "General support";
    accumulator[category] = (accumulator[category] || 0) + 1;
    return accumulator;
  }, {});
}

module.exports = {
  buildCategoryBreakdown,
  buildHeatmapPoints,
  buildLeaderboard,
  buildPredictionReport,
  buildSeverityBreakdown,
};
