import mongoose from 'mongoose'; 

const ticketSchema =  new mongoose.Schema({

    projection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projection'},
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'},
    number_of_tickets: Number,
    subtotal: Number,
    discount: Number,
    total: Number,

})

export default mongoose.model('Ticket', ticketSchema);
