import Review from "../models/Review.js"

const remove = async (req, res) => {
    const { id } = req.params
    try {
        const reviewId = await Review.findByIdAndUpdate(id, {enabled: false})
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

export {remove}