const express = require("express");
const employeeRouter = express.Router();
const bookController = require('./../conrollers/bookController');
const connect = require('./../database/db')
const { ObjectId } = require("mongodb");

employeeRouter
  .route("/")
  .get(bookController.index)
  .post(bookController.create);

employeeRouter
  .route("/:id")
  .get(bookController.show)
  .patch(bookController.update)
  .delete(bookController.delete);

module.exports = employeeRouter;
