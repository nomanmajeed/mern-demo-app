const express = require("express");
const employeeRouter = express.Router();
const employeeController = require('../conrollers/employeeController');

employeeRouter
  .route("/")
  .get(employeeController.index)
  .post(employeeController.create);

employeeRouter
  .route("/:id")
  .get(employeeController.show)
  .patch(employeeController.update)
  .delete(employeeController.delete);

module.exports = employeeRouter;
