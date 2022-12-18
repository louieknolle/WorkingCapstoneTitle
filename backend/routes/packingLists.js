const express = require("express");
const {
  getPackingLists,
  getPackingList,
  createPackingList,
  deletePackingList,
  updatePackingList,
} = require("../controllers/packingListController");

const router = express.Router();

// GET all packingLists
router.get("/", getPackingLists);

// GET a single packingList
router.get("/:id", getPackingList);

// POST a new packingList
router.post("/", createPackingList);

// DELETE a packingList
router.delete("/:id", deletePackingList);

// UPDATE a packingList
router.patch("/:id", updatePackingList);

module.exports = router;
