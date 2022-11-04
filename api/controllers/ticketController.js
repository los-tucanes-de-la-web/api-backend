import Ticket from '../models/Ticket.js';

const softDelete = async (req, res) => {
    const {id: ticketId} = req.params
    try {
        const ticketsoftDelete = await Ticket.findByIdAndUpdate(ticketId, {isDeleted: true,}, {new: true,})
        return res.json ({
            msg: 'Ticket eliminado',
            ticketsoftDelete,
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar el ticket',
        });

        
    }

};

export {softDelete};