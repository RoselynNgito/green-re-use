import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const RegisterUser = async (req, res) => {
  try {
    // Log the incoming request body
    console.log("Incoming Request Body:", req.body);

    const { username, email, password } = req.body; // Changed `fullName` to `username`

    // Validate input
    if (!username || !email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please provide all values" });
    }

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = await User.create({
      username, // Changed `fullName` to `username`
      email,
      password: hashedPassword,
    });

    // Respond with user details (no token involved)
    res.status(StatusCodes.CREATED).json({
      user: {
        username: user.username, // Changed `fullName` to `username`
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while registering" });
  }
};

export default RegisterUser;
