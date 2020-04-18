const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Cors = require("cors");
const ApiRoutes = require("./routes/router");

const app = express();
const port = 4000;
const mongoURI = "mongodb://localhost:27017/Signzy";

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("mongoDB Not Connected", err);
    } else {
      console.log("mongoDB Connected Successfully");
    }
  }
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Cors());
app.use(ApiRoutes);
app.listen(port, (err) => {
  if (err) {
    console.log("Server Not Started", err);
  } else {
    console.log("Server Started at Port:", port);
  }
});
