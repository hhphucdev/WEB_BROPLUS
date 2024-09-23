const Trip = require('../models/Trip');

const tripController = {
    //GET ALL TRIPS
    getAllTrips: async (req, res) => {
        try {
            const trips = await Trip.find();
            res.status(200).json(trips);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    //CREATE TRIP
    createTrip: async (req, res) => {
        const newTrip = new Trip(req.body);
        try {
            const savedTrip = await newTrip.save();
            res.status(201).json(savedTrip);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    //DELETE TRIP
    deleteTrip: async (req, res) => {
        try {
            await Trip.findByIdAndDelete(req.params.id);
            res.status(200).json("Trip deleted");
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = tripController;