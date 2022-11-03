import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  comment: String,
  rating: Number,
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  enabled: Boolean,
});

export default mongoose.model('Review', reviewSchema);
