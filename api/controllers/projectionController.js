import Projection from '../models/Projection.js';

const create = async (req, res) => {
  try {
    const projection = await Projection.create(req.body);
    return res.json({
      msg: 'Projection created successfully',
      projection,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'error creating projection',
      error,
    });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const updateProjection = await Projection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: 'Projection updated successfully',
      updateProjection,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error updating the projection',
      error,
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
try {
  const projection = await Projection.findByIdAndUpdate(id, 
    {isDeleted: true},
    {new: true});    
  return res.json({
    msg: 'Projection deleted',
    projection,
  });
} catch (error) {
  return res.status(500).json({
    msg: 'Error deleting the projection',
    error,
  });
}
};

export { create, update, remove };
