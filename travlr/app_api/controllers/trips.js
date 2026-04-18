const mongoose = require('mongoose');
const Trip = require('../models/travlr');

// GET: /trips - lists all the trips
const tripList = async (req, res) => {
    try {
        const q = await Trip
            .find({})
            .exec();

        if (!q || q.length === 0) {
            return res
                .status(404)
                .json({ "message": "No trips found" });
        } else {
            return res
                .status(200)
                .json(q);
        }
    } catch (err) {
        return res
            .status(500)
            .json(err);
    }
};

// GET: /trips/:tripCode - finds a single trip by code
const tripsFindCode = async (req, res) => {
    try {
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
    } catch (err) {
        return res
            .status(500)
            .json(err);
    }
};

// POST: /trips - adds a new trip
const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = await Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        return res
            .status(201)
            .json(newTrip);
    } catch (err) {
        return res
            .status(400)
            .json(err);
    }
};

// PUT: /trips/:tripCode - updates an existing trip
const tripsUpdateTrip = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode }).exec();

        if (!trip) {
            return res
                .status(404)
                .json({ "message": "tripCode not found" });
        }

        trip.code = req.body.code || trip.code;
        trip.name = req.body.name || trip.name;
        trip.length = req.body.length || trip.length;
        trip.start = req.body.start || trip.start;
        trip.resort = req.body.resort || trip.resort;
        trip.perPerson = req.body.perPerson || trip.perPerson;
        trip.image = req.body.image || trip.image;
        trip.description = req.body.description || trip.description;

        const updatedTrip = await trip.save();

        return res
            .status(200)
            .json(updatedTrip);
    } catch (err) {
        return res
            .status(400)
            .json(err);
    }
};

// DELETE: /trips/:tripCode - deletes a trip
const tripsDeleteTrip = async (req, res) => {
    try {
        const trip = await Trip.findOneAndDelete({ code: req.params.tripCode }).exec();

        if (!trip) {
            return res
                .status(404)
                .json({ "message": "tripCode not found" });
        }

        return res
            .status(200)
            .json({ "message": "Trip deleted successfully" });
    } catch (err) {
        return res
            .status(500)
            .json(err);
    }
};

module.exports = {
    tripList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};
