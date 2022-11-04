import joi from 'joi';

const now = Date.now();
const adultAge = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18);

const updateUserValidator = async (req, res, next) => {
  const userSchema = joi.object({
    dni: joi.string().empty(''),
    name: joi.string().empty().min(4).max(30).trim(),
    lastName: joi.string().empty().empty().min(4).max(30).trim(),
    birthDate: joi.date().less(adultAge).greater('1-1-1934'),
    phoneNumber: joi.string().min(8).max(10),
    email: joi.string().email().empty().trim(),
    password: joi.string().empty().min(4).max(30).trim(),
    oldPassword: joi.string().when('password', {
      is: joi.exist(),
      then: joi.string().empty().min(4).max(30).trim().required(),
    }),
    userName: joi.string().min(5).max(20).alphanum().trim(),
  });

  try {
    await userSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Datos incorrectos',
      error,
    });
  }
};

export { updateUserValidator };
