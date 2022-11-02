import Movie from '../models/Movie.js';

const create = async (req, res) => {
    try {
      const movie = await Movie.create(req.body);
      return res.json({ msg: 'Movie Created', movie });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al crear película',
        error,
      });
    }
  };

  export { create};