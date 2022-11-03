import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(userController.read);
router.route('/:id').get(userController.readById).put(userController.update);

export default router;