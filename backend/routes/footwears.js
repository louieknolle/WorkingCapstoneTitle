const express = require("express");
const {
  getFootwears,
  getFootwear,
  createFootwear,
  deleteFootwear,
  updateFootwear,
} = require("../controllers/footwearController");

const router = express.Router();

// GET all footwears
router.get("/", getFootwears);

// GET a single footwear
router.get("/:id", getFootwear);

// POST a new footwear
router.post("/", createFootwear);

// DELETE a footwear
router.delete("/:id", deleteFootwear);

// UPDATE a footwear
router.patch("/:id", updateFootwear);

module.exports = router;
