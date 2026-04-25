const { normalizeList } = require("./skills");

const CATEGORY_KEYWORDS = {
  emergency: ["flood", "injury", "fire", "accident", "rescue", "evacuation", "ambulance"],
  food: ["food", "hunger", "meal", "ration", "kitchen"],
  medical: ["medical", "medicine", "doctor", "health", "clinic", "hospital"],
  education: ["school", "education", "books", "student", "teaching", "tutor"],
  shelter: ["shelter", "housing", "blanket", "refuge", "tent"],
  logistics: ["transport", "delivery", "logistics", "supplies", "distribution"],
};

const CATEGORY_LABELS = {
  emergency: "Emergency response",
  food: "Food assistance",
  medical: "Medical assistance",
  education: "Education support",
  shelter: "Shelter relief",
  logistics: "Logistics support",
};

const CRITICAL_KEYWORDS = [
  "injury",
  "flood",
  "fire",
  "accident",
  "bleeding",
  "collapse",
  "rescue",
  "ambulance",
  "emergency",
];

function tokenize(...parts) {
  return parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9\s._-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function detectCategory(tokens) {
  const categoryScores = Object.entries(CATEGORY_KEYWORDS).map(([category, keywords]) => ({
    category,
    score: keywords.filter((keyword) => tokens.includes(keyword)).length,
  }));

  categoryScores.sort((left, right) => right.score - left.score);
  const bestCategory = categoryScores[0];

  if (!bestCategory || bestCategory.score === 0) {
    return "General support";
  }

  return CATEGORY_LABELS[bestCategory.category];
}

function extractImageTags(imageLabel, fileName) {
  const tokens = tokenize(imageLabel, fileName);
  const matchedTags = Object.values(CATEGORY_KEYWORDS)
    .flat()
    .filter((keyword) => tokens.includes(keyword));

  return normalizeList(matchedTags);
}

function deriveTaskSignals({ title, description, severity, skills, imageLabel, imageFileName }) {
  const skillTokens = normalizeList(skills).map((skill) => skill.toLowerCase());
  const textTokens = tokenize(title, description, imageLabel, imageFileName, skillTokens.join(" "));
  const imageTags = extractImageTags(imageLabel, imageFileName);
  const category = detectCategory([...textTokens, ...imageTags]);
  const criticalMatches = CRITICAL_KEYWORDS.filter((keyword) => textTokens.includes(keyword));
  const isEmergency = criticalMatches.length > 0;
  const normalizedSeverity = isEmergency
    ? "critical"
    : ["low", "medium", "high", "critical"].includes(severity)
      ? severity
      : "medium";

  const baseUrgency = {
    low: 28,
    medium: 56,
    high: 78,
    critical: 96,
  }[normalizedSeverity];

  return {
    category,
    escalationReason: isEmergency
      ? `Emergency escalation triggered by keywords: ${criticalMatches.join(", ")}`
      : "",
    imageTag: imageTags.join(", "),
    imageTags,
    isEmergency,
    severity: normalizedSeverity,
    urgencyScore: Math.min(
      100,
      baseUrgency + Math.min(criticalMatches.length * 6 + imageTags.length * 4, 12)
    ),
  };
}

module.exports = {
  CRITICAL_KEYWORDS,
  CATEGORY_KEYWORDS,
  CATEGORY_LABELS,
  deriveTaskSignals,
  extractImageTags,
};
