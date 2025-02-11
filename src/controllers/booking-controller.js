const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const inMemDb = {};
async function createBooking(req, res, next) {
  try {
    const response = await BookingService.createBooking({
      flightId: req.body.flightId,
      userId: req.body.userId,
      noOfSeats: req.body.noOfSeats,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function makePayment(req, res) {
  try {

    const idempotencyKey = req.headers['x-idempotency-key'];
        if(!idempotencyKey ) {
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json({message: 'idempotency key missing'});
        }
        if(inMemDb[idempotencyKey]) {
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json({message: 'Cannot retry on a successful payment'});
        } 
      const response = await BookingService.makePayment({
          totalCost: req.body.totalCost,
          userId: req.body.userId,
          bookingId: req.body.bookingId
      });
      inMemDb[idempotencyKey] = idempotencyKey;
      SuccessResponse.data = response;
      return res
              .status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch(error) {
      ErrorResponse.error = error;
      return res
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

module.exports = { createBooking , makePayment };
