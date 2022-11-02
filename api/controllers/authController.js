import bcrypt from 'bcrypt'
// import User from '../models/User.js'

const register= async(req, res)=>{
    const {body}=req

    try {
        const hashedPassword= await bcrypt.hash(body.password, 10)
        body.password=hashedPassword

        const user= await User.create(body)
        user.password= undefined
        return res.json({
            msg:'usuario registrado correctamente',
            user
        })


    } catch (error) {
        return res.status(500).json({
            msg:'Error al registrar usuario',
            error
        })
    }y
}
export{
    register
}