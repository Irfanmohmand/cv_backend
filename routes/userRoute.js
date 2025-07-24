import express from "express";
const router = express.Router();
import { userDetail } from "../controllers/userController.js"


router.post("/userdetails", userDetail);

export default router;