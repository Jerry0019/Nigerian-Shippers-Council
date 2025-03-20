import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import userRoutes from "./routes/userRoutes.js";
// import locationRoutes from "./routes/locationRoutes.js";
// import contentRoutes from "./routes/contentRoutes.js";
// import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json()); // Parse JSON request bodies
app.use(cors({ origin: "https://nigerianshipperscouncilmap.netlify.app" })); // Enable CORS for frontend
// app.use("/api/users", userRoutes); // Existing user routes
// app.use("/api/locations", locationRoutes); // Existing location routes
// app.use("/api/content", contentRoutes); // <-- ADD THIS for HTML/CSS content management

// Connect to MongoDB
// mongoose
//   .connect(`${process.env.MONGO_URI}`)
//   .then(() => {
//     console.log("Mongo connected successfully");
//   })
//   .catch((err) => console.error(`MongoDB connection error: ${err}`));

app.get("/", (req, res) => {
  res.sendFile(__dirname, "Public", "index.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
