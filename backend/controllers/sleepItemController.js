const SleepItem = require("../models/sleepItemModel");
const mongoose = require("mongoose");

// get all sleepItems
const getSleepItems = async (req, res) => {
  const sleepItems = await SleepItem.find({}).sort({ createdAt: -1 }); //most recent timestamp

  res.status(200).json(sleepItems);
};

// get a single sleepItem
const getSleepItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such sleep item" });
  }

  const sleepItem = await SleepItem.findById(id);

  if (!sleepItem) {
    return res.status(404).json({ error: "No such sleep item" });
  }

  res.status(200).json(sleepItem);
};

// create a new sleepItem
const createSleepItem = async (req, res) => {
  const { brand, model, kind, weight } = req.body;

  let emptyFields = [];

  if (!brand) {
    emptyFields.push("brand");
  }
  if (!model) {
    emptyFields.push("model");
  }
  if (!kind) {
    emptyFields.push("kind");
  }
  if (!weight) {
    emptyFields.push("weight");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add to the database
  try {
    const sleepItem = await SleepItem.create({
      brand,
      model,
      kind,
      weight,
    });
    res.status(200).json(sleepItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a sleepItem
const deleteSleepItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such sleep item" });
  }

  const sleepItem = await SleepItem.findOneAndDelete({ _id: id });

  if (!sleepItem) {
    return res.status(400).json({ error: "No such sleepItem" });
  }

  res.status(200).json(sleepItem);
};

// update a sleepItem
const updateSleepItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such sleep item" });
  }

  const sleepItem = await SleepItem.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!sleepItem) {
    return res.status(400).json({ error: "No such sleep item" });
  }

  res.status(200).json(sleepItem);
};

module.exports = {
  getSleepItems,
  getSleepItem,
  createSleepItem,
  deleteSleepItem,
  updateSleepItem,
};
