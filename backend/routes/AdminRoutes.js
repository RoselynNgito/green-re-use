const express = require("express");
const { signupAdmin } = require("../controllers/adminController");

const router = express.Router();

// Admin signup route
router.post("/signup", signupAdmin);

module.exports = router;
