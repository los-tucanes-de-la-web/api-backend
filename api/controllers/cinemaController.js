import Cinema from '../models/Cinema.js';

const remove = async (req, res) => {
    const { id } = req.params;
  try {
    const cinema = await Cinema.findByIdAndUpdate(id, { isDeleted: true },
        {new:true},
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


const create = async (req, res) => {
  try {
    const cinema = await Cinema.create(req.body);
    return res.json({
      msg: 'Cine creado satisfactoriamente :)',
      cinema,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al intentar crear un cine',
      error,
    });
  }
};

export { create };
