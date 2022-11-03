import Review from '../models/Review.js'

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

export { create }
