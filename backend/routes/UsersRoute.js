const express = require("express");
const {
  authController,
  getUserProfile,registerUser, upddateUserProfile
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//user rigistration
router.route('/').post(registerUser)

//post email and password auth
router.post("/login", authController);

//get user profile Private Route
router.route("/profile").get(protect, getUserProfile).put(protect,upddateUserProfile)

module.exports = router;
