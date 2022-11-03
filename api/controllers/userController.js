import User from "../models/User";
const verifyUser = async (req, res) => {
  const { token } = req.params;
  try {
    const payload = jwt.decode(token, config.jwtSecret);
    const { userId, isVerified } = payload;
    const verified = await User.findByIdAndUpdate(
      userId,
      { isVerified: isVerified },
      {
        new: true,
      }
    );
    return res.json({ msg: "Usuario verificado correctamente" ,verified});
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar usuario",
      error,
    });
  }
};
export { verifyUser };
