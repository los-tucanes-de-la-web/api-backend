import express from 'express';

import * as userController from '../controllers/userController.js';

const router = express.Router();

router.route('/login').post(userController.login);
router.route('/:token').put(userController.verifyUser);

export default router;
