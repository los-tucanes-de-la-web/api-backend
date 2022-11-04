import express from 'express';
import * as ticketController from '../controllers/ticketController.js';
import { authValidator } from '../middlewares/authValidator.js';

const router = express.Router();

router.route('/').post(authValidator, ticketController.create);
router.route('/:id').put(ticketController.softDelete);
export default router;
