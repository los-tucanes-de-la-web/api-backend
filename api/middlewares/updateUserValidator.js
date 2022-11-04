import joi from 'joi';

const updateUserValidator=async(req,res,next)=>{
    const userSchema=joi.object({
        dni: joi.string().empty(''),
        name:joi.string().empty().min(4).max(30).trim(),
        lastName:joi.string().empty().empty().min(4).max(30).trim(),
        birthDate:joi.date().less('12-31-2004').greater('1-1-1954'),
        phoneNumber: joi.string().min(8).max(10),
        email:joi.string().email().empty().trim(),
        password:joi.string().empty().min(4).max(30).trim(),
        oldPassword:joi.string().empty().min(4).max(30).trim(),
        userName:joi.string().min(5).max(20).alphanum().trim()
    });
    try {
        await userSchema.updateUserValidator(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: "Datos incorrectos",
            error,
          });
    }
}

export {updateUserValidator}