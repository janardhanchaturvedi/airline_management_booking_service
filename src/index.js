const express = require("express");
const { serverConfig, Logger } = require("./config/index");
const app = express();
const apiRoutes = require("./routes");
const { CRON_JOB } = require("./utils/common");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Successfully started server on port  + ${serverConfig.PORT}`);
  CRON_JOB();
});
