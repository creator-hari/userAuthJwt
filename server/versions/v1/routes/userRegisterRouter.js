const express = require("express");
const router = express.Router();
const userModel = require("../../../models/user.model");

router.post("/", async (req, res) => {
  const { username, password, email } = req.body;
  const newUser = new userModel({
    username: username,
    password: password,
    email: email,
  });
  try {
    savedUser = await newUser.save();
    console.log(`savedUser`, savedUser);
    res.send({
      status: "200",
      data: savedUser,
      message: "User added success",
    });
  } catch (error) {
    console.log(`error`, error);
  }
});

module.exports = router;
