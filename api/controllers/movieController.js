import Movie from "../models/Movie.js"

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

const update = async (req, res) => {
    const { id } = req.params
    try {
        const updateMovie = await Movie.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return res.json({
            msg: "Movie updated successfully",
            updateMovie
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error updating the movie",
            error
        })
    }
}

export { create, update};
