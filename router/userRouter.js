import express from 'express';
import userController from '../controller/userController.js'

const router = express.Router();

router.route('/users').get( userController.read )
router.route('/users/:id').get(userController.readById)

export default router;