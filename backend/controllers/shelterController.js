const Shelter = require("../models/shelterModel");
const mongoose = require("mongoose");

// get all shelters
const getShelters = async (req, res) => {
  const shelters = await Shelter.find({}).sort({ createdAt: -1 }); //most recent timestamp

  res.status(200).json(shelters);
};

// get a single shelter
const getShelter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such shelter" });
  }

  const shelter = await Shelter.findById(id);

  if (!shelter) {
    return res.status(404).json({ error: "No such shelter" });
  }

  res.status(200).json(shelter);
};

// create a new shelter
const createShelter = async (req, res) => {
  const { brand, model, weight, capacity, season } = req.body;

  let emptyFields = [];

  if (!brand) {
    emptyFields.push("brand");
  }
  if (!model) {
    emptyFields.push("model");
  }
  if (!weight) {
    emptyFields.push("weight");
  }
  if (!capacity) {
    emptyFields.push("capacity");
  }
  if (!season) {
    emptyFields.push("season");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add to the database
  try {
    const shelter = await Shelter.create({
      brand,
      model,
      weight,
      capacity,
      season,
    });
    res.status(200).json(shelter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a shelter
const deleteShelter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such shelter" });
  }

  const shelter = await Shelter.findOneAndDelete({ _id: id });

  if (!shelter) {
    return res.status(400).json({ error: "No such shelter" });
  }

  res.status(200).json(shelter);
};

// update a shelter
const updateShelter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such shelter" });
  }

  const shelter = await Shelter.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!shelter) {
    return res.status(400).json({ error: "No such shelter" });
  }

  res.status(200).json(shelter);
};

module.exports = {
  getShelters,
  getShelter,
  createShelter,
  deleteShelter,
  updateShelter,
};
