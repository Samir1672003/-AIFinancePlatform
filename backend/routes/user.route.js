const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { registerUser } = require("../controllers/user.controller");

router.post("/register" , registerUser);

module.exports = router;
