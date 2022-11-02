import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jwt-simple";
import { config } from "../config/index.js";

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
      msg: "Ingresa correo y contraseña",
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
        msg: "Credenciales inválidas",
      });

      // Validamos si el usuario tiene el correo verificado
      if (!isVerified) {
        return res.status(407).json({
          msg: "Correo no verificado",
        });
      }
    }
    // compara el password enviado con el de la base de datos
    const isValid = await bcrypt.compare(body.password, user.password);

    // Compara si es valido el password
    if (!isValid) {
      return res.status(403).json({
        msg: "Credenciales inválidas",
      });
    }

    const payload = {
      userid: user.id,
    };
    // este es el Token @.
    const token = jwt.encode(payload, config.jwtSecret);
    return res.json({
      msg: "login correcto",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error la hacer login",
      error,
    });
  }
};

export { login };
