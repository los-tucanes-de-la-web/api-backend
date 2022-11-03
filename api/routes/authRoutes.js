import  express  from "express";
import {verifyUser} from "../controllers/userController.js"
import { authValidator } from "../middlewares/authValidator.js";
const router = express.Router();

router.route("/verify/:token").put(verifyUser);
export default router;