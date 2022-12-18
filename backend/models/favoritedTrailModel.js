const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favoritedTrailSchema = new Schema(
  {
    activities: {
      type: Object,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    directions: {
      type: String,
      required: true,
    },
    lat: {
      type: String,
      required: true,
    },
    lon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    parent_id: {
      type: String,
    },
    place_id: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FavoritedTrail", favoritedTrailSchema);
