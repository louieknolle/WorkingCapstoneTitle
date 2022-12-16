const express = require("express");
const {
  getSleepItems,
  getSleepItem,
  createSleepItem,
  deleteSleepItem,
  updateSleepItem,
} = require("../controllers/sleepItemController");

const router = express.Router();

// GET all SleepItems
router.get("/", getSleepItems);

// GET a single SleepItem
router.get("/:id", getSleepItem);

// POST a new SleepItem
router.post("/", createSleepItem);

// DELETE a SleepItem
router.delete("/:id", deleteSleepItem);

// UPDATE a SleepItem
router.patch("/:id", updateSleepItem);

module.exports = router;
