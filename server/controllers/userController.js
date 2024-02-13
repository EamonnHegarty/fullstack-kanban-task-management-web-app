import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// @desc Auth user & get token
// @route POST /api/users/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  if (user && (await user.matchPassword(password))) {
    // Set JWT as HTTP-Only Cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 1 * 24 * 60 * 60 * 1000, // one day
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
  res.send("auth user");
});

// @desc Register user & get token
// @route POST /api/users
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc Logout user & clear cookie
// @route POST /api/users/logout
// @access PRIVATE
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

export { loginUser, registerUser, logoutUser };
