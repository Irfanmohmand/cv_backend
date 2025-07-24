// backend/api/index.js

import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "../db/connection.js";
import userRoute from "../routes/userRoute.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());

connectDB(); // Connect MongoDB

app.use('/api/v1/user', userRoute);

// Export serverless handler
export default serverless(app);
