const mongoose = require("mongoose");
const Seat = require("./Seat");

// Hàm tạo số ghế
function generateSeats(seatsCount, prefix) {
  const seats = [];
  for (let i = 1; i <= seatsCount; i++) {
    const seatId = `${prefix}${i.toString().padStart(2, "0")}`;
    seats.push({ id: seatId, status: "available" });
  }
  return seats;
}

const tripSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Please provide an id"],
      unique: true,
    },
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
    busType: {
      type: String,
      required: [true, "Please provide a bus type"],
    },
    seats: {
      tangDuoi: [Seat.schema],
      tangTren: [Seat.schema],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);
