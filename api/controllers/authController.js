import bcrypt from 'bcrypt'
import User from '../models/User.js'

// import { transporter } from '../config/mailer.js'


const register= async(req, res)=>{
    const {body}=req
    try {
        const hashedPassword= await bcrypt.hash(body.password, 10)
        body.password=hashedPassword

        const user= await User.create(body)

        user.password= undefined

        // const mailOptions={
        //     from:'deliasofia2310@gmail.com',
        //     to:user.email,
        //     subject:'Nodemailer TEST',
        //     text:'Verify your credentials'
        // }
        // const sendEmail=await transporter.sendMail(mailOptions)
        // return res.json({
        //     msg:'user registered',
        //     user,
        //     sendEmail
        // })
      
    } catch (error) {
        return res.status(500).json({
            msg:'User registration error',
            error
        })
    }
}

export{
    register
}