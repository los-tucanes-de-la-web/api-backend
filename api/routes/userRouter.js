import express from 'express';
import userController from '../controllers/userController.js'

const router = express.Router();

router.route('/').get( userController.read )
router.route('/:id').get(userController.readById)

export default router;