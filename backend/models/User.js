import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

// Hash the password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Only hash if password is modified
  console.log("Password before hashing:", this.password);

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  console.log("Hashed password:", this.password);
  next();
});

// Compare password method
UserSchema.methods.comparePassword = async function (password) {
  console.log("Password from request:", password);
  console.log("Hashed password in DB:", this.password);

  const isMatch = await bcrypt.compare(password, this.password);
  console.log("Password Match:", isMatch);

  return isMatch;
};

const User = mongoose.model("User", UserSchema);

export default User;