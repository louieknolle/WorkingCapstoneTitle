const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const footwearSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      required: true,
    },
    waterproof: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Footwear", footwearSchema);
