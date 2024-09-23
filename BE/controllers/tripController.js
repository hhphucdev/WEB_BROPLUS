const Trip = require("../models/Trip");

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
    try {
      const { from, to, formTime, toTime, duration, price, seats, busType } =
        req.body;

      if (
        !from ||
        !to ||
        !formTime ||
        !toTime ||
        !duration ||
        !price ||
        !seats ||
        !busType
      ) {
        return res
          .status(400)
          .json({ message: "Vui lòng cung cấp đầy đủ thông tin chuyến đi." });
      }

      const newTrip = new Trip({
        from,
        to,
        formTime,
        toTime,
        duration,
        price,
        seats,
        busType,
      });

      const trip = await newTrip.save();

      return res.status(201).json(trip);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Lỗi khi tạo chuyến đi: ${err.message}` });
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
  },
};

module.exports = tripController;
