import express from 'express';
import * as projectionController from '../controllers/projectionController.js';
import { projectionValidator } from '../middlewares/projectionValidator.js';

const router = express.Router();

router.route('/').post(projectionValidator ,projectionController.create);
router.route('/:id').put(projectionController.update).delete(projectionController.remove);

export default router;
