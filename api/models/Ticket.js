import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  projection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projection',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  numberOfTickets: Number,
  subtotal: Number,
  discount: Number,
  total: Number,
});

export default mongoose.model('Ticket', ticketSchema);
