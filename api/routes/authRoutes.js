import {register} from '../controllers/authController.js'
import express from 'express'
import {verifyUser} from "../controllers/userController.js"



const router= express.Router()
//register
router.route('register')
.post(register)



router.route("/:token").put(verifyUser);
export default router

