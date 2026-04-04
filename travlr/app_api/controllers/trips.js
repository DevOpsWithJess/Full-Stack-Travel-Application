const mongoose = require('mongoose');
const Trip = require('../models/travlr');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTTP status code
// and JSON message
const tripList = async (req, res) => {
    const q = await Trip
        .find({})
        .exec();

// Uncomment the following lines to simulate a database error
    if (!q) {
        // Database returned no data
        return res
            .status(404)
            .json(err);
    } else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindCode = async (req, res) => {
    const q = await Trip
        .find({ 'code': req.params.tripCode })
        .exec();

    if (!q || q.length === 0) {
        return res
            .status(404)
            .json({ "message": "tripCode not found" });
    } else {
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripList,
    tripsFindCode
};
