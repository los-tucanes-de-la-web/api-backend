import express from "express"
import * as reviewController from "../controllers/reviewController.js"
import { authValidator } from '../middlewares/authValidator.js';

const router = express.Router()

router.route('/').post(authValidator, reviewController.create);

router
    .route('/:id')
    .delete(reviewController.remove)
    
export default router;
