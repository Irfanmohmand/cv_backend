// backend/api/user.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connection.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello vercel")
})

connectDB();
app.use('/api/v1/user', userRoute);


const PORT = 4002 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

})
