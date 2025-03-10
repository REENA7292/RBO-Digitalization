import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Database Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port: ${PORT}`);
});
