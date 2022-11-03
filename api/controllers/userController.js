
import User from "../models/User.js"
import config from '../config/index.js';
//leer todos los usuarios
const read = async (req, res) => {

    try {
        const users = await User.find(req.query);
        return res.json({
            msg:"usuarios encontrados",
            users,
        })
    } catch (error) {
        return  res.status(500).json({
            msg:"Error al buscar items",
            error,
        })
    }
}

//leer el usuario especifico

const readById = async(req,res)=>{
    const id = req.params;
    try{
        const user = await User.findById(id);
        return res.json({
            msg:"usuario ubicado",
            user,
        })
    }catch(error){
        return res.json({
            msg: "Error al buscar por id",
            error,
        })
    }
}

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
export { verifyUser,read, readById };
