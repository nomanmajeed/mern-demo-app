const { mongoose } = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema, "employee");