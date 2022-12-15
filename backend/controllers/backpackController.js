const Backpack = require("../models/backpackModel");
const mongoose = require("mongoose");

// get all backpacks
const getBackpacks = async (req, res) => {
  const backpacks = await Backpack.find({}).sort({ createdAt: -1 }); //most recent timestamp

  res.status(200).json(backpacks);
};

// get a single backpack
const getBackpack = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such backpack" });
  }

  const backpack = await Backpack.findById(id);

  if (!backpack) {
    return res.status(404).json({ error: "No such backpack" });
  }

  res.status(200).json(backpack);
};

// create a new backpack
const createBackpack = async (req, res) => {
  const { brand, model, weight, capacity } = req.body;

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
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the field", emptyFields });
  }

  // add to the database
  try {
    const backpack = await Backpack.create({ brand, model, weight, capacity });
    res.status(200).json(backpack);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a backpack
const deleteBackpack = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such backpack" });
  }

  const backpack = await Backpack.findOneAndDelete({ _id: id });

  if (!backpack) {
    return res.status(400).json({ error: "No such backpack" });
  }

  res.status(200).json(backpack);
};

// update a backpack
const updateBackpack = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such backpack" });
  }

  const backpack = await Backpack.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!backpack) {
    return res.status(400).json({ error: "No such backpack" });
  }

  res.status(200).json(backpack);
};

module.exports = {
  getBackpacks,
  getBackpack,
  createBackpack,
  deleteBackpack,
  updateBackpack,
};
