const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const backpackSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Backpack", backpackSchema);
