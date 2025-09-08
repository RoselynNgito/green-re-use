import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import AttachCookie from "../utils/AttachCookie.js";

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Log the incoming request body
    console.log("Login Request Body:", req.body);

    if (!email || !password) {
      console.error("Validation Error: Missing email or password");
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please provide all values" });
      return;
    }

    // Log the email lookup process
    console.log(`Looking for user with email: ${email}`);
    const user = await User.findOne({ email }).select("+password");
    console.log("User Found:", user);

    if (!user) {
      console.error("Error: User not found");
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "User does not exist" });
      return;
    }

    // Log the password comparison process
    console.log("Stored Hashed Password:", user.password);
    console.log("Comparing passwords...");
    const isPasswordCorrect = await user.comparePassword(password);
    console.log("Password Match:", isPasswordCorrect);

    if (!isPasswordCorrect) {
      console.error("Error: Invalid Credentials");
      res.status(StatusCodes.UNAUTHORIZED).json({ message: "Invalid Credentials" });
      return;
    }

    // Log token creation
    console.log("Creating JWT token...");
    const token = user.createJWT();
    console.log("Generated Token:", token);

    // Log cookie attachment
    console.log("Attaching cookie...");
    AttachCookie({ res, token });

    user.password = undefined; // Prevent returning the password in the response

    // Log success and respond
    console.log("Login successful, responding with user data...");
    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while logging in" });
  }
};

export default LoginUser;
