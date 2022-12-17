const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favoritedTrailSchema = new Schema(
  {
    trail: {
      type: Object,
      require: true,
    },
    // activities: {
    //   type: Object,
    // },
    // city: {
    //   type: String,
    // },
    // country: {
    //   type: String,
    // },
    // name: {
    //   type: String,
    //   required: true,
    // },
    // state: {
    //   type: String,
    //   required: true,
    // },
    // description: {
    //   type: String,
    //   required: true,
    // },
    // directions: {
    //   type: String,
    //   required: true,
    // },
    // lat: {
    //   type: String,
    //   required: true,
    // },
    // lon: {
    //   type: String,
    //   required: true,
    // },
    // place_id: {
    //   type: String,
    // },
    // parent_id: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FavoritedTrail", favoritedTrailSchema);
