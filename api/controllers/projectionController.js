import Projection from '../models/Projection.js';

const create = async (req, res) => {
    try {
      const projection = await Projection.create(req.body);
      return res.json({
      msg: 'Projection created successfully', 
      projection 
    });
    } catch (error) {
      return res.status(500).json({
        msg: 'error creating projection',
        error,
      });
    }
  };

  export {create};