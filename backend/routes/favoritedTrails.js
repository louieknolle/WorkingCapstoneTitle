const express = require("express");
const {
  getFavoritedTrailss,
  getFavoritedTrails,
  createFavoritedTrails,
  deleteFavoritedTrails,
  updateFavoritedTrails,
} = require("../controllers/favoritedTrailsController");

const router = express.Router();

// GET all FavoritedTrailss
router.get("/", getFavoritedTrailss);

// GET a single FavoritedTrails
router.get("/:id", getFavoritedTrails);

// POST a new FavoritedTrails
router.post("/", createFavoritedTrails);

// DELETE a FavoritedTrails
router.delete("/:id", deleteFavoritedTrails);

// UPDATE a FavoritedTrails
router.patch("/:id", updateFavoritedTrails);

module.exports = router;
