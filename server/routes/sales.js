const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const UsersController = require("../controllers/sales");

router
  .post("/:o_id/addsales", auth, UsersController.addsales)
  .get("/:o_id/getallsales", auth, UsersController.allsales)
  .post("/:o_id/getonesales", auth, UsersController.getonesales);

module.exports = router;
