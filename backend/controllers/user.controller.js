const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

const User = require("../models/user.model");
const { generateToken } = require("../tokenGenrater");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(404).json({ message: "All fields are required" });
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

const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(401).json({
        success: false,
        message: "Email Not Found",
      });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "email not found",
      });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");

    const resetTokenExpire = Date.now() + 10 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpire = resetTokenExpire;
    await user.save();

    const resetUrl = `localhost:5173/resetpassword/${resetToken}`;

    const message = `
      <h2>Password Reset</h2>
      <a href="${resetUrl}">Click here to reset</a>
    `;

    await sendEmail(user.email, "Password Reset", message);
    res.status(200).json({
      success: true,
      message: "Reset link sent",
      ressetUrl: resetUrl,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  user.password = await bcrypt.hash(password, 10);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  res.status(200).json({ message: "Password reset successful" });
};

module.exports = { registerUser, loginUser, forgetPassword, resetPassword };
