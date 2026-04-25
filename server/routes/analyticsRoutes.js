const express = require("express");
const {
  getHeatmap,
  getLeaderboard,
  getNeedPredictions,
  getRecentNotifications,
} = require("../controllers/analyticsController");
const { requireAuth, requireRole } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/predict-needs", requireAuth, requireRole("NGO"), getNeedPredictions);
router.get("/leaderboard", requireAuth, getLeaderboard);
router.get("/notifications", requireAuth, requireRole("NGO"), getRecentNotifications);
router.get("/heatmap", requireAuth, requireRole("NGO"), getHeatmap);

module.exports = router;
