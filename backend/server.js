import express from "express";
import dbConnection from "./config/db.js";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorMiddleware.js";
import cors from "cors";
import listRoute from "./routes/listRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json()); // will parse JSON bodies: req.body

// routes
app.use("/api/lists", listRoute);

app.use(errorHandler);

// Connects to database before starting server
const startServer = async () => {
  try {
    await dbConnection();

    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
  }
};

startServer();
