const PackingList = require("../models/packingListModel");
const mongoose = require("mongoose");

// get all packingLists
const getPackingLists = async (req, res) => {
  const packingLists = await PackingList.find({}).sort({ createdAt: -1 }); //most recent timestamp

  res.status(200).json(packingLists);
};

// get a single packingList
const getPackingList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Packing List" });
  }

  const packingList = await packingList.findById(id);

  if (!packingList) {
    return res.status(404).json({ error: "No such packing list" });
  }

  res.status(200).json(packingList);
};

// create a new packingList
const createPackingList = async (req, res) => {
  const { list_name, list_items } = req.body;

  let emptyFields = [];

  if (!list_name) {
    emptyFields.push("list_name");
  }
  if (!list_items) {
    emptyFields.push("list_items");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add to the database
  try {
    const packingList = await PackingList.create({
      list_name,
      list_items,
    });
    res.status(200).json(packingList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a packingList
const deletePackingList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such packing List" });
  }

  const packingList = await PackingList.findOneAndDelete({ _id: id });

  if (!packingList) {
    return res.status(400).json({ error: "No such packingList" });
  }

  res.status(200).json(packingList);
};

// update a packingList
const updatePackingList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such packingList" });
  }

  const packingList = await PackingList.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!packingList) {
    return res.status(400).json({ error: "No such packingList" });
  }

  res.status(200).json(packingList);
};

module.exports = {
  getPackingLists,
  getPackingList,
  createPackingList,
  deletePackingList,
  updatePackingList,
};
