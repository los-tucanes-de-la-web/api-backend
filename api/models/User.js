import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'employee'],
    required: true,
    default: 'user',
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('User', userSchema);
