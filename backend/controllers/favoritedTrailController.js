const FavoritedTrail = require("../models/favoritedTrailModel");
const mongoose = require("mongoose");

// get all favoritedTrails
const getFavoritedTrails = async (req, res) => {
  const favoritedTrails = await FavoritedTrail.find({}).sort({ createdAt: -1 }); //most recent timestamp

  res.status(200).json(favoritedTrails);
};

// get a single favoritedTrail
const getFavoritedTrail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such favoritedTrail" });
  }

  const favoritedTrail = await FavoritedTrail.findById(id);

  if (!favoritedTrail) {
    return res.status(404).json({ error: "No such favoritedTrail" });
  }

  res.status(200).json(favoritedTrail);
};

// create a new favoritedTrail
const createFavoritedTrail = async (req, res) => {
  const { name, location, description, directions } = req.body;

  let emptyFields = [];

  if (!brand) {
    emptyFields.push("name");
  }
  if (!model) {
    emptyFields.push("location");
  }
  if (!weight) {
    emptyFields.push("description");
  }
  if (!capacity) {
    emptyFields.push("directions");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add to the database
  try {
    const favoritedTrail = await FavoritedTrail.create({
      name,
      description,
      location,
      directions,
    });
    res.status(200).json(favoritedTrail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a favoritedTrail
const deleteFavoritedTrail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such favorited trail" });
  }

  const favoritedTrail = await FavoritedTrail.findOneAndDelete({ _id: id });

  if (!favoritedTrail) {
    return res.status(400).json({ error: "No such favorited trail" });
  }

  res.status(200).json(favoritedTrail);
};

// update a favoritedTrail
const updateFavoritedTrail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such favoritedTrail" });
  }

  const favoritedTrail = await FavoritedTrail.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!favoritedTrail) {
    return res.status(400).json({ error: "No such favorited trail" });
  }

  res.status(200).json(favoritedTrail);
};

module.exports = {
  getFavoritedTrails,
  getFavoritedTrail,
  createFavoritedTrail,
  deleteFavoritedTrail,
  updateFavoritedTrail,
};
