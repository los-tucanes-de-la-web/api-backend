
import express from "express"
import * as reviewController from "../controllers/reviewController.js"
import { authValidator } from '../middlewares/authValidator.js';
import { reviewEditValidator } from "../middlewares/reviewEditValidator.js";

const router = express.Router()

router.route('/').post(authValidator, reviewController.create);
router.route('/:id').put(reviewEditValidator,authValidator,reviewController.edit).delete(reviewController.remove);
  
export default router;
