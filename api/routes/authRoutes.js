
import express from "express";
import { login } from "../controllers/userControllers";
import {verifyUser} from "../controllers/userController.js"
const router = express.Router();
router.route("/login").post(login);
router.route("/:token").put(verifyUser);
export default router;
