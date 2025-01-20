const { StatusCodes } = require("http-status-codes");
const getInfo = (req, res) => {
  return res.status(StatusCodes.OK).json({
    sucess: true,
    message: "API is live",
    error: {},
    data: {},
  });
};

module.exports = {
  getInfo,
};
