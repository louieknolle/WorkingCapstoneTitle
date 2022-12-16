const express = require("express");
const {
  getShelters,
  getShelter,
  createShelter,
  deleteShelter,
  updateShelter,
} = require("../controllers/shelterController");

const router = express.Router();

// GET all Shelters
router.get("/", getShelters);

// GET a single Shelter
router.get("/:id", getShelter);

// POST a new Shelter
router.post("/", createShelter);

// DELETE a Shelter
router.delete("/:id", deleteShelter);

// UPDATE a Shelter
router.patch("/:id", updateShelter);

module.exports = router;
