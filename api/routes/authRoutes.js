import  express  from "express";
import {verifyUser} from "../controllers/userController.js"

const router = express.Router();

router.route("/verify").put(verifyUser);
export default router;