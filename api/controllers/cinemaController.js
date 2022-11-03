import { Cinema } from '../models/Cinema.js'

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

export { create};