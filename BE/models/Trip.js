const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      ref: "Station",
      required: [true, "Please provide a starting point"],
    },
    to: {
      type: String,
      ref: "Station",
      required: [true, "Please provide a destination"],
    },
    formTime: {
      type: Date,
      required: [true, "Please provide a starting time"],
    },
    toTime: {
      type: Date,
      required: [true, "Please provide an arrival time"],
    },
    duration: {
      type: String,
      required: [true, "Please provide a duration"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },
    seats: {
      type: Number,
      required: [true, "Please provide the number of seats"],
    },
    busType: {
      type: String,
      required: [true, "Please provide a bus type"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);
