import Projection from "../models/Projection.js"

const update = async (req, res) => {
    const { id } = req.params
    try {
        const updateProjection = await Projection.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return res.json({
            msg: "Projection updated successfully",
            updateProjection
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error updating the projection",
            error
        })
    }
}

export {update}