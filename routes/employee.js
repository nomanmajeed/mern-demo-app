const express = require("express");
const employeeRouter = express.Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middleware/auth');

employeeRouter
  .use(authMiddleware)
  .route("/")
  .get(employeeController.index)
  .post(employeeController.create);

employeeRouter
  .route("/:id")
  .get(employeeController.show)
  .patch(employeeController.update)
  .delete(employeeController.delete);

module.exports = employeeRouter;
