import Review from "../models/Review.js";

const create = async (req, res) => {
  try {
    req.body.user = req.user.id
    const review = await Review.review(req.body)
    return res.json({ msg: 'Review Created', review })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error creating review',
      error
    })
  }
}

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

export { create, edit };



