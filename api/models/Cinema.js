import mongoose from 'mongoose';

const cinemaSchema = new mongoose.Schema({
  adress: String,
  numberOfSeats: Number,
  name:String,
  isDeleted: { type: Boolean, defaults: false }
});

export default mongoose.model('Cinema', cinemaSchema);