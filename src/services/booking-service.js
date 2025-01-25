const axios = require("axios");

const db = require("../models");
const { FLIGHT_SERVICE } = require("../config/server-config");
const AppError = require("../utils/errors/app-errors");
const { StatusCodes } = require("http-status-codes");

async function createBooking(data) {
  try {
    const result = db.sequelize.transaction(async function bookingImpl(t) {
      const flight = await axios.get(
        `${FLIGHT_SERVICE}/flights/${data.flightId}`
      );
      if (data.noOfSeats > flight.totalSeats) {
        throw {
          message: "No of seats exceeds available seats",
        };
      }

      return result;
    });
  } catch (error) {
    console.log("🚀 ~ createBooking ~ error:", error);
    console.log("🚀 ~ result ~ flight:", flight);
    // throw new AppError(
    //   "Required no of seats not available",
    //   StatusCodes.INTERNAL_SERVER_ERROR
    // );
    throw error;
  }
}

module.exports = { createBooking };
