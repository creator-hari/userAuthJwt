const express = require("express");
const router = express.Router();
const userModel = require("../../../models/user.model");

router.get("/", async (req, res) => {
  res.send({
    status: "200",
    data: req.body,
    message: "User added success",
  });
});

module.exports = router;
