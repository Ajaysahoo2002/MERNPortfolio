const express = require("express");
const router = express.Router();
const { contactPage } = require("../controllers/contact-controler");

// for contact page
router.route("/contact").post(contactPage);

module.exports = router;
