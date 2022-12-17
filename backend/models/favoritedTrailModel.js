const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favoritedTrailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    directions: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FavoritedTrail", favoritedTrailSchema);
