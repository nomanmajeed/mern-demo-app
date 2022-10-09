const express = require('express');
const router = express.Router();
const employeeRoute = require('./employee')

router.get('/',(req, res) => {
        res.send('Home Page')
    })

router.use('/employee', employeeRoute)

router.all('/*', (req, res) => {
    res.send(`Page Not Found`)
})

module.exports = router;