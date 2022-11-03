import Review from "../models/Review.js"

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

const remove = async (req, res) => {
    const { id } = req.params
    try {
        const reviewId = await Review.findByIdAndUpdate(id, {enabled: false}, {new:true})
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

export { create, remove }