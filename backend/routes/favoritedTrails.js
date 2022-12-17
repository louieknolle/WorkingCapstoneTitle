const express = require("express");
const {
  getFavoritedTrail,
  getFavoritedTrails,
  createFavoritedTrail,
  deleteFavoritedTrail,
  updateFavoritedTrail,
} = require("../controllers/favoritedTrailController");

const router = express.Router();

// GET all FavoritedTrailss
router.get("/", getFavoritedTrails);

// GET a single FavoritedTrails
router.get("/:id", getFavoritedTrail);

// POST a new FavoritedTrails
router.post("/", createFavoritedTrail);

// DELETE a FavoritedTrails
router.delete("/:id", deleteFavoritedTrail);

// UPDATE a FavoritedTrails
router.patch("/:id", updateFavoritedTrail);

module.exports = router;
