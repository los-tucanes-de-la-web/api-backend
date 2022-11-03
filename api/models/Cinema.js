import mongoose from 'mongoose';

const cinemaSchema = new mongoose.Schema({
  adress: String,
  numberOfSeats: Number,
  name:String,
});

export default mongoose.model('Cinema', cinemaSchema);