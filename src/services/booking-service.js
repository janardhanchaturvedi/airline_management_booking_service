const axios = require("axios");

const db = require("../models");
const { FLIGHT_SERVICE } = require("../config/server-config");
const AppError = require("../utils/errors/app-errors");
const { StatusCodes } = require("http-status-codes");

async function createBooking(data) {
  return new Promise((resolve, reject) => {
    const result = db.sequelize.transaction(async function bookingImpl(t) {
      const response = await  axios.get(
        `${FLIGHT_SERVICE}/flights/${data.flightId}`
      );

      const flightData = response.data;
      if (data.noOfSeats > flightData.totalSeats) {
        reject(
          new AppError("No enough seats available", StatusCodes.BAD_REQUEST)
        );
      }
      resolve(true);

    });
  });
}

module.exports = { createBooking };
