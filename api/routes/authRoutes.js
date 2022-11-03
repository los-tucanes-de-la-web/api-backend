import express from "express";
import { login } from "../controllers/userControllers";
const router = express.Router();
router.route("/login").post(login);
export default router;
