import jwt from "jwt-simple";
import config from "../config/index.js";
import User from "../models/User.js";
const authValidator = async (req,res,next)=>{
    const { authorization: token } = req.headers;
    if(!token){
        return res.status(403).json({
            msg:"Falta cabecera Authorization"
        })
    }
    try {
        const payload = jwt.decode(token, config.jwtSecret);
        const {userId}=payload;
        if(!userId){
            return res.status(403).json({
                msg:"Token invalido"
            })
        }
        const user=await User.findByid(user);
        if(!user){
            return res.status(403).json({
                msg:"Token invalido"
            })
        }
        next()
    } catch (error) {
        return res.status(403).json({
            msg:"Token invalido"
        })
    }
}
export {authValidator}