const dotenv = require("dotenv");

dotenv.config({
  path: ".env",
});

module.exports = {
  PORT: process.env.PORT || 4000,
  FLIGHT_SERVICE: process.env.FLIGHT_SERVICE,
};
