const express = require("express");
const router = express.Router();
const { postData, login, userData } = require("../controllers/controller");
const authMiddleware = require("../middleware/authMiddleware");

// for registration page
router.route("/register").post(postData);
// for login page
router.route("/login").post(login);
// for sending user data
router.route("/user").get(authMiddleware, userData);




// export the router
module.exports = { router }