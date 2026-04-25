const { getDistanceScore, haversineDistanceKm } = require("../utils/geo");

function roundScore(value) {
  return Number((value * 100).toFixed(1));
}

function normalizeTaskSkills(task) {
  return Array.isArray(task.skills) ? task.skills.map((skill) => skill.toLowerCase()) : [];
}

function normalizeVolunteerSkills(volunteer) {
  return Array.isArray(volunteer.skills)
    ? volunteer.skills.map((skill) => skill.toLowerCase())
    : [];
}

function getAvailabilityState(volunteer, activeAssignments) {
  return Boolean(volunteer.availability !== false) && activeAssignments === 0;
}

function calculateMatchScore(task, volunteer, activeAssignments = 0) {
  const taskSkills = normalizeTaskSkills(task);
  const volunteerSkills = normalizeVolunteerSkills(volunteer);

  const skillScore = taskSkills.some((skill) => volunteerSkills.includes(skill)) ? 1 : 0;
  const availabilityScore = getAvailabilityState(volunteer, activeAssignments) ? 1 : 0;
  const performanceScore = Math.max(0, Math.min(1, Number(volunteer.rating || 0) / 5));

  return Number(
    (
      (skillScore * 0.5 + availabilityScore * 0.3 + performanceScore * 0.2) *
      100
    ).toFixed(1)
  );
}

function buildVolunteerMatch(task, volunteer, activeAssignments = 0) {
  const taskSkills = normalizeTaskSkills(task);
  const volunteerSkills = normalizeVolunteerSkills(volunteer);
  const matchedSkills = volunteerSkills.filter((skill) => taskSkills.includes(skill));
  const distanceKm = haversineDistanceKm(task.geoLocation, volunteer.geoLocation);
  const distanceScore = getDistanceScore(distanceKm);
  const isAvailable = getAvailabilityState(volunteer, activeAssignments);
  const performanceScore = Math.max(0, Math.min(1, Number(volunteer.rating || 0) / 5));
  const skillMatch = taskSkills.length
    ? matchedSkills.length / taskSkills.length
    : volunteerSkills.length
      ? 1
      : 0;
  const totalScore = calculateMatchScore(task, volunteer, activeAssignments);

  return {
    volunteer: volunteer._id,
    volunteerName: volunteer.name,
    volunteerEmail: volunteer.email,
    location: volunteer.location || "",
    volunteerSkills,
    matchedSkills,
    matchScore: totalScore,
    skillMatchScore: roundScore(skillMatch),
    distanceScore: roundScore(distanceScore),
    availabilityScore: isAvailable ? 100 : 0,
    availability: isAvailable,
    availabilityLabel: isAvailable ? "Available" : "Busy",
    performanceScore: roundScore(performanceScore),
    distanceKm,
    activeAssignments,
    rating: Number(volunteer.rating || 0),
  };
}

function rankVolunteersForTask(task, volunteers, activeAssignmentMap = {}) {
  return volunteers
    .map((volunteer) =>
      buildVolunteerMatch(task, volunteer, activeAssignmentMap[String(volunteer._id)] || 0)
    )
    .sort((left, right) =>
      right.matchScore - left.matchScore ||
      Number(right.availability) - Number(left.availability) ||
      left.activeAssignments - right.activeAssignments ||
      left.volunteerName.localeCompare(right.volunteerName)
    );
}

function pickBestVolunteer(matches) {
  return matches[0] || null;
}

module.exports = {
  buildVolunteerMatch,
  calculateMatchScore,
  pickBestVolunteer,
  rankVolunteersForTask,
};
