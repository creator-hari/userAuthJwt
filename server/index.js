require("dotenv").config("");
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/user.model");
const versionRouter = require("./versions/v1/version.router");

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.text());
app.use(cors());

//Connecting to mongoDB
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongoDB connection success");
  }
);

app.use("/api", versionRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is UP!! in ${process.env.PORT}`);
});
