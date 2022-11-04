import { register } from '../controllers/authController.js';
import express from 'express';
import { verifyUser } from '../controllers/userController.js';
import * as userController from '../controllers/userController.js';

const router = express.Router();
//register
router.route('/register').post(register);
router.route('/verify/:token').get(verifyUser);
router.route('/login').post(userController.login);
router.route('/:token').put(userController.verifyUser);

export default router;
