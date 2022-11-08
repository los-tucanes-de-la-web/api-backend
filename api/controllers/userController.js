import User from '../models/User.js';
import config from '../config/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

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

//leer todos los usuarios
const read = async (req, res) => {
  try {
    const users = await User.find(req.query);
    return res.json({
      msg: 'usuarios encontrados',
      users,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar items',
      error,
    });
  }
};

//leer el usuario especifico

const readById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.json({
      msg: 'usuario ubicado',
      user,
    });
  } catch (error) {
    return res.json({
      msg: 'Error al buscar por id',
      error,
    });
  }
};

const verifyUser = async (req, res) => {
  const { token } = req.params;
  try {
    const payload = jwt.decode(token, config.jwtSecret);
    const { userId } = payload;
    const verified = await User.findByIdAndUpdate(
      userId,
      { isVerified: true },
      {
        new: true,
      }
    );
    return res.json({ msg: 'Usuario verificado correctamente', verified });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar usuario',
      error,
    });
  }
};

const login = async (req, res) => {
  /**
   * 1.- verificar que venga email y password ✅
   * 2.- Buscar en base de datos si existe ese usuario con ese email ✅
   *    Si no existe -> 401
   * 3.- Verificamos que el password sea correcto bcrypt.compare ✅
   *    Si no es correcta la contraseña -> 403
   * 4.- Solo los usuarios que ya hayan sido verificados
   *     pueden iniciar sesión (los que tengan isVerfied: true)
   * 4.- Crear token y mandarlo
   */

  /**
   * A      codificar  B
   * payload  -> 🔑   token
   * 97291u2bd12    -> 18273u912easkdujhaskjd
   * token    -> 🔑   payload
   */

  // Pregunta por el usuario y contraseña
  const { body } = req;
  if (!body.password || !body.email) {
    return res.status(400).json({
      msg: 'Ingresa correo y contraseña',
    });
  }
  try {
    // Busca el usuario unico en la BD busco correo electronico
    const user = await User.findOne({
      email: body.email,
    });
    // Validamos si el usuario exite
    if (!user) {
      return res.status(403).json({
        msg: 'Credenciales inválidas',
      });
    }

    // Validamos si el usuario tiene el correo verificado
    if (!user.isVerified) {
      return res.status(407).json({
        msg: 'Correo no verificado',
      });
    }

    // compara el password enviado con el de la base de datos
    const isValid = await bcrypt.compare(body.password, user.password);

    // Compara si es valido el password
    if (!isValid) {
      return res.status(403).json({
        msg: 'Credenciales inválidas',
      });
    }

    const payload = {
      userId: user.id,
    };
    // este es el Token @.
    const token = jwt.encode(payload, config.jwtSecret);
    return res.json({
      msg: 'login correcto',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error la hacer login',
      error,
    });
  }
};

export { verifyUser, read, readById, login, update };
