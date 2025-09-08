import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDb from "./Db/connectDb.js";
import UserRoute from "./routes/UserRoutes.js";
import ProductRoute from "./routes/ProductRoutes.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

const app = express();
dotenv.config();

// Use morgan for logging in development mode
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Middleware
app.use(express.urlencoded({ limit: "100mb", extended: false }));
app.use(express.json({ limit: "100mb" }));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 5002;

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome!");
});

// Routes
app.use("/api/user", UserRoute);
app.use("/api/product", ProductRoute);

// Error handling middleware
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    // Connect to the database
    await connectDb(process.env.MONGO_DB_URI);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on Port ${PORT}...`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

// Start the server
startServer();
