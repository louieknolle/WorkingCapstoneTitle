const Footwear = require("../models/footwearModel");
const mongoose = require("mongoose");

// get all footwears
const getFootwears = async (req, res) => {
  const footwears = await Footwear.find({}).sort({ createdAt: -1 }); //most recent timestamp

  res.status(200).json(footwears);
};

// get a single footwear
const getFootwear = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such footwear" });
  }

  const footwear = await Footwear.findById(id);

  if (!footwear) {
    return res.status(404).json({ error: "No such footwear" });
  }

  res.status(200).json(footwear);
};

// create a new footwear
const createFootwear = async (req, res) => {
  const { brand, model, style, waterproof } = req.body;

  let emptyFields = [];

  if (!brand) {
    emptyFields.push("brand");
  }
  if (!model) {
    emptyFields.push("model");
  }
  if (!style) {
    emptyFields.push("style");
  }
  if (!waterproof) {
    emptyFields.push("waterproof");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add to the database
  try {
    const footwear = await Footwear.create({ brand, model, style, waterproof });
    res.status(200).json(footwear);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a footwear
const deleteFootwear = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such footwear" });
  }

  const footwear = await Footwear.findOneAndDelete({ _id: id });

  if (!footwear) {
    return res.status(400).json({ error: "No such footwear" });
  }

  res.status(200).json(footwear);
};

// update a footwear
const updateFootwear = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such footwear" });
  }

  const footwear = await Footwear.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!footwear) {
    return res.status(400).json({ error: "No such footwear" });
  }

  res.status(200).json(footwear);
};

module.exports = {
  getFootwears,
  getFootwear,
  createFootwear,
  deleteFootwear,
  updateFootwear,
};
