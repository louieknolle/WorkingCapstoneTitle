const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shelterSchema = new Schema(
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
    season: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shelter", shelterSchema);
