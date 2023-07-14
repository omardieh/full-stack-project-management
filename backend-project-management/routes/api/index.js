const apiRouter = require("express").Router();
const projectRouter = require("./project.routes");
const taskRouter = require("./task.routes");

apiRouter.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = {
  apiRouter,
  projectRouter,
  taskRouter,
};
