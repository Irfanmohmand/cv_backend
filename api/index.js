// backend/api/user.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";
import { connectDB } from "../db/connection.js";
import userRoute from "../routes/userRoute.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.use('/', userRoute); // no need for '/api/v1/user'

export const handler = serverless(app);
