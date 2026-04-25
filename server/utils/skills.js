function normalizeList(input, separator = ",") {
  if (Array.isArray(input)) {
    return [...new Set(input.map((item) => String(item).trim()).filter(Boolean))];
  }

  return [...new Set(String(input || "")
    .split(separator)
    .map((item) => item.trim())
    .filter(Boolean))];
}

function normalizeSkills(skillsInput) {
  return normalizeList(skillsInput).map((skill) => skill.toLowerCase());
}

module.exports = {
  normalizeList,
  normalizeSkills,
};
