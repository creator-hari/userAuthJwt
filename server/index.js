require("dotenv").config("");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    status: "200",
    message: "Home page working",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is UP!! in ${process.env.PORT}`);
});
