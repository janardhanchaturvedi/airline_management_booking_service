const {Booking} = require("./../models")

class BookingRespository extends CrudRepository {
  constructor() {
    super(Booking);
  }
}

module.exports = BookingRespository;