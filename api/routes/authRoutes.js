import {register} from '../controllers/authController.js'
import express from 'express'

const router= express.Router()
//register
api.router('register')
.post(register)

export default router