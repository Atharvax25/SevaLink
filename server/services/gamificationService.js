const Task = require("../models/Task");

function clampScore(value) {
  return Math.max(0, Math.min(1, value));
}

function getPerformanceScore(user) {
  const completionScore = Math.min((user.tasksCompleted || 0) / 10, 0.55);
  const pointsScore = Math.min((user.points || 0) / 600, 0.3);
  const badgeScore = Math.min((user.badges || []).length * 0.08, 0.15);

  return clampScore(completionScore + pointsScore + badgeScore);
}

function getBadgeList({ points, tasksCompleted, emergencyTasksCompleted }) {
  const badges = [];

  if (points >= 180 || tasksCompleted >= 5) {
    badges.push("Top Helper");
  }

  if (emergencyTasksCompleted >= 1) {
    badges.push("Emergency Responder");
  }

  if (tasksCompleted >= 10) {
    badges.push("Community Anchor");
  }

  return badges;
}

async function awardCompletionRewards(user, task) {
  const severityPoints = {
    low: 18,
    medium: 32,
    high: 52,
    critical: 80,
  };

  user.points = (user.points || 0) + (severityPoints[task.severity] || 24);
  user.tasksCompleted = (user.tasksCompleted || 0) + 1;

  const emergencyTasksCompleted = await Task.countDocuments({
    status: "completed",
    severity: "critical",
    "assignedVolunteer.volunteer": user._id,
  });

  user.badges = getBadgeList({
    points: user.points,
    tasksCompleted: user.tasksCompleted,
    emergencyTasksCompleted,
  });

  return user;
}

module.exports = {
  awardCompletionRewards,
  getBadgeList,
  getPerformanceScore,
};
