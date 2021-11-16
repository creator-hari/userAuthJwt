const express = require("express");
const router = express.Router();

const userRegisterRouter = require("./routes/userRegisterRouter");
const userLoginRouter = require("./routes/userLoginRouter");

router.get("/", function (req, res) {
  res.status(200).send({ status: "success", message: "API is working fine." });
});

router.use("/signup", userRegisterRouter);
router.use("/login", userLoginRouter);

module.exports = router;
