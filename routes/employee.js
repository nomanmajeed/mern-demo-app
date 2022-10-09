const express = require('express');
const employeeRouter = express.Router();

employeeRouter
    .route('/')
    .get((req, res) => {
        res.send('Employees List')
    })
    .post((req, res) => {
        res.json({data: `Employee is Stored with ID ${req.body.id} and name ${req.body.name}`})
    })

employeeRouter.get('/:id', (req, res) => {
    res.send(`Employee with ID: ${req.params.id}`)
})

module.exports = employeeRouter;