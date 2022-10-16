const express = require("express");
const employeeRouter = express.Router();
const connect = require('./../database/db')
const { ObjectId } = require("mongodb");

employeeRouter
  .route("/")
  .get(async (req, res) => {
    const db = await connect();
    const employees = await db.collection("employee").find().toArray();
    res.json(employees);
  })
  .post(async (req, res) => {
    const db = await connect();

    db.collection('employee').insertOne(req.body);
    res.json({
      data: `Employee is Stored with Name ${req.body.name} and name ${req.body.designation}`,
    });
  });

employeeRouter
  .route("/:id")
  .get(async (req, res) => {
    const _id = ObjectId(req.params.id)
    const db = await connect()
    const employee = await db.collection('employee').find({_id}).toArray();
    res.json(employee);
  })
  .patch(async (req, res) => {
    const _id = ObjectId(req.params.id)
    const db = await connect()
    await db.collection('employee').updateOne({ _id }, { $set : req.body})
    res.json({data : `Employee with ID: ${req.params.id} is updated`});
  })
  .delete(async (req, res) => {
    const _id = ObjectId(req.params.id)
    const db = await connect()
    await db.collection('employee').deleteOne({ _id })
    res.status(204).json();
  });

module.exports = employeeRouter;
