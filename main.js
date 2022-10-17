const express = require('express');
const routes = require('./routes/index')
const connectDB = require('./database/db')

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(routes)

connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  });