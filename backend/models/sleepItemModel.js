const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sleepItemSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SleepItem", sleepItemSchema);
