import Cinema from '../models/Cinema.js';

const remove = async (req, res) => {
    const { id } = req.params;
  try {
    const cinema = await Cinema.findByIdAndUpdate(id, { isDeleted: true }
    );
    return res.json({
      msg: 'Cinema eliminado',
      cinema,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al eliminar cinema',
      error,
    });
  }
  };

export {remove}


