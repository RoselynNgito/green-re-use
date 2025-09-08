import express from "express";
import RegisterUser from "../controllers/RegisterUser.js";
import LoginUser from "../controllers/LoginUser.js";
import mpesaStkPush from "../controllers/m-pesa/m-pesa-stk-push.js";
import getAccesToken from "../controllers/m-pesa/get-access-token.js";

const router = express.Router();

// User Registration Route
router.route("/register").post(RegisterUser);

// User Login Route
router.route("/login").post(LoginUser);

// MPESA STK Push Route (protected by getAccessToken middleware)
router.post("/stkPush", getAccesToken, mpesaStkPush);

export default router;
