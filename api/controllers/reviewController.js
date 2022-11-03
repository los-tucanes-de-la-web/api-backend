import Review from "../models/Review.js";

const edit = async (req, res) => {
  const { id } = req.params;
  const { authorization: token } = req.headers;
  const payload = jwt.decode(token, config.jwtSecret);
  const { userId } = payload;
  try {
    const searchComment = await Review.findById(id).populate("user");
    if (!searchComment) {
      return res.status(404).json({
        msg: "Review not founded",
      });
    }
    const { user } = searchUser;
    if (user.id !== userId) {
      return res.status(403).json({
        msg: "You don't have permissions",
      });
    }
    const review = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({ msg: "Review Edited", review });

  } catch (error) {
    return res.status(500).json({
      msg: "Error al editar comentario",
      error,
    });
  }
};

export { edit };
