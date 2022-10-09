const express = require('express');
const app = express();
const PORT = 5000;
const routes = require('./routes/index')

app.use(express.json());

app.use(routes)

app.listen(PORT, ()=>{
    console.log(`App is running at http://localhost:${PORT}`)
})