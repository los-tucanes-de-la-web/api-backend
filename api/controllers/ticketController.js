import Ticket from '../models/Ticket.js';

const create = async(req, res)=>{
    try{
        req.body.user = req.user.id
        const ticket = await Ticket.create(req.body);
        return res.json({
            msg: 'ticket created successfully',
            ticket,
        });
    }catch(error){
        return res.status(500).json({
            msg: 'Error creating ticket',
            error
        })
    }
}


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

export {create, softDelete};
