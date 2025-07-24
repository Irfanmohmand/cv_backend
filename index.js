import express from "express";
import { connectDB } from "./db/connection.js";
import cors from "cors";

import dotenv from "dotenv";





dotenv.config();
const app = express();

// corse setup connect frontend to backend
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

// json files
app.use(express.json());

connectDB();

// User details route
import userRoute from "./routes/userRoute.js";
app.use('/api/v1/user', userRoute);




const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})