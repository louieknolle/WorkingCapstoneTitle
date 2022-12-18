const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const packingListSchema = new Schema(
  {
    list_name: {
      type: String,
    },
    list_items: [{ brand: String, model: String, weight: Number }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("PackingList", packingListSchema);
