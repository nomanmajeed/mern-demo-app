const connect = require('./../database/db')
const { ObjectId } = require("mongodb");

exports.index = async (req, res) => {
    const db = await connect();
    const employees = await db.collection("employee").find().toArray();
    res.json(employees);
  }

exports.create = async (req, res) => {
    const db = await connect();

    db.collection('employee').insertOne(req.body);
    res.json({
      data: `Employee is Stored with Name ${req.body.name} and name ${req.body.designation}`,
    });
  }

exports.show = async (req, res) => {
    const _id = ObjectId(req.params.id)
    const db = await connect()
    const employee = await db.collection('employee').find({_id}).toArray();
    res.json(employee);
  }

exports.update = async (req, res) => {
    const _id = ObjectId(req.params.id)
    const db = await connect()
    await db.collection('employee').updateOne({ _id }, { $set : req.body})
    res.json({data : `Employee with ID: ${req.params.id} is updated`});
  }

exports.delete = async (req, res) => {
    const _id = ObjectId(req.params.id)
    const db = await connect()
    await db.collection('employee').deleteOne({ _id })
    res.status(204).json();
  }