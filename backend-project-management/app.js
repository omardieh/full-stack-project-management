require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

const { apiRouter, projectRouter, taskRouter } = require("./routes/api");

app.use("/api", apiRouter);
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRouter);

require("./error-handling")(app);

module.exports = app;
