const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

const { registerUser,loginUser, resetPassword,forgetPassword } = require("../controllers/user.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);


module.exports = router;
