import express from 'express';
import { edit } from '../controllers/reviewController';
import { authValidator } from '../middlewares/authValidator';
const router = express.Router();

router.route('/:id').put(authValidator,edit)

export default router;
