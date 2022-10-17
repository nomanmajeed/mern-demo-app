const connect = require('../database/db')
const Employee = require('./../models/employee')
const { ObjectId } = require("mongodb");

exports.index = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
  }

exports.create = async (req, res) => {
    try {
      
      await Employee.create(req.body);
      res.status(201).json({
        data: `Employee is Stored with Name ${req.body.name} and name ${req.body.designation}`,
      });
      
    } catch (error) {
      res.json(error.errors)
    }
  }

exports.show = async (req, res) => {
    const _id = ObjectId(req.params.id)
    const employee = await Employee.find({_id});
    res.json(employee);
  }

exports.update = async (req, res) => {
    const _id = ObjectId(req.params.id)
    await Employee.updateOne({ _id }, { $set : req.body})
    res.json({data : `Employee with ID: ${req.params.id} is updated`});
  }

exports.delete = async (req, res) => {
    const _id = ObjectId(req.params.id)
    await Employee.deleteOne({ _id })
    res.status(204).json();
  }