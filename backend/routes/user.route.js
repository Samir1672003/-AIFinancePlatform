const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { registerUser,loginUser } = require("../controllers/user.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
