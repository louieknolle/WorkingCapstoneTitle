require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const backpackRoutes = require("./routes/backpacks");
const sleepItemRoutes = require("./routes/sleepItems");
const shelterRoutes = require("./routes/shelters");
const footwearRoutes = require("./routes/footwears");
const favoritedTrailRoutes = require("./routes/favoritedTrails");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/backpacks", backpackRoutes);
app.use("/api/sleepItems", sleepItemRoutes);
app.use("/api/shelters", shelterRoutes);
app.use("/api/footwears", footwearRoutes);
app.use("/api/favoritedTrails", favoritedTrailRoutes);
// connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
