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
  const { id:userId} = req.user;
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


const remove = async (req, res) => {
    const { id } = req.params
    try {
        const reviewId = await Review.findByIdAndUpdate(id, 
            {enabled: false},
            {new:true})
        return res.json({
            msg: "Review disabled successfully",
            reviewId
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error disabling the review",
            error
        })
    }
}

export { create, edit ,remove }

