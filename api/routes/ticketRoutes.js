import express from 'express';
import * as ticketController from '../controllers/ticketController.js';

const router = express.Router();

router.route('/ticket')
router.route('/ticket/:id').put(ticketController.softDelete);

export default router;
