const {Booking} = require("./../models")

class BookingRespository extends CrudRepository {
  constructor() {
    super(Booking);
  }
  async createBooking(data, transaction) {
    const response = await Booking.create(data, {transaction: transaction});
    return response;
} 
}

module.exports = BookingRespository;