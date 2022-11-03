import express from 'express';
import * as projectionController from '../controllers/projectionController.js';

const router = express.Router();

router.route('/').post(projectionController.create);


export default router;