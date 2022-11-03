import User from '../models/User.js';
import bcrypt from 'bcrypt';

const update = async (req, res) => {
  //Obtenemos el id del usuario y el body
  const { id } = req.params;
  const { body } = req;
  //Verificamos si existe password si es asi verificar que exista oldPassword
  if (body.password) {
    if (!body.oldPassword) {
      return res.status(400).json({
        msg: 'Ingresa oldPassword',
      });
    } else {
      //Obtenemos el usuario para comparar contraseña y si no exite avisar
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({
          msg: 'El usuario que intentas modificar no existe',
        });
      }
      //Verificamos que la contraseña anterior coincida
      const isValid = await bcrypt.compare(body.oldPassword, user.password);
      if (!isValid) {
        return res.status(403).json({
          msg: 'La antigua contraseña no es valida.',
        });
      } else {
        const hashed = await bcrypt.hash(body.password, 10);
        body.password = hashed;
      }
    }
  }
  if (body.oldPassword) {
    delete body.oldPassword;
  }
  //Actualizamos el usuario
  try {
    const user = await User.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.json({
      msg: 'Usuario modificado',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar usuario',
      error,
    });
  }
};

export { update };