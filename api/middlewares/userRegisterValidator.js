import joi from 'joi';

const userRegisterValidator = async (req, res, next) => {

    const userRegisterValidatorSchema = joi.object({
        dni: joi.string().required(),
        name: joi.string().required(),
        lastName: joi.string().required(),
        birthdate: joi.date().required(),
        role: joi.string().required(),
        phoneNumber: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
        userName: joi.string().required(), })

    try {
        await userRegisterValidatorSchema.validateAsync(req.body)
        next()
        
    } catch (error) {
        return res.status(400).json({
            msg: 'Datos incorrectos',
            error
        })
     }
}

export {userRegisterValidator};