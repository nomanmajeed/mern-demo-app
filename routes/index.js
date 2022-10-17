const express = require('express');
const router = express.Router();
const employeeRoute = require('./employee')
const authRoute = require('./auth')

router.get('/',(req, res) => {
        res.send('Home Page')
    })

router.use('/employee', employeeRoute)
router.use('/auth', authRoute)

router.all('/*', (req, res) => {
    res.send(`Page Not Found`)
})

module.exports = router;