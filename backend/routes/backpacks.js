const express = require("express");
const {
  getBackpacks,
  getBackpack,
  createBackpack,
  deleteBackpack,
  updateBackpack,
} = require("../controllers/backpackController");

const router = express.Router();

// GET all backpacks
router.get("/", getBackpacks);

// GET a single backpack
router.get("/:id", getBackpack);

// POST a new backpack
router.post("/", createBackpack);

// DELETE a backpack
router.delete("/:id", deleteBackpack);

// UPDATE a backpack
router.patch("/:id", updateBackpack);

module.exports = router;
