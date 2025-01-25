const express = require("express");
const router = express.Router();
const { InfoController } = require("./../../controllers");
const bookingRoutes = require("./booking-routes");

router.get("/info", InfoController.getInfo);

router.use("/booking", bookingRoutes);

module.exports = router;
