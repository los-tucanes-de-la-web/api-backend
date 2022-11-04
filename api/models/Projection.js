import mongoose from 'mongoose';

const projectionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  language: {
    type: String,
    required: true,    
  },
  subtitles: {
    type: String,
    required: true,
  },
  cinema:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Cinema',
  },
  movie:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Movie',
  },
  price:{
    type: Number,
    required: true,
  },
  isDeleted: { 
    type: Boolean, 
    defaults: false }
});

export default mongoose.model('Projection', projectionSchema);