const { GoogleGenerativeAI } = require("@google/generative-ai");

const DEFAULT_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const SYSTEM_PROMPT = `
You are SevaLink Assistant, the in-app AI guide for SevaLink.

SevaLink is a platform that connects people in need with volunteers, NGOs, and community responders.

Your responsibilities:
- Answer user questions clearly and kindly.
- Suggest practical ways volunteers can help.
- Explain SevaLink platform features in simple language.
- Guide users on how to post requests, browse tasks, and collaborate safely.
- Encourage safe, realistic, community-minded support.

Response style:
- Keep answers concise but useful.
- Use supportive, human language.
- When a user asks how to help, suggest a few concrete volunteer actions.
- If a question is unrelated to SevaLink, answer briefly and steer back to how SevaLink can help.
- Never claim to complete real-world actions on behalf of the user.
`.trim();

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new GoogleGenerativeAI(apiKey);
}

exports.chatWithGemini = async (req, res) => {
  try {
    const message = String(req.body?.message || "").trim();

    if (!message) {
      return res.status(400).json({ message: "A chat message is required." });
    }

    const client = getGeminiClient();
    if (!client) {
      return res.status(503).json({
        message: "Gemini is not configured yet. Add GEMINI_API_KEY to server/.env.",
      });
    }

    const model = client.getGenerativeModel({ model: DEFAULT_MODEL });
    const prompt = `${SYSTEM_PROMPT}\n\nUser: ${message}\nAssistant:`;
    const result = await model.generateContent(prompt);
    const reply = result.response.text().trim();

    return res.json({
      reply: reply || "I can help with SevaLink questions, volunteering ideas, and platform guidance.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to generate a chatbot response right now.",
      error: error.message,
    });
  }
};
