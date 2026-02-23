const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const { generateToken } = require("../tokenGenrater");


const registerUser = async (req, res) => {
  try {
    const { username, email, password, confirmpassword } = req.body;

    if (!username || !email || !password || !confirmpassword) {
      res.status(404).json({ message: "All fields are required" });
      return;
    }

    if (password !== confirmpassword) {
      res.status(400).json({ message: "Passwords do not match" });
      return;
    }

    const bcryptPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: bcryptPassword,
      username,
    });
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "invalid credentials" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({
        message: "invalid credentials",
      });
    }

    generateToken(user, res);
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { registerUser, loginUser };
