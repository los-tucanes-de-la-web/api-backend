import express from 'express';
import * as projectionController from '../controllers/projectionController.js';
import { editProjectionValidator } from '../middlewares/editProjectionValidator.js';

const router = express.Router();

router.route('/').post(projectionController.create);
router.route('/:id').put(editProjectionValidator, projectionController.update).delete(projectionController.remove);

export default router;
